from django.shortcuts import render, HttpResponse, redirect
import urllib.request
import csv
import copy
import argparse
import itertools
from collections import Counter
from collections import deque
import _thread
import time
import pyautogui

import cv2 as cv
import numpy
import numpy as np
import mediapipe as mp
import easyocr

import torch
from GRU import GRU


from utils import CvFpsCalc
from model import KeyPointClassifier
from model import PointHistoryClassifier
from django.http import StreamingHttpResponse
GESTURE_MODE = {
    0 : 'CLEAR', #  STOP
    1 : 'OCR', # FIST
    8 : 'MOUSE_UP', #  UP ************************互换 ONE**********************
    2 : 'WRITE', #  OK
    4 : 'MOUSE_DOWN', #  DOWN
    5 : 'POLYGON', # FOUR
    6 : 'MOUSE_LEFT_CLICK', # LEFT
    7 : 'MOUSE_RIGHT_CLICK', # RIGHT
    3 : 'MOUSE_MOVE', # ONE **********************互换 UP***********************
    9 : 'CIRCLE', # YEAH

    10 : 'VIEW'
}

WIDTH = 640
HEIGHT = 480





class GestureRecognition:
    def __init__(self, use_static_image_mode=False, min_detection_confidence=0.7, min_tracking_confidence=0.7,
                 history_length=16):
        self.use_static_image_mode = use_static_image_mode
        self.min_detection_confidence = min_detection_confidence
        self.min_tracking_confidence = min_tracking_confidence
        self.history_length = history_length

        # 读取模型
        self.hands, self.keypoint_classifier, self.keypoint_classifier_labels, \
        self.point_history_classifier, self.point_history_classifier_labels = self.load_model()

        # 保存板书的点集
        self.point_history = []

        # 手势状态初始
        self.gesture_mode = 'VIEW'

        # 记录当前有几帧是同样的手势
        self.gesture_counter = 0
        self.gesture_id = 0

        # 保存基本图形绘制的
        self.polygons = []
        # self.rectangles = []
        self.circles = []

        # ocr
        self.reader = easyocr.Reader(['ch_sim','en'], gpu=False) # this needs to run only once to load the model into memory
        self.character = []

        # 保存历史手势
        self.history_gesture_mode = deque(maxlen=history_length)

    def character_recognise(self, shape):
        disImg = np.zeros(shape, dtype=numpy.uint8)
        for j in range(1, len(self.point_history)):
            if self.point_history[j - 1][0] != 0 and self.point_history[j - 1][1] != 0 and self.point_history[j][0] != 0:
                cv.line(disImg, (self.point_history[j - 1][0], self.point_history[j - 1][1]),
                        (self.point_history[j][0], self.point_history[j][1]), (255, 255, 255), 2, 6, 0)
        disImg = 255 - disImg
        self.character = self.reader.readtext(disImg)
        _thread.exit()


    def load_model(self):
        # Model load #############################################################
        mp_hands = mp.solutions.hands
        hands = mp_hands.Hands(
            static_image_mode=self.use_static_image_mode,
            max_num_hands=1,
            min_detection_confidence=self.min_detection_confidence,
            min_tracking_confidence=self.min_tracking_confidence,
        )

        keypoint_classifier = KeyPointClassifier()
        point_history_classifier = PointHistoryClassifier()

        # Read labels ###########################################################
        with open('../model/keypoint_classifier/keypoint_classifier_label.csv',
                  encoding='utf-8-sig') as f:
            keypoint_classifier_labels = csv.reader(f)
            keypoint_classifier_labels = [
                row[0] for row in keypoint_classifier_labels
            ]
        with open(
                '../model/point_history_classifier/point_history_classifier_label.csv',
                encoding='utf-8-sig') as f:
            point_history_classifier_labels = csv.reader(f)
            point_history_classifier_labels = [
                row[0] for row in point_history_classifier_labels
            ]

        return hands, keypoint_classifier, keypoint_classifier_labels, \
               point_history_classifier, point_history_classifier_labels

    def recognize(self, image, number=-1, mode=0):

        # bounding_rect
        USE_BRECT = True
        rel = 0
        confidence = 0

        image = cv.flip(image, 1)  # Mirror display
        debug_image = copy.deepcopy(image)
        hand_sign_id = 0

        ############Detection implementation #############################################################
        image = cv.cvtColor(image, cv.COLOR_BGR2RGB)

        image.flags.writeable = False
        results = self.hands.process(image)
        image.flags.writeable = True

        ### init ########################################
        mp_drawing = mp.solutions.drawing_utils  # 坐标点绘制工具
        mp_hands = mp.solutions.hands
        movement = {0: "点击", 1: "平移", 2: "缩放", 3: "抓取", 4: "旋转", 5: "无", 6: "截图", 7:'放大'}
        S = 0  # 每帧的处理时间
        device = torch.device('cpu')  # 初始化于cpu上处理
        if torch.cuda.is_available():  # 判断是否能使用cuda
            device = torch.device('cuda:0')

        model = torch.load(r'model.pt', map_location='cpu').to(device)  # 载入模型
        # print(model)
        hiddem_dim = 30  # 隐藏层大小
        num_layers = 2  # GRU层数

        h_t = torch.zeros(num_layers, 1, hiddem_dim)  # 初始化全0的h_t
        h_t = h_t.to(device)  # 载入设备

        last_gesture = '无'  # 初始化最后输出，用于判断是否与当前输出一致
        prin_time = time.time()  # 初始化输出时间



        #####################################################################
        if results.multi_hand_landmarks is not None:
            # 判断手掌个数
            if len(results.multi_handedness) == 1 and results.multi_handedness[0].classification.__getitem__(0).index == 1:
                # 判断左右手先后
                for hand_landmarks in results.multi_hand_landmarks:
                    mp_drawing.draw_landmarks(
                        image, hand_landmarks, mp_hands.HAND_CONNECTIONS)
                    index_1 = []
                    # 将指关节点数据依次存入index
                    for k in range(0, 21):
                        index_1.append(hand_landmarks.landmark[k].x)
                        index_1.append(hand_landmarks.landmark[k].y)
                        index_1.append(hand_landmarks.landmark[k].z)
                    for k_1 in range(0, 63):
                        index_1.append(0)
                # 最后将index（126）添加至in_dim（x，126）末尾
                in_dim = torch.from_numpy(np.array(index_1))
            elif len(results.multi_handedness) == 1 and results.multi_handedness[0].classification.__getitem__(0).index == 0:
                for hand_landmarks in results.multi_hand_landmarks:
                    mp_drawing.draw_landmarks(
                        image, hand_landmarks, mp_hands.HAND_CONNECTIONS)
                    index_0 = []
                    for k_1 in range(0, 63):
                        index_0.append(0)
                    for k in range(0, 21):
                        index_0.append(hand_landmarks.landmark[k].x)
                        index_0.append(hand_landmarks.landmark[k].y)
                        index_0.append(hand_landmarks.landmark[k].z)
                in_dim = torch.from_numpy(np.array(index_0))
            elif len(results.multi_handedness) == 2 and results.multi_handedness[0].classification.__getitem__(0).index == 1:
                index_1_first = []
                for hand_landmarks in results.multi_hand_landmarks:
                    mp_drawing.draw_landmarks(
                        image, hand_landmarks, mp_hands.HAND_CONNECTIONS)
                    for k in range(0, 21):
                        index_1_first.append(hand_landmarks.landmark[k].x)
                        index_1_first.append(hand_landmarks.landmark[k].y)
                        index_1_first.append(hand_landmarks.landmark[k].z)
                in_dim = torch.from_numpy(np.array(index_1_first))
            elif len(results.multi_handedness) == 2 and results.multi_handedness[0].classification.__getitem__(0).index == 0:
                results.multi_hand_landmarks.reverse()
                index_0_first = []
                for hand_landmarks in results.multi_hand_landmarks:
                    mp_drawing.draw_landmarks(
                        image, hand_landmarks, mp_hands.HAND_CONNECTIONS)

                    for k in range(0, 21):
                        index_0_first.append(hand_landmarks.landmark[k].x)
                        index_0_first.append(hand_landmarks.landmark[k].y)
                        index_0_first.append(hand_landmarks.landmark[k].z)
                in_dim = torch.from_numpy(np.array(index_0_first))

                # cv2.imshow('MediaPipe Hands', image)
                # cv2.waitKey(1)

                in_dim = in_dim.unsqueeze(dim=0)
                in_dim = in_dim.unsqueeze(dim=0)
                in_dim = in_dim.to(torch.float32).to(device)
                h_t = h_t.to(torch.float32).to(device)
                if time.time() - prin_time < 2:
                    in_dim = torch.zeros(1, 1, 126).to(device)

                rel, h_t = model((in_dim, h_t))
                rel = torch.sigmoid(rel)
                confidence, rel = rel.max(1)

                # 对每个动作设置单独的置信度阈值
                cfd = {'点击': 0.90, '平移': 0.90, '缩放': 0.99, '抓取': 0.985, '旋转': 0.99, '无': 0, '截图': 0.99, '放大': 0.9}
                if confidence > cfd[movement[rel.item()]]:  # 超过阈值的动作将会被输出
                    now_gesture = last_gesture
                    last_gesture = movement[rel.item()]
                    if not (now_gesture == last_gesture):  # 判断是否与上次的输出相同，若相同则不输出
                        if time.time() - prin_time > 2:  # 若距离上次输出时间小于2秒，则不输出
                            # print(movement[rel.item()], ' \t置信度：', round(confidence.item(), 2))
                            self.win.set_gesture(movement[rel.item()])
                            prin_time = time.time()  # 重置输出时间
                            h_t = torch.zeros(num_layers, 1, hiddem_dim).to(device)  # 将当前的h_t重置
        print(rel)
        print(confidence)
        return debug_image, hand_sign_id , confidence
        # return debug_image, [k for k, v in GESTURE_MODE.items() if v == self.gesture_mode][0]


    def draw_point_history(self, image, point_history):
        for j in range(1, len(point_history)):
            if point_history[j - 1][0] != 0 and point_history[j - 1][1] != 0 and point_history[j][0] != 0:
                cv.line(image, (point_history[j - 1][0], point_history[j - 1][1]),
                     (point_history[j][0], point_history[j][1]), (255, 255, 0), 2, 6, 0)

        for polygon in self.polygons:
            cv.polylines(image, [polygon], True, (255, 0, 0), 2)

        # for rect in self.rectangles:
        #     cv.rectangle(image, (rect[0], rect[1]), (rect[0] + rect[2], rect[1] + rect[3]), (255,0,0), 2)

        for circle in self.circles:
            cv.circle(image, (int(circle[0]), int(circle[1])), int(circle[2]), (255, 0, 0), 2)


        return image

    def draw_info(self, image, fps, mode, number):
        # cv.putText(image, "FPS:" + str(fps), (10, 30), cv.FONT_HERSHEY_SIMPLEX,
        #            1.0, (0, 0, 0), 4, cv.LINE_AA)
        # cv.putText(image, "FPS:" + str(fps), (10, 30), cv.FONT_HERSHEY_SIMPLEX,
        #            1.0, (255, 255, 255), 2, cv.LINE_AA)

        mode_string = ['Logging Key Point', 'Logging Point History']
        if 1 <= mode <= 2:
            cv.putText(image, "MODE:" + mode_string[mode - 1], (10, 90),
                       cv.FONT_HERSHEY_SIMPLEX, 0.6, (255, 255, 255), 1,
                       cv.LINE_AA)
            if 0 <= number <= 9:
                cv.putText(image, "NUM:" + str(number), (10, 110),
                           cv.FONT_HERSHEY_SIMPLEX, 0.6, (255, 255, 255), 1,
                           cv.LINE_AA)
        return image

    def _logging_csv(self, number, mode, landmark_list, point_history_list):
        if mode == 0:
            pass
        if mode == 1 and (0 <= number <= 9):
            print("WRITE")
            csv_path = 'model/keypoint_classifier/keypoint.csv'
            with open(csv_path, 'a', newline="") as f:
                writer = csv.writer(f)
                writer.writerow([number, *landmark_list])
        if mode == 2 and (0 <= number <= 9):
            csv_path = 'model/point_history_classifier/point_history.csv'
            with open(csv_path, 'a', newline="") as f:
                writer = csv.writer(f)
                writer.writerow([number, *point_history_list])
        return

    def _calc_bounding_rect(self, image, landmarks):
        image_width, image_height = image.shape[1], image.shape[0]

        landmark_array = np.empty((0, 2), int)

        for _, landmark in enumerate(landmarks.landmark):
            landmark_x = min(int(landmark.x * image_width), image_width - 1)
            landmark_y = min(int(landmark.y * image_height), image_height - 1)

            landmark_point = [np.array((landmark_x, landmark_y))]

            landmark_array = np.append(landmark_array, landmark_point, axis=0)

        x, y, w, h = cv.boundingRect(landmark_array)

        return [x, y, x + w, y + h]

    def _calc_landmark_list(self, image, landmarks):
        image_width, image_height = image.shape[1], image.shape[0]

        landmark_point = []

        # Keypoint
        for _, landmark in enumerate(landmarks.landmark):
            landmark_x = min(int(landmark.x * image_width), image_width - 1)
            landmark_y = min(int(landmark.y * image_height), image_height - 1)
            # landmark_z = landmark.z

            landmark_point.append([landmark_x, landmark_y])

        return landmark_point

    def _pre_process_landmark(self, landmark_list):
        temp_landmark_list = copy.deepcopy(landmark_list)

        # Convert to relative coordinates
        base_x, base_y = 0, 0
        for index, landmark_point in enumerate(temp_landmark_list):
            if index == 0:
                base_x, base_y = landmark_point[0], landmark_point[1]

            temp_landmark_list[index][0] = temp_landmark_list[index][0] - base_x
            temp_landmark_list[index][1] = temp_landmark_list[index][1] - base_y

        # Convert to a one-dimensional list
        temp_landmark_list = list(
            itertools.chain.from_iterable(temp_landmark_list))

        # Normalization
        max_value = max(list(map(abs, temp_landmark_list)))

        def normalize_(n):
            return n / max_value

        temp_landmark_list = list(map(normalize_, temp_landmark_list))

        return temp_landmark_list

    def _pre_process_point_history(self, image, point_history):
        image_width, image_height = image.shape[1], image.shape[0]

        temp_point_history = copy.deepcopy(point_history)

        # Convert to relative coordinates
        base_x, base_y = 0, 0
        for index, point in enumerate(temp_point_history):
            if index == 0:
                base_x, base_y = point[0], point[1]

            temp_point_history[index][0] = (temp_point_history[index][0] -
                                            base_x) / image_width
            temp_point_history[index][1] = (temp_point_history[index][1] -
                                            base_y) / image_height

        # Convert to a one-dimensional list
        temp_point_history = list(
            itertools.chain.from_iterable(temp_point_history))

        return temp_point_history

    def _draw_landmarks(self, image, landmark_point):
        if len(landmark_point) > 0:
            # Thumb
            cv.line(image, tuple(landmark_point[2]), tuple(landmark_point[3]),
                    (0, 0, 0), 6)
            cv.line(image, tuple(landmark_point[2]), tuple(landmark_point[3]),
                    (255, 255, 255), 2)
            cv.line(image, tuple(landmark_point[3]), tuple(landmark_point[4]),
                    (0, 0, 0), 6)
            cv.line(image, tuple(landmark_point[3]), tuple(landmark_point[4]),
                    (255, 255, 255), 2)

            # Index finger
            cv.line(image, tuple(landmark_point[5]), tuple(landmark_point[6]),
                    (0, 0, 0), 6)
            cv.line(image, tuple(landmark_point[5]), tuple(landmark_point[6]),
                    (255, 255, 255), 2)
            cv.line(image, tuple(landmark_point[6]), tuple(landmark_point[7]),
                    (0, 0, 0), 6)
            cv.line(image, tuple(landmark_point[6]), tuple(landmark_point[7]),
                    (255, 255, 255), 2)
            cv.line(image, tuple(landmark_point[7]), tuple(landmark_point[8]),
                    (0, 0, 0), 6)
            cv.line(image, tuple(landmark_point[7]), tuple(landmark_point[8]),
                    (255, 255, 255), 2)

            # Middle finger
            cv.line(image, tuple(landmark_point[9]), tuple(landmark_point[10]),
                    (0, 0, 0), 6)
            cv.line(image, tuple(landmark_point[9]), tuple(landmark_point[10]),
                    (255, 255, 255), 2)
            cv.line(image, tuple(landmark_point[10]), tuple(landmark_point[11]),
                    (0, 0, 0), 6)
            cv.line(image, tuple(landmark_point[10]), tuple(landmark_point[11]),
                    (255, 255, 255), 2)
            cv.line(image, tuple(landmark_point[11]), tuple(landmark_point[12]),
                    (0, 0, 0), 6)
            cv.line(image, tuple(landmark_point[11]), tuple(landmark_point[12]),
                    (255, 255, 255), 2)

            # Ring finger
            cv.line(image, tuple(landmark_point[13]), tuple(landmark_point[14]),
                    (0, 0, 0), 6)
            cv.line(image, tuple(landmark_point[13]), tuple(landmark_point[14]),
                    (255, 255, 255), 2)
            cv.line(image, tuple(landmark_point[14]), tuple(landmark_point[15]),
                    (0, 0, 0), 6)
            cv.line(image, tuple(landmark_point[14]), tuple(landmark_point[15]),
                    (255, 255, 255), 2)
            cv.line(image, tuple(landmark_point[15]), tuple(landmark_point[16]),
                    (0, 0, 0), 6)
            cv.line(image, tuple(landmark_point[15]), tuple(landmark_point[16]),
                    (255, 255, 255), 2)

            # Little finger
            cv.line(image, tuple(landmark_point[17]), tuple(landmark_point[18]),
                    (0, 0, 0), 6)
            cv.line(image, tuple(landmark_point[17]), tuple(landmark_point[18]),
                    (255, 255, 255), 2)
            cv.line(image, tuple(landmark_point[18]), tuple(landmark_point[19]),
                    (0, 0, 0), 6)
            cv.line(image, tuple(landmark_point[18]), tuple(landmark_point[19]),
                    (255, 255, 255), 2)
            cv.line(image, tuple(landmark_point[19]), tuple(landmark_point[20]),
                    (0, 0, 0), 6)
            cv.line(image, tuple(landmark_point[19]), tuple(landmark_point[20]),
                    (255, 255, 255), 2)

            # Palm
            cv.line(image, tuple(landmark_point[0]), tuple(landmark_point[1]),
                    (0, 0, 0), 6)
            cv.line(image, tuple(landmark_point[0]), tuple(landmark_point[1]),
                    (255, 255, 255), 2)
            cv.line(image, tuple(landmark_point[1]), tuple(landmark_point[2]),
                    (0, 0, 0), 6)
            cv.line(image, tuple(landmark_point[1]), tuple(landmark_point[2]),
                    (255, 255, 255), 2)
            cv.line(image, tuple(landmark_point[2]), tuple(landmark_point[5]),
                    (0, 0, 0), 6)
            cv.line(image, tuple(landmark_point[2]), tuple(landmark_point[5]),
                    (255, 255, 255), 2)
            cv.line(image, tuple(landmark_point[5]), tuple(landmark_point[9]),
                    (0, 0, 0), 6)
            cv.line(image, tuple(landmark_point[5]), tuple(landmark_point[9]),
                    (255, 255, 255), 2)
            cv.line(image, tuple(landmark_point[9]), tuple(landmark_point[13]),
                    (0, 0, 0), 6)
            cv.line(image, tuple(landmark_point[9]), tuple(landmark_point[13]),
                    (255, 255, 255), 2)
            cv.line(image, tuple(landmark_point[13]), tuple(landmark_point[17]),
                    (0, 0, 0), 6)
            cv.line(image, tuple(landmark_point[13]), tuple(landmark_point[17]),
                    (255, 255, 255), 2)
            cv.line(image, tuple(landmark_point[17]), tuple(landmark_point[0]),
                    (0, 0, 0), 6)
            cv.line(image, tuple(landmark_point[17]), tuple(landmark_point[0]),
                    (255, 255, 255), 2)

        # Key Points
        for index, landmark in enumerate(landmark_point):
            if index == 0:  # Wrist 1
                cv.circle(image, (landmark[0], landmark[1]), 5, (255, 255, 255),
                          -1)
                cv.circle(image, (landmark[0], landmark[1]), 5, (0, 0, 0), 1)
            if index == 1:  # Wrist 2
                cv.circle(image, (landmark[0], landmark[1]), 5, (255, 255, 255),
                          -1)
                cv.circle(image, (landmark[0], landmark[1]), 5, (0, 0, 0), 1)
            if index == 2:  # Thumb: Root
                cv.circle(image, (landmark[0], landmark[1]), 5, (255, 255, 255),
                          -1)
                cv.circle(image, (landmark[0], landmark[1]), 5, (0, 0, 0), 1)
            if index == 3:  # Thumb: 1st joint
                cv.circle(image, (landmark[0], landmark[1]), 5, (255, 255, 255),
                          -1)
                cv.circle(image, (landmark[0], landmark[1]), 5, (0, 0, 0), 1)
            if index == 4:  # Thumb: fingertip
                cv.circle(image, (landmark[0], landmark[1]), 8, (255, 255, 255),
                          -1)
                cv.circle(image, (landmark[0], landmark[1]), 8, (0, 0, 0), 1)
            if index == 5:  # Index finger: Root
                cv.circle(image, (landmark[0], landmark[1]), 5, (255, 255, 255),
                          -1)
                cv.circle(image, (landmark[0], landmark[1]), 5, (0, 0, 0), 1)
            if index == 6:  # Index finger: 2nd joint
                cv.circle(image, (landmark[0], landmark[1]), 5, (255, 255, 255),
                          -1)
                cv.circle(image, (landmark[0], landmark[1]), 5, (0, 0, 0), 1)
            if index == 7:  # Index finger: 1st joint
                cv.circle(image, (landmark[0], landmark[1]), 5, (255, 255, 255),
                          -1)
                cv.circle(image, (landmark[0], landmark[1]), 5, (0, 0, 0), 1)
            if index == 8:  # Index finger: fingertip
                cv.circle(image, (landmark[0], landmark[1]), 8, (255, 255, 255),
                          -1)
                cv.circle(image, (landmark[0], landmark[1]), 8, (0, 0, 0), 1)
            if index == 9:  # Middle finger: Root
                cv.circle(image, (landmark[0], landmark[1]), 5, (255, 255, 255),
                          -1)
                cv.circle(image, (landmark[0], landmark[1]), 5, (0, 0, 0), 1)
            if index == 10:  # Middle finger: 2nd joint
                cv.circle(image, (landmark[0], landmark[1]), 5, (255, 255, 255),
                          -1)
                cv.circle(image, (landmark[0], landmark[1]), 5, (0, 0, 0), 1)
            if index == 11:  # Middle finger: 1st joint
                cv.circle(image, (landmark[0], landmark[1]), 5, (255, 255, 255),
                          -1)
                cv.circle(image, (landmark[0], landmark[1]), 5, (0, 0, 0), 1)
            if index == 12:  # Middle finger: point first
                cv.circle(image, (landmark[0], landmark[1]), 8, (255, 255, 255),
                          -1)
                cv.circle(image, (landmark[0], landmark[1]), 8, (0, 0, 0), 1)
            if index == 13:  # Ring finger: Root
                cv.circle(image, (landmark[0], landmark[1]), 5, (255, 255, 255),
                          -1)
                cv.circle(image, (landmark[0], landmark[1]), 5, (0, 0, 0), 1)
            if index == 14:  # Ring finger: 2nd joint
                cv.circle(image, (landmark[0], landmark[1]), 5, (255, 255, 255),
                          -1)
                cv.circle(image, (landmark[0], landmark[1]), 5, (0, 0, 0), 1)
            if index == 15:  # Ring finger: 1st joint
                cv.circle(image, (landmark[0], landmark[1]), 5, (255, 255, 255),
                          -1)
                cv.circle(image, (landmark[0], landmark[1]), 5, (0, 0, 0), 1)
            if index == 16:  # Ring finger: fingertip
                cv.circle(image, (landmark[0], landmark[1]), 8, (255, 255, 255),
                          -1)
                cv.circle(image, (landmark[0], landmark[1]), 8, (0, 0, 0), 1)
            if index == 17:  # Little finger: base
                cv.circle(image, (landmark[0], landmark[1]), 5, (255, 255, 255),
                          -1)
                cv.circle(image, (landmark[0], landmark[1]), 5, (0, 0, 0), 1)
            if index == 18:  # Little finger: 2nd joint
                cv.circle(image, (landmark[0], landmark[1]), 5, (255, 255, 255),
                          -1)
                cv.circle(image, (landmark[0], landmark[1]), 5, (0, 0, 0), 1)
            if index == 19:  # Little finger: 1st joint
                cv.circle(image, (landmark[0], landmark[1]), 5, (255, 255, 255),
                          -1)
                cv.circle(image, (landmark[0], landmark[1]), 5, (0, 0, 0), 1)
            if index == 20:  # Little finger: point first
                cv.circle(image, (landmark[0], landmark[1]), 8, (255, 255, 255),
                          -1)
                cv.circle(image, (landmark[0], landmark[1]), 8, (0, 0, 0), 1)

        return image

    def _draw_info_text(self, image, brect, handedness, hand_sign_text,
                        finger_gesture_text):
        cv.rectangle(image, (brect[0], brect[1]), (brect[2], brect[1] - 22),
                     (0, 0, 0), -1)

        info_text = handedness.classification[0].label[0:]
        if hand_sign_text != "":
            info_text = info_text + ':' + hand_sign_text
        cv.putText(image, info_text, (brect[0] + 5, brect[1] - 4),
                   cv.FONT_HERSHEY_SIMPLEX, 0.6, (255, 255, 255), 1, cv.LINE_AA)

        if finger_gesture_text != "":
            cv.putText(image, "Finger Gesture:" + finger_gesture_text, (10, 60),
                       cv.FONT_HERSHEY_SIMPLEX, 1.0, (0, 0, 0), 4, cv.LINE_AA)
            cv.putText(image, "Finger Gesture:" + finger_gesture_text, (10, 60),
                       cv.FONT_HERSHEY_SIMPLEX, 1.0, (255, 255, 255), 2,
                       cv.LINE_AA)

        return image

    def _draw_bounding_rect(self, use_brect, image, brect):
        if use_brect:
            # Outer rectangle
            cv.rectangle(image, (brect[0], brect[1]), (brect[2], brect[3]),
                         (0, 0, 0), 1)

        return image

