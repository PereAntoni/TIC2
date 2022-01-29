this.wordle = this.wordle || {},
    this.wordle.bundle = function (e) {

        "use strict";
        var sol;
        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } :
                function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
            )(e)
        }

        function s(e, a) {
            if (!(e instanceof a))
                throw new TypeError("Cannot call a class as a function")
        }

        function t(e, a) {
            for (var s = 0; s < a.length; s++) {
                var t = a[s];
                t.enumerable = t.enumerable || !1,
                    t.configurable = !0,
                    "value" in t && (t.writable = !0),
                    Object.defineProperty(e, t.key, t)
            }
        }

        function o(e, a, s) {
            return a && t(e.prototype, a),
                s && t(e, s),
                e
        }

        function n(e, a, s) {
            return a in e ? Object.defineProperty(e, a, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = s,
                e
        }

        function r(e, a) {
            if ("function" != typeof a && null !== a)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(a && a.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                a && l(e, a)
        }

        function i(e) {
            return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function l(e, a) {
            return (l = Object.setPrototypeOf || function (e, a) {
                return e.__proto__ = a,
                    e
            })(e, a)
        }

        function d() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))),
                    !0
            } catch (e) {
                return !1
            }
        }

        function u(e, a, s) {
            return (u = d() ? Reflect.construct : function (e, a, s) {
                var t = [null];
                t.push.apply(t, a);
                var o = new(Function.bind.apply(e, t));
                return s && l(o, s.prototype),
                    o
            }).apply(null, arguments)
        }

        function c(e) {
            var a = "function" == typeof Map ? new Map : void 0;
            return (c = function (e) {
                if (null === e || (s = e,
                        -1 === Function.toString.call(s).indexOf("[native code]")))
                    return e;
                var s;
                if ("function" != typeof e)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== a) {
                    if (a.has(e))
                        return a.get(e);
                    a.set(e, t)
                }

                function t() {
                    return u(e, arguments, i(this).constructor)
                }
                return t.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    l(t, e)
            })(e)
        }

        function p(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function m(e, a) {
            return !a || "object" != typeof a && "function" != typeof a ? p(e) : a
        }

        function h(e) {
            var a = d();
            return function () {
                var s, t = i(e);
                if (a) {
                    var o = i(this).constructor;
                    s = Reflect.construct(t, arguments, o)
                } else
                    s = t.apply(this, arguments);
                return m(this, s)
            }
        }

        function y(e, a) {
            return function (e) {
                if (Array.isArray(e))
                    return e
            }(e) || function (e, a) {
                var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == s)
                    return;
                var t, o, n = [],
                    r = !0,
                    i = !1;
                try {
                    for (s = s.call(e); !(r = (t = s.next()).done) && (n.push(t.value),
                            !a || n.length !== a); r = !0)
                    ;
                } catch (e) {
                    i = !0,
                        o = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (i)
                            throw o
                    }
                }
                return n
            }(e, a) || b(e, a) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function g(e) {
            return function (e) {
                if (Array.isArray(e))
                    return f(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || b(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function b(e, a) {
            if (e) {
                if ("string" == typeof e)
                    return f(e, a);
                var s = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === s && e.constructor && (s = e.constructor.name),
                    "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : void 0
            }
        }

        function f(e, a) {
            (null == a || a > e.length) && (a = e.length);
            for (var s = 0, t = new Array(a); s < a; s++)
                t[s] = e[s];
            return t
        }
        var k = document.createElement("template");
        k.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 150ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
        var v = function (e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t),
                    n(p(e = a.call(this)), "_letter", ""),
                    n(p(e), "_state", "empty"),
                    n(p(e), "_animation", "idle"),
                    n(p(e), "_last", !1),
                    n(p(e), "_reveal", !1),
                    e.attachShadow({
                        mode: "open"
                    }),
                    e
            }
            return o(t, [{
                    key: "last",
                    set: function (e) {
                        this._last = e
                    }
                }, {
                    key: "connectedCallback",
                    value: function () {
                        var e = this;
                        this.shadowRoot.appendChild(k.content.cloneNode(!0)),
                            this.$tile = this.shadowRoot.querySelector(".tile"),
                            this.$tile.addEventListener("animationend", (function (a) {
                                "PopIn" === a.animationName && (e._animation = "idle"),
                                    "FlipIn" === a.animationName && (e.$tile.dataset.state = e._state,
                                        e._animation = "flip-out"),
                                    "FlipOut" === a.animationName && (e._animation = "idle",
                                        e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", {
                                            bubbles: !0,
                                            composed: !0
                                        }))),
                                    e._render()
                            })),
                            this._render()
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function (e, a, s) {
                        switch (e) {
                            case "letter":
                                if (s === a)
                                    break;
                                var t = "null" === s ? "" : s;
                                this._letter = t,
                                    this._state = t ? "tbd" : "empty",
                                    this._animation = t ? "pop" : "idle";
                                break;
                            case "evaluation":
                                if (!s)
                                    break;
                                this._state = s;
                                break;
                            case "reveal":
                                this._animation = "flip-in",
                                    this._reveal = !0
                        }
                        this._render()
                    }
                }, {
                    key: "_render",
                    value: function () {
                        this.$tile && (this.$tile.textContent = this._letter,
                            ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state),
                            (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation))
                    }
                }], [{
                    key: "observedAttributes",
                    get: function () {
                        return ["letter", "evaluation", "reveal"]
                    }
                }]),
                t
        }(c(HTMLElement));
        customElements.define("game-tile", v);
        var w = document.createElement("template");
        w.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
        var x = function (e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t),
                    (e = a.call(this)).attachShadow({
                        mode: "open"
                    }),
                    e._letters = "",
                    e._evaluation = [],
                    e._length,
                    e
            }
            return o(t, [{
                    key: "evaluation",
                    get: function () {
                        return this._evaluation
                    },
                    set: function (e) {
                        var a = this;
                        this._evaluation = e,
                            this.$tiles && this.$tiles.forEach((function (e, s) {
                                e.setAttribute("evaluation", a._evaluation[s]),
                                    setTimeout((function () {
                                        e.setAttribute("reveal", "")
                                    }), 300 * s)
                            }))
                    }
                }, {
                    key: "connectedCallback",
                    value: function () {
                        var e = this;
                        this.shadowRoot.appendChild(w.content.cloneNode(!0)),
                            this.$row = this.shadowRoot.querySelector(".row");
                        for (var a = function (a) {
                                var s = document.createElement("game-tile"),
                                    t = e._letters[a];
                                (t && s.setAttribute("letter", t),
                                    e._evaluation[a]) && (s.setAttribute("evaluation", e._evaluation[a]),
                                    setTimeout((function () {
                                        s.setAttribute("reveal", "")
                                    }), 100 * a));
                                a === e._length - 1 && (s.last = !0),
                                    e.$row.appendChild(s)
                            }, s = 0; s < this._length; s++)
                            a(s);
                        this.$tiles = this.shadowRoot.querySelectorAll("game-tile"),
                            this.addEventListener("animationend", (function (a) {
                                "Shake" === a.animationName && e.removeAttribute("invalid")
                            }))
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function (e, a, s) {
                        switch (e) {
                            case "letters":
                                this._letters = s || "";
                                break;
                            case "length":
                                this._length = parseInt(s, 10);
                                break;
                            case "win":
                                if (null === s) {
                                    this.$tiles.forEach((function (e) {
                                        e.classList.remove("win")
                                    }));
                                    break
                                }
                                this.$tiles.forEach((function (e, a) {
                                    e.classList.add("win"),
                                        e.style.animationDelay = "".concat(100 * a, "ms")
                                }))
                        }
                        this._render()
                    }
                }, {
                    key: "_render",
                    value: function () {
                        var e = this;
                        this.$row && this.$tiles.forEach((function (a, s) {
                            var t = e._letters[s];
                            t ? a.setAttribute("letter", t) : a.removeAttribute("letter")
                        }))
                    }
                }], [{
                    key: "observedAttributes",
                    get: function () {
                        return ["letters", "length", "invalid", "win"]
                    }
                }]),
                t
        }(c(HTMLElement));
        customElements.define("game-row", x);
        var z = document.createElement("template");
        z.innerHTML = "\n  <slot></slot>\n";
        var j = "darkTheme",
            S = "colorBlindTheme",
            _ = function (e) {
                r(t, e);
                var a = h(t);

                function t() {
                    var e;
                    s(this, t),
                        n(p(e = a.call(this)), "isDarkTheme", !1),
                        n(p(e), "isColorBlindTheme", !1),
                        e.attachShadow({
                            mode: "open"
                        });
                    var o = JSON.parse(window.localStorage.getItem(j)),
                        r = window.matchMedia("(prefers-color-scheme: dark)").matches,
                        i = JSON.parse(window.localStorage.getItem(S));
                    return !0 === o || !1 === o ? e.setDarkTheme(o) : r && e.setDarkTheme(!0),
                        !0 !== i && !1 !== i || e.setColorBlindTheme(i),
                        e
                }
                return o(t, [{
                        key: "setDarkTheme",
                        value: function (e) {
                            var a = document.querySelector("body");
                            e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"),
                                this.isDarkTheme = e,
                                window.localStorage.setItem(j, JSON.stringify(e))
                        }
                    }, {
                        key: "setColorBlindTheme",
                        value: function (e) {
                            var a = document.querySelector("body");
                            e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"),
                                this.isColorBlindTheme = e,
                                window.localStorage.setItem(S, JSON.stringify(e))
                        }
                    }, {
                        key: "connectedCallback",
                        value: function () {
                            var e = this;
                            this.shadowRoot.appendChild(z.content.cloneNode(!0)),
                                this.shadowRoot.addEventListener("game-setting-change", (function (a) {
                                    var s = a.detail,
                                        t = s.name,
                                        o = s.checked;
                                    switch (t) {
                                        case "dark-theme":
                                            return void e.setDarkTheme(o);
                                        case "color-blind-theme":
                                            return void e.setColorBlindTheme(o)
                                    }
                                }))
                        }
                    }]),
                    t
            }(c(HTMLElement));

        function q(e, a) {
            return e === a || e != e && a != a
        }

        function E(e, a) {
            for (var s = e.length; s--;)
                if (q(e[s][0], a))
                    return s;
            return -1
        }
        customElements.define("game-theme-manager", _);
        var A = Array.prototype.splice;

        function C(e) {
            var a = -1,
                s = null == e ? 0 : e.length;
            for (this.clear(); ++a < s;) {
                var t = e[a];
                this.set(t[0], t[1])
            }
        }
        C.prototype.clear = function () {
                this.__data__ = [],
                    this.size = 0
            },
            C.prototype.delete = function (e) {
                var a = this.__data__,
                    s = E(a, e);
                return !(s < 0) && (s == a.length - 1 ? a.pop() : A.call(a, s, 1),
                    --this.size,
                    !0)
            },
            C.prototype.get = function (e) {
                var a = this.__data__,
                    s = E(a, e);
                return s < 0 ? void 0 : a[s][1]
            },
            C.prototype.has = function (e) {
                return E(this.__data__, e) > -1
            },
            C.prototype.set = function (e, a) {
                var s = this.__data__,
                    t = E(s, e);
                return t < 0 ? (++this.size,
                        s.push([e, a])) : s[t][1] = a,
                    this
            };
        var L = "object" == ("undefined" == typeof global ? "undefined" : a(global)) && global && global.Object === Object && global,
            T = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
            I = L || T || Function("return this")(),
            M = I.Symbol,
            O = Object.prototype,
            R = O.hasOwnProperty,
            $ = O.toString,
            P = M ? M.toStringTag : void 0;
        var H = Object.prototype.toString;
        var N = M ? M.toStringTag : void 0;

        function D(e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : N && N in Object(e) ? function (e) {
                var a = R.call(e, P),
                    s = e[P];
                try {
                    e[P] = void 0;
                    var t = !0
                } catch (e) {}
                var o = $.call(e);
                return t && (a ? e[P] = s : delete e[P]),
                    o
            }(e) : function (e) {
                return H.call(e)
            }(e)
        }

        function G(e) {
            var s = a(e);
            return null != e && ("object" == s || "function" == s)
        }

        function B(e) {
            if (!G(e))
                return !1;
            var a = D(e);
            return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a
        }
        var F, W = I["__core-js_shared__"],
            Y = (F = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "";
        var J = Function.prototype.toString;
        var U = /^\[object .+?Constructor\]$/,
            X = Function.prototype,
            V = Object.prototype,
            K = X.toString,
            Q = V.hasOwnProperty,
            Z = RegExp("^" + K.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function ee(e) {
            return !(!G(e) || (a = e,
                Y && Y in a)) && (B(e) ? Z : U).test(function (e) {
                if (null != e) {
                    try {
                        return J.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }(e));
            var a
        }

        function ae(e, a) {
            var s = function (e, a) {
                return null == e ? void 0 : e[a]
            }(e, a);
            return ee(s) ? s : void 0
        }
        var se = ae(I, "Map"),
            te = ae(Object, "create");
        var oe = Object.prototype.hasOwnProperty;
        var ne = Object.prototype.hasOwnProperty;

        function re(e) {
            var a = -1,
                s = null == e ? 0 : e.length;
            for (this.clear(); ++a < s;) {
                var t = e[a];
                this.set(t[0], t[1])
            }
        }

        function ie(e, s) {
            var t, o, n = e.__data__;
            return ("string" == (o = a(t = s)) || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== t : null === t) ? n["string" == typeof s ? "string" : "hash"] : n.map
        }

        function le(e) {
            var a = -1,
                s = null == e ? 0 : e.length;
            for (this.clear(); ++a < s;) {
                var t = e[a];
                this.set(t[0], t[1])
            }
        }
        re.prototype.clear = function () {
                this.__data__ = te ? te(null) : {},
                    this.size = 0
            },
            re.prototype.delete = function (e) {
                var a = this.has(e) && delete this.__data__[e];
                return this.size -= a ? 1 : 0,
                    a
            },
            re.prototype.get = function (e) {
                var a = this.__data__;
                if (te) {
                    var s = a[e];
                    return "__lodash_hash_undefined__" === s ? void 0 : s
                }
                return oe.call(a, e) ? a[e] : void 0
            },
            re.prototype.has = function (e) {
                var a = this.__data__;
                return te ? void 0 !== a[e] : ne.call(a, e)
            },
            re.prototype.set = function (e, a) {
                var s = this.__data__;
                return this.size += this.has(e) ? 0 : 1,
                    s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a,
                    this
            },
            le.prototype.clear = function () {
                this.size = 0,
                    this.__data__ = {
                        hash: new re,
                        map: new(se || C),
                        string: new re
                    }
            },
            le.prototype.delete = function (e) {
                var a = ie(this, e).delete(e);
                return this.size -= a ? 1 : 0,
                    a
            },
            le.prototype.get = function (e) {
                return ie(this, e).get(e)
            },
            le.prototype.has = function (e) {
                return ie(this, e).has(e)
            },
            le.prototype.set = function (e, a) {
                var s = ie(this, e),
                    t = s.size;
                return s.set(e, a),
                    this.size += s.size == t ? 0 : 1,
                    this
            };

        function de(e) {
            var a = this.__data__ = new C(e);
            this.size = a.size
        }
        de.prototype.clear = function () {
                this.__data__ = new C,
                    this.size = 0
            },
            de.prototype.delete = function (e) {
                var a = this.__data__,
                    s = a.delete(e);
                return this.size = a.size,
                    s
            },
            de.prototype.get = function (e) {
                return this.__data__.get(e)
            },
            de.prototype.has = function (e) {
                return this.__data__.has(e)
            },
            de.prototype.set = function (e, a) {
                var s = this.__data__;
                if (s instanceof C) {
                    var t = s.__data__;
                    if (!se || t.length < 199)
                        return t.push([e, a]),
                            this.size = ++s.size,
                            this;
                    s = this.__data__ = new le(t)
                }
                return s.set(e, a),
                    this.size = s.size,
                    this
            };
        var ue = function () {
            try {
                var e = ae(Object, "defineProperty");
                return e({}, "", {}),
                    e
            } catch (e) {}
        }();

        function ce(e, a, s) {
            "__proto__" == a && ue ? ue(e, a, {
                configurable: !0,
                enumerable: !0,
                value: s,
                writable: !0
            }) : e[a] = s
        }

        function pe(e, a, s) {
            (void 0 !== s && !q(e[a], s) || void 0 === s && !(a in e)) && ce(e, a, s)
        }
        var me, he = function (e, a, s) {
                for (var t = -1, o = Object(e), n = s(e), r = n.length; r--;) {
                    var i = n[me ? r : ++t];
                    if (!1 === a(o[i], i, o))
                        break
                }
                return e
            },
            ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
            ge = ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
            be = ge && ge.exports === ye ? I.Buffer : void 0,
            fe = be ? be.allocUnsafe : void 0;
        var ke = I.Uint8Array;

        function ve(e, a) {
            var s, t, o = a ? (s = e.buffer,
                t = new s.constructor(s.byteLength),
                new ke(t).set(new ke(s)),
                t) : e.buffer;
            return new e.constructor(o, e.byteOffset, e.length)
        }
        var we = Object.create,
            xe = function () {
                function e() {}
                return function (a) {
                    if (!G(a))
                        return {};
                    if (we)
                        return we(a);
                    e.prototype = a;
                    var s = new e;
                    return e.prototype = void 0,
                        s
                }
            }();
        var ze, je, Se = (ze = Object.getPrototypeOf,
                je = Object,
                function (e) {
                    return ze(je(e))
                }
            ),
            _e = Object.prototype;

        function qe(e) {
            var a = e && e.constructor;
            return e === ("function" == typeof a && a.prototype || _e)
        }

        function Ee(e) {
            return null != e && "object" == a(e)
        }

        function Ae(e) {
            return Ee(e) && "[object Arguments]" == D(e)
        }
        var Ce = Object.prototype,
            Le = Ce.hasOwnProperty,
            Te = Ce.propertyIsEnumerable,
            Ie = Ae(function () {
                return arguments
            }()) ? Ae : function (e) {
                return Ee(e) && Le.call(e, "callee") && !Te.call(e, "callee")
            },
            Me = Array.isArray;

        function Oe(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        }

        function Re(e) {
            return null != e && Oe(e.length) && !B(e)
        }
        var $e = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
            Pe = $e && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
            He = Pe && Pe.exports === $e ? I.Buffer : void 0,
            Ne = (He ? He.isBuffer : void 0) || function () {
                return !1
            },
            De = Function.prototype,
            Ge = Object.prototype,
            Be = De.toString,
            Fe = Ge.hasOwnProperty,
            We = Be.call(Object);
        var Ye = {};
        Ye["[object Float32Array]"] = Ye["[object Float64Array]"] = Ye["[object Int8Array]"] = Ye["[object Int16Array]"] = Ye["[object Int32Array]"] = Ye["[object Uint8Array]"] = Ye["[object Uint8ClampedArray]"] = Ye["[object Uint16Array]"] = Ye["[object Uint32Array]"] = !0,
            Ye["[object Arguments]"] = Ye["[object Array]"] = Ye["[object ArrayBuffer]"] = Ye["[object Boolean]"] = Ye["[object DataView]"] = Ye["[object Date]"] = Ye["[object Error]"] = Ye["[object Function]"] = Ye["[object Map]"] = Ye["[object Number]"] = Ye["[object Object]"] = Ye["[object RegExp]"] = Ye["[object Set]"] = Ye["[object String]"] = Ye["[object WeakMap]"] = !1;
        var Je = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
            Ue = Je && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
            Xe = Ue && Ue.exports === Je && L.process,
            Ve = function () {
                try {
                    var e = Ue && Ue.require && Ue.require("util").types;
                    return e || Xe && Xe.binding && Xe.binding("util")
                } catch (e) {}
            }(),
            Ke = Ve && Ve.isTypedArray,
            Qe = Ke ? function (e) {
                return function (a) {
                    return e(a)
                }
            }(Ke) : function (e) {
                return Ee(e) && Oe(e.length) && !!Ye[D(e)]
            };

        function Ze(e, a) {
            if (("constructor" !== a || "function" != typeof e[a]) && "__proto__" != a)
                return e[a]
        }
        var ea = Object.prototype.hasOwnProperty;

        function aa(e, a, s) {
            var t = e[a];
            ea.call(e, a) && q(t, s) && (void 0 !== s || a in e) || ce(e, a, s)
        }
        var sa = /^(?:0|[1-9]\d*)$/;

        function ta(e, s) {
            var t = a(e);
            return !!(s = null == s ? 9007199254740991 : s) && ("number" == t || "symbol" != t && sa.test(e)) && e > -1 && e % 1 == 0 && e < s
        }
        var oa = Object.prototype.hasOwnProperty;

        function na(e, a) {
            var s = Me(e),
                t = !s && Ie(e),
                o = !s && !t && Ne(e),
                n = !s && !t && !o && Qe(e),
                r = s || t || o || n,
                i = r ? function (e, a) {
                    for (var s = -1, t = Array(e); ++s < e;)
                        t[s] = a(s);
                    return t
                }(e.length, String) : [],
                l = i.length;
            for (var d in e)
                !a && !oa.call(e, d) || r && ("length" == d || o && ("offset" == d || "parent" == d) || n && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ta(d, l)) || i.push(d);
            return i
        }
        var ra = Object.prototype.hasOwnProperty;

        function ia(e) {
            if (!G(e))
                return function (e) {
                    var a = [];
                    if (null != e)
                        for (var s in Object(e))
                            a.push(s);
                    return a
                }(e);
            var a = qe(e),
                s = [];
            for (var t in e)
                ("constructor" != t || !a && ra.call(e, t)) && s.push(t);
            return s
        }

        function la(e) {
            return Re(e) ? na(e, !0) : ia(e)
        }

        function da(e) {
            return function (e, a, s, t) {
                var o = !s;
                s || (s = {});
                for (var n = -1, r = a.length; ++n < r;) {
                    var i = a[n],
                        l = t ? t(s[i], e[i], i, s, e) : void 0;
                    void 0 === l && (l = e[i]),
                        o ? ce(s, i, l) : aa(s, i, l)
                }
                return s
            }(e, la(e))
        }

        function ua(e, a, s, t, o, n, r) {
            var i = Ze(e, s),
                l = Ze(a, s),
                d = r.get(l);
            if (d)
                pe(e, s, d);
            else {
                var u, c = n ? n(i, l, s + "", e, a, r) : void 0,
                    p = void 0 === c;
                if (p) {
                    var m = Me(l),
                        h = !m && Ne(l),
                        y = !m && !h && Qe(l);
                    c = l,
                        m || h || y ? Me(i) ? c = i : Ee(u = i) && Re(u) ? c = function (e, a) {
                            var s = -1,
                                t = e.length;
                            for (a || (a = Array(t)); ++s < t;)
                                a[s] = e[s];
                            return a
                        }(i) : h ? (p = !1,
                            c = function (e, a) {
                                if (a)
                                    return e.slice();
                                var s = e.length,
                                    t = fe ? fe(s) : new e.constructor(s);
                                return e.copy(t),
                                    t
                            }(l, !0)) : y ? (p = !1,
                            c = ve(l, !0)) : c = [] : function (e) {
                            if (!Ee(e) || "[object Object]" != D(e))
                                return !1;
                            var a = Se(e);
                            if (null === a)
                                return !0;
                            var s = Fe.call(a, "constructor") && a.constructor;
                            return "function" == typeof s && s instanceof s && Be.call(s) == We
                        }(l) || Ie(l) ? (c = i,
                            Ie(i) ? c = da(i) : G(i) && !B(i) || (c = function (e) {
                                return "function" != typeof e.constructor || qe(e) ? {} : xe(Se(e))
                            }(l))) : p = !1
                }
                p && (r.set(l, c),
                        o(c, l, t, n, r),
                        r.delete(l)),
                    pe(e, s, c)
            }
        }

        function ca(e, a, s, t, o) {
            e !== a && he(a, (function (n, r) {
                if (o || (o = new de),
                    G(n))
                    ua(e, a, r, s, ca, t, o);
                else {
                    var i = t ? t(Ze(e, r), n, r + "", e, a, o) : void 0;
                    void 0 === i && (i = n),
                        pe(e, r, i)
                }
            }), la)
        }

        function pa(e) {
            return e
        }

        function ma(e, a, s) {
            switch (s.length) {
                case 0:
                    return e.call(a);
                case 1:
                    return e.call(a, s[0]);
                case 2:
                    return e.call(a, s[0], s[1]);
                case 3:
                    return e.call(a, s[0], s[1], s[2])
            }
            return e.apply(a, s)
        }
        var ha = Math.max;
        var ya = ue ? function (e, a) {
                return ue(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: (s = a,
                        function () {
                            return s
                        }
                    ),
                    writable: !0
                });
                var s
            } :
            pa,
            ga = Date.now;
        var ba = function (e) {
            var a = 0,
                s = 0;
            return function () {
                var t = ga(),
                    o = 16 - (t - s);
                if (s = t,
                    o > 0) {
                    if (++a >= 800)
                        return arguments[0]
                } else
                    a = 0;
                return e.apply(void 0, arguments)
            }
        }(ya);

        function fa(e, a) {
            return ba(function (e, a, s) {
                return a = ha(void 0 === a ? e.length - 1 : a, 0),
                    function () {
                        for (var t = arguments, o = -1, n = ha(t.length - a, 0), r = Array(n); ++o < n;)
                            r[o] = t[a + o];
                        o = -1;
                        for (var i = Array(a + 1); ++o < a;)
                            i[o] = t[o];
                        return i[a] = s(r),
                            ma(e, this, i)
                    }
            }(e, a, pa), e + "")
        }
        var ka, va = (ka = function (e, a, s) {
                    ca(e, a, s)
                },
                fa((function (e, s) {
                    var t = -1,
                        o = s.length,
                        n = o > 1 ? s[o - 1] : void 0,
                        r = o > 2 ? s[2] : void 0;
                    for (n = ka.length > 3 && "function" == typeof n ? (o--,
                            n) : void 0,
                        r && function (e, s, t) {
                            if (!G(t))
                                return !1;
                            var o = a(s);
                            return !!("number" == o ? Re(t) && ta(s, t.length) : "string" == o && s in t) && q(t[s], e)
                        }(s[0], s[1], r) && (n = o < 3 ? void 0 : n,
                            o = 1),
                        e = Object(e); ++t < o;) {
                        var i = s[t];
                        i && ka(e, i, t, n)
                    }
                    return e
                }))),
            wa = "gameState",
            xa = {
                boardState: null,
                evaluations: null,
                rowIndex: null,
                solution: null,
                gameStatus: null,
                lastPlayedTs: null,
                lastCompletedTs: null,
                restoringFromLocalStorage: null,
                hardMode: !1
            };

        function za() {
            var e = window.localStorage.getItem(wa) || JSON.stringify(xa);
            return JSON.parse(e)
        }

        function ja(e) {
            var a = za();
            ! function (e) {
                window.localStorage.setItem(wa, JSON.stringify(e))
            }(va(a, e))
        }
        var Sa = document.createElement("template");
        Sa.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  } .ad{display: none;padding: 0 10px;}\n .account{\ndisplay:flex;\n padding: 16px;justify-content: space-between;} .account button{\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: calc(50% - 5px);\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }.account button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Mode Guiat</div>\n          <div class="description">Qualsevol pista revelada s\'ha d\'utilitzar en intents posteriors</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Aparença Fosca</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Colors Paraulògic</div>\n          <div class="description">Útil per a persones amb daltonisme</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Comentaris</div>\n        </div>\n        <div class="control">\n          <a href="mailto:wordle@gelozp.com?subject=WordleCAT" title="wordle@gelozp.com">Email</a> | <a href="https://instagram.com/WordleCAT" target="_blank" title="@WordleCAT">Instagram</a> | <a href="https://twitter.com/WordleCAT" target="_blank" title="@WordleCAT">Twitter</a>       </div>\n      </div>\n    </section>\n <section>    <div class="ad"> \n      <a href="https://gelozp.com/games/wordle" target="_blank" style="display: contents;"> \n       <img src="https://gelozp.com/games/wordle/img/ad2.png" alt="" style="width: calc(100% - 30px);margin-top: 25px;padding: 0 15px;"></a> </div>\n  </section>\n<section>    <div class="account"> \n      <button id="export-button">Exportar<game-icon icon="export"></game-icon> \n</button> \n       <button id="import-button">Importar<game-icon icon="import"></game-icon> \n</button>\n  </section>\n  </div>\n  <div id="footnote">\n    <div id="puzzle-number"></div>\n <div id="code"> Adaptació de <a href="https://twitter.com/GeloZP/" title="Adaptació de Gerard López López">Gerard López López</a> </div> \n    <div id="originalgame"> Basat en el joc <a href="https://www.powerlanguage.co.uk/wordle/" title="Wordle">Wordle</a> de <a href="https://twitter.com/powerlanguish/" title="Josh Wardle">Josh Wardle</a>\n  <div id="credits"> Agraïments:  <a href="http://diccionari.totescrable.cat" title="Crèdits">Diccionari de l’Scrabble (DISC)</a> </div>\n    <div id="hash"></div>\n  <div>\n';
        var _a = function (e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t),
                    n(p(e = a.call(this)), "gameApp", void 0),
                    e.attachShadow({
                        mode: "open"
                    }),
                    e
            }
            return o(t, [{
                key: "addToast",
                value: function (e, a) {
                    var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        t = document.createElement("game-toast");
                    t.setAttribute("text", e),
                        a && t.setAttribute("duration", a),
                        s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
                }
            },
            {
                    key: "connectedCallback",
                    value: function () {
                        var e, a = this;
                        this.shadowRoot.appendChild(Sa.content.cloneNode(!0)),
                            this.shadowRoot.querySelector("#hash").textContent = null === (e = window.wordle) || void 0 === e ? void 0 : e.hash,
                            this.shadowRoot.querySelector("#puzzle-number").textContent = "WordleCAT #".concat(this.gameApp.dayOffset),
                            this.shadowRoot.addEventListener("game-switch-change", (function (e) {
                                e.stopPropagation();
                                var s = e.detail,
                                    t = s.name,
                                    o = s.checked,
                                    n = s.disabled;
                                a.dispatchEvent(new CustomEvent("game-setting-change", {
                                        bubbles: !0,
                                        composed: !0,
                                        detail: {
                                            name: t,
                                            checked: o,
                                            disabled: n
                                        }
                                    })),
                                    a.render()
                            })),
                            this.shadowRoot.getElementById("export-button").addEventListener("click", (function (a) {
                                try {
                                    navigator.clipboard
                                    .writeText(btoa(JSON.stringify(localStorage)))
                                    .then(() => {
                                      alert("Dades copiades. Fes clic a IMPORTAR a l'altre navegador on vols continuar jugant sense perdre el progrés del joc.");
                                    })
                                    .catch(() => {
                                      alert("No s'ha pogut exportar. Potser el teu navegador no és compatible.");
                                    });
                                } catch (err) {
                                    alert("No s'ha pogut exportar. Potser el teu navegador no és compatible.");
                                }
                            })),
                            this.shadowRoot.getElementById("import-button").addEventListener("click", (function (a) {
                                async function importGame() {
                                    if (!navigator.clipboard) {
                                        alert("No s'ha pogut exportar. El teu navegador no és compatible.");
                                        return
                                    }
                                    try {
                                        const text = await navigator.clipboard.readText();
                                        var data = JSON.parse(atob(text));
                                        localStorage.clear();
                                        Object.keys(data).forEach(function (k) {
                                            localStorage.setItem(k, data[k]);
                                        location.reload();
                                        });
                                    } catch (err) {
                                        alert("No s'ha pogut importar. Has exportat els resultats?")
                                    }
                                };
                                if (confirm("En importar les dades s'eliminarà el progrés del joc en aquest navegador. Vols continuar?")) {
                                    importGame();
                                  } else {
                                  }
                            })),
                            this.render()
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = document.querySelector("body");
                        e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""),
                            e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
                        var a = za();
                        a.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""),
                            a.hardMode || "IN_PROGRESS" !== a.gameStatus || 0 === a.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"),
                                this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
                    }
                }]),
                t
        }(c(HTMLElement));
        customElements.define("game-settings", _a);
        var qa = document.createElement("template");
        qa.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
        var Ea, Aa = function (e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t),
                    n(p(e = a.call(this)), "_duration", void 0),
                    e.attachShadow({
                        mode: "open"
                    }),
                    e
            }
            return o(t, [{
                    key: "connectedCallback",
                    value: function () {
                        var e = this;
                        this.shadowRoot.appendChild(qa.content.cloneNode(!0));
                        var a = this.shadowRoot.querySelector(".toast");
                        a.textContent = this.getAttribute("text"),
                            this._duration = this.getAttribute("duration") || 1e3,
                            "Infinity" !== this._duration && setTimeout((function () {
                                a.classList.add("fade")
                            }), this._duration),
                            a.addEventListener("transitionend", (function (a) {
                                e.parentNode.removeChild(e)
                            }))
                    }
                }]),
                t
        }(c(HTMLElement));

        function Ca() {
            dataLayer.push(arguments)
        }
        customElements.define("game-toast", Aa),
            window.dataLayer = window.dataLayer || [],
            Ca("js", new Date);
        Ca("config", "G-5TDB8BWF6B", {
            app_version: null === (Ea = window.wordle) || void 0 === Ea ? void 0 : Ea.hash,
            debug_mode: !1
        });
        var wdsA = {
            "mirar": "mirar",
            "prova": "prova",
            "jugar": "jugar",
            "canta": "canta",
            "marro": "marró",
            "valem": "valem",
            "apomo": "apomo",
            "color": "color",
            "forat": "forat",
            "vides": "vides",
            "tibar": "tibar",
            "batan": "batan",
            "actiu": "actiu",
            "ondos": "ondós",
            "gorra": "gorra",
            "poema": "poema",
            "crear": "crear",
            "dinou": "dinou",
            "flota": "flota",
            "comic": "còmic",
            "finit": "finit",
            "feixa": "feixa",
            "celat": "celat",
            "farsa": "farsa",
            "illus": "il·lús",
            "envas": "envàs",
            "rafia": "ràfia",
            "senat": "senat",
            "etiop": "etíop",
            "creta": "creta",
            "sopar": "sopar",
            "pelat": "pelat",
            "bocut": "bocut",
            "tassa": "tassa",
            "brial": "brial",
            "renoi": "renoi",
            "croat": "croat",
            "rupit": "rupit",
            "segon": "segon",
            "lluny": "lluny",
            "sufix": "sufix",
            "linia": "línia",
            "morla": "morlà",
            "pudor": "pudor",
            "esser": "ésser",
            "faixa": "faixa",
            "vigor": "vigor",
            "besar": "besar",
            "firar": "firar",
            "tocat": "tocat",
            "batut": "batut",
            "ferri": "ferri",
            "pilot": "pilot",
            "exili": "exili",
            "batec": "batec",
            "super": "súper",
            "timid": "tímid",
            "fresc": "fresc",
            "cranc": "cranc",
            "folro": "folro",
            "penal": "penal",
            "rossa": "rossa",
            "dinar": "dinar",
            "tendo": "tendó",
            "jovia": "jovià",
            "igual": "igual",
            "riera": "riera",
            "pujat": "pujat",
            "recte": "recte",
            "gavid": "gàvid",
            "rugir": "rugir",
            "mussa": "mussa",
            "lucid": "lúcid",
            "espos": "espòs",
            "fauna": "fauna",
            "monjo": "monjo",
            "gruix": "gruix",
            "brida": "brida",
            "malic": "màlic",
            "borda": "borda",
            "nabiu": "nabiu",
            "fluir": "fluir",
            "riure": "riure",
            "germa": "germà",
            "delit": "delit",
            "mugro": "mugró",
            "pivot": "pivot",
            "bambo": "bambo",
            "surar": "surar",
            "angle": "angle",
            "miser": "míser",
            "redit": "rèdit",
            "saure": "saure",
            "grier": "grier",
            "fixat": "fixat",
            "aspre": "aspre",
            "crema": "crema",
            "rojor": "rojor",
            "tibat": "tibat",
            "opcio": "opció",
            "melsa": "melsa",
            "franc": "franc",
            "dieta": "dieta",
            "ocupa": "ocupa",
            "ossut": "ossut",
            "hispa": "hispà",
            "rapid": "ràpid",
            "talem": "tàlem",
            "nansa": "nansa",
            "polit": "polit",
            "minim": "mínim",
            "llata": "llata",
            "fitat": "fitat",
            "mitat": "mitat",
            "guant": "guant",
            "talar": "talar",
            "momia": "mòmia",
            "tutsi": "tutsi",
            "furot": "furot",
            "negre": "negre",
            "pulmo": "pulmó",
            "bombo": "bombó",
            "velar": "velar",
            "velat": "velat",
            "gruat": "gruat",
            "corra": "corra",
            "bolid": "bòlid",
            "manto": "mantó",
            "puput": "puput",
            "punxa": "punxa",
            "padro": "padró",
            "corda": "corda",
            "cotxe": "cotxe",
            "fusel": "fusel",
            "mucic": "múcic",
            "ester": "èster",
            "fenol": "fenol",
            "esqui": "esquí",
            "rotic": "ròtic",
            "sinoc": "sínoc",
            "garro": "garró",
            "llusc": "llusc",
            "llufa": "llufa",
            "sodat": "sodat",
            "ruixo": "ruixó",
            "odios": "odiós",
            "altea": "altea",
            "ondia": "òndia",
            "murid": "múrid",
            "monya": "monya",
            "hampa": "hampa",
            "tevet": "tevet",
            "babel": "babel",
            "panxa": "panxa",
            "vaire": "vaire",
            "bussi": "bussi",
            "munta": "muntà",
            "potil": "pòtil",
            "pedra": "pedra",
            "aviar": "aviar",
            "nocio": "noció",
            "hapte": "haptè",
            "garbo": "garbó",
            "gosar": "gosar",
            "bogal": "bogal",
            "album": "àlbum",
            "limba": "limba",
            "pinyo": "pinyó",
            "summa": "summa",
            "glauc": "glauc",
            "sepia": "sèpia",
            "foceu": "foceu",
            "xabia": "xabià",
            "setze": "setze",
            "gotzo": "gotzo",
            "bugre": "bugre",
            "rifle": "rifle",
            "oolit": "oòlit",
            "nervi": "nervi",
            "bocam": "bocam",
            "sobre": "sobre",
            "tripa": "tripa",
            "etile": "etilè",
            "oimes": "oimés",
            "plapa": "plapa",
            "bipar": "bípar",
            "porat": "porat",
            "iodic": "iòdic",
            "vague": "vague",
            "gelat": "gelat",
            "xerif": "xerif",
            "botos": "botós",
            "ploma": "ploma",
            "eixut": "eixut",
            "capol": "capol",
            "gojat": "gojat",
            "fisto": "fistó",
            "pella": "pella",
            "doiut": "doiut",
            "fogar": "fogar",
            "carli": "carlí",
            "torxo": "torxó",
            "aglif": "àglif",
            "gerra": "gerra",
            "saboc": "saboc",
            "ganyo": "ganyó",
            "manes": "manes",
            "mente": "mentè",
            "faiso": "faisó",
            "isard": "isard",
            "logia": "lògia",
            "napea": "napea",
            "melca": "melca",
            "fetor": "fetor",
            "casot": "casot",
            "sisme": "sisme",
            "almud": "almud",
            "bingo": "bingo",
            "grifa": "grifa",
            "baixa": "baixa",
            "poeta": "poeta",
            "cuixa": "cuixa",
            "joell": "joell",
            "faiço": "faiçó",
            "maina": "maina",
            "mabre": "mabre",
            "guapo": "guapo",
            "bofia": "bòfia",
            "tenia": "tènia",
            "murar": "murar",
            "apunt": "apunt",
            "posat": "posat",
            "borra": "borra",
            "llati": "llatí",
            "lepto": "leptó",
            "remol": "rèmol",
            "rampa": "rampa",
            "cucat": "cucat",
            "xifid": "xífid",
            "meulo": "meulo",
            "jutge": "jutge",
            "basta": "basta",
            "banau": "banau",
            "trial": "trial",
            "seder": "seder",
            "copro": "copró",
            "molta": "molta",
            "micra": "micra",
            "cabra": "cabra",
            "muria": "múria",
            "renda": "renda",
            "urpia": "úrpia",
            "pubil": "pubil",
            "xarot": "xarot",
            "cedri": "cedrí",
            "fuita": "fuita",
            "cubit": "cúbit",
            "morma": "morma",
            "llarg": "llarg",
            "arcat": "arcat",
            "domer": "domer",
            "faixi": "faixí",
            "arsia": "àrsia",
            "saupa": "saupa",
            "bomba": "bomba",
            "libic": "líbic",
            "beure": "beure",
            "gasco": "gascó",
            "grufa": "grufa",
            "badge": "badge",
            "joliu": "joliu",
            "liasa": "liasa",
            "arpat": "arpat",
            "light": "light",
            "ertic": "èrtic",
            "poder": "poder",
            "dansa": "dansa",
            "xevat": "xevat",
            "forma": "forma",
            "gasso": "gassó",
            "festa": "festa",
            "tacat": "tacat",
            "bonda": "bonda",
            "cofat": "cofat",
            "litxi": "litxi",
            "totxo": "totxo",
            "sipai": "sipai",
            "rodam": "rodam",
            "cruix": "cruix",
            "tonya": "tonya",
            "sevir": "sevir",
            "patro": "patró",
            "ambit": "àmbit",
            "golut": "golut",
            "piano": "piano",
            "palat": "palat",
            "tagal": "tagal",
            "caixa": "caixa",
            "petge": "petge",
            "xarpa": "xarpa",
            "heure": "heure",
            "bugia": "bugia",
            "sorgo": "sorgo",
            "paret": "paret",
            "fetid": "fètid",
            "lesio": "lesió",
            "fenix": "fènix",
            "burra": "burra",
            "rater": "rater",
            "largo": "largo",
            "queta": "queta",
            "sonos": "sonós",
            "rondo": "rondó",
            "tiara": "tiara",
            "niera": "niera",
            "poper": "poper",
            "repla": "replà",
            "grell": "grell",
            "varar": "varar",
            "bogar": "bogar",
            "torta": "torta",
            "saros": "saros",
            "telex": "tèlex",
            "octet": "octet",
            "untos": "untós",
            "parit": "parit",
            "apter": "àpter",
            "regla": "regla",
            "triat": "triat",
            "pente": "pentè",
            "roter": "roter",
            "copar": "copar",
            "pelec": "pèlec",
            "medic": "mèdic",
            "ermas": "ermàs",
            "baina": "baina",
            "visor": "visor",
            "imada": "imada",
            "gavia": "gavià",
            "xelva": "xelvà",
            "liceu": "liceu",
            "pesat": "pesat",
            "falda": "falda",
            "paisa": "paisà",
            "aller": "aller",
            "pixel": "píxel",
            "totil": "tòtil",
            "bujot": "bujot",
            "botit": "botit",
            "magic": "màgic",
            "matar": "matar",
            "lliga": "lliga",
            "salic": "sàlic",
            "colza": "colza",
            "faeto": "faetó",
            "livid": "lívid",
            "canya": "canya",
            "cigni": "cigni",
            "xisca": "xisca",
            "biela": "biela",
            "verra": "verra",
            "potra": "potra",
            "berla": "berla",
            "vedat": "vedat",
            "ferit": "ferit",
            "fotre": "fotre",
            "fuent": "fuent",
            "sarro": "sarró",
            "plaga": "plaga",
            "burla": "burla",
            "bavos": "bavós",
            "media": "medià",
            "carda": "carda",
            "bleix": "bleix",
            "vinos": "vinós",
            "infim": "ínfim",
            "malla": "malla",
            "calat": "càlat",
            "bufat": "bufat",
            "dotar": "dotar",
            "gomer": "gomer",
            "segal": "sègal",
            "metge": "metge",
            "doral": "doral",
            "diton": "díton",
            "plana": "plana",
            "durio": "dúrio",
            "napia": "nàpia",
            "raola": "raola",
            "palto": "paltó",
            "mamba": "mamba",
            "dogam": "dogam",
            "boval": "boval",
            "fogot": "fogot",
            "caspi": "caspi",
            "coana": "coana",
            "borli": "borlí",
            "molsa": "molsa",
            "emboc": "emboc",
            "bolla": "bolla",
            "calat": "calat",
            "sogra": "sogra",
            "anoll": "anoll",
            "oblic": "oblic",
            "veler": "veler",
            "xaman": "xaman",
            "perdo": "perdó",
            "ptosi": "ptosi",
            "runar": "runar",
            "serra": "serrà",
            "bravo": "bravo",
            "eixit": "eixit",
            "moixi": "moixí",
            "reüll": "reüll",
            "dandi": "dandi",
            "pobre": "pobre",
            "bufet": "bufet",
            "modul": "mòdul",
            "sunna": "sunna",
            "espeu": "espeu",
            "xofer": "xofer",
            "noble": "noble",
            "taulo": "tauló",
            "lauda": "lauda",
            "mucus": "mucus",
            "sucos": "sucós",
            "xaica": "xaica",
            "rosca": "rosca",
            "cabal": "cabal",
            "aldea": "aldea",
            "causa": "causa",
            "carto": "cartó",
            "morsa": "morsa",
            "dogon": "dogon",
            "veral": "veral",
            "uncio": "unció",
            "plato": "plató",
            "terra": "terra",
            "trepa": "trepa",
            "ixent": "ixent",
            "llumi": "llumí",
            "budic": "búdic",
            "murri": "murri",
            "besso": "bessó",
            "omega": "omega",
            "pauta": "pauta",
            "rodat": "rodat",
            "catxa": "catxa",
            "embus": "embús",
            "culet": "culet",
            "quico": "quico",
            "nafra": "nafra",
            "bauxa": "bauxa",
            "colet": "colet",
            "seixa": "seixa",
            "cosit": "cosit",
            "plica": "plica",
            "ninot": "ninot",
            "hidra": "hidra",
            "mogut": "mogut",
            "fondo": "fondo",
            "viure": "viure",
            "paper": "paper",
            "estat": "estat",
            "lleme": "lleme",
            "mauri": "maurí",
            "modic": "mòdic",
            "pluja": "plujà",
            "xarxo": "xarxó",
            "jugar": "jugar",
            "viril": "viril",
            "zelos": "zelós",
            "tonic": "tònic",
            "serbi": "serbi",
            "retor": "rètor",
            "barat": "barat",
            "gabio": "gabió",
            "mafic": "màfic",
            "psoes": "psoes",
            "dries": "dries",
            "habit": "hàbit",
            "bucar": "búcar",
            "clava": "clava",
            "fosfe": "fosfè",
            "cleta": "cleta",
            "claro": "claró",
            "palla": "palla",
            "penic": "penic",
            "xurma": "xurma",
            "mular": "mular",
            "roure": "roure",
            "peita": "peita",
            "tafoi": "tafoi",
            "altre": "altre",
            "floro": "floró",
            "tolta": "tolta",
            "alqui": "alquí",
            "cadup": "cadup",
            "rigid": "rígid",
            "gauss": "gauss",
            "talla": "talla",
            "limit": "límit",
            "alcio": "alció",
            "punic": "púnic",
            "fosca": "fosca",
            "badoc": "badoc",
            "minso": "minso",
            "ultim": "últim",
            "enjub": "enjub",
            "pages": "pagès",
            "sofre": "sofre",
            "tesor": "tesor",
            "senis": "senís",
            "deure": "deure",
            "vitri": "vitri",
            "tauro": "tauró",
            "arnat": "arnat",
            "calma": "calma",
            "actor": "actor",
            "espia": "espia",
            "astut": "astut",
            "oment": "oment",
            "orsar": "orsar",
            "sever": "sèver",
            "cinta": "cinta",
            "hindu": "hindú",
            "manya": "manya",
            "força": "força",
            "poder": "poder",
            "tenar": "tènar",
            "cervi": "cerví",
            "repic": "repic",
            "triba": "triba",
            "copia": "còpia",
            "crato": "crató",
            "rient": "rient",
            "diner": "diner",
            "bassa": "bassa",
            "haver": "haver",
            "paria": "paria",
            "rubor": "rubor",
            "sidos": "sidós",
            "veros": "verós",
            "bonas": "bonàs",
            "bambu": "bambú",
            "clapa": "clapa",
            "monge": "monge",
            "sella": "sella",
            "safra": "safrà",
            "pompa": "pompa",
            "llosc": "llosc",
            "basar": "basar",
            "ascle": "ascle",
            "tenis": "tenis",
            "mitjo": "mitjó",
            "solar": "solar",
            "pique": "piqué",
            "boric": "bòric",
            "segle": "segle",
            "salut": "salut",
            "molar": "molar",
            "seuos": "seuós",
            "rufol": "rúfol",
            "brusc": "brusc",
            "sisca": "sisca",
            "rabic": "ràbic",
            "codol": "còdol",
            "golfo": "golfo",
            "camut": "camut",
            "ample": "ample",
            "coure": "coure",
            "paput": "paput",
            "fasic": "fàsic",
            "cegui": "ceguí",
            "himen": "himen",
            "oleat": "oleat",
            "peiot": "peiot",
            "remis": "remís",
            "xumet": "xumet",
            "malbo": "malbò",
            "isidi": "isidi",
            "virat": "virat",
            "lloga": "lloga",
            "coral": "coral",
            "geliu": "geliu",
            "alosa": "alosa",
            "mitja": "mitjà",
            "pecat": "pecat",
            "prest": "prest",
            "estil": "estil",
            "sinia": "sínia",
            "pista": "pista",
            "calid": "càlid",
            "candi": "candi",
            "pudos": "pudós",
            "ducat": "ducat",
            "curri": "curri",
            "breny": "breny",
            "porca": "porca",
            "serva": "serva",
            "doset": "doset",
            "banda": "banda",
            "tapis": "tapís",
            "fibla": "fibla",
            "glera": "glera",
            "bolig": "bolig",
            "bifer": "bífer",
            "toria": "tòria",
            "vimet": "vímet",
            "llest": "llest",
            "cresp": "cresp",
            "xapat": "xapat",
            "comit": "còmit",
            "venut": "venut",
            "mugir": "mugir",
            "denou": "denou",
            "cofre": "cofre",
            "rivet": "rivet",
            "vinya": "vinya",
            "succi": "succí",
            "massa": "massa",
            "sadic": "sàdic",
            "civil": "civil",
            "gatge": "gatge",
            "fusio": "fusió",
            "podar": "podar",
            "nuvol": "núvol",
            "datiu": "datiu",
            "feral": "feral",
            "furga": "furga",
            "dacro": "dacró",
            "albir": "albir",
            "balou": "balou",
            "sonar": "sonar",
            "futil": "fútil",
            "tsuga": "tsuga",
            "anode": "ànode",
            "balda": "balda",
            "fatxa": "fatxa",
            "amant": "amant",
            "tofol": "tòfol",
            "xebro": "xebró",
            "dalet": "dàlet",
            "afuar": "afuar",
            "draga": "draga",
            "gobid": "gòbid",
            "triti": "triti",
            "trull": "trull",
            "osmic": "òsmic",
            "fonda": "fonda",
            "clisi": "clisi",
            "murga": "murga",
            "renos": "renòs",
            "soler": "soler",
            "amura": "amura",
            "rauxa": "rauxa",
            "gaudi": "gaudi",
            "canot": "canot",
            "boldo": "boldo",
            "arpio": "arpió",
            "nevus": "nevus",
            "falca": "falca",
            "gihad": "gihad",
            "boxer": "bòxer",
            "epoca": "època",
            "redir": "redir",
            "sulfa": "sulfà",
            "cuell": "cuell",
            "gamoi": "gamoi",
            "bivia": "bívia",
            "taper": "taper",
            "girat": "girat",
            "xulla": "xulla",
            "hansa": "hansa",
            "farad": "farad",
            "rimer": "rimer",
            "arreu": "arreu",
            "urpir": "urpir",
            "rugos": "rugós",
            "acull": "acull",
            "hades": "hades",
            "xamba": "xamba",
            "gussi": "gussi",
            "malvi": "malví",
            "dubni": "dubni",
            "anyil": "anyil",
            "cueto": "cuetó",
            "betum": "betum",
            "ribas": "ribàs",
            "forca": "forca",
            "tropa": "tropà",
            "molar": "molar",
            "maqui": "maqui",
            "lamed": "làmed",
            "bitol": "bitol",
            "viola": "viola",
            "lacar": "lacar",
            "ferro": "ferró",
            "beisa": "beisa",
            "aquos": "aquós",
            "menta": "menta",
            "voler": "voler",
            "bagot": "bagot",
            "betel": "bètel",
            "ceros": "cerós",
            "nyora": "nyora",
            "burxa": "burxa",
            "jonic": "jònic",
            "mocat": "mocat",
            "taiga": "taigà",
            "algid": "àlgid",
            "brito": "britó",
            "llima": "llima",
            "sesam": "sèsam",
            "nomer": "nòmer",
            "local": "local",
            "quant": "quant",
            "xalat": "xalat",
            "ligni": "ligni",
            "gabia": "gàbia",
            "alami": "alamí",
            "aigua": "aigua",
            "talpa": "talpa",
            "darga": "darga",
            "pigre": "pigre",
            "limfa": "limfa",
            "curos": "curós",
            "reves": "revés",
            "criat": "criat",
            "vivid": "vívid",
            "randa": "randa",
            "banjo": "banjo",
            "magne": "magne",
            "fenia": "fenià",
            "suber": "súber",
            "murta": "murta",
            "docil": "dòcil",
            "bover": "bover",
            "llapo": "llapó",
            "untet": "untet",
            "gelor": "gelor",
            "oller": "oller",
            "saule": "saule",
            "moure": "moure",
            "casba": "casba",
            "obrer": "obrer",
            "metre": "metre",
            "halit": "hàlit",
            "gueto": "gueto",
            "music": "músic",
            "mocos": "mocós",
            "tetol": "tètol",
            "pansa": "pansa",
            "rajol": "rajol",
            "gemec": "gemec",
            "encis": "encís",
            "tuber": "túber",
            "nedol": "nèdol",
            "pizza": "pizza",
            "renec": "rènec",
            "julia": "julià",
            "sipio": "sipió",
            "potxo": "potxó",
            "coble": "coble",
            "galio": "galió",
            "fadri": "fadrí",
            "junça": "junça",
            "sigma": "sigma",
            "ultra": "ultra",
            "pitic": "pític",
            "oliva": "oliva",
            "bolit": "bòlit",
            "xurro": "xurro",
            "botxa": "botxa",
            "aloja": "aloja",
            "trast": "trast",
            "lider": "líder",
            "bitxo": "bitxo",
            "cebua": "cebuà",
            "sotil": "sòtil",
            "finca": "finca",
            "imido": "imido",
            "mamei": "mamei",
            "music": "music",
            "obenc": "obenc",
            "arter": "arter",
            "visat": "visat",
            "romer": "romer",
            "rober": "rober",
            "alena": "alena",
            "gneis": "gneis",
            "pleba": "plebà",
            "gicar": "gicar",
            "atxem": "atxem",
            "mirat": "mirat",
            "piric": "píric",
            "xucla": "xucla",
            "verge": "verge",
            "daixo": "daixò",
            "statu": "statu",
            "denou": "dènou",
            "civic": "cívic",
            "pileu": "píleu",
            "flint": "flint",
            "poros": "porós",
            "oïdor": "oïdor",
            "coper": "coper",
            "raser": "raser",
            "cafta": "caftà",
            "faena": "faena",
            "gairo": "gairó",
            "canca": "canca",
            "dulia": "dulia",
            "gumia": "gumia",
            "macla": "macla",
            "sacre": "sacre",
            "taros": "tarós",
            "prosa": "prosa",
            "canut": "canut",
            "nugos": "nugós",
            "mujol": "mujol",
            "tubul": "túbul",
            "tirat": "tirat",
            "gaire": "gaire",
            "bigam": "bígam",
            "anell": "anell",
            "presa": "presa",
            "placa": "placa",
            "tigre": "tigre",
            "olier": "olier",
            "violi": "violí",
            "jurat": "jurat",
            "carpa": "carpa",
            "padda": "padda",
            "tatar": "tàtar",
            "azole": "azole",
            "venia": "vènia",
            "satir": "sàtir",
            "renou": "renou",
            "porra": "porra",
            "brisa": "brisa",
            "ardit": "ardit",
            "landa": "landa",
            "donja": "donja",
            "orins": "orins",
            "xitar": "xitar",
            "nevas": "nevàs",
            "melic": "melic",
            "ganut": "ganut",
            "fines": "finès",
            "macar": "macar",
            "sedos": "sedós",
            "natro": "natró",
            "plint": "plint",
            "daric": "dàric",
            "ronyo": "ronyó",
            "panot": "panot",
            "burca": "burca",
            "frare": "frare",
            "boiar": "boiar",
            "nafta": "nafta",
            "ureid": "ureid",
            "pensa": "pensa",
            "auric": "àuric",
            "alarb": "alarb",
            "catxo": "catxo",
            "cosco": "coscó",
            "xines": "xinès",
            "rapis": "rapis",
            "pelag": "pèlag",
            "visca": "visca",
            "iodat": "iodat",
            "facto": "facto",
            "molid": "mòlid",
            "venit": "vènit",
            "matxo": "matxo",
            "exina": "exina",
            "barba": "barba",
            "maria": "maria",
            "nigul": "nigul",
            "calua": "calua",
            "pegat": "pegat",
            "bagas": "bagàs",
            "colar": "colar",
            "guixa": "guixa",
            "furar": "furar",
            "cisma": "cisma",
            "arnes": "arnès",
            "testa": "testa",
            "avena": "avena",
            "bantu": "bantú",
            "prope": "propè",
            "fluix": "fluix",
            "curat": "curat",
            "sonda": "sonda",
            "tipic": "típic",
            "pegas": "pegàs",
            "ullar": "ullar",
            "cinic": "cínic",
            "serie": "sèrie",
            "xapas": "xapàs",
            "banya": "banya",
            "aleta": "aleta",
            "xamat": "xamat",
            "vacci": "vaccí",
            "cotid": "còtid",
            "tmesi": "tmesi",
            "saler": "saler",
            "gemma": "gemma",
            "turba": "turba",
            "botil": "bòtil",
            "tsade": "tsade",
            "silva": "silvà",
            "cuafi": "cuafí",
            "culte": "culte",
            "xampu": "xampú",
            "venja": "venja",
            "moixa": "moixa",
            "plega": "plega",
            "mares": "marès",
            "cassa": "cassa",
            "toxic": "tòxic",
            "sucub": "súcub",
            "saiol": "saiol",
            "bouer": "bouer",
            "motiu": "motiu",
            "pubic": "púbic",
            "sulid": "súlid",
            "pedon": "pèdon",
            "votiu": "votiu",
            "salat": "salat",
            "fetge": "fetge",
            "setge": "setge",
            "durar": "durar",
            "ratio": "ràtio",
            "xacar": "xacar",
            "ordit": "ordit",
            "vomit": "vòmit",
            "boira": "boira",
            "lobat": "lobat",
            "quart": "quart",
            "melgo": "melgó",
            "runic": "rúnic",
            "talus": "talús",
            "locul": "lòcul",
            "pifol": "pífol",
            "cabut": "cabut",
            "ramos": "ramós",
            "tolus": "tolus",
            "trava": "trava",
            "xibiu": "xibiu",
            "xaire": "xaire",
            "cafre": "cafre",
            "papat": "papat",
            "cebid": "cèbid",
            "ficus": "ficus",
            "rogle": "rogle",
            "arena": "arena",
            "colis": "colís",
            "hadro": "hadró",
            "betic": "bètic",
            "picea": "pícea",
            "delga": "delga",
            "gossa": "gossa",
            "xerra": "xerra",
            "ansat": "ansat",
            "ileal": "ileal",
            "zonat": "zonat",
            "marro": "marró",
            "profa": "profà",
            "imino": "imino",
            "valua": "vàlua",
            "sabir": "sabir",
            "gitat": "gitat",
            "oxina": "oxina",
            "cloca": "cloca",
            "larid": "làrid",
            "repes": "repès",
            "fibra": "fibra",
            "vidia": "vídia",
            "famul": "fàmul",
            "hilum": "hílum",
            "trufa": "trufa",
            "rigor": "rigor",
            "palma": "palma",
            "nival": "nival",
            "paten": "patén",
            "bleda": "bleda",
            "joier": "joier",
            "sulta": "sultà",
            "humic": "húmic",
            "sarja": "sarja",
            "noema": "noema",
            "tamil": "tàmil",
            "siria": "sirià",
            "llord": "llord",
            "caqui": "caqui",
            "usual": "usual",
            "fruit": "fruit",
            "negat": "negat",
            "ollal": "ollal",
            "cleda": "cleda",
            "mitic": "mític",
            "saber": "saber",
            "corea": "corea",
            "tiras": "tiràs",
            "begui": "beguí",
            "gaiat": "gaiat",
            "barra": "barra",
            "citro": "citró",
            "tabic": "tàbic",
            "volea": "volea",
            "aulic": "àulic",
            "nocer": "nocer",
            "valid": "vàlid",
            "cugul": "cugul",
            "penat": "penat",
            "donar": "donar",
            "motet": "motet",
            "fiola": "fiola",
            "joana": "joana",
            "pinta": "pinta",
            "regul": "règul",
            "coipu": "coipú",
            "tanca": "tanca",
            "babol": "babol",
            "niobi": "niobi",
            "muflo": "mufló",
            "volat": "volat",
            "collo": "colló",
            "intim": "íntim",
            "munta": "munta",
            "raent": "raent",
            "filat": "filat",
            "pesar": "pesar",
            "focid": "fòcid",
            "tatxa": "tatxa",
            "sutja": "sutja",
            "salmo": "salmó",
            "toner": "tòner",
            "tampo": "tampó",
            "caoli": "caolí",
            "botar": "botar",
            "vagar": "vagar",
            "xufer": "xufer",
            "toric": "tòric",
            "persa": "persa",
            "borar": "borar",
            "roget": "roget",
            "cadec": "càdec",
            "debit": "dèbit",
            "canal": "canal",
            "apres": "aprés",
            "agros": "agrós",
            "inici": "inici",
            "mudat": "mudat",
            "gotos": "gotós",
            "ruïna": "ruïna",
            "laser": "làser",
            "salpa": "salpa",
            "escar": "escar",
            "molla": "molla",
            "llama": "llama",
            "dalla": "dalla",
            "belar": "belar",
            "nonet": "nonet",
            "solid": "sòlid",
            "perlo": "perló",
            "devot": "devot",
            "pixat": "pixat",
            "xicot": "xicot",
            "tasca": "tasca",
            "moreu": "moreu",
            "pilor": "pílor",
            "fucus": "fucus",
            "cimar": "cimar",
            "alduf": "alduf",
            "nadiu": "nadiu",
            "porus": "porus",
            "caria": "cària",
            "ungla": "ungla",
            "menys": "menys",
            "broll": "broll",
            "galda": "galda",
            "incus": "incús",
            "arçar": "arçar",
            "dotze": "dotze"}
        var wdsB = ["abaca", "abacs", "abaix", "abans", "abast", "abata", "abate", "abati", "abato", "abats", "abdic", "abdui", "abece", "abell", "abeur", "abill", "abism", "abjur", "ablam", "ablen", "aboca", "aboco", "aboia", "aboie", "aboin", "aboio", "abois", "aboli", "abona", "abone", "aboni", "abono", "abord", "abraç", "abras", "abret", "abric", "abril", "abrin", "abriv", "abrog", "abrom", "abrus", "absis", "absol", "abste", "abuix", "abund", "abura", "abusa", "abuse", "abusi", "abuso", "acaba", "acabe", "acabi", "acabo", "acaça", "acace", "acaci", "acaço", "acala", "acale", "acali", "acalo", "acamp", "acana", "acane", "acani", "acano", "acant", "acany", "acapt", "acara", "acare", "acari", "acaro", "acars", "acata", "acate", "acati", "acato", "acatx", "acces", "accia", "accio", "accis", "acens", "acera", "acerb", "acere", "aceri", "acero", "acers", "acida", "acide", "acidi", "acido", "acids", "acils", "acima", "acime", "acimi", "acimo", "acins", "aclam", "acloc", "aclof", "aclot", "acluc", "acmes", "acnes", "acobl", "acoll", "acopa", "acope", "acopi", "acopo", "acora", "acord", "acore", "acori", "acoro", "acorr", "acost", "acota", "acote", "acoti", "acoto", "acots", "acotx", "acres", "acron", "actes", "actiu", "activ", "actor", "actua", "actue", "actui", "actuo", "actuu", "acuba", "acube", "acubi", "acubo", "acuda", "acudi", "acudo", "acuit", "acula", "acule", "aculi", "acull", "aculo", "acunç", "acurç", "acurt", "acusa", "acuse", "acusi", "acuso", "acuts", "adagi", "adams", "adapt", "adarb", "adarg", "adars", "addui", "adeia", "adeim", "adeis", "adeix", "adesa", "adesc", "adese", "adesi", "adeso", "adeus", "adhuc", "adiam", "adiar", "adias", "adiat", "adiau", "adida", "adiem", "adien", "adies", "adieu", "adiga", "adiin", "adiis", "adint", "adiny", "adira", "adire", "adisc", "adita", "adits", "adius", "adixo", "adjur", "admes", "admet", "admir", "adnat", "adoba", "adobe", "adobi", "adobo", "adobs", "adoll", "adona", "adond", "adone", "adoni", "adono", "adopt", "adora", "adore", "adori", "adorm", "adorn", "adoro", "adreç", "adret", "adula", "adule", "aduli", "adulo", "adult", "aduna", "adune", "aduni", "aduno", "adust", "adven", "adver", "advin", "advoc", "aedes", "aequo", "aeria", "aeris", "afaen", "afait", "afama", "afame", "afami", "afamo", "afana", "afane", "afani", "afano", "afany", "afart", "afect", "afegi", "afeix", "afeli", "aferm", "aferr", "afers", "afibl", "afija", "afila", "afile", "afili", "afill", "afilo", "afina", "afine", "afini", "afino", "afins", "afirm", "afixa", "afixe", "afixi", "afixo", "aflac", "aflam", "aflat", "aflor", "aflui", "aflux", "afoga", "afogo", "afoll", "afona", "afone", "afoni", "afono", "afons", "afora", "afore", "afori", "aforo", "afrau", "afric", "aftes", "aftos", "afuam", "afuar", "afuas", "afuat", "afuau", "afuem", "afuen", "afues", "afueu", "afuin", "afuis", "afusa", "afuse", "afusi", "afuso", "afust", "agafa", "agafe", "agafi", "agafo", "agama", "agamb", "agami", "agams", "agape", "agarb", "agare", "agarr", "agars", "agata", "agave", "agbes", "agenç", "agent", "agils", "agios", "agita", "agite", "agiti", "agito", "aglan", "aglev", "aglif", "aglos", "agnat", "agnom", "agnus", "agora", "agost", "agrad", "agraf", "agrai", "agram", "agran", "agras", "agreg", "agrer", "agres", "agret", "agria", "agrim", "agrir", "agris", "agrit", "agriu", "agrix", "agror", "agros", "agrum", "agrup", "aguam", "aguar", "aguas", "aguat", "aguau", "aguda", "aguem", "aguen", "agues", "agueu", "aguin", "aguis", "agusa", "aguse", "agusi", "aguso", "aguti", "aguts", "aidam", "aidar", "aidas", "aidat", "aidau", "aidem", "aiden", "aides", "aideu", "aidin", "aidis", "aigua", "ailla", "aille", "ailli", "aillo", "aimia", "ainam", "ainar", "ainas", "ainat", "ainau", "ainem", "ainen", "aines", "aineu", "ainin", "ainis", "ainus", "aiori", "airam", "airar", "airas", "airat", "airau", "airem", "airen", "aires", "aireu", "airin", "airis", "airos", "aital", "aixaf", "aixec", "aixes", "aixol", "ajaça", "ajace", "ajaci", "ajaço", "ajaem", "ajaeu", "ajaga", "ajaus", "ajeia", "ajeim", "ajeis", "ajeus", "ajoca", "ajoco", "ajorn", "ajova", "ajove", "ajovi", "ajovo", "ajuda", "ajude", "ajudi", "ajudo", "ajunt", "ajupa", "ajupi", "ajupo", "ajups", "ajust", "ajuts", "alaba", "alabe", "alabi", "alabo", "alada", "alaga", "alami", "alana", "alans", "alant", "alara", "alarb", "alare", "alarm", "alars", "alats", "alaui", "alava", "albat", "alber", "albes", "albio", "albir", "alboc", "albor", "album", "alçam", "alçar", "alças", "alçat", "alçau", "alcea", "alcem", "alcen", "alces", "alceu", "alcid", "alcin", "alcio", "alcis", "alçur", "aldea", "aldol", "alduf", "alefs", "alege", "alegi", "alegr", "aleia", "aleig", "aleja", "alejo", "alena", "alene", "aleni", "aleno", "alens", "aleps", "alera", "alerç", "alero", "alers", "alert", "aleta", "aleto", "alevi", "alfac", "alfes", "alfil", "algal", "algia", "algid", "algun", "aliam", "aliar", "alias", "aliat", "aliau", "alics", "aliem", "alien", "alier", "alies", "alieu", "alifs", "aliga", "aligo", "aliin", "aliis", "alisa", "aljub", "allar", "allau", "alleg", "allel", "allen", "aller", "allet", "allev", "allic", "allil", "allis", "allit", "alloc", "allop", "allos", "allot", "allun", "almon", "almud", "alnes", "alocs", "aloer", "aloes", "aloja", "aloma", "alosa", "alots", "alous", "alpax", "alque", "alqui", "altar", "altea", "alter", "altes", "altiu", "altiv", "altos", "altra", "altre", "altri", "aluda", "alull", "alums", "alzin", "amaça", "amace", "amaci", "amaço", "amada", "amaga", "amago", "amain", "amani", "amans", "amant", "amara", "amare", "amarg", "amari", "amaro", "amarr", "amats", "amava", "ambit", "ambla", "amble", "ambli", "amblo", "ambos", "ambre", "ambul", "ameba", "amecs", "amela", "amele", "ameli", "amelo", "amena", "amens", "ament", "amera", "amere", "ameri", "amero", "amics", "amida", "amide", "amidi", "amido", "amiga", "amigo", "amils", "amina", "amist", "amits", "amnic", "amnis", "amoin", "amoix", "amola", "amole", "amoli", "amoll", "amolo", "amoms", "amoni", "amorf", "amorr", "amors", "amort", "amota", "amote", "amoti", "amoto", "ampit", "ampla", "ample", "ampli", "ampra", "ampre", "ampri", "ampro", "amput", "amunt", "amura", "amure", "amuri", "amuro", "anada", "anals", "anant", "anaps", "anara", "anats", "anava", "ancat", "ancia", "ancor", "ancut", "andan", "andar", "andes", "andoi", "anecs", "aneda", "anedo", "anega", "anell", "anets", "anfos", "angel", "angla", "angle", "anhel", "anima", "anime", "animi", "animo", "anims", "anins", "anira", "anire", "anisa", "anise", "anisi", "aniso", "annex", "anode", "anodi", "anoes", "anoll", "anorc", "anota", "anote", "anoti", "anoto", "ansam", "ansar", "ansas", "ansat", "ansau", "ansem", "ansen", "anses", "anseu", "ansia", "ansin", "ansis", "antec", "antes", "antic", "antre", "anual", "anura", "anurs", "anyal", "anyer", "anyil", "anyoc", "anyol", "aombr", "aorta", "apaga", "apago", "apall", "apama", "apame", "apami", "apamo", "apana", "apane", "apani", "apano", "apany", "aparc", "apart", "apats", "apega", "apego", "apeix", "apelf", "apell", "apeti", "apexs", "apiad", "apila", "apile", "apili", "apilo", "apiny", "apiol", "apitr", "apitx", "aplac", "aplaç", "aplan", "aplat", "aplec", "apleg", "aplet", "aplic", "aplom", "apnea", "apoca", "apoco", "apoda", "apode", "apoma", "apome", "apomi", "apomo", "apona", "apone", "aponi", "apono", "aport", "aposa", "apose", "aposi", "aposo", "apost", "aprad", "apren", "apres", "apreu", "aprim", "aprop", "aprov", "apter", "aptes", "aptot", "apuge", "apugi", "apuig", "apuja", "apujo", "apunt", "apura", "apure", "apuri", "apuro", "aquea", "aqued", "aquen", "aqueu", "aquis", "aquos", "arabs", "arada", "arams", "arboç", "arbor", "arbra", "arbre", "arbri", "arbro", "arcam", "arcar", "arçar", "arcas", "arcat", "arcau", "arços", "arçot", "ardat", "ardit", "ardor", "ardua", "ardus", "areal", "areca", "arecs", "arees", "arega", "arego", "arena", "arene", "areng", "areni", "areno", "arens", "areny", "arets", "argil", "argiu", "argot", "argue", "argui", "argus", "arida", "arids", "aries", "ariet", "arila", "arile", "arili", "arilo", "arils", "arjau", "arlot", "armam", "armar", "armas", "armat", "armau", "armem", "armen", "armer", "armes", "armeu", "armin", "armis", "arnam", "arnar", "arnas", "arnat", "arnau", "arnem", "arnen", "arner", "arnes", "arneu", "arnia", "arnie", "arnii", "arnin", "arnio", "arnis", "arnos", "arnot", "aroil", "aroma", "arome", "aromi", "aromo", "arpam", "arpar", "arpas", "arpat", "arpau", "arpem", "arpen", "arper", "arpes", "arpeu", "arpin", "arpio", "arpis", "arpon", "arque", "arqui", "arran", "arrap", "arras", "arrea", "arree", "arrei", "arrel", "arreo", "arres", "arreu", "arria", "arrib", "arrie", "arrii", "arrim", "arrio", "arris", "arrog", "arrop", "arros", "arrua", "arrue", "arruf", "arrug", "arrui", "arruo", "arruu", "arsia", "arsis", "artec", "arter", "artet", "artic", "arums", "arxiu", "arxiv", "ascia", "ascis", "ascla", "ascle", "ascli", "asclo", "ascos", "asens", "aseta", "asila", "asile", "asili", "asilo", "asils", "asini", "asmat", "asmes", "aspat", "aspes", "aspia", "aspid", "aspie", "aspii", "aspio", "aspir", "aspis", "aspra", "aspre", "aspri", "aspro", "assec", "asseu", "assoc", "assol", "asson", "assot", "assut", "astat", "aster", "astes", "astis", "astor", "astos", "astre", "astur", "astut", "ataca", "ataco", "atacs", "atall", "atand", "atans", "atard", "atees", "atenc", "atend", "atens", "atent", "ateny", "aterr", "atesa", "atest", "ateus", "atiam", "atiar", "atias", "atiat", "atiau", "atica", "atics", "atiem", "atien", "aties", "atieu", "atiin", "atiis", "atinc", "atipa", "atipe", "atipi", "atipl", "atipo", "atles", "atols", "atoms", "atona", "atoni", "atons", "atony", "atorg", "atots", "atrac", "atraç", "atrap", "atrau", "atrec", "atret", "atreu", "atris", "atrit", "atroç", "atrop", "atros", "atuia", "atuim", "atuir", "atuis", "atuit", "atuiu", "atuix", "atupa", "atupe", "atupi", "atupo", "atura", "ature", "aturi", "aturo", "aturs", "atxem", "atxes", "atxim", "atxul", "atzar", "atzuf", "atzur", "aucam", "aucar", "aucas", "aucat", "aucau", "audaç", "audio", "audit", "auges", "augur", "auixa", "auixe", "auixi", "auixo", "aules", "aulet", "aulic", "auque", "auqui", "aures", "auria", "auric", "auris", "auros", "aurta", "aurte", "aurti", "aurto", "aurts", "autes", "autor", "autos", "avala", "avale", "avali", "avall", "avalo", "avals", "avanç", "avant", "avara", "avare", "avari", "avaro", "avars", "avein", "avena", "avenc", "avenç", "avens", "avera", "avere", "averi", "avern", "avero", "avesa", "avese", "avesi", "aveso", "avets", "avial", "aviam", "aviar", "avias", "aviat", "aviau", "avida", "avide", "avidi", "avido", "avids", "aviem", "avien", "avies", "avieu", "aviin", "aviis", "avila", "avile", "avili", "avilo", "avina", "avinc", "avine", "avini", "avino", "avior", "avisa", "avise", "avisi", "aviso", "aviva", "avive", "avivi", "avivo", "avoca", "avoco", "avols", "avort", "axial", "axons", "azeri", "azida", "aziga", "azigs", "azims", "azina", "azobe", "azoic", "azole", "azots", "azule", "babau", "babel", "babes", "bable", "babol", "babui", "bacil", "baciu", "baciv", "bacul", "badam", "badar", "badas", "badat", "badau", "badem", "baden", "bades", "badeu", "badge", "badia", "badin", "badis", "badiu", "badoc", "bafia", "bafor", "bagas", "bagol", "bagot", "bagra", "bagul", "baies", "baila", "baina", "baixa", "baixe", "baixi", "baixo", "bajoc", "balan", "balba", "balbe", "balbi", "balbo", "balbs", "balca", "balco", "balda", "balde", "baldi", "baldo", "balec", "bales", "balia", "balim", "balir", "balis", "balit", "baliu", "balix", "balla", "balle", "balli", "ballo", "balls", "balma", "balme", "balmi", "balmo", "balms", "balot", "balou", "balsa", "balun", "bamba", "bambo", "bambu", "banal", "banat", "banau", "banca", "banco", "bancs", "banda", "bandi", "bando", "baner", "banjo", "bantu", "banus", "banya", "banye", "banyi", "banyo", "banys", "barat", "barba", "barbe", "barbi", "barbo", "barbs", "barca", "barda", "bards", "barem", "baria", "baric", "bario", "baris", "barns", "barra", "barre", "barri", "barro", "barsa", "barxa", "basal", "basam", "basar", "basas", "basat", "basau", "basca", "basco", "bascs", "basem", "basen", "baser", "bases", "baseu", "basic", "basin", "basis", "bassa", "bassi", "basso", "basta", "baste", "basti", "basto", "basts", "batan", "batec", "bateg", "batem", "baten", "bateo", "bater", "bates", "bateu", "batia", "batie", "batii", "batin", "batio", "batis", "batle", "batra", "batre", "batut", "bauds", "baula", "bauxa", "bavam", "bavar", "bavas", "bavat", "bavau", "bavem", "baven", "baves", "baveu", "bavin", "bavis", "bavor", "bavos", "beaba", "beata", "beats", "bebes", "becam", "becar", "becas", "becat", "becau", "becfi", "beços", "becut", "bedui", "befam", "befar", "befas", "befat", "befau", "befem", "befen", "befes", "befeu", "befin", "befis", "begue", "begui", "begut", "beina", "beisa", "belai", "belam", "belar", "belas", "belat", "belau", "beleg", "belem", "belen", "beles", "beleu", "belga", "belin", "belis", "bella", "bells", "benei", "benes", "benze", "beoci", "beque", "bequi", "beren", "beril", "berla", "berma", "besam", "besar", "besas", "besat", "besau", "besem", "besen", "beses", "beset", "beseu", "besin", "besis", "besos", "bessa", "besso", "besuc", "betel", "betes", "betic", "betol", "betum", "betza", "beuen", "beura", "beure", "bevem", "beveu", "bevia", "biaix", "bidet", "biela", "bifaç", "bifer", "bifia", "bifid", "bifis", "bigal", "bigam", "bigos", "bigot", "bilio", "bilis", "billo", "bills", "bimba", "binam", "binar", "binas", "binat", "binau", "binem", "binen", "bines", "bineu", "bingo", "binin", "binis", "bioma", "biont", "biota", "bipar", "bipla", "birba", "birbe", "birbi", "birbo", "biret", "birla", "birma", "bisam", "bisar", "bisas", "bisat", "bisau", "bisbe", "bisem", "bisen", "bises", "biseu", "bisin", "bisis", "bisos", "bitam", "bitar", "bitas", "bitat", "bitau", "bitem", "biten", "biter", "bites", "biteu", "bitin", "bitis", "bitll", "bitoc", "bitol", "bitxa", "bitxo", "bivac", "bivia", "bixes", "blada", "blana", "blanc", "bland", "blans", "blasm", "blaso", "blats", "blaur", "blaus", "blava", "blecs", "bleda", "blega", "blego", "bleia", "bleim", "bleir", "bleis", "bleit", "bleiu", "bleix", "blens", "blets", "bleva", "blima", "blind", "bloca", "bloco", "blocs", "blogs", "bloom", "blues", "blufs", "boals", "bobin", "bocal", "bocam", "boçam", "boçar", "boças", "bocat", "boçat", "boçau", "bocem", "bocen", "boces", "boceu", "bocin", "bocis", "bocoi", "boços", "bocut", "bodes", "bodis", "boers", "boets", "bofeg", "bofia", "bogal", "bogam", "bogar", "bogas", "bogat", "bogau", "boges", "bogos", "bogue", "bogui", "bohri", "boiam", "boiar", "boias", "boiat", "boiau", "boics", "boids", "boiem", "boien", "boies", "boiet", "boieu", "boiga", "boigs", "boina", "boira", "boire", "boiri", "boiro", "boixa", "boixe", "boixi", "boixo", "bojac", "bojal", "bojor", "bojos", "bolca", "bolco", "bolcs", "bolda", "boldo", "bolei", "boles", "bolet", "bolic", "bolid", "bolig", "bolit", "bolla", "bolle", "bolli", "bollo", "bolls", "bomba", "bombe", "bombi", "bombo", "bonas", "bonda", "bondo", "boneg", "bones", "bonet", "bonia", "bonic", "bonim", "bonir", "bonis", "bonit", "boniu", "bonix", "bonys", "bonze", "booms", "boqui", "boral", "boram", "borar", "boras", "borat", "borau", "borax", "borda", "borde", "bordi", "bordo", "bords", "borem", "boren", "bores", "boreu", "boria", "boric", "borin", "boris", "borja", "borla", "borle", "borli", "borlo", "borms", "borna", "borne", "borni", "borno", "borns", "borra", "borro", "borsa", "borur", "bosca", "bosco", "boscs", "bossa", "botam", "botar", "botas", "botat", "botau", "botem", "boten", "boter", "botes", "botet", "boteu", "botia", "botid", "botil", "botim", "botin", "botir", "botis", "botit", "botiu", "botix", "botja", "boton", "botos", "botra", "botre", "botri", "botut", "botxa", "botxi", "boual", "bouer", "bouet", "boval", "bover", "boves", "bovid", "bovor", "boxam", "boxar", "boxas", "boxat", "boxau", "boxem", "boxen", "boxer", "boxes", "boxeu", "boxin", "boxis", "braça", "bracs", "braga", "brama", "brame", "brami", "bramo", "brams", "branc", "brand", "brans", "braol", "brasa", "braus", "brava", "bravo", "brecs", "brees", "brega", "brego", "brell", "brenc", "brens", "breny", "bresc", "breto", "breus", "breva", "brial", "brics", "brida", "brido", "bries", "brill", "brinc", "brind", "brins", "briol", "brios", "brisa", "brise", "brisi", "briso", "brita", "brito", "briva", "brive", "brivi", "brivo", "broca", "broco", "brocs", "broda", "brode", "brodi", "brodo", "brogi", "broix", "broll", "broma", "brome", "bromi", "bromo", "broms", "bronc", "bronz", "brost", "brota", "brote", "broti", "broto", "brots", "brotx", "brous", "brucs", "bruel", "brufa", "brufe", "brufi", "brufo", "bruga", "bruit", "bruix", "brull", "brumi", "brums", "bruna", "bruns", "brunz", "brusa", "brusc", "brusi", "bruta", "bruts", "buata", "bubal", "bubes", "bubis", "bucal", "bucar", "bucci", "bucle", "budes", "budic", "bufal", "bufam", "bufar", "bufas", "bufat", "bufau", "bufec", "bufeg", "bufem", "bufen", "bufes", "bufet", "bufeu", "bufin", "bufis", "bufit", "bufor", "bugat", "bugia", "bugiu", "bugon", "bugre", "buida", "buide", "buidi", "buido", "buina", "buits", "buixi", "bujol", "bujot", "bulbs", "bulla", "bulli", "bullo", "bulls", "bunes", "buosa", "burat", "burca", "burda", "burge", "burgi", "burgs", "burin", "burja", "burjo", "burla", "burle", "burli", "burlo", "buros", "burot", "burra", "burro", "burxa", "burxe", "burxi", "burxo", "busca", "busco", "busos", "bussi", "busso", "busts", "butza", "cabal", "cabas", "cabeç", "cabem", "caben", "caber", "cabes", "cabet", "cabeu", "cabia", "cabit", "cabla", "cable", "cabli", "cablo", "cabot", "cabra", "cabre", "cabro", "cabus", "cabut", "caçam", "caçar", "caças", "caçat", "cacau", "caçau", "cacem", "cacen", "caces", "caceu", "cacic", "cacin", "cacis", "cadaf", "cadap", "cadec", "caden", "cadet", "cadis", "cadmi", "caduc", "caduf", "cadup", "caent", "cafes", "cafis", "cafit", "cafre", "cafta", "cagam", "cagar", "cagas", "cagat", "cagau", "cague", "cagui", "caiac", "caids", "caiem", "caieu", "caiga", "caira", "caire", "cairi", "cairo", "caixa", "caixo", "calam", "calao", "calar", "calas", "calat", "calau", "calba", "calbs", "calca", "calça", "calce", "calci", "calco", "calço", "calcs", "calçs", "calda", "caldo", "calds", "calem", "calen", "caler", "cales", "calet", "caleu", "calfa", "calfe", "calfi", "calfo", "calga", "calia", "calid", "calin", "calis", "caliu", "calla", "calla", "calle", "calli", "callo", "calls", "calma", "calme", "calmi", "calmo", "calms", "calor", "calos", "calta", "calua", "calze", "camal", "camat", "cames", "camfa", "camin", "camio", "campa", "campe", "campi", "campo", "camps", "camus", "camut", "canac", "canal", "canar", "canat", "canca", "canço", "candi", "canem", "canes", "canet", "canic", "canid", "canoa", "canon", "canor", "canos", "canot", "cansa", "canse", "cansi", "canso", "canta", "cante", "canti", "canto", "cants", "canut", "canvi", "canya", "canyo", "caoba", "caoli", "capaç", "capam", "capar", "capas", "capat", "capau", "capça", "capce", "capci", "capço", "capel", "capem", "capen", "caper", "capes", "capet", "capeu", "capia", "capim", "capin", "capir", "capis", "capit", "capiu", "capix", "capoc", "capol", "capon", "capos", "capot", "capri", "capsa", "capta", "capte", "capti", "capto", "caqui", "caral", "caram", "carat", "carbo", "carca", "carda", "carde", "cardi", "cardo", "cards", "carei", "caren", "cares", "carex", "carga", "caria", "carib", "carie", "carii", "carin", "cario", "carla", "carli", "carmi", "carni", "carns", "caror", "caros", "carpa", "carpi", "carpo", "carps", "carra", "carre", "carri", "carro", "carst", "carta", "carte", "carto", "casal", "casam", "casar", "casas", "casat", "casau", "casba", "casca", "casco", "cascs", "cascu", "casem", "casen", "cases", "caseu", "casin", "casis", "casor", "casos", "casot", "caspa", "caspi", "cassa", "casse", "cassi", "casso", "casta", "castr", "casts", "catar", "catau", "catet", "catio", "catre", "catxa", "catxe", "catxi", "catxo", "cauen", "caues", "cauet", "caura", "caure", "causa", "cause", "causi", "causo", "cauta", "cauts", "cavam", "cavar", "cavas", "cavat", "cavau", "cavea", "cavec", "cavem", "caven", "caves", "cavet", "caveu", "cavil", "cavim", "cavin", "cavis", "cavum", "cebar", "cebes", "cebid", "cebua", "cecal", "cedia", "cedim", "cedir", "cedis", "cedit", "cediu", "cedix", "cedre", "cedri", "cegam", "cegar", "cegas", "cegat", "cegau", "cegue", "cegui", "ceiba", "celam", "celar", "celas", "celat", "celau", "celem", "celen", "celes", "celeu", "celic", "celin", "celis", "cella", "cella", "cells", "celta", "cendr", "cenes", "censa", "cense", "censi", "censo", "cente", "cento", "centr", "cents", "cenyi", "cepat", "cerat", "cerca", "cercl", "cerco", "cercs", "cerda", "cerer", "ceres", "ceria", "ceric", "ceris", "cerna", "cerne", "cerni", "cerno", "cerns", "ceros", "cerot", "cerra", "cerro", "certa", "certs", "cerut", "cerva", "cervi", "cervo", "cesar", "cesia", "cesis", "cessa", "cesse", "cessi", "cesso", "cests", "cetil", "ciada", "cians", "ciant", "ciara", "ciare", "ciati", "ciats", "ciava", "cicle", "ciclo", "cient", "cigar", "cigne", "cigni", "cigro", "cilis", "cimal", "cimam", "cimar", "cimas", "cimat", "cimau", "cimem", "cimen", "cimer", "cimes", "cimeu", "cimin", "cimis", "cimos", "cincs", "cines", "cingl", "cinic", "cinta", "cinte", "cinti", "cinto", "cintr", "cints", "circa", "circs", "cirer", "ciris", "cisam", "cisar", "cisas", "cisat", "cisau", "cisem", "cisen", "cises", "ciseu", "cisin", "cisis", "cisma", "cista", "cists", "citam", "citar", "citas", "citat", "citau", "citem", "citen", "cites", "citeu", "citin", "citis", "citri", "citro", "ciuro", "civet", "civic", "civil", "claca", "claco", "clacs", "clama", "clame", "clami", "clamo", "clamp", "clams", "clans", "clapa", "clape", "clapi", "clapo", "claps", "clara", "clari", "claro", "clars", "clasc", "clast", "claus", "clava", "clave", "clavi", "clavo", "cleca", "clecs", "cleda", "clenx", "clero", "cleta", "clica", "clico", "clics", "clima", "clina", "clins", "clipi", "clips", "clisi", "clixe", "cloca", "cloem", "cloeu", "clofa", "cloga", "cloia", "clona", "clone", "cloni", "clono", "clons", "clops", "clora", "clore", "clori", "cloro", "clors", "closa", "closc", "clota", "clote", "cloti", "cloto", "clots", "clous", "clova", "clubs", "cluca", "clucs", "clusa", "coala", "coana", "coapt", "coart", "coati", "cobai", "cobla", "coble", "cobra", "cobre", "cobri", "cobro", "coces", "cocos", "cocou", "cocul", "coder", "codes", "codex", "codis", "codol", "coent", "coers", "coets", "cofam", "cofar", "cofas", "cofat", "cofau", "cofem", "cofen", "cofes", "cofeu", "cofia", "cofin", "cofis", "cofoi", "cofre", "cogit", "cogue", "cogui", "cogut", "cohob", "coiem", "coien", "coies", "coieu", "coiot", "coipu", "coits", "coixa", "coixi", "colam", "colar", "colas", "colat", "colau", "colca", "colco", "colem", "colen", "coler", "coles", "colet", "coleu", "colga", "colgo", "colia", "colic", "colin", "colis", "colit", "colla", "colle", "colli", "collo", "colls", "colob", "colom", "colon", "color", "colos", "colpi", "colps", "colra", "colre", "colri", "colro", "colta", "colts", "colur", "colza", "colze", "colzi", "colzo", "comal", "comam", "coman", "comar", "comas", "comat", "comau", "comem", "comen", "comes", "comet", "comeu", "comic", "comin", "comis", "comit", "compr", "compt", "comte", "conat", "conca", "conco", "concs", "condi", "condo", "conec", "confi", "conga", "conic", "conra", "conre", "conri", "conro", "const", "conta", "conte", "conti", "conto", "conus", "conve", "conxa", "conxe", "conxi", "conxo", "conya", "conys", "coopt", "copal", "copam", "copar", "copas", "copat", "copau", "copel", "copem", "copen", "copeo", "coper", "copes", "copeu", "copia", "copie", "copii", "copin", "copio", "copis", "cople", "copra", "copro", "copsa", "copse", "copsi", "copso", "copta", "copte", "copul", "coqui", "coral", "corba", "corbe", "corbi", "corbo", "corbs", "corca", "corco", "corcs", "corda", "corde", "cordi", "cordo", "cords", "corea", "cores", "corfa", "coris", "corma", "corms", "corna", "corne", "corni", "corno", "corns", "coron", "corra", "corre", "corri", "corro", "corrs", "corsa", "corts", "cosac", "cosco", "coses", "cosia", "cosim", "cosir", "cosis", "cosit", "cosiu", "cospi", "cossa", "cosse", "cossi", "cosso", "costa", "coste", "costi", "costo", "costs", "cotam", "cotar", "cotas", "cotat", "cotau", "cotem", "coten", "cotes", "coteu", "cotid", "cotin", "cotis", "cotna", "cotne", "cotni", "cotno", "cotxa", "cotxe", "couen", "coura", "coure", "couri", "couro", "coval", "covam", "covar", "covas", "covat", "covau", "covem", "coven", "cover", "coves", "coveu", "covin", "covis", "coxal", "coxes", "cracs", "crana", "cranc", "crane", "crani", "crano", "crans", "crasi", "crato", "cream", "crear", "creas", "creat", "creau", "creba", "crebe", "crebi", "crebo", "crecs", "credo", "creem", "creen", "crees", "creeu", "crega", "creia", "creim", "crein", "creis", "creix", "crema", "creme", "cremi", "cremo", "crems", "crepe", "creps", "cresc", "cresp", "crest", "creta", "creti", "creua", "creue", "creui", "creuo", "creus", "criam", "criar", "crias", "criat", "criau", "crica", "crics", "crida", "cride", "cridi", "crido", "criem", "crien", "cries", "crieu", "criin", "criis", "crims", "crina", "crins", "crise", "crisi", "crism", "crisp", "crits", "croat", "croca", "crocs", "crols", "croma", "crome", "cromi", "cromo", "croms", "crons", "cruel", "crues", "cruia", "cruie", "cruin", "cruio", "cruis", "cruix", "cruor", "crupo", "crups", "cuada", "cuafi", "cuats", "cubic", "cubit", "cucam", "cucar", "cucas", "cucat", "cucau", "cucos", "cucut", "cudol", "cudus", "cuege", "cuegi", "cueig", "cueja", "cuejo", "cuell", "cuera", "cuers", "cueta", "cueto", "cugot", "cuguç", "cugul", "cuics", "cuida", "cuide", "cuidi", "cuido", "cuina", "cuine", "cuini", "cuino", "cuiro", "cuirs", "cuita", "cuite", "cuiti", "cuito", "cuits", "cuixa", "cuixe", "culam", "cular", "culas", "culat", "culau", "culem", "culen", "culer", "cules", "culet", "culeu", "culin", "culis", "culla", "culli", "cullo", "culls", "culot", "culpa", "culpe", "culpi", "culpo", "culta", "culte", "cumel", "cumul", "cunys", "cuots", "cupes", "cuque", "cuqui", "curam", "curar", "curas", "curat", "curau", "curem", "curen", "cures", "cureu", "curia", "curie", "curin", "curio", "curis", "curos", "curra", "curri", "curro", "cursa", "curse", "cursi", "curso", "curta", "curts", "curul", "cusen", "cuses", "cusin", "cusis", "cussa", "cuter", "cutis", "dacia", "dacio", "dacis", "dacro", "dacsa", "dadas", "dades", "dador", "daica", "daics", "daina", "daixo", "dalet", "dalia", "dalin", "dalla", "dalle", "dalli", "dallo", "dalls", "dalts", "damas", "dames", "damna", "damne", "damni", "damno", "dandi", "danes", "dansa", "danse", "dansi", "danso", "danya", "danye", "danyi", "danyo", "danys", "daran", "daras", "darda", "darde", "dardi", "dardo", "dards", "darem", "daren", "dares", "dareu", "darga", "dargo", "daria", "daric", "dasia", "datam", "datar", "datas", "datat", "datau", "datem", "daten", "dates", "dateu", "datil", "datin", "datis", "datiu", "datxa", "daura", "daure", "dauri", "dauro", "davem", "daven", "daves", "daveu", "davia", "deban", "debat", "debel", "debil", "debit", "debut", "decal", "decap", "decau", "decep", "deces", "decil", "decim", "decor", "dedal", "dedic", "dedui", "defec", "defen", "defes", "degot", "degue", "degui", "degut", "deiem", "deien", "deies", "deieu", "deisi", "deixa", "deixe", "deixi", "deixo", "dejun", "dejus", "delat", "delco", "deleg", "deler", "delfi", "delga", "delia", "delim", "delir", "delis", "delit", "deliu", "delix", "della", "delma", "delme", "delmi", "delmo", "delta", "deman", "demes", "demet", "demor", "deneg", "dener", "denes", "denim", "denot", "denou", "densa", "denta", "dente", "denti", "dento", "dents", "denud", "depas", "depen", "depes", "depil", "depos", "depur", "derbi", "deria", "deriv", "derma", "derna", "derog", "desam", "desar", "desas", "desat", "desau", "desca", "desem", "desen", "deses", "deseu", "desfa", "desfe", "desig", "desin", "desis", "desix", "desoi", "desol", "desos", "desou", "desti", "destr", "desus", "deten", "detin", "deton", "detur", "deuen", "deura", "deure", "deute", "devem", "deveu", "devia", "devon", "devor", "devot", "dhals", "diaca", "diacs", "diada", "dials", "diana", "diari", "diazo", "dicli", "dicta", "dicte", "dicti", "dicto", "didal", "dides", "didim", "didos", "didot", "diens", "dient", "diesi", "dieta", "difam", "difon", "difos", "difus", "digau", "digen", "digit", "digna", "digne", "digni", "digno", "digue", "digui", "dilat", "dilui", "diman", "dimer", "dinal", "dinam", "dinar", "dinas", "dinat", "dinau", "dinda", "dinde", "dindi", "dindo", "dinem", "dinen", "diner", "dines", "dineu", "dingo", "dinin", "dinis", "dinou", "dinya", "dinye", "dinyi", "dinyo", "diode", "dioic", "diols", "dioxa", "dipol", "diput", "diran", "diras", "direm", "direu", "diria", "discs", "dista", "diste", "disti", "disto", "ditas", "dites", "ditet", "diton", "diuen", "diurn", "divag", "divan", "dives", "divis", "divos", "dixis", "dobla", "doble", "dobli", "doblo", "docil", "docta", "docte", "dodos", "dogal", "dogam", "dogma", "dogon", "doina", "doiut", "dolam", "dolar", "dolas", "dolat", "dolau", "dolça", "dolem", "dolen", "doler", "doles", "doleu", "dolga", "dolia", "dolin", "dolis", "dolla", "dolls", "dolor", "dolos", "domam", "domar", "domas", "domat", "domau", "domem", "domen", "domer", "domes", "domeu", "domin", "domis", "domta", "domte", "domti", "domto", "domus", "donam", "donar", "donas", "donat", "donau", "doncs", "donem", "donen", "doner", "dones", "doneu", "donin", "donis", "donja", "dopam", "dopar", "dopas", "dopat", "dopau", "dopem", "dopen", "dopes", "dopeu", "dopin", "dopis", "doral", "dorca", "doria", "doric", "doris", "dorma", "dormi", "dormo", "dorms", "dosam", "dosar", "dosas", "dosat", "dosau", "dosem", "dosen", "doses", "doset", "doseu", "dosin", "dosis", "dosos", "dotal", "dotam", "dotar", "dotas", "dotat", "dotau", "dotem", "doten", "dotes", "doteu", "dotin", "dotis", "dotze", "dracs", "draga", "drago", "drama", "drapa", "drape", "drapi", "drapo", "draps", "dreça", "drece", "dreci", "dreço", "drena", "drene", "dreni", "dreno", "drens", "dreta", "drets", "dribl", "dries", "drils", "dring", "droga", "drogo", "drons", "dropa", "dropo", "druda", "drupa", "drusa", "druts", "duals", "duana", "duars", "duble", "dubni", "dubta", "dubte", "dubti", "dubto", "ducal", "ducar", "ducat", "duels", "duent", "duets", "dugem", "dugen", "duges", "dugeu", "dugin", "dugis", "dugue", "dugui", "duiem", "duien", "duies", "duieu", "duita", "duits", "dujam", "dujar", "dujas", "dujat", "dujau", "duler", "dules", "dulia", "dulls", "dumes", "dunar", "dunes", "duode", "dupla", "duple", "duram", "duran", "durar", "duras", "durat", "durau", "durem", "duren", "dures", "dureu", "duria", "durin", "durio", "duris", "duros", "dutes", "dutxa", "dutxe", "dutxi", "dutxo", "ebens", "ebria", "ebris", "ecidi", "ecoic", "ecoto", "edats", "edema", "edens", "edeta", "edils", "edita", "edite", "editi", "edito", "edril", "educa", "educo", "eduia", "eduim", "eduir", "eduis", "eduit", "eduiu", "eduix", "eduls", "efebs", "efesi", "eflui", "efods", "efors", "egees", "egeus", "egida", "eguer", "egues", "eguin", "eider", "einam", "eines", "eixal", "eixam", "eixat", "eixau", "eixea", "eixes", "eixia", "eixim", "eixir", "eixis", "eixit", "eixiu", "eixon", "eixos", "eixug", "eixut", "eject", "elape", "elder", "elegi", "elemi", "elenc", "elets", "eleva", "eleve", "elevi", "elevo", "elidi", "elisi", "elits", "elles", "elogi", "elois", "eludi", "eluia", "eluim", "eluir", "eluis", "eluit", "eluiu", "eluix", "eluls", "emana", "emane", "emani", "emano", "embaf", "embag", "embal", "embas", "embat", "embec", "emben", "embeu", "embic", "embla", "emble", "embli", "emblo", "emboc", "emboç", "embog", "embol", "embon", "embos", "embot", "embov", "embus", "embut", "emesa", "emesi", "emeta", "emete", "emeti", "emeto", "emets", "emigr", "emirs", "emmar", "emmat", "emmel", "emmen", "empac", "empal", "empan", "empar", "empas", "empat", "empeg", "empel", "empes", "empil", "empin", "empip", "empit", "empom", "empop", "empot", "empou", "empra", "empre", "empri", "empro", "emula", "emule", "emuli", "emulo", "emuls", "enarc", "enarç", "enart", "enast", "encar", "encas", "encau", "enceb", "enceg", "encel", "encen", "encep", "encer", "ences", "encet", "encim", "encir", "encis", "encli", "encol", "encon", "encop", "encov", "encub", "encul", "endeg", "endol", "endos", "enduc", "endur", "endus", "endut", "enduu", "enema", "enerv", "enfad", "enfav", "enfel", "enfic", "enfil", "enfit", "enfoc", "enfon", "enfus", "engaf", "engan", "engas", "engat", "engeg", "engir", "engol", "engom", "engul", "enjoi", "enjov", "enjub", "enjus", "enlla", "enmig", "ennov", "enols", "enrai", "enram", "enras", "enred", "enriu", "enroc", "enrol", "enros", "enrun", "ensab", "ensac", "enseu", "ensim", "ensot", "ensum", "ensus", "entat", "entec", "entel", "enten", "enter", "entes", "entim", "entin", "entoi", "entom", "enton", "entos", "entov", "entra", "entre", "entri", "entro", "entub", "entur", "enuig", "enula", "enutj", "envai", "envas", "envel", "enver", "envet", "envia", "envid", "envie", "envii", "envin", "envio", "envit", "envol", "enyes", "enyor", "enzes", "enzim", "eolic", "eolit", "epica", "epice", "epics", "epoca", "epode", "epulo", "equid", "equip", "erada", "erals", "erari", "erbis", "erera", "erere", "ereri", "erero", "erers", "ereta", "erets", "ergol", "eriça", "erice", "erici", "eriço", "erigi", "erina", "ermam", "ermar", "ermas", "ermat", "ermau", "ermem", "ermen", "ermes", "ermeu", "ermin", "ermis", "ermos", "ermot", "eroga", "erogo", "erola", "erole", "eroli", "erolo", "erols", "erram", "errar", "erras", "errat", "errau", "errem", "erren", "erres", "erreu", "errin", "erris", "error", "erros", "ertes", "ertic", "eruct", "eruga", "esbaf", "esbat", "esbes", "esboc", "esbos", "esbuc", "escac", "escal", "escam", "escap", "escar", "escas", "escat", "escau", "escoa", "escod", "escoe", "escoi", "escol", "escon", "escoo", "escor", "escos", "escot", "escou", "escru", "escua", "escuc", "escud", "escue", "escui", "escul", "escum", "escuo", "escup", "escur", "escut", "escuu", "esdui", "esfen", "esfum", "esgai", "esgol", "esgot", "eslau", "eslip", "esmam", "esmar", "esmas", "esmat", "esmau", "esmem", "esmen", "esmes", "esmeu", "esmic", "esmin", "esmis", "esmoc", "esmol", "esmus", "esnob", "esnov", "espad", "espai", "espas", "espat", "esper", "espes", "espet", "espeu", "espia", "espic", "espie", "espii", "espin", "espio", "espir", "espos", "espot", "espua", "espuç", "espue", "espui", "espuo", "esput", "espuu", "esque", "esqui", "esser", "esses", "essiu", "estac", "estaf", "estai", "estam", "estan", "estar", "estas", "estat", "estau", "estel", "estem", "esten", "ester", "estes", "esteu", "estib", "estic", "estil", "estim", "estir", "estiu", "estoc", "estof", "estol", "estop", "estor", "estos", "estot", "estov", "estre", "estri", "estub", "estuc", "estuf", "esvai", "esvar", "esver", "esvor", "etali", "etans", "etapa", "etens", "eteri", "etern", "eters", "ethos", "etica", "etics", "etile", "etils", "etims", "etins", "etiol", "etiop", "etnia", "etnic", "etoli", "etusa", "etzib", "eunuc", "euros", "evadi", "evita", "evite", "eviti", "evito", "evoca", "evoco", "evols", "exalç", "exalt", "excav", "exces", "excit", "excus", "exeat", "execr", "exerg", "exhal", "exhum", "exigi", "exigu", "exili", "eximi", "exina", "exits", "exode", "exons", "exorn", "expen", "expes", "expia", "expie", "expii", "expil", "expio", "expir", "expos", "exsol", "exsud", "extra", "exult", "exvot", "fabul", "facem", "facen", "faces", "faceu", "facil", "facin", "facis", "facto", "fadam", "fadar", "fadas", "fadat", "fadau", "fadem", "faden", "fades", "fadeu", "fadin", "fadis", "fador", "fadri", "faena", "faent", "faeto", "fages", "fagot", "faiço", "faigs", "faisa", "faiso", "faito", "faixa", "faixe", "faixi", "faixo", "fajol", "fajos", "falba", "falbs", "falca", "falco", "falço", "falçs", "falda", "faldo", "falla", "falle", "falli", "fallo", "falls", "falsa", "false", "falsi", "falso", "falta", "falte", "falti", "falto", "falua", "fames", "famos", "famul", "fanal", "fanga", "fango", "fangs", "faqui", "farad", "faran", "farao", "faras", "farci", "farda", "farem", "fareu", "farga", "fargo", "faria", "farot", "farro", "farsa", "farta", "farto", "farts", "fases", "fasic", "fasos", "fasts", "fatal", "fatic", "fatos", "fatua", "fatus", "fatxa", "faula", "fauna", "faune", "faust", "fauve", "favar", "faver", "faves", "favor", "faxos", "feble", "febre", "fecal", "fedai", "fedal", "feder", "fedes", "feiem", "feien", "feies", "feieu", "feina", "feixa", "feixe", "feixi", "feixo", "feliç", "felid", "fello", "felus", "femam", "femar", "femas", "femat", "femau", "femem", "femen", "femer", "femes", "femeu", "femin", "femis", "femta", "femte", "femti", "femto", "femur", "fenal", "fenar", "fenas", "fencs", "fendi", "fenem", "fenen", "fener", "feneu", "fenga", "fenia", "fenil", "fenix", "fenol", "fenya", "fenye", "fenyi", "fenyo", "fenys", "feraç", "feral", "feram", "ferem", "feren", "feres", "fereu", "feria", "ferim", "ferin", "ferir", "feris", "ferit", "feriu", "ferix", "ferla", "ferma", "ferme", "fermi", "fermo", "ferms", "feroç", "feror", "ferra", "ferre", "ferri", "ferro", "ferum", "feses", "fesol", "fesos", "festa", "festi", "fetal", "fetes", "fetge", "fetid", "fetjo", "fetor", "fetus", "fiada", "fianç", "fiant", "fiara", "fiare", "fiats", "fiava", "fibla", "fible", "fibli", "fiblo", "fibra", "ficam", "ficar", "ficas", "ficat", "ficau", "ficta", "ficte", "ficus", "fidel", "fideu", "figle", "figur", "filam", "filar", "filas", "filat", "filau", "filem", "filen", "files", "filet", "fileu", "filia", "filie", "filii", "filin", "filio", "filis", "filla", "fills", "filma", "filme", "filmi", "filmo", "films", "filos", "filtr", "filum", "fimbr", "final", "finam", "finar", "finas", "finat", "finau", "finca", "finco", "finem", "finen", "fines", "fineu", "fingi", "finia", "finim", "finin", "finir", "finis", "finit", "finiu", "finix", "finor", "finta", "finte", "finti", "finto", "fiola", "fiord", "fique", "fiqui", "firal", "firam", "firar", "firas", "firat", "firau", "firem", "firen", "fires", "fireu", "firin", "firis", "firma", "firme", "firmi", "firmo", "fisca", "fiscs", "fisic", "fissa", "fisto", "fitam", "fitar", "fitas", "fitat", "fitau", "fitem", "fiten", "fiter", "fites", "fiteu", "fitin", "fitis", "fitor", "fitxa", "fitxe", "fitxi", "fitxo", "fixam", "fixar", "fixas", "fixat", "fixau", "fixem", "fixen", "fixes", "fixeu", "fixin", "fixis", "fixos", "flaca", "flacs", "flair", "flaix", "flama", "flame", "flami", "flamo", "flams", "flanc", "flaps", "flasc", "flats", "fleca", "flect", "fleix", "fling", "flint", "flirt", "flita", "flite", "fliti", "flito", "flits", "flixa", "flixe", "flixi", "flixo", "floca", "floco", "flocs", "flora", "flori", "floro", "flors", "flota", "flote", "floti", "floto", "flous", "floxs", "fluia", "fluid", "fluim", "fluir", "fluis", "fluit", "fluiu", "fluix", "flums", "fluor", "fobia", "focal", "focea", "foceu", "focid", "focus", "foehn", "fofes", "fofos", "fogal", "fogam", "fogar", "fogas", "fogat", "fogau", "fogor", "fogos", "fogot", "fogue", "fogui", "fohns", "foies", "folcs", "folga", "folgo", "folia", "folic", "folie", "folii", "folio", "folis", "folla", "folle", "folli", "follo", "folls", "folra", "folre", "folri", "folro", "fonam", "fonar", "fonas", "fonat", "fonau", "fonda", "fondo", "fonem", "fonen", "foner", "fones", "foneu", "fonga", "fongo", "fongs", "fonia", "fonic", "fonin", "fonis", "fonts", "fonya", "fonye", "fonyi", "fonyo", "forad", "foral", "forat", "forbi", "forca", "força", "force", "forci", "forco", "forço", "forcs", "forem", "foren", "fores", "foreu", "forge", "forgi", "forja", "forjo", "forma", "forme", "formi", "formo", "forni", "forns", "forra", "forro", "forta", "forte", "forti", "forts", "forum", "fosca", "foscs", "foses", "fosfa", "fosfe", "fosos", "fossa", "fosse", "fossi", "fosso", "fotem", "foten", "fotes", "foteu", "fotge", "fotgi", "fotia", "fotic", "fotil", "fotin", "fotis", "fotja", "fotjo", "fotos", "fotra", "fotre", "fotut", "fovea", "fracs", "fraga", "franc", "franj", "frare", "fraro", "frase", "fraus", "frecs", "freda", "freds", "frega", "fregi", "frego", "fremi", "frena", "frene", "freni", "freno", "frens", "fresa", "fresc", "frese", "fresi", "freso", "freta", "freus", "frigi", "frija", "frisa", "frise", "frisi", "friso", "frita", "frits", "front", "fruia", "fruim", "fruir", "fruis", "fruit", "fruiu", "fruix", "frust", "fucal", "fucus", "fuell", "fuels", "fuent", "fuets", "fugaç", "fugat", "fugen", "fuges", "fugia", "fugim", "fugin", "fugir", "fugis", "fugit", "fugiu", "fuita", "fuits", "fules", "fulgi", "fulla", "fulle", "fulli", "fullo", "fulls", "fulve", "fumam", "fumar", "fumas", "fumat", "fumau", "fumem", "fumen", "fumer", "fumes", "fumeu", "fumia", "fumic", "fumin", "fumis", "fumos", "fumut", "funda", "funde", "fundi", "fundo", "funya", "funyi", "funyo", "funys", "furam", "furan", "furar", "furas", "furat", "furau", "furem", "furen", "furer", "fures", "fureu", "furga", "furgo", "furia", "furin", "furis", "furon", "furor", "furot", "furra", "furro", "furta", "furte", "furti", "furto", "furts", "fusat", "fusel", "fuses", "fuset", "fusio", "fusos", "fusta", "fusts", "futes", "futil", "futur", "gabam", "gabar", "gabas", "gabat", "gabau", "gabem", "gaben", "gabes", "gabeu", "gabia", "gabin", "gabio", "gabis", "gabre", "gabun", "gadid", "gafes", "gafet", "gaial", "gaiat", "gaido", "gaies", "gaigs", "gaiol", "gaire", "gairo", "gaita", "gajos", "galba", "galda", "galer", "gales", "galet", "galfo", "galga", "galgo", "galib", "galio", "galiv", "galla", "galli", "gallo", "galls", "galop", "galta", "galza", "galze", "galzi", "galzo", "gamam", "gamar", "gamas", "gamat", "gamau", "gamba", "gambe", "gambi", "gambo", "gamem", "gamen", "games", "gameu", "gamin", "gamis", "gamma", "gamoi", "ganes", "ganga", "gansa", "ganso", "ganta", "ganut", "ganxa", "ganxo", "ganya", "ganyo", "gaons", "garba", "garbi", "garbo", "gardi", "garfi", "garla", "garle", "garli", "garlo", "garol", "garra", "garri", "garro", "garsa", "garse", "garsi", "garso", "garts", "gasam", "gasar", "gasas", "gasat", "gasau", "gasca", "gasco", "gasem", "gasen", "gases", "gaseu", "gasin", "gasis", "gasiu", "gasos", "gaspa", "gaspe", "gaspi", "gaspo", "gassa", "gasso", "gasta", "gaste", "gasti", "gasto", "gates", "gatet", "gatge", "gatin", "gaton", "gauba", "gaube", "gaubi", "gaubo", "gaudi", "gauge", "gauss", "gavet", "gavia", "gavid", "gavot", "gebra", "gebre", "gebri", "gebro", "gelam", "gelar", "gelas", "gelat", "gelau", "gelea", "gelem", "gelen", "geles", "geleu", "gelid", "gelin", "gelis", "geliu", "gelor", "gelos", "gemat", "gemec", "gemeg", "gemes", "gemia", "gemim", "gemin", "gemir", "gemis", "gemit", "gemiu", "gemix", "gemma", "genal", "gener", "genet", "genic", "genis", "gents", "genui", "geoda", "gepes", "gepic", "gerda", "gerdo", "gerds", "gerga", "gerla", "germa", "gerna", "gerra", "gerro", "gespa", "gesps", "gesta", "geste", "gesti", "gesto", "gests", "gibos", "gicam", "gicar", "gicas", "gicat", "gicau", "gigre", "gihad", "gijol", "ginya", "ginye", "ginyi", "ginyo", "ginys", "gique", "giqui", "giram", "girar", "giras", "girat", "girau", "girem", "giren", "gires", "gireu", "giric", "girin", "giris", "gisca", "gisco", "gitam", "gitar", "gitas", "gitat", "gitau", "gitem", "giten", "gites", "giteu", "gitin", "gitis", "glaça", "glace", "glaci", "glaço", "gland", "glans", "glapi", "glast", "glati", "glauc", "glavi", "gleba", "gleis", "glena", "glera", "gleva", "glies", "gloms", "glops", "glosa", "glose", "glosi", "gloso", "glota", "gloto", "glots", "gluma", "gluti", "gneis", "gnoms", "gnosi", "gobid", "gobis", "gobit", "godes", "godin", "godua", "gofra", "gofre", "gofri", "gofro", "gogem", "gogen", "goges", "gogeu", "gogin", "gogis", "goigs", "gojam", "gojar", "gojas", "gojat", "gojau", "gojos", "goles", "golfa", "golfo", "golfs", "golls", "golos", "golut", "gomat", "gomer", "gomes", "gomet", "gomos", "gongs", "gonio", "gorda", "gords", "gorga", "gorgs", "gorja", "gorra", "gorri", "gosam", "gosar", "gosas", "gosat", "gosau", "gosem", "gosen", "goses", "goseu", "gosin", "gosis", "gossa", "gotes", "gotic", "gotim", "gotos", "gotxa", "gotza", "gotzo", "gouda", "grada", "grafs", "grall", "grams", "grana", "grane", "grani", "grano", "grans", "grapa", "grape", "grapi", "grapo", "grata", "grate", "grati", "grato", "grats", "graus", "grava", "grave", "gravi", "gravo", "greal", "greca", "grecs", "greda", "grega", "greix", "greja", "grell", "gremi", "greny", "gresa", "greus", "grial", "grier", "grifa", "grife", "grifi", "grifo", "grifs", "grill", "grimp", "griot", "grips", "grisa", "griso", "grisu", "grius", "griva", "grocs", "groga", "grogs", "gronx", "grony", "gropa", "grops", "gruam", "gruar", "gruas", "gruat", "gruau", "gruem", "gruen", "gruer", "grues", "grueu", "grufa", "grufe", "grufi", "grufo", "gruid", "gruin", "gruis", "gruix", "gruma", "grume", "grumi", "grumo", "grums", "gruny", "grups", "gruta", "guait", "guaix", "guals", "guano", "guant", "guany", "guapa", "guapo", "guara", "guard", "guari", "gubia", "guelf", "guell", "guerx", "gueta", "gueto", "guiam", "guiar", "guias", "guiat", "guiau", "guiem", "guien", "guier", "guies", "guieu", "guiin", "guiis", "guill", "guimb", "guind", "guino", "guiny", "guipa", "guipe", "guipi", "guipo", "guisa", "guisc", "guise", "guisi", "guiso", "guita", "guite", "guiti", "guito", "guits", "guixa", "guixe", "guixi", "guixo", "gules", "gumia", "gunit", "gurus", "gusla", "gussi", "gusta", "guste", "gusti", "gusto", "gusts", "gutxo", "habil", "habit", "hadal", "hades", "hadit", "hadro", "hafni", "hagem", "hagen", "hages", "hageu", "hagim", "hagin", "hagis", "hagiu", "hague", "hagui", "hagut", "haima", "hajam", "hajar", "hajas", "hajat", "hajau", "halam", "halar", "halas", "halat", "halau", "halem", "halen", "hales", "haleu", "halin", "halis", "halit", "halos", "halur", "hamer", "hampa", "hamza", "hansa", "hapax", "haplo", "hapte", "harem", "hassi", "hauen", "haura", "haure", "havem", "haver", "haveu", "havia", "hedra", "hegui", "helis", "helix", "helle", "hemio", "henna", "hepta", "hepte", "herba", "heret", "hereu", "heroi", "hertz", "hesit", "heuen", "heura", "heure", "hevea", "hexil", "hiali", "hiats", "hidra", "hidro", "hiena", "hifal", "hifes", "hilar", "hilid", "hilum", "himen", "himne", "hindi", "hindu", "hipic", "hisop", "hispa", "hissa", "hisse", "hissi", "hisso", "holmi", "homei", "homes", "honor", "honra", "honre", "honri", "honro", "hopes", "horda", "hores", "horst", "horta", "horts", "hoste", "hosts", "hotel", "huite", "huits", "hules", "hulla", "humer", "humic", "humil", "humit", "humor", "humus", "hunes", "huris", "hurra", "hutus", "iaies", "iaios", "iambe", "iarda", "ibera", "ibers", "icacs", "icona", "icors", "icosa", "ictus", "ideal", "ideam", "idear", "ideas", "ideat", "ideau", "ideem", "ideen", "idees", "ideeu", "idein", "ideis", "idola", "idols", "idoni", "iglus", "ignar", "ignia", "ignis", "ignor", "ignot", "igual", "ileal", "ileum", "ileus", "iliac", "ilium", "illes", "illes", "illot", "illus", "ilota", "imada", "imago", "imams", "imant", "imbui", "imida", "imido", "imina", "imino", "imita", "imite", "imiti", "imito", "immol", "immut", "imper", "impia", "impiu", "impos", "impur", "imput", "incis", "incit", "incoa", "incoe", "incoi", "incoo", "incou", "incub", "incus", "indag", "index", "india", "indic", "indis", "indri", "indui", "inert", "infam", "infer", "infim", "infix", "infla", "infle", "infli", "inflo", "infon", "infos", "infus", "inhal", "inhum", "inici", "inics", "inies", "innat", "innov", "inoit", "inris", "insol", "insta", "inste", "insti", "insto", "intim", "intro", "intub", "intui", "inuit", "inund", "invit", "invoc", "inxes", "iodam", "iodar", "iodas", "iodat", "iodau", "iodem", "ioden", "iodes", "iodeu", "iodic", "iodin", "iodis", "iodit", "iodur", "iogui", "ioles", "ionic", "ionis", "iotes", "iques", "irada", "irats", "ireix", "iresc", "iridi", "iriem", "irien", "iries", "irieu", "irisa", "irise", "irisi", "iriso", "irona", "irosa", "irric", "irrit", "irrog", "isard", "isidi", "islam", "isoet", "isola", "isole", "isoli", "isolo", "isqui", "istme", "items", "itera", "itere", "iteri", "itero", "itria", "itric", "itris", "iuans", "ivons", "ivori", "ixent", "ixies", "jaces", "jacos", "jaços", "jacta", "jacte", "jacti", "jacto", "jades", "jaent", "jague", "jagui", "jagut", "jaiem", "jaies", "jaieu", "jaios", "jalon", "jamai", "janot", "jaque", "jaqui", "jardi", "jaspi", "jauen", "jaupa", "jaupe", "jaupi", "jaupo", "jaura", "jaure", "jeeps", "jegui", "jeiem", "jeien", "jeies", "jeieu", "jesus", "jeuen", "jeure", "joana", "joani", "jocos", "joell", "joier", "joies", "joios", "joliu", "jonca", "jonça", "joncs", "jonec", "jonia", "jonic", "jonis", "jorda", "jorns", "jotes", "joule", "jover", "joves", "jovia", "jubil", "judes", "judic", "judos", "jueus", "jueva", "jugal", "jugam", "jugar", "jugas", "jugat", "jugau", "jugue", "jugui", "juies", "julep", "julia", "julis", "julls", "jumel", "junça", "junci", "juncs", "junta", "junts", "junya", "junye", "junyi", "junyo", "junys", "jupes", "juram", "jurar", "juras", "jurat", "jurau", "jurca", "jurco", "jurem", "juren", "jures", "jureu", "jurin", "juris", "jussa", "justa", "juste", "justi", "justo", "justs", "jutes", "jutge", "jutgi", "jutja", "jutjo", "label", "labil", "labor", "labre", "lacai", "lacam", "lacar", "lacas", "lacat", "lacau", "lacer", "lacia", "lacis", "lacra", "lacre", "lacri", "lacro", "lacta", "lacte", "lacti", "lacto", "ladan", "lagun", "laica", "laics", "lamed", "lames", "lamia", "lamin", "landa", "lando", "lanid", "lanta", "lapid", "lapsa", "lapse", "laque", "laqui", "largo", "larid", "larix", "larva", "lasca", "lasco", "laser", "lassa", "lasse", "lassi", "lasso", "lates", "latex", "lauan", "lauda", "laude", "laves", "laxam", "laxar", "laxas", "laxat", "laxau", "laxem", "laxen", "laxes", "laxeu", "laxin", "laxis", "laxos", "legal", "legat", "legio", "lemes", "lemur", "lenta", "lents", "lepra", "lepto", "lesbi", "leses", "lesio", "lesiu", "lesos", "letal", "levic", "levit", "lexic", "liana", "liasa", "libam", "libar", "libas", "libat", "libau", "libel", "libem", "liben", "liber", "libes", "libeu", "libia", "libic", "libin", "libis", "libra", "licao", "liceu", "licit", "licor", "lidar", "lider", "lidia", "lidis", "light", "ligne", "ligni", "ligur", "lilas", "liles", "lilos", "limba", "limbe", "limfa", "limit", "linia", "linxa", "linxe", "linxi", "linxo", "linxs", "lipid", "liqua", "lique", "liqui", "liquo", "lirat", "lires", "liric", "lisis", "lisos", "litic", "litis", "litre", "litua", "litxi", "livid", "llaca", "llaça", "llace", "llaci", "llaço", "llacs", "lladr", "llaga", "llago", "llama", "llami", "llamp", "llana", "llanç", "llaor", "llapa", "llapo", "llard", "llarg", "llars", "llast", "llata", "llati", "llaun", "llaur", "llaus", "llaut", "llava", "llave", "llavi", "llavo", "llecs", "lledo", "lleem", "lleeu", "llega", "llegi", "llego", "lleia", "lleig", "lleim", "lleis", "lleix", "llema", "lleme", "llenç", "lleny", "llepa", "llepe", "llepi", "llepo", "llera", "llesc", "llest", "lleto", "llets", "lleud", "lleus", "lleva", "lleve", "llevi", "llevo", "lliça", "lliço", "lliga", "lligo", "llija", "llima", "llime", "llimi", "llimo", "llims", "llins", "lliri", "llirs", "llisa", "llisc", "lliso", "llist", "llita", "llite", "lliti", "llito", "llits", "lliur", "lloam", "lloar", "lloas", "lloat", "lloau", "lloba", "llobi", "lloca", "llocs", "lloem", "lloen", "lloes", "lloeu", "llofr", "lloga", "llogo", "lloin", "llois", "lloma", "lloms", "llong", "llops", "llora", "llord", "lloro", "llors", "llosa", "llosc", "llots", "lluca", "lluça", "lluco", "llucs", "lluen", "lluer", "llues", "llufa", "llufe", "llufi", "llufo", "lluia", "lluim", "lluin", "lluir", "lluis", "lluit", "lluiu", "lluix", "llumi", "llums", "lluna", "lluny", "lluor", "llurs", "llusc", "lluus", "lobar", "lobat", "lobel", "lobul", "lobus", "local", "locio", "locul", "locus", "loess", "lofid", "logia", "logic", "lones", "longa", "loqui", "lords", "lores", "lotic", "lotus", "lucid", "lucis", "lucra", "lucre", "lucri", "lucro", "ludes", "ludic", "ludio", "luges", "lumen", "lunar", "lupes", "lupus", "lutia", "lutis", "luxam", "luxar", "luxas", "luxat", "luxau", "luxem", "luxen", "luxes", "luxeu", "luxin", "luxis", "luxos", "mabre", "macam", "maçam", "macar", "macas", "macat", "macau", "macer", "maces", "macip", "macis", "macla", "maçol", "maçon", "macos", "maços", "macul", "madur", "mafia", "mafic", "magia", "magic", "magma", "magna", "magne", "magol", "magra", "magre", "maies", "maigs", "maimo", "maina", "maire", "maixe", "major", "majos", "malai", "malar", "malax", "malbe", "malbo", "malda", "malde", "maldi", "maldo", "malei", "males", "malic", "malla", "malle", "malli", "mallo", "malls", "malms", "malsa", "malta", "malts", "maluc", "malva", "malvi", "mamam", "mamar", "mamas", "mamat", "mamau", "mamba", "mambo", "mamei", "mamem", "mamen", "mames", "mameu", "mamia", "mamin", "mamis", "mamus", "mamut", "manam", "manar", "manas", "manat", "manau", "manca", "manco", "mancs", "manec", "maneg", "manem", "manen", "maner", "manes", "maneu", "mango", "mania", "manil", "manin", "manis", "manna", "manoi", "manos", "mansa", "manta", "mante", "manti", "manto", "mants", "manxa", "manxe", "manxi", "manxo", "manxs", "manxu", "manya", "maons", "maori", "mapam", "mapar", "mapas", "mapat", "mapau", "mapem", "mapen", "mapes", "mapeu", "mapin", "mapis", "maque", "maqui", "marbr", "marca", "marci", "marco", "marcs", "marda", "marea", "marer", "mares", "marga", "marge", "margo", "maria", "marid", "marin", "marit", "marli", "maror", "marra", "marre", "marri", "marro", "marta", "marts", "marxa", "marxe", "marxi", "marxo", "masec", "maseg", "maser", "masia", "masos", "massa", "masti", "matam", "matar", "matas", "matat", "matau", "matem", "maten", "mates", "mateu", "matin", "matis", "matxo", "matxs", "mauix", "maula", "maura", "maure", "mauri", "mauro", "maxim", "meats", "medes", "media", "medic", "medis", "medit", "meixa", "melat", "melca", "meler", "meles", "melga", "melgo", "melia", "melic", "melis", "melos", "melsa", "melva", "membr", "memor", "menam", "menar", "menas", "menat", "menau", "menem", "menen", "mener", "menes", "meneu", "menga", "menge", "mengi", "mengo", "menin", "menis", "menja", "menjo", "menor", "menta", "mente", "menti", "mento", "ments", "menus", "menut", "menys", "merce", "merda", "meres", "merit", "merla", "meros", "mesam", "mesar", "mesas", "mesat", "mesau", "mescl", "mescs", "mesem", "mesen", "meses", "meseu", "mesin", "mesis", "mesos", "mesur", "metal", "metec", "metel", "metem", "meten", "metes", "meteu", "metge", "metgi", "metia", "metil", "metin", "metis", "metja", "metjo", "metol", "metra", "metre", "metro", "metxa", "meuca", "meues", "meulo", "meves", "miasi", "micet", "micos", "micra", "micro", "midam", "midar", "midas", "midat", "midau", "midem", "miden", "mides", "mideu", "midin", "midis", "mieta", "migra", "migre", "migri", "migro", "miler", "milio", "milis", "milit", "milla", "mills", "mimam", "mimar", "mimas", "mimat", "mimau", "mimem", "mimen", "mimes", "mimeu", "mimic", "mimin", "mimis", "minam", "minar", "minas", "minat", "minau", "minem", "minen", "miner", "mines", "mineu", "mingo", "minia", "minie", "minii", "minim", "minin", "minio", "minis", "minor", "minsa", "minse", "minso", "minut", "minva", "minve", "minvi", "minvo", "minyo", "mioce", "miola", "miole", "mioli", "miolo", "miols", "mioma", "miops", "miosi", "miram", "mirar", "miras", "mirat", "mirau", "mirba", "mirem", "miren", "mires", "mireu", "mirin", "miris", "mirra", "mirre", "mirri", "mirro", "miser", "missa", "misto", "mitat", "mites", "mitic", "mitil", "mitja", "mitjo", "mitra", "miula", "mixes", "mixos", "mixta", "moare", "mobil", "mobla", "moble", "mobli", "moblo", "mocam", "mocar", "mocas", "mocat", "mocau", "mocio", "mocos", "modal", "model", "modem", "moder", "modes", "modic", "modis", "modol", "modul", "mofam", "mofar", "mofas", "mofat", "mofau", "mofem", "mofen", "mofes", "mofeu", "mofin", "mofis", "mogol", "mogue", "mogui", "mogut", "moher", "moira", "moixa", "moixi", "moixo", "molal", "molam", "molar", "molas", "molat", "molau", "molem", "molen", "moler", "moles", "moleu", "molga", "molia", "molid", "molin", "molis", "molla", "mollo", "molls", "molsa", "molta", "molto", "molts", "momes", "momia", "moned", "monel", "mones", "monge", "mongi", "monja", "monjo", "monos", "monot", "monso", "monta", "monte", "monts", "monya", "monyo", "moque", "moqui", "moral", "morat", "morca", "morco", "moren", "morer", "mores", "moret", "moreu", "morfi", "morfs", "moria", "morid", "morim", "morin", "morir", "moris", "moriu", "morla", "morma", "mormo", "moros", "morra", "morro", "morsa", "morta", "morts", "mosca", "mossa", "mosso", "mosta", "mostr", "mosts", "motel", "motes", "motet", "motiu", "motiv", "motle", "motlo", "motor", "motos", "motxa", "motxo", "mouen", "moura", "moure", "movem", "moveu", "movia", "mucic", "mucor", "mucos", "mucro", "mucus", "mudam", "mudar", "mudas", "mudat", "mudau", "mudem", "muden", "mudes", "mudeu", "mudin", "mudis", "mufam", "mufar", "mufas", "mufat", "mufau", "mufem", "mufen", "mufes", "mufeu", "mufin", "mufis", "mufla", "muflo", "mufti", "mugia", "mugic", "mugim", "mugir", "mugis", "mugit", "mugiu", "mugix", "mugro", "muigs", "muira", "muixa", "mujol", "mujos", "mular", "mulat", "muler", "mules", "mulla", "mulla", "mulle", "mulli", "mullo", "multa", "multe", "multi", "multo", "munda", "munia", "munim", "munio", "munir", "munis", "munit", "muniu", "munix", "munta", "munte", "munti", "munto", "munts", "munya", "munyi", "munyo", "munys", "muons", "mural", "muram", "murar", "muras", "murat", "murau", "murem", "muren", "mures", "mureu", "murex", "murga", "murgo", "muria", "murid", "murin", "muris", "murri", "murta", "murto", "musam", "musar", "musas", "musat", "musau", "musca", "muscs", "musem", "musen", "muses", "museu", "music", "musin", "musis", "musiu", "musos", "mussa", "musti", "mutic", "mutil", "mutis", "mutua", "mutus", "nabab", "nabis", "nabiu", "nacio", "nacra", "nacre", "nacta", "nacte", "nadal", "nadam", "nadar", "nadas", "nadat", "nadau", "nadem", "naden", "nades", "nadeu", "nadin", "nadir", "nadis", "nadiu", "nafil", "nafra", "nafre", "nafri", "nafro", "nafta", "nafte", "nahua", "naies", "naifs", "naips", "naixe", "naixi", "naixo", "nanes", "nanna", "nanne", "nanni", "nanno", "nanos", "nansa", "nansu", "napar", "napea", "napel", "napes", "napia", "napis", "nards", "nariu", "narra", "narre", "narri", "narro", "nasal", "nasca", "naspr", "nassi", "natal", "nates", "natge", "natgi", "natiu", "natja", "natjo", "natro", "nauta", "naval", "naveg", "navei", "nazis", "nebot", "necia", "necis", "nedam", "nedar", "nedas", "nedat", "nedau", "nedem", "neden", "nedes", "nedeu", "nedin", "nedis", "nedol", "nefro", "negam", "negar", "negas", "negat", "negau", "negra", "negre", "negue", "negui", "negus", "neixi", "neixo", "nenes", "nenia", "neons", "nepta", "neret", "neros", "nervi", "netes", "neula", "neule", "neuli", "neulo", "neuma", "nevam", "nevar", "nevas", "nevat", "nevau", "nevem", "neven", "neves", "neveu", "nevin", "nevis", "nevos", "nevus", "nexes", "nexia", "ngais", "niada", "niala", "nials", "niant", "niara", "niare", "niats", "niava", "nicia", "nicis", "nicol", "niell", "niera", "niero", "niers", "nigua", "nigul", "nimba", "nimbe", "nimbi", "nimbo", "nimfa", "nimia", "nimis", "nines", "ningu", "ninoi", "ninos", "ninot", "ninou", "niobi", "nipis", "nirvi", "nitid", "nitra", "nitre", "nitri", "nitro", "niuet", "nival", "nivia", "nivis", "nivos", "noble", "nocam", "nocar", "nocas", "nocat", "nocau", "nocer", "noces", "nocio", "nociu", "nodal", "nodes", "nodos", "nodri", "nodul", "nodus", "noema", "noent", "noesi", "nogat", "nogue", "nogui", "nogut", "noiem", "noien", "noies", "noieu", "nolis", "nolit", "nombr", "nomem", "nomen", "nomer", "nomes", "nomeu", "nomia", "nomin", "nomis", "nomut", "nonat", "nones", "nonet", "nopal", "noque", "noqui", "norai", "nords", "nores", "noris", "norma", "noses", "notam", "notar", "notas", "notat", "notau", "notem", "noten", "notes", "noteu", "notin", "notis", "nouen", "nouer", "noura", "noure", "noval", "novel", "noves", "novia", "novii", "nuada", "nuant", "nuara", "nuare", "nuats", "nuava", "nubia", "nubil", "nucli", "nuesa", "nueta", "nuets", "nugam", "nugar", "nugas", "nugat", "nugau", "nugos", "nugue", "nugui", "nuils", "nulla", "numen", "numer", "nunci", "nuosa", "nurag", "nusos", "nuvia", "nuvis", "nuvol", "nyaca", "nyaco", "nyafa", "nyams", "nyapa", "nyaps", "nyauf", "nyecs", "nyepa", "nyics", "nyiga", "nyoca", "nyora", "oasis", "obacs", "obaga", "obcec", "obeia", "obeim", "obeir", "obeis", "obeit", "obeiu", "obeix", "obenc", "obert", "obesa", "obila", "obits", "oblat", "oblia", "oblic", "oblid", "oblit", "oboes", "obols", "obram", "obrar", "obras", "obrat", "obrau", "obrem", "obren", "obrer", "obres", "obreu", "obria", "obric", "obrim", "obrin", "obrir", "obris", "obriu", "obsce", "obses", "obsta", "obste", "obsti", "obsto", "obten", "obtin", "obtur", "obtus", "obven", "obvia", "obvie", "obvii", "obvio", "obvis", "ocapi", "occia", "occim", "occir", "occis", "occit", "occiu", "occix", "ocell", "ocels", "ocios", "ocorr", "ocrea", "ocres", "ocros", "octau", "octes", "octet", "oculs", "ocult", "ocume", "ocupa", "ocupe", "ocupi", "ocupo", "odeon", "odiam", "odiar", "odias", "odiat", "odiau", "odiem", "odien", "odies", "odieu", "odiin", "odiis", "odios", "odora", "odore", "odori", "odoro", "odrer", "odres", "oeixi", "oeixo", "oeixs", "oesca", "oests", "ofecs", "ofega", "ofego", "ofenc", "ofens", "oferi", "ofert", "ofesa", "ofici", "ofidi", "ofita", "ofren", "ofset", "ofusc", "ogiva", "ogres", "oiada", "oiant", "oiara", "oiare", "oiats", "oiava", "oible", "oides", "oidis", "oidor", "oient", "oimes", "oints", "oiois", "oiosa", "oiran", "oiras", "oirem", "oiren", "oires", "oireu", "oiria", "oisca", "oixen", "oixes", "olbia", "oldra", "oldre", "oleat", "oleic", "olent", "olesa", "oleum", "olgue", "olgui", "oliam", "oliar", "olias", "oliat", "oliau", "oliba", "oliem", "olien", "olier", "olies", "olieu", "oliin", "oliis", "olios", "olius", "oliva", "olive", "olivi", "olivo", "ollal", "ollam", "ollao", "oller", "olles", "olora", "olore", "olori", "oloro", "olors", "oloti", "oltes", "omars", "ombra", "ombre", "ombri", "ombro", "ombus", "omeda", "omega", "omeia", "oment", "omesa", "ometa", "omete", "ometi", "ometo", "omets", "omisa", "omple", "ompli", "omplo", "onada", "oncle", "ondam", "ondar", "ondas", "ondat", "ondau", "ondem", "onden", "ondes", "ondeu", "ondia", "ondin", "ondis", "ondos", "ondul", "onege", "onegi", "oneig", "oneja", "onejo", "onixs", "onses", "onsos", "onzes", "oocit", "ooide", "oolit", "opaca", "opacs", "opali", "opals", "opcio", "opera", "opere", "operi", "opero", "opiat", "opila", "opile", "opili", "opilo", "opima", "opims", "opina", "opine", "opini", "opino", "oposa", "opose", "oposi", "oposo", "optam", "optar", "optas", "optat", "optau", "optem", "opten", "optes", "opteu", "optic", "optim", "optin", "optis", "opugn", "oquer", "oques", "orada", "orals", "orant", "orara", "orare", "orats", "orava", "orbam", "orbar", "orbas", "orbat", "orbau", "orbem", "orben", "orbes", "orbeu", "orbin", "orbis", "orbit", "orden", "ordes", "ordia", "ordie", "ordii", "ordim", "ordio", "ordir", "ordis", "ordit", "ordiu", "ordix", "ordre", "orege", "oregi", "oreig", "oreja", "orejo", "orell", "orfeo", "orfes", "orfic", "organ", "orgia", "orgue", "orina", "orinc", "orine", "orini", "orino", "orins", "oriol", "orixs", "orlam", "orlar", "orlas", "orlat", "orlau", "orlem", "orlen", "orles", "orleu", "orlin", "orlis", "ornam", "ornar", "ornas", "ornat", "ornau", "ornem", "ornen", "ornes", "orneu", "ornin", "ornis", "oromo", "orons", "orria", "orris", "orsai", "orsam", "orsar", "orsas", "orsat", "orsau", "orsem", "orsen", "orses", "orseu", "orsin", "orsis", "ortic", "ortiu", "ortos", "orval", "orxeg", "oscam", "oscar", "oscas", "oscat", "oscau", "oscil", "oscos", "oscul", "osmic", "osmis", "osque", "osqui", "ossam", "ossat", "osses", "osset", "ossia", "ossis", "ossos", "ossut", "ostes", "ostra", "otica", "otics", "otoma", "ouada", "ouats", "ouera", "ovada", "ovala", "ovale", "ovali", "ovalo", "ovals", "ovari", "ovats", "ovids", "ovina", "ovins", "ovnis", "ovula", "ovule", "ovuli", "ovulo", "ovuls", "oxida", "oxide", "oxidi", "oxido", "oxids", "oxima", "oxina", "oxoni", "ozena", "ozons", "pabul", "pacta", "pacte", "pacti", "pacto", "padda", "padri", "padro", "paduc", "paeix", "paera", "paers", "paesc", "pagam", "pagar", "pagas", "pagat", "pagau", "pages", "pagin", "pagos", "pagre", "pague", "pagui", "paida", "paiem", "paien", "paies", "paieu", "paint", "paios", "paira", "paire", "pairi", "pairo", "paisa", "paisc", "paits", "paixa", "paixe", "paixi", "paixo", "palai", "palar", "palat", "palau", "palea", "paler", "pales", "palet", "palla", "palla", "palle", "palli", "palli", "pallo", "palma", "palmo", "palms", "palpa", "palpe", "palpi", "palpo", "palps", "palto", "pampa", "panda", "paner", "panes", "panet", "panic", "panis", "panna", "panot", "pansa", "pansi", "panta", "panxa", "panxo", "panys", "paona", "paons", "paors", "papal", "papam", "papar", "papas", "papat", "papau", "papem", "papen", "paper", "papes", "papeu", "papin", "papio", "papir", "papis", "papus", "paput", "param", "parar", "paras", "parat", "parau", "parca", "parcs", "parec", "pared", "parem", "paren", "parer", "pares", "paret", "pareu", "paria", "parid", "parim", "parin", "pario", "parir", "paris", "parit", "pariu", "parix", "parla", "parle", "parli", "parlo", "parot", "parra", "parsi", "parta", "parti", "parts", "parva", "pasca", "passa", "passe", "passi", "passo", "pasta", "paste", "pasti", "pasto", "pasts", "patac", "paten", "pater", "pates", "patge", "patia", "patim", "patin", "patir", "patis", "patit", "patiu", "patix", "patri", "patro", "patum", "paula", "pauli", "pauls", "paura", "pausa", "pauta", "paves", "pavia", "pavon", "peany", "pebre", "pecam", "pecar", "pecas", "pecat", "pecau", "peces", "peçol", "pedaç", "pedal", "pedat", "pedia", "pedio", "pedis", "pedon", "pedra", "pedro", "pegam", "pegar", "pegas", "pegat", "pegau", "pegos", "pegot", "pegue", "pegui", "peier", "peies", "peiot", "peiro", "peita", "peixa", "peixe", "peixi", "peixo", "pelag", "pelai", "pelam", "pelar", "pelas", "pelat", "pelau", "pelea", "pelec", "pelem", "pelen", "peles", "peleu", "pelfa", "pelfe", "pelfi", "pelfo", "pelin", "pelis", "pella", "pelle", "pelli", "pello", "pells", "pelon", "pelos", "pelut", "penal", "penam", "penar", "penas", "penat", "penau", "penca", "penco", "pendo", "penem", "penen", "penes", "penet", "peneu", "penge", "pengi", "penia", "penic", "penin", "penis", "penja", "penjo", "penna", "penol", "penos", "pensa", "pense", "pensi", "penso", "penta", "pente", "penya", "penys", "peona", "peone", "peoni", "peono", "peons", "pepes", "peque", "pequi", "perca", "perda", "perde", "perdi", "perdo", "perds", "perer", "peres", "perfa", "perfe", "peria", "perim", "perir", "peris", "perit", "periu", "perix", "perla", "perli", "perlo", "perna", "perns", "perol", "peror", "peros", "persa", "perua", "perve", "perxa", "perxe", "perxi", "perxo", "pesal", "pesam", "pesar", "pesas", "pesat", "pesau", "pesca", "pesco", "pesem", "pesen", "peses", "peseu", "pesin", "pesis", "pesol", "pesos", "pesta", "petal", "petam", "petar", "petas", "petat", "petau", "petem", "peten", "peter", "petes", "peteu", "petge", "petgi", "petin", "petis", "petit", "petja", "petjo", "petri", "peucs", "peull", "pevet", "piafa", "piafe", "piafi", "piafo", "piafs", "piano", "pians", "picam", "picar", "picas", "picat", "picau", "picea", "picid", "picol", "picon", "picor", "picot", "picta", "picte", "pidol", "pifia", "pifol", "pifre", "pigat", "pigos", "pigot", "pigra", "pigre", "pilar", "piler", "piles", "pileu", "pilis", "pilla", "pille", "pilli", "pillo", "pilon", "pilor", "pilos", "pilot", "pilus", "pinar", "pinça", "pince", "pinci", "pinço", "pincs", "pinna", "pinos", "pinsa", "pinso", "pinta", "pinte", "pinti", "pinto", "pinxa", "pinxe", "pinxi", "pinxo", "pinya", "pinyo", "pioca", "piocs", "piola", "pions", "pipam", "pipar", "pipas", "pipat", "pipau", "pipem", "pipen", "pipes", "pipeu", "pipin", "pipis", "pipiu", "pique", "piqui", "piral", "piram", "piran", "pirar", "piras", "pirat", "pirau", "pirem", "piren", "pires", "pireu", "piric", "pirin", "piris", "pirop", "pisam", "pisar", "pisas", "pisat", "pisau", "pisca", "pisco", "pisem", "pisen", "pises", "piseu", "pisin", "pisis", "pisos", "pispa", "pispe", "pispi", "pispo", "pista", "pisto", "pitam", "pites", "pitet", "piteu", "pitge", "pitgi", "pitia", "pitic", "pitis", "pitja", "pitjo", "pitof", "piuam", "piuar", "piuas", "piuat", "piuau", "piuem", "piuen", "piues", "piueu", "piuin", "piuis", "piula", "piule", "piuli", "piulo", "pivet", "pivot", "pixam", "pixar", "pixas", "pixat", "pixau", "pixel", "pixem", "pixen", "pixes", "pixeu", "pixin", "pixis", "pixum", "pizza", "placa", "plaça", "place", "placi", "placo", "plaço", "plaem", "plaer", "plaeu", "plafo", "plaga", "plagi", "plaia", "plana", "planc", "plane", "plani", "plano", "plans", "plant", "planx", "plany", "plapa", "plasm", "plata", "plati", "plato", "plats", "plaus", "pleba", "plebs", "pleca", "plecs", "plega", "plego", "plena", "plens", "plepa", "plers", "pleta", "plets", "plexe", "plica", "plint", "ploga", "ploma", "plome", "plomi", "plomo", "ploms", "plora", "plore", "plori", "ploro", "plors", "plous", "pluig", "pluja", "pluto", "poada", "poals", "poant", "poara", "poare", "poats", "poava", "pobla", "poble", "pobli", "poblo", "pobra", "pobre", "pocio", "podal", "podam", "podar", "podas", "podat", "podau", "podem", "poden", "poder", "podes", "podeu", "podex", "podia", "podin", "podis", "podra", "podre", "podri", "poema", "poeta", "pogue", "pogui", "pogut", "poise", "polar", "polca", "polia", "polie", "polim", "polip", "polir", "polis", "polit", "poliu", "polix", "polla", "polle", "polli", "pollo", "polls", "polos", "polpa", "polps", "polsa", "polse", "polsi", "polso", "polze", "pomar", "pomer", "pomes", "pompa", "pompo", "pomul", "ponem", "ponen", "poneu", "ponga", "ponia", "ponis", "ponta", "ponte", "ponti", "ponto", "ponts", "ponxo", "popam", "popar", "popas", "popat", "popau", "popem", "popen", "poper", "popes", "popeu", "popin", "popis", "poral", "porat", "porca", "porci", "porco", "porcs", "porga", "porgo", "poros", "porra", "porro", "porta", "porte", "porti", "porto", "ports", "poruc", "porus", "porxo", "posam", "posar", "posas", "posat", "posau", "posem", "posen", "poses", "poseu", "posin", "posis", "posit", "posta", "postr", "posts", "potes", "potil", "potol", "potos", "potra", "potto", "potxo", "pouam", "pouar", "pouas", "pouat", "pouau", "pouem", "pouen", "poues", "poueu", "pouin", "pouis", "prada", "prasi", "prats", "praxi", "pream", "prear", "preas", "preat", "preau", "precs", "predi", "preem", "preen", "prees", "preeu", "prega", "prego", "prein", "preis", "prema", "preme", "premi", "premo", "prems", "prenc", "prens", "preny", "presa", "preso", "prest", "preua", "preue", "preui", "preuo", "preus", "preve", "previ", "prima", "prims", "prior", "prisa", "prise", "prisi", "priso", "priva", "prive", "privi", "privo", "proba", "probe", "proer", "proes", "profa", "prois", "prole", "prona", "prons", "propa", "prope", "propi", "prosa", "proti", "proto", "prova", "prove", "provi", "provo", "pruen", "prues", "pruia", "pruim", "pruin", "pruir", "pruis", "pruit", "pruiu", "pruna", "pruus", "psalm", "psoes", "psora", "ptosi", "puada", "puats", "puber", "pubia", "pubic", "pubil", "pubis", "pucer", "puces", "puços", "pudel", "puden", "pudes", "pudia", "pudic", "pudim", "pudin", "pudir", "pudis", "pudit", "pudiu", "pudol", "pudor", "pudos", "pudus", "puell", "pugem", "pugen", "puges", "pugeu", "pugil", "pugin", "pugis", "pugna", "pugne", "pugni", "pugno", "pugui", "puigs", "pujam", "pujar", "pujas", "pujat", "pujau", "pujol", "pujos", "pulla", "pulmo", "pumes", "punes", "punia", "punic", "punim", "punir", "punis", "punit", "puniu", "punix", "punta", "punte", "punti", "punto", "punts", "punxa", "punxe", "punxi", "punxo", "punya", "punye", "punyi", "punyo", "punys", "puons", "pupes", "pupil", "puput", "pures", "purga", "purgo", "purna", "putes", "putid", "puzle", "quadr", "quall", "quals", "quant", "quars", "quart", "quasi", "queca", "quecs", "queda", "quede", "quedi", "quedo", "queia", "queim", "queis", "queix", "quema", "quera", "quere", "queri", "quern", "quero", "quest", "queta", "quica", "quico", "quics", "quids", "quiet", "quill", "quilo", "quils", "quims", "quina", "quins", "quint", "quipa", "quist", "quita", "quite", "quiti", "quito", "quota", "rabec", "rabia", "rabic", "races", "racio", "radar", "rades", "radia", "radic", "radie", "radii", "radio", "radis", "radom", "raent", "rafal", "rafec", "rafes", "rafet", "rafia", "rafio", "rafis", "ragem", "ragen", "rager", "rages", "rageu", "ragin", "ragis", "rague", "ragui", "raids", "raiem", "raien", "raier", "raies", "raieu", "raigs", "rails", "raima", "raime", "raimi", "raimo", "raims", "rajam", "rajar", "rajas", "rajat", "rajau", "rajol", "rajos", "ralet", "ralla", "ralle", "ralli", "ralli", "rallo", "ralls", "ramal", "ramam", "ramar", "ramas", "ramat", "ramau", "ramem", "ramen", "rames", "rameu", "ramin", "ramis", "ramos", "rampa", "rampi", "ramut", "ranca", "ranci", "rancs", "randa", "rangs", "ranid", "ranis", "ranxo", "raola", "raona", "raone", "raoni", "raono", "raons", "raors", "rapaç", "rapam", "rapar", "rapas", "rapat", "rapau", "rapel", "rapem", "rapen", "rapes", "rapeu", "rapia", "rapid", "rapim", "rapin", "rapir", "rapis", "rapit", "rapiu", "rapix", "rapta", "rapte", "rapti", "rapto", "rares", "rasam", "rasar", "rasas", "rasat", "rasau", "rasca", "rascl", "rasco", "rasem", "rasen", "raser", "rases", "raseu", "rasin", "rasis", "rasos", "raspa", "raspe", "raspi", "raspo", "rassa", "rasts", "rasur", "ratam", "ratar", "ratas", "ratat", "ratau", "ratel", "ratem", "raten", "rater", "rates", "rateu", "ratin", "ratio", "ratis", "ratll", "ratxa", "ratxe", "ratxi", "ratxo", "rauca", "rauco", "raucs", "rauen", "raura", "raure", "rauta", "raute", "rauti", "rauto", "rauxa", "raval", "raves", "realç", "reals", "rearm", "reats", "rebat", "rebec", "rebel", "rebem", "reben", "rebes", "rebeu", "rebia", "rebin", "rebis", "rebla", "reble", "rebli", "reblo", "rebol", "rebot", "rebra", "rebre", "rebuf", "rebut", "recal", "recam", "recar", "recas", "recat", "recau", "recav", "recel", "recer", "reces", "recit", "recoc", "recou", "recta", "recte", "recto", "recul", "recus", "redeu", "redic", "redir", "redis", "redit", "rediu", "redol", "redos", "redox", "redui", "refaç", "refan", "refas", "refem", "refer", "refes", "refet", "refeu", "refia", "refie", "refii", "refil", "refin", "refio", "refiu", "refon", "refos", "refus", "refut", "regal", "regam", "regan", "regar", "regas", "regat", "regau", "regel", "regia", "regim", "regio", "regir", "regis", "regit", "regiu", "regix", "regla", "regle", "regli", "reglo", "regna", "regne", "regni", "regno", "regor", "regue", "regui", "regul", "reial", "reiem", "reien", "reies", "reieu", "reigs", "reina", "reisc", "reixa", "reixi", "reixo", "reixs", "rejos", "relat", "relax", "releg", "reles", "rella", "rello", "rellu", "remam", "remar", "remas", "remat", "remau", "remei", "remem", "remen", "remer", "remes", "remet", "remeu", "remig", "remin", "remir", "remis", "remoc", "remol", "remor", "remot", "remou", "remuc", "remud", "remug", "renal", "renda", "rendi", "renec", "reneg", "renet", "renga", "rengs", "renis", "renoc", "renoi", "renom", "renos", "renou", "renov", "renta", "rente", "renti", "rento", "rents", "renya", "renye", "renyi", "renyo", "renys", "reobr", "repap", "repar", "repas", "repel", "repes", "repeu", "repic", "repix", "repla", "reple", "repom", "repos", "repta", "repte", "repti", "repto", "repus", "reput", "reque", "requi", "resam", "resar", "resas", "resat", "resau", "resem", "resen", "reses", "reseu", "resin", "resis", "resol", "resos", "resso", "resta", "reste", "resti", "resto", "rests", "resum", "retem", "reten", "retes", "reteu", "retia", "retic", "retin", "retir", "retis", "retix", "retoc", "retol", "reton", "retop", "retor", "retos", "retra", "retre", "retro", "retur", "retut", "retxa", "retxe", "retxi", "retxo", "reull", "reuma", "reuni", "revel", "reven", "reves", "reveu", "revif", "revir", "revis", "reviu", "revoc", "revol", "riada", "rials", "ribas", "riber", "ribes", "ribot", "ricam", "ricar", "ricas", "ricat", "ricau", "ricor", "riell", "rient", "riera", "riero", "rifam", "rifar", "rifas", "rifat", "rifau", "rifem", "rifen", "rifes", "rifeu", "rifin", "rifis", "rifle", "rigid", "rigor", "rigue", "rigui", "rigut", "rimam", "rimar", "rimas", "rimat", "rimau", "rimel", "rimem", "rimen", "rimer", "rimes", "rimeu", "rimin", "rimis", "rings", "rinya", "rinys", "riota", "rique", "riqui", "riscs", "rissa", "risse", "rissi", "risso", "rista", "rists", "ritma", "ritme", "ritmi", "ritmo", "ritus", "riuen", "riura", "riure", "rival", "rivet", "roals", "robam", "robar", "robas", "robat", "robau", "robem", "roben", "rober", "robes", "robeu", "robin", "robis", "robor", "robot", "rocam", "rocol", "rocos", "rodal", "rodam", "rodar", "rodas", "rodat", "rodau", "rodem", "roden", "roder", "rodes", "rodet", "rodeu", "rodia", "rodin", "rodis", "rodol", "roent", "roger", "roges", "roget", "rogic", "rogle", "roigs", "roina", "roine", "roini", "roino", "roins", "rojal", "rojor", "rojos", "roleu", "rolla", "rolle", "rolli", "rollo", "rolls", "roman", "romas", "rombe", "romer", "romes", "romeu", "rompa", "rompe", "rompi", "rompo", "romps", "ronca", "ronco", "roncs", "ronda", "ronde", "rondi", "rondo", "ronec", "ronso", "ronsa", "ronxa", "ronxe", "ronxi", "ronxo", "ronya", "ronye", "ronyi", "ronyo", "rosam", "rosar", "rosas", "rosat", "rosau", "rosca", "rosco", "rosec", "roseg", "rosem", "rosen", "roser", "roses", "roseu", "rosin", "rosis", "rosos", "rossa", "rossi", "rosta", "roste", "rosti", "rosto", "rosts", "rotam", "rotar", "rotas", "rotat", "rotau", "rotem", "roten", "roter", "rotes", "roteu", "rotic", "rotin", "rotis", "rotll", "rotlo", "rotor", "roure", "rouro", "roves", "ruacs", "ruana", "ruans", "ruble", "rubor", "rudes", "rueca", "ruecs", "ruera", "rufes", "rufia", "rufla", "rufle", "rufli", "ruflo", "rufol", "rugbi", "rugia", "rugim", "rugir", "rugis", "rugit", "rugiu", "rugix", "rugos", "ruina", "ruixa", "ruixe", "ruixi", "ruixo", "rulla", "rulle", "rulli", "rullo", "rulls", "rulot", "rumba", "rumbs", "rumen", "rumia", "rumie", "rumii", "rumin", "rumio", "rumor", "runam", "runar", "runes", "runic", "rupia", "rupit", "rural", "rusca", "ruscs", "russa", "ruste", "rutes", "rutil", "rutll", "ruvet", "sabat", "sabea", "sabem", "saben", "saber", "sabes", "sabeu", "sabia", "sabir", "sable", "saboc", "sabor", "sabra", "sabre", "sabut", "sacam", "sacar", "sacas", "sacat", "sacau", "sacia", "sacie", "sacii", "sacio", "sacos", "sacra", "sacre", "sacsa", "sacse", "sacsi", "sacso", "sacul", "sadic", "safes", "safic", "safir", "safra", "sagaç", "sagal", "sagin", "sagna", "sagne", "sagni", "sagno", "sagus", "saial", "saies", "saiga", "saigs", "saima", "saime", "saimi", "saimo", "saims", "saiol", "sajol", "sajos", "salaç", "salam", "salao", "salar", "salas", "salat", "salau", "salda", "salde", "saldi", "saldo", "salem", "salen", "salep", "saler", "sales", "saleu", "salia", "salic", "salin", "salis", "saliv", "salla", "salle", "salli", "sallo", "salmo", "salms", "salol", "salpa", "salpe", "salpi", "salpo", "salsa", "salsi", "salta", "salte", "salti", "salto", "salts", "salud", "salut", "salva", "salve", "salvi", "salvo", "salvs", "salze", "samba", "samec", "samer", "sames", "samis", "samoa", "sanam", "sanar", "sanas", "sanat", "sanau", "sanem", "sanen", "sanes", "saneu", "sango", "sangs", "sanin", "sanis", "sansa", "santa", "santo", "sants", "saons", "sapan", "sapes", "sapia", "sapid", "sapla", "saput", "saque", "saqui", "sarau", "sarda", "sards", "sares", "sarga", "sarge", "sargi", "sargs", "saria", "sarja", "sarna", "saros", "sarpa", "sarri", "sarro", "sarsa", "satir", "satiu", "satur", "saucs", "saule", "saulo", "sauna", "saupa", "saura", "saure", "sauri", "saurs", "savia", "savis", "secor", "secta", "sedal", "sedam", "sedan", "sedar", "sedas", "sedat", "sedau", "sedec", "sedeg", "sedem", "seden", "seder", "sedes", "sedeu", "sedin", "sedis", "sedos", "sedui", "seent", "segal", "segam", "segar", "segas", "segat", "segau", "segla", "segle", "segol", "segon", "segue", "segui", "segur", "segut", "seiem", "seien", "seies", "seieu", "seito", "seixa", "sella", "sello", "selva", "semal", "semam", "semar", "semas", "semat", "semau", "sembl", "sembr", "semem", "semen", "semes", "semeu", "semin", "semis", "semos", "senal", "senar", "senat", "senda", "senes", "senet", "senia", "senil", "senis", "sense", "sensu", "senta", "senti", "sento", "sents", "senya", "senye", "senyi", "senyo", "senys", "sepal", "separ", "sepia", "septe", "sequi", "serac", "seran", "seras", "serbi", "serem", "sereu", "serfs", "seria", "seric", "serie", "serii", "serio", "sermo", "seros", "serps", "serra", "serre", "serri", "serro", "serum", "serva", "serve", "servi", "servo", "sesam", "sesta", "seste", "sesti", "sesto", "setes", "setet", "setge", "setia", "setie", "setii", "setin", "setio", "setis", "setra", "setze", "seuen", "seues", "seuos", "seura", "seure", "sever", "seves", "sevir", "sexam", "sexar", "sexas", "sexat", "sexau", "sexem", "sexen", "sexes", "sexeu", "sexin", "sexis", "sexta", "sials", "siboc", "siclo", "sicul", "sides", "sidos", "sidra", "siena", "sigil", "sigla", "sigma", "signa", "signe", "signi", "signo", "sigui", "sigut", "silex", "silfs", "silil", "silur", "silva", "simes", "simil", "simis", "simul", "simun", "sines", "singl", "sinia", "sinoc", "sinus", "sioux", "sipai", "sipam", "sipar", "sipas", "sipat", "sipau", "sipem", "sipen", "sipes", "sipeu", "sipia", "sipin", "sipio", "sipis", "sipos", "sirga", "sirgo", "siria", "siris", "sirte", "sisal", "sisca", "siset", "sisme", "sisos", "sitar", "sitia", "sitid", "sitis", "sitja", "sitra", "situa", "situe", "situi", "situo", "situu", "siula", "siule", "siuli", "siulo", "siuro", "sivan", "sobec", "sobra", "sobre", "sobri", "sobro", "sobta", "sobte", "sobti", "sobto", "socam", "socia", "socis", "socol", "sodar", "sodat", "sodes", "sodic", "sodis", "sofas", "sofra", "sofre", "sofri", "sogam", "sogar", "sogas", "sogat", "sogau", "soges", "sogra", "sogre", "sogue", "sogui", "soies", "solaç", "solam", "solar", "solas", "solat", "solau", "solca", "solco", "solcs", "solda", "solde", "soldi", "soldo", "solem", "solen", "soler", "soles", "soleu", "solfa", "solga", "solia", "solid", "solin", "solis", "solit", "soliu", "solla", "solle", "solli", "sollo", "solls", "solod", "solos", "solsi", "solta", "solte", "solti", "solto", "solts", "solut", "somat", "somer", "somes", "somia", "somic", "somie", "somii", "somio", "somni", "somoc", "somou", "sompa", "sompo", "sonam", "sonar", "sonas", "sonat", "sonau", "sonda", "sonde", "sondi", "sondo", "sonem", "sonen", "sones", "sonet", "soneu", "sonic", "sonin", "sonis", "sonor", "sonos", "sonsa", "sonso", "sopam", "sopar", "sopas", "sopat", "sopau", "sopem", "sopen", "soper", "sopes", "sopeu", "sopin", "sopis", "sopit", "sopor", "sorda", "sordo", "sords", "sores", "sorge", "sorgi", "sorgo", "soria", "sorna", "sorns", "sorra", "sorre", "sorri", "sorro", "sorti", "sorts", "sorus", "soses", "sosia", "soste", "sostr", "sotal", "sotes", "sotge", "sotgi", "sotil", "sotja", "sotjo", "sotol", "souet", "spins", "statu", "stilb", "suada", "suant", "suara", "suare", "suats", "suaus", "suava", "suber", "subve", "sucam", "sucar", "sucas", "sucat", "sucau", "succi", "sucos", "sucre", "sucub", "sudes", "sudet", "sueca", "suecs", "suera", "sueus", "sueva", "sufet", "sufis", "sufix", "sufle", "sufoc", "suids", "suite", "sulfa", "sulid", "sulla", "sulls", "sulsi", "sulta", "sumac", "sumam", "sumar", "sumas", "sumat", "sumau", "sumem", "sumen", "sumes", "sumeu", "sumia", "sumim", "sumin", "sumir", "sumis", "sumit", "sumiu", "sumix", "summa", "summe", "sunna", "suors", "suosa", "super", "supli", "supos", "supur", "suput", "suque", "suqui", "sural", "suram", "surar", "suras", "surat", "surau", "surem", "suren", "surer", "sures", "sureu", "surfs", "surin", "suris", "suros", "surra", "surta", "surti", "surto", "surts", "sutge", "sutja", "sutur", "sutza", "sutze", "tabac", "tabal", "tabes", "tabic", "tabid", "tabul", "tabus", "tacae", "tacam", "tacar", "tacas", "tacat", "tacau", "tacit", "tacte", "tafia", "tafoi", "tafur", "tagal", "taifa", "taiga", "talam", "talar", "talas", "talat", "talau", "talcs", "talec", "talem", "talen", "taler", "tales", "taleu", "talin", "talio", "talis", "talla", "talle", "talli", "talli", "tallo", "talls", "talma", "talos", "talpa", "talpo", "talps", "talus", "tambe", "tamil", "tamin", "tamis", "tampa", "tampo", "tanca", "tanco", "tancs", "tanda", "tanes", "tanga", "tango", "tanta", "tants", "tanya", "tanye", "tanyi", "tanyo", "tanys", "tanza", "tapam", "tapar", "tapas", "tapat", "tapau", "tapem", "tapen", "taper", "tapes", "tapet", "tapeu", "tapia", "tapie", "tapii", "tapin", "tapio", "tapir", "tapis", "tapit", "tapon", "taque", "taqui", "taram", "tarar", "taras", "tarat", "tarau", "tarda", "tarde", "tardi", "tardo", "tards", "tarem", "taren", "tares", "tareu", "tarif", "tarin", "taris", "tarja", "taros", "tarot", "tarro", "tarta", "tasca", "tasco", "tasos", "tassa", "tasso", "tasta", "taste", "tasti", "tasto", "tasts", "tatar", "tatos", "tatua", "tatue", "tatui", "tatuo", "tatus", "tatuu", "tatxa", "tatxe", "tatxi", "tatxo", "tauja", "taula", "taule", "tauli", "taulo", "tauls", "taure", "tauri", "tauro", "tauts", "tavec", "taxam", "taxar", "taxas", "taxat", "taxau", "taxem", "taxen", "taxes", "taxeu", "taxin", "taxis", "taxon", "teati", "tebeo", "tebia", "tebis", "tecal", "tecis", "tecla", "tedis", "teflo", "tegin", "teids", "teies", "teina", "teios", "teixi", "teixo", "tejus", "telam", "telar", "telas", "telat", "telau", "telem", "telen", "teler", "teles", "teleu", "telex", "telin", "telis", "tella", "tells", "temem", "temen", "temer", "temes", "temeu", "temia", "temin", "temis", "temor", "tempo", "tempr", "temps", "tempt", "temut", "tenaç", "tenar", "tenca", "tenço", "tenda", "tendi", "tendo", "tenen", "tenia", "tenim", "tenir", "tenis", "teniu", "tenor", "tensa", "tense", "tensi", "tenso", "tenue", "tenyi", "tepal", "tepui", "terbi", "terça", "terce", "terci", "terço", "teris", "terme", "terna", "terns", "terpe", "terra", "terre", "terri", "tesam", "tesar", "tesas", "tesat", "tesau", "tesem", "tesen", "teses", "teseu", "tesin", "tesis", "tesla", "tesor", "tesos", "testa", "teste", "testi", "testo", "tests", "tetan", "tetes", "tetol", "teues", "teula", "teule", "teuli", "teulo", "teurg", "teuto", "teves", "tevet", "texts", "thais", "theta", "tiama", "tiara", "tibam", "tibar", "tibas", "tibat", "tibau", "tibem", "tiben", "tibes", "tibeu", "tibia", "tibin", "tibis", "tible", "tifes", "tific", "tifus", "tiges", "tigre", "tijat", "tilla", "timal", "timba", "timbr", "timic", "timid", "timol", "timpa", "timus", "tines", "tinga", "tinoi", "tinta", "tinte", "tinti", "tinto", "tints", "tinya", "tinye", "tinyi", "tinyo", "tinys", "tiofe", "tiols", "tions", "tipes", "tipic", "tipis", "tiple", "tipus", "tiram", "tirar", "tiras", "tirat", "tirau", "tirem", "tiren", "tires", "tireu", "tiria", "tirin", "tiris", "tiros", "tirre", "tises", "tisic", "tisis", "tissu", "tites", "titet", "titil", "titis", "titit", "titll", "titol", "titot", "titub", "titul", "tixen", "tixes", "tixin", "tixis", "tixri", "tmesi", "tocam", "tocar", "tocas", "tocat", "tocau", "tocom", "tofes", "tofol", "tofut", "togat", "toies", "toiso", "toixa", "toixo", "tolem", "tolen", "toler", "toles", "toleu", "tolga", "tolia", "tolim", "tolir", "tolis", "tolit", "toliu", "tolix", "tolla", "tolls", "tolta", "tolts", "tolue", "tolus", "tomam", "tomar", "tomas", "tomat", "tomau", "tomba", "tombe", "tombi", "tombo", "tombs", "tomem", "tomen", "tomes", "tomeu", "tomin", "tomis", "tonal", "tonem", "tonen", "toner", "tones", "toneu", "tonga", "tonia", "tonic", "tonus", "tonya", "topam", "topar", "topas", "topat", "topau", "topem", "topen", "topes", "topeu", "topic", "topin", "topis", "toque", "toqui", "toral", "torax", "torba", "torbe", "torbi", "torbo", "torbs", "torca", "torça", "torce", "torci", "torco", "torço", "torda", "tords", "torer", "tores", "toret", "toria", "toric", "toris", "torna", "torne", "torni", "torno", "torns", "toros", "torra", "torre", "torri", "torro", "torrs", "torta", "torto", "torts", "torus", "torxa", "torxo", "tosca", "tosco", "toscs", "toses", "tosos", "tossa", "tosse", "tossi", "tosso", "total", "totem", "totes", "totil", "totxa", "totxo", "toves", "tovor", "tovot", "toxic", "traca", "traça", "trace", "traci", "traço", "tract", "traem", "traeu", "traga", "tragi", "trago", "traia", "traim", "trair", "trais", "trait", "traiu", "traix", "trama", "trame", "trami", "tramo", "trams", "tranc", "trapa", "trass", "trast", "trauc", "traus", "traut", "trava", "trave", "travi", "travo", "trefi", "treia", "treim", "treis", "trema", "treme", "tremi", "tremo", "tremp", "trems", "trena", "trenc", "trene", "treni", "treno", "trens", "trepa", "trepe", "trepi", "trepo", "treps", "tresa", "tresc", "trese", "tresi", "treso", "treta", "trets", "treus", "treva", "triac", "trial", "triam", "triar", "trias", "triat", "triau", "triba", "tribu", "trido", "tridu", "triem", "trien", "tries", "trieu", "triga", "trigo", "triin", "triis", "trill", "trina", "trinc", "trine", "trini", "trino", "trins", "trinx", "trios", "tripa", "tripo", "trips", "trisc", "trist", "trita", "triti", "trito", "trits", "trivi", "troba", "trobe", "trobi", "trobo", "troca", "trocs", "troia", "tromp", "trona", "tronc", "trone", "troni", "trono", "trons", "tropa", "trops", "trota", "trote", "troti", "troto", "trots", "truca", "truco", "trucs", "trufa", "trufe", "trufi", "trufo", "truja", "trull", "trumf", "trunc", "trust", "tsade", "tsars", "tsuga", "tuber", "tubes", "tubet", "tubul", "tudam", "tudar", "tudas", "tudat", "tudau", "tudem", "tuden", "tudes", "tudeu", "tudin", "tudis", "tuege", "tuegi", "tueig", "tueja", "tuejo", "tuies", "tuits", "tulis", "tumid", "tumor", "tumul", "tunel", "tunid", "tupam", "tupar", "tupas", "tupat", "tupau", "tupem", "tupen", "tupes", "tupeu", "tupin", "tupis", "turac", "turba", "turca", "turcs", "turio", "turma", "turos", "tussa", "tusse", "tussi", "tusso", "tusta", "tuste", "tusti", "tusto", "tusts", "tutel", "tutes", "tutis", "tutor", "tutsi", "tutus", "txeca", "txecs", "uadis", "ubica", "ubico", "ubics", "ucada", "ucant", "ucara", "ucare", "ucats", "ucava", "udola", "udole", "udoli", "udolo", "udols", "ufana", "ufans", "ugons", "uigur", "uissa", "uisse", "uissi", "uisso", "uixer", "uixos", "ujada", "ujant", "ujara", "ujare", "ujats", "ujava", "ulans", "ulcer", "ulema", "ullal", "ullam", "ullar", "ullas", "ullat", "ullau", "ullem", "ullen", "ulles", "ullet", "ulleu", "ullin", "ullis", "ullot", "ulnar", "ulnes", "ultim", "ultra", "ultre", "ultri", "ultro", "ulula", "ulule", "ululi", "ululo", "ulval", "umbra", "umbre", "umpls", "unari", "unces", "uncio", "uneix", "unena", "unens", "unesc", "unfla", "unfle", "unfli", "unflo", "ungia", "ungim", "ungir", "ungis", "ungit", "ungiu", "ungix", "ungla", "ungle", "ungli", "unglo", "unica", "unics", "unida", "uniem", "unien", "unies", "unieu", "unint", "unira", "unire", "unisc", "units", "unixo", "untam", "untar", "untas", "untat", "untau", "untem", "unten", "untes", "untet", "unteu", "untin", "untis", "untor", "untos", "uquem", "uquen", "uques", "uqueu", "uquin", "uquis", "urani", "urats", "urçol", "urdus", "urees", "ureic", "ureid", "urent", "ureta", "urgia", "urgim", "urgir", "urgis", "urgit", "urgiu", "urgix", "urica", "urics", "urnes", "urpam", "urpar", "urpas", "urpat", "urpau", "urpem", "urpen", "urpes", "urpeu", "urpia", "urpim", "urpin", "urpir", "urpis", "urpit", "urpiu", "urpix", "ursid", "urubu", "usada", "usant", "usara", "usare", "usats", "usava", "ustio", "usual", "usura", "usurp", "uteri", "uters", "utils", "uveal", "uvees", "uvula", "vacam", "vacar", "vacas", "vacat", "vacau", "vacci", "vacil", "vacua", "vacum", "vacun", "vacus", "vagal", "vagam", "vagar", "vagas", "vagat", "vagau", "vagen", "vages", "vagil", "vagim", "vagin", "vagis", "vagit", "vagiu", "vagos", "vague", "vagui", "vaira", "vaire", "vairo", "vairs", "vaive", "valem", "valen", "valer", "valeu", "valga", "valgs", "valia", "valid", "valis", "valls", "valor", "valsa", "valse", "valsi", "valso", "valua", "valva", "vamba", "vanam", "vanar", "vanas", "vanat", "vanau", "vanem", "vanen", "vanes", "vaneu", "vanin", "vanis", "vanos", "vanta", "vante", "vanti", "vanto", "vapor", "vaque", "vaqui", "varal", "varam", "varar", "varas", "varat", "varau", "varec", "varem", "varen", "vares", "vareu", "varia", "varie", "varii", "varin", "vario", "varis", "variu", "varva", "vasco", "vases", "vasos", "vasta", "vasts", "vater", "vatua", "vauma", "veçar", "veces", "veçot", "vedam", "vedar", "vedas", "vedat", "vedau", "vedem", "veden", "vedes", "vedet", "vedeu", "vedic", "vedin", "vedis", "veent", "vegem", "vegen", "veges", "veget", "vegeu", "vegin", "vegis", "veiem", "veien", "veies", "veieu", "veina", "veins", "veire", "velam", "velar", "velas", "velat", "velau", "velem", "velen", "veler", "veles", "veleu", "velic", "velin", "velis", "velit", "vella", "vello", "vells", "veloç", "venal", "vença", "vence", "venci", "venço", "venda", "venem", "venen", "vener", "venes", "venet", "veneu", "venga", "venge", "vengi", "venia", "venim", "venir", "venit", "veniu", "venja", "venjo", "venos", "venta", "vente", "venti", "vento", "vents", "venus", "venut", "veraç", "veral", "verat", "verba", "verbs", "verda", "verds", "verem", "veren", "veres", "vereu", "verga", "verge", "verin", "verms", "verna", "verns", "verol", "veros", "verpa", "verra", "verro", "versa", "verse", "versi", "verso", "vesam", "vesar", "vesas", "vesat", "vesau", "vescs", "vesem", "vesen", "veses", "veseu", "vesin", "vesis", "vespa", "vessa", "vesse", "vessi", "vesso", "vesta", "vesti", "vests", "vetam", "vetar", "vetas", "vetat", "vetau", "vetem", "veten", "vetes", "veteu", "vetin", "vetis", "vetla", "vetle", "vetli", "vetll", "vetlo", "vetos", "veuen", "veura", "veure", "vexam", "vexar", "vexas", "vexat", "vexau", "vexem", "vexen", "vexes", "vexeu", "vexin", "vexis", "viada", "vials", "viant", "viara", "viare", "viari", "viaro", "viatj", "viats", "viava", "vibra", "vibre", "vibri", "vibro", "vicia", "vicie", "vicii", "vicio", "vicis", "video", "vides", "vidia", "vidre", "vidua", "vidus", "vigia", "vigil", "vigim", "vigir", "vigis", "vigit", "vigiu", "vigix", "vigor", "viler", "viles", "villa", "vilte", "vimet", "vinca", "vinça", "vincl", "viner", "vinet", "vinga", "vinic", "vinil", "vinos", "vinte", "vints", "vinya", "viola", "viole", "violi", "violo", "viona", "vione", "vioni", "viono", "vions", "viots", "viram", "virar", "viras", "virat", "virau", "virem", "viren", "vires", "viret", "vireu", "viric", "viril", "virin", "virio", "viris", "virol", "viros", "virot", "virus", "visam", "visar", "visas", "visat", "visau", "visca", "viscs", "visem", "visen", "vises", "viseu", "visin", "visio", "visir", "visis", "visit", "visiu", "visor", "visos", "vista", "vists", "visur", "vital", "vitel", "vitet", "vitre", "vitri", "vitro", "vitxo", "viuda", "viudo", "viuen", "viura", "viure", "vivaç", "viver", "vives", "vivia", "vivid", "vivim", "viviu", "vivor", "vocal", "vodus", "vogam", "vogar", "vogas", "vogat", "vogau", "vogia", "vogim", "vogir", "vogis", "vogit", "vogiu", "vogix", "vogue", "vogui", "volam", "volar", "volas", "volat", "volau", "volca", "volea", "volei", "volem", "volen", "voler", "voles", "voleu", "volia", "volin", "volis", "volta", "volte", "volti", "volto", "volts", "volum", "volva", "vomer", "vomic", "vomit", "voraç", "voral", "voran", "voras", "vorem", "vorer", "vores", "voret", "voreu", "voria", "voris", "voste", "votam", "votar", "votas", "votat", "votau", "votem", "voten", "votes", "voteu", "votin", "votis", "votiu", "voxel", "vudus", "vuite", "vuits", "vulga", "vulpi", "vults", "vulva", "xabec", "xabia", "xacal", "xacam", "xacar", "xacas", "xacat", "xacau", "xacos", "xacra", "xador", "xafam", "xafar", "xafas", "xafat", "xafau", "xafec", "xafem", "xafen", "xafes", "xafeu", "xafic", "xafin", "xafis", "xagri", "xaiam", "xaiar", "xaias", "xaiat", "xaiau", "xaica", "xaiem", "xaien", "xaier", "xaies", "xaieu", "xaira", "xaire", "xalam", "xalar", "xalas", "xalat", "xalau", "xalem", "xalen", "xales", "xalet", "xaleu", "xalin", "xalis", "xalma", "xaloc", "xamam", "xaman", "xamar", "xamas", "xamat", "xamau", "xamba", "xambo", "xamem", "xamen", "xames", "xameu", "xamin", "xamis", "xamor", "xamos", "xampu", "xanca", "xante", "xanxa", "xapam", "xapar", "xapas", "xapat", "xapau", "xapem", "xapen", "xapes", "xapeu", "xapin", "xapis", "xapol", "xapos", "xapot", "xaque", "xaqui", "xares", "xaria", "xarol", "xarop", "xarot", "xarpa", "xarpe", "xarpi", "xarpo", "xarra", "xarre", "xarri", "xarro", "xaruc", "xarxa", "xarxo", "xates", "xatos", "xauta", "xaute", "xauti", "xauto", "xauxa", "xaval", "xaves", "xavos", "xebro", "xefla", "xeics", "xeixa", "xeixs", "xelva", "xemic", "xenes", "xeols", "xerec", "xeres", "xeric", "xerif", "xerpa", "xerra", "xerre", "xerri", "xerro", "xevat", "xibec", "xibiu", "xibuc", "xicol", "xicot", "xicra", "xifid", "xifla", "xifra", "xifre", "xifri", "xifro", "xiita", "xilla", "xinam", "xinar", "xinas", "xinat", "xinau", "xinem", "xinen", "xines", "xineu", "xinin", "xinis", "xinxa", "xiric", "xiroi", "xisca", "xiscl", "xitam", "xitar", "xitas", "xitat", "xitau", "xitem", "xiten", "xites", "xiteu", "xitin", "xitis", "xiula", "xiule", "xiuli", "xiulo", "xocam", "xocar", "xocas", "xocat", "xocau", "xofer", "xolla", "xolle", "xolli", "xollo", "xolls", "xones", "xopam", "xopar", "xopas", "xopat", "xopau", "xopem", "xopen", "xopes", "xopeu", "xopin", "xopis", "xoque", "xoqui", "xorca", "xorcs", "xoric", "xoriç", "xorra", "xorre", "xorri", "xorro", "xotis", "xotra", "xotro", "xotxa", "xotxo", "xubec", "xucla", "xucle", "xucli", "xuclo", "xueta", "xueto", "xufar", "xufer", "xufes", "xufla", "xuits", "xuixa", "xuixe", "xuixi", "xuixo", "xulla", "xumam", "xumar", "xumas", "xumat", "xumau", "xumem", "xumen", "xumes", "xumet", "xumeu", "xumin", "xumis", "xunga", "xunts", "xupes", "xupla", "xuple", "xupli", "xuplo", "xurla", "xurma", "xurme", "xurmi", "xurmo", "xurra", "xurro", "xusma", "xutam", "xutar", "xutas", "xutat", "xutau", "xutem", "xuten", "xutes", "xuteu", "xutin", "xutis", "zains", "zebra", "zebus", "zefir", "zeids", "zeina", "zelam", "zelar", "zelas", "zelat", "zelau", "zelem", "zelen", "zeles", "zeleu", "zelin", "zelis", "zelos", "zencs", "zenit", "zeros", "zetes", "zigot", "zinca", "zinco", "zincs", "zirco", "zombi", "zonal", "zonat", "zones", "zooms", "zuaus", "zulus"],
            Ia = "present",
            Ma = "correct",
            Oa = "absent";
        var Ra = {
            unknown: 0,
            absent: 1,
            present: 2,
            correct: 3
        };

        function $a(e, a) {
            var s = {};
            return e.forEach((function (e, t) {
                    if (a[t])
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o],
                                r = a[t][o],
                                i = s[n] || "unknown";
                            Ra[r] > Ra[i] && (s[n] = r)
                        }
                })),
                s
        }
        var Ha = new Date(2022, 0, 0, 0, 0, 0, 0);

        function Na(e, a) {
            var s = new Date(e),
                t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
            return Math.round(t / 864e5)
        }

        function Da(e) {
            var a, s = Ga(e);
            return a = s % Object.keys(wdsA).length, Object.keys(wdsA)[a]
        }

        function Ga(e) {
            return Na(Ha, e)
        }
        var Ba = "abcçdefghijklmnopqrstuvwxyz",
            Fa = [].concat(g(Ba.split("").slice(13)), g(Ba.split("").slice(0, 13)));

        function Wa(e) {
            for (var a = "", s = 0; s < e.length; s++) {
                var t = Ba.indexOf(e[s]);
                a += t >= 0 ? Fa[t] : "_"
            }
            return a
        }
        var Ya = "statistics",
            Ja = "fail",
            Ua = {
                currentStreak: 0,
                maxStreak: 0,
                guesses: n({
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0
                }, Ja, 0),
                winPercentage: 0,
                gamesPlayed: 0,
                gamesWon: 0,
                averageGuesses: 0
            };

        function Xa() {
            var e = window.localStorage.getItem(Ya) || JSON.stringify(Ua);
            return JSON.parse(e)
        }

        function Va(e) {
            var a = e.isWin,
                s = e.isStreak,
                t = e.numGuesses,
                o = Xa();
            a ? (o.guesses[t] += 1,
                    s ? o.currentStreak += 1 : o.currentStreak = 1) : (o.currentStreak = 0,
                    o.guesses.fail += 1),
                o.maxStreak = Math.max(o.currentStreak, o.maxStreak),
                o.gamesPlayed += 1,
                o.gamesWon += a ? 1 : 0,
                o.winPercentage = Math.round(o.gamesWon / o.gamesPlayed * 100),
                o.averageGuesses = Math.round(Object.entries(o.guesses).reduce((function (e, a) {
                    var s = y(a, 2),
                        t = s[0],
                        o = s[1];
                    return t !== Ja ? e += t * o : e
                }), 0) / o.gamesWon),
                function (e) {
                    window.localStorage.setItem(Ya, JSON.stringify(e))
                }(o)
        }
        var Ka = document.createElement("template");
        Ka.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 30px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n     display: flex;\n    pointer-events: none;\n  }\n .flag{padding-left: 4px;}\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n  </button>\n<button id="refresh-button" class="icon" aria-label="refresh">\n            <game-icon icon="refresh"></game-icon>\n  </button>\n       </div>\n    <div class="title">    <div>\n         WORDLE\n        </div> <img src="https://gelozp.com/games/wordle/img/ca.svg" class="flag">\n    </div>    <div class="menu">\n <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n         <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
        var Qa = document.createElement("template");
        Qa.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
        var Za = "IN_PROGRESS",
            es = "WIN",
            as = "FAIL",
            ss = ["Increïble", "Magnífic", "Impressionant", "Genial", "Força Bé", "Pels Pèls!"],
            ts = function (e) {
                r(t, e);
                var a = h(t);

                function t() {
                    var e;
                    s(this, t),
                        n(p(e = a.call(this)), "tileIndex", 0),
                        n(p(e), "rowIndex", 0),
                        n(p(e), "solution", void 0),
                        n(p(e), "boardState", void 0),
                        n(p(e), "evaluations", void 0),
                        n(p(e), "canInput", !0),
                        n(p(e), "gameStatus", Za),
                        n(p(e), "letterEvaluations", {}),
                        n(p(e), "$board", void 0),
                        n(p(e), "$keyboard", void 0),
                        n(p(e), "$game", void 0),
                        n(p(e), "today", void 0),
                        n(p(e), "lastPlayedTs", void 0),
                        n(p(e), "lastCompletedTs", void 0),
                        n(p(e), "hardMode", void 0),
                        n(p(e), "dayOffset", void 0),
                        e.attachShadow({
                            mode: "open"
                        }),
                        e.today = new Date;
                    var o = za();
                    return e.lastPlayedTs = o.lastPlayedTs,
                        !e.lastPlayedTs || Na(new Date(e.lastPlayedTs), e.today) >= 1 ? (e.boardState = new Array(6).fill(""),
                            e.evaluations = new Array(6).fill(null),
                            e.solution = Da(e.today),
                            e.dayOffset = Ga(e.today),
                            e.lastCompletedTs = o.lastCompletedTs,
                            e.hardMode = o.hardMode,
                            e.restoringFromLocalStorage = !1,
                            ja({
                                rowIndex: e.rowIndex,
                                boardState: e.boardState,
                                evaluations: e.evaluations,
                                solution: e.solution,
                                gameStatus: e.gameStatus
                            }),
                            Ca("event", "level_start", {
                                level_name: Wa(e.solution)
                            })) : (e.boardState = o.boardState,
                            e.evaluations = o.evaluations,
                            e.rowIndex = o.rowIndex,
                            e.solution = o.solution,
                            e.dayOffset = Ga(e.today),
                            e.letterEvaluations = $a(e.boardState, e.evaluations),
                            e.gameStatus = o.gameStatus,
                            e.lastCompletedTs = o.lastCompletedTs,
                            e.hardMode = o.hardMode,
                            e.gameStatus !== Za && (e.canInput = !1),
                            e.restoringFromLocalStorage = !0),
                        e
                }
                return o(t, [{
                        key: "evaluateRow",
                        value: function () {
                            if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
                                var e, a = this.$board.querySelectorAll("game-row")[this.rowIndex],
                                    s = this.boardState[this.rowIndex];
                                if (e = s,
                                    !wdsB.includes(e) && !Object.keys(wdsA).includes(e))
                                    return a.setAttribute("invalid", ""),
                                        void this.addToast("Paraula no trobada");
                                if (this.hardMode) {
                                    var t = function (e, a, s) {
                                            if (!e || !a || !s)
                                                return {
                                                    validGuess: !0
                                                };
                                            for (var t = 0; t < s.length; t++)
                                                if (s[t] === Ma && e[t] !== a[t])
                                                    return {
                                                        validGuess: !1,
                                                        errorMessage: "La lletra ".concat((o = t + 1), " ha de ser ").concat(a[t].toUpperCase())
                                                    };
                                            for (var o = {}, n = 0; n < s.length; n++)
                                                [Ma, Ia].includes(s[n]) && (o[a[n]] ? o[a[n]] += 1 : o[a[n]] = 1);
                                            var r = e.split("").reduce((function (e, a) {
                                                return e[a] ? e[a] += 1 : e[a] = 1,
                                                    e
                                            }), {});
                                            for (var i in o)
                                                if ((r[i] || 0) < o[i])
                                                    return {
                                                        validGuess: !1,
                                                        errorMessage: "La paraula ha de tenir la llatra ".concat(i.toUpperCase())
                                                    };
                                            return {
                                                validGuess: !0
                                            }
                                        }(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]),
                                        o = t.validGuess,
                                        n = t.errorMessage;
                                    if (!o)
                                        return a.setAttribute("invalid", ""),
                                            void this.addToast(n || "No és vàlid en el mode guiat")
                                }
                                var r = function (e, a) {
                                    for (var s = Array(a.length).fill(Oa), t = Array(a.length).fill(!0), o = Array(a.length).fill(!0), n = 0; n < e.length; n++)
                                        e[n] === a[n] && o[n] && (s[n] = Ma,
                                            t[n] = !1,
                                            o[n] = !1);
                                    for (var r = 0; r < e.length; r++) {
                                        var i = e[r];
                                        if (t[r])
                                            for (var l = 0; l < a.length; l++) {
                                                var d = a[l];
                                                if (o[l] && i === d) {
                                                    s[r] = Ia,
                                                        o[l] = !1;
                                                    break
                                                }
                                            }
                                    }
                                    return s
                                }(s, this.solution);
                                this.evaluations[this.rowIndex] = r,
                                    this.letterEvaluations = $a(this.boardState, this.evaluations),
                                    a.evaluation = this.evaluations[this.rowIndex],
                                    this.rowIndex += 1;
                                var i = this.rowIndex >= 6,
                                    l = r.every((function (e) {
                                        return "correct" === e
                                    }));
                                if (i || l)
                                    Va({
                                        isWin: l,
                                        isStreak: !!this.lastCompletedTs && 1 === Na(new Date(this.lastCompletedTs), new Date),
                                        numGuesses: this.rowIndex
                                    }),
                                    ja({
                                        lastCompletedTs: Date.now()
                                    }),
                                    this.gameStatus = l ? es : as,
                                    Ca("event", "level_end", {
                                        level_name: Wa(this.solution),
                                        num_guesses: this.rowIndex,
                                        success: l
                                    });
                                this.tileIndex = 0,
                                    this.canInput = !1,
                                    ja({
                                        rowIndex: this.rowIndex,
                                        boardState: this.boardState,
                                        evaluations: this.evaluations,
                                        solution: this.solution,
                                        gameStatus: this.gameStatus,
                                        lastPlayedTs: Date.now()
                                    })
                            }
                        },
                    }, {
                        key: "addLetter",
                        value: function (e) {
                            this.gameStatus === Za && (this.canInput && (this.tileIndex >= 5 || (this.boardState[this.rowIndex] += e,
                                this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]),
                                this.tileIndex += 1)))
                        }
                    }, {
                        key: "removeLetter",
                        value: function () {
                            if (this.gameStatus === Za && this.canInput && !(this.tileIndex <= 0)) {
                                this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
                                var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
                                this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"),
                                    e.removeAttribute("invalid"),
                                    this.tileIndex -= 1
                            }
                        }
                    }, {
                        key: "submitGuess",
                        value: function () {
                            if (this.gameStatus === Za && this.canInput) {
                                if (5 !== this.tileIndex)
                                    return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""),
                                        void this.addToast("Has d'utilitzar 5 lletres");
                                this.evaluateRow()
                            }
                        }
                    }, {
                        key: "addToast",
                        value: function (e, a) {
                            var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                t = document.createElement("game-toast");
                            t.setAttribute("text", e),
                                a && t.setAttribute("duration", a),
                                s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
                        }
                    }, {
                        key: "sizeBoard",
                        value: function () {
                            var e = this.shadowRoot.querySelector("#board-container"),
                                a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
                                s = 6 * Math.floor(a / 5);
                            this.$board.style.width = "".concat(a, "px"),
                                this.$board.style.height = "".concat(s, "px")
                        }
                    }, {
                        key: "showStatsModal",
                        value: function () {
                            var e = this.$game.querySelector("game-modal"),
                                a = document.createElement("game-stats");
                            this.gameStatus === es && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex),
                                a.gameApp = this,
                                e.appendChild(a),
                                e.setAttribute("open", "")
                                e
                            sol = wdsA[this.solution]
                        }
                    }, {
                        key: "showHelpModal",
                        value: function () {
                            var e = this.$game.querySelector("game-modal");
                            e.appendChild(document.createElement("game-help")),
                                e.setAttribute("open", "")
                        }
                    }, {
                        key: "connectedCallback",
                        value: function () {
                            var e = this;
                            this.shadowRoot.appendChild(Ka.content.cloneNode(!0)),
                                this.$game = this.shadowRoot.querySelector("#game"),
                                this.$board = this.shadowRoot.querySelector("#board"),
                                this.$keyboard = this.shadowRoot.querySelector("game-keyboard"),
                                this.sizeBoard(),
                                this.lastPlayedTs || setTimeout((function () {
                                    return e.showHelpModal()
                                }), 100);
                            for (var a = 0; a < 6; a++) {
                                var s = document.createElement("game-row");
                                s.setAttribute("letters", this.boardState[a]),
                                    s.setAttribute("length", 5),
                                    this.evaluations[a] && (s.evaluation = this.evaluations[a]),
                                    this.$board.appendChild(s)
                            }
                            this.$game.addEventListener("game-key-press", (function (a) {
                                    var s = a.detail.key;
                                    "←" === s || "Backspace" === s ? e.removeLetter() : "↵" === s || "Enter" === s ? e.submitGuess() : Ba.includes(s.toLowerCase()) && e.addLetter(s.toLowerCase())
                                })),
                                this.$game.addEventListener("game-last-tile-revealed-in-row", (function (a) {
                                    e.$keyboard.letterEvaluations = e.letterEvaluations,
                                        e.rowIndex < 6 && (e.canInput = !0);
                                    var s = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                                    (a.path || a.composedPath && a.composedPath()).includes(s) && ([es, as].includes(e.gameStatus) && (e.restoringFromLocalStorage ? e.showStatsModal() : (e.gameStatus === es && (s.setAttribute("win", ""),
                                                e.addToast(ss[e.rowIndex - 1], 2e3)),
                                            e.gameStatus === as && e.addToast(wdsA[e.solution].toUpperCase(), 1 / 0),
                                            setTimeout((function () {
                                                e.showStatsModal()
                                            }), 2500))),
                                        e.restoringFromLocalStorage = !1)
                                })),
                                this.shadowRoot.addEventListener("game-setting-change", (function (a) {
                                    var s = a.detail,
                                        t = s.name,
                                        o = s.checked,
                                        n = s.disabled;
                                    switch (t) {
                                        case "hard-mode":
                                            return void(n ? e.addToast("El mode guiat només pot ser activat a l'inici de la partida", 1500, !0) : (e.hardMode = o,
                                                ja({
                                                    hardMode: o
                                                })))
                                    }
                                })),
                                this.shadowRoot.getElementById("settings-button").addEventListener("click", (function (a) {
                                    var s = e.$game.querySelector("game-page"),
                                        t = document.createTextNode("Opcions");
                                    s.appendChild(t);
                                    var o = document.createElement("game-settings");
                                    o.setAttribute("slot", "content"),
                                        o.gameApp = e,
                                        s.appendChild(o),
                                        s.setAttribute("open", "")
                                })),
                                this.shadowRoot.getElementById("help-button").addEventListener("click", (function (a) {
                                    var s = e.$game.querySelector("game-page"),
                                        t = document.createTextNode("Com jugar-hi");
                                    s.appendChild(t);
                                    var o = document.createElement("game-help");
                                    o.setAttribute("page", ""),
                                        o.setAttribute("slot", "content"),
                                        s.appendChild(o),
                                        s.setAttribute("open", "")
                                })),
                                this.shadowRoot.getElementById("refresh-button").addEventListener("click", (function (a) {
                                    location.reload();
                                })),
                                this.shadowRoot.getElementById("statistics-button").addEventListener("click", (function (a) {
                                    e.showStatsModal()
                                })),
                                window.addEventListener("resize", this.sizeBoard.bind(this))
                        }
                    }, {
                        key: "disconnectedCallback",
                        value: function () {}
                    }, {
                        key: "debugTools",
                        value: function () {
                            var e = this;
                            this.shadowRoot.getElementById("debug-tools").appendChild(Qa.content.cloneNode(!0)),
                                this.shadowRoot.getElementById("toast").addEventListener("click", (function (a) {
                                    e.addToast("hello world")
                                })),
                                this.shadowRoot.getElementById("modal").addEventListener("click", (function (a) {
                                    var s = e.$game.querySelector("game-modal");
                                    s.textContent = "hello plz",
                                        s.setAttribute("open", "")
                                })),
                                this.shadowRoot.getElementById("reveal").addEventListener("click", (function () {
                                    e.evaluateRow()
                                })),
                                this.shadowRoot.getElementById("shake").addEventListener("click", (function () {
                                    e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "")
                                })),
                                this.shadowRoot.getElementById("bounce").addEventListener("click", (function () {
                                    var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                                    "" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "")
                                }))
                        }
                    }]),
                    t
            }(c(HTMLElement));
        customElements.define("game-app", ts);
        var os = document.createElement("template");
        os.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
        var ns = function (e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t),
                    (e = a.call(this)).attachShadow({
                        mode: "open"
                    }),
                    e
            }
            return o(t, [{
                    key: "connectedCallback",
                    value: function () {
                        var e = this;
                        this.shadowRoot.appendChild(os.content.cloneNode(!0)),
                            this.addEventListener("click", (function (a) {
                                e.shadowRoot.querySelector(".content").classList.add("closing")
                            })),
                            this.shadowRoot.addEventListener("animationend", (function (a) {
                                "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"),
                                    e.removeChild(e.firstChild),
                                    e.removeAttribute("open"))
                            }))
                    }
                }]),
                t
        }(c(HTMLElement));
        customElements.define("game-modal", ns);
        var rs = document.createElement("template");
        rs.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
        var is = document.createElement("template");
        is.innerHTML = "\n  <button>key</button>\n";
        var ls = document.createElement("template");
        ls.innerHTML = '\n  <div class="spacer"></div>\n';
        var ds = [
                ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
                ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ç"],
                ["↵", "z", "x", "c", "v", "b", "n", "m", "←"]
            ],
            us = function (e) {
                r(t, e);
                var a = h(t);

                function t() {
                    var e;
                    return s(this, t),
                        n(p(e = a.call(this)), "_letterEvaluations", {}),
                        e.attachShadow({
                            mode: "open"
                        }),
                        e
                }
                return o(t, [{
                        key: "letterEvaluations",
                        set: function (e) {
                            this._letterEvaluations = e,
                                this._render()
                        }
                    }, {
                        key: "dispatchKeyPressEvent",
                        value: function (e) {
                            this.dispatchEvent(new CustomEvent("game-key-press", {
                                bubbles: !0,
                                composed: !0,
                                detail: {
                                    key: e
                                }
                            }))
                        }
                    }, {
                        key: "connectedCallback",
                        value: function () {
                            var e = this;
                            this.shadowRoot.appendChild(rs.content.cloneNode(!0)),
                                this.$keyboard = this.shadowRoot.getElementById("keyboard"),
                                this.$keyboard.addEventListener("click", (function (a) {
                                    var s = a.target.closest("button");
                                    s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key)
                                })),
                                window.addEventListener("keydown", (function (a) {
                                    if (!0 !== a.repeat) {
                                        var s = a.key,
                                            t = a.metaKey,
                                            o = a.ctrlKey;
                                        t || o || (Ba.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) && e.dispatchKeyPressEvent(s)
                                    }
                                })),
                                this.$keyboard.addEventListener("transitionend", (function (a) {
                                    var s = a.target.closest("button");
                                    s && e.$keyboard.contains(s) && s.classList.remove("fade")
                                })),
                                ds.forEach((function (a) {
                                    var s = document.createElement("div");
                                    s.classList.add("row"),
                                        a.forEach((function (e) {
                                            var a;
                                            if (e >= "a" && e <= "ç" || "←" === e || "↵" === e) {
                                                if ((a = is.content.cloneNode(!0).firstElementChild).dataset.key = e,
                                                    a.textContent = e,
                                                    "←" === e) {
                                                    var t = document.createElement("game-icon");
                                                    t.setAttribute("icon", "backspace"),
                                                        a.textContent = "",
                                                        a.appendChild(t),
                                                        a.classList.add("one-and-a-half")
                                                }
                                                "↵" == e && (a.textContent = "enter",
                                                    a.classList.add("one-and-a-half"))
                                            } else
                                                (a = ls.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                                            s.appendChild(a)
                                        })),
                                        e.$keyboard.appendChild(s)
                                })),
                                this._render()
                        }
                    }, {
                        key: "_render",
                        value: function () {
                            for (var e in this._letterEvaluations) {
                                var a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
                                a.dataset.state = this._letterEvaluations[e],
                                    a.classList.add("fade")
                            }
                        }
                    }]),
                    t
            }(c(HTMLElement));
        /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
        function cs(e, a, s, t) {
            return new(s || (s = Promise))((function (o, n) {
                function r(e) {
                    try {
                        l(t.next(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function i(e) {
                    try {
                        l(t.throw(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function l(e) {
                    var a;
                    e.done ? o(e.value) : (a = e.value,
                        a instanceof s ? a : new s((function (e) {
                            e(a)
                        }))).then(r, i)
                }
                l((t = t.apply(e, a || [])).next())
            }))
        }

        function ps(e, a) {
            var s, t, o, n, r = {
                label: 0,
                sent: function () {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return n = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                },
                "function" == typeof Symbol && (n[Symbol.iterator] = function () {
                    return this
                }),
                n;

            function i(n) {
                return function (i) {
                    return function (n) {
                        if (s)
                            throw new TypeError("Generator is already executing.");
                        for (; r;)
                            try {
                                if (s = 1,
                                    t && (o = 2 & n[0] ? t.return : n[0] ? t.throw || ((o = t.return) && o.call(t),
                                        0) : t.next) && !(o = o.call(t, n[1])).done)
                                    return o;
                                switch (t = 0,
                                    o && (n = [2 & n[0], o.value]),
                                    n[0]) {
                                    case 0:
                                    case 1:
                                        o = n;
                                        break;
                                    case 4:
                                        return r.label++, {
                                            value: n[1],
                                            done: !1
                                        };
                                    case 5:
                                        r.label++,
                                            t = n[1],
                                            n = [0];
                                        continue;
                                    case 7:
                                        n = r.ops.pop(),
                                            r.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                            r = 0;
                                            continue
                                        }
                                        if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                                            r.label = n[1];
                                            break
                                        }
                                        if (6 === n[0] && r.label < o[1]) {
                                            r.label = o[1],
                                                o = n;
                                            break
                                        }
                                        if (o && r.label < o[2]) {
                                            r.label = o[2],
                                                r.ops.push(n);
                                            break
                                        }
                                        o[2] && r.ops.pop(),
                                            r.trys.pop();
                                        continue
                                }
                                n = a.call(e, r)
                            } catch (e) {
                                n = [6, e],
                                    t = 0
                            } finally {
                                s = o = 0
                            }
                        if (5 & n[0])
                            throw n[1];
                        return {
                            value: n[0] ? n[1] : void 0,
                            done: !0
                        }
                    }([n, i])
                }
            }
        }
        customElements.define("game-keyboard", us),
            function () {
                (console.warn || console.log).apply(console, arguments)
            }
            .bind("[clipboard-polyfill]");
        var ms, hs, ys, gs, bs = "undefined" == typeof navigator ? void 0 : navigator,
            fs = null == bs ? void 0 : bs.clipboard;
        null === (ms = null == fs ? void 0 : fs.read) || void 0 === ms || ms.bind(fs),
            null === (hs = null == fs ? void 0 : fs.readText) || void 0 === hs || hs.bind(fs);
        var ks = (null === (ys = null == fs ? void 0 : fs.write) || void 0 === ys || ys.bind(fs),
                null === (gs = null == fs ? void 0 : fs.writeText) || void 0 === gs ? void 0 : gs.bind(fs)),
            vs = "undefined" == typeof window ? void 0 : window,
            ws = (null == vs || vs.ClipboardItem,
                vs);
        var xs = function () {
            this.success = !1
        };

        function zs(e, a, s) {
            for (var t in e.success = !0,
                    a) {
                var o = a[t],
                    n = s.clipboardData;
                n.setData(t, o),
                    "text/plain" === t && n.getData(t) !== o && (e.success = !1)
            }
            s.preventDefault()
        }

        function js(e) {
            var a = new xs,
                s = zs.bind(this, a, e);
            document.addEventListener("copy", s);
            try {
                document.execCommand("copy")
            } finally {
                document.removeEventListener("copy", s)
            }
            return a.success
        }

        function Ss(e, a) {
            _s(e);
            var s = js(a);
            return qs(),
                s
        }

        function _s(e) {
            var a = document.getSelection();
            if (a) {
                var s = document.createRange();
                s.selectNodeContents(e),
                    a.removeAllRanges(),
                    a.addRange(s)
            }
        }

        function qs() {
            var e = document.getSelection();
            e && e.removeAllRanges()
        }

        function Es(e) {
            return cs(this, void 0, void 0, (function () {
                var a;
                return ps(this, (function (s) {
                    if (a = "text/plain" in e,
                        "undefined" == typeof ClipboardEvent && void 0 !== ws.clipboardData && void 0 !== ws.clipboardData.setData) {
                        if (!a)
                            throw new Error("No s'ha especificat cap valor de `text/plain`.");
                        if (t = e["text/plain"],
                            ws.clipboardData.setData("Text", t))
                            return [2, !0];
                        throw new Error("No s'ha pogut copiar, segurament l'usuari ho ha rebutjat.")
                    }
                    var t;
                    return js(e) || navigator.userAgent.indexOf("Edge") > -1 || Ss(document.body, e) || function (e) {
                        var a = document.createElement("div");
                        a.setAttribute("style", "-webkit-user-select: text !important"),
                            a.textContent = "temporary element",
                            document.body.appendChild(a);
                        var s = Ss(a, e);
                        return document.body.removeChild(a),
                            s
                    }(e) || function (e) {
                        var a = document.createElement("div");
                        a.setAttribute("style", "-webkit-user-select: text !important");
                        var s = a;
                        a.attachShadow && (s = a.attachShadow({
                            mode: "open"
                        }));
                        var t = document.createElement("span");
                        t.innerText = e,
                            s.appendChild(t),
                            document.body.appendChild(a),
                            _s(t);
                        var o = document.execCommand("copy");
                        return qs(),
                            document.body.removeChild(a),
                            o
                    }(e["text/plain"]) ? [2, !0] : [2, !1]
                }))
            }))
        }

        function As(e, a, s) {
            try {
                t = navigator.userAgent || navigator.vendor || window.opera,
                    !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || void 0 === navigator.share || !navigator.canShare || !navigator.canShare(e) ? function (e) {
                        return cs(this, void 0, void 0, (function () {
                            return ps(this, (function (a) {
                                if (ks)
                                    return [2, ks(e)];
                                if (!Es(function (e) {
                                        var a = {};
                                        return a["text/plain"] = e,
                                            a
                                    }(e)))
                                    throw new Error("writeText() failed");
                                return [2]
                            }))
                        }))
                    }(e.text).then(a, s) : navigator.share(e)
            } catch (e) {
                s()
            }
            var t
        }

        function AsTEST(e, a, s) {
            s()
            var t
        }

        var Cs = document.createElement("template");
        Cs.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: block;\n      width: 100%;\n    }\n\n    .countdown {\n      /*border-right: 1px solid var(--color-tone-1);*/\n      /*padding-right: 12px;*/\n      /*width: 50%;*/\n          display: inline;\n    }\n .actions{display: flex;\n justify-content: center;}\n\n    .share {\n      display: flex;\n width: 80%;\n      justify-content: center;\n      align-items: center;\n      padding-top: 12px;\n      /*width: 50%;*/\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: calc(80% - 10px);\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n button#search-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 20%;\n     margin-left: 10px;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  .ad {\n    display:'+ad_var+';\n   justify-content: center; \n align-items: center;\n  padding-top:10px;} .ad a {\n    display: contents;} .ad img{\n    width: 80%;}</style>\n\n  <div class="container">\n    <h1>Estadístiques</h1>\n    <div id="statistics"></div>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
        var Ls = document.createElement("template");
        Ls.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
        var Ts = document.createElement("template");
        Ts.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
        var Is = document.createElement("template");
        Is.innerHTML = '\n  <div class="countdown">\n    <h1>Següent WORDLE</h1>\n        <div id="timer">\n          <div class="statistic-container">\n            <div class="statistic timer">\n              <countdown-timer></countdown-timer>\n            </div>\n          </div>\n        </div>\n      </div>\n <div class="actions">\n      <div class="share">\n        <button id="share-button">\n          Compartir <game-icon icon="share"></game-icon>\n        </button>\n <button id="search-button">\n<game-icon icon="search"></game-icon>\n        </button>\n      </div>\n    </div> <div class="ad ads"> \n <a href="https://diadelpuntvolat.wordpress.com" target="_blank"> \n <img src="https://gelozp.com/games/wordle/img/ad2.png" alt=""></a> \n </div>\n  </div> </div>\n';
        var Ms = {
                currentStreak: "Ratxa Actual",
                maxStreak: "Ratxa Màxima",
                winPercentage: "Èxits (%)",
                gamesPlayed: "Jugades",
                gamesWon: "Èxits",
                averageGuesses: "Mitjana d'Intents"
            },
            Os = function (e) {
                r(t, e);
                var a = h(t);

                function t() {
                    var e;
                    return s(this, t),
                        n(p(e = a.call(this)), "stats", {}),
                        n(p(e), "gameApp", void 0),
                        e.attachShadow({
                            mode: "open"
                        }),
                        e.stats = Xa(),
                        e
                }
                return o(t, [{
                        key: "connectedCallback",
                        value: function () {
                            var e = this;
                            this.shadowRoot.appendChild(Cs.content.cloneNode(!0));
                            var a = this.shadowRoot.getElementById("statistics"),
                                s = this.shadowRoot.getElementById("guess-distribution"),
                                t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
                            if (Object.values(this.stats.guesses).every((function (e) {
                                    return 0 === e
                                }))) {
                                var o = document.createElement("div");
                                o.classList.add("no-data"),
                                    o.innerText = "Sense Dades",
                                    s.appendChild(o)
                            } else
                                for (var n = 1; n < Object.keys(this.stats.guesses).length; n++) {
                                    var r = n,
                                        i = this.stats.guesses[n],
                                        l = Ts.content.cloneNode(!0),
                                        d = Math.max(7, Math.round(i / t * 100));
                                    l.querySelector(".guess").textContent = r;
                                    var u = l.querySelector(".graph-bar");
                                    if (u.style.width = "".concat(d, "%"),
                                        "number" == typeof i) {
                                        l.querySelector(".num-guesses").textContent = i,
                                            i > 0 && u.classList.add("align-right");
                                        var c = parseInt(this.getAttribute("highlight-guess"), 10);
                                        c && n === c && u.classList.add("highlight")
                                    }
                                    s.appendChild(l)
                                }
                            if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function (s) {
                                    var t = Ms[s],
                                        o = e.stats[s],
                                        n = Ls.content.cloneNode(!0);
                                    n.querySelector(".label").textContent = t,
                                        n.querySelector(".statistic").textContent = o,
                                        a.appendChild(n)
                                })),
                                this.gameApp.gameStatus !== Za) {
                                var p = this.shadowRoot.querySelector(".footer"),
                                    m = Is.content.cloneNode(!0);
                                p.appendChild(m),
                                this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function (a) {
                                    a.preventDefault(),
                                        a.stopPropagation();
                                    As(function (e) {
                                        var a = e.evaluations,
                                            s = e.dayOffset,
                                            t = e.rowIndex,
                                            o = e.isHardMode,
                                            n = e.isWin,
                                            r = JSON.parse(window.localStorage.getItem(j)),
                                            i = JSON.parse(window.localStorage.getItem(S)),
                                            l = "#WordleCAT ".concat(s);
                                        l += " ".concat(n ? t : "X", "/").concat(6),
                                            o && (l += "*");
                                        var d = "";
                                        return a.forEach((function (e) {
                                            e && (e.forEach((function (e) {
                                                    if (e) {
                                                        var a = "";
                                                        switch (e) {
                                                            case Ma:
                                                                a = function (e) {
                                                                    return e ? "🟩" : "🟩"
                                                                }(i);
                                                                break;
                                                            case Ia:
                                                                a = function (e) {
                                                                    return e ? "🟨" : "🟨"
                                                                }(i);
                                                                break;
                                                            case Oa:
                                                                a = function (e) {
                                                                    return e ? "⬜" : "⬜"
                                                                }(r)
                                                        }
                                                        d += a
                                                    }
                                                })),
                                                d += "\n")
                                        })), {
                                            text: "".concat(l, "\n\n").concat(d.trimEnd()).concat("\n\nwordle.gelozp.com")
                                        }
                                    }({
                                        evaluations: e.gameApp.evaluations,
                                        dayOffset: e.gameApp.dayOffset,
                                        rowIndex: e.gameApp.rowIndex,
                                        isHardMode: e.gameApp.hardMode,
                                        isWin: e.gameApp.gameStatus === es
                                    }), (function () {
                                        e.gameApp.addToast("S'han copiat els resultats", 2e3, !0)
                                    }), (function () {
                                        e.gameApp.addToast("Error al compartir", 2e3, !0)
                                    }))
                                })),
                                this.shadowRoot.querySelector("button#search-button").addEventListener("click", (function (a) {
                                    a.preventDefault(),a.stopPropagation();
                                    window.open("https://dlc.iec.cat/Results?DecEntradaText="+sol+"#Definition", '_blank').focus();

                                }))
                            }
                        }
                    }]),
                    t
            }(c(HTMLElement));
        customElements.define("game-stats", Os);
        var Rs = document.createElement("template");
        Rs.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
        var $s = function (e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t),
                    (e = a.call(this)).attachShadow({
                        mode: "open"
                    }),
                    e
            }
            return o(t, [{
                    key: "connectedCallback",
                    value: function () {
                        var e = this;
                        this.shadowRoot.appendChild(Rs.content.cloneNode(!0)),
                            this.shadowRoot.querySelector(".container").addEventListener("click", (function (a) {
                                a.stopPropagation(),
                                    e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""),
                                    e.dispatchEvent(new CustomEvent("game-switch-change", {
                                        bubbles: !0,
                                        composed: !0,
                                        detail: {
                                            name: e.getAttribute("name"),
                                            checked: e.hasAttribute("checked"),
                                            disabled: e.hasAttribute("disabled")
                                        }
                                    }))
                            }))
                    }
                }], [{
                    key: "observedAttributes",
                    get: function () {
                        return ["checked"]
                    }
                }]),
                t
        }(c(HTMLElement));
        customElements.define("game-switch", $s);
        var Ps = document.createElement("template");
        Ps.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Endevina el <strong>WORDLE</strong> en 6 intents.</p>\n      <p>Has d\'introduir paraules de 5 lletres que existeixen i fer clic a ENTER.</p>\n      <p>Després de cada intent, el color de les lletres canviarà per indicar l\'evolució de la partida.</p>\n      <p>No es tenen en compte els accents a l\'hora d\'introduir paraules.</p>\n <p>Es poden repetir lletres.</p>\n      <div class="examples">\n        <div class="example">\n          <div class="row">\n            <game-tile letter="p" evaluation="correct" reveal></game-tile>\n            <game-tile letter="i"></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="o"></game-tile>\n            <game-tile letter="t"></game-tile>\n          </div>\n          <p>La lletra <strong>P</strong> es troba en el lloc correcte de la paraula.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="d"></game-tile>\n            <game-tile letter="o"></game-tile>\n            <game-tile letter="t" evaluation="present" reveal></game-tile>\n            <game-tile letter="z"></game-tile>\n            <game-tile letter="e"></game-tile>\n          </div>\n          <p>La paraula té la lletra <strong>T</strong> però en un altre lloc.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="m"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="g"></game-tile>\n            <game-tile letter="i" evaluation="absent" reveal></game-tile>\n            <game-tile letter="c"></game-tile>\n          </div>\n          <p>La paraula no conté la lletra <strong>I</strong>.</p>\n        </div>\n      </div>\n      <p><strong>Cada dia hi ha un nou WORDLE!<strong></p>\n    </div>\n  </section>\n';
        var Hs = function (e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t),
                    (e = a.call(this)).attachShadow({
                        mode: "open"
                    }),
                    e
            }
            return o(t, [{
                    key: "connectedCallback",
                    value: function () {
                        this.shadowRoot.appendChild(Ps.content.cloneNode(!0))
                    }
                }]),
                t
        }(c(HTMLElement));
        customElements.define("game-help", Hs);
        var Ns = document.createElement("template");
        Ns.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
        var Ds = function (e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t),
                    (e = a.call(this)).attachShadow({
                        mode: "open"
                    }),
                    e
            }
            return o(t, [{
                    key: "connectedCallback",
                    value: function () {
                        var e = this;
                        this.shadowRoot.appendChild(Ns.content.cloneNode(!0)),
                            this.shadowRoot.querySelector("game-icon").addEventListener("click", (function (a) {
                                e.shadowRoot.querySelector(".overlay").classList.add("closing")
                            })),
                            this.shadowRoot.addEventListener("animationend", (function (a) {
                                "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"),
                                    Array.from(e.childNodes).forEach((function (a) {
                                        e.removeChild(a)
                                    })),
                                    e.removeAttribute("open"))
                            }))
                    }
                }]),
                t
        }(c(HTMLElement));
        customElements.define("game-page", Ds);
        var Gs = document.createElement("template");
        Gs.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
        var Bs = {
                help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
                settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
                backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
                close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
                share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
                statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z",
                refresh: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z",
                search: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
                export: "M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z",
                import: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"

                
            },
            Fs = function (e) {
                r(t, e);
                var a = h(t);

                function t() {
                    var e;
                    return s(this, t),
                        (e = a.call(this)).attachShadow({
                            mode: "open"
                        }),
                        e
                }
                return o(t, [{
                        key: "connectedCallback",
                        value: function () {
                            this.shadowRoot.appendChild(Gs.content.cloneNode(!0));
                            var e = this.getAttribute("icon");
                            this.shadowRoot.querySelector("path").setAttribute("d", Bs[e]),
                                "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"),
                                "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)"),
                                "search" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)"),
                                "export" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)"),
                                "import" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
                        }
                    }]),
                    t
            }(c(HTMLElement));
        customElements.define("game-icon", Fs);
        var Ws = document.createElement("template");
        Ws.innerHTML = '\n  <div id="timer"></div>\n';
        var Ys = 6e4,
            Js = 36e5,
            Us = function (e) {
                r(t, e);
                var a = h(t);

                function t() {
                    var e;
                    s(this, t),
                        n(p(e = a.call(this)), "targetEpochMS", void 0),
                        n(p(e), "intervalId", void 0),
                        n(p(e), "$timer", void 0),
                        e.attachShadow({
                            mode: "open"
                        });
                    var o = new Date;
                    return o.setDate(o.getDate() + 1),
                        o.setHours(0, 0, 0, 0),
                        e.targetEpochMS = o.getTime(),
                        e
                }
                return o(t, [{
                        key: "padDigit",
                        value: function (e) {
                            return e.toString().padStart(2, "0")
                        }
                    }, {
                        key: "updateTimer",
                        value: function () {
                            var e, a = (new Date).getTime(),
                                s = Math.floor(this.targetEpochMS - a);
                            if (s <= 0){
                                e = "A jugar!",
                                location.reload()
                            }
                            else {
                                var t = Math.floor(s % 864e5 / Js),
                                    o = Math.floor(s % Js / Ys),
                                    n = Math.floor(s % Ys / 1e3);
                                e = "".concat(this.padDigit(t), ":").concat(this.padDigit(o), ":").concat(this.padDigit(n))
                            }
                            this.$timer.textContent = e
                        }
                    }, {
                        key: "connectedCallback",
                        value: function () {
                            var e = this;
                            this.shadowRoot.appendChild(Ws.content.cloneNode(!0)),
                                this.$timer = this.shadowRoot.querySelector("#timer"),
                                this.intervalId = setInterval((function () {
                                    e.updateTimer()
                                }), 200)
                        }
                    }, {
                        key: "disconnectedCallback",
                        value: function () {
                            clearInterval(this.intervalId)
                        }
                    }]),
                    t
            }(c(HTMLElement));
        return customElements.define("countdown-timer", Us),
            e.CountdownTimer = Us,
            e.GameApp = ts,
            e.GameHelp = Hs,
            e.GameIcon = Fs,
            e.GameKeyboard = us,
            e.GameModal = ns,
            e.GamePage = Ds,
            e.GameRow = x,
            e.GameSettings = _a,
            e.GameStats = Os,
            e.GameSwitch = $s,
            e.GameThemeManager = _,
            e.GameTile = v,
            e.GameToast = Aa,
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e
    }({});