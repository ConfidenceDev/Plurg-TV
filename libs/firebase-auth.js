!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(require("@firebase/app"))
    : "function" == typeof define && define.amd
    ? define(["@firebase/app"], e)
    : e(
        (t = "undefined" != typeof globalThis ? globalThis : t || self).firebase
      );
})(this, function (e) {
  "use strict";
  try {
    !function () {
      var t,
        Gl =
          (t = e) && "object" == typeof t && "default" in t
            ? t
            : { default: t };
      !function () {
        var t,
          o =
            "function" == typeof Object.defineProperties
              ? Object.defineProperty
              : function (t, e, n) {
                  t != Array.prototype &&
                    t != Object.prototype &&
                    (t[e] = n.value);
                },
          u = (function (t) {
            t = [
              "object" == typeof window && window,
              "object" == typeof self && self,
              "object" == typeof global && global,
              t,
            ];
            for (var e = 0; e < t.length; ++e) {
              var n = t[e];
              if (n && n.Math == Math) return n;
            }
            return globalThis;
          })(this);
        function c(t) {
          var e,
            n,
            i =
              "undefined" != typeof Symbol &&
              Symbol.iterator &&
              t[Symbol.iterator];
          return i
            ? i.call(t)
            : {
                next:
                  ((e = t),
                  (n = 0),
                  function () {
                    return n < e.length
                      ? { done: !1, value: e[n++] }
                      : { done: !0 };
                  }),
              };
        }
        !(function (t, e) {
          var n = u;
          t = t.split(".");
          for (var i = 0; i < t.length - 1; i++) {
            var r = t[i];
            r in n || (n[r] = {}), (n = n[r]);
          }
          (e = e((i = n[(t = t[t.length - 1])]))) != i &&
            null != e &&
            o(n, t, { configurable: !0, writable: !0, value: e });
        })("Promise", function (t) {
          function a(t) {
            (this.b = 0), (this.c = void 0), (this.a = []);
            var e = this.f();
            try {
              t(e.resolve, e.reject);
            } catch (t) {
              e.reject(t);
            }
          }
          function e() {
            this.a = null;
          }
          function s(e) {
            return e instanceof a
              ? e
              : new a(function (t) {
                  t(e);
                });
          }
          if (t) return t;
          e.prototype.b = function (t) {
            var e;
            null == this.a &&
              ((this.a = []),
              (e = this).c(function () {
                e.g();
              })),
              this.a.push(t);
          };
          var n = u.setTimeout;
          (e.prototype.c = function (t) {
            n(t, 0);
          }),
            (e.prototype.g = function () {
              for (; this.a && this.a.length; ) {
                var t = this.a;
                this.a = [];
                for (var e = 0; e < t.length; ++e) {
                  var n = t[e];
                  t[e] = null;
                  try {
                    n();
                  } catch (t) {
                    this.f(t);
                  }
                }
              }
              this.a = null;
            }),
            (e.prototype.f = function (t) {
              this.c(function () {
                throw t;
              });
            }),
            (a.prototype.f = function () {
              function t(e) {
                return function (t) {
                  i || ((i = !0), e.call(n, t));
                };
              }
              var n = this,
                i = !1;
              return { resolve: t(this.m), reject: t(this.g) };
            }),
            (a.prototype.m = function (t) {
              if (t === this)
                this.g(new TypeError("A Promise cannot resolve to itself"));
              else if (t instanceof a) this.s(t);
              else {
                t: switch (typeof t) {
                  case "object":
                    var e = null != t;
                    break t;
                  case "function":
                    e = !0;
                    break t;
                  default:
                    e = !1;
                }
                e ? this.v(t) : this.h(t);
              }
            }),
            (a.prototype.v = function (t) {
              var e = void 0;
              try {
                e = t.then;
              } catch (t) {
                return void this.g(t);
              }
              "function" == typeof e ? this.u(e, t) : this.h(t);
            }),
            (a.prototype.g = function (t) {
              this.i(2, t);
            }),
            (a.prototype.h = function (t) {
              this.i(1, t);
            }),
            (a.prototype.i = function (t, e) {
              if (0 != this.b)
                throw Error(
                  "Cannot settle(" +
                    t +
                    ", " +
                    e +
                    "): Promise already settled in state" +
                    this.b
                );
              (this.b = t), (this.c = e), this.l();
            }),
            (a.prototype.l = function () {
              if (null != this.a) {
                for (var t = 0; t < this.a.length; ++t) r.b(this.a[t]);
                this.a = null;
              }
            });
          var r = new e();
          return (
            (a.prototype.s = function (t) {
              var e = this.f();
              t.Ra(e.resolve, e.reject);
            }),
            (a.prototype.u = function (t, e) {
              var n = this.f();
              try {
                t.call(e, n.resolve, n.reject);
              } catch (t) {
                n.reject(t);
              }
            }),
            (a.prototype.then = function (t, e) {
              function n(e, t) {
                return "function" == typeof e
                  ? function (t) {
                      try {
                        i(e(t));
                      } catch (t) {
                        r(t);
                      }
                    }
                  : t;
              }
              var i,
                r,
                o = new a(function (t, e) {
                  (i = t), (r = e);
                });
              return this.Ra(n(t, i), n(e, r)), o;
            }),
            (a.prototype.catch = function (t) {
              return this.then(void 0, t);
            }),
            (a.prototype.Ra = function (t, e) {
              function n() {
                switch (i.b) {
                  case 1:
                    t(i.c);
                    break;
                  case 2:
                    e(i.c);
                    break;
                  default:
                    throw Error("Unexpected state: " + i.b);
                }
              }
              var i = this;
              null == this.a ? r.b(n) : this.a.push(n);
            }),
            (a.resolve = s),
            (a.reject = function (n) {
              return new a(function (t, e) {
                e(n);
              });
            }),
            (a.race = function (r) {
              return new a(function (t, e) {
                for (var n = c(r), i = n.next(); !i.done; i = n.next())
                  s(i.value).Ra(t, e);
              });
            }),
            (a.all = function (t) {
              var e = c(t),
                o = e.next();
              return o.done
                ? s([])
                : new a(function (n, t) {
                    for (
                      var i = [], r = 0;
                      i.push(void 0),
                        r++,
                        s(o.value).Ra(
                          (function (e) {
                            return function (t) {
                              (i[e] = t), 0 == --r && n(i);
                            };
                          })(i.length - 1),
                          t
                        ),
                        !(o = e.next()).done;

                    );
                  });
            }),
            a
          );
        });
        var h = h || {},
          l = this || self,
          e = /^[\w+/_-]+[=]{0,2}$/,
          s = null;
        function f(t) {
          return (t = t.querySelector && t.querySelector("script[nonce]")) &&
            (t = t.nonce || t.getAttribute("nonce")) &&
            e.test(t)
            ? t
            : "";
        }
        function a() {}
        function d(t) {
          var e = typeof t;
          return "object" != e
            ? e
            : t
            ? Array.isArray(t)
              ? "array"
              : e
            : "null";
        }
        function p(t) {
          var e = d(t);
          return "array" == e || ("object" == e && "number" == typeof t.length);
        }
        function v(t) {
          return "function" == d(t);
        }
        function m(t) {
          var e = typeof t;
          return ("object" == e && null != t) || "function" == e;
        }
        var n = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
          i = 0;
        function r(t, e, n) {
          return t.call.apply(t.bind, arguments);
        }
        function g(e, n, t) {
          if (!e) throw Error();
          if (2 < arguments.length) {
            var i = Array.prototype.slice.call(arguments, 2);
            return function () {
              var t = Array.prototype.slice.call(arguments);
              return Array.prototype.unshift.apply(t, i), e.apply(n, t);
            };
          }
          return function () {
            return e.apply(n, arguments);
          };
        }
        function b(t, e, n) {
          return (b =
            Function.prototype.bind &&
            -1 != Function.prototype.bind.toString().indexOf("native code")
              ? r
              : g).apply(null, arguments);
        }
        function y(e) {
          var n = Array.prototype.slice.call(arguments, 1);
          return function () {
            var t = n.slice();
            return t.push.apply(t, arguments), e.apply(this, t);
          };
        }
        function w(t, e) {
          function n() {}
          (n.prototype = e.prototype),
            (t.bb = e.prototype),
            (t.prototype = new n()),
            (t.prototype.constructor = t);
        }
        function I(t) {
          return t;
        }
        function T(t, e, n) {
          (this.code = k + t),
            (this.message = e || S[t] || ""),
            (this.a = n || null);
        }
        function E(t) {
          var e = t && t.code;
          return e
            ? new T(e.substring(k.length), t.message, t.serverResponse)
            : null;
        }
        w(T, Error),
          (T.prototype.w = function () {
            var t = { code: this.code, message: this.message };
            return this.a && (t.serverResponse = this.a), t;
          }),
          (T.prototype.toJSON = function () {
            return this.w();
          });
        var A,
          k = "auth/",
          S = {
            "admin-restricted-operation":
              "This operation is restricted to administrators only.",
            "argument-error": "",
            "app-not-authorized":
              "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
            "app-not-installed":
              "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
            "captcha-check-failed":
              "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
            "code-expired":
              "The SMS code has expired. Please re-send the verification code to try again.",
            "cordova-not-ready": "Cordova framework is not ready.",
            "cors-unsupported": "This browser is not supported.",
            "credential-already-in-use":
              "This credential is already associated with a different user account.",
            "custom-token-mismatch":
              "The custom token corresponds to a different audience.",
            "requires-recent-login":
              "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
            "dynamic-link-not-activated":
              "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
            "email-change-needs-verification":
              "Multi-factor users must always have a verified email.",
            "email-already-in-use":
              "The email address is already in use by another account.",
            "expired-action-code": "The action code has expired. ",
            "cancelled-popup-request":
              "This operation has been cancelled due to another conflicting popup being opened.",
            "internal-error": "An internal error has occurred.",
            "invalid-app-credential":
              "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
            "invalid-app-id":
              "The mobile app identifier is not registed for the current project.",
            "invalid-user-token":
              "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
            "invalid-auth-event": "An internal error has occurred.",
            "invalid-verification-code":
              "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
            "invalid-continue-uri":
              "The continue URL provided in the request is invalid.",
            "invalid-cordova-configuration":
              "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
            "invalid-custom-token":
              "The custom token format is incorrect. Please check the documentation.",
            "invalid-dynamic-link-domain":
              "The provided dynamic link domain is not configured or authorized for the current project.",
            "invalid-email": "The email address is badly formatted.",
            "invalid-api-key":
              "Your API key is invalid, please check you have copied it correctly.",
            "invalid-cert-hash":
              "The SHA-1 certificate hash provided is invalid.",
            "invalid-credential":
              "The supplied auth credential is malformed or has expired.",
            "invalid-message-payload":
              "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
            "invalid-multi-factor-session":
              "The request does not contain a valid proof of first factor successful sign-in.",
            "invalid-oauth-provider":
              "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
            "invalid-oauth-client-id":
              "The OAuth client ID provided is either invalid or does not match the specified API key.",
            "unauthorized-domain":
              "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
            "invalid-action-code":
              "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
            "wrong-password":
              "The password is invalid or the user does not have a password.",
            "invalid-persistence-type":
              "The specified persistence type is invalid. It can only be local, session or none.",
            "invalid-phone-number":
              "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
            "invalid-provider-id": "The specified provider ID is invalid.",
            "invalid-recipient-email":
              "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
            "invalid-sender":
              "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
            "invalid-verification-id":
              "The verification ID used to create the phone auth credential is invalid.",
            "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
            "multi-factor-info-not-found":
              "The user does not have a second factor matching the identifier provided.",
            "multi-factor-auth-required":
              "Proof of ownership of a second factor is required to complete sign-in.",
            "missing-android-pkg-name":
              "An Android Package Name must be provided if the Android App is required to be installed.",
            "auth-domain-config-required":
              "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
            "missing-app-credential":
              "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
            "missing-verification-code":
              "The phone auth credential was created with an empty SMS verification code.",
            "missing-continue-uri":
              "A continue URL must be provided in the request.",
            "missing-iframe-start": "An internal error has occurred.",
            "missing-ios-bundle-id":
              "An iOS Bundle ID must be provided if an App Store ID is provided.",
            "missing-multi-factor-info":
              "No second factor identifier is provided.",
            "missing-multi-factor-session":
              "The request is missing proof of first factor successful sign-in.",
            "missing-or-invalid-nonce":
              "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
            "missing-phone-number":
              "To send verification codes, provide a phone number for the recipient.",
            "missing-verification-id":
              "The phone auth credential was created with an empty verification ID.",
            "app-deleted": "This instance of FirebaseApp has been deleted.",
            "account-exists-with-different-credential":
              "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
            "network-request-failed":
              "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
            "no-auth-event": "An internal error has occurred.",
            "no-such-provider":
              "User was not linked to an account with the given provider.",
            "null-user":
              "A null user object was provided as the argument for an operation which requires a non-null user object.",
            "operation-not-allowed":
              "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
            "operation-not-supported-in-this-environment":
              'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
            "popup-blocked":
              "Unable to establish a connection with the popup. It may have been blocked by the browser.",
            "popup-closed-by-user":
              "The popup has been closed by the user before finalizing the operation.",
            "provider-already-linked":
              "User can only be linked to one identity for the given provider.",
            "quota-exceeded":
              "The project's quota for this operation has been exceeded.",
            "redirect-cancelled-by-user":
              "The redirect operation has been cancelled by the user before finalizing.",
            "redirect-operation-pending":
              "A redirect sign-in operation is already pending.",
            "rejected-credential":
              "The request contains malformed or mismatching credentials.",
            "second-factor-already-in-use":
              "The second factor is already enrolled on this account.",
            "maximum-second-factor-count-exceeded":
              "The maximum allowed number of second factors on a user has been exceeded.",
            "tenant-id-mismatch":
              "The provided tenant ID does not match the Auth instance's tenant ID",
            timeout: "The operation has timed out.",
            "user-token-expired":
              "The user's credential is no longer valid. The user must sign in again.",
            "too-many-requests":
              "We have blocked all requests from this device due to unusual activity. Try again later.",
            "unauthorized-continue-uri":
              "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
            "unsupported-first-factor":
              "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
            "unsupported-persistence-type":
              "The current environment does not support the specified persistence type.",
            "unsupported-tenant-operation":
              "This operation is not supported in a multi-tenant context.",
            "unverified-email": "The operation requires a verified email.",
            "user-cancelled":
              "The user did not grant your application the permissions it requested.",
            "user-not-found":
              "There is no user record corresponding to this identifier. The user may have been deleted.",
            "user-disabled":
              "The user account has been disabled by an administrator.",
            "user-mismatch":
              "The supplied credentials do not correspond to the previously signed in user.",
            "user-signed-out": "",
            "weak-password": "The password must be 6 characters long or more.",
            "web-storage-unsupported":
              "This browser is not supported or 3rd party cookies and data may be disabled.",
          },
          N = {
            ld: {
              Ua: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
              $a: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
              Xa: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
              id: "b",
            },
            sd: {
              Ua: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
              $a: "https://securetoken.googleapis.com/v1/token",
              Xa: "https://identitytoolkit.googleapis.com/v2/",
              id: "p",
            },
            ud: {
              Ua: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
              $a: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
              Xa: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
              id: "s",
            },
            vd: {
              Ua: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
              $a: "https://test-securetoken.sandbox.googleapis.com/v1/token",
              Xa: "https://test-identitytoolkit.sandbox.googleapis.com/v2/",
              id: "t",
            },
          };
        function _(t) {
          for (var e in N)
            if (N[e].id === t)
              return (
                (t = N[e]),
                {
                  firebaseEndpoint: t.Ua,
                  secureTokenEndpoint: t.$a,
                  identityPlatformEndpoint: t.Xa,
                }
              );
          return null;
        }
        function O(t) {
          if (t)
            try {
              return t.$goog_Thenable;
            } catch (t) {
              return;
            }
        }
        function C(t) {
          var e;
          Error.captureStackTrace
            ? Error.captureStackTrace(this, C)
            : (e = Error().stack) && (this.stack = e),
            t && (this.message = String(t));
        }
        function R(t, e) {
          for (
            var n = "", i = (t = t.split("%s")).length - 1, r = 0;
            r < i;
            r++
          )
            n += t[r] + (r < e.length ? e[r] : "%s");
          C.call(this, n + t[i]);
        }
        function D(t) {
          throw new R(
            "Failure" + (t ? ": " + t : ""),
            Array.prototype.slice.call(arguments, 1)
          );
        }
        function P(t, e) {
          (this.c = t), (this.f = e), (this.b = 0), (this.a = null);
        }
        function L(t, e) {
          t.f(e), t.b < 100 && (t.b++, (e.next = t.a), (t.a = e));
        }
        function x() {
          this.b = this.a = null;
        }
        (A = _("__EID__") ? "__EID__" : void 0),
          w(C, Error),
          (C.prototype.name = "CustomError"),
          w(R, C),
          (R.prototype.name = "AssertionError"),
          (P.prototype.get = function () {
            var t;
            return (
              0 < this.b
                ? (this.b--, (t = this.a), (this.a = t.next), (t.next = null))
                : (t = this.c()),
              t
            );
          });
        var M = new P(
          function () {
            return new j();
          },
          function (t) {
            t.reset();
          }
        );
        function j() {
          this.next = this.b = this.a = null;
        }
        (x.prototype.add = function (t, e) {
          var n = M.get();
          n.set(t, e), this.b ? (this.b.next = n) : (this.a = n), (this.b = n);
        }),
          (j.prototype.set = function (t, e) {
            (this.a = t), (this.b = e), (this.next = null);
          }),
          (j.prototype.reset = function () {
            this.next = this.b = this.a = null;
          });
        var U = Array.prototype.indexOf
            ? function (t, e) {
                return Array.prototype.indexOf.call(t, e, void 0);
              }
            : function (t, e) {
                if ("string" == typeof t)
                  return "string" != typeof e || 1 != e.length
                    ? -1
                    : t.indexOf(e, 0);
                for (var n = 0; n < t.length; n++)
                  if (n in t && t[n] === e) return n;
                return -1;
              },
          V = Array.prototype.forEach
            ? function (t, e, n) {
                Array.prototype.forEach.call(t, e, n);
              }
            : function (t, e, n) {
                for (
                  var i = t.length,
                    r = "string" == typeof t ? t.split("") : t,
                    o = 0;
                  o < i;
                  o++
                )
                  o in r && e.call(n, r[o], o, t);
              },
          F = Array.prototype.filter
            ? function (t, e) {
                return Array.prototype.filter.call(t, e, void 0);
              }
            : function (t, e) {
                for (
                  var n,
                    i = t.length,
                    r = [],
                    o = 0,
                    a = "string" == typeof t ? t.split("") : t,
                    s = 0;
                  s < i;
                  s++
                )
                  s in a &&
                    ((n = a[s]), e.call(void 0, n, s, t) && (r[o++] = n));
                return r;
              },
          q = Array.prototype.map
            ? function (t, e) {
                return Array.prototype.map.call(t, e, void 0);
              }
            : function (t, e) {
                for (
                  var n = t.length,
                    i = Array(n),
                    r = "string" == typeof t ? t.split("") : t,
                    o = 0;
                  o < n;
                  o++
                )
                  o in r && (i[o] = e.call(void 0, r[o], o, t));
                return i;
              },
          H = Array.prototype.some
            ? function (t, e) {
                return Array.prototype.some.call(t, e, void 0);
              }
            : function (t, e) {
                for (
                  var n = t.length,
                    i = "string" == typeof t ? t.split("") : t,
                    r = 0;
                  r < n;
                  r++
                )
                  if (r in i && e.call(void 0, i[r], r, t)) return !0;
                return !1;
              };
        function K(t, e) {
          return 0 <= U(t, e);
        }
        function G(t, e) {
          var n;
          return (
            (n = 0 <= (e = U(t, e))) && Array.prototype.splice.call(t, e, 1), n
          );
        }
        function B(n, i) {
          !(function (t, e) {
            for (
              var n = "string" == typeof t ? t.split("") : t, i = t.length - 1;
              0 <= i;
              --i
            )
              i in n && e.call(void 0, n[i], i, t);
          })(n, function (t, e) {
            i.call(void 0, t, e, n) &&
              Array.prototype.splice.call(n, e, 1).length;
          });
        }
        function W() {
          return Array.prototype.concat.apply([], arguments);
        }
        function X(t) {
          var e = t.length;
          if (0 < e) {
            for (var n = Array(e), i = 0; i < e; i++) n[i] = t[i];
            return n;
          }
          return [];
        }
        var J,
          Y = String.prototype.trim
            ? function (t) {
                return t.trim();
              }
            : function (t) {
                return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
              },
          z = /&/g,
          $ = /</g,
          Z = />/g,
          Q = /"/g,
          tt = /'/g,
          et = /\x00/g,
          nt = /[\x00&<>"']/;
        function it(t, e) {
          return -1 != t.indexOf(e);
        }
        function rt(t, e) {
          return t < e ? -1 : e < t ? 1 : 0;
        }
        var ot = l.navigator;
        function at(t) {
          return it(J, t);
        }
        function st(t, e) {
          for (var n in t) e.call(void 0, t[n], n, t);
        }
        function ut(t) {
          for (var e in t) return;
          return 1;
        }
        function ct(t) {
          var e,
            n = {};
          for (e in t) n[e] = t[e];
          return n;
        }
        J = (ot = ot && ot.userAgent) ? ot : "";
        var ht =
          "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
            " "
          );
        function lt(t) {
          for (var e, n, i = 1; i < arguments.length; i++) {
            for (e in (n = arguments[i])) t[e] = n[e];
            for (var r = 0; r < ht.length; r++)
              (e = ht[r]),
                Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
          }
        }
        function ft(t, e) {
          t: {
            try {
              var n,
                i = t && t.ownerDocument;
              if (
                (n = (i && (i.defaultView || i.parentWindow)) || l).Element &&
                n.Location
              ) {
                var r = n;
                break t;
              }
            } catch (t) {}
            r = null;
          }
          if (
            r &&
            void 0 !== r[e] &&
            (!t ||
              (!(t instanceof r[e]) &&
                (t instanceof r.Location || t instanceof r.Element)))
          ) {
            if (m(t))
              try {
                var o =
                  t.constructor.displayName ||
                  t.constructor.name ||
                  Object.prototype.toString.call(t);
              } catch (t) {
                o = "<object could not be stringified>";
              }
            else
              o = void 0 === t ? "undefined" : null === t ? "null" : typeof t;
            D(
              "Argument is not a %s (or a non-Element, non-Location mock); got: %s",
              e,
              o
            );
          }
        }
        function dt(t, e) {
          (this.a = (t === gt && e) || ""), (this.b = mt);
        }
        function pt(t) {
          return t instanceof dt && t.constructor === dt && t.b === mt
            ? t.a
            : (D("expected object of type Const, got '" + t + "'"),
              "type_error:Const");
        }
        (dt.prototype.ta = !0),
          (dt.prototype.sa = function () {
            return this.a;
          }),
          (dt.prototype.toString = function () {
            return "Const{" + this.a + "}";
          });
        var vt,
          mt = {},
          gt = {};
        function bt() {
          if (void 0 === vt) {
            var t = null,
              e = l.trustedTypes;
            if (e && e.createPolicy) {
              try {
                t = e.createPolicy("goog#html", {
                  createHTML: I,
                  createScript: I,
                  createScriptURL: I,
                });
              } catch (t) {
                l.console && l.console.error(t.message);
              }
              vt = t;
            } else vt = t;
          }
          return vt;
        }
        function yt(t, e) {
          this.a = e === At ? t : "";
        }
        function wt(t) {
          return t instanceof yt && t.constructor === yt
            ? t.a
            : (D(
                "expected object of type TrustedResourceUrl, got '" +
                  t +
                  "' of type " +
                  d(t)
              ),
              "type_error:TrustedResourceUrl");
        }
        function It(t, n) {
          var e,
            i = pt(t);
          if (!Et.test(i))
            throw Error("Invalid TrustedResourceUrl format: " + i);
          return (
            (e = t =
              i.replace(Tt, function (t, e) {
                if (!Object.prototype.hasOwnProperty.call(n, e))
                  throw Error(
                    'Found marker, "' +
                      e +
                      '", in format string, "' +
                      i +
                      '", but no valid label mapping found in args: ' +
                      JSON.stringify(n)
                  );
                return (t = n[e]) instanceof dt
                  ? pt(t)
                  : encodeURIComponent(String(t));
              })),
            new yt((e = (t = bt()) ? t.createScriptURL(e) : e), At)
          );
        }
        (yt.prototype.ta = !0),
          (yt.prototype.sa = function () {
            return this.a.toString();
          }),
          (yt.prototype.toString = function () {
            return "TrustedResourceUrl{" + this.a + "}";
          });
        var Tt = /%{(\w+)}/g,
          Et =
            /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
          At = {};
        function kt(t, e) {
          this.a = e === Dt ? t : "";
        }
        function St(t) {
          return t instanceof kt && t.constructor === kt
            ? t.a
            : (D(
                "expected object of type SafeUrl, got '" +
                  t +
                  "' of type " +
                  d(t)
              ),
              "type_error:SafeUrl");
        }
        (kt.prototype.ta = !0),
          (kt.prototype.sa = function () {
            return this.a.toString();
          }),
          (kt.prototype.toString = function () {
            return "SafeUrl{" + this.a + "}";
          });
        var Nt =
            /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
          _t = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
          Ot = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
        function Ct(t) {
          return t instanceof kt
            ? t
            : ((t = "object" == typeof t && t.ta ? t.sa() : String(t)),
              Ot.test(t) ||
              ((e = (t = (t = String(t)).replace(/(%0A|%0D)/g, "")).match(
                _t
              )) &&
                Nt.test(e[1]))
                ? new kt(t, Dt)
                : null);
          var e;
        }
        function Rt(t) {
          return t instanceof kt
            ? t
            : ((t = "object" == typeof t && t.ta ? t.sa() : String(t)),
              new kt((t = Ot.test(t) ? t : "about:invalid#zClosurez"), Dt));
        }
        var Dt = {},
          Pt = new kt("about:invalid#zClosurez", Dt);
        function Lt(t, e, n) {
          this.a = n === xt ? t : "";
        }
        (Lt.prototype.ta = !0),
          (Lt.prototype.sa = function () {
            return this.a.toString();
          }),
          (Lt.prototype.toString = function () {
            return "SafeHtml{" + this.a + "}";
          });
        var xt = {};
        function Mt(t, e, n, i) {
          return (
            (t = t instanceof kt ? t : Rt(t)),
            (e = e || l),
            (n = n instanceof dt ? pt(n) : n || ""),
            e.open(St(t), n, i, void 0)
          );
        }
        function jt(t) {
          for (
            var e = t.split("%s"),
              n = "",
              i = Array.prototype.slice.call(arguments, 1);
            i.length && 1 < e.length;

          )
            n += e.shift() + i.shift();
          return n + e.join("%s");
        }
        function Ut(t) {
          return (t =
            nt.test(t) &&
            -1 !=
              (t =
                -1 !=
                (t =
                  -1 !=
                  (t =
                    -1 !=
                    (t =
                      -1 !=
                      (t =
                        -1 != t.indexOf("&")
                          ? t.replace(z, "&amp;")
                          : t).indexOf("<")
                        ? t.replace($, "&lt;")
                        : t).indexOf(">")
                      ? t.replace(Z, "&gt;")
                      : t).indexOf('"')
                    ? t.replace(Q, "&quot;")
                    : t).indexOf("'")
                  ? t.replace(tt, "&#39;")
                  : t).indexOf("\0")
              ? t.replace(et, "&#0;")
              : t);
        }
        function Vt(t) {
          return Vt[" "](t), t;
        }
        Vt[" "] = a;
        var Ft,
          qt = at("Opera"),
          Ht = at("Trident") || at("MSIE"),
          Kt = at("Edge"),
          Gt = Kt || Ht,
          Bt =
            at("Gecko") &&
            !(it(J.toLowerCase(), "webkit") && !at("Edge")) &&
            !(at("Trident") || at("MSIE")) &&
            !at("Edge"),
          Wt = it(J.toLowerCase(), "webkit") && !at("Edge");
        function Xt() {
          var t = l.document;
          return t ? t.documentMode : void 0;
        }
        var Jt = "",
          ot =
            ((ot = J),
            Bt
              ? /rv:([^\);]+)(\)|;)/.exec(ot)
              : Kt
              ? /Edge\/([\d\.]+)/.exec(ot)
              : Ht
              ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ot)
              : Wt
              ? /WebKit\/(\S+)/.exec(ot)
              : qt
              ? /(?:Version)[ \/]?(\S+)/.exec(ot)
              : void 0);
        ot && (Jt = ot ? ot[1] : ""),
          (Ft =
            Ht && null != (ot = Xt()) && ot > parseFloat(Jt) ? String(ot) : Jt);
        var Yt = {};
        function zt(s) {
          return (
            (t = s),
            (e = function () {
              for (
                var t = 0,
                  e = Y(String(Ft)).split("."),
                  n = Y(String(s)).split("."),
                  i = Math.max(e.length, n.length),
                  r = 0;
                0 == t && r < i;
                r++
              )
                for (
                  var o = e[r] || "", a = n[r] || "";
                  (o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""]),
                    (a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""]),
                    (0 != o[0].length || 0 != a[0].length) &&
                      ((t =
                        rt(
                          0 == o[1].length ? 0 : parseInt(o[1], 10),
                          0 == a[1].length ? 0 : parseInt(a[1], 10)
                        ) ||
                        rt(0 == o[2].length, 0 == a[2].length) ||
                        rt(o[2], a[2])),
                      (o = o[3]),
                      (a = a[3]),
                      0 == t);

                );
              return 0 <= t;
            }),
            (n = Yt),
            Object.prototype.hasOwnProperty.call(n, t) ? n[t] : (n[t] = e())
          );
          var t, e, n;
        }
        var $t = (l.document && Ht && (Xt() || parseInt(Ft, 10))) || void 0;
        try {
          new self.OffscreenCanvas(0, 0).getContext("2d");
        } catch (t) {}
        var Zt = !Ht || 9 <= Number($t);
        function Qt(t) {
          var e = document;
          return "string" == typeof t ? e.getElementById(t) : t;
        }
        function te(n, t) {
          st(t, function (t, e) {
            t && "object" == typeof t && t.ta && (t = t.sa()),
              "style" == e
                ? (n.style.cssText = t)
                : "class" == e
                ? (n.className = t)
                : "for" == e
                ? (n.htmlFor = t)
                : ie.hasOwnProperty(e)
                ? n.setAttribute(ie[e], t)
                : 0 == e.lastIndexOf("aria-", 0) ||
                  0 == e.lastIndexOf("data-", 0)
                ? n.setAttribute(e, t)
                : (n[e] = t);
          });
        }
        var ee,
          ne,
          ie = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width",
          };
        function re() {
          var t,
            e = arguments,
            n = document,
            i = String(e[0]),
            r = e[1];
          return (
            !Zt &&
              r &&
              (r.name || r.type) &&
              ((i = ["<", i]),
              r.name && i.push(' name="', Ut(r.name), '"'),
              r.type &&
                (i.push(' type="', Ut(r.type), '"'),
                lt((t = {}), r),
                delete t.type,
                (r = t)),
              i.push(">"),
              (i = i.join(""))),
            (i = oe(n, i)),
            r &&
              ("string" == typeof r
                ? (i.className = r)
                : Array.isArray(r)
                ? (i.className = r.join(" "))
                : te(i, r)),
            2 < e.length &&
              (function (e, n, t) {
                function i(t) {
                  t &&
                    n.appendChild(
                      "string" == typeof t ? e.createTextNode(t) : t
                    );
                }
                for (var r = 2; r < t.length; r++) {
                  var o = t[r];
                  if (!p(o) || (m(o) && 0 < o.nodeType)) i(o);
                  else {
                    t: {
                      if (o && "number" == typeof o.length) {
                        if (m(o)) {
                          var a =
                            "function" == typeof o.item ||
                            "string" == typeof o.item;
                          break t;
                        }
                        if (v(o)) {
                          a = "function" == typeof o.item;
                          break t;
                        }
                      }
                      a = !1;
                    }
                    V(a ? X(o) : o, i);
                  }
                }
              })(n, i, e),
            i
          );
        }
        function oe(t, e) {
          return (
            (e = String(e)),
            "application/xhtml+xml" === t.contentType && (e = e.toLowerCase()),
            t.createElement(e)
          );
        }
        function ae(t) {
          l.setTimeout(function () {
            throw t;
          }, 0);
        }
        function se(t, e) {
          var n;
          (ne =
            ne ||
            (l.Promise && l.Promise.resolve
              ? ((n = l.Promise.resolve(void 0)),
                function () {
                  n.then(he);
                })
              : function () {
                  var t = he;
                  !v(l.setImmediate) ||
                  (l.Window &&
                    l.Window.prototype &&
                    !at("Edge") &&
                    l.Window.prototype.setImmediate == l.setImmediate)
                    ? (ee =
                        ee ||
                        (function () {
                          var t = l.MessageChannel;
                          if (
                            void 0 ===
                              (t =
                                void 0 === t &&
                                "undefined" != typeof window &&
                                window.postMessage &&
                                window.addEventListener &&
                                !at("Presto")
                                  ? function () {
                                      ((i = oe(
                                        document,
                                        "IFRAME"
                                      )).style.display = "none"),
                                        document.documentElement.appendChild(i);
                                      var t = i.contentWindow;
                                      (i = t.document).open(), i.close();
                                      var e = "callImmediate" + Math.random(),
                                        n =
                                          "file:" == t.location.protocol
                                            ? "*"
                                            : t.location.protocol +
                                              "//" +
                                              t.location.host,
                                        i = b(function (t) {
                                          ("*" != n && t.origin != n) ||
                                            t.data != e ||
                                            this.port1.onmessage();
                                        }, this);
                                      t.addEventListener("message", i, !1),
                                        (this.port1 = {}),
                                        (this.port2 = {
                                          postMessage: function () {
                                            t.postMessage(e, n);
                                          },
                                        });
                                    }
                                  : t) ||
                            at("Trident") ||
                            at("MSIE")
                          )
                            return function (t) {
                              l.setTimeout(t, 0);
                            };
                          var e = new t(),
                            n = {},
                            i = n;
                          return (
                            (e.port1.onmessage = function () {
                              var t;
                              void 0 !== n.next &&
                                ((t = (n = n.next).Hb), (n.Hb = null), t());
                            }),
                            function (t) {
                              (i.next = { Hb: t }),
                                (i = i.next),
                                e.port2.postMessage(0);
                            }
                          );
                        })())(t)
                    : l.setImmediate(t);
                })),
            ue || (ne(), (ue = !0)),
            ce.add(t, e);
        }
        var ue = !1,
          ce = new x();
        function he() {
          for (
            var t, e;
            (t = void 0),
              (e = null),
              (t = ce).a &&
                ((e = t.a),
                (t.a = t.a.next),
                t.a || (t.b = null),
                (e.next = null)),
              e;

          ) {
            try {
              e.a.call(e.b);
            } catch (t) {
              ae(t);
            }
            L(M, e);
          }
          ue = !1;
        }
        function le(t, e) {
          if (
            ((this.a = fe),
            (this.i = void 0),
            (this.f = this.b = this.c = null),
            (this.g = this.h = !1),
            t != a)
          )
            try {
              var n = this;
              t.call(
                e,
                function (t) {
                  Ae(n, de, t);
                },
                function (t) {
                  if (!(t instanceof Re))
                    try {
                      if (t instanceof Error) throw t;
                      throw Error("Promise rejected.");
                    } catch (t) {}
                  Ae(n, pe, t);
                }
              );
            } catch (t) {
              Ae(this, pe, t);
            }
        }
        var fe = 0,
          de = 2,
          pe = 3;
        function ve() {
          (this.next = this.f = this.b = this.g = this.a = null), (this.c = !1);
        }
        ve.prototype.reset = function () {
          (this.f = this.b = this.g = this.a = null), (this.c = !1);
        };
        var me = new P(
          function () {
            return new ve();
          },
          function (t) {
            t.reset();
          }
        );
        function ge(t, e, n) {
          var i = me.get();
          return (i.g = t), (i.b = e), (i.f = n), i;
        }
        function be(t) {
          if (t instanceof le) return t;
          var e = new le(a);
          return Ae(e, de, t), e;
        }
        function ye(n) {
          return new le(function (t, e) {
            e(n);
          });
        }
        function we(t, e, n) {
          ke(t, e, n, null) || se(y(e, t));
        }
        function Ie(n) {
          return new le(function (i) {
            var r = n.length,
              o = [];
            if (r)
              for (
                var t = function (t, e, n) {
                    r--,
                      (o[t] = e ? { Qb: !0, value: n } : { Qb: !1, reason: n }),
                      0 == r && i(o);
                  },
                  e = 0;
                e < n.length;
                e++
              )
                we(n[e], y(t, e, !0), y(t, e, !1));
            else i(o);
          });
        }
        function Te(t, e) {
          t.b || (t.a != de && t.a != pe) || Se(t),
            t.f ? (t.f.next = e) : (t.b = e),
            (t.f = e);
        }
        function Ee(t, r, o, a) {
          var e = ge(null, null, null);
          return (
            (e.a = new le(function (n, i) {
              (e.g = r
                ? function (t) {
                    try {
                      var e = r.call(a, t);
                      n(e);
                    } catch (t) {
                      i(t);
                    }
                  }
                : n),
                (e.b = o
                  ? function (t) {
                      try {
                        var e = o.call(a, t);
                        void 0 === e && t instanceof Re ? i(t) : n(e);
                      } catch (t) {
                        i(t);
                      }
                    }
                  : i);
            })),
            Te((e.a.c = t), e),
            e.a
          );
        }
        function Ae(t, e, n) {
          var i, r;
          t.a == fe &&
            (t === n &&
              ((e = pe),
              (n = new TypeError("Promise cannot resolve to itself"))),
            (t.a = 1),
            ke(n, t.$c, t.ad, t) ||
              ((t.i = n),
              (t.a = e),
              (t.c = null),
              Se(t),
              e != pe ||
                n instanceof Re ||
                ((r = n),
                ((i = t).g = !0),
                se(function () {
                  i.g && Ce.call(null, r);
                }))));
        }
        function ke(t, e, n, i) {
          if (t instanceof le) return Te(t, ge(e || a, n || null, i)), 1;
          if (O(t)) return t.then(e, n, i), 1;
          if (m(t))
            try {
              var r = t.then;
              return v(r)
                ? ((function (t, e, n, i, r) {
                    function o(t) {
                      a || ((a = !0), i.call(r, t));
                    }
                    var a = !1;
                    try {
                      e.call(
                        t,
                        function (t) {
                          a || ((a = !0), n.call(r, t));
                        },
                        o
                      );
                    } catch (t) {
                      o(t);
                    }
                  })(t, r, e, n, i),
                  1)
                : void 0;
            } catch (t) {
              return n.call(i, t), 1;
            }
        }
        function Se(t) {
          t.h || ((t.h = !0), se(t.gc, t));
        }
        function Ne(t) {
          var e = null;
          return (
            t.b && ((e = t.b), (t.b = e.next), (e.next = null)),
            t.b || (t.f = null),
            e
          );
        }
        function _e(t, e, n, i) {
          if (n == pe && e.b && !e.c) for (; t && t.g; t = t.c) t.g = !1;
          if (e.a) (e.a.c = null), Oe(e, n, i);
          else
            try {
              e.c ? e.g.call(e.f) : Oe(e, n, i);
            } catch (t) {
              Ce.call(null, t);
            }
          L(me, e);
        }
        function Oe(t, e, n) {
          e == de ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n);
        }
        (le.prototype.then = function (t, e, n) {
          return Ee(this, v(t) ? t : null, v(e) ? e : null, n);
        }),
          (le.prototype.$goog_Thenable = !0),
          ((t = le.prototype).oa = function (t, e) {
            return ((t = ge(t, t, e)).c = !0), Te(this, t), this;
          }),
          (t.o = function (t, e) {
            return Ee(this, null, t, e);
          }),
          (t.cancel = function (t) {
            var e;
            this.a == fe &&
              ((e = new Re(t)),
              se(function () {
                !(function t(e, n) {
                  if (e.a == fe)
                    if (e.c) {
                      var i = e.c;
                      if (i.b) {
                        for (
                          var r = 0, o = null, a = null, s = i.b;
                          s &&
                          (s.c || (r++, !((o = s.a == e ? s : o) && 1 < r)));
                          s = s.next
                        )
                          o || (a = s);
                        o &&
                          (i.a == fe && 1 == r
                            ? t(i, n)
                            : (a
                                ? ((r = a).next == i.f && (i.f = r),
                                  (r.next = r.next.next))
                                : Ne(i),
                              _e(i, o, pe, n)));
                      }
                      e.c = null;
                    } else Ae(e, pe, n);
                })(this, e);
              }, this));
          }),
          (t.$c = function (t) {
            (this.a = fe), Ae(this, de, t);
          }),
          (t.ad = function (t) {
            (this.a = fe), Ae(this, pe, t);
          }),
          (t.gc = function () {
            for (var t; (t = Ne(this)); ) _e(this, t, this.a, this.i);
            this.h = !1;
          });
        var Ce = ae;
        function Re(t) {
          C.call(this, t);
        }
        function De() {
          (this.ya = this.ya), (this.pa = this.pa);
        }
        w(Re, C);
        var Pe = 0,
          Le = {};
        function xe(t) {
          t.ya ||
            ((t.ya = !0), t.Da(), 0 == Pe) ||
            ((t =
              (Object.prototype.hasOwnProperty.call(t, n) && t[n]) ||
              (t[n] = ++i)),
            delete Le[t]);
        }
        (De.prototype.ya = !(Re.prototype.name = "cancel")),
          (De.prototype.Da = function () {
            if (this.pa) for (; this.pa.length; ) this.pa.shift()();
          });
        var Jt =
            Object.freeze ||
            function (t) {
              return t;
            },
          Me = !Ht || 9 <= Number($t),
          je = Ht && !zt("9"),
          Ue = (function () {
            if (!l.addEventListener || !Object.defineProperty) return !1;
            var t = !1,
              e = Object.defineProperty({}, "passive", {
                get: function () {
                  t = !0;
                },
              });
            try {
              l.addEventListener("test", a, e),
                l.removeEventListener("test", a, e);
            } catch (t) {}
            return t;
          })();
        function Ve(t, e) {
          (this.type = t),
            (this.b = this.target = e),
            (this.defaultPrevented = !1);
        }
        function Fe(t, e) {
          if (
            (Ve.call(this, t ? t.type : ""),
            (this.relatedTarget = this.b = this.target = null),
            (this.button =
              this.screenY =
              this.screenX =
              this.clientY =
              this.clientX =
                0),
            (this.key = ""),
            (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
            (this.pointerId = 0),
            (this.pointerType = ""),
            (this.a = null),
            t)
          ) {
            var n = (this.type = t.type),
              i =
                t.changedTouches && t.changedTouches.length
                  ? t.changedTouches[0]
                  : null;
            if (
              ((this.target = t.target || t.srcElement),
              (this.b = e),
              (e = t.relatedTarget))
            ) {
              if (Bt) {
                t: {
                  try {
                    Vt(e.nodeName);
                    var r = !0;
                    break t;
                  } catch (t) {}
                  r = !1;
                }
                r || (e = null);
              }
            } else
              "mouseover" == n
                ? (e = t.fromElement)
                : "mouseout" == n && (e = t.toElement);
            (this.relatedTarget = e),
              i
                ? ((this.clientX = void 0 !== i.clientX ? i.clientX : i.pageX),
                  (this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY),
                  (this.screenX = i.screenX || 0),
                  (this.screenY = i.screenY || 0))
                : ((this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX),
                  (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
                  (this.screenX = t.screenX || 0),
                  (this.screenY = t.screenY || 0)),
              (this.button = t.button),
              (this.key = t.key || ""),
              (this.ctrlKey = t.ctrlKey),
              (this.altKey = t.altKey),
              (this.shiftKey = t.shiftKey),
              (this.metaKey = t.metaKey),
              (this.pointerId = t.pointerId || 0),
              (this.pointerType =
                "string" == typeof t.pointerType
                  ? t.pointerType
                  : qe[t.pointerType] || ""),
              (this.a = t).defaultPrevented && this.preventDefault();
          }
        }
        (Ve.prototype.preventDefault = function () {
          this.defaultPrevented = !0;
        }),
          w(Fe, Ve);
        var qe = Jt({ 2: "touch", 3: "pen", 4: "mouse" });
        (Fe.prototype.preventDefault = function () {
          Fe.bb.preventDefault.call(this);
          var t = this.a;
          if (t.preventDefault) t.preventDefault();
          else if (((t.returnValue = !1), je))
            try {
              (t.ctrlKey || (112 <= t.keyCode && t.keyCode <= 123)) &&
                (t.keyCode = -1);
            } catch (t) {}
        }),
          (Fe.prototype.g = function () {
            return this.a;
          });
        var He = "closure_listenable_" + ((1e6 * Math.random()) | 0),
          Ke = 0;
        function Ge(t, e, n, i, r) {
          (this.listener = t),
            (this.proxy = null),
            (this.src = e),
            (this.type = n),
            (this.capture = !!i),
            (this.Wa = r),
            (this.key = ++Ke),
            (this.wa = this.Qa = !1);
        }
        function Be(t) {
          (t.wa = !0),
            (t.listener = null),
            (t.proxy = null),
            (t.src = null),
            (t.Wa = null);
        }
        function We(t) {
          (this.src = t), (this.a = {}), (this.b = 0);
        }
        function Xe(t, e) {
          var n = e.type;
          n in t.a &&
            G(t.a[n], e) &&
            (Be(e), 0 == t.a[n].length && (delete t.a[n], t.b--));
        }
        function Je(t, e, n, i) {
          for (var r = 0; r < t.length; ++r) {
            var o = t[r];
            if (!o.wa && o.listener == e && o.capture == !!n && o.Wa == i)
              return r;
          }
          return -1;
        }
        We.prototype.add = function (t, e, n, i, r) {
          var o = t.toString();
          (t = this.a[o]) || ((t = this.a[o] = []), this.b++);
          var a = Je(t, e, i, r);
          return (
            -1 < a
              ? ((e = t[a]), n || (e.Qa = !1))
              : (((e = new Ge(e, this.src, o, !!i, r)).Qa = n), t.push(e)),
            e
          );
        };
        var Ye = "closure_lm_" + ((1e6 * Math.random()) | 0),
          ze = {};
        function $e(t, e, n, i, r) {
          if (i && i.once) Qe(t, e, n, i, r);
          else if (Array.isArray(e))
            for (var o = 0; o < e.length; o++) $e(t, e[o], n, i, r);
          else
            (n = cn(n)),
              t && t[He]
                ? ln(t, e, n, m(i) ? !!i.capture : !!i, r)
                : Ze(t, e, n, !1, i, r);
        }
        function Ze(t, e, n, i, r, o) {
          if (!e) throw Error("Invalid event type");
          var a,
            s,
            u = m(r) ? !!r.capture : !!r,
            c = sn(t);
          if ((c || (t[Ye] = c = new We(t)), !(n = c.add(e, n, i, u, o)).proxy))
            if (
              ((a = an),
              (s = Me
                ? function (t) {
                    return a.call(s.src, s.listener, t);
                  }
                : function (t) {
                    if (!(t = a.call(s.src, s.listener, t))) return t;
                  }),
              ((n.proxy = i = s).src = t),
              (i.listener = n),
              t.addEventListener)
            )
              void 0 === (r = Ue ? r : u) && (r = !1),
                t.addEventListener(e.toString(), i, r);
            else if (t.attachEvent) t.attachEvent(nn(e.toString()), i);
            else {
              if (!t.addListener || !t.removeListener)
                throw Error(
                  "addEventListener and attachEvent are unavailable."
                );
              t.addListener(i);
            }
        }
        function Qe(t, e, n, i, r) {
          if (Array.isArray(e))
            for (var o = 0; o < e.length; o++) Qe(t, e[o], n, i, r);
          else
            (n = cn(n)),
              t && t[He]
                ? fn(t, e, n, m(i) ? !!i.capture : !!i, r)
                : Ze(t, e, n, !0, i, r);
        }
        function tn(t, e, n, i, r) {
          if (Array.isArray(e))
            for (var o = 0; o < e.length; o++) tn(t, e[o], n, i, r);
          else
            (i = m(i) ? !!i.capture : !!i),
              (n = cn(n)),
              t && t[He]
                ? ((t = t.v),
                  (e = String(e).toString()) in t.a &&
                    -1 < (n = Je((o = t.a[e]), n, i, r)) &&
                    (Be(o[n]),
                    Array.prototype.splice.call(o, n, 1),
                    0 == o.length && (delete t.a[e], t.b--)))
                : (t = t && sn(t)) &&
                  ((e = t.a[e.toString()]),
                  (n = (t = -1) < (t = e ? Je(e, n, i, r) : t) ? e[t] : null) &&
                    en(n));
        }
        function en(t) {
          var e, n, i;
          "number" != typeof t &&
            t &&
            !t.wa &&
            ((e = t.src) && e[He]
              ? Xe(e.v, t)
              : ((n = t.type),
                (i = t.proxy),
                e.removeEventListener
                  ? e.removeEventListener(n, i, t.capture)
                  : e.detachEvent
                  ? e.detachEvent(nn(n), i)
                  : e.addListener && e.removeListener && e.removeListener(i),
                (n = sn(e))
                  ? (Xe(n, t), 0 == n.b && ((n.src = null), (e[Ye] = null)))
                  : Be(t)));
        }
        function nn(t) {
          return t in ze ? ze[t] : (ze[t] = "on" + t);
        }
        function rn(t, e, n, i) {
          var r = !0;
          if ((t = sn(t)) && (e = t.a[e.toString()]))
            for (e = e.concat(), t = 0; t < e.length; t++) {
              var o = e[t];
              o &&
                o.capture == n &&
                !o.wa &&
                ((o = on(o, i)), (r = r && !1 !== o));
            }
          return r;
        }
        function on(t, e) {
          var n = t.listener,
            i = t.Wa || t.src;
          return t.Qa && en(t), n.call(i, e);
        }
        function an(t, e) {
          if (t.wa) return !0;
          if (Me) return on(t, new Fe(e, this));
          if (!e)
            t: {
              e = ["window", "event"];
              for (var n = l, i = 0; i < e.length; i++)
                if (null == (n = n[e[i]])) {
                  e = null;
                  break t;
                }
              e = n;
            }
          if (
            ((e = new Fe((i = e), this)),
            (n = !0),
            !(i.keyCode < 0 || null != i.returnValue))
          ) {
            t: {
              var r = !1;
              if (0 == i.keyCode)
                try {
                  i.keyCode = -1;
                  break t;
                } catch (t) {
                  r = !0;
                }
              (!r && null != i.returnValue) || (i.returnValue = !0);
            }
            for (i = [], r = e.b; r; r = r.parentNode) i.push(r);
            for (t = t.type, r = i.length - 1; 0 <= r; r--) {
              e.b = i[r];
              var o = rn(i[r], t, !0, e),
                n = n && o;
            }
            for (r = 0; r < i.length; r++)
              (e.b = i[r]), (o = rn(i[r], t, !1, e)), (n = n && o);
          }
          return n;
        }
        function sn(t) {
          return (t = t[Ye]) instanceof We ? t : null;
        }
        var un = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
        function cn(e) {
          return v(e)
            ? e
            : (e[un] ||
                (e[un] = function (t) {
                  return e.handleEvent(t);
                }),
              e[un]);
        }
        function hn() {
          De.call(this), (this.v = new We(this)), ((this.bc = this).hb = null);
        }
        function ln(t, e, n, i, r) {
          t.v.add(String(e), n, !1, i, r);
        }
        function fn(t, e, n, i, r) {
          t.v.add(String(e), n, !0, i, r);
        }
        function dn(t, e, n, i) {
          if (!(e = t.v.a[String(e)])) return !0;
          e = e.concat();
          for (var r = !0, o = 0; o < e.length; ++o) {
            var a,
              s,
              u = e[o];
            u &&
              !u.wa &&
              u.capture == n &&
              ((a = u.listener),
              (s = u.Wa || u.src),
              u.Qa && Xe(t.v, u),
              (r = !1 !== a.call(s, i) && r));
          }
          return r && !i.defaultPrevented;
        }
        function pn(t, e, n) {
          if (v(t)) n && (t = b(t, n));
          else {
            if (!t || "function" != typeof t.handleEvent)
              throw Error("Invalid listener argument");
            t = b(t.handleEvent, t);
          }
          return 2147483647 < Number(e) ? -1 : l.setTimeout(t, e || 0);
        }
        function vn(n) {
          var i = null;
          return new le(function (t, e) {
            -1 ==
              (i = pn(function () {
                t(void 0);
              }, n)) && e(Error("Failed to schedule timer."));
          }).o(function (t) {
            throw (l.clearTimeout(i), t);
          });
        }
        function mn(t) {
          if (t.X && "function" == typeof t.X) return t.X();
          if ("string" == typeof t) return t.split("");
          if (p(t)) {
            for (var e = [], n = t.length, i = 0; i < n; i++) e.push(t[i]);
            return e;
          }
          for (i in ((e = []), (n = 0), t)) e[n++] = t[i];
          return e;
        }
        function gn(t) {
          if (t.Y && "function" == typeof t.Y) return t.Y();
          if (!t.X || "function" != typeof t.X) {
            if (p(t) || "string" == typeof t) {
              var e = [];
              t = t.length;
              for (var n = 0; n < t; n++) e.push(n);
              return e;
            }
            for (var i in ((e = []), (n = 0), t)) e[n++] = i;
            return e;
          }
        }
        function bn(t, e) {
          (this.b = {}), (this.a = []), (this.c = 0);
          var n = arguments.length;
          if (1 < n) {
            if (n % 2) throw Error("Uneven number of arguments");
            for (var i = 0; i < n; i += 2)
              this.set(arguments[i], arguments[i + 1]);
          } else if (t)
            if (t instanceof bn)
              for (n = t.Y(), i = 0; i < n.length; i++)
                this.set(n[i], t.get(n[i]));
            else for (i in t) this.set(i, t[i]);
        }
        function yn(t) {
          if (t.c != t.a.length) {
            for (var e = 0, n = 0; e < t.a.length; ) {
              var i = t.a[e];
              wn(t.b, i) && (t.a[n++] = i), e++;
            }
            t.a.length = n;
          }
          if (t.c != t.a.length) {
            for (var r = {}, n = (e = 0); e < t.a.length; )
              wn(r, (i = t.a[e])) || (r[(t.a[n++] = i)] = 1), e++;
            t.a.length = n;
          }
        }
        function wn(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        w(hn, De),
          (hn.prototype[He] = !0),
          (hn.prototype.addEventListener = function (t, e, n, i) {
            $e(this, t, e, n, i);
          }),
          (hn.prototype.removeEventListener = function (t, e, n, i) {
            tn(this, t, e, n, i);
          }),
          (hn.prototype.dispatchEvent = function (t) {
            var e;
            if ((n = this.hb)) for (e = []; n; n = n.hb) e.push(n);
            var n = this.bc,
              i = t.type || t;
            if (
              ("string" == typeof t
                ? (t = new Ve(t, n))
                : t instanceof Ve
                ? (t.target = t.target || n)
                : ((a = t), lt((t = new Ve(i, n)), a)),
              (a = !0),
              e)
            )
              for (var r = e.length - 1; 0 <= r; r--)
                var o = (t.b = e[r]), a = dn(o, i, !0, t) && a;
            if (
              ((a = dn((o = t.b = n), i, !0, t) && a),
              (a = dn(o, i, !1, t) && a),
              e)
            )
              for (r = 0; r < e.length; r++)
                a = dn((o = t.b = e[r]), i, !1, t) && a;
            return a;
          }),
          (hn.prototype.Da = function () {
            if ((hn.bb.Da.call(this), this.v)) {
              var t,
                e = this.v;
              for (t in e.a) {
                for (var n = e.a[t], i = 0; i < n.length; i++) Be(n[i]);
                delete e.a[t], e.b--;
              }
            }
            this.hb = null;
          }),
          ((t = bn.prototype).X = function () {
            yn(this);
            for (var t = [], e = 0; e < this.a.length; e++)
              t.push(this.b[this.a[e]]);
            return t;
          }),
          (t.Y = function () {
            return yn(this), this.a.concat();
          }),
          (t.clear = function () {
            (this.b = {}), (this.c = this.a.length = 0);
          }),
          (t.get = function (t, e) {
            return wn(this.b, t) ? this.b[t] : e;
          }),
          (t.set = function (t, e) {
            wn(this.b, t) || (this.c++, this.a.push(t)), (this.b[t] = e);
          }),
          (t.forEach = function (t, e) {
            for (var n = this.Y(), i = 0; i < n.length; i++) {
              var r = n[i],
                o = this.get(r);
              t.call(e, o, r, this);
            }
          });
        var In =
          /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
        function Tn(t, e) {
          var n;
          (this.a = this.l = this.c = ""),
            (this.g = null),
            (this.h = this.f = ""),
            (this.i = !1),
            t instanceof Tn
              ? ((this.i = void 0 !== e ? e : t.i),
                En(this, t.c),
                (this.l = t.l),
                (this.a = t.a),
                An(this, t.g),
                (this.f = t.f),
                kn(this, Gn(t.b)),
                (this.h = t.h))
              : t && (n = String(t).match(In))
              ? ((this.i = !!e),
                En(this, n[1] || "", !0),
                (this.l = Cn(n[2] || "")),
                (this.a = Cn(n[3] || "", !0)),
                An(this, n[4]),
                (this.f = Cn(n[5] || "", !0)),
                kn(this, n[6] || "", !0),
                (this.h = Cn(n[7] || "")))
              : ((this.i = !!e), (this.b = new Un(null, this.i)));
        }
        function En(t, e, n) {
          (t.c = n ? Cn(e, !0) : e), t.c && (t.c = t.c.replace(/:$/, ""));
        }
        function An(t, e) {
          if (e) {
            if (((e = Number(e)), isNaN(e) || e < 0))
              throw Error("Bad port number " + e);
            t.g = e;
          } else t.g = null;
        }
        function kn(t, e, n) {
          var i, r;
          e instanceof Un
            ? ((t.b = e),
              (i = t.b),
              (r = t.i) &&
                !i.f &&
                (Vn(i),
                (i.c = null),
                i.a.forEach(function (t, e) {
                  var n = e.toLowerCase();
                  e != n && (qn(this, e), Kn(this, n, t));
                }, i)),
              (i.f = r))
            : (n || (e = Rn(e, Mn)), (t.b = new Un(e, t.i)));
        }
        function Sn(t, e, n) {
          t.b.set(e, n);
        }
        function Nn(t, e) {
          return t.b.get(e);
        }
        function _n(t) {
          return t instanceof Tn ? new Tn(t) : new Tn(t, void 0);
        }
        function On(t, e, n, i) {
          var r = new Tn(null, void 0);
          return (
            t && En(r, t), e && (r.a = e), n && An(r, n), i && (r.f = i), r
          );
        }
        function Cn(t, e) {
          return t
            ? e
              ? decodeURI(t.replace(/%25/g, "%2525"))
              : decodeURIComponent(t)
            : "";
        }
        function Rn(t, e, n) {
          return "string" == typeof t
            ? ((t = encodeURI(t).replace(e, Dn)),
              n ? t.replace(/%25([0-9a-fA-F]{2})/g, "%$1") : t)
            : null;
        }
        function Dn(t) {
          return (
            "%" +
            (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) +
            (15 & t).toString(16)
          );
        }
        (Tn.prototype.toString = function () {
          var t = [],
            e = this.c;
          e && t.push(Rn(e, Pn, !0), ":");
          var n = this.a;
          return (
            (!n && "file" != e) ||
              (t.push("//"),
              (e = this.l) && t.push(Rn(e, Pn, !0), "@"),
              t.push(
                encodeURIComponent(String(n)).replace(
                  /%25([0-9a-fA-F]{2})/g,
                  "%$1"
                )
              ),
              null != (n = this.g) && t.push(":", String(n))),
            (n = this.f) &&
              (this.a && "/" != n.charAt(0) && t.push("/"),
              t.push(Rn(n, "/" == n.charAt(0) ? xn : Ln, !0))),
            (n = this.b.toString()) && t.push("?", n),
            (n = this.h) && t.push("#", Rn(n, jn)),
            t.join("")
          );
        }),
          (Tn.prototype.resolve = function (t) {
            var e = new Tn(this),
              n = !!t.c;
            n ? En(e, t.c) : (n = !!t.l),
              n ? (e.l = t.l) : (n = !!t.a),
              n ? (e.a = t.a) : (n = null != t.g);
            var i = t.f;
            if (n) An(e, t.g);
            else if ((n = !!t.f))
              if (
                ("/" != i.charAt(0) &&
                  (this.a && !this.f
                    ? (i = "/" + i)
                    : -1 != (r = e.f.lastIndexOf("/")) &&
                      (i = e.f.substr(0, r + 1) + i)),
                ".." == (r = i) || "." == r)
              )
                i = "";
              else if (it(r, "./") || it(r, "/.")) {
                for (
                  var i = 0 == r.lastIndexOf("/", 0),
                    r = r.split("/"),
                    o = [],
                    a = 0;
                  a < r.length;

                ) {
                  var s = r[a++];
                  "." == s
                    ? i && a == r.length && o.push("")
                    : ".." == s
                    ? ((1 < o.length || (1 == o.length && "" != o[0])) &&
                        o.pop(),
                      i && a == r.length && o.push(""))
                    : (o.push(s), (i = !0));
                }
                i = o.join("/");
              } else i = r;
            return (
              n ? (e.f = i) : (n = "" !== t.b.toString()),
              n ? kn(e, Gn(t.b)) : (n = !!t.h),
              n && (e.h = t.h),
              e
            );
          });
        var Pn = /[#\/\?@]/g,
          Ln = /[#\?:]/g,
          xn = /[#\?]/g,
          Mn = /[#\?@]/g,
          jn = /#/g;
        function Un(t, e) {
          (this.b = this.a = null), (this.c = t || null), (this.f = !!e);
        }
        function Vn(o) {
          o.a ||
            ((o.a = new bn()),
            (o.b = 0),
            o.c &&
              (function (t) {
                if (t) {
                  t = t.split("&");
                  for (var e = 0; e < t.length; e++) {
                    var n,
                      i = t[e].indexOf("="),
                      r = null;
                    0 <= i
                      ? ((n = t[e].substring(0, i)),
                        (r = t[e].substring(i + 1)))
                      : (n = t[e]),
                      (i = n),
                      (r = r ? decodeURIComponent(r.replace(/\+/g, " ")) : ""),
                      o.add(decodeURIComponent(i.replace(/\+/g, " ")), r);
                  }
                }
              })(o.c));
        }
        function Fn(t) {
          var e = gn(t);
          if (void 0 === e) throw Error("Keys are undefined");
          var n = new Un(null, void 0);
          t = mn(t);
          for (var i = 0; i < e.length; i++) {
            var r = e[i],
              o = t[i];
            Array.isArray(o) ? Kn(n, r, o) : n.add(r, o);
          }
          return n;
        }
        function qn(t, e) {
          Vn(t),
            (e = Bn(t, e)),
            wn(t.a.b, e) &&
              ((t.c = null),
              (t.b -= t.a.get(e).length),
              wn((t = t.a).b, e) &&
                (delete t.b[e], t.c--, t.a.length > 2 * t.c && yn(t)));
        }
        function Hn(t, e) {
          return Vn(t), (e = Bn(t, e)), wn(t.a.b, e);
        }
        function Kn(t, e, n) {
          qn(t, e),
            0 < n.length &&
              ((t.c = null), t.a.set(Bn(t, e), X(n)), (t.b += n.length));
        }
        function Gn(t) {
          var e = new Un();
          return (e.c = t.c), t.a && ((e.a = new bn(t.a)), (e.b = t.b)), e;
        }
        function Bn(t, e) {
          return (e = String(e)), t.f ? e.toLowerCase() : e;
        }
        function Wn(t) {
          var e = [];
          return (
            (function t(e, n, i) {
              if (null == n) i.push("null");
              else {
                if ("object" == typeof n) {
                  if (Array.isArray(n)) {
                    var r = n;
                    (n = r.length), i.push("[");
                    for (var o = "", a = 0; a < n; a++)
                      i.push(o), t(e, r[a], i), (o = ",");
                    return i.push("]"), 0;
                  }
                  if (
                    !(
                      n instanceof String ||
                      n instanceof Number ||
                      n instanceof Boolean
                    )
                  ) {
                    for (r in (i.push("{"), (o = ""), n))
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        ((a = n[r]),
                        "function" != typeof a &&
                          (i.push(o),
                          zn(r, i),
                          i.push(":"),
                          t(e, a, i),
                          (o = ",")));
                    return i.push("}"), 0;
                  }
                  n = n.valueOf();
                }
                switch (typeof n) {
                  case "string":
                    zn(n, i);
                    break;
                  case "number":
                    i.push(isFinite(n) && !isNaN(n) ? String(n) : "null");
                    break;
                  case "boolean":
                    i.push(String(n));
                    break;
                  case "function":
                    i.push("null");
                    break;
                  default:
                    throw Error("Unknown type: " + typeof n);
                }
              }
            })(new Xn(), t, e),
            e.join("")
          );
        }
        function Xn() {}
        ((t = Un.prototype).add = function (t, e) {
          Vn(this), (this.c = null), (t = Bn(this, t));
          var n = this.a.get(t);
          return n || this.a.set(t, (n = [])), n.push(e), (this.b += 1), this;
        }),
          (t.clear = function () {
            (this.a = this.c = null), (this.b = 0);
          }),
          (t.forEach = function (n, i) {
            Vn(this),
              this.a.forEach(function (t, e) {
                V(
                  t,
                  function (t) {
                    n.call(i, t, e, this);
                  },
                  this
                );
              }, this);
          }),
          (t.Y = function () {
            Vn(this);
            for (
              var t = this.a.X(), e = this.a.Y(), n = [], i = 0;
              i < e.length;
              i++
            )
              for (var r = t[i], o = 0; o < r.length; o++) n.push(e[i]);
            return n;
          }),
          (t.X = function (t) {
            Vn(this);
            var e = [];
            if ("string" == typeof t)
              Hn(this, t) && (e = W(e, this.a.get(Bn(this, t))));
            else {
              t = this.a.X();
              for (var n = 0; n < t.length; n++) e = W(e, t[n]);
            }
            return e;
          }),
          (t.set = function (t, e) {
            return (
              Vn(this),
              (this.c = null),
              Hn(this, (t = Bn(this, t))) && (this.b -= this.a.get(t).length),
              this.a.set(t, [e]),
              (this.b += 1),
              this
            );
          }),
          (t.get = function (t, e) {
            return t && 0 < (t = this.X(t)).length ? String(t[0]) : e;
          }),
          (t.toString = function () {
            if (this.c) return this.c;
            if (!this.a) return "";
            for (var t = [], e = this.a.Y(), n = 0; n < e.length; n++)
              for (
                var i = e[n],
                  r = encodeURIComponent(String(i)),
                  i = this.X(i),
                  o = 0;
                o < i.length;
                o++
              ) {
                var a = r;
                "" !== i[o] && (a += "=" + encodeURIComponent(String(i[o]))),
                  t.push(a);
              }
            return (this.c = t.join("&"));
          });
        var Jn = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\u000b",
          },
          Yn = /\uffff/.test("￿")
            ? /[\\"\x00-\x1f\x7f-\uffff]/g
            : /[\\"\x00-\x1f\x7f-\xff]/g;
        function zn(t, e) {
          e.push(
            '"',
            t.replace(Yn, function (t) {
              var e = Jn[t];
              return (
                e ||
                  ((e =
                    "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1)),
                  (Jn[t] = e)),
                e
              );
            }),
            '"'
          );
        }
        function $n() {
          var t = mi();
          return (Ht && $t && 11 == $t) || /Edge\/\d+/.test(t);
        }
        function Zn() {
          return (
            (l.window && l.window.location.href) ||
            (self && self.location && self.location.href) ||
            ""
          );
        }
        function Qn(t, e) {
          e = e || l.window;
          var n = "about:blank";
          t && (n = St(Ct(t) || Pt)), (e.location.href = n);
        }
        function ti(t) {
          return !!(
            (t = (t || mi()).toLowerCase()).match(/android/) ||
            t.match(/webos/) ||
            t.match(/iphone|ipad|ipod/) ||
            t.match(/blackberry/) ||
            t.match(/windows phone/) ||
            t.match(/iemobile/)
          );
        }
        function ei(t) {
          t = t || l.window;
          try {
            t.close();
          } catch (t) {}
        }
        function ni(t, e, n) {
          var i = Math.floor(1e9 * Math.random()).toString();
          (e = e || 500), (n = n || 600);
          var r = (window.screen.availHeight - n) / 2,
            o = (window.screen.availWidth - e) / 2;
          for (a in ((e = {
            width: e,
            height: n,
            top: 0 < r ? r : 0,
            left: 0 < o ? o : 0,
            location: !0,
            resizable: !0,
            statusbar: !0,
            toolbar: !1,
          }),
          (n = mi().toLowerCase()),
          i && ((e.target = i), it(n, "crios/") && (e.target = "_blank")),
          di(mi()) == li &&
            ((t = t || "http://localhost"), (e.scrollbars = !0)),
          (n = t || ""),
          (t = e) || (t = {}),
          (i = window),
          (e =
            n instanceof kt
              ? n
              : Ct(void 0 !== n.href ? n.href : String(n)) || Pt),
          (n = t.target || n.target),
          (r = []),
          t))
            switch (a) {
              case "width":
              case "height":
              case "top":
              case "left":
                r.push(a + "=" + t[a]);
                break;
              case "target":
              case "noopener":
              case "noreferrer":
                break;
              default:
                r.push(a + "=" + (t[a] ? 1 : 0));
            }
          var a = r.join(",");
          if (
            (((at("iPhone") && !at("iPod") && !at("iPad")) ||
              at("iPad") ||
              at("iPod")) &&
            i.navigator &&
            i.navigator.standalone &&
            n &&
            "_self" != n
              ? (ft((a = oe(document, "A")), "HTMLAnchorElement"),
                (e = e instanceof kt ? e : Rt(e)),
                (a.href = St(e)),
                a.setAttribute("target", n),
                t.noreferrer && a.setAttribute("rel", "noreferrer"),
                (t = document.createEvent("MouseEvent")).initMouseEvent(
                  "click",
                  !0,
                  !0,
                  i,
                  1
                ),
                a.dispatchEvent(t),
                (a = {}))
              : t.noreferrer
              ? ((a = Mt("", i, n, a)),
                (t = St(e)),
                a &&
                  (Gt && it(t, ";") && (t = "'" + t.replace(/'/g, "%27") + "'"),
                  (a.opener = null),
                  (t =
                    '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' +
                    Ut(t) +
                    '">'),
                  (t = new Lt((t = (i = bt()) ? i.createHTML(t) : t), 0, xt)),
                  (i = a.document)) &&
                  (i.write(
                    (o = t) instanceof Lt && o.constructor === Lt
                      ? o.a
                      : (D(
                          "expected object of type SafeHtml, got '" +
                            o +
                            "' of type " +
                            d(o)
                        ),
                        "type_error:SafeHtml")
                  ),
                  i.close()))
              : (a = Mt(e, i, n, a)) && t.noopener && (a.opener = null),
            a)
          )
            try {
              a.focus();
            } catch (t) {}
          return a;
        }
        var ii = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          ri = /^[^@]+@[^@]+$/;
        function oi() {
          var e = null;
          return new le(function (t) {
            "complete" == l.document.readyState
              ? t()
              : ((e = function () {
                  t();
                }),
                Qe(window, "load", e));
          }).o(function (t) {
            throw (tn(window, "load", e), t);
          });
        }
        function ai(t) {
          return (
            (t = t || mi()),
            !(
              ("file:" !== Ii() && "ionic:" !== Ii()) ||
              !t.toLowerCase().match(/iphone|ipad|ipod|android/)
            )
          );
        }
        function si() {
          var t = l.window;
          try {
            return t && t != t.top;
          } catch (t) {
            return;
          }
        }
        function ui() {
          return (
            void 0 !== l.WorkerGlobalScope &&
            "function" == typeof l.importScripts
          );
        }
        function ci() {
          return Gl.default.INTERNAL.hasOwnProperty("reactNative")
            ? "ReactNative"
            : Gl.default.INTERNAL.hasOwnProperty("node")
            ? "Node"
            : ui()
            ? "Worker"
            : "Browser";
        }
        function hi() {
          var t = ci();
          return "ReactNative" === t || "Node" === t;
        }
        var li = "Firefox",
          fi = "Chrome";
        function di(t) {
          var e = t.toLowerCase();
          return it(e, "opera/") || it(e, "opr/") || it(e, "opios/")
            ? "Opera"
            : it(e, "iemobile")
            ? "IEMobile"
            : it(e, "msie") || it(e, "trident/")
            ? "IE"
            : it(e, "edge/")
            ? "Edge"
            : it(e, "firefox/")
            ? li
            : it(e, "silk/")
            ? "Silk"
            : it(e, "blackberry")
            ? "Blackberry"
            : it(e, "webos")
            ? "Webos"
            : !it(e, "safari/") ||
              it(e, "chrome/") ||
              it(e, "crios/") ||
              it(e, "android")
            ? (!it(e, "chrome/") && !it(e, "crios/")) || it(e, "edge/")
              ? it(e, "android")
                ? "Android"
                : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) &&
                  2 == t.length
                ? t[1]
                : "Other"
              : fi
            : "Safari";
        }
        var pi = { md: "FirebaseCore-web", od: "FirebaseUI-web" };
        function vi(t, e) {
          e = e || [];
          var n,
            i = [],
            r = {};
          for (n in pi) r[pi[n]] = !0;
          for (n = 0; n < e.length; n++)
            void 0 !== r[e[n]] && (delete r[e[n]], i.push(e[n]));
          return (
            i.sort(),
            (e = i).length || (e = ["FirebaseCore-web"]),
            "Browser" === (i = ci())
              ? (i = di((r = mi())))
              : "Worker" === i && (i = di((r = mi())) + "-" + i),
            i + "/JsCore/" + t + "/" + e.join(",")
          );
        }
        function mi() {
          return (l.navigator && l.navigator.userAgent) || "";
        }
        function gi(t, e) {
          (t = t.split(".")), (e = e || l);
          for (
            var n = 0;
            n < t.length && "object" == typeof e && null != e;
            n++
          )
            e = e[t[n]];
          return n != t.length ? void 0 : e;
        }
        function bi() {
          try {
            var t = l.localStorage,
              e = Si();
            if (t)
              return t.setItem(e, "1"), t.removeItem(e), !$n() || !!l.indexedDB;
          } catch (t) {
            return ui() && !!l.indexedDB;
          }
          return !1;
        }
        function yi() {
          return (
            (wi() || "chrome-extension:" === Ii() || ai()) &&
            !hi() &&
            bi() &&
            !ui()
          );
        }
        function wi() {
          return "http:" === Ii() || "https:" === Ii();
        }
        function Ii() {
          return (l.location && l.location.protocol) || null;
        }
        function Ti(t) {
          return !ti((t = t || mi())) && di(t) != li;
        }
        function Ei(t) {
          return void 0 === t ? null : Wn(t);
        }
        function Ai(t) {
          var e,
            n = {};
          for (e in t)
            t.hasOwnProperty(e) &&
              null !== t[e] &&
              void 0 !== t[e] &&
              (n[e] = t[e]);
          return n;
        }
        function ki(t) {
          if (null !== t) return JSON.parse(t);
        }
        function Si(t) {
          return t || Math.floor(1e9 * Math.random()).toString();
        }
        function Ni(t) {
          return (
            "Safari" != di((t = t || mi())) &&
            !t.toLowerCase().match(/iphone|ipad|ipod/)
          );
        }
        function _i() {
          var t = l.___jsl;
          if (t && t.H)
            for (var e in t.H)
              if (
                ((t.H[e].r = t.H[e].r || []),
                (t.H[e].L = t.H[e].L || []),
                (t.H[e].r = t.H[e].L.concat()),
                t.CP)
              )
                for (var n = 0; n < t.CP.length; n++) t.CP[n] = null;
        }
        function Oi(t, e) {
          if (e < t) throw Error("Short delay should be less than long delay!");
          (this.a = t),
            (this.c = e),
            (t = mi()),
            (e = ci()),
            (this.b = ti(t) || "ReactNative" === e);
        }
        function Ci() {
          var t = l.document;
          return (
            !t || void 0 === t.visibilityState || "visible" == t.visibilityState
          );
        }
        function Ri() {
          var e = l.document,
            n = null;
          return Ci() || !e
            ? be()
            : new le(function (t) {
                (n = function () {
                  Ci() &&
                    (e.removeEventListener("visibilitychange", n, !1), t());
                }),
                  e.addEventListener("visibilitychange", n, !1);
              }).o(function (t) {
                throw (e.removeEventListener("visibilitychange", n, !1), t);
              });
        }
        function Di(t) {
          try {
            var e = new Date(parseInt(t, 10));
            if (!isNaN(e.getTime()) && !/[^0-9]/.test(t))
              return e.toUTCString();
          } catch (t) {}
          return null;
        }
        function Pi() {
          return gi("fireauth.oauthhelper", l) || gi("fireauth.iframe", l);
        }
        Oi.prototype.get = function () {
          var t = l.navigator;
          return !t ||
            "boolean" != typeof t.onLine ||
            (!wi() &&
              "chrome-extension:" !== Ii() &&
              void 0 === t.connection) ||
            t.onLine
            ? this.b
              ? this.c
              : this.a
            : Math.min(5e3, this.a);
        };
        var Li,
          xi = {};
        function Mi(t) {
          xi[t] ||
            ((xi[t] = !0),
            "undefined" != typeof console &&
              "function" == typeof console.warn &&
              console.warn(t));
        }
        try {
          var ji = {};
          Object.defineProperty(ji, "abcd", {
            configurable: !0,
            enumerable: !0,
            value: 1,
          }),
            Object.defineProperty(ji, "abcd", {
              configurable: !0,
              enumerable: !0,
              value: 2,
            }),
            (Li = 2 == ji.abcd);
        } catch (t) {
          Li = !1;
        }
        function Ui(t, e, n) {
          Li
            ? Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !0,
                value: n,
              })
            : (t[e] = n);
        }
        function Vi(t, e) {
          if (e) for (var n in e) e.hasOwnProperty(n) && Ui(t, n, e[n]);
        }
        function Fi(t) {
          var e = {};
          return Vi(e, t), e;
        }
        function qi(t) {
          var e = t;
          if ("object" == typeof t && null != t)
            for (var n in ((e = "length" in t ? [] : {}), t))
              Ui(e, n, qi(t[n]));
          return e;
        }
        function Hi(t) {
          var e = t && (t[Xi] ? "phone" : null);
          if (!(e && t && t[Wi]))
            throw new T(
              "internal-error",
              "Internal assert: invalid MultiFactorInfo object"
            );
          Ui(this, "uid", t[Wi]), Ui(this, "displayName", t[Gi] || null);
          var n = null;
          Ui(
            this,
            "enrollmentTime",
            (n = t[Bi] ? new Date(t[Bi]).toUTCString() : n)
          ),
            Ui(this, "factorId", e);
        }
        function Ki(t) {
          try {
            var e = new Ji(t);
          } catch (t) {
            e = null;
          }
          return e;
        }
        Hi.prototype.w = function () {
          return {
            uid: this.uid,
            displayName: this.displayName,
            factorId: this.factorId,
            enrollmentTime: this.enrollmentTime,
          };
        };
        var Gi = "displayName",
          Bi = "enrolledAt",
          Wi = "mfaEnrollmentId",
          Xi = "phoneInfo";
        function Ji(t) {
          Hi.call(this, t), Ui(this, "phoneNumber", t[Xi]);
        }
        function Yi(t) {
          var e = {},
            n = t[Qi],
            i = t[er],
            r = t[nr];
          if (
            ((t = Ki(t[tr])),
            !r ||
              (r != $i && r != Zi && !n) ||
              (r == Zi && !i) ||
              (r == zi && !t))
          )
            throw Error("Invalid checkActionCode response!");
          r == Zi
            ? ((e[rr] = n || null), (e[ar] = n || null), (e[ir] = i))
            : ((e[rr] = i || null), (e[ar] = i || null), (e[ir] = n || null)),
            (e[or] = t || null),
            Ui(this, ur, r),
            Ui(this, sr, qi(e));
        }
        w(Ji, Hi),
          (Ji.prototype.w = function () {
            var t = Ji.bb.w.call(this);
            return (t.phoneNumber = this.phoneNumber), t;
          });
        var zi = "REVERT_SECOND_FACTOR_ADDITION",
          $i = "EMAIL_SIGNIN",
          Zi = "VERIFY_AND_CHANGE_EMAIL",
          Qi = "email",
          tr = "mfaInfo",
          er = "newEmail",
          nr = "requestType",
          ir = "email",
          rr = "fromEmail",
          or = "multiFactorInfo",
          ar = "previousEmail",
          sr = "data",
          ur = "operation";
        function cr(t) {
          var e = Nn((t = _n(t)), hr) || null,
            n = Nn(t, lr) || null,
            i = ((i = Nn(t, pr) || null) && mr[i]) || null;
          if (!e || !n || !i)
            throw new T(
              "argument-error",
              hr +
                ", " +
                lr +
                "and " +
                pr +
                " are required in a valid action code URL."
            );
          Vi(this, {
            apiKey: e,
            operation: i,
            code: n,
            continueUrl: Nn(t, fr) || null,
            languageCode: Nn(t, dr) || null,
            tenantId: Nn(t, vr) || null,
          });
        }
        var hr = "apiKey",
          lr = "oobCode",
          fr = "continueUrl",
          dr = "languageCode",
          pr = "mode",
          vr = "tenantId",
          mr = {
            recoverEmail: "RECOVER_EMAIL",
            resetPassword: "PASSWORD_RESET",
            revertSecondFactorAddition: zi,
            signIn: $i,
            verifyAndChangeEmail: Zi,
            verifyEmail: "VERIFY_EMAIL",
          };
        function gr(t) {
          try {
            return new cr(t);
          } catch (t) {
            return null;
          }
        }
        function br(t) {
          if (void 0 === (e = t[Er])) throw new T("missing-continue-uri");
          if ("string" != typeof e || ("string" == typeof e && !e.length))
            throw new T("invalid-continue-uri");
          if (
            ((this.h = e),
            (this.b = this.a = null),
            (this.g = !1),
            (i = t[yr]) && "object" == typeof i)
          ) {
            var e = i[Sr],
              n = i[Ar],
              i = i[kr];
            if ("string" == typeof e && e.length) {
              if (((this.a = e), void 0 !== n && "boolean" != typeof n))
                throw new T(
                  "argument-error",
                  Ar + " property must be a boolean when specified."
                );
              if (
                ((this.g = !!n),
                void 0 !== i &&
                  ("string" != typeof i || ("string" == typeof i && !i.length)))
              )
                throw new T(
                  "argument-error",
                  kr + " property must be a non empty string when specified."
                );
              this.b = i || null;
            } else {
              if (void 0 !== e)
                throw new T(
                  "argument-error",
                  Sr + " property must be a non empty string when specified."
                );
              if (void 0 !== n || void 0 !== i)
                throw new T("missing-android-pkg-name");
            }
          } else if (void 0 !== i)
            throw new T(
              "argument-error",
              yr + " property must be a non null object when specified."
            );
          if (((this.f = null), (e = t[Tr]) && "object" == typeof e)) {
            if ("string" == typeof (e = e[Nr]) && e.length) this.f = e;
            else if (void 0 !== e)
              throw new T(
                "argument-error",
                Nr + " property must be a non empty string when specified."
              );
          } else if (void 0 !== e)
            throw new T(
              "argument-error",
              Tr + " property must be a non null object when specified."
            );
          if (void 0 !== (e = t[Ir]) && "boolean" != typeof e)
            throw new T(
              "argument-error",
              Ir + " property must be a boolean when specified."
            );
          if (
            ((this.c = !!e),
            void 0 !== (t = t[wr]) &&
              ("string" != typeof t || ("string" == typeof t && !t.length)))
          )
            throw new T(
              "argument-error",
              wr + " property must be a non empty string when specified."
            );
          this.i = t || null;
        }
        var yr = "android",
          wr = "dynamicLinkDomain",
          Ir = "handleCodeInApp",
          Tr = "iOS",
          Er = "url",
          Ar = "installApp",
          kr = "minimumVersion",
          Sr = "packageName",
          Nr = "bundleId";
        function _r(t) {
          var e,
            n = {};
          for (e in ((n.continueUrl = t.h),
          (n.canHandleCodeInApp = t.c),
          (n.androidPackageName = t.a) &&
            ((n.androidMinimumVersion = t.b), (n.androidInstallApp = t.g)),
          (n.iOSBundleId = t.f),
          (n.dynamicLinkDomain = t.i),
          n))
            null === n[e] && delete n[e];
          return n;
        }
        var Or = null;
        function Cr(t) {
          var e = [];
          return (
            (function (i, t) {
              function e(t) {
                for (; r < i.length; ) {
                  var e = i.charAt(r++),
                    n = Or[e];
                  if (null != n) return n;
                  if (!/^[\s\xa0]*$/.test(e))
                    throw Error("Unknown base64 encoding at char: " + e);
                }
                return t;
              }
              !(function () {
                if (!Or) {
                  Or = {};
                  for (
                    var t =
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                          ""
                        ),
                      e = ["+/=", "+/", "-_=", "-_.", "-_"],
                      n = 0;
                    n < 5;
                    n++
                  )
                    for (
                      var i = t.concat(e[n].split("")), r = 0;
                      r < i.length;
                      r++
                    ) {
                      var o = i[r];
                      void 0 === Or[o] && (Or[o] = r);
                    }
                }
              })();
              for (var r = 0; ; ) {
                var n = e(-1),
                  o = e(0),
                  a = e(64),
                  s = e(64);
                if (64 === s && -1 === n) break;
                t((n << 2) | (o >> 4)),
                  64 != a &&
                    (t(((o << 4) & 240) | (a >> 2)),
                    64 != s && t(((a << 6) & 192) | s));
              }
            })(t, function (t) {
              e.push(t);
            }),
            e
          );
        }
        function Rr(t) {
          var e = Pr(t);
          if (!(e && e.sub && e.iss && e.aud && e.exp))
            throw Error("Invalid JWT");
          (this.h = t),
            (this.a = e.exp),
            (this.i = e.sub),
            (t = Date.now() / 1e3),
            (this.g = e.iat || (t > this.a ? this.a : t)),
            (this.b =
              e.provider_id ||
              (e.firebase && e.firebase.sign_in_provider) ||
              null),
            (this.f = (e.firebase && e.firebase.tenant) || null),
            (this.c = !!e.is_anonymous || "anonymous" == this.b);
        }
        function Dr(t) {
          try {
            return new Rr(t);
          } catch (t) {
            return null;
          }
        }
        function Pr(t) {
          if (!t) return null;
          if (3 != (t = t.split(".")).length) return null;
          for (var e = (4 - ((t = t[1]).length % 4)) % 4, n = 0; n < e; n++)
            t += ".";
          try {
            var i = Cr(t);
            for (t = [], n = e = 0; e < i.length; ) {
              var r,
                o,
                a,
                s = i[e++];
              s < 128
                ? (t[n++] = String.fromCharCode(s))
                : 191 < s && s < 224
                ? ((r = i[e++]),
                  (t[n++] = String.fromCharCode(((31 & s) << 6) | (63 & r))))
                : 239 < s && s < 365
                ? ((a =
                    (((7 & s) << 18) |
                      ((63 & (r = i[e++])) << 12) |
                      ((63 & (o = i[e++])) << 6) |
                      (63 & i[e++])) -
                    65536),
                  (t[n++] = String.fromCharCode(55296 + (a >> 10))),
                  (t[n++] = String.fromCharCode(56320 + (1023 & a))))
                : ((r = i[e++]),
                  (o = i[e++]),
                  (t[n++] = String.fromCharCode(
                    ((15 & s) << 12) | ((63 & r) << 6) | (63 & o)
                  )));
            }
            return JSON.parse(t.join(""));
          } catch (t) {}
          return null;
        }
        (Rr.prototype.T = function () {
          return this.f;
        }),
          (Rr.prototype.l = function () {
            return this.c;
          }),
          (Rr.prototype.toString = function () {
            return this.h;
          });
        var Lr =
            "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(
              " "
            ),
          xr = ["client_id", "response_type", "scope", "redirect_uri", "state"],
          Mr = {
            nd: { Ja: "locale", va: 700, ua: 600, fa: "facebook.com", Ya: xr },
            pd: { Ja: null, va: 500, ua: 750, fa: "github.com", Ya: xr },
            qd: { Ja: "hl", va: 515, ua: 680, fa: "google.com", Ya: xr },
            wd: { Ja: "lang", va: 485, ua: 705, fa: "twitter.com", Ya: Lr },
            kd: { Ja: "locale", va: 640, ua: 600, fa: "apple.com", Ya: [] },
          };
        function jr(t) {
          for (var e in Mr) if (Mr[e].fa == t) return Mr[e];
          return null;
        }
        function Ur(t) {
          var e = {};
          (e["facebook.com"] = Kr),
            (e["google.com"] = Br),
            (e["github.com"] = Gr),
            (e["twitter.com"] = Wr);
          var n = t && t[Fr];
          try {
            if (n) return new (e[n] || Hr)(t);
            if (void 0 !== t[Vr]) return new qr(t);
          } catch (t) {}
          return null;
        }
        var Vr = "idToken",
          Fr = "providerId";
        function qr(t) {
          var e,
            n = t[Fr];
          if ((n || !t[Vr] || ((e = Dr(t[Vr])) && e.b && (n = e.b)), !n))
            throw Error("Invalid additional user info!");
          (e = !1),
            void 0 !== t.isNewUser
              ? (e = !!t.isNewUser)
              : "identitytoolkit#SignupNewUserResponse" === t.kind && (e = !0),
            Ui(
              this,
              "providerId",
              (n = "anonymous" == n || "custom" == n ? null : n)
            ),
            Ui(this, "isNewUser", e);
        }
        function Hr(t) {
          qr.call(this, t),
            Ui(this, "profile", qi((t = ki(t.rawUserInfo || "{}")) || {}));
        }
        function Kr(t) {
          if ((Hr.call(this, t), "facebook.com" != this.providerId))
            throw Error("Invalid provider ID!");
        }
        function Gr(t) {
          if ((Hr.call(this, t), "github.com" != this.providerId))
            throw Error("Invalid provider ID!");
          Ui(this, "username", (this.profile && this.profile.login) || null);
        }
        function Br(t) {
          if ((Hr.call(this, t), "google.com" != this.providerId))
            throw Error("Invalid provider ID!");
        }
        function Wr(t) {
          if ((Hr.call(this, t), "twitter.com" != this.providerId))
            throw Error("Invalid provider ID!");
          Ui(this, "username", t.screenName || null);
        }
        function Xr(t) {
          var e = Nn((i = _n(t)), "link"),
            n = Nn(_n(e), "link"),
            i = Nn(i, "deep_link_id");
          return Nn(_n(i), "link") || i || n || e || t;
        }
        function Jr(t, e) {
          if (!t && !e)
            throw new T(
              "internal-error",
              "Internal assert: no raw session string available"
            );
          if (t && e)
            throw new T(
              "internal-error",
              "Internal assert: unable to determine the session type"
            );
          (this.a = t || null),
            (this.b = e || null),
            (this.type = this.a ? Yr : zr);
        }
        w(Hr, qr), w(Kr, Hr), w(Gr, Hr), w(Br, Hr), w(Wr, Hr);
        var Yr = "enroll",
          zr = "signin";
        function $r() {}
        function Zr(t, n) {
          return t
            .then(function (t) {
              if (t[qa]) {
                var e = Dr(t[qa]);
                if (!e || n != e.i) throw new T("user-mismatch");
                return t;
              }
              throw new T("user-mismatch");
            })
            .o(function (t) {
              throw t && t.code && t.code == k + "user-not-found"
                ? new T("user-mismatch")
                : t;
            });
        }
        function Qr(t, e) {
          if (!e)
            throw new T("internal-error", "failed to construct a credential");
          (this.a = e), Ui(this, "providerId", t), Ui(this, "signInMethod", t);
        }
        function to(t) {
          return { pendingToken: t.a, requestUri: "http://localhost" };
        }
        function eo(t) {
          if (
            t &&
            t.providerId &&
            t.signInMethod &&
            0 == t.providerId.indexOf("saml.") &&
            t.pendingToken
          )
            try {
              return new Qr(t.providerId, t.pendingToken);
            } catch (t) {}
          return null;
        }
        function no(t, e, n) {
          if (((this.a = null), e.idToken || e.accessToken))
            e.idToken && Ui(this, "idToken", e.idToken),
              e.accessToken && Ui(this, "accessToken", e.accessToken),
              e.nonce && !e.pendingToken && Ui(this, "nonce", e.nonce),
              e.pendingToken && (this.a = e.pendingToken);
          else {
            if (!e.oauthToken || !e.oauthTokenSecret)
              throw new T("internal-error", "failed to construct a credential");
            Ui(this, "accessToken", e.oauthToken),
              Ui(this, "secret", e.oauthTokenSecret);
          }
          Ui(this, "providerId", t), Ui(this, "signInMethod", n);
        }
        function io(t) {
          var e = {};
          return (
            t.idToken && (e.id_token = t.idToken),
            t.accessToken && (e.access_token = t.accessToken),
            t.secret && (e.oauth_token_secret = t.secret),
            (e.providerId = t.providerId),
            t.nonce && !t.a && (e.nonce = t.nonce),
            (e = {
              postBody: Fn(e).toString(),
              requestUri: "http://localhost",
            }),
            t.a && (delete e.postBody, (e.pendingToken = t.a)),
            e
          );
        }
        function ro(t) {
          if (t && t.providerId && t.signInMethod) {
            var e = {
              idToken: t.oauthIdToken,
              accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken,
              oauthTokenSecret: t.oauthTokenSecret,
              oauthToken: t.oauthTokenSecret && t.oauthAccessToken,
              nonce: t.nonce,
              pendingToken: t.pendingToken,
            };
            try {
              return new no(t.providerId, e, t.signInMethod);
            } catch (t) {}
          }
          return null;
        }
        function oo(t, e) {
          (this.Qc = e || []),
            Vi(this, { providerId: t, isOAuthProvider: !0 }),
            (this.Jb = {}),
            (this.qb = (jr(t) || {}).Ja || null),
            (this.pb = null);
        }
        function ao(t) {
          if ("string" != typeof t || 0 != t.indexOf("saml."))
            throw new T(
              "argument-error",
              'SAML provider IDs must be prefixed with "saml."'
            );
          oo.call(this, t, []);
        }
        function so(t) {
          oo.call(this, t, xr), (this.a = []);
        }
        function uo() {
          so.call(this, "facebook.com");
        }
        function co(t) {
          if (!t)
            throw new T(
              "argument-error",
              "credential failed: expected 1 argument (the OAuth access token)."
            );
          var e = t;
          return (
            m(t) && (e = t.accessToken), new uo().credential({ accessToken: e })
          );
        }
        function ho() {
          so.call(this, "github.com");
        }
        function lo(t) {
          if (!t)
            throw new T(
              "argument-error",
              "credential failed: expected 1 argument (the OAuth access token)."
            );
          var e = t;
          return (
            m(t) && (e = t.accessToken), new ho().credential({ accessToken: e })
          );
        }
        function fo() {
          so.call(this, "google.com"), this.Ca("profile");
        }
        function po(t, e) {
          var n = t;
          return (
            m(t) && ((n = t.idToken), (e = t.accessToken)),
            new fo().credential({ idToken: n, accessToken: e })
          );
        }
        function vo() {
          oo.call(this, "twitter.com", Lr);
        }
        function mo(t, e) {
          var n = t;
          if (
            !(n = m(n) ? n : { oauthToken: t, oauthTokenSecret: e })
              .oauthToken ||
            !n.oauthTokenSecret
          )
            throw new T(
              "argument-error",
              "credential failed: expected 2 arguments (the OAuth access token and secret)."
            );
          return new no("twitter.com", n, "twitter.com");
        }
        function go(t, e, n) {
          (this.a = t),
            (this.f = e),
            Ui(this, "providerId", "password"),
            Ui(
              this,
              "signInMethod",
              n === yo.EMAIL_LINK_SIGN_IN_METHOD
                ? yo.EMAIL_LINK_SIGN_IN_METHOD
                : yo.EMAIL_PASSWORD_SIGN_IN_METHOD
            );
        }
        function bo(t) {
          return t && t.email && t.password
            ? new go(t.email, t.password, t.signInMethod)
            : null;
        }
        function yo() {
          Vi(this, { providerId: "password", isOAuthProvider: !1 });
        }
        function wo(t, e) {
          if (!(e = Io(e)))
            throw new T("argument-error", "Invalid email link!");
          return new go(t, e.code, yo.EMAIL_LINK_SIGN_IN_METHOD);
        }
        function Io(t) {
          return (t = gr((t = Xr(t)))) && t.operation === $i ? t : null;
        }
        function To(t) {
          if (!((t.fb && t.eb) || (t.La && t.ea)))
            throw new T("internal-error");
          (this.a = t),
            Ui(this, "providerId", "phone"),
            (this.fa = "phone"),
            Ui(this, "signInMethod", "phone");
        }
        function Eo(e) {
          if (
            e &&
            "phone" === e.providerId &&
            ((e.verificationId && e.verificationCode) ||
              (e.temporaryProof && e.phoneNumber))
          ) {
            var n = {};
            return (
              V(
                [
                  "verificationId",
                  "verificationCode",
                  "temporaryProof",
                  "phoneNumber",
                ],
                function (t) {
                  e[t] && (n[t] = e[t]);
                }
              ),
              new To(n)
            );
          }
          return null;
        }
        function Ao(t) {
          return t.a.La && t.a.ea
            ? { temporaryProof: t.a.La, phoneNumber: t.a.ea }
            : { sessionInfo: t.a.fb, code: t.a.eb };
        }
        function ko(t) {
          try {
            this.a = t || Gl.default.auth();
          } catch (t) {
            throw new T(
              "argument-error",
              "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp()."
            );
          }
          Vi(this, { providerId: "phone", isOAuthProvider: !1 });
        }
        function So(t, e) {
          if (!t) throw new T("missing-verification-id");
          if (!e) throw new T("missing-verification-code");
          return new To({ fb: t, eb: e });
        }
        function No(t) {
          if (t.temporaryProof && t.phoneNumber)
            return new To({ La: t.temporaryProof, ea: t.phoneNumber });
          var e = t && t.providerId;
          if (!e || "password" === e) return null;
          var n = t && t.oauthAccessToken,
            i = t && t.oauthTokenSecret,
            r = t && t.nonce,
            o = t && t.oauthIdToken,
            a = t && t.pendingToken;
          try {
            switch (e) {
              case "google.com":
                return po(o, n);
              case "facebook.com":
                return co(n);
              case "github.com":
                return lo(n);
              case "twitter.com":
                return mo(n, i);
              default:
                return n || i || o || a
                  ? a
                    ? 0 == e.indexOf("saml.")
                      ? new Qr(e, a)
                      : new no(
                          e,
                          {
                            pendingToken: a,
                            idToken: t.oauthIdToken,
                            accessToken: t.oauthAccessToken,
                          },
                          e
                        )
                    : new so(e).credential({
                        idToken: o,
                        accessToken: n,
                        rawNonce: r,
                      })
                  : null;
            }
          } catch (t) {
            return null;
          }
        }
        function _o(t) {
          if (!t.isOAuthProvider) throw new T("invalid-oauth-provider");
        }
        function Oo(t, e, n, i, r, o, a) {
          if (
            ((this.c = t),
            (this.b = e || null),
            (this.g = n || null),
            (this.f = i || null),
            (this.i = o || null),
            (this.h = a || null),
            (this.a = r || null),
            !this.g && !this.a)
          )
            throw new T("invalid-auth-event");
          if (this.g && this.a) throw new T("invalid-auth-event");
          if (this.g && !this.f) throw new T("invalid-auth-event");
        }
        function Co(t) {
          return (t = t || {}).type
            ? new Oo(
                t.type,
                t.eventId,
                t.urlResponse,
                t.sessionId,
                t.error && E(t.error),
                t.postBody,
                t.tenantId
              )
            : null;
        }
        function Ro() {
          (this.b = null), (this.a = []);
        }
        (Jr.prototype.Ha = function () {
          return this.a ? be(this.a) : be(this.b);
        }),
          (Jr.prototype.w = function () {
            return this.type == Yr
              ? { multiFactorSession: { idToken: this.a } }
              : { multiFactorSession: { pendingCredential: this.b } };
          }),
          ($r.prototype.ka = function () {}),
          ($r.prototype.b = function () {}),
          ($r.prototype.c = function () {}),
          ($r.prototype.w = function () {}),
          (Qr.prototype.ka = function (t) {
            return us(t, to(this));
          }),
          (Qr.prototype.b = function (t, e) {
            var n = to(this);
            return (n.idToken = e), cs(t, n);
          }),
          (Qr.prototype.c = function (t, e) {
            return Zr(hs(t, to(this)), e);
          }),
          (Qr.prototype.w = function () {
            return {
              providerId: this.providerId,
              signInMethod: this.signInMethod,
              pendingToken: this.a,
            };
          }),
          (no.prototype.ka = function (t) {
            return us(t, io(this));
          }),
          (no.prototype.b = function (t, e) {
            var n = io(this);
            return (n.idToken = e), cs(t, n);
          }),
          (no.prototype.c = function (t, e) {
            return Zr(hs(t, io(this)), e);
          }),
          (no.prototype.w = function () {
            var t = {
              providerId: this.providerId,
              signInMethod: this.signInMethod,
            };
            return (
              this.idToken && (t.oauthIdToken = this.idToken),
              this.accessToken && (t.oauthAccessToken = this.accessToken),
              this.secret && (t.oauthTokenSecret = this.secret),
              this.nonce && (t.nonce = this.nonce),
              this.a && (t.pendingToken = this.a),
              t
            );
          }),
          (oo.prototype.Ka = function (t) {
            return (this.Jb = ct(t)), this;
          }),
          w(ao, oo),
          w(so, oo),
          (so.prototype.Ca = function (t) {
            return K(this.a, t) || this.a.push(t), this;
          }),
          (so.prototype.Rb = function () {
            return X(this.a);
          }),
          (so.prototype.credential = function (t, e) {
            if (
              !(e = m(t)
                ? {
                    idToken: t.idToken || null,
                    accessToken: t.accessToken || null,
                    nonce: t.rawNonce || null,
                  }
                : { idToken: t || null, accessToken: e || null }).idToken &&
              !e.accessToken
            )
              throw new T(
                "argument-error",
                "credential failed: must provide the ID token and/or the access token."
              );
            return new no(this.providerId, e, this.providerId);
          }),
          w(uo, so),
          Ui(uo, "PROVIDER_ID", "facebook.com"),
          Ui(uo, "FACEBOOK_SIGN_IN_METHOD", "facebook.com"),
          w(ho, so),
          Ui(ho, "PROVIDER_ID", "github.com"),
          Ui(ho, "GITHUB_SIGN_IN_METHOD", "github.com"),
          w(fo, so),
          Ui(fo, "PROVIDER_ID", "google.com"),
          Ui(fo, "GOOGLE_SIGN_IN_METHOD", "google.com"),
          w(vo, oo),
          Ui(vo, "PROVIDER_ID", "twitter.com"),
          Ui(vo, "TWITTER_SIGN_IN_METHOD", "twitter.com"),
          (go.prototype.ka = function (t) {
            return this.signInMethod == yo.EMAIL_LINK_SIGN_IN_METHOD
              ? Bs(t, bs, { email: this.a, oobCode: this.f })
              : Bs(t, Fs, { email: this.a, password: this.f });
          }),
          (go.prototype.b = function (t, e) {
            return this.signInMethod == yo.EMAIL_LINK_SIGN_IN_METHOD
              ? Bs(t, ys, { idToken: e, email: this.a, oobCode: this.f })
              : Bs(t, Ds, { idToken: e, email: this.a, password: this.f });
          }),
          (go.prototype.c = function (t, e) {
            return Zr(this.ka(t), e);
          }),
          (go.prototype.w = function () {
            return {
              email: this.a,
              password: this.f,
              signInMethod: this.signInMethod,
            };
          }),
          Vi(yo, { PROVIDER_ID: "password" }),
          Vi(yo, { EMAIL_LINK_SIGN_IN_METHOD: "emailLink" }),
          Vi(yo, { EMAIL_PASSWORD_SIGN_IN_METHOD: "password" }),
          (To.prototype.ka = function (t) {
            return t.gb(Ao(this));
          }),
          (To.prototype.b = function (t, e) {
            var n = Ao(this);
            return (n.idToken = e), Bs(t, Hs, n);
          }),
          (To.prototype.c = function (t, e) {
            var n = Ao(this);
            return (n.operation = "REAUTH"), Zr((t = Bs(t, Ks, n)), e);
          }),
          (To.prototype.w = function () {
            var t = { providerId: "phone" };
            return (
              this.a.fb && (t.verificationId = this.a.fb),
              this.a.eb && (t.verificationCode = this.a.eb),
              this.a.La && (t.temporaryProof = this.a.La),
              this.a.ea && (t.phoneNumber = this.a.ea),
              t
            );
          }),
          (ko.prototype.gb = function (i, r) {
            var o = this.a.a;
            return be(r.verify()).then(function (e) {
              if ("string" != typeof e)
                throw new T(
                  "argument-error",
                  "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string."
                );
              if ("recaptcha" !== r.type)
                throw new T(
                  "argument-error",
                  'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.'
                );
              var t = m(i) ? i.session : null,
                n = m(i) ? i.phoneNumber : i;
              return (t =
                t && t.type == Yr
                  ? t.Ha().then(function (t) {
                      return Bs(o, Ls, {
                        idToken: t,
                        phoneEnrollmentInfo: {
                          phoneNumber: n,
                          recaptchaToken: e,
                        },
                      }).then(function (t) {
                        return t.phoneSessionInfo.sessionInfo;
                      });
                    })
                  : t && t.type == zr
                  ? t.Ha().then(function (t) {
                      return (
                        (t = {
                          mfaPendingCredential: t,
                          mfaEnrollmentId:
                            (i.multiFactorHint && i.multiFactorHint.uid) ||
                            i.multiFactorUid,
                          phoneSignInInfo: { recaptchaToken: e },
                        }),
                        Bs(o, xs, t).then(function (t) {
                          return t.phoneResponseInfo.sessionInfo;
                        })
                      );
                    })
                  : Bs(o, Cs, { phoneNumber: n, recaptchaToken: e })).then(
                function (t) {
                  return "function" == typeof r.reset && r.reset(), t;
                },
                function (t) {
                  throw ("function" == typeof r.reset && r.reset(), t);
                }
              );
            });
          }),
          Vi(ko, { PROVIDER_ID: "phone" }),
          Vi(ko, { PHONE_SIGN_IN_METHOD: "phone" }),
          (Oo.prototype.getUid = function () {
            var t = [];
            return (
              t.push(this.c),
              this.b && t.push(this.b),
              this.f && t.push(this.f),
              this.h && t.push(this.h),
              t.join("-")
            );
          }),
          (Oo.prototype.T = function () {
            return this.h;
          }),
          (Oo.prototype.w = function () {
            return {
              type: this.c,
              eventId: this.b,
              urlResponse: this.g,
              sessionId: this.f,
              postBody: this.i,
              tenantId: this.h,
              error: this.a && this.a.w(),
            };
          });
        var Do,
          Po = null;
        function Lo(t) {
          var e = "unauthorized-domain",
            n = void 0,
            i = _n(t);
          (t = i.a),
            "chrome-extension" == (i = i.c)
              ? (n = jt(
                  "This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",
                  t
                ))
              : "http" == i || "https" == i
              ? (n = jt(
                  "This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",
                  t
                ))
              : (e = "operation-not-supported-in-this-environment"),
            T.call(this, e, n);
        }
        function xo(t, e, n) {
          T.call(this, t, n),
            (t = e || {}).Kb && Ui(this, "email", t.Kb),
            t.ea && Ui(this, "phoneNumber", t.ea),
            t.credential && Ui(this, "credential", t.credential),
            t.$b && Ui(this, "tenantId", t.$b);
        }
        function Mo(t) {
          if (t.code) {
            var e = t.code || "";
            0 == e.indexOf(k) && (e = e.substring(k.length));
            var n = { credential: No(t), $b: t.tenantId };
            if (t.email) n.Kb = t.email;
            else if (t.phoneNumber) n.ea = t.phoneNumber;
            else if (!n.credential) return new T(e, t.message || void 0);
            return new xo(e, n, t.message);
          }
          return null;
        }
        function jo() {}
        function Uo(t) {
          return t.c || (t.c = t.b());
        }
        function Vo() {}
        function Fo(t) {
          if (
            t.f ||
            "undefined" != typeof XMLHttpRequest ||
            "undefined" == typeof ActiveXObject
          )
            return t.f;
          for (
            var e = [
                "MSXML2.XMLHTTP.6.0",
                "MSXML2.XMLHTTP.3.0",
                "MSXML2.XMLHTTP",
                "Microsoft.XMLHTTP",
              ],
              n = 0;
            n < e.length;
            n++
          ) {
            var i = e[n];
            try {
              return new ActiveXObject(i), (t.f = i);
            } catch (t) {}
          }
          throw Error(
            "Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"
          );
        }
        function qo() {}
        function Ho() {
          (this.a = new XDomainRequest()),
            (this.readyState = 0),
            (this.onreadystatechange = null),
            (this.responseType = this.responseText = this.response = ""),
            (this.status = -1),
            (this.statusText = ""),
            (this.a.onload = b(this.qc, this)),
            (this.a.onerror = b(this.Tb, this)),
            (this.a.onprogress = b(this.rc, this)),
            (this.a.ontimeout = b(this.vc, this));
        }
        function Ko(t, e) {
          (t.readyState = e), t.onreadystatechange && t.onreadystatechange();
        }
        function Go(t, e, n) {
          this.reset(t, e, n, void 0, void 0);
        }
        function Bo(t) {
          (this.f = t), (this.b = this.c = this.a = null);
        }
        function Wo(t, e) {
          (this.name = t), (this.value = e);
        }
        w(Lo, T),
          w(xo, T),
          (xo.prototype.w = function () {
            var t = { code: this.code, message: this.message };
            this.email && (t.email = this.email),
              this.phoneNumber && (t.phoneNumber = this.phoneNumber),
              this.tenantId && (t.tenantId = this.tenantId);
            var e = this.credential && this.credential.w();
            return e && lt(t, e), t;
          }),
          (xo.prototype.toJSON = function () {
            return this.w();
          }),
          (jo.prototype.c = null),
          w(Vo, jo),
          (Vo.prototype.a = function () {
            var t = Fo(this);
            return t ? new ActiveXObject(t) : new XMLHttpRequest();
          }),
          (Vo.prototype.b = function () {
            var t = {};
            return Fo(this) && ((t[0] = !0), (t[1] = !0)), t;
          }),
          (Do = new Vo()),
          w(qo, jo),
          (qo.prototype.a = function () {
            var t = new XMLHttpRequest();
            if ("withCredentials" in t) return t;
            if ("undefined" != typeof XDomainRequest) return new Ho();
            throw Error("Unsupported browser");
          }),
          (qo.prototype.b = function () {
            return {};
          }),
          ((t = Ho.prototype).open = function (t, e, n) {
            if (null != n && !n)
              throw Error("Only async requests are supported.");
            this.a.open(t, e);
          }),
          (t.send = function (t) {
            if (t) {
              if ("string" != typeof t)
                throw Error("Only string data is supported");
              this.a.send(t);
            } else this.a.send();
          }),
          (t.abort = function () {
            this.a.abort();
          }),
          (t.setRequestHeader = function () {}),
          (t.getResponseHeader = function (t) {
            return "content-type" == t.toLowerCase() ? this.a.contentType : "";
          }),
          (t.qc = function () {
            (this.status = 200),
              (this.response = this.responseText = this.a.responseText),
              Ko(this, 4);
          }),
          (t.Tb = function () {
            (this.status = 500),
              (this.response = this.responseText = ""),
              Ko(this, 4);
          }),
          (t.vc = function () {
            this.Tb();
          }),
          (t.rc = function () {
            (this.status = 200), Ko(this, 1);
          }),
          (t.getAllResponseHeaders = function () {
            return "content-type: " + this.a.contentType;
          }),
          (Go.prototype.a = null),
          (Go.prototype.reset = function (t, e, n, i, r) {
            delete this.a;
          }),
          (Wo.prototype.toString = function () {
            return this.name;
          });
        var Xo = new Wo("SEVERE", 1e3),
          Jo = new Wo("WARNING", 900),
          Yo = new Wo("CONFIG", 700),
          zo = new Wo("FINE", 500);
        Bo.prototype.log = function (t, e, n) {
          if (
            t.value >=
            (function t(e) {
              return (
                e.c ||
                (e.a ? t(e.a) : (D("Root logger has no level set."), null))
              );
            })(this).value
          )
            for (
              v(e) && (e = e()),
                t = new Go(t, String(e), this.f),
                n && (t.a = n),
                n = this;
              n;

            )
              n = n.a;
        };
        var $o,
          Zo = {},
          Qo = null;
        function ta(t) {
          var e, n, i;
          return (
            Qo || ((Qo = new Bo("")), ((Zo[""] = Qo).c = Yo)),
            (e = Zo[t]) ||
              ((e = new Bo(t)),
              (i = t.lastIndexOf(".")),
              (n = t.substr(i + 1)),
              (i = ta(t.substr(0, i))).b || (i.b = {}),
              ((i.b[n] = e).a = i),
              (Zo[t] = e)),
            e
          );
        }
        function ea(t, e) {
          t && t.log(zo, e, void 0);
        }
        function na(t) {
          this.f = t;
        }
        function ia(t) {
          hn.call(this),
            (this.u = t),
            (this.h = void 0),
            (this.readyState = ra),
            (this.status = 0),
            (this.responseType =
              this.responseText =
              this.response =
              this.statusText =
                ""),
            (this.onreadystatechange = null),
            (this.l = new Headers()),
            (this.b = null),
            (this.s = "GET"),
            (this.f = ""),
            (this.a = !1),
            (this.i = ta("goog.net.FetchXmlHttp")),
            (this.m = this.c = this.g = null);
        }
        w(na, jo),
          (na.prototype.a = function () {
            return new ia(this.f);
          }),
          (na.prototype.b =
            (($o = {}),
            function () {
              return $o;
            })),
          w(ia, hn);
        var ra = 0;
        function oa(t) {
          t.c.read().then(t.pc.bind(t)).catch(t.Va.bind(t));
        }
        function aa(t) {
          (t.readyState = 4), (t.g = null), (t.c = null), (t.m = null), sa(t);
        }
        function sa(t) {
          t.onreadystatechange && t.onreadystatechange.call(t);
        }
        function ua(t) {
          hn.call(this),
            (this.headers = new bn()),
            (this.D = t || null),
            (this.c = !1),
            (this.C = this.a = null),
            (this.h = this.P = this.l = ""),
            (this.f = this.N = this.i = this.J = !1),
            (this.g = 0),
            (this.s = null),
            (this.m = ca),
            (this.u = this.S = !1);
        }
        ((t = ia.prototype).open = function (t, e) {
          if (this.readyState != ra)
            throw (this.abort(), Error("Error reopening a connection"));
          (this.s = t), (this.f = e), (this.readyState = 1), sa(this);
        }),
          (t.send = function (t) {
            if (1 != this.readyState)
              throw (this.abort(), Error("need to call open() first. "));
            this.a = !0;
            var e = {
              headers: this.l,
              method: this.s,
              credentials: this.h,
              cache: void 0,
            };
            t && (e.body = t),
              this.u
                .fetch(new Request(this.f, e))
                .then(this.uc.bind(this), this.Va.bind(this));
          }),
          (t.abort = function () {
            (this.response = this.responseText = ""),
              (this.l = new Headers()),
              (this.status = 0),
              this.c && this.c.cancel("Request was aborted."),
              1 <= this.readyState &&
                this.a &&
                4 != this.readyState &&
                ((this.a = !1), aa(this)),
              (this.readyState = ra);
          }),
          (t.uc = function (t) {
            this.a &&
              ((this.g = t),
              this.b ||
                ((this.status = this.g.status),
                (this.statusText = this.g.statusText),
                (this.b = t.headers),
                (this.readyState = 2),
                sa(this)),
              this.a &&
                ((this.readyState = 3),
                sa(this),
                this.a &&
                  ("arraybuffer" === this.responseType
                    ? t
                        .arrayBuffer()
                        .then(this.sc.bind(this), this.Va.bind(this))
                    : void 0 !== l.ReadableStream && "body" in t
                    ? ((this.response = this.responseText = ""),
                      (this.c = t.body.getReader()),
                      (this.m = new TextDecoder()),
                      oa(this))
                    : t.text().then(this.tc.bind(this), this.Va.bind(this)))));
          }),
          (t.pc = function (t) {
            var e;
            this.a &&
              ((e = this.m.decode(t.value || new Uint8Array(0), {
                stream: !t.done,
              })) && (this.response = this.responseText += e),
              (t.done ? aa : sa)(this),
              3 == this.readyState && oa(this));
          }),
          (t.tc = function (t) {
            this.a && ((this.response = this.responseText = t), aa(this));
          }),
          (t.sc = function (t) {
            this.a && ((this.response = t), aa(this));
          }),
          (t.Va = function (t) {
            var e = this.i;
            e &&
              e.log(
                Jo,
                "Failed to fetch url " + this.f,
                t instanceof Error ? t : Error(t)
              ),
              this.a && aa(this);
          }),
          (t.setRequestHeader = function (t, e) {
            this.l.append(t, e);
          }),
          (t.getResponseHeader = function (t) {
            return this.b
              ? this.b.get(t.toLowerCase()) || ""
              : ((t = this.i) &&
                  t.log(
                    Jo,
                    "Attempting to get response header but no headers have been received for url: " +
                      this.f,
                    void 0
                  ),
                "");
          }),
          (t.getAllResponseHeaders = function () {
            if (!this.b)
              return (
                (t = this.i) &&
                  t.log(
                    Jo,
                    "Attempting to get all response headers but no headers have been received for url: " +
                      this.f,
                    void 0
                  ),
                ""
              );
            for (var t = [], e = this.b.entries(), n = e.next(); !n.done; )
              (n = n.value), t.push(n[0] + ": " + n[1]), (n = e.next());
            return t.join("\r\n");
          }),
          Object.defineProperty(ia.prototype, "withCredentials", {
            get: function () {
              return "include" === this.h;
            },
            set: function (t) {
              this.h = t ? "include" : "same-origin";
            },
          }),
          w(ua, hn);
        var ca = "";
        ua.prototype.b = ta("goog.net.XhrIo");
        var ha = /^https?$/i,
          la = ["POST", "PUT"];
        function fa(t, e, n, i, r) {
          if (t.a)
            throw Error(
              "[goog.net.XhrIo] Object is active with another request=" +
                t.l +
                "; newUri=" +
                e
            );
          (n = n ? n.toUpperCase() : "GET"),
            (t.l = e),
            (t.h = ""),
            (t.P = n),
            (t.J = !1),
            (t.c = !0),
            (t.a = (t.D || Do).a()),
            (t.C = t.D ? Uo(t.D) : Uo(Do)),
            (t.a.onreadystatechange = b(t.Wb, t));
          try {
            ea(t.b, Ia(t, "Opening Xhr")),
              (t.N = !0),
              t.a.open(n, String(e), !0),
              (t.N = !1);
          } catch (e) {
            return (
              ea(t.b, Ia(t, "Error opening Xhr: " + e.message)), pa(t, e), 0
            );
          }
          e = i || "";
          var o,
            a = new bn(t.headers);
          r &&
            (function (t, e) {
              if (t.forEach && "function" == typeof t.forEach)
                t.forEach(e, void 0);
              else if (p(t) || "string" == typeof t) V(t, e, void 0);
              else
                for (var n = gn(t), i = mn(t), r = i.length, o = 0; o < r; o++)
                  e.call(void 0, i[o], n && n[o], t);
            })(r, function (t, e) {
              a.set(e, t);
            }),
            (r = (function (t) {
              t: {
                for (
                  var e = da,
                    n = t.length,
                    i = "string" == typeof t ? t.split("") : t,
                    r = 0;
                  r < n;
                  r++
                )
                  if (r in i && e.call(void 0, i[r], r, t)) {
                    e = r;
                    break t;
                  }
                e = -1;
              }
              return e < 0 ? null : "string" == typeof t ? t.charAt(e) : t[e];
            })(a.Y())),
            (i = l.FormData && e instanceof l.FormData),
            !K(la, n) ||
              r ||
              i ||
              a.set(
                "Content-Type",
                "application/x-www-form-urlencoded;charset=utf-8"
              ),
            a.forEach(function (t, e) {
              this.a.setRequestHeader(e, t);
            }, t),
            t.m && (t.a.responseType = t.m),
            "withCredentials" in t.a &&
              t.a.withCredentials !== t.S &&
              (t.a.withCredentials = t.S);
          try {
            ba(t),
              0 < t.g &&
                ((t.u =
                  ((o = t.a),
                  Ht &&
                    zt(9) &&
                    "number" == typeof o.timeout &&
                    void 0 !== o.ontimeout)),
                ea(
                  t.b,
                  Ia(
                    t,
                    "Will abort after " + t.g + "ms if incomplete, xhr2 " + t.u
                  )
                ),
                t.u
                  ? ((t.a.timeout = t.g), (t.a.ontimeout = b(t.Ma, t)))
                  : (t.s = pn(t.Ma, t.g, t))),
              ea(t.b, Ia(t, "Sending request")),
              (t.i = !0),
              t.a.send(e),
              (t.i = !1);
          } catch (e) {
            ea(t.b, Ia(t, "Send error: " + e.message)), pa(t, e);
          }
        }
        function da(t) {
          return "content-type" == t.toLowerCase();
        }
        function pa(t, e) {
          (t.c = !1),
            t.a && ((t.f = !0), t.a.abort(), (t.f = !1)),
            (t.h = e),
            va(t),
            ga(t);
        }
        function va(t) {
          t.J ||
            ((t.J = !0), t.dispatchEvent("complete"), t.dispatchEvent("error"));
        }
        function ma(t) {
          if (t.c && void 0 !== h)
            if (t.C[1] && 4 == ya(t) && 2 == wa(t))
              ea(t.b, Ia(t, "Local request error detected and ignored"));
            else if (t.i && 4 == ya(t)) pn(t.Wb, 0, t);
            else if ((t.dispatchEvent("readystatechange"), 4 == ya(t))) {
              ea(t.b, Ia(t, "Request complete")), (t.c = !1);
              try {
                var e,
                  n,
                  i,
                  r,
                  o = wa(t);
                t: switch (o) {
                  case 200:
                  case 201:
                  case 202:
                  case 204:
                  case 206:
                  case 304:
                  case 1223:
                    var a = !0;
                    break t;
                  default:
                    a = !1;
                }
                if (
                  ((e = a) ||
                    ((n = 0 === o) &&
                      (!(r = String(t.l).match(In)[1] || null) &&
                        l.self &&
                        l.self.location &&
                        (r = (i = l.self.location.protocol).substr(
                          0,
                          i.length - 1
                        )),
                      (n = !ha.test(r ? r.toLowerCase() : ""))),
                    (e = n)),
                  e)
                )
                  t.dispatchEvent("complete"), t.dispatchEvent("success");
                else {
                  try {
                    var s = 2 < ya(t) ? t.a.statusText : "";
                  } catch (e) {
                    ea(t.b, "Can not get status: " + e.message), (s = "");
                  }
                  (t.h = s + " [" + wa(t) + "]"), va(t);
                }
              } finally {
                ga(t);
              }
            }
        }
        function ga(t, e) {
          if (t.a) {
            ba(t);
            var n = t.a,
              i = t.C[0] ? a : null;
            (t.a = null), (t.C = null), e || t.dispatchEvent("ready");
            try {
              n.onreadystatechange = i;
            } catch (e) {
              (t = t.b) &&
                t.log(
                  Xo,
                  "Problem encountered resetting onreadystatechange: " +
                    e.message,
                  void 0
                );
            }
          }
        }
        function ba(t) {
          t.a && t.u && (t.a.ontimeout = null),
            t.s && (l.clearTimeout(t.s), (t.s = null));
        }
        function ya(t) {
          return t.a ? t.a.readyState : 0;
        }
        function wa(t) {
          try {
            return 2 < ya(t) ? t.a.status : -1;
          } catch (t) {
            return -1;
          }
        }
        function Ia(t, e) {
          return e + " [" + t.P + " " + t.l + " " + wa(t) + "]";
        }
        function Ta(t) {
          var e = Pa;
          (this.g = []),
            (this.u = e),
            (this.s = t || null),
            (this.f = this.a = !1),
            (this.c = void 0),
            (this.v = this.C = this.i = !1),
            (this.h = 0),
            (this.b = null),
            (this.l = 0);
        }
        function Ea(t, e, n) {
          (t.a = !0), (t.c = n), (t.f = !e), Na(t);
        }
        function Aa(t) {
          if (t.a) {
            if (!t.v) throw new _a();
            t.v = !1;
          }
        }
        function ka(t, e, n, i) {
          t.g.push([e, n, i]), t.a && Na(t);
        }
        function Sa(t) {
          return H(t.g, function (t) {
            return v(t[1]);
          });
        }
        function Na(t) {
          var e;
          t.h &&
            t.a &&
            Sa(t) &&
            ((n = t.h),
            (e = Ra[n]) && (l.clearTimeout(e.a), delete Ra[n]),
            (t.h = 0)),
            t.b && (t.b.l--, delete t.b);
          for (var n = t.c, i = (e = !1); t.g.length && !t.i; ) {
            var r = (a = t.g.shift())[0],
              o = a[1],
              a = a[2];
            if ((r = t.f ? o : r))
              try {
                var s = r.call(a || t.s, n);
                void 0 !== s &&
                  ((t.f = t.f && (s == n || s instanceof Error)),
                  (t.c = n = s)),
                  (O(n) ||
                    ("function" == typeof l.Promise &&
                      n instanceof l.Promise)) &&
                    ((i = !0), (t.i = !0));
              } catch (i) {
                (n = i), (t.f = !0), Sa(t) || (e = !0);
              }
          }
          (t.c = n),
            i &&
              ((s = b(t.m, t, !0)),
              (i = b(t.m, t, !1)),
              n instanceof Ta ? (ka(n, s, i), (n.C = !0)) : n.then(s, i)),
            e && ((n = new Ca(n)), (Ra[n.a] = n), (t.h = n.a));
        }
        function _a() {
          C.call(this);
        }
        function Oa() {
          C.call(this);
        }
        function Ca(t) {
          (this.a = l.setTimeout(b(this.c, this), 0)), (this.b = t);
        }
        ((t = ua.prototype).Ma = function () {
          void 0 !== h &&
            this.a &&
            ((this.h = "Timed out after " + this.g + "ms, aborting"),
            ea(this.b, Ia(this, this.h)),
            this.dispatchEvent("timeout"),
            this.abort(8));
        }),
          (t.abort = function () {
            this.a &&
              this.c &&
              (ea(this.b, Ia(this, "Aborting")),
              (this.c = !1),
              (this.f = !0),
              this.a.abort(),
              (this.f = !1),
              this.dispatchEvent("complete"),
              this.dispatchEvent("abort"),
              ga(this));
          }),
          (t.Da = function () {
            this.a &&
              (this.c &&
                ((this.c = !1), (this.f = !0), this.a.abort(), (this.f = !1)),
              ga(this, !0)),
              ua.bb.Da.call(this);
          }),
          (t.Wb = function () {
            this.ya || (this.N || this.i || this.f ? ma(this) : this.Jc());
          }),
          (t.Jc = function () {
            ma(this);
          }),
          (t.getResponse = function () {
            try {
              if (!this.a) return null;
              if ("response" in this.a) return this.a.response;
              switch (this.m) {
                case ca:
                case "text":
                  return this.a.responseText;
                case "arraybuffer":
                  if ("mozResponseArrayBuffer" in this.a)
                    return this.a.mozResponseArrayBuffer;
              }
              var t = this.b;
              return (
                t &&
                  t.log(
                    Xo,
                    "Response type " +
                      this.m +
                      " is not supported on this browser",
                    void 0
                  ),
                null
              );
            } catch (t) {
              return ea(this.b, "Can not get response: " + t.message), null;
            }
          }),
          (Ta.prototype.cancel = function (t) {
            var e;
            this.a
              ? this.c instanceof Ta && this.c.cancel()
              : (this.b &&
                  ((e = this.b),
                  delete this.b,
                  t ? e.cancel(t) : (e.l--, e.l <= 0 && e.cancel())),
                this.u ? this.u.call(this.s, this) : (this.v = !0),
                this.a || ((t = new Oa()), Aa(this), Ea(this, !1, t)));
          }),
          (Ta.prototype.m = function (t, e) {
            (this.i = !1), Ea(this, t, e);
          }),
          (Ta.prototype.then = function (t, e, n) {
            var i,
              r,
              o = new le(function (t, e) {
                (i = t), (r = e);
              });
            return (
              ka(this, i, function (t) {
                t instanceof Oa ? o.cancel() : r(t);
              }),
              o.then(t, e, n)
            );
          }),
          (Ta.prototype.$goog_Thenable = !0),
          w(_a, C),
          (_a.prototype.message = "Deferred has already fired"),
          (_a.prototype.name = "AlreadyCalledError"),
          w(Oa, C),
          (Oa.prototype.message = "Deferred was canceled"),
          (Oa.prototype.name = "CanceledError"),
          (Ca.prototype.c = function () {
            throw (delete Ra[this.a], this.b);
          });
        var Ra = {};
        function Da(t) {
          var e = document,
            n = wt(t).toString(),
            i = oe(document, "SCRIPT"),
            r = { Xb: i, Ma: void 0 },
            o = new Ta(r),
            a = window.setTimeout(function () {
              La(i, !0);
              var t = new ja(Ma, "Timeout reached for loading script " + n);
              Aa(o), Ea(o, !1, t);
            }, 5e3);
          return (
            (r.Ma = a),
            (i.onload = i.onreadystatechange =
              function () {
                (i.readyState &&
                  "loaded" != i.readyState &&
                  "complete" != i.readyState) ||
                  (La(i, !1, a), Aa(o), Ea(o, !0, null));
              }),
            (i.onerror = function () {
              La(i, !0, a);
              var t = new ja(xa, "Error while loading script " + n);
              Aa(o), Ea(o, !1, t);
            }),
            lt((r = {}), { type: "text/javascript", charset: "UTF-8" }),
            te(i, r),
            (r = t),
            ft((t = i), "HTMLScriptElement"),
            (t.src = wt(r)),
            (r =
              (r = t.ownerDocument && t.ownerDocument.defaultView) && r != l
                ? f(r.document)
                : (s = null === s ? f(l.document) : s)) &&
              t.setAttribute("nonce", r),
            ((e = ((r = e) || document).getElementsByTagName("HEAD")) &&
            0 != e.length
              ? e[0]
              : r.documentElement
            ).appendChild(i),
            o
          );
        }
        function Pa() {
          var t;
          this &&
            this.Xb &&
            (t = this.Xb) &&
            "SCRIPT" == t.tagName &&
            La(t, !0, this.Ma);
        }
        function La(t, e, n) {
          null != n && l.clearTimeout(n),
            (t.onload = a),
            (t.onerror = a),
            (t.onreadystatechange = a),
            e &&
              window.setTimeout(function () {
                t && t.parentNode && t.parentNode.removeChild(t);
              }, 0);
        }
        var xa = 0,
          Ma = 1;
        function ja(t, e) {
          var n = "Jsloader error (code #" + t + ")";
          e && (n += ": " + e), C.call(this, n), (this.code = t);
        }
        function Ua(t) {
          this.f = t;
        }
        function Va(t, e, n) {
          if (
            ((this.c = t),
            (this.l =
              (t = e || {}).secureTokenEndpoint ||
              "https://securetoken.googleapis.com/v1/token"),
            (this.m = t.secureTokenTimeout || Ha),
            (this.g = ct(t.secureTokenHeaders || Ka)),
            (this.h =
              t.firebaseEndpoint ||
              "https://www.googleapis.com/identitytoolkit/v3/relyingparty/"),
            (this.i =
              t.identityPlatformEndpoint ||
              "https://identitytoolkit.googleapis.com/v2/"),
            (this.v = t.firebaseTimeout || Ga),
            (this.a = ct(t.firebaseHeaders || Ba)),
            n &&
              ((this.a["X-Client-Version"] = n),
              (this.g["X-Client-Version"] = n)),
            (n = "Node" == ci()),
            !(n =
              l.XMLHttpRequest ||
              (n &&
                Gl.default.INTERNAL.node &&
                Gl.default.INTERNAL.node.XMLHttpRequest)) && !ui())
          )
            throw new T(
              "internal-error",
              "The XMLHttpRequest compatibility library was not found."
            );
          (this.f = void 0),
            ui()
              ? (this.f = new na(self))
              : hi()
              ? (this.f = new Ua(n))
              : (this.f = new qo()),
            (this.b = null);
        }
        w(ja, C),
          w(Ua, jo),
          (Ua.prototype.a = function () {
            return new this.f();
          }),
          (Ua.prototype.b = function () {
            return {};
          });
        var Fa,
          qa = "idToken",
          Ha = new Oi(3e4, 6e4),
          Ka = { "Content-Type": "application/x-www-form-urlencoded" },
          Ga = new Oi(3e4, 6e4),
          Ba = { "Content-Type": "application/json" };
        function Wa(t, e) {
          e ? (t.a["X-Firebase-Locale"] = e) : delete t.a["X-Firebase-Locale"];
        }
        function Xa(t, e) {
          e &&
            ((t.l = Ja("https://securetoken.googleapis.com/v1/token", e)),
            (t.h = Ja(
              "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
              e
            )),
            (t.i = Ja("https://identitytoolkit.googleapis.com/v2/", e)));
        }
        function Ja(t, e) {
          return (
            (t = _n(t)),
            (e = _n(e.url)),
            (t.f = t.a + t.f),
            En(t, e.c),
            (t.a = e.a),
            An(t, e.g),
            t.toString()
          );
        }
        function Ya(t, e) {
          e
            ? ((t.a["X-Client-Version"] = e), (t.g["X-Client-Version"] = e))
            : (delete t.a["X-Client-Version"], delete t.g["X-Client-Version"]);
        }
        function za(t, e, n, i, r, o, a) {
          var s;
          (t =
            (((s =
              di((s = mi())) == fi &&
              (s = s.match(/\sChrome\/(\d+)/i)) &&
              2 == s.length
                ? parseInt(s[1], 10)
                : null) &&
              s < 30) ||
              (Ht && $t && !(9 < $t))) &&
            !ui()
              ? ((Fa =
                  Fa ||
                  new le(function (t, e) {
                    var n = t,
                      i = e;
                    ((window.gapi || {}).client || {}).request
                      ? n()
                      : ((l[Za] = function () {
                          ((window.gapi || {}).client || {}).request
                            ? n()
                            : i(Error("CORS_UNSUPPORTED"));
                        }),
                        ka(
                          Da(It($a, { onload: Za })),
                          null,
                          function () {
                            i(Error("CORS_UNSUPPORTED"));
                          },
                          void 0
                        ));
                  })),
                b(t.s, t))
              : b(t.u, t))(e, n, i, r, o, a);
        }
        (Va.prototype.T = function () {
          return this.b;
        }),
          (Va.prototype.u = function (t, n, e, i, r, o) {
            if (
              ui() &&
              (void 0 === l.fetch ||
                void 0 === l.Headers ||
                void 0 === l.Request)
            )
              throw new T(
                "operation-not-supported-in-this-environment",
                "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment."
              );
            var a,
              s = new ua(this.f);
            o &&
              ((s.g = Math.max(0, o)),
              (a = setTimeout(function () {
                s.dispatchEvent("timeout");
              }, o))),
              ln(s, "complete", function () {
                a && clearTimeout(a);
                var e = null;
                try {
                  e =
                    JSON.parse(
                      (function (e) {
                        try {
                          return e.a ? e.a.responseText : "";
                        } catch (t) {
                          return (
                            ea(e.b, "Can not get responseText: " + t.message),
                            ""
                          );
                        }
                      })(this)
                    ) || null;
                } catch (t) {
                  e = null;
                }
                n && n(e);
              }),
              fn(s, "ready", function () {
                a && clearTimeout(a), xe(this);
              }),
              fn(s, "timeout", function () {
                a && clearTimeout(a), xe(this), n && n(null);
              }),
              fa(s, t, e, i, r);
          });
        var $a = new dt(
            gt,
            "https://apis.google.com/js/client.js?onload=%{onload}"
          ),
          Za = "__fcb" + Math.floor(1e6 * Math.random()).toString();
        function Qa(t) {
          if ("string" != typeof (t = t.email) || !ri.test(t))
            throw new T("invalid-email");
        }
        function ts(t) {
          "email" in t && Qa(t);
        }
        function es(t) {
          if (!t[qa]) {
            if (t.mfaPendingCredential)
              throw new T("multi-factor-auth-required", null, ct(t));
            throw new T("internal-error");
          }
        }
        function ns(t) {
          if (t.phoneNumber || t.temporaryProof) {
            if (!t.phoneNumber || !t.temporaryProof)
              throw new T("internal-error");
          } else {
            if (!t.sessionInfo) throw new T("missing-verification-id");
            if (!t.code) throw new T("missing-verification-code");
          }
        }
        (Va.prototype.s = function (t, n, i, r, o) {
          var a = this;
          Fa.then(function () {
            window.gapi.client.setApiKey(a.c);
            var e = window.gapi.auth.getToken();
            window.gapi.auth.setToken(null),
              window.gapi.client.request({
                path: t,
                method: i,
                body: r,
                headers: o,
                authType: "none",
                callback: function (t) {
                  window.gapi.auth.setToken(e), n && n(t);
                },
              });
          }).o(function (t) {
            n &&
              n({ error: { message: (t && t.message) || "CORS_UNSUPPORTED" } });
          });
        }),
          (Va.prototype.Ab = function () {
            return Bs(this, Ps, {});
          }),
          (Va.prototype.Cb = function (t, e) {
            return Bs(this, Rs, { idToken: t, email: e });
          }),
          (Va.prototype.Db = function (t, e) {
            return Bs(this, Ds, { idToken: t, password: e });
          });
        var is = { displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL" };
        function rs(t) {
          if (!t.phoneVerificationInfo) throw new T("internal-error");
          if (!t.phoneVerificationInfo.sessionInfo)
            throw new T("missing-verification-id");
          if (!t.phoneVerificationInfo.code)
            throw new T("missing-verification-code");
        }
        function os(t) {
          if (!t.requestUri || (!t.sessionId && !t.postBody && !t.pendingToken))
            throw new T("internal-error");
        }
        function as(t, e) {
          return (
            e.oauthIdToken &&
              e.providerId &&
              0 == e.providerId.indexOf("oidc.") &&
              !e.pendingToken &&
              (t.sessionId
                ? (e.nonce = t.sessionId)
                : t.postBody &&
                  Hn((t = new Un(t.postBody)), "nonce") &&
                  (e.nonce = t.get("nonce"))),
            e
          );
        }
        function ss(t) {
          var e = null;
          if (
            (t.needConfirmation
              ? ((t.code = "account-exists-with-different-credential"),
                (e = Mo(t)))
              : "FEDERATED_USER_ID_ALREADY_LINKED" == t.errorMessage
              ? ((t.code = "credential-already-in-use"), (e = Mo(t)))
              : "EMAIL_EXISTS" == t.errorMessage
              ? ((t.code = "email-already-in-use"), (e = Mo(t)))
              : t.errorMessage && (e = Ws(t.errorMessage)),
            e)
          )
            throw e;
          es(t);
        }
        function us(t, e) {
          return (e.returnIdpCredential = !0), Bs(t, Ms, e);
        }
        function cs(t, e) {
          return (e.returnIdpCredential = !0), Bs(t, Us, e);
        }
        function hs(t, e) {
          return (
            (e.returnIdpCredential = !0), (e.autoCreate = !1), Bs(t, js, e)
          );
        }
        function ls(t) {
          if (!t.oobCode) throw new T("invalid-action-code");
        }
        ((t = Va.prototype).Eb = function (t, i) {
          var r = { idToken: t },
            o = [];
          return (
            st(is, function (t, e) {
              var n = i[e];
              null === n ? o.push(t) : e in i && (r[e] = n);
            }),
            o.length && (r.deleteAttribute = o),
            Bs(this, Rs, r)
          );
        }),
          (t.wb = function (t, e) {
            return (
              lt((t = { requestType: "PASSWORD_RESET", email: t }), e),
              Bs(this, Ss, t)
            );
          }),
          (t.xb = function (t, e) {
            return (
              lt((t = { requestType: "EMAIL_SIGNIN", email: t }), e),
              Bs(this, Es, t)
            );
          }),
          (t.vb = function (t, e) {
            return (
              lt((t = { requestType: "VERIFY_EMAIL", idToken: t }), e),
              Bs(this, As, t)
            );
          }),
          (t.Fb = function (t, e, n) {
            return (
              lt(
                (t = {
                  requestType: "VERIFY_AND_CHANGE_EMAIL",
                  idToken: t,
                  newEmail: e,
                }),
                n
              ),
              Bs(this, ks, t)
            );
          }),
          (t.gb = function (t) {
            return Bs(this, qs, t);
          }),
          (t.ob = function (t, e) {
            return Bs(this, Os, { oobCode: t, newPassword: e });
          }),
          (t.Sa = function (t) {
            return Bs(this, ds, { oobCode: t });
          }),
          (t.kb = function (t) {
            return Bs(this, fs, { oobCode: t });
          });
        var fs = { endpoint: "setAccountInfo", A: ls, Z: "email", B: !0 },
          ds = {
            endpoint: "resetPassword",
            A: ls,
            G: function (t) {
              var e = t.requestType;
              if (
                !e ||
                (!t.email &&
                  "EMAIL_SIGNIN" != e &&
                  "VERIFY_AND_CHANGE_EMAIL" != e)
              )
                throw new T("internal-error");
            },
            B: !0,
          },
          ps = {
            endpoint: "signupNewUser",
            A: function (t) {
              if ((Qa(t), !t.password)) throw new T("weak-password");
            },
            G: es,
            V: !0,
            B: !0,
          },
          vs = { endpoint: "createAuthUri", B: !0 },
          ms = { endpoint: "deleteAccount", O: ["idToken"] },
          gs = {
            endpoint: "setAccountInfo",
            O: ["idToken", "deleteProvider"],
            A: function (t) {
              if (!Array.isArray(t.deleteProvider))
                throw new T("internal-error");
            },
          },
          bs = {
            endpoint: "emailLinkSignin",
            O: ["email", "oobCode"],
            A: Qa,
            G: es,
            V: !0,
            B: !0,
          },
          ys = {
            endpoint: "emailLinkSignin",
            O: ["idToken", "email", "oobCode"],
            A: Qa,
            G: es,
            V: !0,
          },
          ws = {
            endpoint: "accounts/mfaEnrollment:finalize",
            O: ["idToken", "phoneVerificationInfo"],
            A: rs,
            G: es,
            B: !0,
            Na: !0,
          },
          Is = {
            endpoint: "accounts/mfaSignIn:finalize",
            O: ["mfaPendingCredential", "phoneVerificationInfo"],
            A: rs,
            G: es,
            B: !0,
            Na: !0,
          },
          Ts = { endpoint: "getAccountInfo" },
          Es = {
            endpoint: "getOobConfirmationCode",
            O: ["requestType"],
            A: function (t) {
              if ("EMAIL_SIGNIN" != t.requestType)
                throw new T("internal-error");
              Qa(t);
            },
            Z: "email",
            B: !0,
          },
          As = {
            endpoint: "getOobConfirmationCode",
            O: ["idToken", "requestType"],
            A: function (t) {
              if ("VERIFY_EMAIL" != t.requestType)
                throw new T("internal-error");
            },
            Z: "email",
            B: !0,
          },
          ks = {
            endpoint: "getOobConfirmationCode",
            O: ["idToken", "newEmail", "requestType"],
            A: function (t) {
              if ("VERIFY_AND_CHANGE_EMAIL" != t.requestType)
                throw new T("internal-error");
            },
            Z: "email",
            B: !0,
          },
          Ss = {
            endpoint: "getOobConfirmationCode",
            O: ["requestType"],
            A: function (t) {
              if ("PASSWORD_RESET" != t.requestType)
                throw new T("internal-error");
              Qa(t);
            },
            Z: "email",
            B: !0,
          },
          Ns = { mb: !0, endpoint: "getProjectConfig", Vb: "GET" },
          _s = {
            mb: !0,
            endpoint: "getRecaptchaParam",
            Vb: "GET",
            G: function (t) {
              if (!t.recaptchaSiteKey) throw new T("internal-error");
            },
          },
          Os = { endpoint: "resetPassword", A: ls, Z: "email", B: !0 },
          Cs = {
            endpoint: "sendVerificationCode",
            O: ["phoneNumber", "recaptchaToken"],
            Z: "sessionInfo",
            B: !0,
          },
          Rs = { endpoint: "setAccountInfo", O: ["idToken"], A: ts, V: !0 },
          Ds = {
            endpoint: "setAccountInfo",
            O: ["idToken"],
            A: function (t) {
              if ((ts(t), !t.password)) throw new T("weak-password");
            },
            G: es,
            V: !0,
          },
          Ps = { endpoint: "signupNewUser", G: es, V: !0, B: !0 },
          Ls = {
            endpoint: "accounts/mfaEnrollment:start",
            O: ["idToken", "phoneEnrollmentInfo"],
            A: function (t) {
              if (!t.phoneEnrollmentInfo) throw new T("internal-error");
              if (!t.phoneEnrollmentInfo.phoneNumber)
                throw new T("missing-phone-number");
              if (!t.phoneEnrollmentInfo.recaptchaToken)
                throw new T("missing-app-credential");
            },
            G: function (t) {
              if (!t.phoneSessionInfo || !t.phoneSessionInfo.sessionInfo)
                throw new T("internal-error");
            },
            B: !0,
            Na: !0,
          },
          xs = {
            endpoint: "accounts/mfaSignIn:start",
            O: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
            A: function (t) {
              if (!t.phoneSignInInfo || !t.phoneSignInInfo.recaptchaToken)
                throw new T("missing-app-credential");
            },
            G: function (t) {
              if (!t.phoneResponseInfo || !t.phoneResponseInfo.sessionInfo)
                throw new T("internal-error");
            },
            B: !0,
            Na: !0,
          },
          Ms = {
            endpoint: "verifyAssertion",
            A: os,
            Za: as,
            G: ss,
            V: !0,
            B: !0,
          },
          js = {
            endpoint: "verifyAssertion",
            A: os,
            Za: as,
            G: function (t) {
              if (t.errorMessage && "USER_NOT_FOUND" == t.errorMessage)
                throw new T("user-not-found");
              if (t.errorMessage) throw Ws(t.errorMessage);
              es(t);
            },
            V: !0,
            B: !0,
          },
          Us = {
            endpoint: "verifyAssertion",
            A: function (t) {
              if ((os(t), !t.idToken)) throw new T("internal-error");
            },
            Za: as,
            G: ss,
            V: !0,
          },
          Vs = {
            endpoint: "verifyCustomToken",
            A: function (t) {
              if (!t.token) throw new T("invalid-custom-token");
            },
            G: es,
            V: !0,
            B: !0,
          },
          Fs = {
            endpoint: "verifyPassword",
            A: function (t) {
              if ((Qa(t), !t.password)) throw new T("wrong-password");
            },
            G: es,
            V: !0,
            B: !0,
          },
          qs = { endpoint: "verifyPhoneNumber", A: ns, G: es, B: !0 },
          Hs = {
            endpoint: "verifyPhoneNumber",
            A: function (t) {
              if (!t.idToken) throw new T("internal-error");
              ns(t);
            },
            G: function (t) {
              if (t.temporaryProof)
                throw ((t.code = "credential-already-in-use"), Mo(t));
              es(t);
            },
          },
          Ks = {
            Ib: { USER_NOT_FOUND: "user-not-found" },
            endpoint: "verifyPhoneNumber",
            A: ns,
            G: es,
            B: !0,
          },
          Gs = {
            endpoint: "accounts/mfaEnrollment:withdraw",
            O: ["idToken", "mfaEnrollmentId"],
            G: function (t) {
              if (!!t[qa] ^ !!t.refreshToken) throw new T("internal-error");
            },
            B: !0,
            Na: !0,
          };
        function Bs(t, e, n) {
          if (
            !(function (t, e) {
              if (!e || !e.length) return 1;
              if (t) {
                for (var n = 0; n < e.length; n++) {
                  var i = t[e[n]];
                  if (null == i || "" === i) return;
                }
                return 1;
              }
            })(n, e.O)
          )
            return ye(new T("internal-error"));
          var i,
            r = !!e.Na,
            o = e.Vb || "POST";
          return be(n)
            .then(e.A)
            .then(function () {
              return (
                e.V && (n.returnSecureToken = !0),
                e.B && t.b && void 0 === n.tenantId && (n.tenantId = t.b),
                (function (t, e, n, i, r, o, a) {
                  var s = _n(e + n);
                  Sn(s, "key", t.c), a && Sn(s, "cb", Date.now().toString());
                  var u = "GET" == i;
                  if (u) for (var c in r) r.hasOwnProperty(c) && Sn(s, c, r[c]);
                  return new le(function (e, n) {
                    za(
                      t,
                      s.toString(),
                      function (t) {
                        t
                          ? t.error
                            ? n(Xs(t, o || {}))
                            : e(t)
                          : n(new T("network-request-failed"));
                      },
                      i,
                      u ? void 0 : Wn(Ai(r)),
                      t.a,
                      t.v.get()
                    );
                  });
                })(t, r ? t.i : t.h, e.endpoint, o, n, e.Ib, e.mb || !1)
              );
            })
            .then(function (t) {
              return (i = t), e.Za ? e.Za(n, i) : i;
            })
            .then(e.G)
            .then(function () {
              if (!e.Z) return i;
              if (!(e.Z in i)) throw new T("internal-error");
              return i[e.Z];
            });
        }
        function Ws(t) {
          return Xs({
            error: { errors: [{ message: t }], code: 400, message: t },
          });
        }
        function Xs(t, e) {
          var n,
            i =
              ((t.error && t.error.errors && t.error.errors[0]) || {}).reason ||
              "",
            r = {
              keyInvalid: "invalid-api-key",
              ipRefererBlocked: "app-not-authorized",
            };
          if ((i = r[i] ? new T(r[i]) : null)) return i;
          for (n in ((i = (t.error && t.error.message) || ""),
          lt(
            (r = {
              INVALID_CUSTOM_TOKEN: "invalid-custom-token",
              CREDENTIAL_MISMATCH: "custom-token-mismatch",
              MISSING_CUSTOM_TOKEN: "internal-error",
              INVALID_IDENTIFIER: "invalid-email",
              MISSING_CONTINUE_URI: "internal-error",
              INVALID_EMAIL: "invalid-email",
              INVALID_PASSWORD: "wrong-password",
              USER_DISABLED: "user-disabled",
              MISSING_PASSWORD: "internal-error",
              EMAIL_EXISTS: "email-already-in-use",
              PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
              INVALID_IDP_RESPONSE: "invalid-credential",
              INVALID_PENDING_TOKEN: "invalid-credential",
              FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
              MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
              INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
              INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
              INVALID_SENDER: "invalid-sender",
              EMAIL_NOT_FOUND: "user-not-found",
              RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
              EXPIRED_OOB_CODE: "expired-action-code",
              INVALID_OOB_CODE: "invalid-action-code",
              MISSING_OOB_CODE: "internal-error",
              INVALID_PROVIDER_ID: "invalid-provider-id",
              CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
              INVALID_ID_TOKEN: "invalid-user-token",
              TOKEN_EXPIRED: "user-token-expired",
              USER_NOT_FOUND: "user-token-expired",
              CORS_UNSUPPORTED: "cors-unsupported",
              DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
              INVALID_APP_ID: "invalid-app-id",
              TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
              WEAK_PASSWORD: "weak-password",
              OPERATION_NOT_ALLOWED: "operation-not-allowed",
              USER_CANCELLED: "user-cancelled",
              CAPTCHA_CHECK_FAILED: "captcha-check-failed",
              INVALID_APP_CREDENTIAL: "invalid-app-credential",
              INVALID_CODE: "invalid-verification-code",
              INVALID_PHONE_NUMBER: "invalid-phone-number",
              INVALID_SESSION_INFO: "invalid-verification-id",
              INVALID_TEMPORARY_PROOF: "invalid-credential",
              MISSING_APP_CREDENTIAL: "missing-app-credential",
              MISSING_CODE: "missing-verification-code",
              MISSING_PHONE_NUMBER: "missing-phone-number",
              MISSING_SESSION_INFO: "missing-verification-id",
              QUOTA_EXCEEDED: "quota-exceeded",
              SESSION_EXPIRED: "code-expired",
              REJECTED_CREDENTIAL: "rejected-credential",
              INVALID_CONTINUE_URI: "invalid-continue-uri",
              MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
              MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
              UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
              INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
              INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
              INVALID_CERT_HASH: "invalid-cert-hash",
              UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
              INVALID_TENANT_ID: "invalid-tenant-id",
              TENANT_ID_MISMATCH: "tenant-id-mismatch",
              ADMIN_ONLY_OPERATION: "admin-restricted-operation",
              INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
              MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
              MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
              MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
              EMAIL_CHANGE_NEEDS_VERIFICATION:
                "email-change-needs-verification",
              SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
              SECOND_FACTOR_LIMIT_EXCEEDED:
                "maximum-second-factor-count-exceeded",
              UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor",
              UNVERIFIED_EMAIL: "unverified-email",
            }),
            e || {}
          ),
          (e =
            (e = i.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < e.length
              ? e[1]
              : void 0),
          r))
            if (0 === i.indexOf(n)) return new T(r[n], e);
          return new T("internal-error", (e = !e && t ? Ei(t) : e));
        }
        function Js(t) {
          var o;
          (this.b = t),
            (this.a = null),
            (this.sb =
              ((o = this),
              (Zs =
                Zs ||
                new le(function (t, e) {
                  function n() {
                    _i(),
                      gi("gapi.load")("gapi.iframes", {
                        callback: t,
                        ontimeout: function () {
                          _i(), e(Error("Network Error"));
                        },
                        timeout: zs.get(),
                      });
                  }
                  var i;
                  gi("gapi.iframes.Iframe")
                    ? t()
                    : gi("gapi.load")
                    ? n()
                    : ((i =
                        "__iframefcb" +
                        Math.floor(1e6 * Math.random()).toString()),
                      (l[i] = function () {
                        gi("gapi.load") ? n() : e(Error("Network Error"));
                      }),
                      be(Da(It(Ys, { onload: i }))).o(function () {
                        e(Error("Network Error"));
                      }));
                }).o(function (t) {
                  throw ((Zs = null), t);
                })).then(function () {
                return new le(function (i, r) {
                  gi("gapi.iframes.getContext")().open(
                    {
                      where: document.body,
                      url: o.b,
                      messageHandlersFilter: gi(
                        "gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"
                      ),
                      attributes: {
                        style: {
                          position: "absolute",
                          top: "-100px",
                          width: "1px",
                          height: "1px",
                        },
                      },
                      dontclear: !0,
                    },
                    function (t) {
                      function e() {
                        clearTimeout(n), i();
                      }
                      (o.a = t), o.a.restyle({ setHideOnLeave: !1 });
                      var n = setTimeout(function () {
                        r(Error("Network Error"));
                      }, $s.get());
                      t.ping(e).then(e, function () {
                        r(Error("Network Error"));
                      });
                    }
                  );
                });
              })));
        }
        var Ys = new dt(
            gt,
            "https://apis.google.com/js/api.js?onload=%{onload}"
          ),
          zs = new Oi(3e4, 6e4),
          $s = new Oi(5e3, 15e3),
          Zs = null;
        function Qs(t, e, n, i) {
          (this.l = t),
            (this.h = e),
            (this.i = n),
            (this.g = i),
            (this.f = null),
            (t = this.g
              ? On((t = _n(this.g.url)).c, t.a, t.g, "/emulator/auth/iframe")
              : On("https", this.l, null, "/__/auth/iframe")),
            (this.a = t),
            Sn(this.a, "apiKey", this.h),
            Sn(this.a, "appName", this.i),
            (this.b = null),
            (this.c = []);
        }
        function tu(t, e, n, i, r, o) {
          (this.u = t),
            (this.s = e),
            (this.c = n),
            (this.m = i),
            (this.v = o),
            (this.i = this.g = this.l = null),
            (this.a = r),
            (this.h = this.f = null);
        }
        function eu(t) {
          try {
            return Gl.default.app(t).auth().Ga();
          } catch (t) {
            return [];
          }
        }
        function nu(t, e, n, i, r, o) {
          (this.s = t),
            (this.g = e),
            (this.b = n),
            (this.f = o),
            (this.c = i || null),
            (this.i = r || null),
            (this.l = this.u = this.C = null),
            (this.h = []),
            (this.m = this.a = null);
        }
        function iu(t) {
          var s = Zn();
          return Bs(t, Ns, {})
            .then(function (t) {
              return t.authorizedDomains || [];
            })
            .then(function (t) {
              t: {
                for (var e = (n = _n(s)).c, n = n.a, i = 0; i < t.length; i++) {
                  var r = t[i],
                    o = n,
                    a = e;
                  if (
                    (o =
                      0 == r.indexOf("chrome-extension://")
                        ? _n(r).a == o && "chrome-extension" == a
                        : ("http" == a || "https" == a) &&
                          (ii.test(r)
                            ? o == r
                            : ((r = r.split(".").join("\\.")),
                              new RegExp(
                                "^(.+\\." + r + "|" + r + ")$",
                                "i"
                              ).test(o))))
                  ) {
                    t = !0;
                    break t;
                  }
                }
                t = !1;
              }
              if (!t) throw new Lo(Zn());
            });
        }
        function ru(r) {
          return (
            r.m ||
            ((r.m = oi().then(function () {
              var t, e, n, i;
              r.u ||
                ((t = r.c),
                (e = r.i),
                (n = eu(r.b)),
                ((i = new Qs(r.s, r.g, r.b, r.f)).f = t),
                (i.b = e),
                (i.c = X(n || [])),
                (r.u = i.toString())),
                (r.v = new Js(r.u)),
                (function (i) {
                  if (!i.v) throw Error("IfcHandler must be initialized!");
                  var t, e;
                  (t = i.v),
                    (e = function (t) {
                      var e = {};
                      if (t && t.authEvent) {
                        var n = !1;
                        for (t = Co(t.authEvent), e = 0; e < i.h.length; e++)
                          n = i.h[e](t) || n;
                        return ((e = {}).status = n ? "ACK" : "ERROR"), be(e);
                      }
                      return (e.status = "ERROR"), be(e);
                    }),
                    t.sb.then(function () {
                      t.a.register(
                        "authEvent",
                        e,
                        gi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")
                      );
                    });
                })(r);
            })),
            r.m)
          );
        }
        function ou(t) {
          return (
            t.l ||
              ((t.C = t.c ? vi(t.c, eu(t.b)) : null),
              (t.l = new Va(t.g, _(t.i), t.C)),
              t.f && Xa(t.l, t.f)),
            t.l
          );
        }
        function au(t, e, n, i, r, o, a, s, u, c, h, l) {
          return (
            ((t = new tu(t, e, n, i, r, l)).l = o),
            (t.g = a),
            (t.i = s),
            (t.b = ct(u || null)),
            (t.f = c),
            t.zb(h).toString()
          );
        }
        function su(t) {
          if (
            ((this.a =
              t ||
              (Gl.default.INTERNAL.reactNative &&
                Gl.default.INTERNAL.reactNative.AsyncStorage)),
            !this.a)
          )
            throw new T(
              "internal-error",
              "The React Native compatibility library was not found."
            );
          this.type = "asyncStorage";
        }
        function uu(t) {
          (this.b = t), (this.a = {}), (this.f = b(this.c, this));
        }
        (Qs.prototype.toString = function () {
          return (
            this.f ? Sn(this.a, "v", this.f) : qn(this.a.b, "v"),
            this.b ? Sn(this.a, "eid", this.b) : qn(this.a.b, "eid"),
            this.c.length
              ? Sn(this.a, "fw", this.c.join(","))
              : qn(this.a.b, "fw"),
            this.a.toString()
          );
        }),
          (tu.prototype.zb = function (t) {
            return (this.h = t), this;
          }),
          (tu.prototype.toString = function () {
            var t;
            if (
              (Sn(
                (t = this.v
                  ? On(
                      (t = _n(this.v.url)).c,
                      t.a,
                      t.g,
                      "/emulator/auth/handler"
                    )
                  : On("https", this.u, null, "/__/auth/handler")),
                "apiKey",
                this.s
              ),
              Sn(t, "appName", this.c),
              Sn(t, "authType", this.m),
              this.a.isOAuthProvider)
            ) {
              var e = this.a;
              try {
                var n = Gl.default.app(this.c).auth().la();
              } catch (t) {
                n = null;
              }
              for (i in ((e.pb = n),
              Sn(t, "providerId", this.a.providerId),
              (e = Ai((n = this.a).Jb))))
                e[i] = e[i].toString();
              for (var i = n.Qc, e = ct(e), r = 0; r < i.length; r++) {
                var o = i[r];
                o in e && delete e[o];
              }
              n.qb && n.pb && !e[n.qb] && (e[n.qb] = n.pb),
                ut(e) || Sn(t, "customParameters", Ei(e));
            }
            if (
              ("function" == typeof this.a.Rb &&
                (n = this.a.Rb()).length &&
                Sn(t, "scopes", n.join(",")),
              this.l ? Sn(t, "redirectUrl", this.l) : qn(t.b, "redirectUrl"),
              this.g ? Sn(t, "eventId", this.g) : qn(t.b, "eventId"),
              this.i ? Sn(t, "v", this.i) : qn(t.b, "v"),
              this.b)
            )
              for (var a in this.b)
                this.b.hasOwnProperty(a) && !Nn(t, a) && Sn(t, a, this.b[a]);
            return (
              this.h ? Sn(t, "tid", this.h) : qn(t.b, "tid"),
              this.f ? Sn(t, "eid", this.f) : qn(t.b, "eid"),
              (a = eu(this.c)).length && Sn(t, "fw", a.join(",")),
              t.toString()
            );
          }),
          ((t = nu.prototype).Pb = function (e, n, t) {
            var i = new T("popup-closed-by-user"),
              r = new T("web-storage-unsupported"),
              o = this,
              a = !1;
            return this.ma()
              .then(function () {
                var t,
                  i = { type: "webStorageSupport" };
                ru((t = o))
                  .then(function () {
                    return (
                      (e = t.v),
                      (n = i),
                      e.sb.then(function () {
                        return new le(function (t) {
                          e.a.send(
                            n.type,
                            n,
                            t,
                            gi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")
                          );
                        });
                      })
                    );
                    var e, n;
                  })
                  .then(function (t) {
                    if (t && t.length && void 0 !== t[0].webStorageSupport)
                      return t[0].webStorageSupport;
                    throw Error();
                  })
                  .then(function (t) {
                    t || (e && ei(e), n(r), (a = !0));
                  });
              })
              .o(function () {})
              .then(function () {
                if (!a)
                  return (
                    (n = e),
                    new le(function (e) {
                      return (function t() {
                        vn(2e3).then(function () {
                          return n && !n.closed ? t() : void e();
                        });
                      })();
                    })
                  );
                var n;
              })
              .then(function () {
                if (!a)
                  return vn(t).then(function () {
                    n(i);
                  });
              });
          }),
          (t.Yb = function () {
            var t = mi();
            return !Ti(t) && !Ni(t);
          }),
          (t.Ub = function () {
            return !1;
          }),
          (t.Nb = function (e, t, n, i, r, o, a, s) {
            if (!e) return ye(new T("popup-blocked"));
            if (a && !Ti())
              return (
                this.ma().o(function (t) {
                  ei(e), r(t);
                }),
                i(),
                be()
              );
            this.a || (this.a = iu(ou(this)));
            var u = this;
            return this.a
              .then(function () {
                var t = u.ma().o(function (t) {
                  throw (ei(e), r(t), t);
                });
                return i(), t;
              })
              .then(function () {
                _o(n),
                  a ||
                    Qn(
                      au(
                        u.s,
                        u.g,
                        u.b,
                        t,
                        n,
                        null,
                        o,
                        u.c,
                        void 0,
                        u.i,
                        s,
                        u.f
                      ),
                      e
                    );
              })
              .o(function (t) {
                throw (
                  ("auth/network-request-failed" == t.code && (u.a = null), t)
                );
              });
          }),
          (t.Ob = function (t, e, n, i) {
            this.a || (this.a = iu(ou(this)));
            var r = this;
            return this.a
              .then(function () {
                _o(e),
                  Qn(
                    au(r.s, r.g, r.b, t, e, Zn(), n, r.c, void 0, r.i, i, r.f)
                  );
              })
              .o(function (t) {
                throw (
                  ("auth/network-request-failed" == t.code && (r.a = null), t)
                );
              });
          }),
          (t.ma = function () {
            var t = this;
            return ru(this)
              .then(function () {
                return t.v.sb;
              })
              .o(function () {
                throw ((t.a = null), new T("network-request-failed"));
              });
          }),
          (t.ac = function () {
            return !0;
          }),
          (t.Ea = function (t) {
            this.h.push(t);
          }),
          (t.Ta = function (e) {
            B(this.h, function (t) {
              return t == e;
            });
          }),
          ((t = su.prototype).get = function (t) {
            return be(this.a.getItem(t)).then(function (t) {
              return t && ki(t);
            });
          }),
          (t.set = function (t, e) {
            return be(this.a.setItem(t, Ei(e)));
          }),
          (t.U = function (t) {
            return be(this.a.removeItem(t));
          }),
          (t.ca = function () {}),
          (t.ia = function () {});
        var cu,
          hu = [];
        function lu(t, e, n) {
          ut(t.a) && t.b.addEventListener("message", t.f),
            void 0 === t.a[e] && (t.a[e] = []),
            t.a[e].push(n);
        }
        function fu(t) {
          this.a = t;
        }
        function du(t) {
          (this.c = t), (this.b = !1), (this.a = []);
        }
        function pu(i, t, e, n) {
          var r,
            o,
            a,
            s,
            u = e || {},
            c = null;
          if (i.b) return ye(Error("connection_unavailable"));
          var h = n ? 800 : 50,
            l =
              "undefined" != typeof MessageChannel
                ? new MessageChannel()
                : null;
          return new le(function (e, n) {
            l
              ? ((r = Math.floor(Math.random() * Math.pow(10, 20)).toString()),
                l.port1.start(),
                (a = setTimeout(function () {
                  n(Error("unsupported_event"));
                }, h)),
                (c = {
                  messageChannel: l,
                  onMessage: (o = function (t) {
                    t.data.eventId === r &&
                      ("ack" === t.data.status
                        ? (clearTimeout(a),
                          (s = setTimeout(function () {
                            n(Error("timeout"));
                          }, 3e3)))
                        : "done" === t.data.status
                        ? (clearTimeout(s),
                          void 0 !== t.data.response
                            ? e(t.data.response)
                            : n(Error("unknown_error")))
                        : (clearTimeout(a),
                          clearTimeout(s),
                          n(Error("invalid_response"))));
                  }),
                }),
                i.a.push(c),
                l.port1.addEventListener("message", o),
                i.c.postMessage({ eventType: t, eventId: r, data: u }, [
                  l.port2,
                ]))
              : n(Error("connection_unavailable"));
          })
            .then(function (t) {
              return vu(i, c), t;
            })
            .o(function (t) {
              throw (vu(i, c), t);
            });
        }
        function vu(t, e) {
          var n, i;
          e &&
            ((n = e.messageChannel),
            (i = e.onMessage),
            n && (n.port1.removeEventListener("message", i), n.port1.close()),
            B(t.a, function (t) {
              return t == e;
            }));
        }
        function mu() {
          if (!yu()) throw new T("web-storage-unsupported");
          (this.c = {}),
            (this.a = []),
            (this.b = 0),
            (this.m = l.indexedDB),
            (this.type = "indexedDB"),
            (this.g = this.v = this.f = this.l = null),
            (this.s = !1),
            (this.h = null);
          var t,
            e,
            n,
            i = this;
          ui() && self
            ? ((this.v =
                ((n = ui() ? self : null),
                V(hu, function (t) {
                  t.b == n && (e = t);
                }),
                e || ((e = new uu(n)), hu.push(e)),
                e)),
              lu(this.v, "keyChanged", function (t, n) {
                return Au(i).then(function (e) {
                  return (
                    0 < e.length &&
                      V(i.a, function (t) {
                        t(e);
                      }),
                    { keyProcessed: K(e, n.key) }
                  );
                });
              }),
              lu(this.v, "ping", function () {
                return be(["keyChanged"]);
              }))
            : ((t = l.navigator) && t.serviceWorker
                ? be()
                    .then(function () {
                      return t.serviceWorker.ready;
                    })
                    .then(function (t) {
                      return t.active || null;
                    })
                    .o(function () {
                      return null;
                    })
                : be(null)
              ).then(function (t) {
                (i.h = t) &&
                  ((i.g = new du(new fu(t))),
                  pu(i.g, "ping", null, !0)
                    .then(function (t) {
                      t[0].fulfilled &&
                        K(t[0].value, "keyChanged") &&
                        (i.s = !0);
                    })
                    .o(function () {}));
              });
        }
        function gu(t) {
          return (
            t.i ||
              (t.i = (function r(o) {
                return new le(function (e, n) {
                  var t = o.m.open("firebaseLocalStorageDb", 1);
                  (t.onerror = function (t) {
                    try {
                      t.preventDefault();
                    } catch (t) {}
                    n(Error(t.target.error));
                  }),
                    (t.onupgradeneeded = function (t) {
                      t = t.target.result;
                      try {
                        t.createObjectStore("firebaseLocalStorage", {
                          keyPath: "fbase_key",
                        });
                      } catch (t) {
                        n(t);
                      }
                    }),
                    (t.onsuccess = function (t) {
                      var i;
                      (t = t.target.result).objectStoreNames.contains(
                        "firebaseLocalStorage"
                      )
                        ? e(t)
                        : ((i = o),
                          new le(function (t, e) {
                            var n = i.m.deleteDatabase(
                              "firebaseLocalStorageDb"
                            );
                            (n.onsuccess = function () {
                              t();
                            }),
                              (n.onerror = function (t) {
                                e(Error(t.target.error));
                              });
                          })
                            .then(function () {
                              return r(o);
                            })
                            .then(function (t) {
                              e(t);
                            })
                            .o(function (t) {
                              n(t);
                            }));
                    });
                });
              })(t)),
            t.i
          );
        }
        function bu(r, t) {
          var o = 0;
          return new le(function e(n, i) {
            gu(r)
              .then(t)
              .then(n)
              .o(function (t) {
                return 3 < ++o
                  ? void i(t)
                  : gu(r)
                      .then(function (t) {
                        return t.close(), (r.i = void 0), e(n, i);
                      })
                      .o(function (t) {
                        i(t);
                      });
              });
          });
        }
        function yu() {
          try {
            return l.indexedDB;
          } catch (t) {
            return;
          }
        }
        function wu(t) {
          return t.objectStore("firebaseLocalStorage");
        }
        function Iu(t, e) {
          return t.transaction(
            ["firebaseLocalStorage"],
            e ? "readwrite" : "readonly"
          );
        }
        function Tu(t) {
          return new le(function (e, n) {
            (t.onsuccess = function (t) {
              t && t.target ? e(t.target.result) : e();
            }),
              (t.onerror = function (t) {
                n(t.target.error);
              });
          });
        }
        function Eu(t, e) {
          return t.g &&
            t.h &&
            (((n = l.navigator) &&
              n.serviceWorker &&
              n.serviceWorker.controller) ||
              null) === t.h
            ? pu(t.g, "keyChanged", { key: e }, t.s)
                .then(function () {})
                .o(function () {})
            : be();
          var n;
        }
        function Au(i) {
          return gu(i)
            .then(function (t) {
              var r = wu(Iu(t, !1));
              return r.getAll
                ? Tu(r.getAll())
                : new le(function (e, n) {
                    var i = [],
                      t = r.openCursor();
                    (t.onsuccess = function (t) {
                      (t = t.target.result)
                        ? (i.push(t.value), t.continue())
                        : e(i);
                    }),
                      (t.onerror = function (t) {
                        n(t.target.error);
                      });
                  });
            })
            .then(function (t) {
              var e = {},
                n = [];
              if (0 == i.b) {
                for (n = 0; n < t.length; n++) e[t[n].fbase_key] = t[n].value;
                (n = (function t(e, n) {
                  var i,
                    r = [];
                  for (i in e)
                    i in n && typeof e[i] == typeof n[i]
                      ? "object" == typeof e[i] && null != e[i] && null != n[i]
                        ? 0 < t(e[i], n[i]).length && r.push(i)
                        : e[i] !== n[i] && r.push(i)
                      : r.push(i);
                  for (i in n) i in e || r.push(i);
                  return r;
                })(i.c, e)),
                  (i.c = e);
              }
              return n;
            });
        }
        function ku(t) {
          t.l && t.l.cancel("STOP_EVENT"),
            t.f && (clearTimeout(t.f), (t.f = null));
        }
        function Su(t) {
          var i = this,
            r = null;
          (this.a = []),
            (this.type = "indexedDB"),
            (this.c = t),
            (this.b = be()
              .then(function () {
                if (yu()) {
                  var e = Si(),
                    n = "__sak" + e;
                  return (
                    (cu = cu || new mu()),
                    (r = cu)
                      .set(n, e)
                      .then(function () {
                        return r.get(n);
                      })
                      .then(function (t) {
                        if (t !== e) throw Error("indexedDB not supported!");
                        return r.U(n);
                      })
                      .then(function () {
                        return r;
                      })
                      .o(function () {
                        return i.c;
                      })
                  );
                }
                return i.c;
              })
              .then(function (t) {
                return (
                  (i.type = t.type),
                  t.ca(function (e) {
                    V(i.a, function (t) {
                      t(e);
                    });
                  }),
                  t
                );
              }));
        }
        function Nu() {
          (this.a = {}), (this.type = "inMemory");
        }
        function _u() {
          if (
            !(function () {
              var t = "Node" == ci();
              if (
                (t =
                  Ou() ||
                  (t &&
                    Gl.default.INTERNAL.node &&
                    Gl.default.INTERNAL.node.localStorage))
              )
                try {
                  return t.setItem("__sak", "1"), t.removeItem("__sak"), 1;
                } catch (t) {
                  return;
                }
            })()
          ) {
            if ("Node" == ci())
              throw new T(
                "internal-error",
                "The LocalStorage compatibility library was not found."
              );
            throw new T("web-storage-unsupported");
          }
          (this.a = Ou() || Gl.default.INTERNAL.node.localStorage),
            (this.type = "localStorage");
        }
        function Ou() {
          try {
            var t = l.localStorage,
              e = Si();
            return t && (t.setItem(e, "1"), t.removeItem(e)), t;
          } catch (t) {
            return null;
          }
        }
        function Cu() {
          this.type = "nullStorage";
        }
        function Ru() {
          if (
            !(function () {
              var t = "Node" == ci();
              if (
                (t =
                  Du() ||
                  (t &&
                    Gl.default.INTERNAL.node &&
                    Gl.default.INTERNAL.node.sessionStorage))
              )
                try {
                  return t.setItem("__sak", "1"), t.removeItem("__sak"), 1;
                } catch (t) {
                  return;
                }
            })()
          ) {
            if ("Node" == ci())
              throw new T(
                "internal-error",
                "The SessionStorage compatibility library was not found."
              );
            throw new T("web-storage-unsupported");
          }
          (this.a = Du() || Gl.default.INTERNAL.node.sessionStorage),
            (this.type = "sessionStorage");
        }
        function Du() {
          try {
            var t = l.sessionStorage,
              e = Si();
            return t && (t.setItem(e, "1"), t.removeItem(e)), t;
          } catch (t) {
            return null;
          }
        }
        function Pu() {
          var t = {};
          (t.Browser = Mu),
            (t.Node = ju),
            (t.ReactNative = Uu),
            (t.Worker = Vu),
            (this.a = t[ci()]);
        }
        (uu.prototype.c = function (n) {
          var e,
            i = n.data.eventType,
            r = n.data.eventId,
            t = this.a[i];
          t &&
            0 < t.length &&
            (n.ports[0].postMessage({
              status: "ack",
              eventId: r,
              eventType: i,
              response: null,
            }),
            (e = []),
            V(t, function (t) {
              e.push(
                be().then(function () {
                  return t(n.origin, n.data.data);
                })
              );
            }),
            Ie(e).then(function (t) {
              var e = [];
              V(t, function (t) {
                e.push({
                  fulfilled: t.Qb,
                  value: t.value,
                  reason: t.reason ? t.reason.message : void 0,
                });
              }),
                V(e, function (t) {
                  for (var e in t) void 0 === t[e] && delete t[e];
                }),
                n.ports[0].postMessage({
                  status: "done",
                  eventId: r,
                  eventType: i,
                  response: e,
                });
            }));
        }),
          (fu.prototype.postMessage = function (t, e) {
            this.a.postMessage(t, e);
          }),
          (du.prototype.close = function () {
            for (; 0 < this.a.length; ) vu(this, this.a[0]);
            this.b = !0;
          }),
          ((t = mu.prototype).set = function (i, r) {
            var o = this,
              a = !1;
            return bu(this, function (t) {
              return Tu((t = wu(Iu(t, !0))).get(i));
            })
              .then(function (n) {
                return bu(o, function (t) {
                  if (((t = wu(Iu(t, !0))), n))
                    return (n.value = r), Tu(t.put(n));
                  o.b++, (a = !0);
                  var e = {};
                  return (e.fbase_key = i), (e.value = r), Tu(t.add(e));
                });
              })
              .then(function () {
                return (o.c[i] = r), Eu(o, i);
              })
              .oa(function () {
                a && o.b--;
              });
          }),
          (t.get = function (e) {
            return bu(this, function (t) {
              return Tu(wu(Iu(t, !1)).get(e));
            }).then(function (t) {
              return t && t.value;
            });
          }),
          (t.U = function (e) {
            var n = this,
              i = !1;
            return bu(this, function (t) {
              return (i = !0), n.b++, Tu(wu(Iu(t, !0)).delete(e));
            })
              .then(function () {
                return delete n.c[e], Eu(n, e);
              })
              .oa(function () {
                i && n.b--;
              });
          }),
          (t.ca = function (t) {
            var n;
            0 == this.a.length &&
              (ku((n = this)),
              (function e() {
                n.f = setTimeout(function () {
                  n.l = Au(n)
                    .then(function (e) {
                      0 < e.length &&
                        V(n.a, function (t) {
                          t(e);
                        });
                    })
                    .then(function () {
                      e();
                    })
                    .o(function (t) {
                      "STOP_EVENT" != t.message && e();
                    });
                }, 800);
              })()),
              this.a.push(t);
          }),
          (t.ia = function (e) {
            B(this.a, function (t) {
              return t == e;
            }),
              0 == this.a.length && ku(this);
          }),
          ((t = Su.prototype).get = function (e) {
            return this.b.then(function (t) {
              return t.get(e);
            });
          }),
          (t.set = function (e, n) {
            return this.b.then(function (t) {
              return t.set(e, n);
            });
          }),
          (t.U = function (e) {
            return this.b.then(function (t) {
              return t.U(e);
            });
          }),
          (t.ca = function (t) {
            this.a.push(t);
          }),
          (t.ia = function (e) {
            B(this.a, function (t) {
              return t == e;
            });
          }),
          ((t = Nu.prototype).get = function (t) {
            return be(this.a[t]);
          }),
          (t.set = function (t, e) {
            return (this.a[t] = e), be();
          }),
          (t.U = function (t) {
            return delete this.a[t], be();
          }),
          (t.ca = function () {}),
          (t.ia = function () {}),
          ((t = _u.prototype).get = function (t) {
            var e = this;
            return be().then(function () {
              return ki(e.a.getItem(t));
            });
          }),
          (t.set = function (e, n) {
            var i = this;
            return be().then(function () {
              var t = Ei(n);
              null === t ? i.U(e) : i.a.setItem(e, t);
            });
          }),
          (t.U = function (t) {
            var e = this;
            return be().then(function () {
              e.a.removeItem(t);
            });
          }),
          (t.ca = function (t) {
            l.window && $e(l.window, "storage", t);
          }),
          (t.ia = function (t) {
            l.window && tn(l.window, "storage", t);
          }),
          ((t = Cu.prototype).get = function () {
            return be(null);
          }),
          (t.set = function () {
            return be();
          }),
          (t.U = function () {
            return be();
          }),
          (t.ca = function () {}),
          (t.ia = function () {}),
          ((t = Ru.prototype).get = function (t) {
            var e = this;
            return be().then(function () {
              return ki(e.a.getItem(t));
            });
          }),
          (t.set = function (e, n) {
            var i = this;
            return be().then(function () {
              var t = Ei(n);
              null === t ? i.U(e) : i.a.setItem(e, t);
            });
          }),
          (t.U = function (t) {
            var e = this;
            return be().then(function () {
              e.a.removeItem(t);
            });
          }),
          (t.ca = function () {}),
          (t.ia = function () {});
        var Lu,
          xu,
          Mu = { F: _u, cb: Ru },
          ju = { F: _u, cb: Ru },
          Uu = { F: su, cb: Cu },
          Vu = { F: _u, cb: Cu },
          Fu = { rd: "local", NONE: "none", td: "session" };
        function qu() {
          var t = !(Ni(mi()) || !si()),
            e = Ti(),
            n = bi();
          (this.m = t),
            (this.h = e),
            (this.l = n),
            (this.a = {}),
            (t = Lu = Lu || new Pu());
          try {
            this.g =
              (!$n() && Pi()) || !l.indexedDB
                ? new t.a.F()
                : new Su(new (ui() ? Nu : t.a.F)());
          } catch (t) {
            (this.g = new Nu()), (this.h = !0);
          }
          try {
            this.i = new t.a.cb();
          } catch (t) {
            this.i = new Nu();
          }
          (this.v = new Nu()), (this.f = b(this.Zb, this)), (this.b = {});
        }
        function Hu() {
          return (xu = xu || new qu());
        }
        function Ku(t, e) {
          switch (e) {
            case "session":
              return t.i;
            case "none":
              return t.v;
            default:
              return t.g;
          }
        }
        function Gu(t, e) {
          return "firebase:" + t.name + (e ? ":" + e : "");
        }
        function Bu(t, e, n) {
          return (
            (n = Gu(e, n)), "local" == e.F && (t.b[n] = null), Ku(t, e.F).U(n)
          );
        }
        function Wu(t) {
          t.c && (clearInterval(t.c), (t.c = null));
        }
        function Xu(t) {
          (this.a = t), (this.b = Hu());
        }
        ((t = qu.prototype).get = function (t, e) {
          return Ku(this, t.F).get(Gu(t, e));
        }),
          (t.set = function (e, t, n) {
            var i = Gu(e, n),
              r = this,
              o = Ku(this, e.F);
            return o
              .set(i, t)
              .then(function () {
                return o.get(i);
              })
              .then(function (t) {
                "local" == e.F && (r.b[i] = t);
              });
          }),
          (t.addListener = function (t, e, n) {
            var i;
            (t = Gu(t, e)),
              this.l && (this.b[t] = l.localStorage.getItem(t)),
              ut(this.a) &&
                (Ku(this, "local").ca(this.f),
                this.h ||
                  (($n() || !Pi()) && l.indexedDB) ||
                  !this.l ||
                  (Wu((i = this)),
                  (i.c = setInterval(function () {
                    for (var t in i.a) {
                      var e = l.localStorage.getItem(t),
                        n = i.b[t];
                      e != n &&
                        ((i.b[t] = e),
                        (e = new Fe({
                          type: "storage",
                          key: t,
                          target: window,
                          oldValue: n,
                          newValue: e,
                          a: !0,
                        })),
                        i.Zb(e));
                    }
                  }, 1e3)))),
              this.a[t] || (this.a[t] = []),
              this.a[t].push(n);
          }),
          (t.removeListener = function (t, e, n) {
            (t = Gu(t, e)),
              this.a[t] &&
                (B(this.a[t], function (t) {
                  return t == n;
                }),
                0 == this.a[t].length && delete this.a[t]),
              ut(this.a) && (Ku(this, "local").ia(this.f), Wu(this));
          }),
          (t.Zb = function (t) {
            if (t && t.g) {
              var e = t.a.key;
              if (null == e)
                for (var n in this.a) {
                  var i = this.b[n];
                  void 0 === i && (i = null);
                  var r = l.localStorage.getItem(n);
                  r !== i && ((this.b[n] = r), this.nb(n));
                }
              else if (0 == e.indexOf("firebase:") && this.a[e]) {
                if (
                  (void 0 !== t.a.a ? Ku(this, "local").ia(this.f) : Wu(this),
                  this.m)
                )
                  if (
                    ((n = l.localStorage.getItem(e)), (i = t.a.newValue) !== n)
                  )
                    null !== i
                      ? l.localStorage.setItem(e, i)
                      : l.localStorage.removeItem(e);
                  else if (this.b[e] === i && void 0 === t.a.a) return;
                var o = this,
                  n = function () {
                    (void 0 === t.a.a &&
                      o.b[e] === l.localStorage.getItem(e)) ||
                      ((o.b[e] = l.localStorage.getItem(e)), o.nb(e));
                  };
                Ht &&
                $t &&
                10 == $t &&
                l.localStorage.getItem(e) !== t.a.newValue &&
                t.a.newValue !== t.a.oldValue
                  ? setTimeout(n, 10)
                  : n();
              }
            } else V(t, b(this.nb, this));
          }),
          (t.nb = function (t) {
            this.a[t] &&
              V(this.a[t], function (t) {
                t();
              });
          });
        var Ju,
          Yu = { name: "authEvent", F: "local" };
        function zu() {
          this.a = Hu();
        }
        function $u(t, e) {
          (this.b = Zu),
            (this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b)),
            (this.g = this.c = 0),
            (this.a = []),
            (this.i = t),
            (this.h = e),
            (this.l = l.Int32Array ? new Int32Array(64) : Array(64)),
            void 0 === Ju && (Ju = l.Int32Array ? new Int32Array(oc) : oc),
            this.reset();
        }
        w($u, function () {
          this.b = -1;
        });
        for (var Zu = 64, Qu = Zu - 1, tc = [], ec = 0; ec < Qu; ec++)
          tc[ec] = 0;
        var nc = W(128, tc);
        function ic(t) {
          for (var e = t.f, n = t.l, i = 0, r = 0; r < e.length; )
            (n[i++] =
              (e[r] << 24) | (e[r + 1] << 16) | (e[r + 2] << 8) | e[r + 3]),
              (r = 4 * i);
          for (e = 16; e < 64; e++) {
            var r = 0 | n[e - 15],
              i = 0 | n[e - 2],
              o =
                ((0 | n[e - 16]) +
                  (((r >>> 7) | (r << 25)) ^
                    ((r >>> 18) | (r << 14)) ^
                    (r >>> 3))) |
                0,
              a =
                ((0 | n[e - 7]) +
                  (((i >>> 17) | (i << 15)) ^
                    ((i >>> 19) | (i << 13)) ^
                    (i >>> 10))) |
                0;
            n[e] = (o + a) | 0;
          }
          (i = 0 | t.a[0]), (r = 0 | t.a[1]);
          var s = 0 | t.a[2],
            u = 0 | t.a[3],
            c = 0 | t.a[4],
            h = 0 | t.a[5],
            l = 0 | t.a[6];
          for (o = 0 | t.a[7], e = 0; e < 64; e++) {
            var f =
                ((((i >>> 2) | (i << 30)) ^
                  ((i >>> 13) | (i << 19)) ^
                  ((i >>> 22) | (i << 10))) +
                  ((i & r) ^ (i & s) ^ (r & s))) |
                0,
              a =
                ((o =
                  (o +
                    (((c >>> 6) | (c << 26)) ^
                      ((c >>> 11) | (c << 21)) ^
                      ((c >>> 25) | (c << 7)))) |
                  0) +
                  (((a = ((a = (c & h) ^ (~c & l)) + (0 | Ju[e])) | 0) +
                    (0 | n[e])) |
                    0)) |
                0,
              o = l,
              l = h,
              h = c,
              c = (u + a) | 0,
              u = s,
              s = r;
            (r = i), (i = (a + f) | 0);
          }
          (t.a[0] = (t.a[0] + i) | 0),
            (t.a[1] = (t.a[1] + r) | 0),
            (t.a[2] = (t.a[2] + s) | 0),
            (t.a[3] = (t.a[3] + u) | 0),
            (t.a[4] = (t.a[4] + c) | 0),
            (t.a[5] = (t.a[5] + h) | 0),
            (t.a[6] = (t.a[6] + l) | 0),
            (t.a[7] = (t.a[7] + o) | 0);
        }
        function rc(t, e, n) {
          void 0 === n && (n = e.length);
          var i = 0,
            r = t.c;
          if ("string" == typeof e)
            for (; i < n; )
              (t.f[r++] = e.charCodeAt(i++)), r == t.b && (ic(t), (r = 0));
          else {
            if (!p(e)) throw Error("message must be string or array");
            for (; i < n; ) {
              var o = e[i++];
              if (!("number" == typeof o && 0 <= o && o <= 255 && o == (0 | o)))
                throw Error("message must be a byte array");
              (t.f[r++] = o), r == t.b && (ic(t), (r = 0));
            }
          }
          (t.c = r), (t.g += n);
        }
        $u.prototype.reset = function () {
          (this.g = this.c = 0),
            (this.a = l.Int32Array ? new Int32Array(this.h) : X(this.h));
        };
        var oc = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ];
        function ac() {
          $u.call(this, 8, sc);
        }
        w(ac, $u);
        var sc = [
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ];
        function uc(t, e, n, i, r, o) {
          (this.v = t),
            (this.i = e),
            (this.l = n),
            (this.m = i || null),
            (this.u = r || null),
            (this.s = o),
            (this.h = e + ":" + n),
            (this.C = new zu()),
            (this.g = new Xu(this.h)),
            (this.f = null),
            (this.b = []),
            (this.a = this.c = null);
        }
        function cc(t) {
          return new T("invalid-cordova-configuration", t);
        }
        function hc(t, e) {
          for (var n = 0; n < t.b.length; n++)
            try {
              t.b[n](e);
            } catch (t) {}
        }
        function lc(c) {
          return (
            c.f ||
              (c.f = c.ma().then(function () {
                return new le(function (n) {
                  function e(i) {
                    (t = !0),
                      a && a.cancel(),
                      fc(r).then(function (t) {
                        var e,
                          n = o;
                        t &&
                          i &&
                          i.url &&
                          ((e = null),
                          (n =
                            (e =
                              -1 != (n = Xr(i.url)).indexOf("/__/auth/callback")
                                ? (e =
                                    "object" ==
                                    typeof (e = ki(
                                      Nn((e = _n(n)), "firebaseError") || null
                                    ))
                                      ? E(e)
                                      : null)
                                  ? new Oo(t.c, t.b, null, null, e, null, t.T())
                                  : new Oo(t.c, t.b, n, t.f, null, null, t.T())
                                : e) || o)),
                          hc(r, n);
                      });
                  }
                  var r, o, t, a, i, s, u;
                  c.Ea(function t(e) {
                    return n(e), c.Ta(t), !1;
                  }),
                    (r = c),
                    (o = new Oo(
                      "unknown",
                      null,
                      null,
                      null,
                      new T("no-auth-event")
                    )),
                    (t = !1),
                    (a = vn(500).then(function () {
                      return fc(r).then(function () {
                        t || hc(r, o);
                      });
                    })),
                    (i = l.handleOpenURL),
                    (l.handleOpenURL = function (t) {
                      if (
                        (0 ==
                          t
                            .toLowerCase()
                            .indexOf(
                              gi("BuildInfo.packageName", l).toLowerCase() +
                                "://"
                            ) && e({ url: t }),
                        "function" == typeof i)
                      )
                        try {
                          i(t);
                        } catch (t) {
                          console.error(t);
                        }
                    }),
                    (Po = Po || new Ro()),
                    (s = e),
                    (u = Po).a.push(s),
                    u.b ||
                      ((u.b = function (t) {
                        for (var e = 0; e < u.a.length; e++) u.a[e](t);
                      }),
                      "function" ==
                        typeof (s = gi("universalLinks.subscribe", l)) &&
                        s(null, u.b));
                });
              })),
            c.f
          );
        }
        function fc(e) {
          var t,
            n = null;
          return (t = e.g).b
            .get(Yu, t.a)
            .then(Co)
            .then(function (t) {
              return (n = t), Bu((t = e.g).b, Yu, t.a);
            })
            .then(function () {
              return n;
            });
        }
        function dc(t) {
          (this.a = t), (this.b = Hu());
        }
        ((t = uc.prototype).ma = function () {
          return (
            this.Ia ||
            (this.Ia = (
              ai(void 0)
                ? oi().then(function () {
                    return new le(function (t, e) {
                      var n = l.document,
                        i = setTimeout(function () {
                          e(Error("Cordova framework is not ready."));
                        }, 1e3);
                      n.addEventListener(
                        "deviceready",
                        function () {
                          clearTimeout(i), t();
                        },
                        !1
                      );
                    });
                  })
                : ye(
                    Error("Cordova must run in an Android or iOS file scheme.")
                  )
            ).then(
              function () {
                if ("function" != typeof gi("universalLinks.subscribe", l))
                  throw cc(
                    "cordova-universal-links-plugin-fix is not installed"
                  );
                if (void 0 === gi("BuildInfo.packageName", l))
                  throw cc("cordova-plugin-buildinfo is not installed");
                if (
                  "function" !=
                  typeof gi("cordova.plugins.browsertab.openUrl", l)
                )
                  throw cc("cordova-plugin-browsertab is not installed");
                if ("function" != typeof gi("cordova.InAppBrowser.open", l))
                  throw cc("cordova-plugin-inappbrowser is not installed");
              },
              function () {
                throw new T("cordova-not-ready");
              }
            ))
          );
        }),
          (t.Pb = function (t, e) {
            return (
              e(new T("operation-not-supported-in-this-environment")), be()
            );
          }),
          (t.Nb = function () {
            return ye(new T("operation-not-supported-in-this-environment"));
          }),
          (t.ac = function () {
            return !1;
          }),
          (t.Yb = function () {
            return !0;
          }),
          (t.Ub = function () {
            return !0;
          }),
          (t.Ob = function (t, e, n, i) {
            if (this.c) return ye(new T("redirect-operation-pending"));
            var r = this,
              o = l.document,
              a = null,
              s = null,
              u = null,
              c = null;
            return (this.c = be()
              .then(function () {
                return _o(e), lc(r);
              })
              .then(function () {
                return (function (n, t, e, i, r) {
                  var o = (function () {
                      for (var t = 20, e = []; 0 < t; )
                        e.push(
                          "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(
                            Math.floor(62 * Math.random())
                          )
                        ),
                          t--;
                      return e.join("");
                    })(),
                    a = new Oo(t, i, null, o, new T("no-auth-event"), null, r),
                    s = gi("BuildInfo.packageName", l);
                  if ("string" != typeof s)
                    throw new T("invalid-cordova-configuration");
                  var u = gi("BuildInfo.displayName", l),
                    c = {};
                  if (
                    mi()
                      .toLowerCase()
                      .match(/iphone|ipad|ipod/)
                  )
                    c.ibi = s;
                  else {
                    if (
                      !mi()
                        .toLowerCase()
                        .match(/android/)
                    )
                      return ye(
                        new T("operation-not-supported-in-this-environment")
                      );
                    c.apn = s;
                  }
                  u && (c.appDisplayName = u),
                    (o = (function (t) {
                      var e = new ac();
                      rc(e, t), (t = []);
                      var n = 8 * e.g;
                      e.c < 56
                        ? rc(e, nc, 56 - e.c)
                        : rc(e, nc, e.b - (e.c - 56));
                      for (var i = 63; 56 <= i; i--)
                        (e.f[i] = 255 & n), (n /= 256);
                      for (ic(e), i = n = 0; i < e.i; i++)
                        for (var r = 24; 0 <= r; r -= 8)
                          t[n++] = (e.a[i] >> r) & 255;
                      return q(t, function (t) {
                        return 1 < (t = t.toString(16)).length ? t : "0" + t;
                      }).join("");
                    })(o)),
                    (c.sessionId = o);
                  var h = au(n.v, n.i, n.l, t, e, null, i, n.m, c, n.u, r, n.s);
                  return n
                    .ma()
                    .then(function () {
                      var t = n.h;
                      return n.C.a.set(Yu, a.w(), t);
                    })
                    .then(function () {
                      var t = gi("cordova.plugins.browsertab.isAvailable", l);
                      if ("function" != typeof t)
                        throw new T("invalid-cordova-configuration");
                      var e = null;
                      t(function (t) {
                        if (t) {
                          if (
                            "function" !=
                            typeof (e = gi(
                              "cordova.plugins.browsertab.openUrl",
                              l
                            ))
                          )
                            throw new T("invalid-cordova-configuration");
                          e(h);
                        } else {
                          if (
                            "function" !=
                            typeof (e = gi("cordova.InAppBrowser.open", l))
                          )
                            throw new T("invalid-cordova-configuration");
                          (t = mi()),
                            (n.a = e(
                              h,
                              t.match(/(iPad|iPhone|iPod).*OS 7_\d/i) ||
                                t.match(/(iPad|iPhone|iPod).*OS 8_\d/i)
                                ? "_blank"
                                : "_system",
                              "location=yes"
                            ));
                        }
                      });
                    });
                })(r, t, e, n, i);
              })
              .then(function () {
                return new le(function (e, t) {
                  (s = function () {
                    var t = gi("cordova.plugins.browsertab.close", l);
                    return (
                      e(),
                      "function" == typeof t && t(),
                      r.a &&
                        "function" == typeof r.a.close &&
                        (r.a.close(), (r.a = null)),
                      !1
                    );
                  }),
                    r.Ea(s),
                    (u = function () {
                      a =
                        a ||
                        vn(2e3).then(function () {
                          t(new T("redirect-cancelled-by-user"));
                        });
                    }),
                    (c = function () {
                      Ci() && u();
                    }),
                    o.addEventListener("resume", u, !1),
                    mi()
                      .toLowerCase()
                      .match(/android/) ||
                      o.addEventListener("visibilitychange", c, !1);
                }).o(function (t) {
                  return fc(r).then(function () {
                    throw t;
                  });
                });
              })
              .oa(function () {
                u && o.removeEventListener("resume", u, !1),
                  c && o.removeEventListener("visibilitychange", c, !1),
                  a && a.cancel(),
                  s && r.Ta(s),
                  (r.c = null);
              }));
          }),
          (t.Ea = function (e) {
            this.b.push(e),
              lc(this).o(function (t) {
                "auth/invalid-cordova-configuration" === t.code &&
                  ((t = new Oo(
                    "unknown",
                    null,
                    null,
                    null,
                    new T("no-auth-event")
                  )),
                  e(t));
              });
          }),
          (t.Ta = function (e) {
            B(this.b, function (t) {
              return t == e;
            });
          });
        var pc = { name: "pendingRedirect", F: "session" };
        function vc(t) {
          return Bu(t.b, pc, t.a);
        }
        function mc(t, e, n, i) {
          (this.i = {}),
            (this.u = 0),
            (this.D = t),
            (this.v = e),
            (this.m = n),
            (this.J = i),
            (this.h = []),
            (this.f = !1),
            (this.l = b(this.s, this)),
            (this.b = new Rc()),
            (this.C = new Mc()),
            (this.g = new dc(Oc(this.v, this.m))),
            (this.c = {}),
            (this.c.unknown = this.b),
            (this.c.signInViaRedirect = this.b),
            (this.c.linkViaRedirect = this.b),
            (this.c.reauthViaRedirect = this.b),
            (this.c.signInViaPopup = this.C),
            (this.c.linkViaPopup = this.C),
            (this.c.reauthViaPopup = this.C),
            (this.a = gc(this.D, this.v, this.m, A, this.J));
        }
        function gc(t, e, n, i, r) {
          var o = Gl.default.SDK_VERSION || null;
          return new (ai() ? uc : nu)(t, e, n, o, i, r);
        }
        function bc(e) {
          e.f || ((e.f = !0), e.a.Ea(e.l));
          var n = e.a;
          return e.a.ma().o(function (t) {
            throw (e.a == n && e.reset(), t);
          });
        }
        function yc(n) {
          n.a.Yb() &&
            bc(n).o(function (t) {
              var e = new Oo(
                "unknown",
                null,
                null,
                null,
                new T("operation-not-supported-in-this-environment")
              );
              kc(t) && n.s(e);
            }),
            n.a.Ub() || Dc(n.b);
        }
        function wc(n, t) {
          K(n.h, t) || n.h.push(t),
            n.f ||
              (t = n.g).b
                .get(pc, t.a)
                .then(function (t) {
                  return "pending" == t;
                })
                .then(function (t) {
                  t
                    ? vc(n.g).then(function () {
                        bc(n).o(function (t) {
                          var e = new Oo(
                            "unknown",
                            null,
                            null,
                            null,
                            new T("operation-not-supported-in-this-environment")
                          );
                          kc(t) && n.s(e);
                        });
                      })
                    : yc(n);
                })
                .o(function () {
                  yc(n);
                });
        }
        function Ic(t, e) {
          B(t.h, function (t) {
            return t == e;
          });
        }
        (mc.prototype.reset = function () {
          (this.f = !1),
            this.a.Ta(this.l),
            (this.a = gc(this.D, this.v, this.m, null, this.J)),
            (this.i = {});
        }),
          (mc.prototype.s = function (t) {
            if (!t) throw new T("invalid-auth-event");
            if (
              (6e5 <= Date.now() - this.u && ((this.i = {}), (this.u = 0)),
              t && t.getUid() && this.i.hasOwnProperty(t.getUid()))
            )
              return !1;
            for (var e = !1, n = 0; n < this.h.length; n++) {
              var i = this.h[n];
              if (i.Gb(t.c, t.b)) {
                (e = this.c[t.c]) &&
                  (e.h(t, i),
                  t &&
                    (t.f || t.b) &&
                    ((this.i[t.getUid()] = !0), (this.u = Date.now()))),
                  (e = !0);
                break;
              }
            }
            return Dc(this.b), e;
          });
        var Tc = new Oi(2e3, 1e4),
          Ec = new Oi(3e4, 6e4);
        function Ac(t, e, n, i, r, o, a) {
          return t.a.Nb(
            e,
            n,
            i,
            function () {
              t.f || ((t.f = !0), t.a.Ea(t.l));
            },
            function () {
              t.reset();
            },
            r,
            o,
            a
          );
        }
        function kc(t) {
          return t && "auth/cordova-not-ready" == t.code;
        }
        function Sc(e, t, n, i, r) {
          var o, a;
          return (a = e.g).b.set(pc, "pending", a.a).then(function () {
            return e.a
              .Ob(t, n, i, r)
              .o(function (t) {
                if (kc(t))
                  throw new T("operation-not-supported-in-this-environment");
                return (
                  (o = t),
                  vc(e.g).then(function () {
                    throw o;
                  })
                );
              })
              .then(function () {
                return e.a.ac()
                  ? new le(function () {})
                  : vc(e.g)
                      .then(function () {
                        return e.ra();
                      })
                      .then(function () {})
                      .o(function () {});
              });
          });
        }
        function Nc(t, e, n, i, r) {
          return t.a.Pb(
            i,
            function (t) {
              e.na(n, null, t, r);
            },
            Tc.get()
          );
        }
        mc.prototype.ra = function () {
          return this.b.ra();
        };
        var _c = {};
        function Oc(t, e, n) {
          return (t = t + ":" + e), n ? t + ":" + n.url : t;
        }
        function Cc(t, e, n, i) {
          var r = Oc(e, n, i);
          return _c[r] || (_c[r] = new mc(t, e, n, i)), _c[r];
        }
        function Rc() {
          (this.b = null),
            (this.f = []),
            (this.c = []),
            (this.a = null),
            (this.i = this.g = !1);
        }
        function Dc(t) {
          t.g || ((t.g = !0), xc(t, !1, null, null));
        }
        function Pc(t) {
          t.g && !t.i && xc(t, !1, null, null);
        }
        function Lc(t, e) {
          if (
            ((t.b = function () {
              return be(e);
            }),
            t.f.length)
          )
            for (var n = 0; n < t.f.length; n++) t.f[n](e);
        }
        function xc(t, e, n, i) {
          e
            ? i
              ? (function (t, e) {
                  if (
                    ((t.b = function () {
                      return ye(e);
                    }),
                    t.c.length)
                  )
                    for (var n = 0; n < t.c.length; n++) t.c[n](e);
                })(t, i)
              : Lc(t, n)
            : Lc(t, { user: null }),
            (t.f = []),
            (t.c = []);
        }
        function Mc() {}
        function jc() {
          (this.jb = !1),
            Object.defineProperty(this, "appVerificationDisabled", {
              get: function () {
                return this.jb;
              },
              set: function (t) {
                this.jb = t;
              },
              enumerable: !1,
            });
        }
        function Uc(t, e) {
          (this.a = e), Ui(this, "verificationId", t);
        }
        function Vc(t, e, n, i) {
          return new ko(t).gb(e, n).then(function (t) {
            return new Uc(t, i);
          });
        }
        function Fc(t) {
          var e = Pr(t);
          if (!(e && e.exp && e.auth_time && e.iat))
            throw new T(
              "internal-error",
              "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation."
            );
          Vi(this, {
            token: t,
            expirationTime: Di(1e3 * e.exp),
            authTime: Di(1e3 * e.auth_time),
            issuedAtTime: Di(1e3 * e.iat),
            signInProvider:
              e.firebase && e.firebase.sign_in_provider
                ? e.firebase.sign_in_provider
                : null,
            signInSecondFactor:
              e.firebase && e.firebase.sign_in_second_factor
                ? e.firebase.sign_in_second_factor
                : null,
            claims: e,
          });
        }
        function qc(t, e, n) {
          var i = e && e[Kc];
          if (!i)
            throw new T(
              "argument-error",
              "Internal assert: Invalid MultiFactorResolver"
            );
          (this.a = t),
            (this.f = ct(e)),
            (this.g = n),
            (this.c = new Jr(null, i)),
            (this.b = []);
          var r = this;
          V(e[Hc] || [], function (t) {
            (t = Ki(t)) && r.b.push(t);
          }),
            Ui(this, "auth", this.a),
            Ui(this, "session", this.c),
            Ui(this, "hints", this.b);
        }
        (Rc.prototype.reset = function () {
          (this.b = null), this.a && (this.a.cancel(), (this.a = null));
        }),
          (Rc.prototype.h = function (t, u) {
            var e, n, i, r;
            t
              ? (this.reset(),
                (this.g = !0),
                (e = t.c),
                (n = t.b),
                (i = t.a && "auth/web-storage-unsupported" == t.a.code),
                (r =
                  t.a &&
                  "auth/operation-not-supported-in-this-environment" ==
                    t.a.code),
                (this.i = !(!i && !r)),
                "unknown" != e || i || r
                  ? t.a
                    ? (xc(this, !0, null, t.a), be())
                    : u.Fa(e, n)
                    ? (function (e, t, n) {
                        n = u.Fa(t.c, t.b);
                        var i = t.g,
                          r = t.f,
                          o = t.i,
                          a = t.T(),
                          s = !!t.c.match(/Redirect$/);
                        n(i, r, a, o)
                          .then(function (t) {
                            xc(e, s, t, null);
                          })
                          .o(function (t) {
                            xc(e, s, null, t);
                          });
                      })(this, t, u)
                    : ye(new T("invalid-auth-event"))
                  : (xc(this, !1, null, null), be()))
              : ye(new T("invalid-auth-event"));
          }),
          (Rc.prototype.ra = function () {
            var r = this;
            return new le(function (t, e) {
              var n, i;
              r.b
                ? r.b().then(t, e)
                : (r.f.push(t),
                  r.c.push(e),
                  (n = r),
                  (i = new T("timeout")),
                  n.a && n.a.cancel(),
                  (n.a = vn(Ec.get()).then(function () {
                    n.b || ((n.g = !0), xc(n, !0, null, i));
                  })));
            });
          }),
          (Mc.prototype.h = function (t, e) {
            var n, i, r, o, a;
            t
              ? ((n = t.c),
                (i = t.b),
                t.a
                  ? (e.na(t.c, null, t.a, t.b), be())
                  : e.Fa(n, i)
                  ? ((r = e),
                    (o = t.b),
                    (a = t.c),
                    r
                      .Fa(a, o)(t.g, t.f, t.T(), t.i)
                      .then(function (t) {
                        r.na(a, t, null, o);
                      })
                      .o(function (t) {
                        r.na(a, null, t, o);
                      }))
                  : ye(new T("invalid-auth-event")))
              : ye(new T("invalid-auth-event"));
          }),
          (Uc.prototype.confirm = function (t) {
            return (t = So(this.verificationId, t)), this.a(t);
          });
        var Hc = "mfaInfo",
          Kc = "mfaPendingCredential";
        function Gc(t, e, n, i) {
          T.call(this, "multi-factor-auth-required", i, e),
            (this.b = new qc(t, e, n)),
            Ui(this, "resolver", this.b);
        }
        function Bc(t, e, n) {
          if (
            t &&
            m(t.serverResponse) &&
            "auth/multi-factor-auth-required" === t.code
          )
            try {
              return new Gc(e, t.serverResponse, n, t.message);
            } catch (t) {}
          return null;
        }
        function Wc() {}
        function Xc(t) {
          Ui(this, "factorId", t.fa), (this.a = t);
        }
        function Jc(t) {
          if ((Xc.call(this, t), this.a.fa != ko.PROVIDER_ID))
            throw new T(
              "argument-error",
              "firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential"
            );
        }
        function Yc(t, e) {
          for (var n in (Ve.call(this, t), e)) this[n] = e[n];
        }
        function zc(t, e) {
          (this.a = t),
            (this.b = []),
            (this.c = b(this.yc, this)),
            $e(this.a, "userReloaded", this.c);
          var i = [];
          e &&
            e.multiFactor &&
            e.multiFactor.enrolledFactors &&
            V(e.multiFactor.enrolledFactors, function (t) {
              var e = null,
                n = {};
              if (t) {
                t.uid && (n[Wi] = t.uid),
                  t.displayName && (n[Gi] = t.displayName),
                  t.enrollmentTime &&
                    (n[Bi] = new Date(t.enrollmentTime).toISOString()),
                  t.phoneNumber && (n[Xi] = t.phoneNumber);
                try {
                  e = new Ji(n);
                } catch (t) {}
                t = e;
              } else t = null;
              t && i.push(t);
            }),
            $c(this, i);
        }
        function $c(t, e) {
          (t.b = e), Ui(t, "enrolledFactors", e);
        }
        function Zc(t, e, n) {
          if (
            ((this.h = t),
            (this.i = e),
            (this.g = n),
            (this.c = 3e4),
            (this.f = 96e4),
            (this.b = null),
            (this.a = this.c),
            this.f < this.c)
          )
            throw Error(
              "Proactive refresh lower bound greater than upper bound!"
            );
        }
        function Qc(t) {
          (this.f = t), (this.b = this.a = null), (this.c = Date.now());
        }
        function th(t, e) {
          void 0 === e && (e = t.b ? (e = t.b).a - e.g : 0),
            (t.c = Date.now() + 1e3 * e);
        }
        function eh(t, e) {
          (t.b = Dr(e[qa] || "")),
            (t.a = e.refreshToken),
            th(t, void 0 !== (e = e.expiresIn) ? Number(e) : void 0);
        }
        function nh(t, e) {
          (this.a = t || null),
            (this.b = e || null),
            Vi(this, {
              lastSignInTime: Di(e || null),
              creationTime: Di(t || null),
            });
        }
        function ih(t, e, n, i, r, o) {
          Vi(this, {
            uid: t,
            displayName: i || null,
            photoURL: r || null,
            email: n || null,
            phoneNumber: o || null,
            providerId: e,
          });
        }
        function rh(t, e, n) {
          (this.N = []),
            (this.l = t.apiKey),
            (this.m = t.appName),
            (this.s = t.authDomain || null);
          var i,
            r = Gl.default.SDK_VERSION ? vi(Gl.default.SDK_VERSION) : null;
          (this.a = new Va(this.l, _(A), r)),
            (this.u = t.emulatorConfig || null) && Xa(this.a, this.u),
            (this.h = new Qc(this.a)),
            dh(this, e[qa]),
            eh(this.h, e),
            Ui(this, "refreshToken", this.h.a),
            mh(this, n || {}),
            hn.call(this),
            (this.P = !1),
            this.s && yi() && (this.b = Cc(this.s, this.l, this.m, this.u)),
            (this.W = []),
            (this.i = null),
            (this.D =
              ((i = this),
              new Zc(
                function () {
                  return i.I(!0);
                },
                function (t) {
                  return !(!t || "auth/network-request-failed" != t.code);
                },
                function () {
                  var t = i.h.c - Date.now() - 3e5;
                  return 0 < t ? t : 0;
                }
              ))),
            (this.ba = b(this.ib, this));
          var o = this;
          (this.za = null),
            (this.Pa = function (t) {
              o.xa(t.h);
            }),
            (this.qa = null),
            (this.Ba = function (t) {
              oh(o, t.c);
            }),
            (this.$ = null),
            (this.aa = []),
            (this.Oa = function (t) {
              uh(o, t.f);
            }),
            (this.ja = null),
            (this.S = new zc(this, n)),
            Ui(this, "multiFactor", this.S);
        }
        function oh(t, e) {
          (t.u = e),
            Xa(t.a, e),
            t.b &&
              ((e = t.b),
              (t.b = Cc(t.s, t.l, t.m, t.u)),
              t.P && (Ic(e, t), wc(t.b, t)));
        }
        function ah(t, e) {
          t.qa && tn(t.qa, "languageCodeChanged", t.Pa),
            (t.qa = e) && $e(e, "languageCodeChanged", t.Pa);
        }
        function sh(t, e) {
          t.$ && tn(t.$, "emulatorConfigChanged", t.Ba),
            (t.$ = e) && $e(e, "emulatorConfigChanged", t.Ba);
        }
        function uh(t, e) {
          (t.aa = e),
            Ya(
              t.a,
              Gl.default.SDK_VERSION ? vi(Gl.default.SDK_VERSION, t.aa) : null
            );
        }
        function ch(t, e) {
          t.ja && tn(t.ja, "frameworkChanged", t.Oa),
            (t.ja = e) && $e(e, "frameworkChanged", t.Oa);
        }
        function hh(e) {
          try {
            return Gl.default.app(e.m).auth();
          } catch (t) {
            throw new T(
              "internal-error",
              "No firebase.auth.Auth instance is available for the Firebase App '" +
                e.m +
                "'!"
            );
          }
        }
        function lh(t) {
          t.J ||
            t.D.b ||
            (t.D.start(),
            tn(t, "tokenChanged", t.ba),
            $e(t, "tokenChanged", t.ba));
        }
        function fh(t) {
          tn(t, "tokenChanged", t.ba), t.D.stop();
        }
        function dh(t, e) {
          (t.Aa = e), Ui(t, "_lat", e);
        }
        function ph(t) {
          for (var e = [], n = 0; n < t.W.length; n++) e.push(t.W[n](t));
          return Ie(e).then(function () {
            return t;
          });
        }
        function vh(t) {
          t.b && !t.P && ((t.P = !0), wc(t.b, t));
        }
        function mh(t, e) {
          Vi(t, {
            uid: e.uid,
            displayName: e.displayName || null,
            photoURL: e.photoURL || null,
            email: e.email || null,
            emailVerified: e.emailVerified || !1,
            phoneNumber: e.phoneNumber || null,
            isAnonymous: e.isAnonymous || !1,
            tenantId: e.tenantId || null,
            metadata: new nh(e.createdAt, e.lastLoginAt),
            providerData: [],
          }),
            (t.a.b = t.tenantId);
        }
        function gh() {}
        function bh(t) {
          return be().then(function () {
            if (t.J) throw new T("app-deleted");
          });
        }
        function yh(t) {
          return q(t.providerData, function (t) {
            return t.providerId;
          });
        }
        function wh(t, e) {
          e && (Ih(t, e.providerId), t.providerData.push(e));
        }
        function Ih(t, e) {
          B(t.providerData, function (t) {
            return t.providerId == e;
          });
        }
        function Th(t, e, n) {
          ("uid" != e || n) && t.hasOwnProperty(e) && Ui(t, e, n);
        }
        function Eh(e, t) {
          var n, i;
          e != t &&
            (Vi(e, {
              uid: t.uid,
              displayName: t.displayName,
              photoURL: t.photoURL,
              email: t.email,
              emailVerified: t.emailVerified,
              phoneNumber: t.phoneNumber,
              isAnonymous: t.isAnonymous,
              tenantId: t.tenantId,
              providerData: [],
            }),
            t.metadata
              ? Ui(e, "metadata", new nh((i = t.metadata).a, i.b))
              : Ui(e, "metadata", new nh()),
            V(t.providerData, function (t) {
              wh(e, t);
            }),
            (n = e.h),
            (i = t.h),
            (n.b = i.b),
            (n.a = i.a),
            (n.c = i.c),
            Ui(e, "refreshToken", e.h.a),
            $c(e.S, t.S.b));
        }
        function Ah(i) {
          return i.I().then(function (t) {
            var e,
              n = i.isAnonymous;
            return Bs((e = i).a, Ts, { idToken: t })
              .then(b(e.Kc, e))
              .then(function () {
                return n || Th(i, "isAnonymous", !1), t;
              });
          });
        }
        function kh(t, e) {
          e[qa] &&
            t.Aa != e[qa] &&
            (eh(t.h, e),
            t.dispatchEvent(new Yc("tokenChanged")),
            dh(t, e[qa]),
            Th(t, "refreshToken", t.h.a));
        }
        function Sh(t, e) {
          return Ah(t).then(function () {
            if (K(yh(t), e))
              return ph(t).then(function () {
                throw new T("provider-already-linked");
              });
          });
        }
        function Nh(t, e, n) {
          return Fi({
            user: t,
            credential: No(e),
            additionalUserInfo: (e = Ur(e)),
            operationType: n,
          });
        }
        function _h(t, e) {
          return (
            kh(t, e),
            t.reload().then(function () {
              return t;
            })
          );
        }
        function Oh(n, i, t, e, r) {
          if (!yi())
            return ye(new T("operation-not-supported-in-this-environment"));
          if (n.i && !r) return ye(n.i);
          var o = jr(t.providerId),
            a = Si(n.uid + ":::"),
            s = null,
            u = ni(
              (s =
                (!Ti() || si()) && n.s && t.isOAuthProvider
                  ? au(
                      n.s,
                      n.l,
                      n.m,
                      i,
                      t,
                      null,
                      a,
                      Gl.default.SDK_VERSION || null,
                      null,
                      null,
                      n.tenantId,
                      n.u
                    )
                  : s),
              o && o.va,
              o && o.ua
            );
          return (
            (e = e()
              .then(function () {
                if ((Rh(n), !r)) return n.I().then(function () {});
              })
              .then(function () {
                return Ac(n.b, u, i, t, a, !!s, n.tenantId);
              })
              .then(function () {
                return new le(function (t, e) {
                  n.na(i, null, new T("cancelled-popup-request"), n.g || null),
                    (n.f = t),
                    (n.C = e),
                    (n.g = a),
                    (n.c = Nc(n.b, n, i, u, a));
                });
              })
              .then(function (t) {
                return u && ei(u), t ? Fi(t) : null;
              })
              .o(function (t) {
                throw (u && ei(u), t);
              })),
            Dh(n, e, r)
          );
        }
        function Ch(e, t, n, i, r) {
          if (!yi())
            return ye(new T("operation-not-supported-in-this-environment"));
          if (e.i && !r) return ye(e.i);
          var o = null,
            a = Si(e.uid + ":::");
          return (
            (i = i()
              .then(function () {
                if ((Rh(e), !r)) return e.I().then(function () {});
              })
              .then(function () {
                return (e.ga = a), ph(e);
              })
              .then(function (t) {
                return e.ha ? (t = e.ha).b.set(xh, e.w(), t.a) : t;
              })
              .then(function () {
                return Sc(e.b, t, n, a, e.tenantId);
              })
              .o(function (t) {
                if (((o = t), e.ha)) return Mh(e.ha);
                throw o;
              })
              .then(function () {
                if (o) throw o;
              })),
            Dh(e, i, r)
          );
        }
        function Rh(t) {
          if (!t.b || !t.P) {
            if (t.b && !t.P) throw new T("internal-error");
            throw new T("auth-domain-config-required");
          }
        }
        function Dh(n, t, e) {
          var i,
            r =
              (i = n).i && !e
                ? (t.cancel(), ye(i.i))
                : t.o(function (t) {
                    throw (
                      (!t ||
                        ("auth/user-disabled" != t.code &&
                          "auth/user-token-expired" != t.code) ||
                        (i.i || i.dispatchEvent(new Yc("userInvalidated")),
                        (i.i = t)),
                      t)
                    );
                  });
          return (
            n.N.push(r),
            r.oa(function () {
              G(n.N, r);
            }),
            r.o(function (t) {
              var e = null;
              throw (
                (e =
                  t && "auth/multi-factor-auth-required" === t.code
                    ? Bc(t.w(), hh(n), b(n.jc, n))
                    : e) || t
              );
            })
          );
        }
        function Ph(t) {
          if (!t.apiKey) return null;
          var e = {
              apiKey: t.apiKey,
              authDomain: t.authDomain,
              appName: t.appName,
              emulatorConfig: t.emulatorConfig,
            },
            n = {};
          if (!t.stsTokenManager || !t.stsTokenManager.accessToken) return null;
          (n[qa] = t.stsTokenManager.accessToken),
            (n.refreshToken = t.stsTokenManager.refreshToken || null);
          var i = t.stsTokenManager.expirationTime;
          i && (n.expiresIn = (i - Date.now()) / 1e3);
          var r = new rh(e, n, t);
          return (
            t.providerData &&
              V(t.providerData, function (t) {
                t && wh(r, Fi(t));
              }),
            t.redirectEventId && (r.ga = t.redirectEventId),
            r
          );
        }
        function Lh(t) {
          (this.a = t), (this.b = Hu());
        }
        (qc.prototype.Rc = function (t) {
          var n = this;
          return t.tb(this.a.a, this.c).then(function (t) {
            var e = ct(n.f);
            return delete e[Hc], delete e[Kc], lt(e, t), n.g(e);
          });
        }),
          w(Gc, T),
          (Wc.prototype.tb = function (t, e, n) {
            return e.type == Yr
              ? ((o = this),
                (a = t),
                (s = n),
                e.Ha().then(function (t) {
                  return (
                    (t = { idToken: t }),
                    void 0 !== s && (t.displayName = s),
                    lt(t, { phoneVerificationInfo: Ao(o.a) }),
                    Bs(a, ws, t)
                  );
                }))
              : ((i = this),
                (r = t),
                e.Ha().then(function (t) {
                  return (
                    lt((t = { mfaPendingCredential: t }), {
                      phoneVerificationInfo: Ao(i.a),
                    }),
                    Bs(r, Is, t)
                  );
                }));
            var i, r, o, a, s;
          }),
          w(Xc, Wc),
          w(Jc, Xc),
          w(Yc, Ve),
          ((t = zc.prototype).yc = function (t) {
            var e;
            $c(
              this,
              ((t = t.hd),
              (e = []),
              V(t.mfaInfo || [], function (t) {
                (t = Ki(t)) && e.push(t);
              }),
              e)
            );
          }),
          (t.Sb = function () {
            return this.a.I().then(function (t) {
              return new Jr(t, null);
            });
          }),
          (t.fc = function (e, n) {
            var i = this,
              r = this.a.a;
            return this.Sb()
              .then(function (t) {
                return e.tb(r, t, n);
              })
              .then(function (t) {
                return kh(i.a, t), i.a.reload();
              });
          }),
          (t.bd = function (t) {
            var n = this,
              i = "string" == typeof t ? t : t.uid,
              e = this.a.a;
            return this.a
              .I()
              .then(function (t) {
                return Bs(e, Gs, { idToken: t, mfaEnrollmentId: i });
              })
              .then(function (t) {
                var e = F(n.b, function (t) {
                  return t.uid != i;
                });
                return (
                  $c(n, e),
                  kh(n.a, t),
                  n.a.reload().o(function (t) {
                    if ("auth/user-token-expired" != t.code) throw t;
                  })
                );
              });
          }),
          (t.w = function () {
            return {
              multiFactor: {
                enrolledFactors: q(this.b, function (t) {
                  return t.w();
                }),
              },
            };
          }),
          (Zc.prototype.start = function () {
            (this.a = this.c),
              (function e(n, t) {
                var i;
                n.stop(),
                  (n.b = vn(
                    ((i = n),
                    (t = t)
                      ? ((i.a = i.c), i.g())
                      : ((t = i.a), (i.a *= 2), i.a > i.f && (i.a = i.f), t))
                  )
                    .then(Ri)
                    .then(function () {
                      return n.h();
                    })
                    .then(function () {
                      e(n, !0);
                    })
                    .o(function (t) {
                      n.i(t) && e(n, !1);
                    }));
              })(this, !0);
          }),
          (Zc.prototype.stop = function () {
            this.b && (this.b.cancel(), (this.b = null));
          }),
          (Qc.prototype.w = function () {
            return {
              apiKey: this.f.c,
              refreshToken: this.a,
              accessToken: this.b && this.b.toString(),
              expirationTime: this.c,
            };
          }),
          (Qc.prototype.getToken = function (t) {
            return (
              (t = !!t),
              this.b && !this.a
                ? ye(new T("user-token-expired"))
                : t || !this.b || Date.now() > this.c - 3e4
                ? this.a
                  ? ((t = {
                      grant_type: "refresh_token",
                      refresh_token: (e = this).a,
                    }),
                    (i = e.f),
                    (r = t),
                    new le(function (e, n) {
                      ("refresh_token" == r.grant_type && r.refresh_token) ||
                      ("authorization_code" == r.grant_type && r.code)
                        ? za(
                            i,
                            i.l + "?key=" + encodeURIComponent(i.c),
                            function (t) {
                              t
                                ? t.error
                                  ? n(Xs(t))
                                  : t.access_token && t.refresh_token
                                  ? e(t)
                                  : n(new T("internal-error"))
                                : n(new T("network-request-failed"));
                            },
                            "POST",
                            Fn(r).toString(),
                            i.g,
                            i.m.get()
                          )
                        : n(new T("internal-error"));
                    })
                      .then(function (t) {
                        return (
                          (e.b = Dr(t.access_token)),
                          (e.a = t.refresh_token),
                          th(e, t.expires_in),
                          { accessToken: e.b.toString(), refreshToken: e.a }
                        );
                      })
                      .o(function (t) {
                        throw (
                          ("auth/user-token-expired" == t.code && (e.a = null),
                          t)
                        );
                      }))
                  : be(null)
                : be({ accessToken: this.b.toString(), refreshToken: this.a })
            );
            var e, i, r;
          }),
          (nh.prototype.w = function () {
            return { lastLoginAt: this.b, createdAt: this.a };
          }),
          w(rh, hn),
          (rh.prototype.xa = function (t) {
            (this.za = t), Wa(this.a, t);
          }),
          (rh.prototype.la = function () {
            return this.za;
          }),
          (rh.prototype.Ga = function () {
            return X(this.aa);
          }),
          (rh.prototype.ib = function () {
            this.D.b && (this.D.stop(), this.D.start());
          }),
          Ui(rh.prototype, "providerId", "firebase"),
          ((t = rh.prototype).reload = function () {
            var t = this;
            return Dh(
              this,
              bh(this).then(function () {
                return Ah(t)
                  .then(function () {
                    return ph(t);
                  })
                  .then(gh);
              })
            );
          }),
          (t.oc = function (t) {
            return this.I(t).then(function (t) {
              return new Fc(t);
            });
          }),
          (t.I = function (t) {
            var e = this;
            return Dh(
              this,
              bh(this)
                .then(function () {
                  return e.h.getToken(t);
                })
                .then(function (t) {
                  if (!t) throw new T("internal-error");
                  return (
                    t.accessToken != e.Aa &&
                      (dh(e, t.accessToken),
                      e.dispatchEvent(new Yc("tokenChanged"))),
                    Th(e, "refreshToken", t.refreshToken),
                    t.accessToken
                  );
                })
            );
          }),
          (t.Kc = function (t) {
            if (!(t = t.users) || !t.length) throw new T("internal-error");
            mh(this, {
              uid: (t = t[0]).localId,
              displayName: t.displayName,
              photoURL: t.photoUrl,
              email: t.email,
              emailVerified: !!t.emailVerified,
              phoneNumber: t.phoneNumber,
              lastLoginAt: t.lastLoginAt,
              createdAt: t.createdAt,
              tenantId: t.tenantId,
            });
            for (
              var e,
                n =
                  (e = t.providerUserInfo) && e.length
                    ? q(e, function (t) {
                        return new ih(
                          t.rawId,
                          t.providerId,
                          t.email,
                          t.displayName,
                          t.photoUrl,
                          t.phoneNumber
                        );
                      })
                    : [],
                i = 0;
              i < n.length;
              i++
            )
              wh(this, n[i]);
            Th(
              this,
              "isAnonymous",
              !(
                (this.email && t.passwordHash) ||
                (this.providerData && this.providerData.length)
              )
            ),
              this.dispatchEvent(new Yc("userReloaded", { hd: t }));
          }),
          (t.Lc = function (t) {
            return (
              Mi(
                "firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."
              ),
              this.ub(t)
            );
          }),
          (t.ub = function (t) {
            var e = this,
              n = null;
            return Dh(
              this,
              t
                .c(this.a, this.uid)
                .then(function (t) {
                  return (
                    kh(e, t),
                    (n = Nh(e, t, "reauthenticate")),
                    (e.i = null),
                    e.reload()
                  );
                })
                .then(function () {
                  return n;
                }),
              !0
            );
          }),
          (t.Cc = function (t) {
            return (
              Mi(
                "firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."
              ),
              this.rb(t)
            );
          }),
          (t.rb = function (e) {
            var n = this,
              i = null;
            return Dh(
              this,
              Sh(this, e.providerId)
                .then(function () {
                  return n.I();
                })
                .then(function (t) {
                  return e.b(n.a, t);
                })
                .then(function (t) {
                  return (i = Nh(n, t, "link")), _h(n, t);
                })
                .then(function () {
                  return i;
                })
            );
          }),
          (t.Dc = function (t, e) {
            var n = this;
            return Dh(
              this,
              Sh(this, "phone").then(function () {
                return Vc(hh(n), t, e, b(n.rb, n));
              })
            );
          }),
          (t.Mc = function (t, e) {
            var n = this;
            return Dh(
              this,
              be().then(function () {
                return Vc(hh(n), t, e, b(n.ub, n));
              }),
              !0
            );
          }),
          (t.Cb = function (e) {
            var n = this;
            return Dh(
              this,
              this.I()
                .then(function (t) {
                  return n.a.Cb(t, e);
                })
                .then(function (t) {
                  return kh(n, t), n.reload();
                })
            );
          }),
          (t.ed = function (e) {
            var n = this;
            return Dh(
              this,
              this.I()
                .then(function (t) {
                  return e.b(n.a, t);
                })
                .then(function (t) {
                  return kh(n, t), n.reload();
                })
            );
          }),
          (t.Db = function (e) {
            var n = this;
            return Dh(
              this,
              this.I()
                .then(function (t) {
                  return n.a.Db(t, e);
                })
                .then(function (t) {
                  return kh(n, t), n.reload();
                })
            );
          }),
          (t.Eb = function (e) {
            if (void 0 === e.displayName && void 0 === e.photoURL)
              return bh(this);
            var n = this;
            return Dh(
              this,
              this.I()
                .then(function (t) {
                  return n.a.Eb(t, {
                    displayName: e.displayName,
                    photoUrl: e.photoURL,
                  });
                })
                .then(function (t) {
                  return (
                    kh(n, t),
                    Th(n, "displayName", t.displayName || null),
                    Th(n, "photoURL", t.photoUrl || null),
                    V(n.providerData, function (t) {
                      "password" === t.providerId &&
                        (Ui(t, "displayName", n.displayName),
                        Ui(t, "photoURL", n.photoURL));
                    }),
                    ph(n)
                  );
                })
                .then(gh)
            );
          }),
          (t.cd = function (e) {
            var n = this;
            return Dh(
              this,
              Ah(this).then(function (t) {
                return K(yh(n), e)
                  ? Bs(n.a, gs, { idToken: t, deleteProvider: [e] }).then(
                      function (t) {
                        var e = {};
                        return (
                          V(t.providerUserInfo || [], function (t) {
                            e[t.providerId] = !0;
                          }),
                          V(yh(n), function (t) {
                            e[t] || Ih(n, t);
                          }),
                          e[ko.PROVIDER_ID] || Ui(n, "phoneNumber", null),
                          ph(n)
                        );
                      }
                    )
                  : ph(n).then(function () {
                      throw new T("no-such-provider");
                    });
              })
            );
          }),
          (t.delete = function () {
            var e = this;
            return Dh(
              this,
              this.I()
                .then(function (t) {
                  return Bs(e.a, ms, { idToken: t });
                })
                .then(function () {
                  e.dispatchEvent(new Yc("userDeleted"));
                })
            ).then(function () {
              for (var t = 0; t < e.N.length; t++) e.N[t].cancel("app-deleted");
              ah(e, null),
                sh(e, null),
                ch(e, null),
                (e.N = []),
                (e.J = !0),
                fh(e),
                Ui(e, "refreshToken", null),
                e.b && Ic(e.b, e);
            });
          }),
          (t.Gb = function (t, e) {
            return !!(
              ("linkViaPopup" == t && (this.g || null) == e && this.f) ||
              ("reauthViaPopup" == t && (this.g || null) == e && this.f) ||
              ("linkViaRedirect" == t && (this.ga || null) == e) ||
              ("reauthViaRedirect" == t && (this.ga || null) == e)
            );
          }),
          (t.na = function (t, e, n, i) {
            ("linkViaPopup" != t && "reauthViaPopup" != t) ||
              i != (this.g || null) ||
              (n && this.C ? this.C(n) : e && !n && this.f && this.f(e),
              this.c && (this.c.cancel(), (this.c = null)),
              delete this.f,
              delete this.C);
          }),
          (t.Fa = function (t, e) {
            return "linkViaPopup" == t && e == (this.g || null)
              ? b(this.Lb, this)
              : "reauthViaPopup" == t && e == (this.g || null)
              ? b(this.Mb, this)
              : "linkViaRedirect" == t && (this.ga || null) == e
              ? b(this.Lb, this)
              : "reauthViaRedirect" == t && (this.ga || null) == e
              ? b(this.Mb, this)
              : null;
          }),
          (t.Ec = function (t) {
            var e = this;
            return Oh(
              this,
              "linkViaPopup",
              t,
              function () {
                return Sh(e, t.providerId).then(function () {
                  return ph(e);
                });
              },
              !1
            );
          }),
          (t.Nc = function (t) {
            return Oh(
              this,
              "reauthViaPopup",
              t,
              function () {
                return be();
              },
              !0
            );
          }),
          (t.Fc = function (t) {
            var e = this;
            return Ch(
              this,
              "linkViaRedirect",
              t,
              function () {
                return Sh(e, t.providerId);
              },
              !1
            );
          }),
          (t.Oc = function (t) {
            return Ch(
              this,
              "reauthViaRedirect",
              t,
              function () {
                return be();
              },
              !0
            );
          }),
          (t.Lb = function (e, n, t, i) {
            var r = this;
            this.c && (this.c.cancel(), (this.c = null));
            var o = null;
            return (
              (t = this.I()
                .then(function (t) {
                  return cs(r.a, {
                    requestUri: e,
                    postBody: i,
                    sessionId: n,
                    idToken: t,
                  });
                })
                .then(function (t) {
                  return (o = Nh(r, t, "link")), _h(r, t);
                })
                .then(function () {
                  return o;
                })),
              Dh(this, t)
            );
          }),
          (t.Mb = function (t, e, n, i) {
            var r = this;
            this.c && (this.c.cancel(), (this.c = null));
            var o = null;
            return Dh(
              this,
              be()
                .then(function () {
                  return Zr(
                    hs(r.a, {
                      requestUri: t,
                      sessionId: e,
                      postBody: i,
                      tenantId: n,
                    }),
                    r.uid
                  );
                })
                .then(function (t) {
                  return (
                    (o = Nh(r, t, "reauthenticate")),
                    kh(r, t),
                    (r.i = null),
                    r.reload()
                  );
                })
                .then(function () {
                  return o;
                }),
              !0
            );
          }),
          (t.vb = function (e) {
            var n = this,
              i = null;
            return Dh(
              this,
              this.I()
                .then(function (t) {
                  return (i = t), void 0 === e || ut(e) ? {} : _r(new br(e));
                })
                .then(function (t) {
                  return n.a.vb(i, t);
                })
                .then(function (t) {
                  if (n.email != t) return n.reload();
                })
                .then(function () {})
            );
          }),
          (t.Fb = function (e, n) {
            var i = this,
              r = null;
            return Dh(
              this,
              this.I()
                .then(function (t) {
                  return (r = t), void 0 === n || ut(n) ? {} : _r(new br(n));
                })
                .then(function (t) {
                  return i.a.Fb(r, e, t);
                })
                .then(function (t) {
                  if (i.email != t) return i.reload();
                })
                .then(function () {})
            );
          }),
          (t.jc = function (t) {
            var e = null,
              n = this;
            return Dh(
              this,
              (t = Zr(be(t), n.uid)
                .then(function (t) {
                  return (
                    (e = Nh(n, t, "reauthenticate")),
                    kh(n, t),
                    (n.i = null),
                    n.reload()
                  );
                })
                .then(function () {
                  return e;
                })),
              !0
            );
          }),
          (t.toJSON = function () {
            return this.w();
          }),
          (t.w = function () {
            var e = {
              uid: this.uid,
              displayName: this.displayName,
              photoURL: this.photoURL,
              email: this.email,
              emailVerified: this.emailVerified,
              phoneNumber: this.phoneNumber,
              isAnonymous: this.isAnonymous,
              tenantId: this.tenantId,
              providerData: [],
              apiKey: this.l,
              appName: this.m,
              authDomain: this.s,
              stsTokenManager: this.h.w(),
              redirectEventId: this.ga || null,
            };
            return (
              this.metadata && lt(e, this.metadata.w()),
              V(this.providerData, function (t) {
                e.providerData.push(
                  (function (t) {
                    var e,
                      n = {};
                    for (e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
                    return n;
                  })(t)
                );
              }),
              lt(e, this.S.w()),
              e
            );
          });
        var xh = { name: "redirectUser", F: "session" };
        function Mh(t) {
          return Bu(t.b, xh, t.a);
        }
        function jh(t) {
          var e, n, i, r, o, a, s, u, c;
          (this.a = t),
            (this.b = Hu()),
            (this.c = null),
            (this.f =
              ((n = Fh("local")),
              (i = Fh("session")),
              (r = Fh("none")),
              (o = (e = this).b),
              (a = n),
              (s = e.a),
              (u = Gu(a, s)),
              (c = Ku(o, a.F)),
              o
                .get(a, s)
                .then(function (t) {
                  var e = null;
                  try {
                    e = ki(l.localStorage.getItem(u));
                  } catch (t) {}
                  if (e && !t)
                    return l.localStorage.removeItem(u), o.set(a, e, s);
                  e &&
                    t &&
                    "localStorage" != c.type &&
                    l.localStorage.removeItem(u);
                })
                .then(function () {
                  return e.b.get(i, e.a);
                })
                .then(function (t) {
                  return t
                    ? i
                    : e.b.get(r, e.a).then(function (t) {
                        return t
                          ? r
                          : e.b.get(n, e.a).then(function (t) {
                              return t
                                ? n
                                : e.b.get(Vh, e.a).then(function (t) {
                                    return t ? Fh(t) : n;
                                  });
                            });
                      });
                })
                .then(function (t) {
                  return (e.c = t), Uh(e, t.F);
                })
                .o(function () {
                  e.c || (e.c = n);
                }))),
            this.b.addListener(Fh("local"), this.a, b(this.g, this));
        }
        function Uh(t, e) {
          var n,
            s,
            i = [];
          for (n in Fu) Fu[n] !== e && i.push(Bu(t.b, Fh(Fu[n]), t.a));
          return (
            i.push(Bu(t.b, Vh, t.a)),
            (s = i),
            new le(function (n, e) {
              var i = s.length,
                r = [];
              if (i)
                for (
                  var t = function (t, e) {
                      i--, (r[t] = e), 0 == i && n(r);
                    },
                    o = function (t) {
                      e(t);
                    },
                    a = 0;
                  a < s.length;
                  a++
                )
                  we(s[a], y(t, a), o);
              else n(r);
            })
          );
        }
        jh.prototype.g = function () {
          var e = this,
            n = Fh("local");
          Gh(this, function () {
            return be()
              .then(function () {
                return e.c && "local" != e.c.F ? e.b.get(n, e.a) : null;
              })
              .then(function (t) {
                if (t)
                  return Uh(e, "local").then(function () {
                    e.c = n;
                  });
              });
          });
        };
        var Vh = { name: "persistence", F: "session" };
        function Fh(t) {
          return { name: "authUser", F: t };
        }
        function qh(t, e) {
          return Gh(t, function () {
            return t.b.set(t.c, e.w(), t.a);
          });
        }
        function Hh(t) {
          return Gh(t, function () {
            return Bu(t.b, t.c, t.a);
          });
        }
        function Kh(t, e, n) {
          return Gh(t, function () {
            return t.b.get(t.c, t.a).then(function (t) {
              return (
                t && e && (t.authDomain = e),
                t && n && (t.emulatorConfig = n),
                Ph(t || {})
              );
            });
          });
        }
        function Gh(t, e) {
          return (t.f = t.f.then(e, e)), t.f;
        }
        function Bh(t) {
          if (
            ((this.l = !1),
            Ui(this, "settings", new jc()),
            Ui(this, "app", t),
            !this.app.options || !this.app.options.apiKey)
          )
            throw new T("invalid-api-key");
          var n, e, i, r, o, a, s, u, c;
          (t = Gl.default.SDK_VERSION ? vi(Gl.default.SDK_VERSION) : null),
            (this.a = new Va(
              this.app.options && this.app.options.apiKey,
              _(A),
              t
            )),
            (this.P = []),
            (this.s = []),
            (this.N = []),
            (this.Pa = Gl.default.INTERNAL.createSubscribe(b(this.zc, this))),
            (this.W = void 0),
            (this.ib = Gl.default.INTERNAL.createSubscribe(b(this.Ac, this))),
            $h(this, null),
            (this.i = new jh(this.app.options.apiKey + ":" + this.app.name)),
            (this.D = new Lh(this.app.options.apiKey + ":" + this.app.name)),
            (this.$ = nl(
              this,
              ((e = (n = this).app.options.authDomain),
              (u = (s = n).D),
              (c = s.app.options.authDomain),
              (u = u.b
                .get(xh, u.a)
                .then(function (t) {
                  return t && c && (t.authDomain = c), Ph(t || {});
                })
                .then(function (t) {
                  return (s.m = t) && (t.ha = s.D), Mh(s.D);
                })),
              (t = nl(s, u)
                .then(function () {
                  return Kh(n.i, e, n.R);
                })
                .then(function (e) {
                  return e
                    ? ((e.ha = n.D),
                      n.m && (n.m.ga || null) == (e.ga || null)
                        ? e
                        : e
                            .reload()
                            .then(function () {
                              return qh(n.i, e).then(function () {
                                return e;
                              });
                            })
                            .o(function (t) {
                              return "auth/network-request-failed" == t.code
                                ? e
                                : Hh(n.i);
                            }))
                    : null;
                })
                .then(function (t) {
                  $h(n, t || null);
                })),
              nl(n, t))
            )),
            (this.h = nl(
              this,
              (i = this).$.then(function () {
                return zh(i);
              })
                .o(function () {})
                .then(function () {
                  if (!i.l) return i.ja();
                })
                .o(function () {})
                .then(function () {
                  var t;
                  i.l ||
                    ((i.ba = !0),
                    (t = i.i).b.addListener(Fh("local"), t.a, i.ja));
                })
            )),
            (this.ba = !1),
            (this.ja = b(this.Zc, this)),
            (this.Ba = b(this.da, this)),
            (this.qa = b(this.mc, this)),
            (this.za = b(this.wc, this)),
            (this.Aa = b(this.xc, this)),
            (this.b = null),
            (o = (r = this).app.options.authDomain),
            (a = r.app.options.apiKey),
            o &&
              yi() &&
              (r.Oa = r.$.then(function () {
                var t;
                if (!r.l)
                  return (
                    (r.b = Cc(o, a, r.app.name, r.R)),
                    wc(r.b, r),
                    Qh(r) && vh(Qh(r)),
                    r.m &&
                      (vh(r.m),
                      (t = r.m).xa(r.la()),
                      ah(t, r),
                      uh((t = r.m), r.J),
                      ch(t, r),
                      oh((t = r.m), r.R),
                      sh(t, r),
                      (r.m = null)),
                    r.b
                  );
              })),
            (this.INTERNAL = {}),
            (this.INTERNAL.delete = b(this.delete, this)),
            (this.INTERNAL.logFramework = b(this.Gc, this)),
            (this.u = 0),
            hn.call(this),
            (t = this),
            Object.defineProperty(t, "lc", {
              get: function () {
                return this.la();
              },
              set: function (t) {
                this.xa(t);
              },
              enumerable: !1,
            }),
            (t.aa = null),
            Object.defineProperty(t, "ti", {
              get: function () {
                return this.T();
              },
              set: function (t) {
                this.zb(t);
              },
              enumerable: !1,
            }),
            (t.S = null),
            Object.defineProperty(t, "emulatorConfig", {
              get: function () {
                var t;
                return this.R
                  ? Fi({
                      protocol: (t = _n(this.R.url)).c,
                      host: t.a,
                      port: t.g,
                      options: Fi({ disableWarnings: this.R.ec }),
                    })
                  : null;
              },
              enumerable: !1,
            }),
            (this.J = []),
            (this.R = null);
        }
        function Wh(t) {
          Ve.call(this, "languageCodeChanged"), (this.h = t);
        }
        function Xh(t) {
          Ve.call(this, "emulatorConfigChanged"), (this.c = t);
        }
        function Jh(t) {
          Ve.call(this, "frameworkChanged"), (this.f = t);
        }
        function Yh(t) {
          return t.Oa || ye(new T("auth-domain-config-required"));
        }
        function zh(t) {
          if (!yi())
            return ye(new T("operation-not-supported-in-this-environment"));
          var e = Yh(t)
            .then(function () {
              return t.b.ra();
            })
            .then(function (t) {
              return t ? Fi(t) : null;
            });
          return nl(t, e);
        }
        function $h(t, e) {
          var n, i;
          Qh(t) &&
            ((n = Qh(t)),
            (i = t.Ba),
            B(n.W, function (t) {
              return t == i;
            }),
            tn(Qh(t), "tokenChanged", t.qa),
            tn(Qh(t), "userDeleted", t.za),
            tn(Qh(t), "userInvalidated", t.Aa),
            fh(Qh(t))),
            e &&
              (e.W.push(t.Ba),
              $e(e, "tokenChanged", t.qa),
              $e(e, "userDeleted", t.za),
              $e(e, "userInvalidated", t.Aa),
              0 < t.u && lh(e)),
            Ui(t, "currentUser", e),
            e &&
              (e.xa(t.la()),
              ah(e, t),
              uh(e, t.J),
              ch(e, t),
              oh(e, t.R),
              sh(e, t));
        }
        function Zh(n, t) {
          var e = null,
            i = null;
          return nl(
            n,
            t
              .then(
                function (t) {
                  return (
                    (e = No(t)),
                    (i = Ur(t)),
                    (a = t),
                    ((s = {}).apiKey = (o = n).app.options.apiKey),
                    (s.authDomain = o.app.options.authDomain),
                    (s.appName = o.app.name),
                    o.R && (s.emulatorConfig = o.R),
                    o.$.then(function () {
                      return (
                        (t = s),
                        (e = a),
                        (n = o.D),
                        (i = o.Ga()),
                        (r = new rh(t, e)),
                        n && (r.ha = n),
                        i && uh(r, i),
                        r.reload().then(function () {
                          return r;
                        })
                      );
                      var t, e, n, i, r;
                    })
                      .then(function (t) {
                        return (
                          Qh(o) && t.uid == Qh(o).uid
                            ? Eh(Qh(o), t)
                            : ($h(o, t), vh(t)),
                          o.da(t)
                        );
                      })
                      .then(function () {
                        el(o);
                      })
                  );
                  var o, a, s;
                },
                function (t) {
                  var e = null;
                  throw (
                    (e =
                      t && "auth/multi-factor-auth-required" === t.code
                        ? Bc(t.w(), n, b(n.kc, n))
                        : e) || t
                  );
                }
              )
              .then(function () {
                return Fi({
                  user: Qh(n),
                  credential: e,
                  additionalUserInfo: i,
                  operationType: "signIn",
                });
              })
          );
        }
        function Qh(t) {
          return t.currentUser;
        }
        function tl(t) {
          return (Qh(t) && Qh(t)._lat) || null;
        }
        function el(t) {
          if (t.ba) {
            for (var e = 0; e < t.s.length; e++) t.s[e] && t.s[e](tl(t));
            if (t.W !== t.getUid() && t.N.length)
              for (t.W = t.getUid(), e = 0; e < t.N.length; e++)
                t.N[e] && t.N[e](tl(t));
          }
        }
        function nl(t, e) {
          return (
            t.P.push(e),
            e.oa(function () {
              G(t.P, e);
            }),
            e
          );
        }
        function il() {}
        function rl() {
          (this.a = {}), (this.b = 1e12);
        }
        (jh.prototype.yb = function (e) {
          var n = null,
            i = this;
          return (
            (function (t) {
              var e = new T("invalid-persistence-type"),
                n = new T("unsupported-persistence-type");
              t: {
                for (i in Fu)
                  if (Fu[i] == t) {
                    var i = !0;
                    break t;
                  }
                i = !1;
              }
              if (!i || "string" != typeof t) throw e;
              switch (ci()) {
                case "ReactNative":
                  if ("session" === t) throw n;
                  break;
                case "Node":
                  if ("none" !== t) throw n;
                  break;
                case "Worker":
                  if ("session" === t || (!yu() && "none" !== t)) throw n;
                  break;
                default:
                  if (!bi() && "none" !== t) throw n;
              }
            })(e),
            Gh(this, function () {
              return e != i.c.F
                ? i.b
                    .get(i.c, i.a)
                    .then(function (t) {
                      return (n = t), Uh(i, e);
                    })
                    .then(function () {
                      if (((i.c = Fh(e)), n)) return i.b.set(i.c, n, i.a);
                    })
                : be();
            })
          );
        }),
          w(Bh, hn),
          w(Wh, Ve),
          w(Xh, Ve),
          w(Jh, Ve),
          ((t = Bh.prototype).yb = function (t) {
            return (t = this.i.yb(t)), nl(this, t);
          }),
          (t.xa = function (t) {
            this.aa === t ||
              this.l ||
              ((this.aa = t),
              Wa(this.a, this.aa),
              this.dispatchEvent(new Wh(this.la())));
          }),
          (t.la = function () {
            return this.aa;
          }),
          (t.fd = function () {
            var t = l.navigator;
            this.xa(
              (t &&
                ((t.languages && t.languages[0]) ||
                  t.language ||
                  t.userLanguage)) ||
                null
            );
          }),
          (t.gd = function (t, e) {
            if (!this.R) {
              if (!/^https?:\/\//.test(t))
                throw new T(
                  "argument-error",
                  "Emulator URL must start with a valid scheme (http:// or https://)."
                );
              (n = e = !!e && !!e.disableWarnings),
                "undefined" != typeof console &&
                  "function" == typeof console.info &&
                  console.info(
                    "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
                  ),
                l.document &&
                  !n &&
                  oi().then(function () {
                    var t = l.document.createElement("div");
                    (t.innerText =
                      "Running in emulator mode. Do not use with production credentials."),
                      (t.style.position = "fixed"),
                      (t.style.width = "100%"),
                      (t.style.backgroundColor = "#ffffff"),
                      (t.style.border = ".1em solid #000000"),
                      (t.style.color = "#b50000"),
                      (t.style.bottom = "0px"),
                      (t.style.left = "0px"),
                      (t.style.margin = "0px"),
                      (t.style.zIndex = 1e4),
                      (t.style.textAlign = "center"),
                      t.classList.add("firebase-emulator-warning"),
                      l.document.body.appendChild(t);
                  }),
                (this.R = { url: t, ec: e }),
                (this.settings.jb = !0),
                Xa(this.a, this.R),
                this.dispatchEvent(new Xh(this.R));
            }
            var n;
          }),
          (t.Gc = function (t) {
            this.J.push(t),
              Ya(
                this.a,
                Gl.default.SDK_VERSION
                  ? vi(Gl.default.SDK_VERSION, this.J)
                  : null
              ),
              this.dispatchEvent(new Jh(this.J));
          }),
          (t.Ga = function () {
            return X(this.J);
          }),
          (t.zb = function (t) {
            this.S === t || this.l || ((this.S = t), (this.a.b = this.S));
          }),
          (t.T = function () {
            return this.S;
          }),
          (t.toJSON = function () {
            return {
              apiKey: this.app.options.apiKey,
              authDomain: this.app.options.authDomain,
              appName: this.app.name,
              currentUser: Qh(this) && Qh(this).w(),
            };
          }),
          (t.Gb = function (t, e) {
            switch (t) {
              case "unknown":
              case "signInViaRedirect":
                return !0;
              case "signInViaPopup":
                return this.g == e && !!this.f;
              default:
                return !1;
            }
          }),
          (t.na = function (t, e, n, i) {
            "signInViaPopup" == t &&
              this.g == i &&
              (n && this.C ? this.C(n) : e && !n && this.f && this.f(e),
              this.c && (this.c.cancel(), (this.c = null)),
              delete this.f,
              delete this.C);
          }),
          (t.Fa = function (t, e) {
            return "signInViaRedirect" == t ||
              ("signInViaPopup" == t && this.g == e && this.f)
              ? b(this.ic, this)
              : null;
          }),
          (t.ic = function (t, e, n, i) {
            var r = this,
              o = { requestUri: t, postBody: i, sessionId: e, tenantId: n };
            return (
              this.c && (this.c.cancel(), (this.c = null)),
              r.$.then(function () {
                return Zh(r, us(r.a, o));
              })
            );
          }),
          (t.Xc = function (e) {
            if (!yi())
              return ye(new T("operation-not-supported-in-this-environment"));
            var n = this,
              t = jr(e.providerId),
              i = Si(),
              r = null,
              o = ni(
                (r =
                  (!Ti() || si()) &&
                  this.app.options.authDomain &&
                  e.isOAuthProvider
                    ? au(
                        this.app.options.authDomain,
                        this.app.options.apiKey,
                        this.app.name,
                        "signInViaPopup",
                        e,
                        null,
                        i,
                        Gl.default.SDK_VERSION || null,
                        null,
                        null,
                        this.T(),
                        this.R
                      )
                    : r),
                t && t.va,
                t && t.ua
              );
            return nl(
              this,
              (t = Yh(this)
                .then(function (t) {
                  return Ac(t, o, "signInViaPopup", e, i, !!r, n.T());
                })
                .then(function () {
                  return new le(function (t, e) {
                    n.na(
                      "signInViaPopup",
                      null,
                      new T("cancelled-popup-request"),
                      n.g
                    ),
                      (n.f = t),
                      (n.C = e),
                      (n.g = i),
                      (n.c = Nc(n.b, n, "signInViaPopup", o, i));
                  });
                })
                .then(function (t) {
                  return o && ei(o), t ? Fi(t) : null;
                })
                .o(function (t) {
                  throw (o && ei(o), t);
                }))
            );
          }),
          (t.Yc = function (t) {
            if (!yi())
              return ye(new T("operation-not-supported-in-this-environment"));
            var e = this;
            return nl(
              this,
              Yh(this)
                .then(function () {
                  return Gh((t = e.i), function () {
                    return t.b.set(Vh, t.c.F, t.a);
                  });
                  var t;
                })
                .then(function () {
                  return Sc(e.b, "signInViaRedirect", t, void 0, e.T());
                })
            );
          }),
          (t.ra = function () {
            var e = this;
            return zh(this)
              .then(function (t) {
                return e.b && Pc(e.b.b), t;
              })
              .o(function (t) {
                throw (e.b && Pc(e.b.b), t);
              });
          }),
          (t.dd = function (t) {
            if (!t) return ye(new T("null-user"));
            if (this.S != t.tenantId) return ye(new T("tenant-id-mismatch"));
            var e = this,
              n = {};
            (n.apiKey = this.app.options.apiKey),
              (n.authDomain = this.app.options.authDomain),
              (n.appName = this.app.name);
            var i,
              r,
              o,
              a,
              s,
              u =
                ((i = t),
                (r = n),
                (o = e.D),
                (a = e.Ga()),
                (s = i.h),
                ((n = {})[qa] = s.b && s.b.toString()),
                (n.refreshToken = s.a),
                (r = new rh(
                  r || { apiKey: i.l, authDomain: i.s, appName: i.m },
                  n
                )),
                o && (r.ha = o),
                a && uh(r, a),
                Eh(r, i),
                r);
            return nl(
              this,
              this.h
                .then(function () {
                  if (e.app.options.apiKey != t.l) return u.reload();
                })
                .then(function () {
                  return Qh(e) && t.uid == Qh(e).uid
                    ? (Eh(Qh(e), t), e.da(t))
                    : ($h(e, u), vh(u), e.da(u));
                })
                .then(function () {
                  el(e);
                })
            );
          }),
          (t.Bb = function () {
            var t = this,
              e = this.h.then(function () {
                return (
                  t.b && Pc(t.b.b),
                  Qh(t)
                    ? ($h(t, null),
                      Hh(t.i).then(function () {
                        el(t);
                      }))
                    : be()
                );
              });
            return nl(this, e);
          }),
          (t.Zc = function () {
            var i = this;
            return Kh(this.i, this.app.options.authDomain).then(function (t) {
              if (!i.l) {
                var e, n;
                if (
                  ((e = Qh(i) && t) &&
                    ((e = Qh(i).uid),
                    (n = t.uid),
                    (e =
                      null != e &&
                      "" !== e &&
                      null != n &&
                      "" !== n &&
                      e == n)),
                  e)
                )
                  return Eh(Qh(i), t), Qh(i).I();
                (Qh(i) || t) &&
                  ($h(i, t),
                  t && (vh(t), (t.ha = i.D)),
                  i.b && wc(i.b, i),
                  el(i));
              }
            });
          }),
          (t.da = function (t) {
            return qh(this.i, t);
          }),
          (t.mc = function () {
            el(this), this.da(Qh(this));
          }),
          (t.wc = function () {
            this.Bb();
          }),
          (t.xc = function () {
            this.Bb();
          }),
          (t.kc = function (t) {
            var e = this;
            return this.h.then(function () {
              return Zh(e, be(t));
            });
          }),
          (t.zc = function (t) {
            var e = this;
            this.addAuthTokenListener(function () {
              t.next(Qh(e));
            });
          }),
          (t.Ac = function (t) {
            var e,
              n = this,
              i = function () {
                t.next(Qh(n));
              };
            (e = this).N.push(i),
              nl(
                e,
                e.h.then(function () {
                  !e.l &&
                    K(e.N, i) &&
                    e.W !== e.getUid() &&
                    ((e.W = e.getUid()), i(tl(e)));
                })
              );
          }),
          (t.Ic = function (t, e, n) {
            var i = this;
            return (
              this.ba &&
                Promise.resolve().then(function () {
                  "function" == typeof t
                    ? t(Qh(i))
                    : "function" == typeof t.next && t.next(Qh(i));
                }),
              this.Pa(t, e, n)
            );
          }),
          (t.Hc = function (t, e, n) {
            var i = this;
            return (
              this.ba &&
                Promise.resolve().then(function () {
                  (i.W = i.getUid()),
                    "function" == typeof t
                      ? t(Qh(i))
                      : "function" == typeof t.next && t.next(Qh(i));
                }),
              this.ib(t, e, n)
            );
          }),
          (t.nc = function (t) {
            var e = this,
              n = this.h.then(function () {
                return Qh(e)
                  ? Qh(e)
                      .I(t)
                      .then(function (t) {
                        return { accessToken: t };
                      })
                  : null;
              });
            return nl(this, n);
          }),
          (t.Tc = function (t) {
            var n = this;
            return this.h
              .then(function () {
                return Zh(n, Bs(n.a, Vs, { token: t }));
              })
              .then(function (t) {
                var e = t.user;
                return Th(e, "isAnonymous", !1), n.da(e), t;
              });
          }),
          (t.Uc = function (t, e) {
            var n = this;
            return this.h.then(function () {
              return Zh(n, Bs(n.a, Fs, { email: t, password: e }));
            });
          }),
          (t.dc = function (t, e) {
            var n = this;
            return this.h.then(function () {
              return Zh(n, Bs(n.a, ps, { email: t, password: e }));
            });
          }),
          (t.ab = function (t) {
            var e = this;
            return this.h.then(function () {
              return Zh(e, t.ka(e.a));
            });
          }),
          (t.Sc = function (t) {
            return (
              Mi(
                "firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."
              ),
              this.ab(t)
            );
          }),
          (t.Ab = function () {
            var n = this;
            return this.h.then(function () {
              var t = Qh(n);
              if (t && t.isAnonymous) {
                var e = Fi({ providerId: null, isNewUser: !1 });
                return Fi({
                  user: t,
                  credential: null,
                  additionalUserInfo: e,
                  operationType: "signIn",
                });
              }
              return Zh(n, n.a.Ab()).then(function (t) {
                var e = t.user;
                return Th(e, "isAnonymous", !0), n.da(e), t;
              });
            });
          }),
          (t.getUid = function () {
            return (Qh(this) && Qh(this).uid) || null;
          }),
          (t.cc = function (t) {
            this.addAuthTokenListener(t),
              this.u++,
              0 < this.u && Qh(this) && lh(Qh(this));
          }),
          (t.Pc = function (e) {
            var n = this;
            V(this.s, function (t) {
              t == e && n.u--;
            }),
              this.u < 0 && (this.u = 0),
              0 == this.u && Qh(this) && fh(Qh(this)),
              this.removeAuthTokenListener(e);
          }),
          (t.addAuthTokenListener = function (t) {
            var e = this;
            this.s.push(t),
              nl(
                this,
                this.h.then(function () {
                  e.l || (K(e.s, t) && t(tl(e)));
                })
              );
          }),
          (t.removeAuthTokenListener = function (e) {
            B(this.s, function (t) {
              return t == e;
            });
          }),
          (t.delete = function () {
            this.l = !0;
            for (var t = 0; t < this.P.length; t++)
              this.P[t].cancel("app-deleted");
            return (
              (this.P = []),
              this.i &&
                (t = this.i).b.removeListener(Fh("local"), t.a, this.ja),
              this.b && (Ic(this.b, this), Pc(this.b.b)),
              Promise.resolve()
            );
          }),
          (t.hc = function (t) {
            return nl(
              this,
              Bs(this.a, vs, {
                identifier: t,
                continueUri: wi() ? Zn() : "http://localhost",
              }).then(function (t) {
                return t.signinMethods || [];
              })
            );
          }),
          (t.Bc = function (t) {
            return !!Io(t);
          }),
          (t.xb = function (e, n) {
            var i = this;
            return nl(
              this,
              be()
                .then(function () {
                  var t = new br(n);
                  if (!t.c)
                    throw new T(
                      "argument-error",
                      Ir + " must be true when sending sign in link to email"
                    );
                  return _r(t);
                })
                .then(function (t) {
                  return i.a.xb(e, t);
                })
                .then(function () {})
            );
          }),
          (t.jd = function (t) {
            return this.Sa(t).then(function (t) {
              return t.data.email;
            });
          }),
          (t.ob = function (t, e) {
            return nl(
              this,
              this.a.ob(t, e).then(function () {})
            );
          }),
          (t.Sa = function (t) {
            return nl(
              this,
              this.a.Sa(t).then(function (t) {
                return new Yi(t);
              })
            );
          }),
          (t.kb = function (t) {
            return nl(
              this,
              this.a.kb(t).then(function () {})
            );
          }),
          (t.wb = function (e, t) {
            var n = this;
            return nl(
              this,
              be()
                .then(function () {
                  return void 0 === t || ut(t) ? {} : _r(new br(t));
                })
                .then(function (t) {
                  return n.a.wb(e, t);
                })
                .then(function () {})
            );
          }),
          (t.Wc = function (t, e) {
            return nl(this, Vc(this, t, e, b(this.ab, this)));
          }),
          (t.Vc = function (n, i) {
            var r = this;
            return nl(
              this,
              be().then(function () {
                var t = i || Zn(),
                  e = wo(n, t);
                if (!(t = Io(t)))
                  throw new T("argument-error", "Invalid email link!");
                if (t.tenantId !== r.T()) throw new T("tenant-id-mismatch");
                return r.ab(e);
              })
            );
          }),
          (il.prototype.render = function () {}),
          (il.prototype.reset = function () {}),
          (il.prototype.getResponse = function () {}),
          (il.prototype.execute = function () {});
        var ol = null;
        function al(t, e) {
          return ((e = sl(e)) && t.a[e]) || null;
        }
        function sl(t) {
          return (t = void 0 === t ? 1e12 : t) ? t.toString() : null;
        }
        function ul(t, e) {
          (this.g = !1),
            (this.c = e),
            (this.a = this.b = null),
            (this.h = "invisible" !== this.c.size),
            (this.f = Qt(t));
          var n = this;
          (this.i = function () {
            n.execute();
          }),
            this.h ? this.execute() : $e(this.f, "click", this.i);
        }
        function cl(t) {
          if (t.g) throw Error("reCAPTCHA mock was already deleted!");
        }
        function hl() {}
        function ll() {}
        (rl.prototype.render = function (t, e) {
          return (this.a[this.b.toString()] = new ul(t, e)), this.b++;
        }),
          (rl.prototype.reset = function (t) {
            var e = al(this, t);
            (t = sl(t)), e && t && (e.delete(), delete this.a[t]);
          }),
          (rl.prototype.getResponse = function (t) {
            return (t = al(this, t)) ? t.getResponse() : null;
          }),
          (rl.prototype.execute = function (t) {
            (t = al(this, t)) && t.execute();
          }),
          (ul.prototype.getResponse = function () {
            return cl(this), this.b;
          }),
          (ul.prototype.execute = function () {
            cl(this);
            var n = this;
            this.a ||
              (this.a = setTimeout(function () {
                n.b = (function () {
                  for (var t = 50, e = []; 0 < t; )
                    e.push(
                      "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(
                        Math.floor(62 * Math.random())
                      )
                    ),
                      t--;
                  return e.join("");
                })();
                var t = n.c.callback,
                  e = n.c["expired-callback"];
                if (t)
                  try {
                    t(n.b);
                  } catch (t) {}
                n.a = setTimeout(function () {
                  if (((n.a = null), (n.b = null), e))
                    try {
                      e();
                    } catch (t) {}
                  n.h && n.execute();
                }, 6e4);
              }, 500));
          }),
          (ul.prototype.delete = function () {
            cl(this),
              (this.g = !0),
              clearTimeout(this.a),
              (this.a = null),
              tn(this.f, "click", this.i);
          }),
          Ui(hl, "FACTOR_ID", "phone"),
          (ll.prototype.g = function () {
            return be((ol = ol || new rl()));
          }),
          (ll.prototype.c = function () {});
        var fl = null;
        function dl() {
          (this.b = l.grecaptcha ? 1 / 0 : 0),
            (this.f = null),
            (this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString());
        }
        var pl = new dt(
            gt,
            "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"
          ),
          vl = new Oi(3e4, 6e4);
        (dl.prototype.g = function (r) {
          var o = this;
          return new le(function (t, e) {
            var i = setTimeout(function () {
              e(new T("network-request-failed"));
            }, vl.get());
            !l.grecaptcha || (r !== o.f && !o.b)
              ? ((l[o.a] = function () {
                  var n;
                  l.grecaptcha
                    ? ((o.f = r),
                      (n = l.grecaptcha.render),
                      (l.grecaptcha.render = function (t, e) {
                        return (t = n(t, e)), o.b++, t;
                      }),
                      clearTimeout(i),
                      t(l.grecaptcha))
                    : (clearTimeout(i), e(new T("internal-error"))),
                    delete l[o.a];
                }),
                be(Da(It(pl, { onload: o.a, hl: r || "" }))).o(function () {
                  clearTimeout(i),
                    e(
                      new T(
                        "internal-error",
                        "Unable to load external reCAPTCHA dependencies!"
                      )
                    );
                }))
              : (clearTimeout(i), t(l.grecaptcha));
          });
        }),
          (dl.prototype.c = function () {
            this.b--;
          });
        var ml = null;
        function gl(t, e, n, i, r, o, a) {
          if (
            (Ui(this, "type", "recaptcha"),
            (this.c = this.f = null),
            (this.J = !1),
            (this.v = e),
            (this.g = null),
            (a = a ? (fl = fl || new ll()) : (ml = ml || new dl())),
            (this.m = a),
            (this.a = n || { theme: "light", type: "image" }),
            (this.h = []),
            this.a[wl])
          )
            throw new T(
              "argument-error",
              "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project."
            );
          if (((this.i = "invisible" === this.a[Il]), !l.document))
            throw new T(
              "operation-not-supported-in-this-environment",
              "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support."
            );
          if (!Qt(e) || (!this.i && Qt(e).hasChildNodes()))
            throw new T(
              "argument-error",
              "reCAPTCHA container is either not found or already contains inner elements!"
            );
          (this.s = new Va(t, o || null, r || null)),
            (this.u =
              i ||
              function () {
                return null;
              });
          var s = this;
          this.l = [];
          var u = this.a[bl];
          this.a[bl] = function (t) {
            var e;
            Tl(s, t),
              "function" == typeof u
                ? u(t)
                : "string" != typeof u ||
                  ("function" == typeof (e = gi(u, l)) && e(t));
          };
          var c = this.a[yl];
          this.a[yl] = function () {
            var t;
            Tl(s, null),
              "function" == typeof c
                ? c()
                : "string" != typeof c ||
                  ("function" == typeof (t = gi(c, l)) && t());
          };
        }
        var bl = "callback",
          yl = "expired-callback",
          wl = "sitekey",
          Il = "size";
        function Tl(t, e) {
          for (var n = 0; n < t.l.length; n++)
            try {
              t.l[n](e);
            } catch (t) {}
        }
        function El(t, e) {
          return (
            t.h.push(e),
            e.oa(function () {
              G(t.h, e);
            }),
            e
          );
        }
        function Al(t) {
          if (t.J)
            throw new T(
              "internal-error",
              "RecaptchaVerifier instance has been destroyed."
            );
        }
        function kl(t, e, n) {
          var i = !1;
          try {
            this.b = n || Gl.default.app();
          } catch (t) {
            throw new T(
              "argument-error",
              "No firebase.app.App instance is currently initialized."
            );
          }
          if (!this.b.options || !this.b.options.apiKey)
            throw new T("invalid-api-key");
          n = this.b.options.apiKey;
          var r = this,
            o = null;
          try {
            o = this.b.auth().Ga();
          } catch (t) {}
          try {
            i = this.b.auth().settings.appVerificationDisabledForTesting;
          } catch (t) {}
          (o = Gl.default.SDK_VERSION ? vi(Gl.default.SDK_VERSION, o) : null),
            gl.call(
              this,
              n,
              t,
              e,
              function () {
                try {
                  var e = r.b.auth().la();
                } catch (t) {
                  e = null;
                }
                return e;
              },
              o,
              _(A),
              i
            );
        }
        function Sl(t, e, n, i) {
          t: {
            n = Array.prototype.slice.call(n);
            for (var r = 0, o = !1, a = 0; a < e.length; a++)
              if (e[a].optional) o = !0;
              else {
                if (o)
                  throw new T(
                    "internal-error",
                    "Argument validator encountered a required argument after an optional argument."
                  );
                r++;
              }
            if (((o = e.length), n.length < r || o < n.length))
              i =
                "Expected " +
                (r == o
                  ? 1 == r
                    ? "1 argument"
                    : r + " arguments"
                  : r + "-" + o + " arguments") +
                " but got " +
                n.length +
                ".";
            else {
              for (r = 0; r < n.length; r++)
                if (
                  ((o = e[r].optional && void 0 === n[r]), !e[r].M(n[r]) && !o)
                ) {
                  if (((e = e[r]), r < 0 || r >= Nl.length))
                    throw new T(
                      "internal-error",
                      "Argument validator received an unsupported number of arguments."
                    );
                  (n = Nl[r]),
                    (i =
                      (i ? "" : n + " argument ") +
                      (e.name ? '"' + e.name + '" ' : "") +
                      "must be " +
                      e.K +
                      ".");
                  break t;
                }
              i = null;
            }
          }
          if (i) throw new T("argument-error", t + " failed: " + i);
        }
        ((t = gl.prototype).Ia = function () {
          var e = this;
          return (
            this.f ||
            (this.f = El(
              this,
              be()
                .then(function () {
                  if (wi() && !ui()) return oi();
                  throw new T(
                    "operation-not-supported-in-this-environment",
                    "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment."
                  );
                })
                .then(function () {
                  return e.m.g(e.u());
                })
                .then(function (t) {
                  return (e.g = t), Bs(e.s, _s, {});
                })
                .then(function (t) {
                  e.a[wl] = t.recaptchaSiteKey;
                })
                .o(function (t) {
                  throw ((e.f = null), t);
                })
            ))
          );
        }),
          (t.render = function () {
            Al(this);
            var n = this;
            return El(
              this,
              this.Ia().then(function () {
                var t, e;
                return (
                  null === n.c &&
                    ((e = n.v),
                    n.i || ((t = Qt(e)), (e = re("DIV")), t.appendChild(e)),
                    (n.c = n.g.render(e, n.a))),
                  n.c
                );
              })
            );
          }),
          (t.verify = function () {
            Al(this);
            var r = this;
            return El(
              this,
              this.render().then(function (e) {
                return new le(function (n) {
                  var i,
                    t = r.g.getResponse(e);
                  t
                    ? n(t)
                    : (r.l.push(
                        (i = function (t) {
                          var e;
                          t &&
                            ((e = i),
                            B(r.l, function (t) {
                              return t == e;
                            }),
                            n(t));
                        })
                      ),
                      r.i && r.g.execute(r.c));
                });
              })
            );
          }),
          (t.reset = function () {
            Al(this), null !== this.c && this.g.reset(this.c);
          }),
          (t.clear = function () {
            Al(this), (this.J = !0), this.m.c();
            for (var t, e = 0; e < this.h.length; e++)
              this.h[e].cancel(
                "RecaptchaVerifier instance has been destroyed."
              );
            if (!this.i)
              for (e = Qt(this.v); (t = e.firstChild); ) e.removeChild(t);
          }),
          w(kl, gl);
        var Nl =
          "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(
            " "
          );
        function _l(t, e) {
          return {
            name: t || "",
            K: "a valid string",
            optional: !!e,
            M: function (t) {
              return "string" == typeof t;
            },
          };
        }
        function Ol(t, e) {
          return {
            name: t || "",
            K: "a boolean",
            optional: !!e,
            M: function (t) {
              return "boolean" == typeof t;
            },
          };
        }
        function Cl(t, e) {
          return { name: t || "", K: "a valid object", optional: !!e, M: m };
        }
        function Rl(t, e) {
          return {
            name: t || "",
            K: "a function",
            optional: !!e,
            M: function (t) {
              return "function" == typeof t;
            },
          };
        }
        function Dl(t, e) {
          return {
            name: t || "",
            K: "null",
            optional: !!e,
            M: function (t) {
              return null === t;
            },
          };
        }
        function Pl(n) {
          return {
            name: n ? n + "Credential" : "credential",
            K: n ? "a valid " + n + " credential" : "a valid credential",
            optional: !1,
            M: function (t) {
              if (!t) return !1;
              var e = !n || t.providerId === n;
              return !(!t.ka || !e);
            },
          };
        }
        function Ll() {
          return {
            name: "multiFactorAssertion",
            K: "a valid multiFactorAssertion",
            optional: !1,
            M: function (t) {
              return !!t && !!t.tb;
            },
          };
        }
        function xl() {
          return {
            name: "authProvider",
            K: "a valid Auth provider",
            optional: !1,
            M: function (t) {
              return !!(
                t &&
                t.providerId &&
                t.hasOwnProperty &&
                t.hasOwnProperty("isOAuthProvider")
              );
            },
          };
        }
        function Ml(t, e) {
          return (
            m(t) &&
            "string" == typeof t.type &&
            t.type === e &&
            "function" == typeof t.Ha
          );
        }
        function jl(t) {
          return m(t) && "string" == typeof t.uid;
        }
        function Ul() {
          return {
            name: "applicationVerifier",
            K: "an implementation of firebase.auth.ApplicationVerifier",
            optional: !1,
            M: function (t) {
              return !(
                !t ||
                "string" != typeof t.type ||
                "function" != typeof t.verify
              );
            },
          };
        }
        function Vl(e, n, t, i) {
          return {
            name: t || "",
            K: e.K + " or " + n.K,
            optional: !!i,
            M: function (t) {
              return e.M(t) || n.M(t);
            },
          };
        }
        function Fl(t, e) {
          for (var n in e) {
            var i = e[n].name;
            t[i] = Kl(i, t[n], e[n].j);
          }
        }
        function ql(t, e) {
          for (var n in e) {
            var i = e[n].name;
            i !== n &&
              Object.defineProperty(t, i, {
                get: y(function (t) {
                  return this[t];
                }, n),
                set: y(
                  function (t, e, n, i) {
                    Sl(t, [n], [i], !0), (this[e] = i);
                  },
                  i,
                  n,
                  e[n].lb
                ),
                enumerable: !0,
              });
          }
        }
        function Hl(t, e, n, i) {
          t[e] = Kl(e, n, i);
        }
        function Kl(t, e, n) {
          function i() {
            var t = Array.prototype.slice.call(arguments);
            return Sl(o, n, t), e.apply(this, t);
          }
          if (!n) return e;
          var r,
            o = (t = t.split("."))[t.length - 1];
          for (r in e) i[r] = e[r];
          for (r in e.prototype) i.prototype[r] = e.prototype[r];
          return i;
        }
        Fl(Bh.prototype, {
          kb: { name: "applyActionCode", j: [_l("code")] },
          Sa: { name: "checkActionCode", j: [_l("code")] },
          ob: {
            name: "confirmPasswordReset",
            j: [_l("code"), _l("newPassword")],
          },
          dc: {
            name: "createUserWithEmailAndPassword",
            j: [_l("email"), _l("password")],
          },
          hc: { name: "fetchSignInMethodsForEmail", j: [_l("email")] },
          ra: { name: "getRedirectResult", j: [] },
          Bc: { name: "isSignInWithEmailLink", j: [_l("emailLink")] },
          Hc: {
            name: "onAuthStateChanged",
            j: [
              Vl(Cl(), Rl(), "nextOrObserver"),
              Rl("opt_error", !0),
              Rl("opt_completed", !0),
            ],
          },
          Ic: {
            name: "onIdTokenChanged",
            j: [
              Vl(Cl(), Rl(), "nextOrObserver"),
              Rl("opt_error", !0),
              Rl("opt_completed", !0),
            ],
          },
          wb: {
            name: "sendPasswordResetEmail",
            j: [
              _l("email"),
              Vl(
                Cl("opt_actionCodeSettings", !0),
                Dl(null, !0),
                "opt_actionCodeSettings",
                !0
              ),
            ],
          },
          xb: {
            name: "sendSignInLinkToEmail",
            j: [_l("email"), Cl("actionCodeSettings")],
          },
          yb: { name: "setPersistence", j: [_l("persistence")] },
          Sc: { name: "signInAndRetrieveDataWithCredential", j: [Pl()] },
          Ab: { name: "signInAnonymously", j: [] },
          ab: { name: "signInWithCredential", j: [Pl()] },
          Tc: { name: "signInWithCustomToken", j: [_l("token")] },
          Uc: {
            name: "signInWithEmailAndPassword",
            j: [_l("email"), _l("password")],
          },
          Vc: {
            name: "signInWithEmailLink",
            j: [_l("email"), _l("emailLink", !0)],
          },
          Wc: { name: "signInWithPhoneNumber", j: [_l("phoneNumber"), Ul()] },
          Xc: { name: "signInWithPopup", j: [xl()] },
          Yc: { name: "signInWithRedirect", j: [xl()] },
          dd: {
            name: "updateCurrentUser",
            j: [
              Vl(
                {
                  name: "user",
                  K: "an instance of Firebase User",
                  optional: !1,
                  M: function (t) {
                    return !!(t && t instanceof rh);
                  },
                },
                Dl(),
                "user"
              ),
            ],
          },
          Bb: { name: "signOut", j: [] },
          toJSON: { name: "toJSON", j: [_l(null, !0)] },
          fd: { name: "useDeviceLanguage", j: [] },
          gd: { name: "useEmulator", j: [_l("url"), Cl("options", !0)] },
          jd: { name: "verifyPasswordResetCode", j: [_l("code")] },
        }),
          ql(Bh.prototype, {
            lc: { name: "languageCode", lb: Vl(_l(), Dl(), "languageCode") },
            ti: { name: "tenantId", lb: Vl(_l(), Dl(), "tenantId") },
          }),
          ((Bh.Persistence = Fu).LOCAL = "local"),
          (Bh.Persistence.SESSION = "session"),
          (Bh.Persistence.NONE = "none"),
          Fl(rh.prototype, {
            delete: { name: "delete", j: [] },
            oc: { name: "getIdTokenResult", j: [Ol("opt_forceRefresh", !0)] },
            I: { name: "getIdToken", j: [Ol("opt_forceRefresh", !0)] },
            Cc: { name: "linkAndRetrieveDataWithCredential", j: [Pl()] },
            rb: { name: "linkWithCredential", j: [Pl()] },
            Dc: { name: "linkWithPhoneNumber", j: [_l("phoneNumber"), Ul()] },
            Ec: { name: "linkWithPopup", j: [xl()] },
            Fc: { name: "linkWithRedirect", j: [xl()] },
            Lc: {
              name: "reauthenticateAndRetrieveDataWithCredential",
              j: [Pl()],
            },
            ub: { name: "reauthenticateWithCredential", j: [Pl()] },
            Mc: {
              name: "reauthenticateWithPhoneNumber",
              j: [_l("phoneNumber"), Ul()],
            },
            Nc: { name: "reauthenticateWithPopup", j: [xl()] },
            Oc: { name: "reauthenticateWithRedirect", j: [xl()] },
            reload: { name: "reload", j: [] },
            vb: {
              name: "sendEmailVerification",
              j: [
                Vl(
                  Cl("opt_actionCodeSettings", !0),
                  Dl(null, !0),
                  "opt_actionCodeSettings",
                  !0
                ),
              ],
            },
            toJSON: { name: "toJSON", j: [_l(null, !0)] },
            cd: { name: "unlink", j: [_l("provider")] },
            Cb: { name: "updateEmail", j: [_l("email")] },
            Db: { name: "updatePassword", j: [_l("password")] },
            ed: { name: "updatePhoneNumber", j: [Pl("phone")] },
            Eb: { name: "updateProfile", j: [Cl("profile")] },
            Fb: {
              name: "verifyBeforeUpdateEmail",
              j: [
                _l("email"),
                Vl(
                  Cl("opt_actionCodeSettings", !0),
                  Dl(null, !0),
                  "opt_actionCodeSettings",
                  !0
                ),
              ],
            },
          }),
          Fl(rl.prototype, {
            execute: { name: "execute" },
            render: { name: "render" },
            reset: { name: "reset" },
            getResponse: { name: "getResponse" },
          }),
          Fl(il.prototype, {
            execute: { name: "execute" },
            render: { name: "render" },
            reset: { name: "reset" },
            getResponse: { name: "getResponse" },
          }),
          Fl(le.prototype, {
            oa: { name: "finally" },
            o: { name: "catch" },
            then: { name: "then" },
          }),
          ql(jc.prototype, {
            appVerificationDisabled: {
              name: "appVerificationDisabledForTesting",
              lb: Ol("appVerificationDisabledForTesting"),
            },
          }),
          Fl(Uc.prototype, {
            confirm: { name: "confirm", j: [_l("verificationCode")] },
          }),
          Hl(
            $r,
            "fromJSON",
            function (t) {
              t = "string" == typeof t ? JSON.parse(t) : t;
              for (var e, n = [ro, bo, Eo, eo], i = 0; i < n.length; i++)
                if ((e = n[i](t))) return e;
              return null;
            },
            [Vl(_l(), Cl(), "json")]
          ),
          Hl(
            yo,
            "credential",
            function (t, e) {
              return new go(t, e);
            },
            [_l("email"), _l("password")]
          ),
          Fl(go.prototype, { w: { name: "toJSON", j: [_l(null, !0)] } }),
          Fl(uo.prototype, {
            Ca: { name: "addScope", j: [_l("scope")] },
            Ka: {
              name: "setCustomParameters",
              j: [Cl("customOAuthParameters")],
            },
          }),
          Hl(uo, "credential", co, [Vl(_l(), Cl(), "token")]),
          Hl(yo, "credentialWithLink", wo, [_l("email"), _l("emailLink")]),
          Fl(ho.prototype, {
            Ca: { name: "addScope", j: [_l("scope")] },
            Ka: {
              name: "setCustomParameters",
              j: [Cl("customOAuthParameters")],
            },
          }),
          Hl(ho, "credential", lo, [Vl(_l(), Cl(), "token")]),
          Fl(fo.prototype, {
            Ca: { name: "addScope", j: [_l("scope")] },
            Ka: {
              name: "setCustomParameters",
              j: [Cl("customOAuthParameters")],
            },
          }),
          Hl(fo, "credential", po, [
            Vl(_l(), Vl(Cl(), Dl()), "idToken"),
            Vl(_l(), Dl(), "accessToken", !0),
          ]),
          Fl(vo.prototype, {
            Ka: {
              name: "setCustomParameters",
              j: [Cl("customOAuthParameters")],
            },
          }),
          Hl(vo, "credential", mo, [Vl(_l(), Cl(), "token"), _l("secret", !0)]),
          Fl(so.prototype, {
            Ca: { name: "addScope", j: [_l("scope")] },
            credential: {
              name: "credential",
              j: [
                Vl(_l(), Vl(Cl(), Dl()), "optionsOrIdToken"),
                Vl(_l(), Dl(), "accessToken", !0),
              ],
            },
            Ka: {
              name: "setCustomParameters",
              j: [Cl("customOAuthParameters")],
            },
          }),
          Fl(no.prototype, { w: { name: "toJSON", j: [_l(null, !0)] } }),
          Fl(Qr.prototype, { w: { name: "toJSON", j: [_l(null, !0)] } }),
          Hl(ko, "credential", So, [
            _l("verificationId"),
            _l("verificationCode"),
          ]),
          Fl(ko.prototype, {
            gb: {
              name: "verifyPhoneNumber",
              j: [
                Vl(
                  _l(),
                  {
                    name: "phoneInfoOptions",
                    K: "valid phone info options",
                    optional: !1,
                    M: function (t) {
                      return (
                        !!t &&
                        (t.session && t.phoneNumber
                          ? Ml(t.session, Yr) &&
                            "string" == typeof t.phoneNumber
                          : t.session && t.multiFactorHint
                          ? Ml(t.session, zr) && jl(t.multiFactorHint)
                          : t.session && t.multiFactorUid
                          ? Ml(t.session, zr) &&
                            "string" == typeof t.multiFactorUid
                          : !!t.phoneNumber && "string" == typeof t.phoneNumber)
                      );
                    },
                  },
                  "phoneInfoOptions"
                ),
                Ul(),
              ],
            },
          }),
          Fl(To.prototype, { w: { name: "toJSON", j: [_l(null, !0)] } }),
          Fl(T.prototype, { toJSON: { name: "toJSON", j: [_l(null, !0)] } }),
          Fl(xo.prototype, { toJSON: { name: "toJSON", j: [_l(null, !0)] } }),
          Fl(Lo.prototype, { toJSON: { name: "toJSON", j: [_l(null, !0)] } }),
          Fl(Gc.prototype, { toJSON: { name: "toJSON", j: [_l(null, !0)] } }),
          Fl(qc.prototype, { Rc: { name: "resolveSignIn", j: [Ll()] } }),
          Fl(zc.prototype, {
            Sb: { name: "getSession", j: [] },
            fc: { name: "enroll", j: [Ll(), _l("displayName", !0)] },
            bd: {
              name: "unenroll",
              j: [
                Vl(
                  {
                    name: "multiFactorInfo",
                    K: "a valid multiFactorInfo",
                    optional: !1,
                    M: jl,
                  },
                  _l(),
                  "multiFactorInfoIdentifier"
                ),
              ],
            },
          }),
          Fl(kl.prototype, {
            clear: { name: "clear", j: [] },
            render: { name: "render", j: [] },
            verify: { name: "verify", j: [] },
          }),
          Hl(cr, "parseLink", gr, [_l("link")]),
          Hl(
            hl,
            "assertion",
            function (t) {
              return new Jc(t);
            },
            [Pl("phone")]
          ),
          (function () {
            if (
              void 0 === Gl.default ||
              !Gl.default.INTERNAL ||
              !Gl.default.INTERNAL.registerComponent
            )
              throw Error(
                "Cannot find the firebase namespace; be sure to include firebase-app.js before this library."
              );
            var t = {
              ActionCodeInfo: {
                Operation: {
                  EMAIL_SIGNIN: $i,
                  PASSWORD_RESET: "PASSWORD_RESET",
                  RECOVER_EMAIL: "RECOVER_EMAIL",
                  REVERT_SECOND_FACTOR_ADDITION: zi,
                  VERIFY_AND_CHANGE_EMAIL: Zi,
                  VERIFY_EMAIL: "VERIFY_EMAIL",
                },
              },
              Auth: Bh,
              AuthCredential: $r,
              Error: T,
            };
            Hl(t, "EmailAuthProvider", yo, []),
              Hl(t, "FacebookAuthProvider", uo, []),
              Hl(t, "GithubAuthProvider", ho, []),
              Hl(t, "GoogleAuthProvider", fo, []),
              Hl(t, "TwitterAuthProvider", vo, []),
              Hl(t, "OAuthProvider", so, [_l("providerId")]),
              Hl(t, "SAMLAuthProvider", ao, [_l("providerId")]),
              Hl(t, "PhoneAuthProvider", ko, [
                {
                  name: "auth",
                  K: "an instance of Firebase Auth",
                  optional: !0,
                  M: function (t) {
                    return !!(t && t instanceof Bh);
                  },
                },
              ]),
              Hl(t, "RecaptchaVerifier", kl, [
                Vl(
                  _l(),
                  {
                    name: "",
                    K: "an HTML element",
                    optional: !1,
                    M: function (t) {
                      return !!(t && t instanceof Element);
                    },
                  },
                  "recaptchaContainer"
                ),
                Cl("recaptchaParameters", !0),
                {
                  name: "app",
                  K: "an instance of Firebase App",
                  optional: !0,
                  M: function (t) {
                    return !!(t && t instanceof Gl.default.app.App);
                  },
                },
              ]),
              Hl(t, "ActionCodeURL", cr, []),
              Hl(t, "PhoneMultiFactorGenerator", hl, []),
              Gl.default.INTERNAL.registerComponent({
                name: "auth",
                instanceFactory: function (t) {
                  return new Bh((t = t.getProvider("app").getImmediate()));
                },
                multipleInstances: !1,
                serviceProps: t,
                instantiationMode: "LAZY",
                type: "PUBLIC",
                onInstanceCreated: function (t) {
                  t.getProvider("auth-internal").initialize();
                },
              }),
              Gl.default.INTERNAL.registerComponent({
                name: "auth-internal",
                instanceFactory: function (t) {
                  return {
                    getUid: b(
                      (t = t.getProvider("auth").getImmediate()).getUid,
                      t
                    ),
                    getToken: b(t.nc, t),
                    addAuthTokenListener: b(t.cc, t),
                    removeAuthTokenListener: b(t.Pc, t),
                  };
                },
                multipleInstances: !1,
                instantiationMode: "LAZY",
                type: "PRIVATE",
              }),
              Gl.default.registerVersion("@firebase/auth", "0.16.8"),
              Gl.default.INTERNAL.extendNamespace({ User: rh });
          })();
      }.apply(
        "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : {}
      );
    }.apply(this, arguments);
  } catch (t) {
    throw (
      (console.error(t),
      new Error(
        "Cannot instantiate firebase-auth.js - be sure to load firebase-app.js first."
      ))
    );
  }
});
