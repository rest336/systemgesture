(function () {
  "use strict";
  var t = {
      5154: function (t, e, i) {
        var a = i(6369),
          n = i(8499),
          r = i.n(n),
          l = function () {
            var t = this,
              e = t._self._c;
            return e("div", { attrs: { id: "app" } }, [e("router-view")], 1);
          },
          s = [],
          o = i(1001),
          c = {},
          d = (0, o.Z)(c, l, s, !1, null, null, null),
          p = d.exports,
          h = i(2631),
          u = function () {
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
          },
          v = [],
          g = {
            name: "home",
            methods: {
              handleSelect(t, e) {
                console.log("index", t), console.log("path", e);
              },
            },
          },
          m = g,
          f = (0, o.Z)(m, u, v, !1, null, "320d453d", null),
          x = f.exports,
          y =
            (i(7658),
            function () {
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
            }),
          b = [],
          S = {},
          _ = S,
          w = (0, o.Z)(_, y, b, !1, null, "52b44b9f", null),
          C = w.exports,
          j = function () {
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
                    e(
                      "el-button",
                      { staticStyle: { float: "left" }, on: { click: t.jump } },
                      [t._v("预览")]
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
            methods: {
              jump() {
                window.open("/video");
              },
            },
          },
          O = z,
          Z = (0, o.Z)(O, j, k, !1, null, "86d04828", null),
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
          T = [],
          $ = {
            data() {
              return { search: null };
            },
          },
          A = $,
          N = (0, o.Z)(A, P, T, !1, null, "737faac0", null),
          L = N.exports,
          B = function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "main" }, [
              e("div", { staticClass: "ball" }, [
                e("div", [
                  e(
                    "div",
                    {
                      staticClass: "box",
                      on: {
                        click: function (e) {
                          return t.$router.push("/home/six");
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
                    { staticStyle: { "margin-top": "20px", width: "200px" } },
                    [
                      e("el-image", {
                        staticStyle: {
                          width: "300px",
                          height: "300px",
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
                  e(
                    "div",
                    { staticStyle: { "margin-top": "20px", width: "200px" } },
                    [
                      e("el-image", {
                        staticStyle: {
                          width: "300px",
                          height: "300px",
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
                ]),
                e("div", [
                  e(
                    "div",
                    {
                      staticClass: "box",
                      on: {
                        click: function (e) {
                          return t.$router.push("/home/six");
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
                    { staticStyle: { "margin-top": "20px", width: "200px" } },
                    [
                      e("el-image", {
                        staticStyle: {
                          width: "300px",
                          height: "300px",
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
                  e(
                    "div",
                    { staticStyle: { "margin-top": "20px", width: "200px" } },
                    [
                      e("el-image", {
                        staticStyle: {
                          width: "300px",
                          height: "300px",
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
                ]),
                e("div", [
                  e(
                    "div",
                    {
                      staticClass: "box",
                      on: {
                        click: function (e) {
                          return t.$router.push("/home/six");
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
                    { staticStyle: { "margin-top": "20px", width: "200px" } },
                    [
                      e("el-image", {
                        staticStyle: {
                          width: "300px",
                          height: "300px",
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
                  e(
                    "div",
                    { staticStyle: { "margin-top": "20px", width: "200px" } },
                    [
                      e("el-image", {
                        staticStyle: {
                          width: "300px",
                          height: "300px",
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
                ]),
                e("div", [
                  e(
                    "div",
                    {
                      staticClass: "box",
                      on: {
                        click: function (e) {
                          return t.$router.push("/home/six");
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
                    { staticStyle: { "margin-top": "20px", width: "200px" } },
                    [
                      e("el-image", {
                        staticStyle: {
                          width: "300px",
                          height: "300px",
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
                  e(
                    "div",
                    { staticStyle: { "margin-top": "20px", width: "200px" } },
                    [
                      e("el-image", {
                        staticStyle: {
                          width: "300px",
                          height: "300px",
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
                ]),
              ]),
              e("div", { staticClass: "img_div" }),
            ]);
          },
          F = [],
          M = {},
          q = M,
          D = (0, o.Z)(q, B, F, !1, null, "2fc7df5c", null),
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
          J = (0, o.Z)(G, I, K, !1, null, "588ec757", null),
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
          Y = (0, o.Z)(X, R, V, !1, null, "c25ebd10", null),
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
          nt = at,
          rt = (0, o.Z)(nt, et, it, !1, null, "ffffa0ae", null),
          lt = rt.exports,
          st = function () {
            var t = this;
            t._self._c;
            return t._m(0);
          },
          ot = [
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
          ct = {},
          dt = ct,
          pt = (0, o.Z)(dt, st, ot, !1, null, "d458a334", null),
          ht = pt.exports;
        a["default"].use(h.ZP);
        const ut = [
            {
              path: "/",
              name: "home",
              component: x,
              redirect: "/home/main",
              children: [
                { path: "/home/main", component: C },
                { path: "/home/shoushi", component: E },
                { path: "/home/one", component: L },
                { path: "/home/two", component: H },
                { path: "/home/three", component: Q },
                { path: "/home/four", component: tt },
                { path: "/home/five", component: lt },
                { path: "/home/error", component: ht },
                {
                  path: "/home/six",
                  component: () => i.e(356).then(i.bind(i, 8356)),
                },
              ],
            },
          ],
          vt = new h.ZP({ routes: ut });
        var gt = vt,
          mt = i(3822);
        a["default"].use(mt.ZP);
        var ft = new mt.ZP.Store({
          state: {},
          getters: {},
          mutations: {},
          actions: {},
          modules: {},
        });
        a["default"].use(r()),
          (a["default"].config.productionTip = !1),
          new a["default"]({
            router: gt,
            store: ft,
            render: (t) => t(p),
          }).$mount("#app");
      },
    },
    e = {};
  function i(a) {
    var n = e[a];
    if (void 0 !== n) return n.exports;
    var r = (e[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(r.exports, r, r.exports, i), (r.loaded = !0), r.exports;
  }
  (i.m = t),
    (function () {
      i.amdO = {};
    })(),
    (function () {
      var t = [];
      i.O = function (e, a, n, r) {
        if (!a) {
          var l = 1 / 0;
          for (d = 0; d < t.length; d++) {
            (a = t[d][0]), (n = t[d][1]), (r = t[d][2]);
            for (var s = !0, o = 0; o < a.length; o++)
              (!1 & r || l >= r) &&
              Object.keys(i.O).every(function (t) {
                return i.O[t](a[o]);
              })
                ? a.splice(o--, 1)
                : ((s = !1), r < l && (l = r));
            if (s) {
              t.splice(d--, 1);
              var c = n();
              void 0 !== c && (e = c);
            }
          }
          return e;
        }
        r = r || 0;
        for (var d = t.length; d > 0 && t[d - 1][2] > r; d--) t[d] = t[d - 1];
        t[d] = [a, n, r];
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
        return "js/" + t + ".f178c3c8.js";
      };
    })(),
    (function () {
      i.miniCssF = function (t) {
        return "css/" + t + ".b0e38bbf.css";
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
      i.l = function (a, n, r, l) {
        if (t[a]) t[a].push(n);
        else {
          var s, o;
          if (void 0 !== r)
            for (
              var c = document.getElementsByTagName("script"), d = 0;
              d < c.length;
              d++
            ) {
              var p = c[d];
              if (
                p.getAttribute("src") == a ||
                p.getAttribute("data-webpack") == e + r
              ) {
                s = p;
                break;
              }
            }
          s ||
            ((o = !0),
            (s = document.createElement("script")),
            (s.charset = "utf-8"),
            (s.timeout = 120),
            i.nc && s.setAttribute("nonce", i.nc),
            s.setAttribute("data-webpack", e + r),
            (s.src = a)),
            (t[a] = [n]);
          var h = function (e, i) {
              (s.onerror = s.onload = null), clearTimeout(u);
              var n = t[a];
              if (
                (delete t[a],
                s.parentNode && s.parentNode.removeChild(s),
                n &&
                  n.forEach(function (t) {
                    return t(i);
                  }),
                e)
              )
                return e(i);
            },
            u = setTimeout(
              h.bind(null, void 0, { type: "timeout", target: s }),
              12e4
            );
          (s.onerror = h.bind(null, s.onerror)),
            (s.onload = h.bind(null, s.onload)),
            o && document.head.appendChild(s);
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
      i.p = "/";
    })(),
    (function () {
      if ("undefined" !== typeof document) {
        var t = function (t, e, i, a, n) {
            var r = document.createElement("link");
            (r.rel = "stylesheet"), (r.type = "text/css");
            var l = function (i) {
              if (((r.onerror = r.onload = null), "load" === i.type)) a();
              else {
                var l = i && ("load" === i.type ? "missing" : i.type),
                  s = (i && i.target && i.target.href) || e,
                  o = new Error(
                    "Loading CSS chunk " + t + " failed.\n(" + s + ")"
                  );
                (o.code = "CSS_CHUNK_LOAD_FAILED"),
                  (o.type = l),
                  (o.request = s),
                  r.parentNode && r.parentNode.removeChild(r),
                  n(o);
              }
            };
            return (
              (r.onerror = r.onload = l),
              (r.href = e),
              i
                ? i.parentNode.insertBefore(r, i.nextSibling)
                : document.head.appendChild(r),
              r
            );
          },
          e = function (t, e) {
            for (
              var i = document.getElementsByTagName("link"), a = 0;
              a < i.length;
              a++
            ) {
              var n = i[a],
                r = n.getAttribute("data-href") || n.getAttribute("href");
              if ("stylesheet" === n.rel && (r === t || r === e)) return n;
            }
            var l = document.getElementsByTagName("style");
            for (a = 0; a < l.length; a++) {
              (n = l[a]), (r = n.getAttribute("data-href"));
              if (r === t || r === e) return n;
            }
          },
          a = function (a) {
            return new Promise(function (n, r) {
              var l = i.miniCssF(a),
                s = i.p + l;
              if (e(l, s)) return n();
              t(a, s, null, n, r);
            });
          },
          n = { 143: 0 };
        i.f.miniCss = function (t, e) {
          var i = { 356: 1 };
          n[t]
            ? e.push(n[t])
            : 0 !== n[t] &&
              i[t] &&
              e.push(
                (n[t] = a(t).then(
                  function () {
                    n[t] = 0;
                  },
                  function (e) {
                    throw (delete n[t], e);
                  }
                ))
              );
        };
      }
    })(),
    (function () {
      var t = { 143: 0 };
      (i.f.j = function (e, a) {
        var n = i.o(t, e) ? t[e] : void 0;
        if (0 !== n)
          if (n) a.push(n[2]);
          else {
            var r = new Promise(function (i, a) {
              n = t[e] = [i, a];
            });
            a.push((n[2] = r));
            var l = i.p + i.u(e),
              s = new Error(),
              o = function (a) {
                if (i.o(t, e) && ((n = t[e]), 0 !== n && (t[e] = void 0), n)) {
                  var r = a && ("load" === a.type ? "missing" : a.type),
                    l = a && a.target && a.target.src;
                  (s.message =
                    "Loading chunk " + e + " failed.\n(" + r + ": " + l + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = r),
                    (s.request = l),
                    n[1](s);
                }
              };
            i.l(l, o, "chunk-" + e, e);
          }
      }),
        (i.O.j = function (e) {
          return 0 === t[e];
        });
      var e = function (e, a) {
          var n,
            r,
            l = a[0],
            s = a[1],
            o = a[2],
            c = 0;
          if (
            l.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (n in s) i.o(s, n) && (i.m[n] = s[n]);
            if (o) var d = o(i);
          }
          for (e && e(a); c < l.length; c++)
            (r = l[c]), i.o(t, r) && t[r] && t[r][0](), (t[r] = 0);
          return i.O(d);
        },
        a = (self["webpackChunky_project"] =
          self["webpackChunky_project"] || []);
      a.forEach(e.bind(null, 0)), (a.push = e.bind(null, a.push.bind(a)));
    })();
  var a = i.O(void 0, [998], function () {
    return i(5154);
  });
  a = i.O(a);
})();
//# sourceMappingURL=app.ec4f3b1b.js.map
