webpackJsonp([0], {
  GPw0: function(n, l, u) {
    "use strict";
    Object.defineProperty(l, "__esModule", { value: !0 });
    var t = u("WT6e"),
      o = function() {},
      r = (function() {
        function n() {}
        return (n.prototype.ngOnInit = function() {}), n;
      })(),
      e = t.W({ encapsulation: 2, styles: [], data: {} });
    function a(n) {
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
    var i = (function() {
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
          t.Y(4, 0, null, null, 1, "tapp-two", [], null, null, null, a, e)),
          t.X(5, 114688, null, 0, r, [], null, null),
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
        i,
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
              t.X(1, 114688, null, 0, i, [], null, null)
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
      s = u("fAE3"),
      y = u("bfOx");
    u.d(l, "LazyModuleNgFactory", function() {
      return w;
    });
    var w = t.V(o, [], function(n) {
      return t._4([
        t._5(512, t.j, t.S, [[8, [f]], [3, t.j], t.u]),
        t._5(4608, p.i, p.h, [t.r, [2, p.m]]),
        t._5(512, p.b, p.b, []),
        t._5(512, s.a, s.a, []),
        t._5(512, y.l, y.l, [[2, y.q], [2, y.k]]),
        t._5(512, o, o, []),
        t._5(
          1024,
          y.i,
          function() {
            return [[{ path: "", component: i }]];
          },
          []
        )
      ]);
    });
  }
});
