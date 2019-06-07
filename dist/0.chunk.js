webpackJsonp([0], {
  GPw0: function(n, l, u) {
    "use strict";
    Object.defineProperty(l, "__esModule", { value: !0 });
    var t = u("LBxa"),
      o = (function() {
        return function() {};
      })(),
      _ = (function() {
        function n() {}
        return (n.prototype.ngOnInit = function() {}), n;
      })(),
      r = t._10({ encapsulation: 2, styles: [], data: {} });
    function e(n) {
      return t._25(
        0,
        [
          (n()(), t._24(-1, null, ["\n    "])),
          (n()(),
          t._12(1, 0, null, null, 1, "p", [], null, null, null, null, null)),
          (n()(), t._24(-1, null, ["\n      two works!\n    "])),
          (n()(), t._24(-1, null, ["\n  "]))
        ],
        null,
        null
      );
    }
    t._8(
      "tapp-two",
      _,
      function(n) {
        return t._25(
          0,
          [
            (n()(),
            t._12(0, 0, null, null, 1, "tapp-two", [], null, null, null, e, r)),
            t._11(1, 114688, null, 0, _, [], null, null)
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
    );
    var a = (function() {
        function n() {}
        return (n.prototype.ngOnInit = function() {}), n;
      })(),
      i = t._10({ encapsulation: 2, styles: [], data: {} });
    function c(n) {
      return t._25(
        0,
        [
          (n()(), t._24(-1, null, ["\n    "])),
          (n()(),
          t._12(1, 0, null, null, 1, "p", [], null, null, null, null, null)),
          (n()(), t._24(-1, null, ["\n      one-lazy works!\n    "])),
          (n()(), t._24(-1, null, ["\n    "])),
          (n()(),
          t._12(4, 0, null, null, 1, "tapp-two", [], null, null, null, e, r)),
          t._11(5, 114688, null, 0, _, [], null, null),
          (n()(), t._24(-1, null, ["\n  "]))
        ],
        function(n, l) {
          n(l, 5, 0);
        },
        null
      );
    }
    var p = t._8(
        "tapp-one-lazy",
        a,
        function(n) {
          return t._25(
            0,
            [
              (n()(),
              t._12(
                0,
                0,
                null,
                null,
                1,
                "tapp-one-lazy",
                [],
                null,
                null,
                null,
                c,
                i
              )),
              t._11(1, 114688, null, 0, a, [], null, null)
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
      f = u("FhS4"),
      s = u("fAE3"),
      y = u("UllE");
    u.d(l, "LazyModuleNgFactory", function() {
      return w;
    });
    var w = t._9(o, [], function(n) {
      return t._18([
        t._19(512, t.k, t._6, [[8, [p]], [3, t.k], t.E]),
        t._19(4608, f.i, f.h, [t.A, [2, f.m]]),
        t._19(512, f.b, f.b, []),
        t._19(512, s.a, s.a, []),
        t._19(512, y.l, y.l, [[2, y.q], [2, y.k]]),
        t._19(512, o, o, []),
        t._19(
          1024,
          y.i,
          function() {
            return [[{ path: "", component: a }]];
          },
          []
        )
      ]);
    });
  }
});