import cv2 as cv


def gen_display():
    """
    视频流生成器功能。
    """
    
    gesture_detector = GestureRecognition()
    cv_fps_calc = CvFpsCalc(buffer_len=10)
    mode = 0
    number = -1
    url='http://192.168.43.7/capture?_cb=1681270680444'
    while True:
        # 读取图片
        #fps = cv_fps_calc.get()
        imgResp=urllib.request.urlopen(url)
        imgNp=np.array(bytearray(imgResp.read()),dtype=np.uint8)
        img=cv.imdecode(imgNp,-1)
        #ret, image = cap.read()

        #ret, frame = camera.read()
        #if ret:
        debug_image, hand_sign_id,confidence = gesture_detector.recognize(img, number, mode)
        # debug_image = gesture_detector.draw_info(debug_image, img, mode, number)
        # print(debug_image.shape)
        # print(gesture_id)
        cv.imshow('Gesture Recognition', debug_image)
        if cv.waitKey(1) == ord('q'):  # 点击视频，输入q退出
                break
        frame = cv.resize(debug_image, (0, 0), fx=4, fy=4)
            # 将图片进行解码
        ret, frame = cv.imencode('.jpeg', frame)
        if ret:
                # 转换为byte类型的，存储在迭代器中
            yield (b'--frame\r\n'
                       b'Content-Type: image/jpeg\r\n\r\n' + frame.tobytes() + b'\r\n')


