(function () {
  "use strict";
  var t = {
      4210: function (t, e, i) {
        var n = i(6369),
          o = i(8499),
          a = i.n(o),
          l = function () {
            var t = this,
              e = t._self._c;
            return e("div", { attrs: { id: "app" } }, [e("router-view")], 1);
          },
          r = [],
          s = i(1001),
          c = {},
          u = (0, s.Z)(c, l, r, !1, null, null, null),
          d = u.exports,
          p = i(2631),
          m = function () {
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
          h = [],
          v = {
            name: "home",
            methods: {
              handleSelect(t, e) {
                console.log("index", t), console.log("path", e);
              },
            },
          },
          f = v,
          b = (0, s.Z)(f, m, h, !1, null, "320d453d", null),
          x = b.exports,
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
                    e("div", { staticClass: "box box1" }, [t._v("伤病诊断")]),
                  ]),
                  e("el-card", [
                    e("div", { staticClass: "box box2" }, [t._v("药品查询")]),
                  ]),
                ],
                1
              );
            }),
          g = [],
          _ = {},
          S = _,
          w = (0, s.Z)(S, y, g, !1, null, "827ed4be", null),
          C = w.exports,
          O = function () {
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
          j = [],
          k = {
            data() {
              return { isShow: !1 };
            },
          },
          Z = k,
          P = (0, s.Z)(Z, O, j, !1, null, "e870827e", null),
          z = P.exports,
          T = function () {
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
                              " 先抢后救：使处于危险境地的伤病员尽快脱离险地，移至安全地带后再救治。灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点灾难特点 "
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
          M = [],
          $ = {
            data() {
              return { search: null };
            },
          },
          E = $,
          F = (0, s.Z)(E, T, M, !1, null, "737faac0", null),
          q = F.exports;
        n["default"].use(p.ZP);
        const A = [
            {
              path: "/",
              name: "home",
              component: x,
              redirect: "/home/main",
              children: [
                { path: "/home/main", name: "main", component: C },
                { path: "/home/shoushi", name: "main", component: z },
                { path: "/home/one", name: "main", component: q },
              ],
            },
          ],
          B = new p.ZP({ routes: A });
        var D = B,
          G = i(3822);
        n["default"].use(G.ZP);
        var H = new G.ZP.Store({
          state: {},
          getters: {},
          mutations: {},
          actions: {},
          modules: {},
        });
        n["default"].use(a()),
          (n["default"].config.productionTip = !1),
          new n["default"]({ router: D, store: H, render: (t) => t(d) }).$mount(
            "#app"
          );
      },
    },
    e = {};
  function i(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var a = (e[n] = { id: n, loaded: !1, exports: {} });
    return t[n](a, a.exports, i), (a.loaded = !0), a.exports;
  }
  (i.m = t),
    (function () {
      i.amdO = {};
    })(),
    (function () {
      var t = [];
      i.O = function (e, n, o, a) {
        if (!n) {
          var l = 1 / 0;
          for (u = 0; u < t.length; u++) {
            (n = t[u][0]), (o = t[u][1]), (a = t[u][2]);
            for (var r = !0, s = 0; s < n.length; s++)
              (!1 & a || l >= a) &&
              Object.keys(i.O).every(function (t) {
                return i.O[t](n[s]);
              })
                ? n.splice(s--, 1)
                : ((r = !1), a < l && (l = a));
            if (r) {
              t.splice(u--, 1);
              var c = o();
              void 0 !== c && (e = c);
            }
          }
          return e;
        }
        a = a || 0;
        for (var u = t.length; u > 0 && t[u - 1][2] > a; u--) t[u] = t[u - 1];
        t[u] = [n, o, a];
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
        for (var n in e)
          i.o(e, n) &&
            !i.o(t, n) &&
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
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
      var t = { 143: 0 };
      i.O.j = function (e) {
        return 0 === t[e];
      };
      var e = function (e, n) {
          var o,
            a,
            l = n[0],
            r = n[1],
            s = n[2],
            c = 0;
          if (
            l.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (o in r) i.o(r, o) && (i.m[o] = r[o]);
            if (s) var u = s(i);
          }
          for (e && e(n); c < l.length; c++)
            (a = l[c]), i.o(t, a) && t[a] && t[a][0](), (t[a] = 0);
          return i.O(u);
        },
        n = (self["webpackChunky_project"] =
          self["webpackChunky_project"] || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
  var n = i.O(void 0, [998], function () {
    return i(4210);
  });
  n = i.O(n);
})();
//# sourceMappingURL=app.9d4dcf3e.js.map
