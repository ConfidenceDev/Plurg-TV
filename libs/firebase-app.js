!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis ? globalThis : e || self).firebase =
        t());
})(this, function () {
  "use strict";
  var r = function (e, t) {
      return (r =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        })(e, t);
    },
    n = function () {
      return (n =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
    };
  function u(e) {
    var t = "function" == typeof Symbol && Symbol.iterator,
      n = t && e[t],
      r = 0;
    if (n) return n.call(e);
    if (e && "number" == typeof e.length)
      return {
        next: function () {
          return {
            value: (e = e && r >= e.length ? void 0 : e) && e[r++],
            done: !e,
          };
        },
      };
    throw new TypeError(
      t ? "Object is not iterable." : "Symbol.iterator is not defined."
    );
  }
  function f(e, t) {
    var n = "function" == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
      i,
      o = n.call(e),
      a = [];
    try {
      for (; (void 0 === t || 0 < t--) && !(r = o.next()).done; )
        a.push(r.value);
    } catch (e) {
      i = { error: e };
    } finally {
      try {
        r && !r.done && (n = o.return) && n.call(o);
      } finally {
        if (i) throw i.error;
      }
    }
    return a;
  }
  function c(e, t) {
    for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
    return e;
  }
  function h(e, t) {
    if (!(t instanceof Object)) return t;
    switch (t.constructor) {
      case Date:
        return new Date(t.getTime());
      case Object:
        void 0 === e && (e = {});
        break;
      case Array:
        e = [];
        break;
      default:
        return t;
    }
    for (var n in t)
      t.hasOwnProperty(n) && "__proto__" !== n && (e[n] = h(e[n], t[n]));
    return e;
  }
  var i =
    ((e.prototype.wrapCallback = function (n) {
      var r = this;
      return function (e, t) {
        e ? r.reject(e) : r.resolve(t),
          "function" == typeof n &&
            (r.promise.catch(function () {}), 1 === n.length ? n(e) : n(e, t));
      };
    }),
    e);
  function e() {
    var n = this;
    (this.reject = function () {}),
      (this.resolve = function () {}),
      (this.promise = new Promise(function (e, t) {
        (n.resolve = e), (n.reject = t);
      }));
  }
  var o,
    a =
      ((function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      })(s, (o = Error)),
      s);
  function s(e, t, n) {
    return (
      ((t = o.call(this, t) || this).code = e),
      (t.customData = n),
      (t.name = "FirebaseError"),
      Object.setPrototypeOf(t, s.prototype),
      Error.captureStackTrace && Error.captureStackTrace(t, d.prototype.create),
      t
    );
  }
  var d =
    ((t.prototype.create = function (e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var r,
        i = t[0] || {},
        o = this.service + "/" + e,
        e = this.errors[e],
        e = e
          ? ((r = i),
            e.replace(l, function (e, t) {
              var n = r[t];
              return null != n ? String(n) : "<" + t + "?>";
            }))
          : "Error",
        e = this.serviceName + ": " + e + " (" + o + ").";
      return new a(o, e, i);
    }),
    t);
  function t(e, t, n) {
    (this.service = e), (this.serviceName = t), (this.errors = n);
  }
  var l = /\{\$([^}]+)}/g;
  function v(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function m(e, t) {
    return (t = new p(e, t)).subscribe.bind(t);
  }
  var p =
    ((y.prototype.next = function (t) {
      this.forEachObserver(function (e) {
        e.next(t);
      });
    }),
    (y.prototype.error = function (t) {
      this.forEachObserver(function (e) {
        e.error(t);
      }),
        this.close(t);
    }),
    (y.prototype.complete = function () {
      this.forEachObserver(function (e) {
        e.complete();
      }),
        this.close();
    }),
    (y.prototype.subscribe = function (e, t, n) {
      var r,
        i = this;
      if (void 0 === e && void 0 === t && void 0 === n)
        throw new Error("Missing Observer.");
      return (
        void 0 ===
          (r = (function (e) {
            if ("object" == typeof e && null !== e)
              for (
                var t = 0, n = ["next", "error", "complete"];
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r in e && "function" == typeof e[r]) return 1;
              }
          })(e)
            ? e
            : { next: e, error: t, complete: n }).next && (r.next = g),
        void 0 === r.error && (r.error = g),
        void 0 === r.complete && (r.complete = g),
        (n = this.unsubscribeOne.bind(this, this.observers.length)),
        this.finalized &&
          this.task.then(function () {
            try {
              i.finalError ? r.error(i.finalError) : r.complete();
            } catch (e) {}
          }),
        this.observers.push(r),
        n
      );
    }),
    (y.prototype.unsubscribeOne = function (e) {
      void 0 !== this.observers &&
        void 0 !== this.observers[e] &&
        (delete this.observers[e],
        --this.observerCount,
        0 === this.observerCount &&
          void 0 !== this.onNoObservers &&
          this.onNoObservers(this));
    }),
    (y.prototype.forEachObserver = function (e) {
      if (!this.finalized)
        for (var t = 0; t < this.observers.length; t++) this.sendOne(t, e);
    }),
    (y.prototype.sendOne = function (e, t) {
      var n = this;
      this.task.then(function () {
        if (void 0 !== n.observers && void 0 !== n.observers[e])
          try {
            t(n.observers[e]);
          } catch (e) {
            "undefined" != typeof console && console.error && console.error(e);
          }
      });
    }),
    (y.prototype.close = function (e) {
      var t = this;
      this.finalized ||
        ((this.finalized = !0),
        void 0 !== e && (this.finalError = e),
        this.task.then(function () {
          (t.observers = void 0), (t.onNoObservers = void 0);
        }));
    }),
    y);
  function y(e, t) {
    var n = this;
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = t),
      this.task
        .then(function () {
          e(n);
        })
        .catch(function (e) {
          n.error(e);
        });
  }
  function g() {}
  var b =
    ((I.prototype.setInstantiationMode = function (e) {
      return (this.instantiationMode = e), this;
    }),
    (I.prototype.setMultipleInstances = function (e) {
      return (this.multipleInstances = e), this;
    }),
    (I.prototype.setServiceProps = function (e) {
      return (this.serviceProps = e), this;
    }),
    (I.prototype.setInstanceCreatedCallback = function (e) {
      return (this.onInstanceCreated = e), this;
    }),
    I);
  function I(e, t, n) {
    (this.name = e),
      (this.instanceFactory = t),
      (this.type = n),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  var w = "[DEFAULT]",
    O =
      ((E.prototype.get = function (e) {
        var t = this.normalizeInstanceIdentifier(e);
        if (
          !this.instancesDeferred.has(t) &&
          ((e = new i()),
          this.instancesDeferred.set(t, e),
          this.isInitialized(t) || this.shouldAutoInitialize())
        )
          try {
            var n = this.getOrInitializeService({ instanceIdentifier: t });
            n && e.resolve(n);
          } catch (e) {}
        return this.instancesDeferred.get(t).promise;
      }),
      (E.prototype.getImmediate = function (e) {
        var t = this.normalizeInstanceIdentifier(
            null == e ? void 0 : e.identifier
          ),
          e =
            null !== (e = null == e ? void 0 : e.optional) && void 0 !== e && e;
        if (!this.isInitialized(t) && !this.shouldAutoInitialize()) {
          if (e) return null;
          throw Error("Service " + this.name + " is not available");
        }
        try {
          return this.getOrInitializeService({ instanceIdentifier: t });
        } catch (t) {
          if (e) return null;
          throw t;
        }
      }),
      (E.prototype.getComponent = function () {
        return this.component;
      }),
      (E.prototype.setComponent = function (e) {
        var t, n;
        if (e.name !== this.name)
          throw Error(
            "Mismatching Component " +
              e.name +
              " for Provider " +
              this.name +
              "."
          );
        if (this.component)
          throw Error(
            "Component for " + this.name + " has already been provided"
          );
        if (((this.component = e), this.shouldAutoInitialize())) {
          if ("EAGER" === e.instantiationMode)
            try {
              this.getOrInitializeService({ instanceIdentifier: w });
            } catch (e) {}
          try {
            for (
              var r = u(this.instancesDeferred.entries()), i = r.next();
              !i.done;
              i = r.next()
            ) {
              var o = f(i.value, 2),
                a = o[0],
                s = o[1],
                l = this.normalizeInstanceIdentifier(a);
              try {
                var c = this.getOrInitializeService({ instanceIdentifier: l });
                s.resolve(c);
              } catch (e) {}
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              i && !i.done && (n = r.return) && n.call(r);
            } finally {
              if (t) throw t.error;
            }
          }
        }
      }),
      (E.prototype.clearInstance = function (e) {
        this.instancesDeferred.delete((e = void 0 === e ? w : e)),
          this.instancesOptions.delete(e),
          this.instances.delete(e);
      }),
      (E.prototype.delete = function () {
        return (
          (e = this),
          (l = function () {
            var t, n, r, i, o, a, s, e;
            return (
              (n = this),
              (r = function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      (t = Array.from(this.instances.values())),
                      [
                        4,
                        Promise.all(
                          c(
                            c(
                              [],
                              f(
                                t
                                  .filter(function (e) {
                                    return "INTERNAL" in e;
                                  })
                                  .map(function (e) {
                                    return e.INTERNAL.delete();
                                  })
                              )
                            ),
                            f(
                              t
                                .filter(function (e) {
                                  return "_delete" in e;
                                })
                                .map(function (e) {
                                  return e._delete();
                                })
                            )
                          )
                        ),
                      ]
                    );
                  case 1:
                    return e.sent(), [2];
                }
              }),
              (s = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              }),
              (e = { next: l(0), throw: l(1), return: l(2) }),
              "function" == typeof Symbol &&
                (e[Symbol.iterator] = function () {
                  return this;
                }),
              e
            );
            function l(t) {
              return function (e) {
                return (function (t) {
                  if (i) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((i = 1),
                        o &&
                          (a =
                            2 & t[0]
                              ? o.return
                              : t[0]
                              ? o.throw || ((a = o.return) && a.call(o), 0)
                              : o.next) &&
                          !(a = a.call(o, t[1])).done)
                      )
                        return a;
                      switch (((o = 0), (t = a ? [2 & t[0], a.value] : t)[0])) {
                        case 0:
                        case 1:
                          a = t;
                          break;
                        case 4:
                          return s.label++, { value: t[1], done: !1 };
                        case 5:
                          s.label++, (o = t[1]), (t = [0]);
                          continue;
                        case 7:
                          (t = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                            (6 === t[0] || 2 === t[0])
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === t[0] &&
                            (!a || (t[1] > a[0] && t[1] < a[3]))
                          ) {
                            s.label = t[1];
                            break;
                          }
                          if (6 === t[0] && s.label < a[1]) {
                            (s.label = a[1]), (a = t);
                            break;
                          }
                          if (a && s.label < a[2]) {
                            (s.label = a[2]), s.ops.push(t);
                            break;
                          }
                          a[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      t = r.call(n, s);
                    } catch (e) {
                      (t = [6, e]), (o = 0);
                    } finally {
                      i = a = 0;
                    }
                  if (5 & t[0]) throw t[1];
                  return { value: t[0] ? t[1] : void 0, done: !0 };
                })([t, e]);
              };
            }
          }),
          new (s = (s = a = void 0) || Promise)(function (n, t) {
            function r(e) {
              try {
                o(l.next(e));
              } catch (e) {
                t(e);
              }
            }
            function i(e) {
              try {
                o(l.throw(e));
              } catch (e) {
                t(e);
              }
            }
            function o(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value) instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })
                  ).then(r, i);
            }
            o((l = l.apply(e, a || [])).next());
          })
        );
        var e, a, s, l;
      }),
      (E.prototype.isComponentSet = function () {
        return null != this.component;
      }),
      (E.prototype.isInitialized = function (e) {
        return this.instances.has((e = void 0 === e ? w : e));
      }),
      (E.prototype.getOptions = function (e) {
        return this.instancesOptions.get((e = void 0 === e ? w : e)) || {};
      }),
      (E.prototype.initialize = function (e) {
        var t,
          n,
          r = void 0 === (r = (e = void 0 === e ? {} : e).options) ? {} : r,
          i = this.normalizeInstanceIdentifier(e.instanceIdentifier);
        if (this.isInitialized(i))
          throw Error(this.name + "(" + i + ") has already been initialized");
        if (!this.isComponentSet())
          throw Error(
            "Component " + this.name + " has not been registered yet"
          );
        var o = this.getOrInitializeService({
          instanceIdentifier: i,
          options: r,
        });
        try {
          for (
            var a = u(this.instancesDeferred.entries()), s = a.next();
            !s.done;
            s = a.next()
          ) {
            var l = f(s.value, 2),
              c = l[0],
              p = l[1];
            i === this.normalizeInstanceIdentifier(c) && p.resolve(o);
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            s && !s.done && (n = a.return) && n.call(a);
          } finally {
            if (t) throw t.error;
          }
        }
        return o;
      }),
      (E.prototype.onInit = function (e, t) {
        var n = this.normalizeInstanceIdentifier(t),
          r =
            null !== (t = this.onInitCallbacks.get(n)) && void 0 !== t
              ? t
              : new Set();
        return (
          r.add(e),
          this.onInitCallbacks.set(n, r),
          (t = this.instances.get(n)) && e(t, n),
          function () {
            r.delete(e);
          }
        );
      }),
      (E.prototype.invokeOnInitCallbacks = function (e, t) {
        var n,
          r,
          i = this.onInitCallbacks.get(t);
        if (i)
          try {
            for (var o = u(i), a = o.next(); !a.done; a = o.next()) {
              var s = a.value;
              try {
                s(e, t);
              } catch (e) {}
            }
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              a && !a.done && (r = o.return) && r.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
      }),
      (E.prototype.getOrInitializeService = function (e) {
        var t = e.instanceIdentifier,
          n = e.options,
          r = void 0 === n ? {} : n;
        if (
          !(e = this.instances.get(t)) &&
          this.component &&
          ((e = this.component.instanceFactory(this.container, {
            instanceIdentifier: (n = t) === w ? void 0 : n,
            options: r,
          })),
          this.instances.set(t, e),
          this.instancesOptions.set(t, r),
          this.invokeOnInitCallbacks(e, t),
          this.component.onInstanceCreated)
        )
          try {
            this.component.onInstanceCreated(this.container, t, e);
          } catch (e) {}
        return e || null;
      }),
      (E.prototype.normalizeInstanceIdentifier = function (e) {
        return (
          void 0 === e && (e = w),
          !this.component || this.component.multipleInstances ? e : w
        );
      }),
      (E.prototype.shouldAutoInitialize = function () {
        return (
          !!this.component && "EXPLICIT" !== this.component.instantiationMode
        );
      }),
      E);
  function E(e, t) {
    (this.name = e),
      (this.container = t),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  var _ =
    ((N.prototype.addComponent = function (e) {
      var t = this.getProvider(e.name);
      if (t.isComponentSet())
        throw new Error(
          "Component " +
            e.name +
            " has already been registered with " +
            this.name
        );
      t.setComponent(e);
    }),
    (N.prototype.addOrOverwriteComponent = function (e) {
      this.getProvider(e.name).isComponentSet() &&
        this.providers.delete(e.name),
        this.addComponent(e);
    }),
    (N.prototype.getProvider = function (e) {
      if (this.providers.has(e)) return this.providers.get(e);
      var t = new O(e, this);
      return this.providers.set(e, t), t;
    }),
    (N.prototype.getProviders = function () {
      return Array.from(this.providers.values());
    }),
    N);
  function N(e) {
    (this.name = e), (this.providers = new Map());
  }
  var C,
    S = [];
  function L(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    if (!(t < e.logLevel)) {
      var i = new Date().toISOString(),
        o = P[t];
      if (!o)
        throw new Error(
          "Attempted to log a message with an invalid logType (value: " +
            t +
            ")"
        );
      console[o].apply(console, c(["[" + i + "]  " + e.name + ":"], n));
    }
  }
  ((k = C = C || {})[(k.DEBUG = 0)] = "DEBUG"),
    (k[(k.VERBOSE = 1)] = "VERBOSE"),
    (k[(k.INFO = 2)] = "INFO"),
    (k[(k.WARN = 3)] = "WARN"),
    (k[(k.ERROR = 4)] = "ERROR"),
    (k[(k.SILENT = 5)] = "SILENT");
  var R = {
      debug: C.DEBUG,
      verbose: C.VERBOSE,
      info: C.INFO,
      warn: C.WARN,
      error: C.ERROR,
      silent: C.SILENT,
    },
    A = C.INFO,
    P =
      (((F = {})[C.DEBUG] = "log"),
      (F[C.VERBOSE] = "log"),
      (F[C.INFO] = "info"),
      (F[C.WARN] = "warn"),
      (F[C.ERROR] = "error"),
      F),
    k =
      (Object.defineProperty(D.prototype, "logLevel", {
        get: function () {
          return this._logLevel;
        },
        set: function (e) {
          if (!(e in C))
            throw new TypeError(
              'Invalid value "' + e + '" assigned to `logLevel`'
            );
          this._logLevel = e;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (D.prototype.setLogLevel = function (e) {
        this._logLevel = "string" == typeof e ? R[e] : e;
      }),
      Object.defineProperty(D.prototype, "logHandler", {
        get: function () {
          return this._logHandler;
        },
        set: function (e) {
          if ("function" != typeof e)
            throw new TypeError(
              "Value assigned to `logHandler` must be a function"
            );
          this._logHandler = e;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(D.prototype, "userLogHandler", {
        get: function () {
          return this._userLogHandler;
        },
        set: function (e) {
          this._userLogHandler = e;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (D.prototype.debug = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, c([this, C.DEBUG], e)),
          this._logHandler.apply(this, c([this, C.DEBUG], e));
      }),
      (D.prototype.log = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, c([this, C.VERBOSE], e)),
          this._logHandler.apply(this, c([this, C.VERBOSE], e));
      }),
      (D.prototype.info = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, c([this, C.INFO], e)),
          this._logHandler.apply(this, c([this, C.INFO], e));
      }),
      (D.prototype.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, c([this, C.WARN], e)),
          this._logHandler.apply(this, c([this, C.WARN], e));
      }),
      (D.prototype.error = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, c([this, C.ERROR], e)),
          this._logHandler.apply(this, c([this, C.ERROR], e));
      }),
      D);
  function D(e) {
    (this.name = e),
      (this._logLevel = A),
      (this._logHandler = L),
      (this._userLogHandler = null),
      S.push(this);
  }
  function j(t) {
    S.forEach(function (e) {
      e.setLogLevel(t);
    });
  }
  function z(a, t) {
    for (var e = 0, n = S; e < n.length; e++)
      !(function (e) {
        var o = null;
        t && t.level && (o = R[t.level]),
          (e.userLogHandler =
            null === a
              ? null
              : function (e, t) {
                  for (var n = [], r = 2; r < arguments.length; r++)
                    n[r - 2] = arguments[r];
                  var i = n
                    .map(function (e) {
                      if (null == e) return null;
                      if ("string" == typeof e) return e;
                      if ("number" == typeof e || "boolean" == typeof e)
                        return e.toString();
                      if (e instanceof Error) return e.message;
                      try {
                        return JSON.stringify(e);
                      } catch (e) {
                        return null;
                      }
                    })
                    .filter(function (e) {
                      return e;
                    })
                    .join(" ");
                  t >= (null != o ? o : e.logLevel) &&
                    a({
                      level: C[t].toLowerCase(),
                      message: i,
                      args: n,
                      type: e.name,
                    });
                });
      })(n[e]);
  }
  var F =
      (((F = {})["no-app"] =
        "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),
      (F["bad-app-name"] = "Illegal App name: '{$appName}"),
      (F["duplicate-app"] = "Firebase App named '{$appName}' already exists"),
      (F["app-deleted"] = "Firebase App named '{$appName}' already deleted"),
      (F["invalid-app-argument"] =
        "firebase.{$appName}() takes either no argument or a Firebase App instance."),
      (F["invalid-log-argument"] =
        "First argument to `onLog` must be null or a function."),
      F),
    T = new d("app", "Firebase", F),
    x = "@firebase/app",
    H = "[DEFAULT]",
    V =
      (((F = {})[x] = "fire-core"),
      (F["@firebase/analytics"] = "fire-analytics"),
      (F["@firebase/app-check"] = "fire-app-check"),
      (F["@firebase/auth"] = "fire-auth"),
      (F["@firebase/database"] = "fire-rtdb"),
      (F["@firebase/functions"] = "fire-fn"),
      (F["@firebase/installations"] = "fire-iid"),
      (F["@firebase/messaging"] = "fire-fcm"),
      (F["@firebase/performance"] = "fire-perf"),
      (F["@firebase/remote-config"] = "fire-rc"),
      (F["@firebase/storage"] = "fire-gcs"),
      (F["@firebase/firestore"] = "fire-fst"),
      (F["fire-js"] = "fire-js"),
      (F["firebase-wrapper"] = "fire-js-all"),
      F),
    B = new k("@firebase/app"),
    M =
      (Object.defineProperty(U.prototype, "automaticDataCollectionEnabled", {
        get: function () {
          return this.checkDestroyed_(), this.automaticDataCollectionEnabled_;
        },
        set: function (e) {
          this.checkDestroyed_(), (this.automaticDataCollectionEnabled_ = e);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(U.prototype, "name", {
        get: function () {
          return this.checkDestroyed_(), this.name_;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(U.prototype, "options", {
        get: function () {
          return this.checkDestroyed_(), this.options_;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (U.prototype.delete = function () {
        var t = this;
        return new Promise(function (e) {
          t.checkDestroyed_(), e();
        })
          .then(function () {
            return (
              t.firebase_.INTERNAL.removeApp(t.name_),
              Promise.all(
                t.container.getProviders().map(function (e) {
                  return e.delete();
                })
              )
            );
          })
          .then(function () {
            t.isDeleted_ = !0;
          });
      }),
      (U.prototype._getService = function (e, t) {
        void 0 === t && (t = H), this.checkDestroyed_();
        var n = this.container.getProvider(e);
        return (
          n.isInitialized() ||
            "EXPLICIT" !==
              (null === (e = n.getComponent()) || void 0 === e
                ? void 0
                : e.instantiationMode) ||
            n.initialize(),
          n.getImmediate({ identifier: t })
        );
      }),
      (U.prototype._removeServiceInstance = function (e, t) {
        void 0 === t && (t = H), this.container.getProvider(e).clearInstance(t);
      }),
      (U.prototype._addComponent = function (t) {
        try {
          this.container.addComponent(t);
        } catch (e) {
          B.debug(
            "Component " +
              t.name +
              " failed to register with FirebaseApp " +
              this.name,
            e
          );
        }
      }),
      (U.prototype._addOrOverwriteComponent = function (e) {
        this.container.addOrOverwriteComponent(e);
      }),
      (U.prototype.toJSON = function () {
        return {
          name: this.name,
          automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
          options: this.options,
        };
      }),
      (U.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_)
          throw T.create("app-deleted", { appName: this.name_ });
      }),
      U);
  function U(e, t, n) {
    var r = this;
    (this.firebase_ = n),
      (this.isDeleted_ = !1),
      (this.name_ = t.name),
      (this.automaticDataCollectionEnabled_ =
        t.automaticDataCollectionEnabled || !1),
      (this.options_ = h(void 0, e)),
      (this.container = new _(t.name)),
      this._addComponent(
        new b(
          "app",
          function () {
            return r;
          },
          "PUBLIC"
        )
      ),
      this.firebase_.INTERNAL.components.forEach(function (e) {
        return r._addComponent(e);
      });
  }
  (M.prototype.name && M.prototype.options) ||
    M.prototype.delete ||
    console.log("dc");
  var F = (function e() {
      var a,
        s,
        l,
        c,
        t =
          ((a = M),
          (s = {}),
          (l = new Map()),
          ((c = {
            __esModule: !0,
            initializeApp: function (e, t) {
              var n = (t =
                "object" != typeof (t = void 0 === t ? {} : t) || null === t
                  ? { name: t }
                  : t);
              if (
                (void 0 === n.name && (n.name = H),
                "string" != typeof (t = n.name) || !t)
              )
                throw T.create("bad-app-name", { appName: String(t) });
              if (v(s, t)) throw T.create("duplicate-app", { appName: t });
              return (n = new a(e, n, c)), (s[t] = n);
            },
            app: p,
            registerVersion: function (e, t, n) {
              var r = null !== (i = V[e]) && void 0 !== i ? i : e;
              n && (r += "-" + n);
              var i = r.match(/\s|\//),
                e = t.match(/\s|\//);
              i || e
                ? ((n = [
                    'Unable to register library "' +
                      r +
                      '" with version "' +
                      t +
                      '":',
                  ]),
                  i &&
                    n.push(
                      'library name "' +
                        r +
                        '" contains illegal characters (whitespace or "/")'
                    ),
                  i && e && n.push("and"),
                  e &&
                    n.push(
                      'version name "' +
                        t +
                        '" contains illegal characters (whitespace or "/")'
                    ),
                  B.warn(n.join(" ")))
                : o(
                    new b(
                      r + "-version",
                      function () {
                        return { library: r, version: t };
                      },
                      "VERSION"
                    )
                  );
            },
            setLogLevel: j,
            onLog: function (e, t) {
              if (null !== e && "function" != typeof e)
                throw T.create("invalid-log-argument");
              z(e, t);
            },
            apps: null,
            SDK_VERSION: "8.10.1",
            INTERNAL: {
              registerComponent: o,
              removeApp: function (e) {
                delete s[e];
              },
              components: l,
              useAsService: function (e, t) {
                return "serverAuth" !== t ? t : null;
              },
            },
          }).default = c),
          Object.defineProperty(c, "apps", {
            get: function () {
              return Object.keys(s).map(function (e) {
                return s[e];
              });
            },
          }),
          (p.App = a),
          c);
      function p(e) {
        if (!v(s, (e = e || H))) throw T.create("no-app", { appName: e });
        return s[e];
      }
      function o(n) {
        var e,
          r = n.name;
        if (l.has(r))
          return (
            B.debug(
              "There were multiple attempts to register component " + r + "."
            ),
            "PUBLIC" === n.type ? c[r] : null
          );
        l.set(r, n),
          "PUBLIC" === n.type &&
            ((e = function (e) {
              if ("function" != typeof (e = void 0 === e ? p() : e)[r])
                throw T.create("invalid-app-argument", { appName: r });
              return e[r]();
            }),
            void 0 !== n.serviceProps && h(e, n.serviceProps),
            (c[r] = e),
            (a.prototype[r] = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return this._getService
                .bind(this, r)
                .apply(this, n.multipleInstances ? e : []);
            }));
        for (var t = 0, i = Object.keys(s); t < i.length; t++) {
          var o = i[t];
          s[o]._addComponent(n);
        }
        return "PUBLIC" === n.type ? c[r] : null;
      }
      return (
        (t.INTERNAL = n(n({}, t.INTERNAL), {
          createFirebaseNamespace: e,
          extendNamespace: function (e) {
            h(t, e);
          },
          createSubscribe: m,
          ErrorFactory: d,
          deepExtend: h,
        })),
        t
      );
    })(),
    W =
      ((G.prototype.getPlatformInfoString = function () {
        return this.container
          .getProviders()
          .map(function (e) {
            return "VERSION" ===
              (null == (t = (t = e).getComponent()) ? void 0 : t.type)
              ? (e = e.getImmediate()).library + "/" + e.version
              : null;
            var t;
          })
          .filter(function (e) {
            return e;
          })
          .join(" ");
      }),
      G);
  function G(e) {
    this.container = e;
  }
  "object" == typeof self &&
    self.self === self &&
    void 0 !== self.firebase &&
    (B.warn(
      "\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "
    ),
    (k = self.firebase.SDK_VERSION) &&
      0 <= k.indexOf("LITE") &&
      B.warn(
        "\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    "
      ));
  var $ = F.initializeApp;
  F.initializeApp = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return (
      (function () {
        try {
          return (
            "[object process]" ===
            Object.prototype.toString.call(global.process)
          );
        } catch (e) {
          return;
        }
      })() &&
        B.warn(
          '\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '
        ),
      $.apply(void 0, e)
    );
  };
  k = F;
  return (
    (F = k).INTERNAL.registerComponent(
      new b(
        "platform-logger",
        function (e) {
          return new W(e);
        },
        "PRIVATE"
      )
    ),
    F.registerVersion(x, "0.6.30", void 0),
    F.registerVersion("fire-js", ""),
    k.registerVersion("firebase", "8.10.1", "app"),
    (k.SDK_VERSION = "8.10.1"),
    k
  );
});