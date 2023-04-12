(function () {
  "use strict";
  var t = {
      7966: function (t, e, i) {
        var a = i(6369),
          c = i(8499),
          s = i.n(c),
          r = function () {
            var t = this,
              e = t._self._c;
            return e("div", { attrs: { id: "app" } }, [e("router-view")], 1);
          },
          p = [],
          g = i(1001),
          l = {},
          h = (0, g.Z)(l, r, p, !1, null, null, null),
          n = h.exports,
          o = i(2631),
          d =
            (i(7658),
            function () {
              var t = this,
                e = t._self._c;
              return e(
                "div",
                { staticClass: "home" },
                [
                  e(
                    "el-menu",
                    {
                      staticClass: "el-menu-demo",
                      attrs: {
                        mode: "horizontal",
                        "background-color": "#545c64",
                        "text-color": "#fff",
                        "active-text-color": "#ffd04b",
                        "default-active": "/home/main",
                        router: "",
                      },
                      on: { select: t.handleSelect },
                    },
                    [
                      e(
                        "el-menu-item",
                        { staticStyle: { "font-size": "18px" } },
                        [t._v("野外意外伤救治方案推荐系统")]
                      ),
                      e(
                        "el-menu-item",
                        {
                          staticStyle: { width: "20%", "text-align": "center" },
                          attrs: { index: "/home/main" },
                        },
                        [
                          e("i", { staticClass: "el-icon-menu" }),
                          t._v("专家系统主界面"),
                        ]
                      ),
                      e(
                        "el-menu-item",
                        {
                          staticStyle: { width: "20%", "text-align": "center" },
                          attrs: { index: "/home/shoushi" },
                        },
                        [
                          e("i", { staticClass: "el-icon-back" }),
                          t._v("手势识别界面"),
                        ]
                      ),
                      e(
                        "el-menu-item",
                        {
                          staticStyle: {
                            width: "20%",
                            "text-align": "center",
                            float: "right",
                          },
                          on: {
                            click: function (e) {
                              return t.$router.push("/home/six");
                            },
                          },
                        },
                        [
                          e("i", { staticClass: "el-icon-microphone" }),
                          t._v("摄像头/话筒"),
                        ]
                      ),
                    ],
                    1
                  ),
                  e("router-view"),
                ],
                1
              );
            }),
          m = [],
          f = {
            name: "home",
            methods: {
              handleSelect(t, e) {
                console.log("index", t), console.log("path", e);
              },
            },
          },
          x = f,
          u = (0, g.Z)(x, d, m, !1, null, "bbc31e62", null),
          v = u.exports,
          y = function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "container" },
              [
                e("el-card", [
                  e(
                    "div",
                    {
                      staticClass: "box",
                      on: {
                        click: function (e) {
                          return t.$router.push("/home/one");
                        },
                      },
                    },
                    [t._v("急救指南")]
                  ),
                ]),
                e("el-card", [
                  e(
                    "div",
                    {
                      staticClass: "box box1",
                      on: {
                        click: function (e) {
                          return t.$router.push("/home/two");
                        },
                      },
                    },
                    [t._v(" 伤病诊断 ")]
                  ),
                ]),
                e("el-card", [
                  e(
                    "div",
                    {
                      staticClass: "box box2",
                      on: {
                        click: function (e) {
                          return t.$router.push("/home/four");
                        },
                      },
                    },
                    [t._v(" 药品查询 ")]
                  ),
                ]),
              ],
              1
            );
          },
          j = [],
          S = {},
          w = S,
          b = (0, g.Z)(w, y, j, !1, null, "52b44b9f", null),
          _ = b.exports,
          C = function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "box" },
              [
                e(
                  "el-card",
                  { staticClass: "box-card" },
                  [
                    e("span", [t._v("手势识别区域")]),
                    e(
                      "el-button",
                      {
                        staticStyle: { float: "right" },
                        on: {
                          click: function (e) {
                            t.isShow = !0;
                          },
                        },
                      },
                      [t._v("手势操作流程")]
                    ),
                  ],
                  1
                ),
                e(
                  "el-drawer",
                  {
                    attrs: {
                      title: "手势操作说明",
                      visible: t.isShow,
                      size: "50%",
                    },
                    on: {
                      "update:visible": function (e) {
                        t.isShow = e;
                      },
                    },
                  },
                  [
                    e("div", { staticClass: "ball" }, [
                      e(
                        "div",
                        [
                          e(
                            "el-button",
                            {
                              staticStyle: {
                                width: "200px",
                                "margin-bottom": "20px",
                              },
                            },
                            [t._v("手势操作图片")]
                          ),
                          e(
                            "el-button",
                            {
                              staticStyle: {
                                width: "200px",
                                "margin-bottom": "20px",
                              },
                            },
                            [t._v("左划")]
                          ),
                          e(
                            "el-button",
                            {
                              staticStyle: {
                                width: "200px",
                                "margin-bottom": "20px",
                              },
                            },
                            [t._v("右划")]
                          ),
                          e(
                            "el-button",
                            {
                              staticStyle: {
                                width: "200px",
                                "margin-bottom": "20px",
                              },
                              on: {
                                click: function (e) {
                                  return t.$router.push("/home/error");
                                },
                              },
                            },
                            [t._v("错误手势")]
                          ),
                        ],
                        1
                      ),
                      e(
                        "div",
                        [
                          e(
                            "el-button",
                            {
                              staticStyle: {
                                width: "200px",
                                "margin-bottom": "20px",
                              },
                            },
                            [t._v("操作描述")]
                          ),
                          e(
                            "el-button",
                            {
                              staticStyle: {
                                width: "200px",
                                "margin-bottom": "20px",
                              },
                            },
                            [t._v("打开手势指令操作")]
                          ),
                          e(
                            "el-button",
                            {
                              staticStyle: {
                                width: "200px",
                                "margin-bottom": "20px",
                              },
                            },
                            [t._v("收起指令操作")]
                          ),
                          e(
                            "el-button",
                            {
                              staticStyle: {
                                width: "200px",
                                "margin-bottom": "20px",
                              },
                            },
                            [t._v("操作描述")]
                          ),
                          e(
                            "el-button",
                            {
                              staticStyle: {
                                width: "200px",
                                "margin-bottom": "20px",
                              },
                            },
                            [t._v("操作描述")]
                          ),
                        ],
                        1
                      ),
                      e(
                        "div",
                        [
                          e(
                            "el-button",
                            {
                              staticStyle: {
                                width: "200px",
                                "margin-bottom": "20px",
                              },
                            },
                            [t._v("手势指令图片")]
                          ),
                          e(
                            "el-button",
                            {
                              staticStyle: {
                                width: "200px",
                                "margin-bottom": "20px",
                              },
                            },
                            [t._v("打开手势指令操作")]
                          ),
                          e(
                            "el-button",
                            {
                              staticStyle: {
                                width: "200px",
                                "margin-bottom": "20px",
                              },
                            },
                            [t._v("收起指令操作")]
                          ),
                          e(
                            "el-button",
                            {
                              staticStyle: {
                                width: "200px",
                                "margin-bottom": "20px",
                              },
                              on: {
                                click: function (e) {
                                  return t.$router.push("/home/five");
                                },
                              },
                            },
                            [t._v("自定义指令")]
                          ),
                          e(
                            "el-button",
                            {
                              staticStyle: {
                                width: "200px",
                                "margin-bottom": "20px",
                              },
                            },
                            [t._v("操作描述")]
                          ),
                        ],
                        1
                      ),
                      e(
                        "div",
                        [
                          e(
                            "el-button",
                            {
                              staticStyle: {
                                width: "200px",
                                "margin-bottom": "20px",
                              },
                            },
                            [t._v("操作描述")]
                          ),
                          e(
                            "el-button",
                            {
                              staticStyle: {
                                width: "200px",
                                "margin-bottom": "20px",
                              },
                            },
                            [t._v("操作描述")]
                          ),
                          e(
                            "el-button",
                            {
                              staticStyle: {
                                width: "200px",
                                "margin-bottom": "20px",
                              },
                            },
                            [t._v("操作描述")]
                          ),
                          e(
                            "el-button",
                            {
                              staticStyle: {
                                width: "200px",
                                "margin-bottom": "20px",
                              },
                            },
                            [t._v("操作描述")]
                          ),
                          e(
                            "el-button",
                            {
                              staticStyle: {
                                width: "200px",
                                "margin-bottom": "20px",
                              },
                            },
                            [t._v("操作描述")]
                          ),
                          e(
                            "el-button",
                            {
                              staticStyle: {
                                width: "200px",
                                "margin-bottom": "20px",
                              },
                            },
                            [t._v("操作描述")]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]
                ),
              ],
              1
            );
          },
          k = [],
          z = {
            data() {
              return { isShow: !1 };
            },
          },
          O = z,
          Z = (0, g.Z)(O, C, k, !1, null, "d59deb8a", null),
          E = Z.exports,
          P = function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "one" }, [
              e(
                "div",
                { staticClass: "top flex" },
                [
                  e("el-alert", {
                    staticStyle: { width: "300px" },
                    attrs: {
                      title: "场景搜索",
                      type: "info",
                      "show-icon": "",
                      closable: !1,
                    },
                  }),
                  e("el-input", {
                    staticStyle: { width: "500px", "margin-left": "50px" },
                    attrs: { clearable: "", size: "small" },
                    model: {
                      value: t.search,
                      callback: function (e) {
                        t.search = e;
                      },
                      expression: "search",
                    },
                  }),
                  e(
                    "el-button",
                    {
                      staticStyle: { "margin-left": "50px" },
                      attrs: { icon: "el-icon-search", size: "small" },
                    },
                    [t._v("搜索")]
                  ),
                ],
                1
              ),
              e("div", { staticClass: "bottom flex" }, [
                e(
                  "div",
                  { staticClass: "left" },
                  [
                    e("el-card", [
                      e(
                        "div",
                        { staticStyle: { height: "200px" } },
                        [
                          e("el-button", [t._v("灾难特点")]),
                          e("p", [
                            t._v(
                              " 灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点 "
                            ),
                          ]),
                        ],
                        1
                      ),
                    ]),
                    e("el-card", { staticStyle: { "margin-top": "50px" } }, [
                      e(
                        "div",
                        { staticStyle: { height: "200px" } },
                        [
                          e("el-button", [t._v("致伤机制")]),
                          e("p", [
                            t._v(
                              " 灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点 "
                            ),
                          ]),
                        ],
                        1
                      ),
                    ]),
                  ],
                  1
                ),
                e(
                  "div",
                  {
                    staticClass: "right flex",
                    staticStyle: { "justify-content": "space-between" },
                  },
                  [
                    e("el-card", { staticClass: "right-card" }, [
                      e(
                        "div",
                        { staticStyle: { height: "500px" } },
                        [
                          e("el-button", { staticStyle: { width: "100%" } }, [
                            t._v("现场救援原则"),
                          ]),
                          e("p", [
                            t._v(
                              " 灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点 "
                            ),
                          ]),
                        ],
                        1
                      ),
                    ]),
                    e("el-card", { staticClass: "right-card" }, [
                      e(
                        "div",
                        { staticStyle: { height: "500px" } },
                        [
                          e("el-button", { staticStyle: { width: "100%" } }, [
                            t._v("应急设备推荐"),
                          ]),
                          e("p", [
                            t._v(
                              " 灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点 "
                            ),
                          ]),
                        ],
                        1
                      ),
                    ]),
                  ],
                  1
                ),
              ]),
              e(
                "div",
                {
                  staticClass: "btn flex",
                  staticStyle: { "margin-top": "50px" },
                },
                [
                  e(
                    "div",
                    { staticStyle: { "text-align": "center", flex: "1" } },
                    [
                      e("el-button", { attrs: { type: "primary" } }, [
                        t._v("设置常用链接"),
                      ]),
                    ],
                    1
                  ),
                  e(
                    "div",
                    { staticStyle: { "text-align": "center", flex: "1" } },
                    [
                      e("el-button", { attrs: { type: "danger" } }, [
                        t._v("分享"),
                      ]),
                    ],
                    1
                  ),
                ]
              ),
            ]);
          },
          $ = [],
          T = {
            data() {
              return { search: null };
            },
          },
          A = T,
          N = (0, g.Z)(A, P, $, !1, null, "737faac0", null),
          L = N.exports,
          B = function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "main" }, [
              e("div", { staticClass: "ball" }, [
                e(
                  "div",
                  {
                    staticClass: "box",
                    on: {
                      click: function (e) {
                        return t.$router.push("/home/three");
                      },
                    },
                  },
                  [
                    e("el-tag", [t._v("伤情等级")]),
                    e("div", { staticClass: "box_div" }, [t._v("伤情名称")]),
                  ],
                  1
                ),
                e(
                  "div",
                  {
                    staticClass: "box",
                    on: {
                      click: function (e) {
                        return t.$router.push("/home/three");
                      },
                    },
                  },
                  [
                    e("el-tag", [t._v("伤情等级")]),
                    e("div", { staticClass: "box_div" }, [t._v("伤情名称")]),
                  ],
                  1
                ),
                e(
                  "div",
                  {
                    staticClass: "box",
                    on: {
                      click: function (e) {
                        return t.$router.push("/home/three");
                      },
                    },
                  },
                  [
                    e("el-tag", [t._v("伤情等级")]),
                    e("div", { staticClass: "box_div" }, [t._v("伤情名称")]),
                  ],
                  1
                ),
                e(
                  "div",
                  {
                    staticClass: "box",
                    on: {
                      click: function (e) {
                        return t.$router.push("/home/three");
                      },
                    },
                  },
                  [
                    e("el-tag", [t._v("伤情等级")]),
                    e("div", { staticClass: "box_div" }, [t._v("伤情名称")]),
                  ],
                  1
                ),
              ]),
              e(
                "div",
                { staticClass: "img_div" },
                [
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                  e("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "margin-right": "8px",
                    },
                    attrs: {
                      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                      fit: ["cover"],
                    },
                  }),
                ],
                1
              ),
            ]);
          },
          F = [],
          M = {},
          q = M,
          D = (0, g.Z)(q, B, F, !1, null, "3451ff08", null),
          H = D.exports,
          I = function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "main" }, [
              e("div", { staticClass: "main2" }, [
                e("div", { staticClass: "left" }, [
                  e(
                    "div",
                    [
                      e("el-alert", {
                        attrs: {
                          title: "应急处理方案",
                          type: "info",
                          "show-icon": "",
                          closable: !1,
                        },
                      }),
                    ],
                    1
                  ),
                  e(
                    "div",
                    {
                      staticStyle: {
                        "margin-top": "20px",
                        "margin-bottom": "20px",
                      },
                    },
                    [e("el-card", [t._v("适用于流行感冒")])],
                    1
                  ),
                  e(
                    "div",
                    [
                      e("el-card", { staticStyle: { height: "500px" } }, [
                        t._v(" 注意保暖，以及水分的补充 "),
                      ]),
                    ],
                    1
                  ),
                ]),
                e(
                  "div",
                  { staticClass: "right" },
                  [
                    e(
                      "el-card",
                      {
                        staticStyle: {
                          width: "100%",
                          "box-sizing": "border-box",
                          height: "640px",
                          "padding-top": "20px",
                          "padding-left": "50px",
                          "padding-right": "50px",
                        },
                      },
                      [
                        e(
                          "div",
                          [
                            e(
                              "el-card",
                              {
                                staticStyle: {
                                  width: "100%",
                                  height: "500px",
                                  padding: "20px",
                                  "box-sizing": "border-box",
                                },
                              },
                              [
                                e(
                                  "h2",
                                  { staticStyle: { "text-align": "center" } },
                                  [t._v("方案详情")]
                                ),
                                e(
                                  "p",
                                  { staticStyle: { "text-align": "center" } },
                                  [t._v(" 步骤一：检查是否发热中 ")]
                                ),
                                e(
                                  "p",
                                  { staticStyle: { "text-align": "center" } },
                                  [t._v(" 步骤二：是否感冒药过敏 ")]
                                ),
                                e(
                                  "p",
                                  { staticStyle: { "text-align": "center" } },
                                  [t._v(" 步骤三：感冒药注意事项 ")]
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        e(
                          "div",
                          { staticStyle: { "margin-top": "20px" } },
                          [
                            e("el-button", { attrs: { type: "primary" } }, [
                              t._v("使用的药品及工具"),
                            ]),
                            e(
                              "el-button",
                              { attrs: { type: "primary", plain: "" } },
                              [t._v("eg: 温度计、听诊器、以及卫生木棍")]
                            ),
                            e("el-divider"),
                          ],
                          1
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ]),
              e(
                "div",
                { staticClass: "bottom" },
                [
                  e(
                    "el-card",
                    {
                      staticStyle: {
                        height: "100%",
                        display: "flex",
                        "align-items": "center",
                        padding: "20px",
                        "box-sizing": "border-box",
                      },
                    },
                    [
                      e("el-button", [t._v("其他用户评论")]),
                      e(
                        "el-button",
                        {
                          staticStyle: { "margin-left": "20px" },
                          attrs: { type: "danger" },
                        },
                        [t._v("感冒小王：对症下药，医术高明")]
                      ),
                      e(
                        "el-button",
                        {
                          staticStyle: { "margin-left": "20px" },
                          attrs: { type: "danger" },
                        },
                        [t._v("发烧小王：对症下药，医术高明")]
                      ),
                      e(
                        "el-button",
                        {
                          staticStyle: { "margin-left": "20px" },
                          attrs: { type: "danger" },
                        },
                        [t._v("骨折小王：对症下药，医术高明")]
                      ),
                      e(
                        "el-button",
                        {
                          staticStyle: { "margin-left": "20px" },
                          attrs: { type: "danger" },
                        },
                        [t._v("骨折小王：对症下药，医术高明")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              e(
                "div",
                { staticClass: "fixed_div" },
                [
                  e(
                    "el-card",
                    {
                      staticStyle: {
                        width: "100%",
                        height: "100%",
                        "padding-top": "20px",
                        "box-sizing": "border-box",
                      },
                    },
                    [
                      e("el-button", {
                        attrs: {
                          type: "primary",
                          icon: "el-icon-thumb",
                          circle: "",
                        },
                      }),
                      e("el-button", {
                        staticStyle: {
                          "margin-left": "0",
                          "margin-top": "20px",
                        },
                        attrs: {
                          type: "warning",
                          icon: "el-icon-star-off",
                          circle: "",
                        },
                      }),
                      e("el-button", {
                        staticStyle: {
                          "margin-left": "0",
                          "margin-top": "20px",
                        },
                        attrs: { icon: "el-icon-chat-line-round", circle: "" },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]);
          },
          K = [],
          U = {},
          G = U,
          J = (0, g.Z)(G, I, K, !1, null, "588ec757", null),
          Q = J.exports,
          R = function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "main" },
              [
                e(
                  "el-card",
                  { staticStyle: { width: "100%", height: "100%" } },
                  [
                    e(
                      "div",
                      { staticClass: "top" },
                      [
                        e("el-input", {
                          staticStyle: { width: "480px" },
                          attrs: { placeholder: "请输入药品名称" },
                        }),
                        e(
                          "el-button",
                          {
                            staticStyle: {
                              "margin-right": "20px",
                              "margin-left": "20px",
                            },
                            attrs: { type: "primary" },
                          },
                          [t._v("药品搜素")]
                        ),
                        e("el-alert", {
                          staticStyle: { width: "100px" },
                          attrs: { title: "治头疼", type: "info" },
                        }),
                        e("el-alert", {
                          staticStyle: {
                            width: "200px",
                            "margin-left": "30px",
                          },
                          attrs: { title: "复方氨酚黄那颗粒", type: "info" },
                        }),
                        e("el-alert", {
                          staticStyle: {
                            width: "200px",
                            "margin-left": "30px",
                          },
                          attrs: { title: "布洛芬", type: "info" },
                        }),
                        e("el-alert", {
                          staticStyle: {
                            width: "200px",
                            "margin-left": "30px",
                          },
                          attrs: { title: "头孢", type: "info" },
                        }),
                      ],
                      1
                    ),
                    e(
                      "div",
                      { staticClass: "content" },
                      [
                        e(
                          "el-card",
                          {
                            staticStyle: {
                              width: "100%",
                              height: "100%",
                              "padding-bottom": "20px",
                              "box-sizing": "border-box",
                            },
                          },
                          [
                            e(
                              "div",
                              {
                                staticStyle: { width: "100%", display: "flex" },
                              },
                              [
                                e("div", { staticClass: "left box" }, [
                                  e(
                                    "div",
                                    [
                                      e(
                                        "el-button",
                                        { staticStyle: { width: "100%" } },
                                        [t._v("药品名称")]
                                      ),
                                    ],
                                    1
                                  ),
                                  e(
                                    "div",
                                    { staticStyle: { "margin-top": "20px" } },
                                    [
                                      e(
                                        "el-card",
                                        {
                                          staticStyle: {
                                            height: "300px",
                                            "padding-bottom": "20px",
                                            "box-sizing": "border-box",
                                          },
                                        },
                                        [
                                          e("el-image", {
                                            staticStyle: { height: "250px" },
                                            attrs: {
                                              src: "https://zy.yaozh.com/drugadimg/images/ypgg/pic/451604290024.jpg",
                                            },
                                          }),
                                          e("el-image", {
                                            staticStyle: {
                                              height: "250px",
                                              "margin-left": "10px",
                                            },
                                            attrs: {
                                              src: "https://zy.yaozh.com/drugadimg/images/ypgg/pic/451604290024.jpg",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ]),
                                e(
                                  "div",
                                  { staticClass: "middle box" },
                                  [
                                    e(
                                      "el-card",
                                      {
                                        staticStyle: {
                                          height: "90%",
                                          width: "100%",
                                        },
                                      },
                                      [t._v(" 药品用途 ")]
                                    ),
                                  ],
                                  1
                                ),
                                e(
                                  "div",
                                  { staticClass: "right box" },
                                  [
                                    e(
                                      "el-card",
                                      {
                                        staticStyle: {
                                          height: "90%",
                                          width: "100%",
                                        },
                                      },
                                      [t._v(" 使用方法，使用禁忌 ")]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                    e(
                      "div",
                      { staticClass: "bottom" },
                      [
                        e("el-button", [t._v("设置常用链接")]),
                        e(
                          "el-button",
                          { staticStyle: { "margin-left": "20px" } },
                          [t._v("分享")]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ],
              1
            );
          },
          V = [],
          W = {},
          X = W,
          Y = (0, g.Z)(X, R, V, !1, null, "c25ebd10", null),
          tt = Y.exports,
          et = function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "main" }, [
              e("div", { staticStyle: { display: "flex" } }, [
                e(
                  "div",
                  { staticClass: "left" },
                  [
                    e(
                      "el-card",
                      { staticStyle: { width: "100%", height: "100%" } },
                      [
                        e(
                          "div",
                          {
                            staticStyle: {
                              height: "100%",
                              padding: "20px",
                              "box-sizing": "border-box",
                            },
                          },
                          [
                            e(
                              "div",
                              [
                                e("el-card", {
                                  staticStyle: {
                                    width: "100%",
                                    height: "300px",
                                  },
                                }),
                              ],
                              1
                            ),
                            e(
                              "div",
                              { staticStyle: { "padding-top": "20px" } },
                              [
                                e(
                                  "el-button",
                                  {
                                    staticStyle: { width: "100%" },
                                    attrs: { type: "primary" },
                                  },
                                  [t._v("选择手势")]
                                ),
                              ],
                              1
                            ),
                          ]
                        ),
                      ]
                    ),
                  ],
                  1
                ),
                e("div", { staticClass: "right" }, [
                  e(
                    "div",
                    { staticStyle: { width: "80%", height: "100%" } },
                    [
                      e(
                        "el-card",
                        { staticStyle: { width: "100%", height: "100%" } },
                        [
                          e(
                            "div",
                            {
                              staticStyle: {
                                width: "100%",
                                height: "100%",
                                display: "flex",
                              },
                            },
                            [
                              e("el-card", {
                                staticStyle: {
                                  width: "200px",
                                  height: "200px",
                                  "margin-left": "20px",
                                },
                              }),
                              e("el-card", {
                                staticStyle: {
                                  width: "200px",
                                  height: "200px",
                                  "margin-left": "20px",
                                },
                              }),
                              e("el-card", {
                                staticStyle: {
                                  width: "200px",
                                  height: "200px",
                                  "margin-left": "20px",
                                },
                              }),
                            ],
                            1
                          ),
                          e(
                            "div",
                            {
                              staticStyle: {
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                "margin-top": "20px",
                              },
                            },
                            [
                              e("el-card", {
                                staticStyle: {
                                  width: "200px",
                                  height: "200px",
                                  "margin-left": "20px",
                                },
                              }),
                              e("el-card", {
                                staticStyle: {
                                  width: "200px",
                                  height: "200px",
                                  "margin-left": "20px",
                                },
                              }),
                              e("el-card", {
                                staticStyle: {
                                  width: "200px",
                                  height: "200px",
                                  "margin-left": "20px",
                                },
                              }),
                            ],
                            1
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                  e(
                    "div",
                    {
                      staticStyle: {
                        width: "10%",
                        height: "100%",
                        "margin-left": "40px",
                      },
                    },
                    [
                      e(
                        "el-card",
                        { staticStyle: { width: "100%", height: "100%" } },
                        [
                          e("div", { staticClass: "sx_div" }, [
                            e("p", { staticClass: "cz_p" }, [t._v("手")]),
                            e("p", { staticClass: "cz_p" }, [t._v("势")]),
                            e("p", { staticClass: "cz_p" }, [t._v("列")]),
                            e("p", { staticClass: "cz_p" }, [t._v("表")]),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ]),
              ]),
              e(
                "div",
                {
                  staticStyle: {
                    height: "200px",
                    "margin-top": "20px",
                    padding: "20px",
                    "box-sizing": "border-box",
                  },
                },
                [
                  e(
                    "el-card",
                    { staticStyle: { width: "100%", height: "100%" } },
                    [
                      e("div", { staticStyle: { display: "flex" } }, [
                        e("div", { staticClass: "bor_div" }),
                        e("div", { staticClass: "bor_div" }),
                        e("div", { staticClass: "bor_div" }),
                        e("div", { staticClass: "bor_div" }),
                        e("div", { staticClass: "bor_div" }),
                        e("div", { staticClass: "bor_div" }),
                        e("div", { staticClass: "bor_div" }),
                        e("div", { staticClass: "bor_div" }),
                        e("div", { staticClass: "bor_div" }),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              e(
                "div",
                {
                  staticStyle: {
                    padding: "20px",
                    "box-sizing": "border-box",
                    "text-align": "center",
                  },
                },
                [e("el-button", [t._v("确认")])],
                1
              ),
            ]);
          },
          it = [],
          at = {},
          ct = at,
          st = (0, g.Z)(ct, et, it, !1, null, "ffffa0ae", null),
          rt = st.exports,
          pt = function () {
            var t = this;
            t._self._c;
            return t._m(0);
          },
          gt = [
            function () {
              var t = this,
                e = t._self._c;
              return e("div", { staticClass: "main" }, [
                e("div", { staticClass: "box" }, [
                  e("h2", [t._v("错误提示：")]),
                  e("p", [t._v("警告，用户此时的手势不是该页面的通用手势")]),
                ]),
              ]);
            },
          ],
          lt = {},
          ht = lt,
          nt = (0, g.Z)(ht, pt, gt, !1, null, "d458a334", null),
          ot = nt.exports;
        a["default"].use(o.ZP);
        const dt = [
            {
              path: "/",
              name: "home",
              component: v,
              redirect: "/home/main",
              children: [
                { path: "/home/main", component: _ },
                { path: "/home/shoushi", component: E },
                { path: "/home/one", component: L },
                { path: "/home/two", component: H },
                { path: "/home/three", component: Q },
                { path: "/home/four", component: tt },
                { path: "/home/five", component: rt },
                { path: "/home/error", component: ot },
                {
                  path: "/home/six",
                  component: () => i.e(747).then(i.bind(i, 8747)),
                },
              ],
            },
          ],
          mt = new o.ZP({ routes: dt });
        var ft = mt,
          xt = i(3822);
        a["default"].use(xt.ZP);
        var ut = new xt.ZP.Store({
          state: {},
          getters: {},
          mutations: {},
          actions: {},
          modules: {},
        });
        a["default"].use(s()),
          (a["default"].config.productionTip = !1),
          new a["default"]({
            router: ft,
            store: ut,
            render: (t) => t(n),
          }).$mount("#app");
      },
    },
    e = {};
  function i(a) {
    var c = e[a];
    if (void 0 !== c) return c.exports;
    var s = (e[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(s.exports, s, s.exports, i), (s.loaded = !0), s.exports;
  }
  (i.m = t),
    (function () {
      i.amdO = {};
    })(),
    (function () {
      var t = [];
      i.O = function (e, a, c, s) {
        if (!a) {
          var r = 1 / 0;
          for (h = 0; h < t.length; h++) {
            (a = t[h][0]), (c = t[h][1]), (s = t[h][2]);
            for (var p = !0, g = 0; g < a.length; g++)
              (!1 & s || r >= s) &&
              Object.keys(i.O).every(function (t) {
                return i.O[t](a[g]);
              })
                ? a.splice(g--, 1)
                : ((p = !1), s < r && (r = s));
            if (p) {
              t.splice(h--, 1);
              var l = c();
              void 0 !== l && (e = l);
            }
          }
          return e;
        }
        s = s || 0;
        for (var h = t.length; h > 0 && t[h - 1][2] > s; h--) t[h] = t[h - 1];
        t[h] = [a, c, s];
      };
    })(),
    (function () {
      i.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return i.d(e, { a: e }), e;
      };
    })(),
    (function () {
      i.d = function (t, e) {
        for (var a in e)
          i.o(e, a) &&
            !i.o(t, a) &&
            Object.defineProperty(t, a, { enumerable: !0, get: e[a] });
      };
    })(),
    (function () {
      (i.f = {}),
        (i.e = function (t) {
          return Promise.all(
            Object.keys(i.f).reduce(function (e, a) {
              return i.f[a](t, e), e;
            }, [])
          );
        });
    })(),
    (function () {
      i.u = function (t) {
        return "js/" + t + ".2416d38f.js";
      };
    })(),
    (function () {
      i.miniCssF = function (t) {
        return "css/" + t + ".a58d0c37.css";
      };
    })(),
    (function () {
      i.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
    })(),
    (function () {
      var t = {},
        e = "y-project:";
      i.l = function (a, c, s, r) {
        if (t[a]) t[a].push(c);
        else {
          var p, g;
          if (void 0 !== s)
            for (
              var l = document.getElementsByTagName("script"), h = 0;
              h < l.length;
              h++
            ) {
              var n = l[h];
              if (
                n.getAttribute("src") == a ||
                n.getAttribute("data-webpack") == e + s
              ) {
                p = n;
                break;
              }
            }
          p ||
            ((g = !0),
            (p = document.createElement("script")),
            (p.charset = "utf-8"),
            (p.timeout = 120),
            i.nc && p.setAttribute("nonce", i.nc),
            p.setAttribute("data-webpack", e + s),
            (p.src = a)),
            (t[a] = [c]);
          var o = function (e, i) {
              (p.onerror = p.onload = null), clearTimeout(d);
              var c = t[a];
              if (
                (delete t[a],
                p.parentNode && p.parentNode.removeChild(p),
                c &&
                  c.forEach(function (t) {
                    return t(i);
                  }),
                e)
              )
                return e(i);
            },
            d = setTimeout(
              o.bind(null, void 0, { type: "timeout", target: p }),
              12e4
            );
          (p.onerror = o.bind(null, p.onerror)),
            (p.onload = o.bind(null, p.onload)),
            g && document.head.appendChild(p);
        }
      };
    })(),
    (function () {
      i.r = function (t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      i.nmd = function (t) {
        return (t.paths = []), t.children || (t.children = []), t;
      };
    })(),
    (function () {
      i.p = "";
    })(),
    (function () {
      if ("undefined" !== typeof document) {
        var t = function (t, e, i, a, c) {
            var s = document.createElement("link");
            (s.rel = "stylesheet"), (s.type = "text/css");
            var r = function (i) {
              if (((s.onerror = s.onload = null), "load" === i.type)) a();
              else {
                var r = i && ("load" === i.type ? "missing" : i.type),
                  p = (i && i.target && i.target.href) || e,
                  g = new Error(
                    "Loading CSS chunk " + t + " failed.\n(" + p + ")"
                  );
                (g.code = "CSS_CHUNK_LOAD_FAILED"),
                  (g.type = r),
                  (g.request = p),
                  s.parentNode && s.parentNode.removeChild(s),
                  c(g);
              }
            };
            return (
              (s.onerror = s.onload = r),
              (s.href = e),
              i
                ? i.parentNode.insertBefore(s, i.nextSibling)
                : document.head.appendChild(s),
              s
            );
          },
          e = function (t, e) {
            for (
              var i = document.getElementsByTagName("link"), a = 0;
              a < i.length;
              a++
            ) {
              var c = i[a],
                s = c.getAttribute("data-href") || c.getAttribute("href");
              if ("stylesheet" === c.rel && (s === t || s === e)) return c;
            }
            var r = document.getElementsByTagName("style");
            for (a = 0; a < r.length; a++) {
              (c = r[a]), (s = c.getAttribute("data-href"));
              if (s === t || s === e) return c;
            }
          },
          a = function (a) {
            return new Promise(function (c, s) {
              var r = i.miniCssF(a),
                p = i.p + r;
              if (e(r, p)) return c();
              t(a, p, null, c, s);
            });
          },
          c = { 143: 0 };
        i.f.miniCss = function (t, e) {
          var i = { 747: 1 };
          c[t]
            ? e.push(c[t])
            : 0 !== c[t] &&
              i[t] &&
              e.push(
                (c[t] = a(t).then(
                  function () {
                    c[t] = 0;
                  },
                  function (e) {
                    throw (delete c[t], e);
                  }
                ))
              );
        };
      }
    })(),
    (function () {
      var t = { 143: 0 };
      (i.f.j = function (e, a) {
        var c = i.o(t, e) ? t[e] : void 0;
        if (0 !== c)
          if (c) a.push(c[2]);
          else {
            var s = new Promise(function (i, a) {
              c = t[e] = [i, a];
            });
            a.push((c[2] = s));
            var r = i.p + i.u(e),
              p = new Error(),
              g = function (a) {
                if (i.o(t, e) && ((c = t[e]), 0 !== c && (t[e] = void 0), c)) {
                  var s = a && ("load" === a.type ? "missing" : a.type),
                    r = a && a.target && a.target.src;
                  (p.message =
                    "Loading chunk " + e + " failed.\n(" + s + ": " + r + ")"),
                    (p.name = "ChunkLoadError"),
                    (p.type = s),
                    (p.request = r),
                    c[1](p);
                }
              };
            i.l(r, g, "chunk-" + e, e);
          }
      }),
        (i.O.j = function (e) {
          return 0 === t[e];
        });
      var e = function (e, a) {
          var c,
            s,
            r = a[0],
            p = a[1],
            g = a[2],
            l = 0;
          if (
            r.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (c in p) i.o(p, c) && (i.m[c] = p[c]);
            if (g) var h = g(i);
          }
          for (e && e(a); l < r.length; l++)
            (s = r[l]), i.o(t, s) && t[s] && t[s][0](), (t[s] = 0);
          return i.O(h);
        },
        a = (self["webpackChunky_project"] =
          self["webpackChunky_project"] || []);
      a.forEach(e.bind(null, 0)), (a.push = e.bind(null, a.push.bind(a)));
    })();
  var a = i.O(void 0, [998], function () {
    return i(7966);
  });
  a = i.O(a);
})();
//# sourceMappingURL=app.b1db3df9.js.map