def video(request):
    """
    视频流路由。将其放入img标记的src属性中。
    例如：<img src='https://ip:port/uri' >
    """
    # 视频流相机对象
    # gesture_detector = GestureRecognition()
    # cv_fps_calc = CvFpsCalc(buffer_len=10)
    # mode = 0
    # number = -1
    # cap = cv.VideoCapture(0)
    # 使用流传输传输视频流
    return StreamingHttpResponse(gen_display(), content_type='multipart/x-mixed-replace; boundary=frame')

class CvFpsCalc(object):
    def __init__(self, buffer_len=1):
        self._start_tick = cv.getTickCount()
        self._freq = 1000.0 / cv.getTickFrequency()
        self._difftimes = deque(maxlen=buffer_len)

    def get(self):
        current_tick = cv.getTickCount()
        different_time = (current_tick - self._start_tick) * self._freq
        self._start_tick = current_tick

        self._difftimes.append(different_time)

        fps = 1000.0 / (sum(self._difftimes) / len(self._difftimes))
        fps_rounded = round(fps, 2)

        return fps_rounded
    




def main(self):

    gesture_detector = GestureRecognition()

    cap = cv.VideoCapture(0)
    cv_fps_calc = CvFpsCalc(buffer_len=10)

    mode = 0
    number = -1

    while True:
        fps = cv_fps_calc.get()
        ret, image = cap.read()

        debug_image, gesture_id = gesture_detector.recognize(image, number, mode)
        debug_image = gesture_detector.draw_info(debug_image, fps, mode, number)
        # print(gesture_id)
        cv.imshow('Gesture Recognition', debug_image)
        if cv.waitKey(1) == ord('q'):  # 点击视频，输入q退出
            break
    return redirect("/test1/")

if __name__ == '__main__':
    main()


def test(request):
    return render(request, "test.html")

def test1(request):
    return render(request,"index.html")
