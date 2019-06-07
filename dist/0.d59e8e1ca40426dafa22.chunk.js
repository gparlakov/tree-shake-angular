webpackJsonp([0], {
  GPw0: function(n, l, u) {
    "use strict";
    Object.defineProperty(l, "__esModule", { value: !0 });
    var t = u("WT6e"),
      o = function() {},
      e = (function() {
        function n() {}
        return (n.prototype.ngOnInit = function() {}), n;
      })(),
      r = t.W({ encapsulation: 2, styles: [], data: {} });
    function i(n) {
      return t._11(
        0,
        [
          (n()(), t._10(-1, null, ["\n    "])),
          (n()(),
          t.Y(1, 0, null, null, 1, "p", [], null, null, null, null, null)),
          (n()(), t._10(-1, null, ["\n      two works!\n    "])),
          (n()(), t._10(-1, null, ["\n  "]))
        ],
        null,
        null
      );
    }
    var a = (function() {
        function n() {}
        return (n.prototype.ngOnInit = function() {}), n;
      })(),
      c = t.W({ encapsulation: 2, styles: [], data: {} });
    function _(n) {
      return t._11(
        0,
        [
          (n()(), t._10(-1, null, ["\n    "])),
          (n()(),
          t.Y(1, 0, null, null, 1, "p", [], null, null, null, null, null)),
          (n()(), t._10(-1, null, ["\n      one-lazy works!\n    "])),
          (n()(), t._10(-1, null, ["\n    "])),
          (n()(),
          t.Y(4, 0, null, null, 1, "tapp-two", [], null, null, null, i, r)),
          t.X(5, 114688, null, 0, e, [], null, null),
          (n()(), t._10(-1, null, ["\n  "]))
        ],
        function(n, l) {
          n(l, 5, 0);
        },
        null
      );
    }
    var f = t.U(
        "tapp-lazy",
        a,
        function(n) {
          return t._11(
            0,
            [
              (n()(),
              t.Y(
                0,
                0,
                null,
                null,
                1,
                "tapp-lazy",
                [],
                null,
                null,
                null,
                _,
                c
              )),
              t.X(1, 114688, null, 0, a, [], null, null)
            ],
            function(n, l) {
              n(l, 1, 0);
            },
            null
          );
        },
        {},
        {},
        []
      ),
      p = u("Xjw4"),
      s = function() {
        this.name = "Service";
      },
      y = function() {
        this.name = "Another Service";
      },
      v = u("fAE3"),
      w = u("bfOx");
    u.d(l, "LazyModuleNgFactory", function() {
      return d;
    });
    var d = t.V(o, [], function(n) {
      return t._4([
        t._5(512, t.j, t.S, [[8, [f]], [3, t.j], t.u]),
        t._5(4608, p.i, p.h, [t.r, [2, p.m]]),
        t._5(4608, s, s, []),
        t._5(4608, y, y, []),
        t._5(512, p.b, p.b, []),
        t._5(512, v.a, v.a, []),
        t._5(512, w.l, w.l, [[2, w.q], [2, w.k]]),
        t._5(512, o, o, []),
        t._5(
          1024,
          w.i,
          function() {
            return [[{ path: "", component: a }]];
          },
          []
        )
      ]);
    });
  }
});
