/* eslint-disable no-redeclare */
/* eslint-disable quotes */
/* eslint-disable no-func-assign */
/* eslint-disable react/display-name */
/* eslint-disable no-constant-condition */
/* eslint-disable no-control-regex */
/* eslint-disable no-fallthrough */
/* eslint-disable valid-typeof */
/* eslint-disable no-unused-vars */
/* eslint-disable getter-return */
/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable no-cond-assign */
/* eslint-disable no-useless-escape */
/* eslint-disable no-misleading-character-class */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-extra-semi */
/* eslint-disable indent */
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const l of i.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(o) {
    const i = {}
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
      o.crossorigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossorigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    )
  }
  function r(o) {
    if (o.ep) return
    o.ep = !0
    const i = n(o)
    fetch(o.href, i)
  }
})()
function Cp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var Fr = {},
  Ep = {
    get exports() {
      return Fr
    },
    set exports(e) {
      Fr = e
    },
  },
  pi = {},
  k = {},
  Pp = {
    get exports() {
      return k
    },
    set exports(e) {
      k = e
    },
  },
  W = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zr = Symbol.for('react.element'),
  Tp = Symbol.for('react.portal'),
  Lp = Symbol.for('react.fragment'),
  zp = Symbol.for('react.strict_mode'),
  Fp = Symbol.for('react.profiler'),
  Rp = Symbol.for('react.provider'),
  Mp = Symbol.for('react.context'),
  Np = Symbol.for('react.forward_ref'),
  Op = Symbol.for('react.suspense'),
  _p = Symbol.for('react.memo'),
  Ip = Symbol.for('react.lazy'),
  Oa = Symbol.iterator
function Dp(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Oa && e[Oa]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var bc = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  kc = Object.assign,
  Cc = {}
function tr(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Cc),
    (this.updater = n || bc)
}
tr.prototype.isReactComponent = {}
tr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
tr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Ec() {}
Ec.prototype = tr.prototype
function Rs(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Cc),
    (this.updater = n || bc)
}
var Ms = (Rs.prototype = new Ec())
Ms.constructor = Rs
kc(Ms, tr.prototype)
Ms.isPureReactComponent = !0
var _a = Array.isArray,
  Pc = Object.prototype.hasOwnProperty,
  Ns = { current: null },
  Tc = { key: !0, ref: !0, __self: !0, __source: !0 }
function Lc(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      Pc.call(t, r) && !Tc.hasOwnProperty(r) && (o[r] = t[r])
  var s = arguments.length - 2
  if (s === 1) o.children = n
  else if (1 < s) {
    for (var a = Array(s), c = 0; c < s; c++) a[c] = arguments[c + 2]
    o.children = a
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r])
  return { $$typeof: Zr, type: e, key: i, ref: l, props: o, _owner: Ns.current }
}
function Bp(e, t) {
  return {
    $$typeof: Zr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function Os(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Zr
}
function Wp(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Ia = /\/+/g
function Ri(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Wp('' + e.key)
    : t.toString(36)
}
function Po(e, t, n, r, o) {
  var i = typeof e
  ;(i === 'undefined' || i === 'boolean') && (e = null)
  var l = !1
  if (e === null) l = !0
  else
    switch (i) {
      case 'string':
      case 'number':
        l = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Zr:
          case Tp:
            l = !0
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === '' ? '.' + Ri(l, 0) : r),
      _a(o)
        ? ((n = ''),
          e != null && (n = e.replace(Ia, '$&/') + '/'),
          Po(o, t, n, '', function (c) {
            return c
          }))
        : o != null &&
          (Os(o) &&
            (o = Bp(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ''
                  : ('' + o.key).replace(Ia, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    )
  if (((l = 0), (r = r === '' ? '.' : r + ':'), _a(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s]
      var a = r + Ri(i, s)
      l += Po(i, t, n, a, o)
    }
  else if (((a = Dp(e)), typeof a == 'function'))
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Ri(i, s++)), (l += Po(i, t, n, a, o))
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return l
}
function oo(e, t, n) {
  if (e == null) return e
  var r = [],
    o = 0
  return (
    Po(e, r, '', '', function (i) {
      return t.call(n, i, o++)
    }),
    r
  )
}
function Hp(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var Se = { current: null },
  To = { transition: null },
  Ap = {
    ReactCurrentDispatcher: Se,
    ReactCurrentBatchConfig: To,
    ReactCurrentOwner: Ns,
  }
W.Children = {
  map: oo,
  forEach: function (e, t, n) {
    oo(
      e,
      function () {
        t.apply(this, arguments)
      },
      n
    )
  },
  count: function (e) {
    var t = 0
    return (
      oo(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      oo(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Os(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  },
}
W.Component = tr
W.Fragment = Lp
W.Profiler = Fp
W.PureComponent = Rs
W.StrictMode = zp
W.Suspense = Op
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ap
W.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var r = kc({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Ns.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps
    for (a in t)
      Pc.call(t, a) &&
        !Tc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a])
  }
  var a = arguments.length - 2
  if (a === 1) r.children = n
  else if (1 < a) {
    s = Array(a)
    for (var c = 0; c < a; c++) s[c] = arguments[c + 2]
    r.children = s
  }
  return { $$typeof: Zr, type: e.type, key: o, ref: i, props: r, _owner: l }
}
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: Mp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Rp, _context: e }),
    (e.Consumer = e)
  )
}
W.createElement = Lc
W.createFactory = function (e) {
  var t = Lc.bind(null, e)
  return (t.type = e), t
}
W.createRef = function () {
  return { current: null }
}
W.forwardRef = function (e) {
  return { $$typeof: Np, render: e }
}
W.isValidElement = Os
W.lazy = function (e) {
  return { $$typeof: Ip, _payload: { _status: -1, _result: e }, _init: Hp }
}
W.memo = function (e, t) {
  return { $$typeof: _p, type: e, compare: t === void 0 ? null : t }
}
W.startTransition = function (e) {
  var t = To.transition
  To.transition = {}
  try {
    e()
  } finally {
    To.transition = t
  }
}
W.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
W.useCallback = function (e, t) {
  return Se.current.useCallback(e, t)
}
W.useContext = function (e) {
  return Se.current.useContext(e)
}
W.useDebugValue = function () {}
W.useDeferredValue = function (e) {
  return Se.current.useDeferredValue(e)
}
W.useEffect = function (e, t) {
  return Se.current.useEffect(e, t)
}
W.useId = function () {
  return Se.current.useId()
}
W.useImperativeHandle = function (e, t, n) {
  return Se.current.useImperativeHandle(e, t, n)
}
W.useInsertionEffect = function (e, t) {
  return Se.current.useInsertionEffect(e, t)
}
W.useLayoutEffect = function (e, t) {
  return Se.current.useLayoutEffect(e, t)
}
W.useMemo = function (e, t) {
  return Se.current.useMemo(e, t)
}
W.useReducer = function (e, t, n) {
  return Se.current.useReducer(e, t, n)
}
W.useRef = function (e) {
  return Se.current.useRef(e)
}
W.useState = function (e) {
  return Se.current.useState(e)
}
W.useSyncExternalStore = function (e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n)
}
W.useTransition = function () {
  return Se.current.useTransition()
}
W.version = '18.2.0'
;(function (e) {
  e.exports = W
})(Pp)
const _ = Cp(k)
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jp = k,
  Up = Symbol.for('react.element'),
  Vp = Symbol.for('react.fragment'),
  Kp = Object.prototype.hasOwnProperty,
  Gp = jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Qp = { key: !0, ref: !0, __self: !0, __source: !0 }
function zc(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (l = t.ref)
  for (r in t) Kp.call(t, r) && !Qp.hasOwnProperty(r) && (o[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
  return { $$typeof: Up, type: e, key: i, ref: l, props: o, _owner: Gp.current }
}
pi.Fragment = Vp
pi.jsx = zc
pi.jsxs = zc
;(function (e) {
  e.exports = pi
})(Ep)
const gi = Fr.Fragment,
  F = Fr.jsx,
  Te = Fr.jsxs
var dl = {},
  fl = {},
  Yp = {
    get exports() {
      return fl
    },
    set exports(e) {
      fl = e
    },
  },
  Ne = {},
  pl = {},
  Xp = {
    get exports() {
      return pl
    },
    set exports(e) {
      pl = e
    },
  },
  Fc = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(z, D) {
    var B = z.length
    z.push(D)
    e: for (; 0 < B; ) {
      var Q = (B - 1) >>> 1,
        ne = z[Q]
      if (0 < o(ne, D)) (z[Q] = D), (z[B] = ne), (B = Q)
      else break e
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0]
  }
  function r(z) {
    if (z.length === 0) return null
    var D = z[0],
      B = z.pop()
    if (B !== D) {
      z[0] = B
      e: for (var Q = 0, ne = z.length, fn = ne >>> 1; Q < fn; ) {
        var ot = 2 * (Q + 1) - 1,
          ir = z[ot],
          je = ot + 1,
          pn = z[je]
        if (0 > o(ir, B))
          je < ne && 0 > o(pn, ir)
            ? ((z[Q] = pn), (z[je] = B), (Q = je))
            : ((z[Q] = ir), (z[ot] = B), (Q = ot))
        else if (je < ne && 0 > o(pn, B)) (z[Q] = pn), (z[je] = B), (Q = je)
        else break e
      }
    }
    return D
  }
  function o(z, D) {
    var B = z.sortIndex - D.sortIndex
    return B !== 0 ? B : z.id - D.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance
    e.unstable_now = function () {
      return i.now()
    }
  } else {
    var l = Date,
      s = l.now()
    e.unstable_now = function () {
      return l.now() - s
    }
  }
  var a = [],
    c = [],
    g = 1,
    h = null,
    p = 3,
    m = !1,
    w = !1,
    S = !1,
    L = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    d = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function y(z) {
    for (var D = n(c); D !== null; ) {
      if (D.callback === null) r(c)
      else if (D.startTime <= z) r(c), (D.sortIndex = D.expirationTime), t(a, D)
      else break
      D = n(c)
    }
  }
  function u(z) {
    if (((S = !1), y(z), !w))
      if (n(a) !== null) (w = !0), fe(E)
      else {
        var D = n(c)
        D !== null && Le(u, D.startTime - z)
      }
  }
  function E(z, D) {
    ;(w = !1), S && ((S = !1), f(C), (C = -1)), (m = !0)
    var B = p
    try {
      for (
        y(D), h = n(a);
        h !== null && (!(h.expirationTime > D) || (z && !v()));

      ) {
        var Q = h.callback
        if (typeof Q == 'function') {
          ;(h.callback = null), (p = h.priorityLevel)
          var ne = Q(h.expirationTime <= D)
          ;(D = e.unstable_now()),
            typeof ne == 'function' ? (h.callback = ne) : h === n(a) && r(a),
            y(D)
        } else r(a)
        h = n(a)
      }
      if (h !== null) var fn = !0
      else {
        var ot = n(c)
        ot !== null && Le(u, ot.startTime - D), (fn = !1)
      }
      return fn
    } finally {
      ;(h = null), (p = B), (m = !1)
    }
  }
  var b = !1,
    P = null,
    C = -1,
    R = 5,
    O = -1
  function v() {
    return !(e.unstable_now() - O < R)
  }
  function I() {
    if (P !== null) {
      var z = e.unstable_now()
      O = z
      var D = !0
      try {
        D = P(!0, z)
      } finally {
        D ? $() : ((b = !1), (P = null))
      }
    } else b = !1
  }
  var $
  if (typeof d == 'function')
    $ = function () {
      d(I)
    }
  else if (typeof MessageChannel < 'u') {
    var x = new MessageChannel(),
      ae = x.port2
    ;(x.port1.onmessage = I),
      ($ = function () {
        ae.postMessage(null)
      })
  } else
    $ = function () {
      L(I, 0)
    }
  function fe(z) {
    ;(P = z), b || ((b = !0), $())
  }
  function Le(z, D) {
    C = L(function () {
      z(e.unstable_now())
    }, D)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null
    }),
    (e.unstable_continueExecution = function () {
      w || m || ((w = !0), fe(E))
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (R = 0 < z ? Math.floor(1e3 / z) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a)
    }),
    (e.unstable_next = function (z) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var D = 3
          break
        default:
          D = p
      }
      var B = p
      p = D
      try {
        return z()
      } finally {
        p = B
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (z, D) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          z = 3
      }
      var B = p
      p = z
      try {
        return D()
      } finally {
        p = B
      }
    }),
    (e.unstable_scheduleCallback = function (z, D, B) {
      var Q = e.unstable_now()
      switch (
        (typeof B == 'object' && B !== null
          ? ((B = B.delay), (B = typeof B == 'number' && 0 < B ? Q + B : Q))
          : (B = Q),
        z)
      ) {
        case 1:
          var ne = -1
          break
        case 2:
          ne = 250
          break
        case 5:
          ne = 1073741823
          break
        case 4:
          ne = 1e4
          break
        default:
          ne = 5e3
      }
      return (
        (ne = B + ne),
        (z = {
          id: g++,
          callback: D,
          priorityLevel: z,
          startTime: B,
          expirationTime: ne,
          sortIndex: -1,
        }),
        B > Q
          ? ((z.sortIndex = B),
            t(c, z),
            n(a) === null &&
              z === n(c) &&
              (S ? (f(C), (C = -1)) : (S = !0), Le(u, B - Q)))
          : ((z.sortIndex = ne), t(a, z), w || m || ((w = !0), fe(E))),
        z
      )
    }),
    (e.unstable_shouldYield = v),
    (e.unstable_wrapCallback = function (z) {
      var D = p
      return function () {
        var B = p
        p = D
        try {
          return z.apply(this, arguments)
        } finally {
          p = B
        }
      }
    })
})(Fc)
;(function (e) {
  e.exports = Fc
})(Xp)
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rc = k,
  Me = pl
function T(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var Mc = new Set(),
  Rr = {}
function an(e, t) {
  Gn(e, t), Gn(e + 'Capture', t)
}
function Gn(e, t) {
  for (Rr[e] = t, e = 0; e < t.length; e++) Mc.add(t[e])
}
var pt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  gl = Object.prototype.hasOwnProperty,
  Zp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Da = {},
  Ba = {}
function Jp(e) {
  return gl.call(Ba, e)
    ? !0
    : gl.call(Da, e)
    ? !1
    : Zp.test(e)
    ? (Ba[e] = !0)
    : ((Da[e] = !0), !1)
}
function qp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function eg(e, t, n, r) {
  if (t === null || typeof t > 'u' || qp(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function xe(e, t, n, r, o, i, l) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l)
}
var de = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    de[e] = new xe(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  de[t] = new xe(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  de[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  de[e] = new xe(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    de[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  de[e] = new xe(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  de[e] = new xe(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  de[e] = new xe(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  de[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var _s = /[\-:]([a-z])/g
function Is(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(_s, Is)
    de[t] = new xe(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(_s, Is)
    de[t] = new xe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(_s, Is)
  de[t] = new xe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  de[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
de.xlinkHref = new xe(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  de[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Ds(e, t, n, r) {
  var o = de.hasOwnProperty(t) ? de[t] : null
  ;(o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (eg(t, n, o, r) && (n = null),
    r || o === null
      ? Jp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var vt = Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  io = Symbol.for('react.element'),
  kn = Symbol.for('react.portal'),
  Cn = Symbol.for('react.fragment'),
  Bs = Symbol.for('react.strict_mode'),
  ml = Symbol.for('react.profiler'),
  Nc = Symbol.for('react.provider'),
  Oc = Symbol.for('react.context'),
  Ws = Symbol.for('react.forward_ref'),
  hl = Symbol.for('react.suspense'),
  yl = Symbol.for('react.suspense_list'),
  Hs = Symbol.for('react.memo'),
  wt = Symbol.for('react.lazy'),
  _c = Symbol.for('react.offscreen'),
  Wa = Symbol.iterator
function lr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Wa && e[Wa]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var J = Object.assign,
  Mi
function mr(e) {
  if (Mi === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      Mi = (t && t[1]) || ''
    }
  return (
    `
` +
    Mi +
    e
  )
}
var Ni = !1
function Oi(e, t) {
  if (!e || Ni) return ''
  Ni = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (c) {
          var r = c
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (c) {
          r = c
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (c) {
        r = c
      }
      e()
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var o = c.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && o[l] !== i[s];

      )
        s--
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== i[s])) {
                var a =
                  `
` + o[l].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                )
              }
            while (1 <= l && 0 <= s)
          break
        }
    }
  } finally {
    ;(Ni = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? mr(e) : ''
}
function tg(e) {
  switch (e.tag) {
    case 5:
      return mr(e.type)
    case 16:
      return mr('Lazy')
    case 13:
      return mr('Suspense')
    case 19:
      return mr('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Oi(e.type, !1)), e
    case 11:
      return (e = Oi(e.type.render, !1)), e
    case 1:
      return (e = Oi(e.type, !0)), e
    default:
      return ''
  }
}
function vl(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Cn:
      return 'Fragment'
    case kn:
      return 'Portal'
    case ml:
      return 'Profiler'
    case Bs:
      return 'StrictMode'
    case hl:
      return 'Suspense'
    case yl:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Oc:
        return (e.displayName || 'Context') + '.Consumer'
      case Nc:
        return (e._context.displayName || 'Context') + '.Provider'
      case Ws:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Hs:
        return (
          (t = e.displayName || null), t !== null ? t : vl(e.type) || 'Memo'
        )
      case wt:
        ;(t = e._payload), (e = e._init)
        try {
          return vl(e(t))
        } catch {}
    }
  return null
}
function ng(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return vl(t)
    case 8:
      return t === Bs ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function Ot(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function Ic(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function rg(e) {
  var t = Ic(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
        },
        set: function (l) {
          ;(r = '' + l), i.call(this, l)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (l) {
          r = '' + l
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function lo(e) {
  e._valueTracker || (e._valueTracker = rg(e))
}
function Dc(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = Ic(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Ao(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function $l(e, t) {
  var n = t.checked
  return J({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function Ha(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = Ot(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function Bc(e, t) {
  ;(t = t.checked), t != null && Ds(e, 'checked', t, !1)
}
function wl(e, t) {
  Bc(e, t)
  var n = Ot(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? Sl(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Sl(e, t.type, Ot(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Aa(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function Sl(e, t, n) {
  ;(t !== 'number' || Ao(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var hr = Array.isArray
function Wn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + Ot(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function xl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91))
  return J({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function ja(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92))
      if (hr(n)) {
        if (1 < n.length) throw Error(T(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: Ot(n) }
}
function Wc(e, t) {
  var n = Ot(t.value),
    r = Ot(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function Ua(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Hc(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function bl(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Hc(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var so,
  Ac = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        so = so || document.createElement('div'),
          so.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = so.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Mr(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var Sr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  og = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Sr).forEach(function (e) {
  og.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Sr[t] = Sr[e])
  })
})
function jc(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Sr.hasOwnProperty(e) && Sr[e])
    ? ('' + t).trim()
    : t + 'px'
}
function Uc(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = jc(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o)
    }
}
var ig = J(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
)
function kl(e, t) {
  if (t) {
    if (ig[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(T(62))
  }
}
function Cl(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var El = null
function As(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var Pl = null,
  Hn = null,
  An = null
function Va(e) {
  if ((e = eo(e))) {
    if (typeof Pl != 'function') throw Error(T(280))
    var t = e.stateNode
    t && ((t = $i(t)), Pl(e.stateNode, e.type, t))
  }
}
function Vc(e) {
  Hn ? (An ? An.push(e) : (An = [e])) : (Hn = e)
}
function Kc() {
  if (Hn) {
    var e = Hn,
      t = An
    if (((An = Hn = null), Va(e), t)) for (e = 0; e < t.length; e++) Va(t[e])
  }
}
function Gc(e, t) {
  return e(t)
}
function Qc() {}
var _i = !1
function Yc(e, t, n) {
  if (_i) return e(t, n)
  _i = !0
  try {
    return Gc(e, t, n)
  } finally {
    ;(_i = !1), (Hn !== null || An !== null) && (Qc(), Kc())
  }
}
function Nr(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = $i(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(T(231, t, typeof n))
  return n
}
var Tl = !1
if (pt)
  try {
    var sr = {}
    Object.defineProperty(sr, 'passive', {
      get: function () {
        Tl = !0
      },
    }),
      window.addEventListener('test', sr, sr),
      window.removeEventListener('test', sr, sr)
  } catch {
    Tl = !1
  }
function lg(e, t, n, r, o, i, l, s, a) {
  var c = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, c)
  } catch (g) {
    this.onError(g)
  }
}
var xr = !1,
  jo = null,
  Uo = !1,
  Ll = null,
  sg = {
    onError: function (e) {
      ;(xr = !0), (jo = e)
    },
  }
function ag(e, t, n, r, o, i, l, s, a) {
  ;(xr = !1), (jo = null), lg.apply(sg, arguments)
}
function ug(e, t, n, r, o, i, l, s, a) {
  if ((ag.apply(this, arguments), xr)) {
    if (xr) {
      var c = jo
      ;(xr = !1), (jo = null)
    } else throw Error(T(198))
    Uo || ((Uo = !0), (Ll = c))
  }
}
function un(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function Xc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function Ka(e) {
  if (un(e) !== e) throw Error(T(188))
}
function cg(e) {
  var t = e.alternate
  if (!t) {
    if (((t = un(e)), t === null)) throw Error(T(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var o = n.return
    if (o === null) break
    var i = o.alternate
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Ka(o), e
        if (i === r) return Ka(o), t
        i = i.sibling
      }
      throw Error(T(188))
    }
    if (n.return !== r.return) (n = o), (r = i)
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          ;(l = !0), (n = o), (r = i)
          break
        }
        if (s === r) {
          ;(l = !0), (r = o), (n = i)
          break
        }
        s = s.sibling
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            ;(l = !0), (n = i), (r = o)
            break
          }
          if (s === r) {
            ;(l = !0), (r = i), (n = o)
            break
          }
          s = s.sibling
        }
        if (!l) throw Error(T(189))
      }
    }
    if (n.alternate !== r) throw Error(T(190))
  }
  if (n.tag !== 3) throw Error(T(188))
  return n.stateNode.current === n ? e : t
}
function Zc(e) {
  return (e = cg(e)), e !== null ? Jc(e) : null
}
function Jc(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = Jc(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var qc = Me.unstable_scheduleCallback,
  Ga = Me.unstable_cancelCallback,
  dg = Me.unstable_shouldYield,
  fg = Me.unstable_requestPaint,
  ee = Me.unstable_now,
  pg = Me.unstable_getCurrentPriorityLevel,
  js = Me.unstable_ImmediatePriority,
  ed = Me.unstable_UserBlockingPriority,
  Vo = Me.unstable_NormalPriority,
  gg = Me.unstable_LowPriority,
  td = Me.unstable_IdlePriority,
  mi = null,
  tt = null
function mg(e) {
  if (tt && typeof tt.onCommitFiberRoot == 'function')
    try {
      tt.onCommitFiberRoot(mi, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : vg,
  hg = Math.log,
  yg = Math.LN2
function vg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((hg(e) / yg) | 0)) | 0
}
var ao = 64,
  uo = 4194304
function yr(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Ko(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455
  if (l !== 0) {
    var s = l & ~o
    s !== 0 ? (r = yr(s)) : ((i &= l), i !== 0 && (r = yr(i)))
  } else (l = n & ~o), l !== 0 ? (r = yr(l)) : i !== 0 && (r = yr(i))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Qe(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
  return r
}
function $g(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function wg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - Qe(i),
      s = 1 << l,
      a = o[l]
    a === -1
      ? (!(s & n) || s & r) && (o[l] = $g(s, t))
      : a <= t && (e.expiredLanes |= s),
      (i &= ~s)
  }
}
function zl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function nd() {
  var e = ao
  return (ao <<= 1), !(ao & 4194240) && (ao = 64), e
}
function Ii(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function Jr(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Qe(t)),
    (e[t] = n)
}
function Sg(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Qe(n),
      i = 1 << o
    ;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i)
  }
}
function Us(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - Qe(n),
      o = 1 << r
    ;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
  }
}
var A = 0
function rd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var od,
  Vs,
  id,
  ld,
  sd,
  Fl = !1,
  co = [],
  Et = null,
  Pt = null,
  Tt = null,
  Or = new Map(),
  _r = new Map(),
  xt = [],
  xg =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function Qa(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Et = null
      break
    case 'dragenter':
    case 'dragleave':
      Pt = null
      break
    case 'mouseover':
    case 'mouseout':
      Tt = null
      break
    case 'pointerover':
    case 'pointerout':
      Or.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      _r.delete(t.pointerId)
  }
}
function ar(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = eo(t)), t !== null && Vs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function bg(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Et = ar(Et, e, t, n, r, o)), !0
    case 'dragenter':
      return (Pt = ar(Pt, e, t, n, r, o)), !0
    case 'mouseover':
      return (Tt = ar(Tt, e, t, n, r, o)), !0
    case 'pointerover':
      var i = o.pointerId
      return Or.set(i, ar(Or.get(i) || null, e, t, n, r, o)), !0
    case 'gotpointercapture':
      return (
        (i = o.pointerId), _r.set(i, ar(_r.get(i) || null, e, t, n, r, o)), !0
      )
  }
  return !1
}
function ad(e) {
  var t = Kt(e.target)
  if (t !== null) {
    var n = un(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Xc(n)), t !== null)) {
          ;(e.blockedOn = t),
            sd(e.priority, function () {
              id(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Lo(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Rl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(El = r), n.target.dispatchEvent(r), (El = null)
    } else return (t = eo(n)), t !== null && Vs(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Ya(e, t, n) {
  Lo(e) && n.delete(t)
}
function kg() {
  ;(Fl = !1),
    Et !== null && Lo(Et) && (Et = null),
    Pt !== null && Lo(Pt) && (Pt = null),
    Tt !== null && Lo(Tt) && (Tt = null),
    Or.forEach(Ya),
    _r.forEach(Ya)
}
function ur(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fl ||
      ((Fl = !0), Me.unstable_scheduleCallback(Me.unstable_NormalPriority, kg)))
}
function Ir(e) {
  function t(o) {
    return ur(o, e)
  }
  if (0 < co.length) {
    ur(co[0], e)
    for (var n = 1; n < co.length; n++) {
      var r = co[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    Et !== null && ur(Et, e),
      Pt !== null && ur(Pt, e),
      Tt !== null && ur(Tt, e),
      Or.forEach(t),
      _r.forEach(t),
      n = 0;
    n < xt.length;
    n++
  )
    (r = xt[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < xt.length && ((n = xt[0]), n.blockedOn === null); )
    ad(n), n.blockedOn === null && xt.shift()
}
var jn = vt.ReactCurrentBatchConfig,
  Go = !0
function Cg(e, t, n, r) {
  var o = A,
    i = jn.transition
  jn.transition = null
  try {
    ;(A = 1), Ks(e, t, n, r)
  } finally {
    ;(A = o), (jn.transition = i)
  }
}
function Eg(e, t, n, r) {
  var o = A,
    i = jn.transition
  jn.transition = null
  try {
    ;(A = 4), Ks(e, t, n, r)
  } finally {
    ;(A = o), (jn.transition = i)
  }
}
function Ks(e, t, n, r) {
  if (Go) {
    var o = Rl(e, t, n, r)
    if (o === null) Gi(e, t, r, Qo, n), Qa(e, r)
    else if (bg(o, e, t, n, r)) r.stopPropagation()
    else if ((Qa(e, r), t & 4 && -1 < xg.indexOf(e))) {
      for (; o !== null; ) {
        var i = eo(o)
        if (
          (i !== null && od(i),
          (i = Rl(e, t, n, r)),
          i === null && Gi(e, t, r, Qo, n),
          i === o)
        )
          break
        o = i
      }
      o !== null && r.stopPropagation()
    } else Gi(e, t, r, null, n)
  }
}
var Qo = null
function Rl(e, t, n, r) {
  if (((Qo = null), (e = As(r)), (e = Kt(e)), e !== null))
    if (((t = un(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = Xc(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Qo = e), null
}
function ud(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (pg()) {
        case js:
          return 1
        case ed:
          return 4
        case Vo:
        case gg:
          return 16
        case td:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var kt = null,
  Gs = null,
  zo = null
function cd() {
  if (zo) return zo
  var e,
    t = Gs,
    n = t.length,
    r,
    o = 'value' in kt ? kt.value : kt.textContent,
    i = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (zo = o.slice(e, 1 < r ? 1 - r : void 0))
}
function Fo(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function fo() {
  return !0
}
function Xa() {
  return !1
}
function Oe(e) {
  function t(n, r, o, i, l) {
    ;(this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null)
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]))
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? fo
        : Xa),
      (this.isPropagationStopped = Xa),
      this
    )
  }
  return (
    J(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = fo))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = fo))
      },
      persist: function () {},
      isPersistent: fo,
    }),
    t
  )
}
var nr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Qs = Oe(nr),
  qr = J({}, nr, { view: 0, detail: 0 }),
  Pg = Oe(qr),
  Di,
  Bi,
  cr,
  hi = J({}, qr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ys,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== cr &&
            (cr && e.type === 'mousemove'
              ? ((Di = e.screenX - cr.screenX), (Bi = e.screenY - cr.screenY))
              : (Bi = Di = 0),
            (cr = e)),
          Di)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Bi
    },
  }),
  Za = Oe(hi),
  Tg = J({}, hi, { dataTransfer: 0 }),
  Lg = Oe(Tg),
  zg = J({}, qr, { relatedTarget: 0 }),
  Wi = Oe(zg),
  Fg = J({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Rg = Oe(Fg),
  Mg = J({}, nr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  Ng = Oe(Mg),
  Og = J({}, nr, { data: 0 }),
  Ja = Oe(Og),
  _g = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Ig = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Dg = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function Bg(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = Dg[e]) ? !!t[e] : !1
}
function Ys() {
  return Bg
}
var Wg = J({}, qr, {
    key: function (e) {
      if (e.key) {
        var t = _g[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Fo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Ig[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ys,
    charCode: function (e) {
      return e.type === 'keypress' ? Fo(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Fo(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  Hg = Oe(Wg),
  Ag = J({}, hi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  qa = Oe(Ag),
  jg = J({}, qr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ys,
  }),
  Ug = Oe(jg),
  Vg = J({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Kg = Oe(Vg),
  Gg = J({}, hi, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Qg = Oe(Gg),
  Yg = [9, 13, 27, 32],
  Xs = pt && 'CompositionEvent' in window,
  br = null
pt && 'documentMode' in document && (br = document.documentMode)
var Xg = pt && 'TextEvent' in window && !br,
  dd = pt && (!Xs || (br && 8 < br && 11 >= br)),
  eu = String.fromCharCode(32),
  tu = !1
function fd(e, t) {
  switch (e) {
    case 'keyup':
      return Yg.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function pd(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var En = !1
function Zg(e, t) {
  switch (e) {
    case 'compositionend':
      return pd(t)
    case 'keypress':
      return t.which !== 32 ? null : ((tu = !0), eu)
    case 'textInput':
      return (e = t.data), e === eu && tu ? null : e
    default:
      return null
  }
}
function Jg(e, t) {
  if (En)
    return e === 'compositionend' || (!Xs && fd(e, t))
      ? ((e = cd()), (zo = Gs = kt = null), (En = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return dd && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var qg = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!qg[e.type] : t === 'textarea'
}
function gd(e, t, n, r) {
  Vc(r),
    (t = Yo(t, 'onChange')),
    0 < t.length &&
      ((n = new Qs('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var kr = null,
  Dr = null
function em(e) {
  Cd(e, 0)
}
function yi(e) {
  var t = Ln(e)
  if (Dc(t)) return e
}
function tm(e, t) {
  if (e === 'change') return t
}
var md = !1
if (pt) {
  var Hi
  if (pt) {
    var Ai = 'oninput' in document
    if (!Ai) {
      var ru = document.createElement('div')
      ru.setAttribute('oninput', 'return;'),
        (Ai = typeof ru.oninput == 'function')
    }
    Hi = Ai
  } else Hi = !1
  md = Hi && (!document.documentMode || 9 < document.documentMode)
}
function ou() {
  kr && (kr.detachEvent('onpropertychange', hd), (Dr = kr = null))
}
function hd(e) {
  if (e.propertyName === 'value' && yi(Dr)) {
    var t = []
    gd(t, Dr, e, As(e)), Yc(em, t)
  }
}
function nm(e, t, n) {
  e === 'focusin'
    ? (ou(), (kr = t), (Dr = n), kr.attachEvent('onpropertychange', hd))
    : e === 'focusout' && ou()
}
function rm(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return yi(Dr)
}
function om(e, t) {
  if (e === 'click') return yi(t)
}
function im(e, t) {
  if (e === 'input' || e === 'change') return yi(t)
}
function lm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Xe = typeof Object.is == 'function' ? Object.is : lm
function Br(e, t) {
  if (Xe(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var o = n[r]
    if (!gl.call(t, o) || !Xe(e[o], t[o])) return !1
  }
  return !0
}
function iu(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function lu(e, t) {
  var n = iu(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = iu(n)
  }
}
function yd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? yd(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function vd() {
  for (var e = window, t = Ao(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Ao(e.document)
  }
  return t
}
function Zs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function sm(e) {
  var t = vd(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    yd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Zs(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var o = n.textContent.length,
          i = Math.min(r.start, o)
        ;(r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = lu(n, i))
        var l = lu(n, r)
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var am = pt && 'documentMode' in document && 11 >= document.documentMode,
  Pn = null,
  Ml = null,
  Cr = null,
  Nl = !1
function su(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Nl ||
    Pn == null ||
    Pn !== Ao(r) ||
    ((r = Pn),
    'selectionStart' in r && Zs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Cr && Br(Cr, r)) ||
      ((Cr = r),
      (r = Yo(Ml, 'onSelect')),
      0 < r.length &&
        ((t = new Qs('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Pn))))
}
function po(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var Tn = {
    animationend: po('Animation', 'AnimationEnd'),
    animationiteration: po('Animation', 'AnimationIteration'),
    animationstart: po('Animation', 'AnimationStart'),
    transitionend: po('Transition', 'TransitionEnd'),
  },
  ji = {},
  $d = {}
pt &&
  (($d = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Tn.animationend.animation,
    delete Tn.animationiteration.animation,
    delete Tn.animationstart.animation),
  'TransitionEvent' in window || delete Tn.transitionend.transition)
function vi(e) {
  if (ji[e]) return ji[e]
  if (!Tn[e]) return e
  var t = Tn[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in $d) return (ji[e] = t[n])
  return e
}
var wd = vi('animationend'),
  Sd = vi('animationiteration'),
  xd = vi('animationstart'),
  bd = vi('transitionend'),
  kd = new Map(),
  au =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function It(e, t) {
  kd.set(e, t), an(t, [e])
}
for (var Ui = 0; Ui < au.length; Ui++) {
  var Vi = au[Ui],
    um = Vi.toLowerCase(),
    cm = Vi[0].toUpperCase() + Vi.slice(1)
  It(um, 'on' + cm)
}
It(wd, 'onAnimationEnd')
It(Sd, 'onAnimationIteration')
It(xd, 'onAnimationStart')
It('dblclick', 'onDoubleClick')
It('focusin', 'onFocus')
It('focusout', 'onBlur')
It(bd, 'onTransitionEnd')
Gn('onMouseEnter', ['mouseout', 'mouseover'])
Gn('onMouseLeave', ['mouseout', 'mouseover'])
Gn('onPointerEnter', ['pointerout', 'pointerover'])
Gn('onPointerLeave', ['pointerout', 'pointerover'])
an(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
an(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
an('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
an(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
an(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
an(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var vr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  dm = new Set('cancel close invalid load scroll toggle'.split(' ').concat(vr))
function uu(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), ug(r, t, void 0, e), (e.currentTarget = null)
}
function Cd(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event
    r = r.listeners
    e: {
      var i = void 0
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            c = s.currentTarget
          if (((s = s.listener), a !== i && o.isPropagationStopped())) break e
          uu(o, s, c), (i = a)
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            a !== i && o.isPropagationStopped())
          )
            break e
          uu(o, s, c), (i = a)
        }
    }
  }
  if (Uo) throw ((e = Ll), (Uo = !1), (Ll = null), e)
}
function V(e, t) {
  var n = t[Bl]
  n === void 0 && (n = t[Bl] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Ed(t, e, 2, !1), n.add(r))
}
function Ki(e, t, n) {
  var r = 0
  t && (r |= 4), Ed(n, e, r, t)
}
var go = '_reactListening' + Math.random().toString(36).slice(2)
function Wr(e) {
  if (!e[go]) {
    ;(e[go] = !0),
      Mc.forEach(function (n) {
        n !== 'selectionchange' && (dm.has(n) || Ki(n, !1, e), Ki(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[go] || ((t[go] = !0), Ki('selectionchange', !1, t))
  }
}
function Ed(e, t, n, r) {
  switch (ud(t)) {
    case 1:
      var o = Cg
      break
    case 4:
      o = Eg
      break
    default:
      o = Ks
  }
  ;(n = o.bind(null, t, n, e)),
    (o = void 0),
    !Tl ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1)
}
function Gi(e, t, n, r, o) {
  var i = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var l = r.tag
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return
            l = l.return
          }
        for (; s !== null; ) {
          if (((l = Kt(s)), l === null)) return
          if (((a = l.tag), a === 5 || a === 6)) {
            r = i = l
            continue e
          }
          s = s.parentNode
        }
      }
      r = r.return
    }
  Yc(function () {
    var c = i,
      g = As(n),
      h = []
    e: {
      var p = kd.get(e)
      if (p !== void 0) {
        var m = Qs,
          w = e
        switch (e) {
          case 'keypress':
            if (Fo(n) === 0) break e
          case 'keydown':
          case 'keyup':
            m = Hg
            break
          case 'focusin':
            ;(w = 'focus'), (m = Wi)
            break
          case 'focusout':
            ;(w = 'blur'), (m = Wi)
            break
          case 'beforeblur':
          case 'afterblur':
            m = Wi
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            m = Za
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = Lg
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = Ug
            break
          case wd:
          case Sd:
          case xd:
            m = Rg
            break
          case bd:
            m = Kg
            break
          case 'scroll':
            m = Pg
            break
          case 'wheel':
            m = Qg
            break
          case 'copy':
          case 'cut':
          case 'paste':
            m = Ng
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = qa
        }
        var S = (t & 4) !== 0,
          L = !S && e === 'scroll',
          f = S ? (p !== null ? p + 'Capture' : null) : p
        S = []
        for (var d = c, y; d !== null; ) {
          y = d
          var u = y.stateNode
          if (
            (y.tag === 5 &&
              u !== null &&
              ((y = u),
              f !== null && ((u = Nr(d, f)), u != null && S.push(Hr(d, u, y)))),
            L)
          )
            break
          d = d.return
        }
        0 < S.length &&
          ((p = new m(p, w, null, n, g)), h.push({ event: p, listeners: S }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (m = e === 'mouseout' || e === 'pointerout'),
          p &&
            n !== El &&
            (w = n.relatedTarget || n.fromElement) &&
            (Kt(w) || w[gt]))
        )
          break e
        if (
          (m || p) &&
          ((p =
            g.window === g
              ? g
              : (p = g.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          m
            ? ((w = n.relatedTarget || n.toElement),
              (m = c),
              (w = w ? Kt(w) : null),
              w !== null &&
                ((L = un(w)), w !== L || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((m = null), (w = c)),
          m !== w)
        ) {
          if (
            ((S = Za),
            (u = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (d = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((S = qa),
              (u = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (d = 'pointer')),
            (L = m == null ? p : Ln(m)),
            (y = w == null ? p : Ln(w)),
            (p = new S(u, d + 'leave', m, n, g)),
            (p.target = L),
            (p.relatedTarget = y),
            (u = null),
            Kt(g) === c &&
              ((S = new S(f, d + 'enter', w, n, g)),
              (S.target = y),
              (S.relatedTarget = L),
              (u = S)),
            (L = u),
            m && w)
          )
            t: {
              for (S = m, f = w, d = 0, y = S; y; y = mn(y)) d++
              for (y = 0, u = f; u; u = mn(u)) y++
              for (; 0 < d - y; ) (S = mn(S)), d--
              for (; 0 < y - d; ) (f = mn(f)), y--
              for (; d--; ) {
                if (S === f || (f !== null && S === f.alternate)) break t
                ;(S = mn(S)), (f = mn(f))
              }
              S = null
            }
          else S = null
          m !== null && cu(h, p, m, S, !1),
            w !== null && L !== null && cu(h, L, w, S, !0)
        }
      }
      e: {
        if (
          ((p = c ? Ln(c) : window),
          (m = p.nodeName && p.nodeName.toLowerCase()),
          m === 'select' || (m === 'input' && p.type === 'file'))
        )
          var E = tm
        else if (nu(p))
          if (md) E = im
          else {
            E = rm
            var b = nm
          }
        else
          (m = p.nodeName) &&
            m.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (E = om)
        if (E && (E = E(e, c))) {
          gd(h, E, n, g)
          break e
        }
        b && b(e, p, c),
          e === 'focusout' &&
            (b = p._wrapperState) &&
            b.controlled &&
            p.type === 'number' &&
            Sl(p, 'number', p.value)
      }
      switch (((b = c ? Ln(c) : window), e)) {
        case 'focusin':
          ;(nu(b) || b.contentEditable === 'true') &&
            ((Pn = b), (Ml = c), (Cr = null))
          break
        case 'focusout':
          Cr = Ml = Pn = null
          break
        case 'mousedown':
          Nl = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Nl = !1), su(h, n, g)
          break
        case 'selectionchange':
          if (am) break
        case 'keydown':
        case 'keyup':
          su(h, n, g)
      }
      var P
      if (Xs)
        e: {
          switch (e) {
            case 'compositionstart':
              var C = 'onCompositionStart'
              break e
            case 'compositionend':
              C = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              C = 'onCompositionUpdate'
              break e
          }
          C = void 0
        }
      else
        En
          ? fd(e, n) && (C = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (C = 'onCompositionStart')
      C &&
        (dd &&
          n.locale !== 'ko' &&
          (En || C !== 'onCompositionStart'
            ? C === 'onCompositionEnd' && En && (P = cd())
            : ((kt = g),
              (Gs = 'value' in kt ? kt.value : kt.textContent),
              (En = !0))),
        (b = Yo(c, C)),
        0 < b.length &&
          ((C = new Ja(C, e, null, n, g)),
          h.push({ event: C, listeners: b }),
          P ? (C.data = P) : ((P = pd(n)), P !== null && (C.data = P)))),
        (P = Xg ? Zg(e, n) : Jg(e, n)) &&
          ((c = Yo(c, 'onBeforeInput')),
          0 < c.length &&
            ((g = new Ja('onBeforeInput', 'beforeinput', null, n, g)),
            h.push({ event: g, listeners: c }),
            (g.data = P)))
    }
    Cd(h, t)
  })
}
function Hr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Yo(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Nr(e, n)),
      i != null && r.unshift(Hr(e, i, o)),
      (i = Nr(e, t)),
      i != null && r.push(Hr(e, i, o))),
      (e = e.return)
  }
  return r
}
function mn(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function cu(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      c = s.stateNode
    if (a !== null && a === r) break
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      o
        ? ((a = Nr(n, i)), a != null && l.unshift(Hr(n, a, s)))
        : o || ((a = Nr(n, i)), a != null && l.push(Hr(n, a, s)))),
      (n = n.return)
  }
  l.length !== 0 && e.push({ event: t, listeners: l })
}
var fm = /\r\n?/g,
  pm = /\u0000|\uFFFD/g
function du(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      fm,
      `
`
    )
    .replace(pm, '')
}
function mo(e, t, n) {
  if (((t = du(t)), du(e) !== t && n)) throw Error(T(425))
}
function Xo() {}
var Ol = null,
  _l = null
function Il(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Dl = typeof setTimeout == 'function' ? setTimeout : void 0,
  gm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  fu = typeof Promise == 'function' ? Promise : void 0,
  mm =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof fu < 'u'
      ? function (e) {
          return fu.resolve(null).then(e).catch(hm)
        }
      : Dl
function hm(e) {
  setTimeout(function () {
    throw e
  })
}
function Qi(e, t) {
  var n = t,
    r = 0
  do {
    var o = n.nextSibling
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Ir(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = o
  } while (n)
  Ir(t)
}
function Lt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function pu(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var rr = Math.random().toString(36).slice(2),
  et = '__reactFiber$' + rr,
  Ar = '__reactProps$' + rr,
  gt = '__reactContainer$' + rr,
  Bl = '__reactEvents$' + rr,
  ym = '__reactListeners$' + rr,
  vm = '__reactHandles$' + rr
function Kt(e) {
  var t = e[et]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[gt] || n[et])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = pu(e); e !== null; ) {
          if ((n = e[et])) return n
          e = pu(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function eo(e) {
  return (
    (e = e[et] || e[gt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function Ln(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(T(33))
}
function $i(e) {
  return e[Ar] || null
}
var Wl = [],
  zn = -1
function Dt(e) {
  return { current: e }
}
function K(e) {
  0 > zn || ((e.current = Wl[zn]), (Wl[zn] = null), zn--)
}
function U(e, t) {
  zn++, (Wl[zn] = e.current), (e.current = t)
}
var _t = {},
  ye = Dt(_t),
  Ce = Dt(!1),
  en = _t
function Qn(e, t) {
  var n = e.type.contextTypes
  if (!n) return _t
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var o = {},
    i
  for (i in n) o[i] = t[i]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  )
}
function Ee(e) {
  return (e = e.childContextTypes), e != null
}
function Zo() {
  K(Ce), K(ye)
}
function gu(e, t, n) {
  if (ye.current !== _t) throw Error(T(168))
  U(ye, t), U(Ce, n)
}
function Pd(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var o in r) if (!(o in t)) throw Error(T(108, ng(e) || 'Unknown', o))
  return J({}, n, r)
}
function Jo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || _t),
    (en = ye.current),
    U(ye, e),
    U(Ce, Ce.current),
    !0
  )
}
function mu(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(T(169))
  n
    ? ((e = Pd(e, t, en)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K(Ce),
      K(ye),
      U(ye, e))
    : K(Ce),
    U(Ce, n)
}
var at = null,
  wi = !1,
  Yi = !1
function Td(e) {
  at === null ? (at = [e]) : at.push(e)
}
function $m(e) {
  ;(wi = !0), Td(e)
}
function Bt() {
  if (!Yi && at !== null) {
    Yi = !0
    var e = 0,
      t = A
    try {
      var n = at
      for (A = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(at = null), (wi = !1)
    } catch (o) {
      throw (at !== null && (at = at.slice(e + 1)), qc(js, Bt), o)
    } finally {
      ;(A = t), (Yi = !1)
    }
  }
  return null
}
var Fn = [],
  Rn = 0,
  qo = null,
  ei = 0,
  _e = [],
  Ie = 0,
  tn = null,
  ut = 1,
  ct = ''
function At(e, t) {
  ;(Fn[Rn++] = ei), (Fn[Rn++] = qo), (qo = e), (ei = t)
}
function Ld(e, t, n) {
  ;(_e[Ie++] = ut), (_e[Ie++] = ct), (_e[Ie++] = tn), (tn = e)
  var r = ut
  e = ct
  var o = 32 - Qe(r) - 1
  ;(r &= ~(1 << o)), (n += 1)
  var i = 32 - Qe(t) + o
  if (30 < i) {
    var l = o - (o % 5)
    ;(i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (ut = (1 << (32 - Qe(t) + o)) | (n << o) | r),
      (ct = i + e)
  } else (ut = (1 << i) | (n << o) | r), (ct = e)
}
function Js(e) {
  e.return !== null && (At(e, 1), Ld(e, 1, 0))
}
function qs(e) {
  for (; e === qo; )
    (qo = Fn[--Rn]), (Fn[Rn] = null), (ei = Fn[--Rn]), (Fn[Rn] = null)
  for (; e === tn; )
    (tn = _e[--Ie]),
      (_e[Ie] = null),
      (ct = _e[--Ie]),
      (_e[Ie] = null),
      (ut = _e[--Ie]),
      (_e[Ie] = null)
}
var Re = null,
  Fe = null,
  G = !1,
  Ge = null
function zd(e, t) {
  var n = De(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function hu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Re = e), (Fe = Lt(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Re = e), (Fe = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = tn !== null ? { id: ut, overflow: ct } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = De(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Re = e),
            (Fe = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Hl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Al(e) {
  if (G) {
    var t = Fe
    if (t) {
      var n = t
      if (!hu(e, t)) {
        if (Hl(e)) throw Error(T(418))
        t = Lt(n.nextSibling)
        var r = Re
        t && hu(e, t)
          ? zd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (G = !1), (Re = e))
      }
    } else {
      if (Hl(e)) throw Error(T(418))
      ;(e.flags = (e.flags & -4097) | 2), (G = !1), (Re = e)
    }
  }
}
function yu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  Re = e
}
function ho(e) {
  if (e !== Re) return !1
  if (!G) return yu(e), (G = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Il(e.type, e.memoizedProps))),
    t && (t = Fe))
  ) {
    if (Hl(e)) throw (Fd(), Error(T(418)))
    for (; t; ) zd(e, t), (t = Lt(t.nextSibling))
  }
  if ((yu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              Fe = Lt(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      Fe = null
    }
  } else Fe = Re ? Lt(e.stateNode.nextSibling) : null
  return !0
}
function Fd() {
  for (var e = Fe; e; ) e = Lt(e.nextSibling)
}
function Yn() {
  ;(Fe = Re = null), (G = !1)
}
function ea(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e)
}
var wm = vt.ReactCurrentBatchConfig
function Ve(e, t) {
  if (e && e.defaultProps) {
    ;(t = J({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var ti = Dt(null),
  ni = null,
  Mn = null,
  ta = null
function na() {
  ta = Mn = ni = null
}
function ra(e) {
  var t = ti.current
  K(ti), (e._currentValue = t)
}
function jl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function Un(e, t) {
  ;(ni = e),
    (ta = Mn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ke = !0), (e.firstContext = null))
}
function We(e) {
  var t = e._currentValue
  if (ta !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Mn === null)) {
      if (ni === null) throw Error(T(308))
      ;(Mn = e), (ni.dependencies = { lanes: 0, firstContext: e })
    } else Mn = Mn.next = e
  return t
}
var Gt = null
function oa(e) {
  Gt === null ? (Gt = [e]) : Gt.push(e)
}
function Rd(e, t, n, r) {
  var o = t.interleaved
  return (
    o === null ? ((n.next = n), oa(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    mt(e, r)
  )
}
function mt(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var St = !1
function ia(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Md(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function dt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function zt(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), H & 2)) {
    var o = r.pending
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      mt(e, n)
    )
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), oa(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    mt(e, n)
  )
}
function Ro(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Us(e, n)
  }
}
function vu(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next)
      } while (n !== null)
      i === null ? (o = i = t) : (i = i.next = t)
    } else o = i = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function ri(e, t, n, r) {
  var o = e.updateQueue
  St = !1
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending
  if (s !== null) {
    o.shared.pending = null
    var a = s,
      c = a.next
    ;(a.next = null), l === null ? (i = c) : (l.next = c), (l = a)
    var g = e.alternate
    g !== null &&
      ((g = g.updateQueue),
      (s = g.lastBaseUpdate),
      s !== l &&
        (s === null ? (g.firstBaseUpdate = c) : (s.next = c),
        (g.lastBaseUpdate = a)))
  }
  if (i !== null) {
    var h = o.baseState
    ;(l = 0), (g = c = a = null), (s = i)
    do {
      var p = s.lane,
        m = s.eventTime
      if ((r & p) === p) {
        g !== null &&
          (g = g.next =
            {
              eventTime: m,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            })
        e: {
          var w = e,
            S = s
          switch (((p = t), (m = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == 'function')) {
                h = w.call(m, h, p)
                break e
              }
              h = w
              break e
            case 3:
              w.flags = (w.flags & -65537) | 128
            case 0:
              if (
                ((w = S.payload),
                (p = typeof w == 'function' ? w.call(m, h, p) : w),
                p == null)
              )
                break e
              h = J({}, h, p)
              break e
            case 2:
              St = !0
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [s]) : p.push(s))
      } else
        (m = {
          eventTime: m,
          lane: p,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          g === null ? ((c = g = m), (a = h)) : (g = g.next = m),
          (l |= p)
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break
        ;(p = s),
          (s = p.next),
          (p.next = null),
          (o.lastBaseUpdate = p),
          (o.shared.pending = null)
      }
    } while (1)
    if (
      (g === null && (a = h),
      (o.baseState = a),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = g),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t
      do (l |= o.lane), (o = o.next)
      while (o !== t)
    } else i === null && (o.shared.lanes = 0)
    ;(rn |= l), (e.lanes = l), (e.memoizedState = h)
  }
}
function $u(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(T(191, o))
        o.call(r)
      }
    }
}
var Nd = new Rc.Component().refs
function Ul(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : J({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Si = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? un(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = we(),
      o = Rt(e),
      i = dt(r, o)
    ;(i.payload = t),
      n != null && (i.callback = n),
      (t = zt(e, i, o)),
      t !== null && (Ye(t, e, o, r), Ro(t, e, o))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = we(),
      o = Rt(e),
      i = dt(r, o)
    ;(i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = zt(e, i, o)),
      t !== null && (Ye(t, e, o, r), Ro(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = we(),
      r = Rt(e),
      o = dt(n, r)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = zt(e, o, r)),
      t !== null && (Ye(t, e, r, n), Ro(t, e, r))
  },
}
function wu(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Br(n, r) || !Br(o, i)
      : !0
  )
}
function Od(e, t, n) {
  var r = !1,
    o = _t,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = We(i))
      : ((o = Ee(t) ? en : ye.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Qn(e, o) : _t)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Si),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function Su(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Si.enqueueReplaceState(t, t.state, null)
}
function Vl(e, t, n, r) {
  var o = e.stateNode
  ;(o.props = n), (o.state = e.memoizedState), (o.refs = Nd), ia(e)
  var i = t.contextType
  typeof i == 'object' && i !== null
    ? (o.context = We(i))
    : ((i = Ee(t) ? en : ye.current), (o.context = Qn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Ul(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Si.enqueueReplaceState(o, o.state, null),
      ri(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function dr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309))
        var r = n.stateNode
      }
      if (!r) throw Error(T(147, e))
      var o = r,
        i = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs
            s === Nd && (s = o.refs = {}), l === null ? delete s[i] : (s[i] = l)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error(T(284))
    if (!n._owner) throw Error(T(290, e))
  }
  return e
}
function yo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  )
}
function xu(e) {
  var t = e._init
  return t(e._payload)
}
function _d(e) {
  function t(f, d) {
    if (e) {
      var y = f.deletions
      y === null ? ((f.deletions = [d]), (f.flags |= 16)) : y.push(d)
    }
  }
  function n(f, d) {
    if (!e) return null
    for (; d !== null; ) t(f, d), (d = d.sibling)
    return null
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling)
    return f
  }
  function o(f, d) {
    return (f = Mt(f, d)), (f.index = 0), (f.sibling = null), f
  }
  function i(f, d, y) {
    return (
      (f.index = y),
      e
        ? ((y = f.alternate),
          y !== null
            ? ((y = y.index), y < d ? ((f.flags |= 2), d) : y)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    )
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f
  }
  function s(f, d, y, u) {
    return d === null || d.tag !== 6
      ? ((d = nl(y, f.mode, u)), (d.return = f), d)
      : ((d = o(d, y)), (d.return = f), d)
  }
  function a(f, d, y, u) {
    var E = y.type
    return E === Cn
      ? g(f, d, y.props.children, u, y.key)
      : d !== null &&
        (d.elementType === E ||
          (typeof E == 'object' &&
            E !== null &&
            E.$$typeof === wt &&
            xu(E) === d.type))
      ? ((u = o(d, y.props)), (u.ref = dr(f, d, y)), (u.return = f), u)
      : ((u = Do(y.type, y.key, y.props, null, f.mode, u)),
        (u.ref = dr(f, d, y)),
        (u.return = f),
        u)
  }
  function c(f, d, y, u) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== y.containerInfo ||
      d.stateNode.implementation !== y.implementation
      ? ((d = rl(y, f.mode, u)), (d.return = f), d)
      : ((d = o(d, y.children || [])), (d.return = f), d)
  }
  function g(f, d, y, u, E) {
    return d === null || d.tag !== 7
      ? ((d = Xt(y, f.mode, u, E)), (d.return = f), d)
      : ((d = o(d, y)), (d.return = f), d)
  }
  function h(f, d, y) {
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return (d = nl('' + d, f.mode, y)), (d.return = f), d
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case io:
          return (
            (y = Do(d.type, d.key, d.props, null, f.mode, y)),
            (y.ref = dr(f, null, d)),
            (y.return = f),
            y
          )
        case kn:
          return (d = rl(d, f.mode, y)), (d.return = f), d
        case wt:
          var u = d._init
          return h(f, u(d._payload), y)
      }
      if (hr(d) || lr(d)) return (d = Xt(d, f.mode, y, null)), (d.return = f), d
      yo(f, d)
    }
    return null
  }
  function p(f, d, y, u) {
    var E = d !== null ? d.key : null
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return E !== null ? null : s(f, d, '' + y, u)
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case io:
          return y.key === E ? a(f, d, y, u) : null
        case kn:
          return y.key === E ? c(f, d, y, u) : null
        case wt:
          return (E = y._init), p(f, d, E(y._payload), u)
      }
      if (hr(y) || lr(y)) return E !== null ? null : g(f, d, y, u, null)
      yo(f, y)
    }
    return null
  }
  function m(f, d, y, u, E) {
    if ((typeof u == 'string' && u !== '') || typeof u == 'number')
      return (f = f.get(y) || null), s(d, f, '' + u, E)
    if (typeof u == 'object' && u !== null) {
      switch (u.$$typeof) {
        case io:
          return (f = f.get(u.key === null ? y : u.key) || null), a(d, f, u, E)
        case kn:
          return (f = f.get(u.key === null ? y : u.key) || null), c(d, f, u, E)
        case wt:
          var b = u._init
          return m(f, d, y, b(u._payload), E)
      }
      if (hr(u) || lr(u)) return (f = f.get(y) || null), g(d, f, u, E, null)
      yo(d, u)
    }
    return null
  }
  function w(f, d, y, u) {
    for (
      var E = null, b = null, P = d, C = (d = 0), R = null;
      P !== null && C < y.length;
      C++
    ) {
      P.index > C ? ((R = P), (P = null)) : (R = P.sibling)
      var O = p(f, P, y[C], u)
      if (O === null) {
        P === null && (P = R)
        break
      }
      e && P && O.alternate === null && t(f, P),
        (d = i(O, d, C)),
        b === null ? (E = O) : (b.sibling = O),
        (b = O),
        (P = R)
    }
    if (C === y.length) return n(f, P), G && At(f, C), E
    if (P === null) {
      for (; C < y.length; C++)
        (P = h(f, y[C], u)),
          P !== null &&
            ((d = i(P, d, C)), b === null ? (E = P) : (b.sibling = P), (b = P))
      return G && At(f, C), E
    }
    for (P = r(f, P); C < y.length; C++)
      (R = m(P, f, C, y[C], u)),
        R !== null &&
          (e && R.alternate !== null && P.delete(R.key === null ? C : R.key),
          (d = i(R, d, C)),
          b === null ? (E = R) : (b.sibling = R),
          (b = R))
    return (
      e &&
        P.forEach(function (v) {
          return t(f, v)
        }),
      G && At(f, C),
      E
    )
  }
  function S(f, d, y, u) {
    var E = lr(y)
    if (typeof E != 'function') throw Error(T(150))
    if (((y = E.call(y)), y == null)) throw Error(T(151))
    for (
      var b = (E = null), P = d, C = (d = 0), R = null, O = y.next();
      P !== null && !O.done;
      C++, O = y.next()
    ) {
      P.index > C ? ((R = P), (P = null)) : (R = P.sibling)
      var v = p(f, P, O.value, u)
      if (v === null) {
        P === null && (P = R)
        break
      }
      e && P && v.alternate === null && t(f, P),
        (d = i(v, d, C)),
        b === null ? (E = v) : (b.sibling = v),
        (b = v),
        (P = R)
    }
    if (O.done) return n(f, P), G && At(f, C), E
    if (P === null) {
      for (; !O.done; C++, O = y.next())
        (O = h(f, O.value, u)),
          O !== null &&
            ((d = i(O, d, C)), b === null ? (E = O) : (b.sibling = O), (b = O))
      return G && At(f, C), E
    }
    for (P = r(f, P); !O.done; C++, O = y.next())
      (O = m(P, f, C, O.value, u)),
        O !== null &&
          (e && O.alternate !== null && P.delete(O.key === null ? C : O.key),
          (d = i(O, d, C)),
          b === null ? (E = O) : (b.sibling = O),
          (b = O))
    return (
      e &&
        P.forEach(function (I) {
          return t(f, I)
        }),
      G && At(f, C),
      E
    )
  }
  function L(f, d, y, u) {
    if (
      (typeof y == 'object' &&
        y !== null &&
        y.type === Cn &&
        y.key === null &&
        (y = y.props.children),
      typeof y == 'object' && y !== null)
    ) {
      switch (y.$$typeof) {
        case io:
          e: {
            for (var E = y.key, b = d; b !== null; ) {
              if (b.key === E) {
                if (((E = y.type), E === Cn)) {
                  if (b.tag === 7) {
                    n(f, b.sibling),
                      (d = o(b, y.props.children)),
                      (d.return = f),
                      (f = d)
                    break e
                  }
                } else if (
                  b.elementType === E ||
                  (typeof E == 'object' &&
                    E !== null &&
                    E.$$typeof === wt &&
                    xu(E) === b.type)
                ) {
                  n(f, b.sibling),
                    (d = o(b, y.props)),
                    (d.ref = dr(f, b, y)),
                    (d.return = f),
                    (f = d)
                  break e
                }
                n(f, b)
                break
              } else t(f, b)
              b = b.sibling
            }
            y.type === Cn
              ? ((d = Xt(y.props.children, f.mode, u, y.key)),
                (d.return = f),
                (f = d))
              : ((u = Do(y.type, y.key, y.props, null, f.mode, u)),
                (u.ref = dr(f, d, y)),
                (u.return = f),
                (f = u))
          }
          return l(f)
        case kn:
          e: {
            for (b = y.key; d !== null; ) {
              if (d.key === b)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === y.containerInfo &&
                  d.stateNode.implementation === y.implementation
                ) {
                  n(f, d.sibling),
                    (d = o(d, y.children || [])),
                    (d.return = f),
                    (f = d)
                  break e
                } else {
                  n(f, d)
                  break
                }
              else t(f, d)
              d = d.sibling
            }
            ;(d = rl(y, f.mode, u)), (d.return = f), (f = d)
          }
          return l(f)
        case wt:
          return (b = y._init), L(f, d, b(y._payload), u)
      }
      if (hr(y)) return w(f, d, y, u)
      if (lr(y)) return S(f, d, y, u)
      yo(f, y)
    }
    return (typeof y == 'string' && y !== '') || typeof y == 'number'
      ? ((y = '' + y),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = o(d, y)), (d.return = f), (f = d))
          : (n(f, d), (d = nl(y, f.mode, u)), (d.return = f), (f = d)),
        l(f))
      : n(f, d)
  }
  return L
}
var Xn = _d(!0),
  Id = _d(!1),
  to = {},
  nt = Dt(to),
  jr = Dt(to),
  Ur = Dt(to)
function Qt(e) {
  if (e === to) throw Error(T(174))
  return e
}
function la(e, t) {
  switch ((U(Ur, t), U(jr, e), U(nt, to), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : bl(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = bl(t, e))
  }
  K(nt), U(nt, t)
}
function Zn() {
  K(nt), K(jr), K(Ur)
}
function Dd(e) {
  Qt(Ur.current)
  var t = Qt(nt.current),
    n = bl(t, e.type)
  t !== n && (U(jr, e), U(nt, n))
}
function sa(e) {
  jr.current === e && (K(nt), K(jr))
}
var X = Dt(0)
function oi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var Xi = []
function aa() {
  for (var e = 0; e < Xi.length; e++) Xi[e]._workInProgressVersionPrimary = null
  Xi.length = 0
}
var Mo = vt.ReactCurrentDispatcher,
  Zi = vt.ReactCurrentBatchConfig,
  nn = 0,
  Z = null,
  oe = null,
  le = null,
  ii = !1,
  Er = !1,
  Vr = 0,
  Sm = 0
function pe() {
  throw Error(T(321))
}
function ua(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Xe(e[n], t[n])) return !1
  return !0
}
function ca(e, t, n, r, o, i) {
  if (
    ((nn = i),
    (Z = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Mo.current = e === null || e.memoizedState === null ? Cm : Em),
    (e = n(r, o)),
    Er)
  ) {
    i = 0
    do {
      if (((Er = !1), (Vr = 0), 25 <= i)) throw Error(T(301))
      ;(i += 1),
        (le = oe = null),
        (t.updateQueue = null),
        (Mo.current = Pm),
        (e = n(r, o))
    } while (Er)
  }
  if (
    ((Mo.current = li),
    (t = oe !== null && oe.next !== null),
    (nn = 0),
    (le = oe = Z = null),
    (ii = !1),
    t)
  )
    throw Error(T(300))
  return e
}
function da() {
  var e = Vr !== 0
  return (Vr = 0), e
}
function qe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return le === null ? (Z.memoizedState = le = e) : (le = le.next = e), le
}
function He() {
  if (oe === null) {
    var e = Z.alternate
    e = e !== null ? e.memoizedState : null
  } else e = oe.next
  var t = le === null ? Z.memoizedState : le.next
  if (t !== null) (le = t), (oe = e)
  else {
    if (e === null) throw Error(T(310))
    ;(oe = e),
      (e = {
        memoizedState: oe.memoizedState,
        baseState: oe.baseState,
        baseQueue: oe.baseQueue,
        queue: oe.queue,
        next: null,
      }),
      le === null ? (Z.memoizedState = le = e) : (le = le.next = e)
  }
  return le
}
function Kr(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Ji(e) {
  var t = He(),
    n = t.queue
  if (n === null) throw Error(T(311))
  n.lastRenderedReducer = e
  var r = oe,
    o = r.baseQueue,
    i = n.pending
  if (i !== null) {
    if (o !== null) {
      var l = o.next
      ;(o.next = i.next), (i.next = l)
    }
    ;(r.baseQueue = o = i), (n.pending = null)
  }
  if (o !== null) {
    ;(i = o.next), (r = r.baseState)
    var s = (l = null),
      a = null,
      c = i
    do {
      var g = c.lane
      if ((nn & g) === g)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action))
      else {
        var h = {
          lane: g,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        }
        a === null ? ((s = a = h), (l = r)) : (a = a.next = h),
          (Z.lanes |= g),
          (rn |= g)
      }
      c = c.next
    } while (c !== null && c !== i)
    a === null ? (l = r) : (a.next = s),
      Xe(r, t.memoizedState) || (ke = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    o = e
    do (i = o.lane), (Z.lanes |= i), (rn |= i), (o = o.next)
    while (o !== e)
  } else o === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function qi(e) {
  var t = He(),
    n = t.queue
  if (n === null) throw Error(T(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState
  if (o !== null) {
    n.pending = null
    var l = (o = o.next)
    do (i = e(i, l.action)), (l = l.next)
    while (l !== o)
    Xe(i, t.memoizedState) || (ke = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i)
  }
  return [i, r]
}
function Bd() {}
function Wd(e, t) {
  var n = Z,
    r = He(),
    o = t(),
    i = !Xe(r.memoizedState, o)
  if (
    (i && ((r.memoizedState = o), (ke = !0)),
    (r = r.queue),
    fa(jd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gr(9, Ad.bind(null, n, r, o, t), void 0, null),
      se === null)
    )
      throw Error(T(349))
    nn & 30 || Hd(n, t, o)
  }
  return o
}
function Hd(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Ad(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), Ud(t) && Vd(e)
}
function jd(e, t, n) {
  return n(function () {
    Ud(t) && Vd(e)
  })
}
function Ud(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Xe(e, n)
  } catch {
    return !0
  }
}
function Vd(e) {
  var t = mt(e, 1)
  t !== null && Ye(t, e, 1, -1)
}
function bu(e) {
  var t = qe()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = km.bind(null, Z, e)),
    [t.memoizedState, e]
  )
}
function Gr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function Kd() {
  return He().memoizedState
}
function No(e, t, n, r) {
  var o = qe()
  ;(Z.flags |= e),
    (o.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r))
}
function xi(e, t, n, r) {
  var o = He()
  r = r === void 0 ? null : r
  var i = void 0
  if (oe !== null) {
    var l = oe.memoizedState
    if (((i = l.destroy), r !== null && ua(r, l.deps))) {
      o.memoizedState = Gr(t, n, i, r)
      return
    }
  }
  ;(Z.flags |= e), (o.memoizedState = Gr(1 | t, n, i, r))
}
function ku(e, t) {
  return No(8390656, 8, e, t)
}
function fa(e, t) {
  return xi(2048, 8, e, t)
}
function Gd(e, t) {
  return xi(4, 2, e, t)
}
function Qd(e, t) {
  return xi(4, 4, e, t)
}
function Yd(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function Xd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), xi(4, 4, Yd.bind(null, t, e), n)
  )
}
function pa() {}
function Zd(e, t) {
  var n = He()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && ua(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function Jd(e, t) {
  var n = He()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && ua(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function qd(e, t, n) {
  return nn & 21
    ? (Xe(n, t) || ((n = nd()), (Z.lanes |= n), (rn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ke = !0)), (e.memoizedState = n))
}
function xm(e, t) {
  var n = A
  ;(A = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = Zi.transition
  Zi.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(A = n), (Zi.transition = r)
  }
}
function ef() {
  return He().memoizedState
}
function bm(e, t, n) {
  var r = Rt(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    tf(e))
  )
    nf(t, n)
  else if (((n = Rd(e, t, n, r)), n !== null)) {
    var o = we()
    Ye(n, e, r, o), rf(n, t, r)
  }
}
function km(e, t, n) {
  var r = Rt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (tf(e)) nf(t, o)
  else {
    var i = e.alternate
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = i(l, n)
        if (((o.hasEagerState = !0), (o.eagerState = s), Xe(s, l))) {
          var a = t.interleaved
          a === null
            ? ((o.next = o), oa(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Rd(e, t, o, r)),
      n !== null && ((o = we()), Ye(n, e, r, o), rf(n, t, r))
  }
}
function tf(e) {
  var t = e.alternate
  return e === Z || (t !== null && t === Z)
}
function nf(e, t) {
  Er = ii = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function rf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Us(e, n)
  }
}
var li = {
    readContext: We,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1,
  },
  Cm = {
    readContext: We,
    useCallback: function (e, t) {
      return (qe().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: We,
    useEffect: ku,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        No(4194308, 4, Yd.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return No(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return No(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = qe()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = qe()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = bm.bind(null, Z, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = qe()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: bu,
    useDebugValue: pa,
    useDeferredValue: function (e) {
      return (qe().memoizedState = e)
    },
    useTransition: function () {
      var e = bu(!1),
        t = e[0]
      return (e = xm.bind(null, e[1])), (qe().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Z,
        o = qe()
      if (G) {
        if (n === void 0) throw Error(T(407))
        n = n()
      } else {
        if (((n = t()), se === null)) throw Error(T(349))
        nn & 30 || Hd(r, t, n)
      }
      o.memoizedState = n
      var i = { value: n, getSnapshot: t }
      return (
        (o.queue = i),
        ku(jd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Gr(9, Ad.bind(null, r, i, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = qe(),
        t = se.identifierPrefix
      if (G) {
        var n = ct,
          r = ut
        ;(n = (r & ~(1 << (32 - Qe(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Vr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = Sm++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  Em = {
    readContext: We,
    useCallback: Zd,
    useContext: We,
    useEffect: fa,
    useImperativeHandle: Xd,
    useInsertionEffect: Gd,
    useLayoutEffect: Qd,
    useMemo: Jd,
    useReducer: Ji,
    useRef: Kd,
    useState: function () {
      return Ji(Kr)
    },
    useDebugValue: pa,
    useDeferredValue: function (e) {
      var t = He()
      return qd(t, oe.memoizedState, e)
    },
    useTransition: function () {
      var e = Ji(Kr)[0],
        t = He().memoizedState
      return [e, t]
    },
    useMutableSource: Bd,
    useSyncExternalStore: Wd,
    useId: ef,
    unstable_isNewReconciler: !1,
  },
  Pm = {
    readContext: We,
    useCallback: Zd,
    useContext: We,
    useEffect: fa,
    useImperativeHandle: Xd,
    useInsertionEffect: Gd,
    useLayoutEffect: Qd,
    useMemo: Jd,
    useReducer: qi,
    useRef: Kd,
    useState: function () {
      return qi(Kr)
    },
    useDebugValue: pa,
    useDeferredValue: function (e) {
      var t = He()
      return oe === null ? (t.memoizedState = e) : qd(t, oe.memoizedState, e)
    },
    useTransition: function () {
      var e = qi(Kr)[0],
        t = He().memoizedState
      return [e, t]
    },
    useMutableSource: Bd,
    useSyncExternalStore: Wd,
    useId: ef,
    unstable_isNewReconciler: !1,
  }
function Jn(e, t) {
  try {
    var n = '',
      r = t
    do (n += tg(r)), (r = r.return)
    while (r)
    var o = n
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack
  }
  return { value: e, source: t, stack: o, digest: null }
}
function el(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Kl(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var Tm = typeof WeakMap == 'function' ? WeakMap : Map
function of(e, t, n) {
  ;(n = dt(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      ai || ((ai = !0), (ns = r)), Kl(e, t)
    }),
    n
  )
}
function lf(e, t, n) {
  ;(n = dt(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var o = t.value
    ;(n.payload = function () {
      return r(o)
    }),
      (n.callback = function () {
        Kl(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Kl(e, t),
          typeof r != 'function' &&
            (Ft === null ? (Ft = new Set([this])) : Ft.add(this))
        var l = t.stack
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : '' })
      }),
    n
  )
}
function Cu(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new Tm()
    var o = new Set()
    r.set(t, o)
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))
  o.has(n) || (o.add(n), (e = Am.bind(null, e, t, n)), t.then(e, e))
}
function Eu(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function Pu(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = dt(-1, 1)), (t.tag = 2), zt(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var Lm = vt.ReactCurrentOwner,
  ke = !1
function $e(e, t, n, r) {
  t.child = e === null ? Id(t, null, n, r) : Xn(t, e.child, n, r)
}
function Tu(e, t, n, r, o) {
  n = n.render
  var i = t.ref
  return (
    Un(t, o),
    (r = ca(e, t, n, r, i, o)),
    (n = da()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        ht(e, t, o))
      : (G && n && Js(t), (t.flags |= 1), $e(e, t, r, o), t.child)
  )
}
function Lu(e, t, n, r, o) {
  if (e === null) {
    var i = n.type
    return typeof i == 'function' &&
      !Sa(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), sf(e, t, i, r, o))
      : ((e = Do(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Br), n(l, r) && e.ref === t.ref)
    )
      return ht(e, t, o)
  }
  return (
    (t.flags |= 1),
    (e = Mt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function sf(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps
    if (Br(i, r) && e.ref === t.ref)
      if (((ke = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (ke = !0)
      else return (t.lanes = e.lanes), ht(e, t, o)
  }
  return Gl(e, t, n, r, o)
}
function af(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(On, ze),
        (ze |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(On, ze),
          (ze |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        U(On, ze),
        (ze |= r)
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(On, ze),
      (ze |= r)
  return $e(e, t, o, n), t.child
}
function uf(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Gl(e, t, n, r, o) {
  var i = Ee(n) ? en : ye.current
  return (
    (i = Qn(t, i)),
    Un(t, o),
    (n = ca(e, t, n, r, i, o)),
    (r = da()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        ht(e, t, o))
      : (G && r && Js(t), (t.flags |= 1), $e(e, t, n, o), t.child)
  )
}
function zu(e, t, n, r, o) {
  if (Ee(n)) {
    var i = !0
    Jo(t)
  } else i = !1
  if ((Un(t, o), t.stateNode === null))
    Oo(e, t), Od(t, n, r), Vl(t, n, r, o), (r = !0)
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps
    l.props = s
    var a = l.context,
      c = n.contextType
    typeof c == 'object' && c !== null
      ? (c = We(c))
      : ((c = Ee(n) ? en : ye.current), (c = Qn(t, c)))
    var g = n.getDerivedStateFromProps,
      h =
        typeof g == 'function' || typeof l.getSnapshotBeforeUpdate == 'function'
    h ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((s !== r || a !== c) && Su(t, l, r, c)),
      (St = !1)
    var p = t.memoizedState
    ;(l.state = p),
      ri(t, r, l, o),
      (a = t.memoizedState),
      s !== r || p !== a || Ce.current || St
        ? (typeof g == 'function' && (Ul(t, n, g, r), (a = t.memoizedState)),
          (s = St || wu(t, n, s, r, p, a, c))
            ? (h ||
                (typeof l.UNSAFE_componentWillMount != 'function' &&
                  typeof l.componentWillMount != 'function') ||
                (typeof l.componentWillMount == 'function' &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == 'function' &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = c),
          (r = s))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(l = t.stateNode),
      Md(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : Ve(t.type, s)),
      (l.props = c),
      (h = t.pendingProps),
      (p = l.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = We(a))
        : ((a = Ee(n) ? en : ye.current), (a = Qn(t, a)))
    var m = n.getDerivedStateFromProps
    ;(g =
      typeof m == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((s !== h || p !== a) && Su(t, l, r, a)),
      (St = !1),
      (p = t.memoizedState),
      (l.state = p),
      ri(t, r, l, o)
    var w = t.memoizedState
    s !== h || p !== w || Ce.current || St
      ? (typeof m == 'function' && (Ul(t, n, m, r), (w = t.memoizedState)),
        (c = St || wu(t, n, c, r, p, w, a) || !1)
          ? (g ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' &&
                typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' &&
                l.componentWillUpdate(r, w, a),
              typeof l.UNSAFE_componentWillUpdate == 'function' &&
                l.UNSAFE_componentWillUpdate(r, w, a)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (l.props = r),
        (l.state = w),
        (l.context = a),
        (r = c))
      : (typeof l.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return Ql(e, t, n, r, i, o)
}
function Ql(e, t, n, r, o, i) {
  uf(e, t)
  var l = (t.flags & 128) !== 0
  if (!r && !l) return o && mu(t, n, !1), ht(e, t, i)
  ;(r = t.stateNode), (Lm.current = t)
  var s =
    l && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Xn(t, e.child, null, i)), (t.child = Xn(t, null, s, i)))
      : $e(e, t, s, i),
    (t.memoizedState = r.state),
    o && mu(t, n, !0),
    t.child
  )
}
function cf(e) {
  var t = e.stateNode
  t.pendingContext
    ? gu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && gu(e, t.context, !1),
    la(e, t.containerInfo)
}
function Fu(e, t, n, r, o) {
  return Yn(), ea(o), (t.flags |= 256), $e(e, t, n, r), t.child
}
var Yl = { dehydrated: null, treeContext: null, retryLane: 0 }
function Xl(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function df(e, t, n) {
  var r = t.pendingProps,
    o = X.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    U(X, o & 1),
    e === null)
  )
    return (
      Al(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: 'hidden', children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Ci(l, r, 0, null)),
              (e = Xt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Xl(n)),
              (t.memoizedState = Yl),
              e)
            : ga(t, l))
    )
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return zm(e, t, l, r, s, o, n)
  if (i) {
    ;(i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling)
    var a = { mode: 'hidden', children: r.children }
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Mt(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Mt(s, i)) : ((i = Xt(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Xl(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Yl),
      r
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Mt(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function ga(e, t) {
  return (
    (t = Ci({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function vo(e, t, n, r) {
  return (
    r !== null && ea(r),
    Xn(t, e.child, null, n),
    (e = ga(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function zm(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = el(Error(T(422)))), vo(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Ci({ mode: 'visible', children: r.children }, o, 0, null)),
        (i = Xt(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Xn(t, e.child, null, l),
        (t.child.memoizedState = Xl(l)),
        (t.memoizedState = Yl),
        i)
  if (!(t.mode & 1)) return vo(e, t, l, null)
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst
    return (r = s), (i = Error(T(419))), (r = el(i, r, void 0)), vo(e, t, l, r)
  }
  if (((s = (l & e.childLanes) !== 0), ke || s)) {
    if (((r = se), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2
          break
        case 16:
          o = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32
          break
        case 536870912:
          o = 268435456
          break
        default:
          o = 0
      }
      ;(o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), mt(e, o), Ye(r, e, o, -1))
    }
    return wa(), (r = el(Error(T(421)))), vo(e, t, l, r)
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = jm.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Fe = Lt(o.nextSibling)),
      (Re = t),
      (G = !0),
      (Ge = null),
      e !== null &&
        ((_e[Ie++] = ut),
        (_e[Ie++] = ct),
        (_e[Ie++] = tn),
        (ut = e.id),
        (ct = e.overflow),
        (tn = t)),
      (t = ga(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Ru(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), jl(e.return, t, n)
}
function tl(e, t, n, r, o) {
  var i = e.memoizedState
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o))
}
function ff(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail
  if (($e(e, t, r.children, n), (r = X.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ru(e, n, t)
        else if (e.tag === 19) Ru(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((U(X, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && oi(e) === null && (o = n),
            (n = n.sibling)
        ;(n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          tl(t, !1, o, n, i)
        break
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && oi(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
        }
        tl(t, !0, n, null, i)
        break
      case 'together':
        tl(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Oo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function ht(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (rn |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(T(153))
  if (t.child !== null) {
    for (
      e = t.child, n = Mt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Mt(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function Fm(e, t, n) {
  switch (t.tag) {
    case 3:
      cf(t), Yn()
      break
    case 5:
      Dd(t)
      break
    case 1:
      Ee(t.type) && Jo(t)
      break
    case 4:
      la(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value
      U(ti, r._currentValue), (r._currentValue = o)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(X, X.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? df(e, t, n)
          : (U(X, X.current & 1),
            (e = ht(e, t, n)),
            e !== null ? e.sibling : null)
      U(X, X.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ff(e, t, n)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        U(X, X.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), af(e, t, n)
  }
  return ht(e, t, n)
}
var pf, Zl, gf, mf
pf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
Zl = function () {}
gf = function (e, t, n, r) {
  var o = e.memoizedProps
  if (o !== r) {
    ;(e = t.stateNode), Qt(nt.current)
    var i = null
    switch (n) {
      case 'input':
        ;(o = $l(e, o)), (r = $l(e, r)), (i = [])
        break
      case 'select':
        ;(o = J({}, o, { value: void 0 })),
          (r = J({}, r, { value: void 0 })),
          (i = [])
        break
      case 'textarea':
        ;(o = xl(e, o)), (r = xl(e, r)), (i = [])
        break
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Xo)
    }
    kl(n, r)
    var l
    n = null
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === 'style') {
          var s = o[c]
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''))
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (Rr.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null))
    for (c in r) {
      var a = r[c]
      if (
        ((s = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && a !== s && (a != null || s != null))
      )
        if (c === 'style')
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ''))
            for (l in a)
              a.hasOwnProperty(l) &&
                s[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]))
          } else n || (i || (i = []), i.push(c, n)), (n = a)
        else
          c === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(c, a))
            : c === 'children'
            ? (typeof a != 'string' && typeof a != 'number') ||
              (i = i || []).push(c, '' + a)
            : c !== 'suppressContentEditableWarning' &&
              c !== 'suppressHydrationWarning' &&
              (Rr.hasOwnProperty(c)
                ? (a != null && c === 'onScroll' && V('scroll', e),
                  i || s === a || (i = []))
                : (i = i || []).push(c, a))
    }
    n && (i = i || []).push('style', n)
    var c = i
    ;(t.updateQueue = c) && (t.flags |= 4)
  }
}
mf = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function fr(e, t) {
  if (!G)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling)
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function Rm(e, t, n) {
  var r = t.pendingProps
  switch ((qs(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ge(t), null
    case 1:
      return Ee(t.type) && Zo(), ge(t), null
    case 3:
      return (
        (r = t.stateNode),
        Zn(),
        K(Ce),
        K(ye),
        aa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ho(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ge !== null && (is(Ge), (Ge = null)))),
        Zl(e, t),
        ge(t),
        null
      )
    case 5:
      sa(t)
      var o = Qt(Ur.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        gf(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166))
          return ge(t), null
        }
        if (((e = Qt(nt.current)), ho(t))) {
          ;(r = t.stateNode), (n = t.type)
          var i = t.memoizedProps
          switch (((r[et] = t), (r[Ar] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              V('cancel', r), V('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              V('load', r)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < vr.length; o++) V(vr[o], r)
              break
            case 'source':
              V('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              V('error', r), V('load', r)
              break
            case 'details':
              V('toggle', r)
              break
            case 'input':
              Ha(r, i), V('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!i.multiple }),
                V('invalid', r)
              break
            case 'textarea':
              ja(r, i), V('invalid', r)
          }
          kl(n, i), (o = null)
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l]
              l === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      mo(r.textContent, s, e),
                    (o = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      mo(r.textContent, s, e),
                    (o = ['children', '' + s]))
                : Rr.hasOwnProperty(l) &&
                  s != null &&
                  l === 'onScroll' &&
                  V('scroll', r)
            }
          switch (n) {
            case 'input':
              lo(r), Aa(r, i, !0)
              break
            case 'textarea':
              lo(r), Ua(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (r.onclick = Xo)
          }
          ;(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(l = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Hc(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = l.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === 'select' &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[et] = t),
            (e[Ar] = r),
            pf(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((l = Cl(n, r)), n)) {
              case 'dialog':
                V('cancel', e), V('close', e), (o = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                V('load', e), (o = r)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < vr.length; o++) V(vr[o], e)
                o = r
                break
              case 'source':
                V('error', e), (o = r)
                break
              case 'img':
              case 'image':
              case 'link':
                V('error', e), V('load', e), (o = r)
                break
              case 'details':
                V('toggle', e), (o = r)
                break
              case 'input':
                Ha(e, r), (o = $l(e, r)), V('invalid', e)
                break
              case 'option':
                o = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = J({}, r, { value: void 0 })),
                  V('invalid', e)
                break
              case 'textarea':
                ja(e, r), (o = xl(e, r)), V('invalid', e)
                break
              default:
                o = r
            }
            kl(n, o), (s = o)
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i]
                i === 'style'
                  ? Uc(e, a)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && Ac(e, a))
                  : i === 'children'
                  ? typeof a == 'string'
                    ? (n !== 'textarea' || a !== '') && Mr(e, a)
                    : typeof a == 'number' && Mr(e, '' + a)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Rr.hasOwnProperty(i)
                      ? a != null && i === 'onScroll' && V('scroll', e)
                      : a != null && Ds(e, i, a, l))
              }
            switch (n) {
              case 'input':
                lo(e), Aa(e, r, !1)
                break
              case 'textarea':
                lo(e), Ua(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + Ot(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Wn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Wn(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = Xo)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return ge(t), null
    case 6:
      if (e && t.stateNode != null) mf(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(T(166))
        if (((n = Qt(Ur.current)), Qt(nt.current), ho(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[et] = t),
            (i = r.nodeValue !== n) && ((e = Re), e !== null))
          )
            switch (e.tag) {
              case 3:
                mo(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  mo(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[et] = t),
            (t.stateNode = r)
      }
      return ge(t), null
    case 13:
      if (
        (K(X),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (G && Fe !== null && t.mode & 1 && !(t.flags & 128))
          Fd(), Yn(), (t.flags |= 98560), (i = !1)
        else if (((i = ho(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(T(318))
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(T(317))
            i[et] = t
          } else
            Yn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          ge(t), (i = !1)
        } else Ge !== null && (is(Ge), (Ge = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || X.current & 1 ? ie === 0 && (ie = 3) : wa())),
          t.updateQueue !== null && (t.flags |= 4),
          ge(t),
          null)
    case 4:
      return (
        Zn(), Zl(e, t), e === null && Wr(t.stateNode.containerInfo), ge(t), null
      )
    case 10:
      return ra(t.type._context), ge(t), null
    case 17:
      return Ee(t.type) && Zo(), ge(t), null
    case 19:
      if ((K(X), (i = t.memoizedState), i === null)) return ge(t), null
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) fr(i, !1)
        else {
          if (ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = oi(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    fr(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return U(X, (X.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null &&
            ee() > qn &&
            ((t.flags |= 128), (r = !0), fr(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = oi(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              fr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !l.alternate && !G)
            )
              return ge(t), null
          } else
            2 * ee() - i.renderingStartTime > qn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), fr(i, !1), (t.lanes = 4194304))
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l))
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ee()),
          (t.sibling = null),
          (n = X.current),
          U(X, r ? (n & 1) | 2 : n & 1),
          t)
        : (ge(t), null)
    case 22:
    case 23:
      return (
        $a(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ze & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ge(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(T(156, t.tag))
}
function Mm(e, t) {
  switch ((qs(t), t.tag)) {
    case 1:
      return (
        Ee(t.type) && Zo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Zn(),
        K(Ce),
        K(ye),
        aa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return sa(t), null
    case 13:
      if ((K(X), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(T(340))
        Yn()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return K(X), null
    case 4:
      return Zn(), null
    case 10:
      return ra(t.type._context), null
    case 22:
    case 23:
      return $a(), null
    case 24:
      return null
    default:
      return null
  }
}
var $o = !1,
  he = !1,
  Nm = typeof WeakSet == 'function' ? WeakSet : Set,
  M = null
function Nn(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        q(e, t, r)
      }
    else n.current = null
}
function Jl(e, t, n) {
  try {
    n()
  } catch (r) {
    q(e, t, r)
  }
}
var Mu = !1
function Om(e, t) {
  if (((Ol = Go), (e = vd()), Zs(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var o = r.anchorOffset,
            i = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, i.nodeType
          } catch {
            n = null
            break e
          }
          var l = 0,
            s = -1,
            a = -1,
            c = 0,
            g = 0,
            h = e,
            p = null
          t: for (;;) {
            for (
              var m;
              h !== n || (o !== 0 && h.nodeType !== 3) || (s = l + o),
                h !== i || (r !== 0 && h.nodeType !== 3) || (a = l + r),
                h.nodeType === 3 && (l += h.nodeValue.length),
                (m = h.firstChild) !== null;

            )
              (p = h), (h = m)
            for (;;) {
              if (h === e) break t
              if (
                (p === n && ++c === o && (s = l),
                p === i && ++g === r && (a = l),
                (m = h.nextSibling) !== null)
              )
                break
              ;(h = p), (p = h.parentNode)
            }
            h = m
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (_l = { focusedElem: e, selectionRange: n }, Go = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e)
    else
      for (; M !== null; ) {
        t = M
        try {
          var w = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    L = w.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Ve(t.type, S),
                      L
                    )
                  f.__reactInternalSnapshotBeforeUpdate = d
                }
                break
              case 3:
                var y = t.stateNode.containerInfo
                y.nodeType === 1
                  ? (y.textContent = '')
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(T(163))
            }
        } catch (u) {
          q(t, t.return, u)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (M = e)
          break
        }
        M = t.return
      }
  return (w = Mu), (Mu = !1), w
}
function Pr(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next)
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy
        ;(o.destroy = void 0), i !== void 0 && Jl(t, n, i)
      }
      o = o.next
    } while (o !== r)
  }
}
function bi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function ql(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function hf(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), hf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[et], delete t[Ar], delete t[Bl], delete t[ym], delete t[vm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function yf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Nu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || yf(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function es(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Xo))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (es(e, t, n), e = e.sibling; e !== null; ) es(e, t, n), (e = e.sibling)
}
function ts(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ts(e, t, n), e = e.sibling; e !== null; ) ts(e, t, n), (e = e.sibling)
}
var ue = null,
  Ke = !1
function $t(e, t, n) {
  for (n = n.child; n !== null; ) vf(e, t, n), (n = n.sibling)
}
function vf(e, t, n) {
  if (tt && typeof tt.onCommitFiberUnmount == 'function')
    try {
      tt.onCommitFiberUnmount(mi, n)
    } catch {}
  switch (n.tag) {
    case 5:
      he || Nn(n, t)
    case 6:
      var r = ue,
        o = Ke
      ;(ue = null),
        $t(e, t, n),
        (ue = r),
        (Ke = o),
        ue !== null &&
          (Ke
            ? ((e = ue),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ue.removeChild(n.stateNode))
      break
    case 18:
      ue !== null &&
        (Ke
          ? ((e = ue),
            (n = n.stateNode),
            e.nodeType === 8
              ? Qi(e.parentNode, n)
              : e.nodeType === 1 && Qi(e, n),
            Ir(e))
          : Qi(ue, n.stateNode))
      break
    case 4:
      ;(r = ue),
        (o = Ke),
        (ue = n.stateNode.containerInfo),
        (Ke = !0),
        $t(e, t, n),
        (ue = r),
        (Ke = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !he &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next
        do {
          var i = o,
            l = i.destroy
          ;(i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && Jl(n, t, l),
            (o = o.next)
        } while (o !== r)
      }
      $t(e, t, n)
      break
    case 1:
      if (
        !he &&
        (Nn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (s) {
          q(n, t, s)
        }
      $t(e, t, n)
      break
    case 21:
      $t(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((he = (r = he) || n.memoizedState !== null), $t(e, t, n), (he = r))
        : $t(e, t, n)
      break
    default:
      $t(e, t, n)
  }
}
function Ou(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Nm()),
      t.forEach(function (r) {
        var o = Um.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(o, o))
      })
  }
}
function Ue(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r]
      try {
        var i = e,
          l = t,
          s = l
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              ;(ue = s.stateNode), (Ke = !1)
              break e
            case 3:
              ;(ue = s.stateNode.containerInfo), (Ke = !0)
              break e
            case 4:
              ;(ue = s.stateNode.containerInfo), (Ke = !0)
              break e
          }
          s = s.return
        }
        if (ue === null) throw Error(T(160))
        vf(i, l, o), (ue = null), (Ke = !1)
        var a = o.alternate
        a !== null && (a.return = null), (o.return = null)
      } catch (c) {
        q(o, t, c)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) $f(t, e), (t = t.sibling)
}
function $f(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ue(t, e), Je(e), r & 4)) {
        try {
          Pr(3, e, e.return), bi(3, e)
        } catch (S) {
          q(e, e.return, S)
        }
        try {
          Pr(5, e, e.return)
        } catch (S) {
          q(e, e.return, S)
        }
      }
      break
    case 1:
      Ue(t, e), Je(e), r & 512 && n !== null && Nn(n, n.return)
      break
    case 5:
      if (
        (Ue(t, e),
        Je(e),
        r & 512 && n !== null && Nn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode
        try {
          Mr(o, '')
        } catch (S) {
          q(e, e.return, S)
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue
        if (((e.updateQueue = null), a !== null))
          try {
            s === 'input' && i.type === 'radio' && i.name != null && Bc(o, i),
              Cl(s, l)
            var c = Cl(s, i)
            for (l = 0; l < a.length; l += 2) {
              var g = a[l],
                h = a[l + 1]
              g === 'style'
                ? Uc(o, h)
                : g === 'dangerouslySetInnerHTML'
                ? Ac(o, h)
                : g === 'children'
                ? Mr(o, h)
                : Ds(o, g, h, c)
            }
            switch (s) {
              case 'input':
                wl(o, i)
                break
              case 'textarea':
                Wc(o, i)
                break
              case 'select':
                var p = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!i.multiple
                var m = i.value
                m != null
                  ? Wn(o, !!i.multiple, m, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Wn(o, !!i.multiple, i.defaultValue, !0)
                      : Wn(o, !!i.multiple, i.multiple ? [] : '', !1))
            }
            o[Ar] = i
          } catch (S) {
            q(e, e.return, S)
          }
      }
      break
    case 6:
      if ((Ue(t, e), Je(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162))
        ;(o = e.stateNode), (i = e.memoizedProps)
        try {
          o.nodeValue = i
        } catch (S) {
          q(e, e.return, S)
        }
      }
      break
    case 3:
      if (
        (Ue(t, e), Je(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ir(t.containerInfo)
        } catch (S) {
          q(e, e.return, S)
        }
      break
    case 4:
      Ue(t, e), Je(e)
      break
    case 13:
      Ue(t, e),
        Je(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ya = ee())),
        r & 4 && Ou(e)
      break
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((he = (c = he) || g), Ue(t, e), (he = c)) : Ue(t, e),
        Je(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !g && e.mode & 1)
        )
          for (M = e, g = e.child; g !== null; ) {
            for (h = M = g; M !== null; ) {
              switch (((p = M), (m = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pr(4, p, p.return)
                  break
                case 1:
                  Nn(p, p.return)
                  var w = p.stateNode
                  if (typeof w.componentWillUnmount == 'function') {
                    ;(r = p), (n = p.return)
                    try {
                      ;(t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount()
                    } catch (S) {
                      q(r, n, S)
                    }
                  }
                  break
                case 5:
                  Nn(p, p.return)
                  break
                case 22:
                  if (p.memoizedState !== null) {
                    Iu(h)
                    continue
                  }
              }
              m !== null ? ((m.return = p), (M = m)) : Iu(h)
            }
            g = g.sibling
          }
        e: for (g = null, h = e; ; ) {
          if (h.tag === 5) {
            if (g === null) {
              g = h
              try {
                ;(o = h.stateNode),
                  c
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((s = h.stateNode),
                      (a = h.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (s.style.display = jc('display', l)))
              } catch (S) {
                q(e, e.return, S)
              }
            }
          } else if (h.tag === 6) {
            if (g === null)
              try {
                h.stateNode.nodeValue = c ? '' : h.memoizedProps
              } catch (S) {
                q(e, e.return, S)
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            ;(h.child.return = h), (h = h.child)
            continue
          }
          if (h === e) break e
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e
            g === h && (g = null), (h = h.return)
          }
          g === h && (g = null), (h.sibling.return = h.return), (h = h.sibling)
        }
      }
      break
    case 19:
      Ue(t, e), Je(e), r & 4 && Ou(e)
      break
    case 21:
      break
    default:
      Ue(t, e), Je(e)
  }
}
function Je(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (yf(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(T(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode
          r.flags & 32 && (Mr(o, ''), (r.flags &= -33))
          var i = Nu(e)
          ts(e, i, o)
          break
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = Nu(e)
          es(e, s, l)
          break
        default:
          throw Error(T(161))
      }
    } catch (a) {
      q(e, e.return, a)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function _m(e, t, n) {
  ;(M = e), wf(e)
}
function wf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var o = M,
      i = o.child
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || $o
      if (!l) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || he
        s = $o
        var c = he
        if ((($o = l), (he = a) && !c))
          for (M = o; M !== null; )
            (l = M),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Du(o)
                : a !== null
                ? ((a.return = l), (M = a))
                : Du(o)
        for (; i !== null; ) (M = i), wf(i), (i = i.sibling)
        ;(M = o), ($o = s), (he = c)
      }
      _u(e)
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (M = i)) : _u(e)
  }
}
function _u(e) {
  for (; M !== null; ) {
    var t = M
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              he || bi(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !he)
                if (n === null) r.componentDidMount()
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ve(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var i = t.updateQueue
              i !== null && $u(t, i, r)
              break
            case 3:
              var l = t.updateQueue
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                $u(t, l, n)
              }
              break
            case 5:
              var s = t.stateNode
              if (n === null && t.flags & 4) {
                n = s
                var a = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus()
                    break
                  case 'img':
                    a.src && (n.src = a.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate
                if (c !== null) {
                  var g = c.memoizedState
                  if (g !== null) {
                    var h = g.dehydrated
                    h !== null && Ir(h)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(T(163))
          }
        he || (t.flags & 512 && ql(t))
      } catch (p) {
        q(t, t.return, p)
      }
    }
    if (t === e) {
      M = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (M = n)
      break
    }
    M = t.return
  }
}
function Iu(e) {
  for (; M !== null; ) {
    var t = M
    if (t === e) {
      M = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (M = n)
      break
    }
    M = t.return
  }
}
function Du(e) {
  for (; M !== null; ) {
    var t = M
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            bi(4, t)
          } catch (a) {
            q(t, n, a)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var o = t.return
            try {
              r.componentDidMount()
            } catch (a) {
              q(t, o, a)
            }
          }
          var i = t.return
          try {
            ql(t)
          } catch (a) {
            q(t, i, a)
          }
          break
        case 5:
          var l = t.return
          try {
            ql(t)
          } catch (a) {
            q(t, l, a)
          }
      }
    } catch (a) {
      q(t, t.return, a)
    }
    if (t === e) {
      M = null
      break
    }
    var s = t.sibling
    if (s !== null) {
      ;(s.return = t.return), (M = s)
      break
    }
    M = t.return
  }
}
var Im = Math.ceil,
  si = vt.ReactCurrentDispatcher,
  ma = vt.ReactCurrentOwner,
  Be = vt.ReactCurrentBatchConfig,
  H = 0,
  se = null,
  re = null,
  ce = 0,
  ze = 0,
  On = Dt(0),
  ie = 0,
  Qr = null,
  rn = 0,
  ki = 0,
  ha = 0,
  Tr = null,
  be = null,
  ya = 0,
  qn = 1 / 0,
  st = null,
  ai = !1,
  ns = null,
  Ft = null,
  wo = !1,
  Ct = null,
  ui = 0,
  Lr = 0,
  rs = null,
  _o = -1,
  Io = 0
function we() {
  return H & 6 ? ee() : _o !== -1 ? _o : (_o = ee())
}
function Rt(e) {
  return e.mode & 1
    ? H & 2 && ce !== 0
      ? ce & -ce
      : wm.transition !== null
      ? (Io === 0 && (Io = nd()), Io)
      : ((e = A),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ud(e.type))),
        e)
    : 1
}
function Ye(e, t, n, r) {
  if (50 < Lr) throw ((Lr = 0), (rs = null), Error(T(185)))
  Jr(e, n, r),
    (!(H & 2) || e !== se) &&
      (e === se && (!(H & 2) && (ki |= n), ie === 4 && bt(e, ce)),
      Pe(e, r),
      n === 1 && H === 0 && !(t.mode & 1) && ((qn = ee() + 500), wi && Bt()))
}
function Pe(e, t) {
  var n = e.callbackNode
  wg(e, t)
  var r = Ko(e, e === se ? ce : 0)
  if (r === 0)
    n !== null && Ga(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ga(n), t === 1))
      e.tag === 0 ? $m(Bu.bind(null, e)) : Td(Bu.bind(null, e)),
        mm(function () {
          !(H & 6) && Bt()
        }),
        (n = null)
    else {
      switch (rd(r)) {
        case 1:
          n = js
          break
        case 4:
          n = ed
          break
        case 16:
          n = Vo
          break
        case 536870912:
          n = td
          break
        default:
          n = Vo
      }
      n = Tf(n, Sf.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function Sf(e, t) {
  if (((_o = -1), (Io = 0), H & 6)) throw Error(T(327))
  var n = e.callbackNode
  if (Vn() && e.callbackNode !== n) return null
  var r = Ko(e, e === se ? ce : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = ci(e, r)
  else {
    t = r
    var o = H
    H |= 2
    var i = bf()
    ;(se !== e || ce !== t) && ((st = null), (qn = ee() + 500), Yt(e, t))
    do
      try {
        Wm()
        break
      } catch (s) {
        xf(e, s)
      }
    while (1)
    na(),
      (si.current = i),
      (H = o),
      re !== null ? (t = 0) : ((se = null), (ce = 0), (t = ie))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = zl(e)), o !== 0 && ((r = o), (t = os(e, o)))), t === 1)
    )
      throw ((n = Qr), Yt(e, 0), bt(e, r), Pe(e, ee()), n)
    if (t === 6) bt(e, r)
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Dm(o) &&
          ((t = ci(e, r)),
          t === 2 && ((i = zl(e)), i !== 0 && ((r = i), (t = os(e, i)))),
          t === 1))
      )
        throw ((n = Qr), Yt(e, 0), bt(e, r), Pe(e, ee()), n)
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345))
        case 2:
          jt(e, be, st)
          break
        case 3:
          if (
            (bt(e, r), (r & 130023424) === r && ((t = ya + 500 - ee()), 10 < t))
          ) {
            if (Ko(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              we(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = Dl(jt.bind(null, e, be, st), t)
            break
          }
          jt(e, be, st)
          break
        case 4:
          if ((bt(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Qe(r)
            ;(i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i)
          }
          if (
            ((r = o),
            (r = ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Im(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Dl(jt.bind(null, e, be, st), r)
            break
          }
          jt(e, be, st)
          break
        case 5:
          jt(e, be, st)
          break
        default:
          throw Error(T(329))
      }
    }
  }
  return Pe(e, ee()), e.callbackNode === n ? Sf.bind(null, e) : null
}
function os(e, t) {
  var n = Tr
  return (
    e.current.memoizedState.isDehydrated && (Yt(e, t).flags |= 256),
    (e = ci(e, t)),
    e !== 2 && ((t = be), (be = n), t !== null && is(t)),
    e
  )
}
function is(e) {
  be === null ? (be = e) : be.push.apply(be, e)
}
function Dm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot
          o = o.value
          try {
            if (!Xe(i(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function bt(e, t) {
  for (
    t &= ~ha,
      t &= ~ki,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Qe(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function Bu(e) {
  if (H & 6) throw Error(T(327))
  Vn()
  var t = Ko(e, 0)
  if (!(t & 1)) return Pe(e, ee()), null
  var n = ci(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = zl(e)
    r !== 0 && ((t = r), (n = os(e, r)))
  }
  if (n === 1) throw ((n = Qr), Yt(e, 0), bt(e, t), Pe(e, ee()), n)
  if (n === 6) throw Error(T(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    jt(e, be, st),
    Pe(e, ee()),
    null
  )
}
function va(e, t) {
  var n = H
  H |= 1
  try {
    return e(t)
  } finally {
    ;(H = n), H === 0 && ((qn = ee() + 500), wi && Bt())
  }
}
function on(e) {
  Ct !== null && Ct.tag === 0 && !(H & 6) && Vn()
  var t = H
  H |= 1
  var n = Be.transition,
    r = A
  try {
    if (((Be.transition = null), (A = 1), e)) return e()
  } finally {
    ;(A = r), (Be.transition = n), (H = t), !(H & 6) && Bt()
  }
}
function $a() {
  ;(ze = On.current), K(On)
}
function Yt(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), gm(n)), re !== null))
    for (n = re.return; n !== null; ) {
      var r = n
      switch ((qs(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Zo()
          break
        case 3:
          Zn(), K(Ce), K(ye), aa()
          break
        case 5:
          sa(r)
          break
        case 4:
          Zn()
          break
        case 13:
          K(X)
          break
        case 19:
          K(X)
          break
        case 10:
          ra(r.type._context)
          break
        case 22:
        case 23:
          $a()
      }
      n = n.return
    }
  if (
    ((se = e),
    (re = e = Mt(e.current, null)),
    (ce = ze = t),
    (ie = 0),
    (Qr = null),
    (ha = ki = rn = 0),
    (be = Tr = null),
    Gt !== null)
  ) {
    for (t = 0; t < Gt.length; t++)
      if (((n = Gt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var o = r.next,
          i = n.pending
        if (i !== null) {
          var l = i.next
          ;(i.next = o), (r.next = l)
        }
        n.pending = r
      }
    Gt = null
  }
  return e
}
function xf(e, t) {
  do {
    var n = re
    try {
      if ((na(), (Mo.current = li), ii)) {
        for (var r = Z.memoizedState; r !== null; ) {
          var o = r.queue
          o !== null && (o.pending = null), (r = r.next)
        }
        ii = !1
      }
      if (
        ((nn = 0),
        (le = oe = Z = null),
        (Er = !1),
        (Vr = 0),
        (ma.current = null),
        n === null || n.return === null)
      ) {
        ;(ie = 1), (Qr = t), (re = null)
        break
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          a = t
        if (
          ((t = ce),
          (s.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var c = a,
            g = s,
            h = g.tag
          if (!(g.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = g.alternate
            p
              ? ((g.updateQueue = p.updateQueue),
                (g.memoizedState = p.memoizedState),
                (g.lanes = p.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null))
          }
          var m = Eu(l)
          if (m !== null) {
            ;(m.flags &= -257),
              Pu(m, l, s, i, t),
              m.mode & 1 && Cu(i, c, t),
              (t = m),
              (a = c)
            var w = t.updateQueue
            if (w === null) {
              var S = new Set()
              S.add(a), (t.updateQueue = S)
            } else w.add(a)
            break e
          } else {
            if (!(t & 1)) {
              Cu(i, c, t), wa()
              break e
            }
            a = Error(T(426))
          }
        } else if (G && s.mode & 1) {
          var L = Eu(l)
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256),
              Pu(L, l, s, i, t),
              ea(Jn(a, s))
            break e
          }
        }
        ;(i = a = Jn(a, s)),
          ie !== 4 && (ie = 2),
          Tr === null ? (Tr = [i]) : Tr.push(i),
          (i = l)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var f = of(i, a, t)
              vu(i, f)
              break e
            case 1:
              s = a
              var d = i.type,
                y = i.stateNode
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == 'function' ||
                  (y !== null &&
                    typeof y.componentDidCatch == 'function' &&
                    (Ft === null || !Ft.has(y))))
              ) {
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var u = lf(i, s, t)
                vu(i, u)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      Cf(n)
    } catch (E) {
      ;(t = E), re === n && n !== null && (re = n = n.return)
      continue
    }
    break
  } while (1)
}
function bf() {
  var e = si.current
  return (si.current = li), e === null ? li : e
}
function wa() {
  ;(ie === 0 || ie === 3 || ie === 2) && (ie = 4),
    se === null || (!(rn & 268435455) && !(ki & 268435455)) || bt(se, ce)
}
function ci(e, t) {
  var n = H
  H |= 2
  var r = bf()
  ;(se !== e || ce !== t) && ((st = null), Yt(e, t))
  do
    try {
      Bm()
      break
    } catch (o) {
      xf(e, o)
    }
  while (1)
  if ((na(), (H = n), (si.current = r), re !== null)) throw Error(T(261))
  return (se = null), (ce = 0), ie
}
function Bm() {
  for (; re !== null; ) kf(re)
}
function Wm() {
  for (; re !== null && !dg(); ) kf(re)
}
function kf(e) {
  var t = Pf(e.alternate, e, ze)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? Cf(e) : (re = t),
    (ma.current = null)
}
function Cf(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Mm(n, t)), n !== null)) {
        ;(n.flags &= 32767), (re = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(ie = 6), (re = null)
        return
      }
    } else if (((n = Rm(n, t, ze)), n !== null)) {
      re = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      re = t
      return
    }
    re = t = e
  } while (t !== null)
  ie === 0 && (ie = 5)
}
function jt(e, t, n) {
  var r = A,
    o = Be.transition
  try {
    ;(Be.transition = null), (A = 1), Hm(e, t, n, r)
  } finally {
    ;(Be.transition = o), (A = r)
  }
  return null
}
function Hm(e, t, n, r) {
  do Vn()
  while (Ct !== null)
  if (H & 6) throw Error(T(327))
  n = e.finishedWork
  var o = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var i = n.lanes | n.childLanes
  if (
    (Sg(e, i),
    e === se && ((re = se = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      wo ||
      ((wo = !0),
      Tf(Vo, function () {
        return Vn(), null
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ;(i = Be.transition), (Be.transition = null)
    var l = A
    A = 1
    var s = H
    ;(H |= 4),
      (ma.current = null),
      Om(e, n),
      $f(n, e),
      sm(_l),
      (Go = !!Ol),
      (_l = Ol = null),
      (e.current = n),
      _m(n),
      fg(),
      (H = s),
      (A = l),
      (Be.transition = i)
  } else e.current = n
  if (
    (wo && ((wo = !1), (Ct = e), (ui = o)),
    (i = e.pendingLanes),
    i === 0 && (Ft = null),
    mg(n.stateNode),
    Pe(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest })
  if (ai) throw ((ai = !1), (e = ns), (ns = null), e)
  return (
    ui & 1 && e.tag !== 0 && Vn(),
    (i = e.pendingLanes),
    i & 1 ? (e === rs ? Lr++ : ((Lr = 0), (rs = e))) : (Lr = 0),
    Bt(),
    null
  )
}
function Vn() {
  if (Ct !== null) {
    var e = rd(ui),
      t = Be.transition,
      n = A
    try {
      if (((Be.transition = null), (A = 16 > e ? 16 : e), Ct === null))
        var r = !1
      else {
        if (((e = Ct), (Ct = null), (ui = 0), H & 6)) throw Error(T(331))
        var o = H
        for (H |= 4, M = e.current; M !== null; ) {
          var i = M,
            l = i.child
          if (M.flags & 16) {
            var s = i.deletions
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var c = s[a]
                for (M = c; M !== null; ) {
                  var g = M
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pr(8, g, i)
                  }
                  var h = g.child
                  if (h !== null) (h.return = g), (M = h)
                  else
                    for (; M !== null; ) {
                      g = M
                      var p = g.sibling,
                        m = g.return
                      if ((hf(g), g === c)) {
                        M = null
                        break
                      }
                      if (p !== null) {
                        ;(p.return = m), (M = p)
                        break
                      }
                      M = m
                    }
                }
              }
              var w = i.alternate
              if (w !== null) {
                var S = w.child
                if (S !== null) {
                  w.child = null
                  do {
                    var L = S.sibling
                    ;(S.sibling = null), (S = L)
                  } while (S !== null)
                }
              }
              M = i
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (M = l)
          else
            e: for (; M !== null; ) {
              if (((i = M), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pr(9, i, i.return)
                }
              var f = i.sibling
              if (f !== null) {
                ;(f.return = i.return), (M = f)
                break e
              }
              M = i.return
            }
        }
        var d = e.current
        for (M = d; M !== null; ) {
          l = M
          var y = l.child
          if (l.subtreeFlags & 2064 && y !== null) (y.return = l), (M = y)
          else
            e: for (l = d; M !== null; ) {
              if (((s = M), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      bi(9, s)
                  }
                } catch (E) {
                  q(s, s.return, E)
                }
              if (s === l) {
                M = null
                break e
              }
              var u = s.sibling
              if (u !== null) {
                ;(u.return = s.return), (M = u)
                break e
              }
              M = s.return
            }
        }
        if (
          ((H = o), Bt(), tt && typeof tt.onPostCommitFiberRoot == 'function')
        )
          try {
            tt.onPostCommitFiberRoot(mi, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(A = n), (Be.transition = t)
    }
  }
  return !1
}
function Wu(e, t, n) {
  ;(t = Jn(n, t)),
    (t = of(e, t, 1)),
    (e = zt(e, t, 1)),
    (t = we()),
    e !== null && (Jr(e, 1, t), Pe(e, t))
}
function q(e, t, n) {
  if (e.tag === 3) Wu(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Wu(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Ft === null || !Ft.has(r)))
        ) {
          ;(e = Jn(n, e)),
            (e = lf(t, e, 1)),
            (t = zt(t, e, 1)),
            (e = we()),
            t !== null && (Jr(t, 1, e), Pe(t, e))
          break
        }
      }
      t = t.return
    }
}
function Am(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = we()),
    (e.pingedLanes |= e.suspendedLanes & n),
    se === e &&
      (ce & n) === n &&
      (ie === 4 || (ie === 3 && (ce & 130023424) === ce && 500 > ee() - ya)
        ? Yt(e, 0)
        : (ha |= n)),
    Pe(e, t)
}
function Ef(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = uo), (uo <<= 1), !(uo & 130023424) && (uo = 4194304))
      : (t = 1))
  var n = we()
  ;(e = mt(e, t)), e !== null && (Jr(e, t, n), Pe(e, n))
}
function jm(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), Ef(e, n)
}
function Um(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState
      o !== null && (n = o.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(T(314))
  }
  r !== null && r.delete(t), Ef(e, n)
}
var Pf
Pf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ce.current) ke = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ke = !1), Fm(e, t, n)
      ke = !!(e.flags & 131072)
    }
  else (ke = !1), G && t.flags & 1048576 && Ld(t, ei, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      Oo(e, t), (e = t.pendingProps)
      var o = Qn(t, ye.current)
      Un(t, n), (o = ca(null, t, r, e, o, n))
      var i = da()
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ee(r) ? ((i = !0), Jo(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            ia(t),
            (o.updater = Si),
            (t.stateNode = o),
            (o._reactInternals = t),
            Vl(t, r, e, n),
            (t = Ql(null, t, r, !0, i, n)))
          : ((t.tag = 0), G && i && Js(t), $e(null, t, o, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (Oo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Km(r)),
          (e = Ve(r, e)),
          o)
        ) {
          case 0:
            t = Gl(null, t, r, e, n)
            break e
          case 1:
            t = zu(null, t, r, e, n)
            break e
          case 11:
            t = Tu(null, t, r, e, n)
            break e
          case 14:
            t = Lu(null, t, r, Ve(r.type, e), n)
            break e
        }
        throw Error(T(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ve(r, o)),
        Gl(e, t, r, o, n)
      )
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ve(r, o)),
        zu(e, t, r, o, n)
      )
    case 3:
      e: {
        if ((cf(t), e === null)) throw Error(T(387))
        ;(r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Md(e, t),
          ri(t, r, null, n)
        var l = t.memoizedState
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ;(o = Jn(Error(T(423)), t)), (t = Fu(e, t, r, n, o))
            break e
          } else if (r !== o) {
            ;(o = Jn(Error(T(424)), t)), (t = Fu(e, t, r, n, o))
            break e
          } else
            for (
              Fe = Lt(t.stateNode.containerInfo.firstChild),
                Re = t,
                G = !0,
                Ge = null,
                n = Id(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Yn(), r === o)) {
            t = ht(e, t, n)
            break e
          }
          $e(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Dd(t),
        e === null && Al(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Il(r, o) ? (l = null) : i !== null && Il(r, i) && (t.flags |= 32),
        uf(e, t),
        $e(e, t, l, n),
        t.child
      )
    case 6:
      return e === null && Al(t), null
    case 13:
      return df(e, t, n)
    case 4:
      return (
        la(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Xn(t, null, r, n)) : $e(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ve(r, o)),
        Tu(e, t, r, o, n)
      )
    case 7:
      return $e(e, t, t.pendingProps, n), t.child
    case 8:
      return $e(e, t, t.pendingProps.children, n), t.child
    case 12:
      return $e(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          U(ti, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (Xe(i.value, l)) {
            if (i.children === o.children && !Ce.current) {
              t = ht(e, t, n)
              break e
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies
              if (s !== null) {
                l = i.child
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      ;(a = dt(-1, n & -n)), (a.tag = 2)
                      var c = i.updateQueue
                      if (c !== null) {
                        c = c.shared
                        var g = c.pending
                        g === null
                          ? (a.next = a)
                          : ((a.next = g.next), (g.next = a)),
                          (c.pending = a)
                      }
                    }
                    ;(i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      jl(i.return, n, t),
                      (s.lanes |= n)
                    break
                  }
                  a = a.next
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(T(341))
                ;(l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  jl(l, n, t),
                  (l = i.sibling)
              } else l = i.child
              if (l !== null) l.return = i
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null
                    break
                  }
                  if (((i = l.sibling), i !== null)) {
                    ;(i.return = l.return), (l = i)
                    break
                  }
                  l = l.return
                }
              i = l
            }
        $e(e, t, o.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Un(t, n),
        (o = We(o)),
        (r = r(o)),
        (t.flags |= 1),
        $e(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (o = Ve(r, t.pendingProps)),
        (o = Ve(r.type, o)),
        Lu(e, t, r, o, n)
      )
    case 15:
      return sf(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ve(r, o)),
        Oo(e, t),
        (t.tag = 1),
        Ee(r) ? ((e = !0), Jo(t)) : (e = !1),
        Un(t, n),
        Od(t, r, o),
        Vl(t, r, o, n),
        Ql(null, t, r, !0, e, n)
      )
    case 19:
      return ff(e, t, n)
    case 22:
      return af(e, t, n)
  }
  throw Error(T(156, t.tag))
}
function Tf(e, t) {
  return qc(e, t)
}
function Vm(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function De(e, t, n, r) {
  return new Vm(e, t, n, r)
}
function Sa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function Km(e) {
  if (typeof e == 'function') return Sa(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Ws)) return 11
    if (e === Hs) return 14
  }
  return 2
}
function Mt(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = De(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function Do(e, t, n, r, o, i) {
  var l = 2
  if (((r = e), typeof e == 'function')) Sa(e) && (l = 1)
  else if (typeof e == 'string') l = 5
  else
    e: switch (e) {
      case Cn:
        return Xt(n.children, o, i, t)
      case Bs:
        ;(l = 8), (o |= 8)
        break
      case ml:
        return (e = De(12, n, t, o | 2)), (e.elementType = ml), (e.lanes = i), e
      case hl:
        return (e = De(13, n, t, o)), (e.elementType = hl), (e.lanes = i), e
      case yl:
        return (e = De(19, n, t, o)), (e.elementType = yl), (e.lanes = i), e
      case _c:
        return Ci(n, o, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Nc:
              l = 10
              break e
            case Oc:
              l = 9
              break e
            case Ws:
              l = 11
              break e
            case Hs:
              l = 14
              break e
            case wt:
              ;(l = 16), (r = null)
              break e
          }
        throw Error(T(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = De(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  )
}
function Xt(e, t, n, r) {
  return (e = De(7, e, r, t)), (e.lanes = n), e
}
function Ci(e, t, n, r) {
  return (
    (e = De(22, e, r, t)),
    (e.elementType = _c),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function nl(e, t, n) {
  return (e = De(6, e, null, t)), (e.lanes = n), e
}
function rl(e, t, n) {
  return (
    (t = De(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function Gm(e, t, n, r, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ii(0)),
    (this.expirationTimes = Ii(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ii(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function xa(e, t, n, r, o, i, l, s, a) {
  return (
    (e = new Gm(e, t, n, s, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = De(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ia(i),
    e
  )
}
function Qm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: kn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function Lf(e) {
  if (!e) return _t
  e = e._reactInternals
  e: {
    if (un(e) !== e || e.tag !== 1) throw Error(T(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(T(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (Ee(n)) return Pd(e, n, t)
  }
  return t
}
function zf(e, t, n, r, o, i, l, s, a) {
  return (
    (e = xa(n, r, !0, e, o, i, l, s, a)),
    (e.context = Lf(null)),
    (n = e.current),
    (r = we()),
    (o = Rt(n)),
    (i = dt(r, o)),
    (i.callback = t ?? null),
    zt(n, i, o),
    (e.current.lanes = o),
    Jr(e, o, r),
    Pe(e, r),
    e
  )
}
function Ei(e, t, n, r) {
  var o = t.current,
    i = we(),
    l = Rt(o)
  return (
    (n = Lf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = dt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = zt(o, t, l)),
    e !== null && (Ye(e, o, l, i), Ro(e, o, l)),
    l
  )
}
function di(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Hu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function ba(e, t) {
  Hu(e, t), (e = e.alternate) && Hu(e, t)
}
function Ym() {
  return null
}
var Ff =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function ka(e) {
  this._internalRoot = e
}
Pi.prototype.render = ka.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(T(409))
  Ei(e, t, null, null)
}
Pi.prototype.unmount = ka.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    on(function () {
      Ei(null, e, null, null)
    }),
      (t[gt] = null)
  }
}
function Pi(e) {
  this._internalRoot = e
}
Pi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ld()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < xt.length && t !== 0 && t < xt[n].priority; n++);
    xt.splice(n, 0, e), n === 0 && ad(e)
  }
}
function Ca(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Ti(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Au() {}
function Xm(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r
      r = function () {
        var c = di(l)
        i.call(c)
      }
    }
    var l = zf(t, r, e, 0, null, !1, !1, '', Au)
    return (
      (e._reactRootContainer = l),
      (e[gt] = l.current),
      Wr(e.nodeType === 8 ? e.parentNode : e),
      on(),
      l
    )
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof r == 'function') {
    var s = r
    r = function () {
      var c = di(a)
      s.call(c)
    }
  }
  var a = xa(e, 0, !1, null, null, !1, !1, '', Au)
  return (
    (e._reactRootContainer = a),
    (e[gt] = a.current),
    Wr(e.nodeType === 8 ? e.parentNode : e),
    on(function () {
      Ei(t, a, n, r)
    }),
    a
  )
}
function Li(e, t, n, r, o) {
  var i = n._reactRootContainer
  if (i) {
    var l = i
    if (typeof o == 'function') {
      var s = o
      o = function () {
        var a = di(l)
        s.call(a)
      }
    }
    Ei(t, l, e, o)
  } else l = Xm(n, t, e, o, r)
  return di(l)
}
od = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = yr(t.pendingLanes)
        n !== 0 &&
          (Us(t, n | 1), Pe(t, ee()), !(H & 6) && ((qn = ee() + 500), Bt()))
      }
      break
    case 13:
      on(function () {
        var r = mt(e, 1)
        if (r !== null) {
          var o = we()
          Ye(r, e, 1, o)
        }
      }),
        ba(e, 1)
  }
}
Vs = function (e) {
  if (e.tag === 13) {
    var t = mt(e, 134217728)
    if (t !== null) {
      var n = we()
      Ye(t, e, 134217728, n)
    }
    ba(e, 134217728)
  }
}
id = function (e) {
  if (e.tag === 13) {
    var t = Rt(e),
      n = mt(e, t)
    if (n !== null) {
      var r = we()
      Ye(n, e, t, r)
    }
    ba(e, t)
  }
}
ld = function () {
  return A
}
sd = function (e, t) {
  var n = A
  try {
    return (A = e), t()
  } finally {
    A = n
  }
}
Pl = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((wl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var o = $i(r)
            if (!o) throw Error(T(90))
            Dc(r), wl(r, o)
          }
        }
      }
      break
    case 'textarea':
      Wc(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Wn(e, !!n.multiple, t, !1)
  }
}
Gc = va
Qc = on
var Zm = { usingClientEntryPoint: !1, Events: [eo, Ln, $i, Vc, Kc, va] },
  pr = {
    findFiberByHostInstance: Kt,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Jm = {
    bundleType: pr.bundleType,
    version: pr.version,
    rendererPackageName: pr.rendererPackageName,
    rendererConfig: pr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: vt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Zc(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: pr.findFiberByHostInstance || Ym,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var So = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!So.isDisabled && So.supportsFiber)
    try {
      ;(mi = So.inject(Jm)), (tt = So)
    } catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zm
Ne.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Ca(t)) throw Error(T(200))
  return Qm(e, t, null, n)
}
Ne.createRoot = function (e, t) {
  if (!Ca(e)) throw Error(T(299))
  var n = !1,
    r = '',
    o = Ff
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = xa(e, 1, !1, null, null, n, !1, r, o)),
    (e[gt] = t.current),
    Wr(e.nodeType === 8 ? e.parentNode : e),
    new ka(t)
  )
}
Ne.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(T(188))
      : ((e = Object.keys(e).join(',')), Error(T(268, e)))
  return (e = Zc(t)), (e = e === null ? null : e.stateNode), e
}
Ne.flushSync = function (e) {
  return on(e)
}
Ne.hydrate = function (e, t, n) {
  if (!Ti(t)) throw Error(T(200))
  return Li(null, e, t, !0, n)
}
Ne.hydrateRoot = function (e, t, n) {
  if (!Ca(e)) throw Error(T(405))
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    l = Ff
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = zf(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[gt] = t.current),
    Wr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o)
  return new Pi(t)
}
Ne.render = function (e, t, n) {
  if (!Ti(t)) throw Error(T(200))
  return Li(null, e, t, !1, n)
}
Ne.unmountComponentAtNode = function (e) {
  if (!Ti(e)) throw Error(T(40))
  return e._reactRootContainer
    ? (on(function () {
        Li(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[gt] = null)
        })
      }),
      !0)
    : !1
}
Ne.unstable_batchedUpdates = va
Ne.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ti(n)) throw Error(T(200))
  if (e == null || e._reactInternals === void 0) throw Error(T(38))
  return Li(e, t, n, !1, r)
}
Ne.version = '18.2.0-next-9e3b772b8-20220608'
;(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
      } catch (n) {
        console.error(n)
      }
  }
  t(), (e.exports = Ne)
})(Yp)
var ju = fl
;(dl.createRoot = ju.createRoot), (dl.hydrateRoot = ju.hydrateRoot)
const Kn = window.google,
  $r = {
    AUTOCOMPLETE: {
      componentRestrictions: { country: 'uy' },
      types: ['geocode'],
      fields: ['place_id', 'geometry', 'id'],
    },
    MAP_ID: 'map-container',
    MAP: {
      center: { lat: -34.8689412, lng: -56.1697955 },
      zoom: 15,
      mapTypeId: Kn.maps.MapTypeId.ROADMAP,
    },
    ERRORS: {
      LIST: ['NOT_FOUND', 'ZERO_RESULTS'],
      MESSAGES: {
        ZERO_RESULTS:
          'No se encontraron resultados 😱 Asegurate de seleccionar las sugerencias del Autocompletar al definirlas',
        NOT_FOUND:
          'No se encontró al menos una de las direcciones 🤯 Asegurate de seleccionar las sugerencias del Autocompletar al definirlas',
        default: '',
      },
    },
  },
  qm = (e) => {
    const t = document.getElementById(e)
    return new google.maps.places.Autocomplete(t, $r.AUTOCOMPLETE)
  },
  Rf = ({ value: e, index: t = null, onChange: n, isDisabled: r = !1 }) => {
    const o = (i) => {
      n(i.target.value, t)
    }
    return (
      k.useEffect(() => {
        qm(`direction-${t}`)
      }, []),
      F('input', {
        type: 'text',
        placeholder: 'Agregar dirección',
        value: e,
        onChange: o,
        width: '100%',
        disabled: r,
        'aria-label': e,
        id: `direction-${t}`,
        onBlur: o,
      })
    )
  },
  e0 = (...e) => e,
  t0 = e0(
    'default',
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
    'gradient'
  ),
  n0 = (e) => {
    const [t, n] = k.useState(() => (typeof e == 'function' ? e() : e)),
      r = k.useRef(e)
    return (
      k.useEffect(() => {
        r.current = t
      }, [t]),
      [
        t,
        (o) => {
          const i = typeof o == 'function' ? o(r.current) : o
          ;(r.current = i), n(i)
        },
        r,
      ]
    )
  },
  Uu = (e, t) => {
    if (!e) return 0
    const n = e.includes('px')
      ? +e.split('px')[0]
      : e.includes('%')
      ? +e.split('%')[0] * t * 0.01
      : e
    return Number.isNaN(+n) ? 0 : +n
  },
  r0 = (e) => {
    if (!e || typeof window > 'u') return { width: 0, height: 0 }
    const t = e.getBoundingClientRect(),
      { width: n, height: r } = window.getComputedStyle(e)
    return { width: Uu(`${n}`, t.width), height: Uu(`${r}`, t.height) }
  },
  o0 = (e) => {
    const [t, n] = k.useState({ width: 0, height: 0 }),
      r = () => {
        const { width: o, height: i } = r0(e.current)
        n({ width: o, height: i })
      }
    return k.useEffect(() => r(), [e.current]), [t, r]
  },
  i0 = (e, t = !0) => {
    k.useEffect(() => {
      const n = () => e()
      return (
        t && n(),
        window.addEventListener('resize', n),
        () => window.removeEventListener('resize', n)
      )
    }, [])
  }
var j = 'colors',
  ve = 'sizes',
  N = 'space',
  Mf = {
    gap: N,
    gridGap: N,
    columnGap: N,
    gridColumnGap: N,
    rowGap: N,
    gridRowGap: N,
    inset: N,
    insetBlock: N,
    insetBlockEnd: N,
    insetBlockStart: N,
    insetInline: N,
    insetInlineEnd: N,
    insetInlineStart: N,
    margin: N,
    marginTop: N,
    marginRight: N,
    marginBottom: N,
    marginLeft: N,
    marginBlock: N,
    marginBlockEnd: N,
    marginBlockStart: N,
    marginInline: N,
    marginInlineEnd: N,
    marginInlineStart: N,
    padding: N,
    paddingTop: N,
    paddingRight: N,
    paddingBottom: N,
    paddingLeft: N,
    paddingBlock: N,
    paddingBlockEnd: N,
    paddingBlockStart: N,
    paddingInline: N,
    paddingInlineEnd: N,
    paddingInlineStart: N,
    top: N,
    right: N,
    bottom: N,
    left: N,
    scrollMargin: N,
    scrollMarginTop: N,
    scrollMarginRight: N,
    scrollMarginBottom: N,
    scrollMarginLeft: N,
    scrollMarginX: N,
    scrollMarginY: N,
    scrollMarginBlock: N,
    scrollMarginBlockEnd: N,
    scrollMarginBlockStart: N,
    scrollMarginInline: N,
    scrollMarginInlineEnd: N,
    scrollMarginInlineStart: N,
    scrollPadding: N,
    scrollPaddingTop: N,
    scrollPaddingRight: N,
    scrollPaddingBottom: N,
    scrollPaddingLeft: N,
    scrollPaddingX: N,
    scrollPaddingY: N,
    scrollPaddingBlock: N,
    scrollPaddingBlockEnd: N,
    scrollPaddingBlockStart: N,
    scrollPaddingInline: N,
    scrollPaddingInlineEnd: N,
    scrollPaddingInlineStart: N,
    fontSize: 'fontSizes',
    background: j,
    backgroundColor: j,
    backgroundImage: j,
    borderImage: j,
    border: j,
    borderBlock: j,
    borderBlockEnd: j,
    borderBlockStart: j,
    borderBottom: j,
    borderBottomColor: j,
    borderColor: j,
    borderInline: j,
    borderInlineEnd: j,
    borderInlineStart: j,
    borderLeft: j,
    borderLeftColor: j,
    borderRight: j,
    borderRightColor: j,
    borderTop: j,
    borderTopColor: j,
    caretColor: j,
    color: j,
    columnRuleColor: j,
    fill: j,
    outline: j,
    outlineColor: j,
    stroke: j,
    textDecorationColor: j,
    fontFamily: 'fonts',
    fontWeight: 'fontWeights',
    lineHeight: 'lineHeights',
    letterSpacing: 'letterSpacings',
    blockSize: ve,
    minBlockSize: ve,
    maxBlockSize: ve,
    inlineSize: ve,
    minInlineSize: ve,
    maxInlineSize: ve,
    width: ve,
    minWidth: ve,
    maxWidth: ve,
    height: ve,
    minHeight: ve,
    maxHeight: ve,
    flexBasis: ve,
    gridTemplateColumns: ve,
    gridTemplateRows: ve,
    borderWidth: 'borderWidths',
    borderTopWidth: 'borderWidths',
    borderRightWidth: 'borderWidths',
    borderBottomWidth: 'borderWidths',
    borderLeftWidth: 'borderWidths',
    borderStyle: 'borderStyles',
    borderTopStyle: 'borderStyles',
    borderRightStyle: 'borderStyles',
    borderBottomStyle: 'borderStyles',
    borderLeftStyle: 'borderStyles',
    borderRadius: 'radii',
    borderTopLeftRadius: 'radii',
    borderTopRightRadius: 'radii',
    borderBottomRightRadius: 'radii',
    borderBottomLeftRadius: 'radii',
    boxShadow: 'shadows',
    textShadow: 'shadows',
    transition: 'transitions',
    zIndex: 'zIndices',
  },
  l0 = (e, t) =>
    typeof t == 'function' ? { '()': Function.prototype.toString.call(t) } : t,
  or = () => {
    const e = Object.create(null)
    return (t, n, ...r) => {
      const o = ((i) => JSON.stringify(i, l0))(t)
      return o in e ? e[o] : (e[o] = n(t, ...r))
    }
  },
  Zt = Symbol.for('sxs.internal'),
  Ea = (e, t) =>
    Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)),
  Vu = (e) => {
    for (const t in e) return !0
    return !1
  },
  { hasOwnProperty: s0 } = Object.prototype,
  ls = (e) =>
    e.includes('-') ? e : e.replace(/[A-Z]/g, (t) => '-' + t.toLowerCase()),
  a0 = /\s+(?![^()]*\))/,
  hn = (e) => (t) => e(...(typeof t == 'string' ? String(t).split(a0) : [t])),
  Ku = {
    appearance: (e) => ({ WebkitAppearance: e, appearance: e }),
    backfaceVisibility: (e) => ({
      WebkitBackfaceVisibility: e,
      backfaceVisibility: e,
    }),
    backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }),
    backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }),
    boxDecorationBreak: (e) => ({
      WebkitBoxDecorationBreak: e,
      boxDecorationBreak: e,
    }),
    clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }),
    content: (e) => ({
      content:
        e.includes('"') ||
        e.includes("'") ||
        /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(
          e
        )
          ? e
          : `"${e}"`,
    }),
    hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }),
    maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }),
    maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }),
    tabSize: (e) => ({ MozTabSize: e, tabSize: e }),
    textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }),
    userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }),
    marginBlock: hn((e, t) => ({
      marginBlockStart: e,
      marginBlockEnd: t || e,
    })),
    marginInline: hn((e, t) => ({
      marginInlineStart: e,
      marginInlineEnd: t || e,
    })),
    maxSize: hn((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })),
    minSize: hn((e, t) => ({ minBlockSize: e, minInlineSize: t || e })),
    paddingBlock: hn((e, t) => ({
      paddingBlockStart: e,
      paddingBlockEnd: t || e,
    })),
    paddingInline: hn((e, t) => ({
      paddingInlineStart: e,
      paddingInlineEnd: t || e,
    })),
  },
  ol = /([\d.]+)([^]*)/,
  u0 = (e, t) =>
    e.length
      ? e.reduce(
          (n, r) => (
            n.push(
              ...t.map((o) =>
                o.includes('&')
                  ? o.replace(
                      /&/g,
                      /[ +>|~]/.test(r) && /&.*&/.test(o) ? `:is(${r})` : r
                    )
                  : r + ' ' + o
              )
            ),
            n
          ),
          []
        )
      : t,
  c0 = (e, t) =>
    e in d0 && typeof t == 'string'
      ? t.replace(
          /^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,
          (n, r, o, i) =>
            r +
            (o === 'stretch'
              ? `-moz-available${i};${ls(e)}:${r}-webkit-fill-available`
              : `-moz-fit-content${i};${ls(e)}:${r}fit-content`) +
            i
        )
      : String(t),
  d0 = {
    blockSize: 1,
    height: 1,
    inlineSize: 1,
    maxBlockSize: 1,
    maxHeight: 1,
    maxInlineSize: 1,
    maxWidth: 1,
    minBlockSize: 1,
    minHeight: 1,
    minInlineSize: 1,
    minWidth: 1,
    width: 1,
  },
  yt = (e) => (e ? e + '-' : ''),
  Nf = (e, t, n) =>
    e.replace(
      /([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,
      (r, o, i, l, s) =>
        (l == '$') == !!i
          ? r
          : (o || l == '--' ? 'calc(' : '') +
            'var(--' +
            (l === '$'
              ? yt(t) + (s.includes('$') ? '' : yt(n)) + s.replace(/\$/g, '-')
              : s) +
            ')' +
            (o || l == '--' ? '*' + (o || '') + (i || '1') + ')' : '')
    ),
  f0 = /\s*,\s*(?![^()]*\))/,
  p0 = Object.prototype.toString,
  _n = (e, t, n, r, o) => {
    let i, l, s
    const a = (c, g, h) => {
      let p, m
      const w = (S) => {
        for (p in S) {
          const d = p.charCodeAt(0) === 64,
            y = d && Array.isArray(S[p]) ? S[p] : [S[p]]
          for (m of y) {
            const u = /[A-Z]/.test((f = p))
                ? f
                : f.replace(/-[^]/g, (b) => b[1].toUpperCase()),
              E =
                typeof m == 'object' &&
                m &&
                m.toString === p0 &&
                (!r.utils[u] || !g.length)
            if (u in r.utils && !E) {
              const b = r.utils[u]
              if (b !== l) {
                ;(l = b), w(b(m)), (l = null)
                continue
              }
            } else if (u in Ku) {
              const b = Ku[u]
              if (b !== s) {
                ;(s = b), w(b(m)), (s = null)
                continue
              }
            }
            if (
              (d &&
                ((L =
                  p.slice(1) in r.media ? '@media ' + r.media[p.slice(1)] : p),
                (p = L.replace(
                  /\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,
                  (b, P, C, R, O, v) => {
                    const I = ol.test(P),
                      $ = 0.0625 * (I ? -1 : 1),
                      [x, ae] = I ? [R, P] : [P, R]
                    return (
                      '(' +
                      (C[0] === '='
                        ? ''
                        : (C[0] === '>') === I
                        ? 'max-'
                        : 'min-') +
                      x +
                      ':' +
                      (C[0] !== '=' && C.length === 1
                        ? ae.replace(
                            ol,
                            (fe, Le, z) =>
                              Number(Le) + $ * (C === '>' ? 1 : -1) + z
                          )
                        : ae) +
                      (O
                        ? ') and (' +
                          (O[0] === '>' ? 'min-' : 'max-') +
                          x +
                          ':' +
                          (O.length === 1
                            ? v.replace(
                                ol,
                                (fe, Le, z) =>
                                  Number(Le) + $ * (O === '>' ? -1 : 1) + z
                              )
                            : v)
                        : '') +
                      ')'
                    )
                  }
                ))),
              E)
            ) {
              const b = d ? h.concat(p) : [...h],
                P = d ? [...g] : u0(g, p.split(f0))
              i !== void 0 && o(Gu(...i)), (i = void 0), a(m, P, b)
            } else
              i === void 0 && (i = [[], g, h]),
                (p =
                  d || p.charCodeAt(0) !== 36
                    ? p
                    : `--${yt(r.prefix)}${p.slice(1).replace(/\$/g, '-')}`),
                (m = E
                  ? m
                  : typeof m == 'number'
                  ? m && u in g0
                    ? String(m) + 'px'
                    : String(m)
                  : Nf(c0(u, m ?? ''), r.prefix, r.themeMap[u])),
                i[0].push(`${d ? `${p} ` : `${ls(p)}:`}${m}`)
          }
        }
        var L, f
      }
      w(c), i !== void 0 && o(Gu(...i)), (i = void 0)
    }
    a(e, t, n)
  },
  Gu = (e, t, n) =>
    `${n.map((r) => `${r}{`).join('')}${
      t.length ? `${t.join(',')}{` : ''
    }${e.join(';')}${t.length ? '}' : ''}${Array(
      n.length ? n.length + 1 : 0
    ).join('}')}`,
  g0 = {
    animationDelay: 1,
    animationDuration: 1,
    backgroundSize: 1,
    blockSize: 1,
    border: 1,
    borderBlock: 1,
    borderBlockEnd: 1,
    borderBlockEndWidth: 1,
    borderBlockStart: 1,
    borderBlockStartWidth: 1,
    borderBlockWidth: 1,
    borderBottom: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    borderBottomWidth: 1,
    borderEndEndRadius: 1,
    borderEndStartRadius: 1,
    borderInlineEnd: 1,
    borderInlineEndWidth: 1,
    borderInlineStart: 1,
    borderInlineStartWidth: 1,
    borderInlineWidth: 1,
    borderLeft: 1,
    borderLeftWidth: 1,
    borderRadius: 1,
    borderRight: 1,
    borderRightWidth: 1,
    borderSpacing: 1,
    borderStartEndRadius: 1,
    borderStartStartRadius: 1,
    borderTop: 1,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderTopWidth: 1,
    borderWidth: 1,
    bottom: 1,
    columnGap: 1,
    columnRule: 1,
    columnRuleWidth: 1,
    columnWidth: 1,
    containIntrinsicSize: 1,
    flexBasis: 1,
    fontSize: 1,
    gap: 1,
    gridAutoColumns: 1,
    gridAutoRows: 1,
    gridTemplateColumns: 1,
    gridTemplateRows: 1,
    height: 1,
    inlineSize: 1,
    inset: 1,
    insetBlock: 1,
    insetBlockEnd: 1,
    insetBlockStart: 1,
    insetInline: 1,
    insetInlineEnd: 1,
    insetInlineStart: 1,
    left: 1,
    letterSpacing: 1,
    margin: 1,
    marginBlock: 1,
    marginBlockEnd: 1,
    marginBlockStart: 1,
    marginBottom: 1,
    marginInline: 1,
    marginInlineEnd: 1,
    marginInlineStart: 1,
    marginLeft: 1,
    marginRight: 1,
    marginTop: 1,
    maxBlockSize: 1,
    maxHeight: 1,
    maxInlineSize: 1,
    maxWidth: 1,
    minBlockSize: 1,
    minHeight: 1,
    minInlineSize: 1,
    minWidth: 1,
    offsetDistance: 1,
    offsetRotate: 1,
    outline: 1,
    outlineOffset: 1,
    outlineWidth: 1,
    overflowClipMargin: 1,
    padding: 1,
    paddingBlock: 1,
    paddingBlockEnd: 1,
    paddingBlockStart: 1,
    paddingBottom: 1,
    paddingInline: 1,
    paddingInlineEnd: 1,
    paddingInlineStart: 1,
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 1,
    perspective: 1,
    right: 1,
    rowGap: 1,
    scrollMargin: 1,
    scrollMarginBlock: 1,
    scrollMarginBlockEnd: 1,
    scrollMarginBlockStart: 1,
    scrollMarginBottom: 1,
    scrollMarginInline: 1,
    scrollMarginInlineEnd: 1,
    scrollMarginInlineStart: 1,
    scrollMarginLeft: 1,
    scrollMarginRight: 1,
    scrollMarginTop: 1,
    scrollPadding: 1,
    scrollPaddingBlock: 1,
    scrollPaddingBlockEnd: 1,
    scrollPaddingBlockStart: 1,
    scrollPaddingBottom: 1,
    scrollPaddingInline: 1,
    scrollPaddingInlineEnd: 1,
    scrollPaddingInlineStart: 1,
    scrollPaddingLeft: 1,
    scrollPaddingRight: 1,
    scrollPaddingTop: 1,
    shapeMargin: 1,
    textDecoration: 1,
    textDecorationThickness: 1,
    textIndent: 1,
    textUnderlineOffset: 1,
    top: 1,
    transitionDelay: 1,
    transitionDuration: 1,
    verticalAlign: 1,
    width: 1,
    wordSpacing: 1,
  },
  Qu = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)),
  Jt = (e) =>
    ((t) => {
      let n,
        r = ''
      for (n = Math.abs(t); n > 52; n = (n / 52) | 0) r = Qu(n % 52) + r
      return Qu(n % 52) + r
    })(
      ((t, n) => {
        let r = n.length
        for (; r; ) t = (33 * t) ^ n.charCodeAt(--r)
        return t
      })(5381, JSON.stringify(e)) >>> 0
    ),
  wr = [
    'themed',
    'global',
    'styled',
    'onevar',
    'resonevar',
    'allvar',
    'inline',
  ],
  m0 = (e) => {
    if (e.href && !e.href.startsWith(location.origin)) return !1
    try {
      return !!e.cssRules
    } catch {
      return !1
    }
  },
  h0 = (e) => {
    let t
    const n = () => {
        const { cssRules: o } = t.sheet
        return [].map
          .call(o, (i, l) => {
            const { cssText: s } = i
            let a = ''
            if (s.startsWith('--sxs')) return ''
            if (o[l - 1] && (a = o[l - 1].cssText).startsWith('--sxs')) {
              if (!i.cssRules.length) return ''
              for (const c in t.rules)
                if (t.rules[c].group === i)
                  return `--sxs{--sxs:${[...t.rules[c].cache].join(' ')}}${s}`
              return i.cssRules.length ? `${a}${s}` : ''
            }
            return s
          })
          .join('')
      },
      r = () => {
        if (t) {
          const { rules: s, sheet: a } = t
          if (!a.deleteRule) {
            for (; Object(Object(a.cssRules)[0]).type === 3; )
              a.cssRules.splice(0, 1)
            a.cssRules = []
          }
          for (const c in s) delete s[c]
        }
        const o = Object(e).styleSheets || []
        for (const s of o)
          if (m0(s)) {
            for (let a = 0, c = s.cssRules; c[a]; ++a) {
              const g = Object(c[a])
              if (g.type !== 1) continue
              const h = Object(c[a + 1])
              if (h.type !== 4) continue
              ++a
              const { cssText: p } = g
              if (!p.startsWith('--sxs')) continue
              const m = p.slice(14, -3).trim().split(/\s+/),
                w = wr[m[0]]
              w &&
                (t || (t = { sheet: s, reset: r, rules: {}, toString: n }),
                (t.rules[w] = { group: h, index: a, cache: new Set(m) }))
            }
            if (t) break
          }
        if (!t) {
          const s = (a, c) => ({
            type: c,
            cssRules: [],
            insertRule(g, h) {
              this.cssRules.splice(
                h,
                0,
                s(
                  g,
                  { import: 3, undefined: 1 }[
                    (g.toLowerCase().match(/^@([a-z]+)/) || [])[1]
                  ] || 4
                )
              )
            },
            get cssText() {
              return a === '@media{}'
                ? `@media{${[].map
                    .call(this.cssRules, (g) => g.cssText)
                    .join('')}}`
                : a
            },
          })
          t = {
            sheet: e
              ? (e.head || e).appendChild(document.createElement('style')).sheet
              : s('', 'text/css'),
            rules: {},
            reset: r,
            toString: n,
          }
        }
        const { sheet: i, rules: l } = t
        for (let s = wr.length - 1; s >= 0; --s) {
          const a = wr[s]
          if (!l[a]) {
            const c = wr[s + 1],
              g = l[c] ? l[c].index : i.cssRules.length
            i.insertRule('@media{}', g),
              i.insertRule(`--sxs{--sxs:${s}}`, g),
              (l[a] = {
                group: i.cssRules[g + 1],
                index: g,
                cache: new Set([s]),
              })
          }
          y0(l[a])
        }
      }
    return r(), t
  },
  y0 = (e) => {
    const t = e.group
    let n = t.cssRules.length
    e.apply = (r) => {
      try {
        t.insertRule(r, n), ++n
      } catch {}
    }
  },
  gr = Symbol(),
  v0 = or(),
  Yu = (e, t) =>
    v0(e, () => (...n) => {
      let r = { type: null, composers: new Set() }
      for (const o of n)
        if (o != null)
          if (o[Zt]) {
            r.type == null && (r.type = o[Zt].type)
            for (const i of o[Zt].composers) r.composers.add(i)
          } else
            o.constructor !== Object || o.$$typeof
              ? r.type == null && (r.type = o)
              : r.composers.add($0(o, e))
      return (
        r.type == null && (r.type = 'span'),
        r.composers.size || r.composers.add(['PJLV', {}, [], [], {}, []]),
        w0(e, r, t)
      )
    }),
  $0 = ({ variants: e, compoundVariants: t, defaultVariants: n, ...r }, o) => {
    const i = `${yt(o.prefix)}c-${Jt(r)}`,
      l = [],
      s = [],
      a = Object.create(null),
      c = []
    for (const p in n) a[p] = String(n[p])
    if (typeof e == 'object' && e)
      for (const p in e) {
        ;(g = a), (h = p), s0.call(g, h) || (a[p] = 'undefined')
        const m = e[p]
        for (const w in m) {
          const S = { [p]: String(w) }
          String(w) === 'undefined' && c.push(p)
          const L = m[w],
            f = [S, L, !Vu(L)]
          l.push(f)
        }
      }
    var g, h
    if (typeof t == 'object' && t)
      for (const p of t) {
        let { css: m, ...w } = p
        m = (typeof m == 'object' && m) || {}
        for (const L in w) w[L] = String(w[L])
        const S = [w, m, !Vu(m)]
        s.push(S)
      }
    return [i, r, l, s, a, c]
  },
  w0 = (e, t, n) => {
    const [r, o, i, l] = S0(t.composers),
      s =
        typeof t.type == 'function' || t.type.$$typeof
          ? ((h) => {
              function p() {
                for (let m = 0; m < p[gr].length; m++) {
                  const [w, S] = p[gr][m]
                  h.rules[w].apply(S)
                }
                return (p[gr] = []), null
              }
              return (
                (p[gr] = []),
                (p.rules = {}),
                wr.forEach(
                  (m) => (p.rules[m] = { apply: (w) => p[gr].push([m, w]) })
                ),
                p
              )
            })(n)
          : null,
      a = (s || n).rules,
      c = `.${r}${o.length > 1 ? `:where(.${o.slice(1).join('.')})` : ''}`,
      g = (h) => {
        h = (typeof h == 'object' && h) || x0
        const { css: p, ...m } = h,
          w = {}
        for (const f in i)
          if ((delete m[f], f in h)) {
            let d = h[f]
            typeof d == 'object' && d
              ? (w[f] = { '@initial': i[f], ...d })
              : ((d = String(d)),
                (w[f] = d !== 'undefined' || l.has(f) ? d : i[f]))
          } else w[f] = i[f]
        const S = new Set([...o])
        for (const [f, d, y, u] of t.composers) {
          n.rules.styled.cache.has(f) ||
            (n.rules.styled.cache.add(f),
            _n(d, [`.${f}`], [], e, (P) => {
              a.styled.apply(P)
            }))
          const E = Xu(y, w, e.media),
            b = Xu(u, w, e.media, !0)
          for (const P of E)
            if (P !== void 0)
              for (const [C, R, O] of P) {
                const v = `${f}-${Jt(R)}-${C}`
                S.add(v)
                const I = (O ? n.rules.resonevar : n.rules.onevar).cache,
                  $ = O ? a.resonevar : a.onevar
                I.has(v) ||
                  (I.add(v),
                  _n(R, [`.${v}`], [], e, (x) => {
                    $.apply(x)
                  }))
              }
          for (const P of b)
            if (P !== void 0)
              for (const [C, R] of P) {
                const O = `${f}-${Jt(R)}-${C}`
                S.add(O),
                  n.rules.allvar.cache.has(O) ||
                    (n.rules.allvar.cache.add(O),
                    _n(R, [`.${O}`], [], e, (v) => {
                      a.allvar.apply(v)
                    }))
              }
        }
        if (typeof p == 'object' && p) {
          const f = `${r}-i${Jt(p)}-css`
          S.add(f),
            n.rules.inline.cache.has(f) ||
              (n.rules.inline.cache.add(f),
              _n(p, [`.${f}`], [], e, (d) => {
                a.inline.apply(d)
              }))
        }
        for (const f of String(h.className || '')
          .trim()
          .split(/\s+/))
          f && S.add(f)
        const L = (m.className = [...S].join(' '))
        return {
          type: t.type,
          className: L,
          selector: c,
          props: m,
          toString: () => L,
          deferredInjector: s,
        }
      }
    return Ea(g, {
      className: r,
      selector: c,
      [Zt]: t,
      toString: () => (n.rules.styled.cache.has(r) || g(), r),
    })
  },
  S0 = (e) => {
    let t = ''
    const n = [],
      r = {},
      o = []
    for (const [i, , , , l, s] of e) {
      t === '' && (t = i), n.push(i), o.push(...s)
      for (const a in l) {
        const c = l[a]
        ;(r[a] === void 0 || c !== 'undefined' || s.includes(c)) && (r[a] = c)
      }
    }
    return [t, n, r, new Set(o)]
  },
  Xu = (e, t, n, r) => {
    const o = []
    e: for (let [i, l, s] of e) {
      if (s) continue
      let a,
        c = 0,
        g = !1
      for (a in i) {
        const h = i[a]
        let p = t[a]
        if (p !== h) {
          if (typeof p != 'object' || !p) continue e
          {
            let m,
              w,
              S = 0
            for (const L in p) {
              if (h === String(p[L])) {
                if (L !== '@initial') {
                  const f = L.slice(1)
                  ;(w = w || []).push(
                    f in n ? n[f] : L.replace(/^@media ?/, '')
                  ),
                    (g = !0)
                }
                ;(c += S), (m = !0)
              }
              ++S
            }
            if ((w && w.length && (l = { ['@media ' + w.join(', ')]: l }), !m))
              continue e
          }
        }
      }
      ;(o[c] = o[c] || []).push([r ? 'cv' : `${a}-${i[a]}`, l, g])
    }
    return o
  },
  x0 = {},
  b0 = or(),
  k0 = (e, t) =>
    b0(e, () => (...n) => {
      const r = () => {
        for (let o of n) {
          o = (typeof o == 'object' && o) || {}
          let i = Jt(o)
          if (!t.rules.global.cache.has(i)) {
            if ((t.rules.global.cache.add(i), '@import' in o)) {
              let l =
                [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1
              for (let s of [].concat(o['@import']))
                (s = s.includes('"') || s.includes("'") ? s : `"${s}"`),
                  t.sheet.insertRule(`@import ${s};`, l++)
              delete o['@import']
            }
            _n(o, [], [], e, (l) => {
              t.rules.global.apply(l)
            })
          }
        }
        return ''
      }
      return Ea(r, { toString: r })
    }),
  C0 = or(),
  E0 = (e, t) =>
    C0(e, () => (n) => {
      const r = `${yt(e.prefix)}k-${Jt(n)}`,
        o = () => {
          if (!t.rules.global.cache.has(r)) {
            t.rules.global.cache.add(r)
            const i = []
            _n(n, [], [], e, (s) => i.push(s))
            const l = `@keyframes ${r}{${i.join('')}}`
            t.rules.global.apply(l)
          }
          return r
        }
      return Ea(o, {
        get name() {
          return o()
        },
        toString: o,
      })
    }),
  P0 = class {
    constructor(e, t, n, r) {
      ;(this.token = e == null ? '' : String(e)),
        (this.value = t == null ? '' : String(t)),
        (this.scale = n == null ? '' : String(n)),
        (this.prefix = r == null ? '' : String(r))
    }
    get computedValue() {
      return 'var(' + this.variable + ')'
    }
    get variable() {
      return '--' + yt(this.prefix) + yt(this.scale) + this.token
    }
    toString() {
      return this.computedValue
    }
  },
  T0 = or(),
  L0 = (e, t) =>
    T0(e, () => (n, r) => {
      r = (typeof n == 'object' && n) || Object(r)
      const o = `.${(n =
          (n = typeof n == 'string' ? n : '') || `${yt(e.prefix)}t-${Jt(r)}`)}`,
        i = {},
        l = []
      for (const a in r) {
        i[a] = {}
        for (const c in r[a]) {
          const g = `--${yt(e.prefix)}${a}-${c}`,
            h = Nf(String(r[a][c]), e.prefix, a)
          ;(i[a][c] = new P0(c, h, a, e.prefix)), l.push(`${g}:${h}`)
        }
      }
      const s = () => {
        if (l.length && !t.rules.themed.cache.has(n)) {
          t.rules.themed.cache.add(n)
          const a = `${r === e.theme ? ':root,' : ''}.${n}{${l.join(';')}}`
          t.rules.themed.apply(a)
        }
        return n
      }
      return {
        ...i,
        get className() {
          return s()
        },
        selector: o,
        toString: s,
      }
    }),
  z0 = or(),
  F0 = or(),
  R0 = (e) => {
    const t = ((n) => {
      let r = !1
      const o = z0(n, (i) => {
        r = !0
        const l =
            'prefix' in (i = (typeof i == 'object' && i) || {})
              ? String(i.prefix)
              : '',
          s = (typeof i.media == 'object' && i.media) || {},
          a =
            typeof i.root == 'object'
              ? i.root || null
              : globalThis.document || null,
          c = (typeof i.theme == 'object' && i.theme) || {},
          g = {
            prefix: l,
            media: s,
            theme: c,
            themeMap: (typeof i.themeMap == 'object' && i.themeMap) || {
              ...Mf,
            },
            utils: (typeof i.utils == 'object' && i.utils) || {},
          },
          h = h0(a),
          p = {
            css: Yu(g, h),
            globalCss: k0(g, h),
            keyframes: E0(g, h),
            createTheme: L0(g, h),
            reset() {
              h.reset(), p.theme.toString()
            },
            theme: {},
            sheet: h,
            config: g,
            prefix: l,
            getCssText: h.toString,
            toString: h.toString,
          }
        return String((p.theme = p.createTheme(c))), p
      })
      return r || o.reset(), o
    })(e)
    return (
      (t.styled = (({ config: n, sheet: r }) =>
        F0(n, () => {
          const o = Yu(n, r)
          return (...i) => {
            const l = o(...i),
              s = l[Zt].type,
              a = _.forwardRef((c, g) => {
                const h = (c && c.as) || s,
                  { props: p, deferredInjector: m } = l(c)
                return (
                  delete p.as,
                  (p.ref = g),
                  m
                    ? _.createElement(
                        _.Fragment,
                        null,
                        _.createElement(h, p),
                        _.createElement(m, null)
                      )
                    : _.createElement(h, p)
                )
              })
            return (
              (a.className = l.className),
              (a.displayName = `Styled.${s.displayName || s.name || s}`),
              (a.selector = l.selector),
              (a.toString = () => l.selector),
              (a[Zt] = l[Zt]),
              a
            )
          }
        }))(t)),
      t
    )
  }
function Of(e) {
  for (var t, n, r = Array.prototype.slice.call(arguments, 1); r.length; )
    for (n in (t = r.shift()))
      t.hasOwnProperty(n) &&
        (typeof e[n] == 'object' &&
        e[n] &&
        Object.prototype.toString.call(e[n]) !== '[object Array]' &&
        typeof t[n] == 'object' &&
        t[n] !== null
          ? (e[n] = Of({}, e[n], t[n]))
          : (e[n] = t[n]))
  return e
}
const me = {
    fonts: {
      sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif;",
      mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono','Courier New', monospace;",
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeights: {
      xs: 1,
      sm: 1.25,
      base: 1.5,
      md: 1.5,
      lg: 1.75,
      xl: 1.75,
      '2xl': 2,
      '3xl': 2.25,
      '4xl': 2.5,
      '5xl': 1,
      '6xl': 1,
      '7xl': 1,
      '8xl': 1,
      '9xl': 1,
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    space: {
      0: '0rem',
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '2.25rem',
      '2xl': '3rem',
      '3xl': '5rem',
      '4xl': '10rem',
      '5xl': '14rem',
      '6xl': '18rem',
      '7xl': '24rem',
      '8xl': '32rem',
      '9xl': '40rem',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      screen: '100vw',
      full: '100%',
      px: '1px',
      1: '0.125rem',
      2: '0.25rem',
      3: '0.375rem',
      4: '0.5rem',
      5: '0.625rem',
      6: '0.75rem',
      7: '0.875rem',
      8: '1rem',
      9: '1.25rem',
      10: '1.5rem',
      11: '1.75rem',
      12: '2rem',
      13: '2.25rem',
      14: '2.5rem',
      15: '2.75rem',
      16: '3rem',
      17: '3.5rem',
      18: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    radii: {
      xs: '7px',
      sm: '9px',
      md: '12px',
      base: '14px',
      lg: '14px',
      xl: '18px',
      '2xl': '24px',
      '3xl': '32px',
      squared: '33%',
      rounded: '50%',
      pill: '9999px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      5: '500',
      10: '1000',
      max: '9999',
    },
    borderWeights: {
      light: '1px',
      normal: '2px',
      bold: '3px',
      extrabold: '4px',
      black: '5px',
    },
    transitions: {
      default: 'all 250ms ease',
      button:
        'background 0.25s ease 0s, color 0.25s ease 0s, border-color 0.25s ease 0s, box-shadow 0.25s ease 0s, transform 0.25s ease 0s, opacity 0.25s ease 0s',
      avatar: 'box-shadow 0.25s ease 0s, opacity 0.25s ease 0s',
      card: 'transform 0.25s ease 0s, filter 0.25s ease 0s, box-shadow 0.25s ease 0s',
      dropdownItem:
        'background 0.12s ease, transform 0.12s ease, color 0.12s ease, box-shadow 0.12s ease 0s',
    },
    breakpoints: {
      xs: '650px',
      sm: '960px',
      md: '1280px',
      lg: '1400px',
      xl: '1920px',
    },
  },
  M0 = {
    white: '#ffffff',
    black: '#000000',
    primaryLight: '$blue200',
    primaryLightHover: '$blue300',
    primaryLightActive: '$blue400',
    primaryLightContrast: '$blue600',
    primary: '$blue600',
    primaryBorder: '$blue500',
    primaryBorderHover: '$blue600',
    primarySolidHover: '$blue700',
    primarySolidContrast: '$white',
    primaryShadow: '$blue500',
    secondaryLight: '$purple200',
    secondaryLightHover: '$purple300',
    secondaryLightActive: '$purple400',
    secondaryLightContrast: '$purple600',
    secondary: '$purple600',
    secondaryBorder: '$purple500',
    secondaryBorderHover: '$purple600',
    secondarySolidHover: '$purple700',
    secondarySolidContrast: '$white',
    secondaryShadow: '$purple500',
    successLight: '$green200',
    successLightHover: '$green300',
    successLightActive: '$green400',
    successLightContrast: '$green700',
    success: '$green600',
    successBorder: '$green500',
    successBorderHover: '$green600',
    successSolidHover: '$green700',
    successSolidContrast: '$white',
    successShadow: '$green500',
    warningLight: '$yellow200',
    warningLightHover: '$yellow300',
    warningLightActive: '$yellow400',
    warningLightContrast: '$yellow700',
    warning: '$yellow600',
    warningBorder: '$yellow500',
    warningBorderHover: '$yellow600',
    warningSolidHover: '$yellow700',
    warningSolidContrast: '$white',
    warningShadow: '$yellow500',
    errorLight: '$red200',
    errorLightHover: '$red300',
    errorLightActive: '$red400',
    errorLightContrast: '$red600',
    error: '$red600',
    errorBorder: '$red500',
    errorBorderHover: '$red600',
    errorSolidHover: '$red700',
    errorSolidContrast: '$white',
    errorShadow: '$red500',
    neutralLight: '$gray100',
    neutralLightHover: '$gray200',
    neutralLightActive: '$gray300',
    neutralLightContrast: '$gray800',
    neutral: '$gray600',
    neutralBorder: '$gray400',
    neutralBorderHover: '$gray500',
    neutralSolidHover: '$gray600',
    neutralSolidContrast: '$white',
    neutralShadow: '$gray400',
    gradient:
      'linear-gradient(112deg, $cyan600 -63.59%, $pink600 -20.3%, $blue600 70.46%)',
    accents0: '$gray50',
    accents1: '$gray100',
    accents2: '$gray200',
    accents3: '$gray300',
    accents4: '$gray400',
    accents5: '$gray500',
    accents6: '$gray600',
    accents7: '$gray700',
    accents8: '$gray800',
    accents9: '$gray900',
  },
  N0 = {
    xs: `(min-width: ${me.breakpoints.xs})`,
    sm: `(min-width: ${me.breakpoints.sm})`,
    md: `(min-width: ${me.breakpoints.md})`,
    lg: `(min-width: ${me.breakpoints.lg})`,
    xl: `(min-width: ${me.breakpoints.xl})`,
    xsMin: `(min-width: ${me.breakpoints.xs})`,
    smMin: `(min-width: ${me.breakpoints.sm})`,
    mdMin: `(min-width: ${me.breakpoints.md})`,
    lgMin: `(min-width: ${me.breakpoints.lg})`,
    xlMin: `(min-width: ${me.breakpoints.xl})`,
    xsMax: `(max-width: ${me.breakpoints.xs})`,
    smMax: `(max-width: ${me.breakpoints.sm})`,
    mdMax: `(max-width: ${me.breakpoints.md})`,
    lgMax: `(max-width: ${me.breakpoints.lg})`,
    xlMax: `(max-width: ${me.breakpoints.xl})`,
    motion: '(prefers-reduced-motion: reduce)',
    safari: 'not all and (min-resolution:.001dpcm)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  O0 = {
    p: (e) => ({ padding: e }),
    pt: (e) => ({ paddingTop: e }),
    pr: (e) => ({ paddingRight: e }),
    pb: (e) => ({ paddingBottom: e }),
    pl: (e) => ({ paddingLeft: e }),
    px: (e) => ({ paddingLeft: e, paddingRight: e }),
    py: (e) => ({ paddingTop: e, paddingBottom: e }),
    m: (e) => ({ margin: e }),
    mt: (e) => ({ marginTop: e }),
    mr: (e) => ({ marginRight: e }),
    mb: (e) => ({ marginBottom: e }),
    ml: (e) => ({ marginLeft: e }),
    mx: (e) => ({ marginLeft: e, marginRight: e }),
    my: (e) => ({ marginTop: e, marginBottom: e }),
    ta: (e) => ({ textAlign: e }),
    tt: (e) => ({ textTransform: e }),
    to: (e) => ({ textOverflow: e }),
    d: (e) => ({ display: e }),
    dflex: (e) => ({ display: 'flex', alignItems: e, justifyContent: e }),
    fd: (e) => ({ flexDirection: e }),
    fw: (e) => ({ flexWrap: e }),
    ai: (e) => ({ alignItems: e }),
    ac: (e) => ({ alignContent: e }),
    jc: (e) => ({ justifyContent: e }),
    as: (e) => ({ alignSelf: e }),
    fg: (e) => ({ flexGrow: e }),
    fs: (e) => ({ fontSize: e }),
    fb: (e) => ({ flexBasis: e }),
    bc: (e) => ({ backgroundColor: e }),
    bf: (e) => ({ backdropFilter: e }),
    bg: (e) => ({ background: e }),
    bgBlur: (e) => ({ bf: 'saturate(180%) blur(10px)', bg: e }),
    bgColor: (e) => ({ backgroundColor: e }),
    backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }),
    bgClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }),
    br: (e) => ({ borderRadius: e }),
    bw: (e) => ({ borderWidth: e }),
    btrr: (e) => ({ borderTopRightRadius: e }),
    bbrr: (e) => ({ borderBottomRightRadius: e }),
    bblr: (e) => ({ borderBottomLeftRadius: e }),
    btlr: (e) => ({ borderTopLeftRadius: e }),
    bs: (e) => ({ boxShadow: e }),
    ds: (e) => ({ dropShadow: e }),
    shadow: (e) => ({ boxShadow: e }),
    dshadow: (e) => ({ dropShadow: e }),
    dropShadow: (e) => ({ filter: `$dropShadows${e}` }),
    normalShadow: (e) => ({ boxShadow: `0 4px 14px 0 $colors${e}` }),
    normalShadowVar: (e) => ({ boxShadow: `0 4px 14px 0 ${e}` }),
    lh: (e) => ({ lineHeight: e }),
    ov: (e) => ({ overflow: e }),
    ox: (e) => ({ overflowX: e }),
    oy: (e) => ({ overflowY: e }),
    pe: (e) => ({ pointerEvents: e }),
    events: (e) => ({ pointerEvents: e }),
    us: (e) => ({ WebkitUserSelect: e, userSelect: e }),
    userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }),
    w: (e) => ({ width: e }),
    h: (e) => ({ height: e }),
    mw: (e) => ({ maxWidth: e }),
    maxW: (e) => ({ maxWidth: e }),
    mh: (e) => ({ maxHeight: e }),
    maxH: (e) => ({ maxHeight: e }),
    size: (e) => ({ width: e, height: e }),
    minSize: (e) => ({ minWidth: e, minHeight: e, width: e, height: e }),
    sizeMin: (e) => ({ minWidth: e, minHeight: e, width: e, height: e }),
    maxSize: (e) => ({ maxWidth: e, maxHeight: e }),
    sizeMax: (e) => ({ maxWidth: e, maxHeight: e }),
    appearance: (e) => ({ WebkitAppearance: e, appearance: e }),
    scale: (e) => ({ transform: `scale(${e})` }),
    linearGradient: (e) => ({ backgroundImage: `linear-gradient(${e})` }),
    tdl: (e) => ({ textDecorationLine: e }),
    truncateText: (e) => ({
      maxWidth: e,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }),
    textGradient: (e) => ({
      backgroundImage: `linear-gradient(${e})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      '&::selection': { WebkitTextFillColor: '$colors$text' },
    }),
  },
  _0 = {
    ...Mf,
    width: 'space',
    height: 'space',
    minWidth: 'space',
    maxWidth: 'space',
    minHeight: 'space',
    maxHeight: 'space',
    flexBasis: 'space',
    gridTemplateColumns: 'space',
    gridTemplateRows: 'space',
    blockSize: 'space',
    minBlockSize: 'space',
    maxBlockSize: 'space',
    inlineSize: 'space',
    minInlineSize: 'space',
    maxInlineSize: 'space',
    borderWidth: 'borderWeights',
  },
  qt = {
    prefix: 'nextui',
    theme: { ...me, colors: M0, shadows: {}, dropShadows: {} },
    media: N0,
    utils: O0,
    themeMap: _0,
  },
  _f = (e, t = null) => {
    if (typeof document > 'u' || !e) return ''
    const n = t || document.documentElement,
      r = Pa(e)
        ? e.replace('var(', '').replace(')', '')
        : e.includes('--')
        ? e
        : `--${e}`
    return getComputedStyle(n).getPropertyValue(r)
  },
  Pa = (e) => !(!e || (e == null ? void 0 : e.indexOf('var(')) !== 0),
  If = (e, t = 1) => {
    let n = 0,
      r = 0,
      o = 0
    return (
      e.length == 4
        ? ((n = '0x' + e[1] + e[1]),
          (r = '0x' + e[2] + e[2]),
          (o = '0x' + e[3] + e[3]))
        : e.length == 7 &&
          ((n = '0x' + e[1] + e[2]),
          (r = '0x' + e[3] + e[4]),
          (o = '0x' + e[5] + e[6])),
      `rgba(${+n},${+r},${+o},${t})`
    )
  },
  I0 = (e) => t0.find((n) => n === e) != null,
  D0 = (e) => {
    const t = e.replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (r, o, i, l) => `${o}${o}${i}${i}${l}${l}`
      ),
      n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)
    if (!n) throw new Error(`Next UI: Unsupported ${e} color.`)
    return [
      Number.parseInt(n[1], 16),
      Number.parseInt(n[2], 16),
      Number.parseInt(n[3], 16),
    ]
  },
  B0 = (e) => {
    const t = Pa(e) ? _f(e) : e
    if (t.charAt(0) === '#') return D0(t)
    const n = t.replace(/ /g, ''),
      r = t.substr(0, 4),
      o = n.match(/\((.+)\)/)
    return r.startsWith('rgb') && o
      ? o[1].split(',').map((i) => Number.parseFloat(i))
      : (console.warn('NextUI: Only supports ["RGB", "RGBA", "HEX"] color.'),
        [0, 0, 0])
  },
  Zu = (e, t = 1) => {
    if (!e) return ''
    const n = Pa(e) ? _f(e) : e
    if (/#[a-fA-F0-9]{3,6}/g.test(n)) return If(n, t)
    if (!/^#|rgb|RGB/.test(n)) return n
    const [r, o, i] = B0(n)
    return `rgba(${r}, ${o}, ${i}, ${t > 1 ? 1 : t < 0 ? 0 : t})`
  },
  W0 = (e, t = 1) => {
    const [n, r, o] = e.split(',').map((i) => Number.parseFloat(i))
    return `rgba(${n}, ${r}, ${o}, ${t > 1 ? 1 : t < 0 ? 0 : t})`
  },
  Ju = {
    blue50: '#EDF5FF',
    blue100: '#E1EFFF',
    blue200: '#CEE4FE',
    blue300: '#B7D5F8',
    blue400: '#96C1F2',
    blue500: '#5EA2EF',
    blue600: '#0072F5',
    blue700: '#005FCC',
    blue800: '#004799',
    blue900: '#00254D',
  },
  H0 = {
    purple50: '#F7F2FD',
    purple100: '#F1E8FB',
    purple200: '#EADCF8',
    purple300: '#E0CBF5',
    purple400: '#D1B1F0',
    purple500: '#BC8EE9',
    purple600: '#7828C8',
    purple700: '#6622AA',
    purple800: '#4D1980',
    purple900: '#290E44',
  },
  A0 = {
    green50: '#F1FDF7',
    green100: '#E8FCF1',
    green200: '#DAFBE8',
    green300: '#C8F9DD',
    green400: '#ADF5CC',
    green500: '#88F1B6',
    green600: '#17C964',
    green700: '#13A452',
    green800: '#108944',
    green900: '#06371B',
  },
  j0 = {
    yellow50: '#FEF9F0',
    yellow100: '#FEF5E7',
    yellow200: '#FDEFD8',
    yellow300: '#FCE7C5',
    yellow400: '#FBDBA7',
    yellow500: '#F9CB80',
    yellow600: '#F5A524',
    yellow700: '#B97509',
    yellow800: '#925D07',
    yellow900: '#4E3104',
  },
  U0 = {
    red50: '#FEF0F5',
    red100: '#FEE7EF',
    red200: '#FDD8E5',
    red300: '#FCC5D8',
    red400: '#FAA8C5',
    red500: '#F881AB',
    red600: '#F31260',
    red700: '#B80A47',
    red800: '#910838',
    red900: '#4E041E',
  },
  V0 = {
    cyan50: '#F0FCFF',
    cyan100: '#E6FAFE',
    cyan200: '#D7F8FE',
    cyan300: '#C3F4FD',
    cyan400: '#A5EEFD',
    cyan500: '#7EE7FC',
    cyan600: '#06B7DB',
    cyan700: '#09AACD',
    cyan800: '#0E8AAA',
    cyan900: '#053B48',
  },
  K0 = {
    pink50: '#FFF0FB',
    pink100: '#FFE5F8',
    pink200: '#FFD6F3',
    pink300: '#FFC2EE',
    pink400: '#FFA3E5',
    pink500: '#FF7AD9',
    pink600: '#FF4ECD',
    pink700: '#D6009A',
    pink800: '#B80084',
    pink900: '#4D0037',
  },
  qu = {
    gray50: '#F1F3F5',
    gray100: '#ECEEF0',
    gray200: '#E6E8EB',
    gray300: '#DFE3E6',
    gray400: '#D7DBDF',
    gray500: '#C1C8CD',
    gray600: '#889096',
    gray700: '#7E868C',
    gray800: '#687076',
    gray900: '#11181C',
  },
  zr = {
    colors: {
      background: '$white',
      backgroundAlpha: 'rgba(255, 255, 255, 0.8)',
      foreground: '$black',
      backgroundContrast: '$white',
      ...Ju,
      ...H0,
      ...A0,
      ...j0,
      ...U0,
      ...V0,
      ...K0,
      ...qu,
      textLight: Zu(qu.gray900, 0.2),
      text: '$gray900',
      linkLight: Zu(Ju.blue600, 0.2),
      link: '$blue600',
      codeLight: '$pink100',
      code: '$pink600',
      selection: '$blue200',
      border: 'rgba(0, 0, 0, 0.15)',
    },
    shadows: {
      xs: '0 2px 8px 1px rgb(104 112 118 / 0.07), 0 1px 1px -1px rgb(104 112 118 / 0.04)',
      sm: '0 2px 8px 2px rgb(104 112 118 / 0.07), 0 2px 4px -1px rgb(104 112 118 / 0.04)',
      md: '0 12px 20px 6px rgb(104 112 118 / 0.08)',
      lg: '0 12px 34px 6px rgb(104 112 118 / 0.18)',
      xl: '0 25px 65px 0px rgb(104 112 118 / 0.35)',
    },
    dropShadows: {
      xs: 'drop-shadow(0 2px 4px rgb(104 112 118 / 0.07)) drop-shadow(0 1px 1px rgb(104 112 118 / 0.04))',
      sm: 'drop-shadow(0 2px 8px rgb(104 112 118 / 0.07)) drop-shadow(0 2px 4px rgb(104 112 118 / 0.04))',
      md: 'drop-shadow(0 4px 12px rgb(104 112 118 / 0.08)) drop-shadow(0 20px 8px rgb(104 112 118 / 0.04))',
      lg: 'drop-shadow(0 12px 24px rgb(104 112 118 / 0.15)) drop-shadow(0 12px 14px rgb(104 112 118 / 0.1))',
      xl: 'drop-shadow(0 25px 34px rgb(104 112 118 / 0.35))',
    },
  },
  Wt = R0({
    ...qt,
    theme: {
      ...qt.theme,
      shadows: { ...zr.shadows },
      dropShadows: { ...zr.dropShadows },
      colors: { ...qt.theme.colors, ...zr.colors },
    },
  })
Wt.createTheme
const te = Wt.styled,
  cn = Wt.css,
  G0 = Wt.globalCss,
  Ze = Wt.keyframes,
  Q0 = Wt.getCssText,
  Y0 = Wt.theme
Wt.config
const ss = { isDark: !1, theme: Y0, type: 'light' },
  X0 = _.createContext(ss),
  Z0 = X0,
  J0 = () => {
    const [e, t] = k.useState(!1)
    return (
      k.useEffect(() => {
        t(
          Boolean(
            typeof window < 'u' &&
              window.document &&
              window.document.createElement
          )
        )
      }, []),
      { isBrowser: e, isServer: !e }
    )
  },
  zi = !1,
  q0 = (e) => e && typeof e == 'object',
  eh = (e) => (q0(e) ? (e instanceof Array ? [...e] : { ...e }) : e),
  Df = (e = !1, t) => {
    const [n, r] = k.useState(e),
      [o, i] = k.useState(0),
      [l, s] = k.useState(0)
    return {
      visible: n,
      x: o,
      y: l,
      onClick: (a) => {
        if (!t.current) return
        const c = t.current.getBoundingClientRect()
        r(!0), i(a.clientX - c.left), s(a.clientY - c.top)
      },
      onCompleted: () => {
        r(!1), i(0), s(0)
      },
    }
  },
  rt = (e, t) => ((e.defaultProps = t), e)
function Bf(e) {
  var t,
    n,
    r = ''
  if (typeof e == 'string' || typeof e == 'number') r += e
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Bf(e[t])) && (r && (r += ' '), (r += n))
    else for (t in e) e[t] && (r && (r += ' '), (r += t))
  return r
}
function Ae(...e) {
  for (var t, n, r = 0, o = ''; r < e.length; )
    (t = e[r++]) && (n = Bf(t)) && (o && (o += ' '), (o += n))
  return o
}
const th = Ze({
    '0%': { opacity: 0, transform: 'scale(0.25)' },
    '30%': { opacity: 1 },
    '80%': { opacity: 0.5 },
    '100%': { transform: 'scale(28)', opacity: 0 },
  }),
  Y = te('div', {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    '& svg': {
      position: 'absolute',
      animation: `350ms linear ${th}`,
      animationFillMode: 'forwards',
      width: '$md',
      height: '$md',
    },
  }),
  nh = ({
    visible: e,
    x: t,
    y: n,
    color: r,
    onCompleted: o,
    className: i,
    ...l
  }) => {
    const s = k.useRef(null),
      a = Number.isNaN(+n) ? 0 : n - 10,
      c = Number.isNaN(+t) ? 0 : t - 10
    return (
      k.useEffect(() => {
        let g = s.current
        if (g)
          return (
            g.addEventListener('animationend', o),
            () => {
              g && g.removeEventListener('animationend', o)
            }
          )
      }),
      e
        ? F(Y, {
            ref: s,
            className: Ae('nextui-drip', i),
            ...l,
            children: F('svg', {
              height: '20',
              style: { top: a, left: c },
              viewBox: '0 0 20 20',
              width: '20',
              children: F('g', {
                fill: 'none',
                fillRule: 'evenodd',
                stroke: 'none',
                strokeWidth: '1',
                children: F('g', {
                  className: 'nextui-drip-filler',
                  fill: r,
                  children: F('rect', {
                    height: '100%',
                    rx: '10',
                    width: '100%',
                  }),
                }),
              }),
            }),
          })
        : null
    )
  },
  rh = _.memo(nh),
  Wf = rt(rh, { visible: !1, x: 0, y: 0, className: '' }),
  oh = G0({
    '*, *:before, *:after': {
      boxSizing: 'border-box',
      textRendering: 'geometricPrecision',
      WebkitTapHighlightColor: 'transparent',
    },
    html: { fontSize: '$base' },
    body: {
      margin: 0,
      padding: 0,
      minHeight: '100%',
      position: 'relative',
      overflowX: 'hidden',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
      fontSize: '$base',
      lineHeight: '$md',
      fontFamily: '$sans',
    },
    'html, body': { backgroundColor: '$background', color: '$text' },
    'p, small': {
      color: 'inherit',
      letterSpacing: '$tighter',
      fontWeight: '$normal',
      fontFamily: '$sans',
    },
    p: { fontSize: '$base', lineHeight: '$lg' },
    small: { margin: 0, lineHeight: '$xs', fontSize: '$xs' },
    b: { fontWeight: '$semibold' },
    span: { fontSize: 'inherit', color: 'inherit', fontWeight: 'inherit' },
    img: { maxWidth: '100%' },
    a: {
      cursor: 'pointer',
      fontSize: 'inherit',
      WebkitTouchCallout: 'none',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      WebkitBoxAlign: 'center',
      alignItems: 'center',
      color: '$link',
      textDecoration: 'none',
    },
    'a:hover': { textDecoration: 'none' },
    'ul,ol': {
      padding: 0,
      listStyleType: 'none',
      margin: '$sm $sm $sm $lg',
      color: '$foreground',
    },
    ol: { listStyleType: 'decimal' },
    li: { marginBottom: '$5', fontSize: '$base', lineHeight: '$lg' },
    'h1,h2,h3,h4,h5,h6': { color: 'inherit', margin: '0 0 $5 0' },
    h1: {
      letterSpacing: '$tighter',
      fontSize: '$5xl',
      lineHeight: '$md',
      fontWeight: '$bold',
    },
    h2: {
      letterSpacing: '$tighter',
      fontSize: '$4xl',
      fontWeight: '$semibold',
    },
    h3: {
      letterSpacing: '$tighter',
      fontSize: '$2xl',
      fontWeight: '$semibold',
    },
    h4: { letterSpacing: '$tighter', fontSize: '$xl', fontWeight: '$semibold' },
    h5: { letterSpacing: '$tight', fontSize: '$md', fontWeight: '$semibold' },
    h6: { letterSpacing: '$tight', fontSize: '$sm', fontWeight: '$semibold' },
    'button, input, select,textarea': {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      color: 'inherit',
      margin: 0,
    },
    'button:focus, input:focus, select:focus, textarea:focus': {
      outline: 'none',
    },
    code: {
      color: '$code',
      padding: '$1 $2',
      borderRadius: '$xs',
      bg: '$codeLight',
      fontFamily: '$mono',
      fontSize: '$sm',
      whiteSpace: 'pre-wrap',
      transition: 'opacity 0.25s ease 0s',
    },
    'code:hover': { opacity: 0.8 },
    pre: {
      overflow: 'auto',
      whiteSpace: 'pre',
      textAlign: 'left',
      fontSize: '$sm',
      borderRadius: '$lg',
      padding: '$md $lg',
      margin: '$lg 0',
      fontFamily: '$mono',
      lineHeight: '$md',
      webkitOverflowScrolling: 'touch',
    },
    'pre code': {
      color: '$foreground',
      fontSize: '$sm',
      lineHeight: '$sm',
      whiteSpace: 'pre',
    },
    'pre code:before,pre code:after': { display: 'none' },
    'pre p': { margin: 0 },
    'pre::-webkit-scrollbar': {
      display: 'none',
      width: 0,
      height: 0,
      background: 'transparent',
    },
    hr: {
      background: '$border',
      borderColor: 'transparent',
      borderWidth: '0px',
      borderStyle: 'none',
      height: '1px',
    },
    details: { backgroundColor: '$accents1', border: 'none' },
    'details:focus, details:hover, details:active': { outline: 'none' },
    summary: {
      cursor: 'pointer',
      userSelect: 'none',
      listStyle: 'none',
      outline: 'none',
    },
    'summary::-webkit-details-marker, summary::before': { display: 'none' },
    'summary::-moz-list-bullet': { fontSize: 0 },
    'summary:focus, summary:hover, summary:active': {
      outline: 'none',
      listStyle: 'none',
    },
    '::selection': { backgroundColor: '$selection' },
    blockquote: {
      padding: '$md $lg',
      color: '$accents7',
      backgroundColor: '$accents0',
      borderRadius: '$lg',
      margin: '$10 0',
    },
    'blockquote *:first-child': { marginTop: 0 },
    'blockquote *:last-child': { marginBottom: 0 },
    kbd: {
      width: 'fit-content',
      textAlign: 'center',
      display: 'inline-block',
      color: '$accents8',
      bg: '$accents0',
      border: '1px solid $border',
      boxShadow: '0 0 1px 0 rgb(0 0 0 / 14%)',
      fontFamily: '$sans',
      borderRadius: '5px',
      padding: '$1 $3',
      mx: '$1',
      lineHeight: '$sm',
      fontSize: '$sm',
    },
    'kbd + kbd': { ml: '$2' },
    'dl, dd, hr, figure, p': { margin: 0 },
  }),
  ih = ({ children: e }) => (oh(), F(_.Fragment, { children: e })),
  Hf = _.memo(ih)
Hf.flush = () =>
  F('style', { dangerouslySetInnerHTML: { __html: Q0() }, id: 'stitches' })
const lh = Hf,
  Af = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 },
  ec = _.createContext(Af)
function sh(e) {
  let t = k.useContext(ec),
    n = k.useMemo(
      () => ({
        prefix: t === Af ? '' : `${t.prefix}-${++t.current}`,
        current: 0,
      }),
      [t]
    )
  return _.createElement(ec.Provider, { value: n }, e.children)
}
function as(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
function jf(e) {
  var t,
    n,
    r = ''
  if (typeof e == 'string' || typeof e == 'number') r += e
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = jf(e[t])) && (r && (r += ' '), (r += n))
    else for (t in e) e[t] && (r && (r += ' '), (r += t))
  return r
}
function Uf() {
  for (var e, t, n = 0, r = ''; n < arguments.length; )
    (e = arguments[n++]) && (t = jf(e)) && (r && (r += ' '), (r += t))
  return r
}
const Vf = typeof window < 'u' ? _.useLayoutEffect : () => {}
let tc = new Map()
function ah(e, t) {
  if (e === t) return e
  let n = tc.get(e)
  if (n) return n(t), t
  let r = tc.get(t)
  return r ? (r(e), e) : t
}
function uh(...e) {
  return (...t) => {
    for (let n of e) typeof n == 'function' && n(...t)
  }
}
function Fi(...e) {
  let t = { ...e[0] }
  for (let n = 1; n < e.length; n++) {
    let r = e[n]
    for (let o in r) {
      let i = t[o],
        l = r[o]
      typeof i == 'function' &&
      typeof l == 'function' &&
      o[0] === 'o' &&
      o[1] === 'n' &&
      o.charCodeAt(2) >= 65 &&
      o.charCodeAt(2) <= 90
        ? (t[o] = uh(i, l))
        : (o === 'className' || o === 'UNSAFE_className') &&
          typeof i == 'string' &&
          typeof l == 'string'
        ? (t[o] = Uf(i, l))
        : o === 'id' && i && l
        ? (t.id = ah(i, l))
        : (t[o] = l !== void 0 ? l : i)
    }
  }
  return t
}
function xo(e) {
  if (ch()) e.focus({ preventScroll: !0 })
  else {
    let t = dh(e)
    e.focus(), fh(t)
  }
}
let bo = null
function ch() {
  if (bo == null) {
    bo = !1
    try {
      var e = document.createElement('div')
      e.focus({
        get preventScroll() {
          return (bo = !0), !0
        },
      })
    } catch {}
  }
  return bo
}
function dh(e) {
  for (
    var t = e.parentNode,
      n = [],
      r = document.scrollingElement || document.documentElement;
    t instanceof HTMLElement && t !== r;

  )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) &&
      n.push({ element: t, scrollTop: t.scrollTop, scrollLeft: t.scrollLeft }),
      (t = t.parentNode)
  return (
    r instanceof HTMLElement &&
      n.push({ element: r, scrollTop: r.scrollTop, scrollLeft: r.scrollLeft }),
    n
  )
}
function fh(e) {
  for (let { element: t, scrollTop: n, scrollLeft: r } of e)
    (t.scrollTop = n), (t.scrollLeft = r)
}
let xn = new Map(),
  us = new Set()
function nc() {
  if (typeof window > 'u') return
  let e = (n) => {
      let r = xn.get(n.target)
      r ||
        ((r = new Set()),
        xn.set(n.target, r),
        n.target.addEventListener('transitioncancel', t)),
        r.add(n.propertyName)
    },
    t = (n) => {
      let r = xn.get(n.target)
      if (
        r &&
        (r.delete(n.propertyName),
        r.size === 0 &&
          (n.target.removeEventListener('transitioncancel', t),
          xn.delete(n.target)),
        xn.size === 0)
      ) {
        for (let o of us) o()
        us.clear()
      }
    }
  document.body.addEventListener('transitionrun', e),
    document.body.addEventListener('transitionend', t)
}
typeof document < 'u' &&
  (document.readyState !== 'loading'
    ? nc()
    : document.addEventListener('DOMContentLoaded', nc))
function ph(e) {
  requestAnimationFrame(() => {
    xn.size === 0 ? e() : us.add(e)
  })
}
function gh() {
  let e = k.useRef(new Map()),
    t = k.useCallback((o, i, l, s) => {
      let a =
        s != null && s.once
          ? (...c) => {
              e.current.delete(l), l(...c)
            }
          : l
      e.current.set(l, { type: i, eventTarget: o, fn: a, options: s }),
        o.addEventListener(i, l, s)
    }, []),
    n = k.useCallback((o, i, l, s) => {
      var a
      let c =
        ((a = e.current.get(l)) === null || a === void 0 ? void 0 : a.fn) || l
      o.removeEventListener(i, c, s), e.current.delete(l)
    }, []),
    r = k.useCallback(() => {
      e.current.forEach((o, i) => {
        n(o.eventTarget, o.type, i, o.options)
      })
    }, [n])
  return (
    k.useEffect(() => r, [r]),
    {
      addGlobalListener: t,
      removeGlobalListener: n,
      removeAllGlobalListeners: r,
    }
  )
}
function mh(e, t) {
  Vf(() => {
    if (e && e.ref && t)
      return (
        (e.ref.current = t.current),
        () => {
          e.ref.current = null
        }
      )
  }, [e, t])
}
function hh(e) {
  var t
  return typeof window > 'u' || window.navigator == null
    ? !1
    : ((t = window.navigator.userAgentData) === null || t === void 0
        ? void 0
        : t.brands.some((n) => e.test(n.brand))) ||
        e.test(window.navigator.userAgent)
}
function Ta(e) {
  var t
  return typeof window < 'u' && window.navigator != null
    ? e.test(
        ((t = window.navigator.userAgentData) === null || t === void 0
          ? void 0
          : t.platform) || window.navigator.platform
      )
    : !1
}
function Kf() {
  return Ta(/^Mac/i)
}
function yh() {
  return Ta(/^iPhone/i)
}
function vh() {
  return Ta(/^iPad/i) || (Kf() && navigator.maxTouchPoints > 1)
}
function Gf() {
  return yh() || vh()
}
function $h() {
  return hh(/Android/i)
}
function cs(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : $h() && e.pointerType
    ? e.type === 'click' && e.buttons === 1
    : e.detail === 0 && !e.pointerType
}
function wh(e) {
  return (
    (e.width === 0 && e.height === 0) ||
    (e.width === 1 &&
      e.height === 1 &&
      e.pressure === 0 &&
      e.detail === 0 &&
      e.pointerType === 'mouse')
  )
}
let In = 'default',
  ds = '',
  Bo = new WeakMap()
function rc(e) {
  Gf()
    ? (In === 'default' &&
        ((ds = document.documentElement.style.webkitUserSelect),
        (document.documentElement.style.webkitUserSelect = 'none')),
      (In = 'disabled'))
    : (e instanceof HTMLElement || e instanceof SVGElement) &&
      (Bo.set(e, e.style.userSelect), (e.style.userSelect = 'none'))
}
function ko(e) {
  if (Gf()) {
    if (In !== 'disabled') return
    ;(In = 'restoring'),
      setTimeout(() => {
        ph(() => {
          In === 'restoring' &&
            (document.documentElement.style.webkitUserSelect === 'none' &&
              (document.documentElement.style.webkitUserSelect = ds || ''),
            (ds = ''),
            (In = 'default'))
        })
      }, 300)
  } else if (
    (e instanceof HTMLElement || e instanceof SVGElement) &&
    e &&
    Bo.has(e)
  ) {
    let t = Bo.get(e)
    e.style.userSelect === 'none' && (e.style.userSelect = t),
      e.getAttribute('style') === '' && e.removeAttribute('style'),
      Bo.delete(e)
  }
}
const Qf = _.createContext(null)
Qf.displayName = 'PressResponderContext'
function Sh(e) {
  let t = k.useContext(Qf)
  if (t) {
    let { register: n, ...r } = t
    ;(e = Fi(r, e)), n()
  }
  return mh(t, e.ref), e
}
function xh(e) {
  let {
      onPress: t,
      onPressChange: n,
      onPressStart: r,
      onPressEnd: o,
      onPressUp: i,
      isDisabled: l,
      isPressed: s,
      preventFocusOnPress: a,
      shouldCancelOnPointerExit: c,
      allowTextSelectionOnPress: g,
      ref: h,
      ...p
    } = Sh(e),
    m = k.useRef(null)
  m.current = {
    onPress: t,
    onPressChange: n,
    onPressStart: r,
    onPressEnd: o,
    onPressUp: i,
    isDisabled: l,
    shouldCancelOnPointerExit: c,
  }
  let [w, S] = k.useState(!1),
    L = k.useRef({
      isPressed: !1,
      ignoreEmulatedMouseEvents: !1,
      ignoreClickAfterPress: !1,
      didFirePressStart: !1,
      activePointerId: null,
      target: null,
      isOverTarget: !1,
      pointerType: null,
    }),
    { addGlobalListener: f, removeAllGlobalListeners: d } = gh(),
    y = k.useMemo(() => {
      let u = L.current,
        E = (v, I) => {
          let { onPressStart: $, onPressChange: x, isDisabled: ae } = m.current
          ae ||
            u.didFirePressStart ||
            ($ &&
              $({
                type: 'pressstart',
                pointerType: I,
                target: v.currentTarget,
                shiftKey: v.shiftKey,
                metaKey: v.metaKey,
                ctrlKey: v.ctrlKey,
                altKey: v.altKey,
              }),
            x && x(!0),
            (u.didFirePressStart = !0),
            S(!0))
        },
        b = (v, I, $ = !0) => {
          let {
            onPressEnd: x,
            onPressChange: ae,
            onPress: fe,
            isDisabled: Le,
          } = m.current
          u.didFirePressStart &&
            ((u.ignoreClickAfterPress = !0),
            (u.didFirePressStart = !1),
            x &&
              x({
                type: 'pressend',
                pointerType: I,
                target: v.currentTarget,
                shiftKey: v.shiftKey,
                metaKey: v.metaKey,
                ctrlKey: v.ctrlKey,
                altKey: v.altKey,
              }),
            ae && ae(!1),
            S(!1),
            fe &&
              $ &&
              !Le &&
              fe({
                type: 'press',
                pointerType: I,
                target: v.currentTarget,
                shiftKey: v.shiftKey,
                metaKey: v.metaKey,
                ctrlKey: v.ctrlKey,
                altKey: v.altKey,
              }))
        },
        P = (v, I) => {
          let { onPressUp: $, isDisabled: x } = m.current
          x ||
            ($ &&
              $({
                type: 'pressup',
                pointerType: I,
                target: v.currentTarget,
                shiftKey: v.shiftKey,
                metaKey: v.metaKey,
                ctrlKey: v.ctrlKey,
                altKey: v.altKey,
              }))
        },
        C = (v) => {
          u.isPressed &&
            (u.isOverTarget && b(it(u.target, v), u.pointerType, !1),
            (u.isPressed = !1),
            (u.isOverTarget = !1),
            (u.activePointerId = null),
            (u.pointerType = null),
            d(),
            g || ko(u.target))
        },
        R = {
          onKeyDown(v) {
            il(v.nativeEvent, v.currentTarget) &&
            v.currentTarget.contains(v.target)
              ? (ic(v.target, v.key) && v.preventDefault(),
                v.stopPropagation(),
                !u.isPressed &&
                  !v.repeat &&
                  ((u.target = v.currentTarget),
                  (u.isPressed = !0),
                  E(v, 'keyboard'),
                  f(document, 'keyup', O, !1)))
              : v.key === 'Enter' && fs(v.currentTarget) && v.stopPropagation()
          },
          onKeyUp(v) {
            il(v.nativeEvent, v.currentTarget) &&
              !v.repeat &&
              v.currentTarget.contains(v.target) &&
              P(it(u.target, v), 'keyboard')
          },
          onClick(v) {
            ;(v && !v.currentTarget.contains(v.target)) ||
              (v &&
                v.button === 0 &&
                (v.stopPropagation(),
                l && v.preventDefault(),
                !u.ignoreClickAfterPress &&
                  !u.ignoreEmulatedMouseEvents &&
                  (u.pointerType === 'virtual' || cs(v.nativeEvent)) &&
                  (!l && !a && xo(v.currentTarget),
                  E(v, 'virtual'),
                  P(v, 'virtual'),
                  b(v, 'virtual')),
                (u.ignoreEmulatedMouseEvents = !1),
                (u.ignoreClickAfterPress = !1)))
          },
        },
        O = (v) => {
          if (u.isPressed && il(v, u.target)) {
            ic(v.target, v.key) && v.preventDefault(),
              v.stopPropagation(),
              (u.isPressed = !1)
            let I = v.target
            b(it(u.target, v), 'keyboard', u.target.contains(I)),
              d(),
              u.target instanceof HTMLElement &&
                u.target.contains(I) &&
                (fs(u.target) || u.target.getAttribute('role') === 'link') &&
                u.target.click()
          }
        }
      if (typeof PointerEvent < 'u') {
        ;(R.onPointerDown = (x) => {
          if (!(x.button !== 0 || !x.currentTarget.contains(x.target))) {
            if (wh(x.nativeEvent)) {
              u.pointerType = 'virtual'
              return
            }
            ll(x.currentTarget) && x.preventDefault(),
              (u.pointerType = x.pointerType),
              x.stopPropagation(),
              u.isPressed ||
                ((u.isPressed = !0),
                (u.isOverTarget = !0),
                (u.activePointerId = x.pointerId),
                (u.target = x.currentTarget),
                !l && !a && xo(x.currentTarget),
                g || rc(u.target),
                E(x, u.pointerType),
                f(document, 'pointermove', v, !1),
                f(document, 'pointerup', I, !1),
                f(document, 'pointercancel', $, !1))
          }
        }),
          (R.onMouseDown = (x) => {
            x.currentTarget.contains(x.target) &&
              x.button === 0 &&
              (ll(x.currentTarget) && x.preventDefault(), x.stopPropagation())
          }),
          (R.onPointerUp = (x) => {
            !x.currentTarget.contains(x.target) ||
              u.pointerType === 'virtual' ||
              (x.button === 0 &&
                yn(x, x.currentTarget) &&
                P(x, u.pointerType || x.pointerType))
          })
        let v = (x) => {
            x.pointerId === u.activePointerId &&
              (yn(x, u.target)
                ? u.isOverTarget ||
                  ((u.isOverTarget = !0), E(it(u.target, x), u.pointerType))
                : u.isOverTarget &&
                  ((u.isOverTarget = !1),
                  b(it(u.target, x), u.pointerType, !1),
                  m.current.shouldCancelOnPointerExit && C(x)))
          },
          I = (x) => {
            x.pointerId === u.activePointerId &&
              u.isPressed &&
              x.button === 0 &&
              (yn(x, u.target)
                ? b(it(u.target, x), u.pointerType)
                : u.isOverTarget && b(it(u.target, x), u.pointerType, !1),
              (u.isPressed = !1),
              (u.isOverTarget = !1),
              (u.activePointerId = null),
              (u.pointerType = null),
              d(),
              g || ko(u.target))
          },
          $ = (x) => {
            C(x)
          }
        R.onDragStart = (x) => {
          x.currentTarget.contains(x.target) && C(x)
        }
      } else {
        ;(R.onMouseDown = ($) => {
          $.button !== 0 ||
            !$.currentTarget.contains($.target) ||
            (ll($.currentTarget) && $.preventDefault(),
            $.stopPropagation(),
            !u.ignoreEmulatedMouseEvents &&
              ((u.isPressed = !0),
              (u.isOverTarget = !0),
              (u.target = $.currentTarget),
              (u.pointerType = cs($.nativeEvent) ? 'virtual' : 'mouse'),
              !l && !a && xo($.currentTarget),
              E($, u.pointerType),
              f(document, 'mouseup', v, !1)))
        }),
          (R.onMouseEnter = ($) => {
            $.currentTarget.contains($.target) &&
              ($.stopPropagation(),
              u.isPressed &&
                !u.ignoreEmulatedMouseEvents &&
                ((u.isOverTarget = !0), E($, u.pointerType)))
          }),
          (R.onMouseLeave = ($) => {
            $.currentTarget.contains($.target) &&
              ($.stopPropagation(),
              u.isPressed &&
                !u.ignoreEmulatedMouseEvents &&
                ((u.isOverTarget = !1),
                b($, u.pointerType, !1),
                m.current.shouldCancelOnPointerExit && C($)))
          }),
          (R.onMouseUp = ($) => {
            $.currentTarget.contains($.target) &&
              !u.ignoreEmulatedMouseEvents &&
              $.button === 0 &&
              P($, u.pointerType)
          })
        let v = ($) => {
          if ($.button === 0) {
            if (((u.isPressed = !1), d(), u.ignoreEmulatedMouseEvents)) {
              u.ignoreEmulatedMouseEvents = !1
              return
            }
            yn($, u.target)
              ? b(it(u.target, $), u.pointerType)
              : u.isOverTarget && b(it(u.target, $), u.pointerType, !1),
              (u.isOverTarget = !1)
          }
        }
        ;(R.onTouchStart = ($) => {
          if (!$.currentTarget.contains($.target)) return
          $.stopPropagation()
          let x = bh($.nativeEvent)
          x &&
            ((u.activePointerId = x.identifier),
            (u.ignoreEmulatedMouseEvents = !0),
            (u.isOverTarget = !0),
            (u.isPressed = !0),
            (u.target = $.currentTarget),
            (u.pointerType = 'touch'),
            !l && !a && xo($.currentTarget),
            g || rc(u.target),
            E($, u.pointerType),
            f(window, 'scroll', I, !0))
        }),
          (R.onTouchMove = ($) => {
            if (
              !$.currentTarget.contains($.target) ||
              ($.stopPropagation(), !u.isPressed)
            )
              return
            let x = oc($.nativeEvent, u.activePointerId)
            x && yn(x, $.currentTarget)
              ? u.isOverTarget || ((u.isOverTarget = !0), E($, u.pointerType))
              : u.isOverTarget &&
                ((u.isOverTarget = !1),
                b($, u.pointerType, !1),
                m.current.shouldCancelOnPointerExit && C($))
          }),
          (R.onTouchEnd = ($) => {
            if (
              !$.currentTarget.contains($.target) ||
              ($.stopPropagation(), !u.isPressed)
            )
              return
            let x = oc($.nativeEvent, u.activePointerId)
            x && yn(x, $.currentTarget)
              ? (P($, u.pointerType), b($, u.pointerType))
              : u.isOverTarget && b($, u.pointerType, !1),
              (u.isPressed = !1),
              (u.activePointerId = null),
              (u.isOverTarget = !1),
              (u.ignoreEmulatedMouseEvents = !0),
              g || ko(u.target),
              d()
          }),
          (R.onTouchCancel = ($) => {
            $.currentTarget.contains($.target) &&
              ($.stopPropagation(), u.isPressed && C($))
          })
        let I = ($) => {
          u.isPressed &&
            $.target.contains(u.target) &&
            C({
              currentTarget: u.target,
              shiftKey: !1,
              ctrlKey: !1,
              metaKey: !1,
              altKey: !1,
            })
        }
        R.onDragStart = ($) => {
          $.currentTarget.contains($.target) && C($)
        }
      }
      return R
    }, [f, l, a, d, g])
  return (
    k.useEffect(
      () => () => {
        g || ko(L.current.target)
      },
      [g]
    ),
    { isPressed: s || w, pressProps: Fi(p, y) }
  )
}
function fs(e) {
  return e.tagName === 'A' && e.hasAttribute('href')
}
function il(e, t) {
  const { key: n, code: r } = e,
    o = t,
    i = o.getAttribute('role')
  return (
    (n === 'Enter' || n === ' ' || n === 'Spacebar' || r === 'Space') &&
    !(
      (o instanceof HTMLInputElement && !Yf(o, n)) ||
      o instanceof HTMLTextAreaElement ||
      o.isContentEditable
    ) &&
    (!fs(o) || (i === 'button' && n !== 'Enter')) &&
    !(i === 'link' && n !== 'Enter')
  )
}
function bh(e) {
  const { targetTouches: t } = e
  return t.length > 0 ? t[0] : null
}
function oc(e, t) {
  const n = e.changedTouches
  for (let r = 0; r < n.length; r++) {
    const o = n[r]
    if (o.identifier === t) return o
  }
  return null
}
function it(e, t) {
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
  }
}
function kh(e) {
  let t = e.width / 2 || e.radiusX || 0,
    n = e.height / 2 || e.radiusY || 0
  return {
    top: e.clientY - n,
    right: e.clientX + t,
    bottom: e.clientY + n,
    left: e.clientX - t,
  }
}
function Ch(e, t) {
  return !(
    e.left > t.right ||
    t.left > e.right ||
    e.top > t.bottom ||
    t.top > e.bottom
  )
}
function yn(e, t) {
  let n = t.getBoundingClientRect(),
    r = kh(e)
  return Ch(n, r)
}
function ll(e) {
  return !(e instanceof HTMLElement) || !e.draggable
}
function ic(e, t) {
  return e instanceof HTMLInputElement
    ? !Yf(e, t)
    : e instanceof HTMLButtonElement
    ? e.type !== 'submit'
    : !0
}
const Eh = new Set([
  'checkbox',
  'radio',
  'range',
  'color',
  'file',
  'image',
  'button',
  'submit',
  'reset',
])
function Yf(e, t) {
  return e.type === 'checkbox' || e.type === 'radio'
    ? t === ' '
    : Eh.has(e.type)
}
let Ph = class {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented
  }
  preventDefault() {
    ;(this.defaultPrevented = !0), this.nativeEvent.preventDefault()
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0)
  }
  isPropagationStopped() {
    return !1
  }
  persist() {}
  constructor(t, n) {
    ;(this.nativeEvent = n),
      (this.target = n.target),
      (this.currentTarget = n.currentTarget),
      (this.relatedTarget = n.relatedTarget),
      (this.bubbles = n.bubbles),
      (this.cancelable = n.cancelable),
      (this.defaultPrevented = n.defaultPrevented),
      (this.eventPhase = n.eventPhase),
      (this.isTrusted = n.isTrusted),
      (this.timeStamp = n.timeStamp),
      (this.type = t)
  }
}
function Xf(e) {
  let t = k.useRef({ isFocused: !1, onBlur: e, observer: null })
  return (
    (t.current.onBlur = e),
    Vf(() => {
      const n = t.current
      return () => {
        n.observer && (n.observer.disconnect(), (n.observer = null))
      }
    }, []),
    k.useCallback((n) => {
      if (
        n.target instanceof HTMLButtonElement ||
        n.target instanceof HTMLInputElement ||
        n.target instanceof HTMLTextAreaElement ||
        n.target instanceof HTMLSelectElement
      ) {
        t.current.isFocused = !0
        let r = n.target,
          o = (i) => {
            var l, s
            ;(t.current.isFocused = !1),
              r.disabled &&
                ((s = (l = t.current).onBlur) === null ||
                  s === void 0 ||
                  s.call(l, new Ph('blur', i))),
              t.current.observer &&
                (t.current.observer.disconnect(), (t.current.observer = null))
          }
        r.addEventListener('focusout', o, { once: !0 }),
          (t.current.observer = new MutationObserver(() => {
            t.current.isFocused &&
              r.disabled &&
              (t.current.observer.disconnect(),
              r.dispatchEvent(new FocusEvent('blur')),
              r.dispatchEvent(new FocusEvent('focusout', { bubbles: !0 })))
          })),
          t.current.observer.observe(r, {
            attributes: !0,
            attributeFilter: ['disabled'],
          })
      }
    }, [])
  )
}
function Th(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e
  const i = k.useCallback(
      (a) => {
        if (a.target === a.currentTarget) return r && r(a), o && o(!1), !0
      },
      [r, o]
    ),
    l = Xf(i),
    s = k.useCallback(
      (a) => {
        a.target === a.currentTarget && (n && n(a), o && o(!0), l(a))
      },
      [o, n, l]
    )
  return {
    focusProps: {
      onFocus: !t && (n || o || r) ? s : void 0,
      onBlur: !t && (r || o) ? i : null,
    },
  }
}
let no = null,
  ps = new Set(),
  lc = !1,
  ln = !1,
  gs = !1
const Lh = { Tab: !0, Escape: !0 }
function La(e, t) {
  for (let n of ps) n(e, t)
}
function zh(e) {
  return !(
    e.metaKey ||
    (!Kf() && e.altKey) ||
    e.ctrlKey ||
    e.key === 'Control' ||
    e.key === 'Shift' ||
    e.key === 'Meta'
  )
}
function sc(e) {
  ;(ln = !0), zh(e) && ((no = 'keyboard'), La('keyboard', e))
}
function vn(e) {
  ;(no = 'pointer'),
    (e.type === 'mousedown' || e.type === 'pointerdown') &&
      ((ln = !0), La('pointer', e))
}
function Fh(e) {
  cs(e) && ((ln = !0), (no = 'virtual'))
}
function Rh(e) {
  e.target === window ||
    e.target === document ||
    (!ln && !gs && ((no = 'virtual'), La('virtual', e)), (ln = !1), (gs = !1))
}
function Mh() {
  ;(ln = !1), (gs = !0)
}
function ms() {
  if (typeof window > 'u' || lc) return
  let e = HTMLElement.prototype.focus
  ;(HTMLElement.prototype.focus = function () {
    ;(ln = !0), e.apply(this, arguments)
  }),
    document.addEventListener('keydown', sc, !0),
    document.addEventListener('keyup', sc, !0),
    document.addEventListener('click', Fh, !0),
    window.addEventListener('focus', Rh, !0),
    window.addEventListener('blur', Mh, !1),
    typeof PointerEvent < 'u'
      ? (document.addEventListener('pointerdown', vn, !0),
        document.addEventListener('pointermove', vn, !0),
        document.addEventListener('pointerup', vn, !0))
      : (document.addEventListener('mousedown', vn, !0),
        document.addEventListener('mousemove', vn, !0),
        document.addEventListener('mouseup', vn, !0)),
    (lc = !0)
}
typeof document < 'u' &&
  (document.readyState !== 'loading'
    ? ms()
    : document.addEventListener('DOMContentLoaded', ms))
function Zf() {
  return no !== 'pointer'
}
function Nh(e, t, n) {
  return !(e && t === 'keyboard' && n instanceof KeyboardEvent && !Lh[n.key])
}
function Oh(e, t, n) {
  ms(),
    k.useEffect(() => {
      let r = (o, i) => {
        Nh(n == null ? void 0 : n.isTextInput, o, i) && e(Zf())
      }
      return (
        ps.add(r),
        () => {
          ps.delete(r)
        }
      )
    }, t)
}
function _h(e) {
  let {
      isDisabled: t,
      onBlurWithin: n,
      onFocusWithin: r,
      onFocusWithinChange: o,
    } = e,
    i = k.useRef({ isFocusWithin: !1 }),
    l = k.useCallback(
      (c) => {
        i.current.isFocusWithin &&
          !c.currentTarget.contains(c.relatedTarget) &&
          ((i.current.isFocusWithin = !1), n && n(c), o && o(!1))
      },
      [n, o, i]
    ),
    s = Xf(l),
    a = k.useCallback(
      (c) => {
        i.current.isFocusWithin ||
          (r && r(c), o && o(!0), (i.current.isFocusWithin = !0), s(c))
      },
      [r, o, s]
    )
  return t
    ? { focusWithinProps: { onFocus: null, onBlur: null } }
    : { focusWithinProps: { onFocus: a, onBlur: l } }
}
let fi = !1,
  sl = 0
function hs() {
  ;(fi = !0),
    setTimeout(() => {
      fi = !1
    }, 50)
}
function ac(e) {
  e.pointerType === 'touch' && hs()
}
function Ih() {
  if (!(typeof document > 'u'))
    return (
      typeof PointerEvent < 'u'
        ? document.addEventListener('pointerup', ac)
        : document.addEventListener('touchend', hs),
      sl++,
      () => {
        sl--,
          !(sl > 0) &&
            (typeof PointerEvent < 'u'
              ? document.removeEventListener('pointerup', ac)
              : document.removeEventListener('touchend', hs))
      }
    )
}
function Jf(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e,
    [i, l] = k.useState(!1),
    s = k.useRef({
      isHovered: !1,
      ignoreEmulatedMouseEvents: !1,
      pointerType: '',
      target: null,
    }).current
  k.useEffect(Ih, [])
  let { hoverProps: a, triggerHoverEnd: c } = k.useMemo(() => {
    let g = (m, w) => {
        if (
          ((s.pointerType = w),
          o ||
            w === 'touch' ||
            s.isHovered ||
            !m.currentTarget.contains(m.target))
        )
          return
        s.isHovered = !0
        let S = m.currentTarget
        ;(s.target = S),
          t && t({ type: 'hoverstart', target: S, pointerType: w }),
          n && n(!0),
          l(!0)
      },
      h = (m, w) => {
        if (
          ((s.pointerType = ''),
          (s.target = null),
          w === 'touch' || !s.isHovered)
        )
          return
        s.isHovered = !1
        let S = m.currentTarget
        r && r({ type: 'hoverend', target: S, pointerType: w }),
          n && n(!1),
          l(!1)
      },
      p = {}
    return (
      typeof PointerEvent < 'u'
        ? ((p.onPointerEnter = (m) => {
            ;(fi && m.pointerType === 'mouse') || g(m, m.pointerType)
          }),
          (p.onPointerLeave = (m) => {
            !o && m.currentTarget.contains(m.target) && h(m, m.pointerType)
          }))
        : ((p.onTouchStart = () => {
            s.ignoreEmulatedMouseEvents = !0
          }),
          (p.onMouseEnter = (m) => {
            !s.ignoreEmulatedMouseEvents && !fi && g(m, 'mouse'),
              (s.ignoreEmulatedMouseEvents = !1)
          }),
          (p.onMouseLeave = (m) => {
            !o && m.currentTarget.contains(m.target) && h(m, 'mouse')
          })),
      { hoverProps: p, triggerHoverEnd: h }
    )
  }, [t, n, r, o, s])
  return (
    k.useEffect(() => {
      o && c({ currentTarget: s.target }, s.pointerType)
    }, [o]),
    { hoverProps: a, isHovered: i }
  )
}
const ys = _.createContext(null)
function Dh(e) {
  let { children: t } = e,
    n = k.useContext(ys),
    [r, o] = k.useState(0),
    i = k.useMemo(
      () => ({
        parent: n,
        modalCount: r,
        addModal() {
          o((l) => l + 1), n && n.addModal()
        },
        removeModal() {
          o((l) => l - 1), n && n.removeModal()
        },
      }),
      [n, r]
    )
  return _.createElement(ys.Provider, { value: i }, t)
}
function Bh() {
  let e = k.useContext(ys)
  return {
    modalProviderProps: { 'aria-hidden': e && e.modalCount > 0 ? !0 : null },
  }
}
function Wh(e) {
  let { modalProviderProps: t } = Bh()
  return _.createElement('div', { 'data-overlay-container': !0, ...e, ...t })
}
function Hh(e) {
  return _.createElement(Dh, null, _.createElement(Wh, e))
}
const vs = (e, t, n = 1) => {
    if (typeof document > 'u' || !e) return ''
    let r = getComputedStyle(document.documentElement)
    const o = `--${qt.prefix}-${e}-${t}`,
      i = r.getPropertyValue(o)
    if ((i && i.includes('var') && vs(e, i), i && n !== 1)) {
      if (i.includes('rgb')) return W0(i, n)
      if (i.includes('#')) return If(i, n)
    }
    return i
  },
  Ah = () => {
    const e = [...Object.keys(qt.theme.colors), ...Object.keys(zr.colors)],
      t = Object.keys(zr.shadows)
    return {
      colors: e.reduce((n, r) => {
        const o = vs('colors', r)
        return (
          o &&
            (n[r] = { prefix: qt.prefix, scale: 'colors', token: r, value: o }),
          n
        )
      }, {}),
      shadows: t.reduce((n, r) => {
        const o = vs('shadows', r)
        return (
          o &&
            (n[r] = {
              prefix: qt.prefix,
              scale: 'shadows',
              token: r,
              value: o,
            }),
          n
        )
      }, {}),
    }
  },
  jh = (e) => {
    var t
    const n =
        (e == null || (t = e.getAttribute('style')) == null
          ? void 0
          : t
              .split(';')
              .map((o) => o.trim())
              .filter((o) => o.includes('color-scheme'))) || [],
      r =
        n.length > 0 ? n[0].replace('color-scheme: ', '').replace(';', '') : ''
    return (e == null ? void 0 : e.getAttribute('data-theme')) || r
  },
  $s = (e) =>
    typeof e == 'string' && e != null && e.includes('-theme')
      ? e == null
        ? void 0
        : e.replace('-theme', '')
      : e,
  Uh = (e) => {
    var t, n
    if (!document) return
    const r = document.documentElement,
      o =
        (r == null || (t = r.getAttribute('class')) == null
          ? void 0
          : t
              .split(' ')
              .filter(
                (s) =>
                  !s.includes('theme') &&
                  !s.includes('light') &&
                  !s.includes('dark')
              )) || [],
      i =
        (r == null || (n = r.getAttribute('style')) == null
          ? void 0
          : n
              .split(';')
              .filter((s) => !s.includes('color-scheme') && s.length)
              .map((s) => `${s};`)) || [],
      l = $s(e)
    r == null || r.setAttribute('class', Ae(o, `${l}-theme`)),
      r == null || r.setAttribute('style', Ae(i, `color-scheme: ${l};`))
  },
  Vh = rt(
    ({ theme: e, disableBaseline: t, children: n }) => {
      const { isBrowser: r } = J0(),
        [o, i] = k.useState(ss.type),
        l = (c) => {
          i((g) => (g !== c ? c : g))
        },
        s = (c) => {
          const g = jh(c)
          g && l(g)
        },
        a = k.useMemo(() => {
          const c = r ? Ah() : {},
            g = Of(eh(ss.theme), c),
            h = $s(o)
          return { theme: g, type: h, isDark: h === 'dark' }
        }, [o, r])
      return (
        k.useEffect(() => {
          var c, g, h
          s((c = document) == null ? void 0 : c.documentElement)
          const p = new MutationObserver((m) => {
            var w
            if (
              m &&
              m.length > 0 &&
              ((w = m[0]) == null ? void 0 : w.target.nodeName) === 'BODY'
            ) {
              var S, L, f
              const y =
                (S = document) == null ||
                (L = S.body) == null ||
                (f = L.dataset) == null
                  ? void 0
                  : f.theme
              y && l(y)
            } else {
              var d
              s((d = document) == null ? void 0 : d.documentElement)
            }
          })
          return (
            p.observe((g = document) == null ? void 0 : g.documentElement, {
              attributes: !0,
              attributeFilter: ['data-theme', 'style'],
            }),
            p.observe((h = document) == null ? void 0 : h.body, {
              attributes: !0,
              attributeFilter: ['data-theme', 'style'],
            }),
            () => p.disconnect()
          )
        }, []),
        k.useEffect(() => {
          r &&
            e &&
            e != null &&
            e.className &&
            (Uh(e.className), l($s(e.className)))
        }, [r, e]),
        F(sh, {
          children: F(Hh, {
            children: Te(Z0.Provider, {
              value: a,
              children: [!t && F(lh, {}), n],
            }),
          }),
        })
      )
    },
    { disableBaseline: !1 }
  )
cn({
  WebkitTapHighlightColor: 'transparent',
  '&:focus:not(&:focus-visible)': { boxShadow: 'none' },
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px $colors$background, 0 0 0 4px $colors$primary',
  },
  '@safari': { WebkitTapHighlightColor: 'transparent', outline: 'none' },
})
const qf = cn({
    outline: 'none',
    variants: {
      isFocusVisible: {
        true: {
          boxShadow: '0 0 0 2px $colors$background, 0 0 0 4px $colors$primary',
        },
        false: {},
      },
    },
  }),
  Kh = cn({ transform: 'translateZ(0)', backfaceVisibility: 'hidden' })
cn({
  border: '0px',
  clip: 'rect(0px, 0px, 0px, 0px)',
  height: '1px',
  width: '1px',
  margin: '-1px',
  padding: '0px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  position: 'absolute',
})
const Gh = cn({
    variants: {
      hideIn: {
        xs: { '@xsMax': { display: 'none' } },
        sm: { '@smMax': { display: 'none' } },
        md: { '@mdMax': { display: 'none' } },
        lg: { '@lgMax': { display: 'none' } },
        xl: { '@xlMax': { display: 'none' } },
      },
    },
  }),
  Qh = cn({
    variants: {
      showIn: {
        xs: { '@xs': { display: 'none' } },
        sm: { '@sm': { display: 'none' } },
        md: { '@md': { display: 'none' } },
        lg: { '@lg': { display: 'none' } },
        xl: { '@xl': { display: 'none' } },
      },
    },
  }),
  Yh = cn(Gh, Qh)
function ep(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e,
    o = k.useRef({ isFocused: !1, isFocusVisible: t || Zf() }),
    [i, l] = k.useState(!1),
    [s, a] = k.useState(() => o.current.isFocused && o.current.isFocusVisible),
    c = k.useCallback(
      () => a(o.current.isFocused && o.current.isFocusVisible),
      []
    ),
    g = k.useCallback(
      (m) => {
        ;(o.current.isFocused = m), l(m), c()
      },
      [c]
    )
  Oh(
    (m) => {
      ;(o.current.isFocusVisible = m), c()
    },
    [],
    { isTextInput: n }
  )
  let { focusProps: h } = Th({ isDisabled: r, onFocusChange: g }),
    { focusWithinProps: p } = _h({ isDisabled: !r, onFocusWithinChange: g })
  return {
    isFocused: i,
    isFocusVisible: o.current.isFocused && s,
    focusProps: r ? p : h,
  }
}
function dn(e) {
  const t = k.useRef(null)
  return k.useImperativeHandle(e, () => t.current), t
}
const tp = typeof window < 'u' ? _.useLayoutEffect : () => {}
let uc = new Map()
function Xh(e, t) {
  if (e === t) return e
  let n = uc.get(e)
  if (n) return n(t), t
  let r = uc.get(t)
  return r ? (r(e), e) : t
}
function Zh(...e) {
  return (...t) => {
    for (let n of e) typeof n == 'function' && n(...t)
  }
}
function er(...e) {
  let t = { ...e[0] }
  for (let n = 1; n < e.length; n++) {
    let r = e[n]
    for (let o in r) {
      let i = t[o],
        l = r[o]
      typeof i == 'function' &&
      typeof l == 'function' &&
      o[0] === 'o' &&
      o[1] === 'n' &&
      o.charCodeAt(2) >= 65 &&
      o.charCodeAt(2) <= 90
        ? (t[o] = Zh(i, l))
        : (o === 'className' || o === 'UNSAFE_className') &&
          typeof i == 'string' &&
          typeof l == 'string'
        ? (t[o] = Uf(i, l))
        : o === 'id' && i && l
        ? (t.id = Xh(i, l))
        : (t[o] = l !== void 0 ? l : i)
    }
  }
  return t
}
const Jh = new Set(['id']),
  qh = new Set([
    'aria-label',
    'aria-labelledby',
    'aria-describedby',
    'aria-details',
  ]),
  e1 = /^(data-.*)$/
function t1(e, t = {}) {
  let { labelable: n, propNames: r } = t,
    o = {}
  for (const i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      (Jh.has(i) ||
        (n && qh.has(i)) ||
        (r != null && r.has(i)) ||
        e1.test(i)) &&
      (o[i] = e[i])
  return o
}
function Dn(e) {
  if (n1()) e.focus({ preventScroll: !0 })
  else {
    let t = r1(e)
    e.focus(), o1(t)
  }
}
let Co = null
function n1() {
  if (Co == null) {
    Co = !1
    try {
      var e = document.createElement('div')
      e.focus({
        get preventScroll() {
          return (Co = !0), !0
        },
      })
    } catch {}
  }
  return Co
}
function r1(e) {
  for (
    var t = e.parentNode,
      n = [],
      r = document.scrollingElement || document.documentElement;
    t instanceof HTMLElement && t !== r;

  )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) &&
      n.push({ element: t, scrollTop: t.scrollTop, scrollLeft: t.scrollLeft }),
      (t = t.parentNode)
  return (
    r instanceof HTMLElement &&
      n.push({ element: r, scrollTop: r.scrollTop, scrollLeft: r.scrollLeft }),
    n
  )
}
function o1(e) {
  for (let { element: t, scrollTop: n, scrollLeft: r } of e)
    (t.scrollTop = n), (t.scrollLeft = r)
}
let bn = new Map(),
  ws = new Set()
function cc() {
  if (typeof window > 'u') return
  let e = (n) => {
      let r = bn.get(n.target)
      r ||
        ((r = new Set()),
        bn.set(n.target, r),
        n.target.addEventListener('transitioncancel', t)),
        r.add(n.propertyName)
    },
    t = (n) => {
      let r = bn.get(n.target)
      if (
        r &&
        (r.delete(n.propertyName),
        r.size === 0 &&
          (n.target.removeEventListener('transitioncancel', t),
          bn.delete(n.target)),
        bn.size === 0)
      ) {
        for (let o of ws) o()
        ws.clear()
      }
    }
  document.body.addEventListener('transitionrun', e),
    document.body.addEventListener('transitionend', t)
}
typeof document < 'u' &&
  (document.readyState !== 'loading'
    ? cc()
    : document.addEventListener('DOMContentLoaded', cc))
function np(e) {
  requestAnimationFrame(() => {
    bn.size === 0 ? e() : ws.add(e)
  })
}
function i1() {
  let e = k.useRef(new Map()),
    t = k.useCallback((o, i, l, s) => {
      let a =
        s != null && s.once
          ? (...c) => {
              e.current.delete(l), l(...c)
            }
          : l
      e.current.set(l, { type: i, eventTarget: o, fn: a, options: s }),
        o.addEventListener(i, l, s)
    }, []),
    n = k.useCallback((o, i, l, s) => {
      var a
      let c =
        ((a = e.current.get(l)) === null || a === void 0 ? void 0 : a.fn) || l
      o.removeEventListener(i, c, s), e.current.delete(l)
    }, []),
    r = k.useCallback(() => {
      e.current.forEach((o, i) => {
        n(o.eventTarget, o.type, i, o.options)
      })
    }, [n])
  return (
    k.useEffect(() => r, [r]),
    {
      addGlobalListener: t,
      removeGlobalListener: n,
      removeAllGlobalListeners: r,
    }
  )
}
function rp(e, t) {
  tp(() => {
    if (e && e.ref && t)
      return (
        (e.ref.current = t.current),
        () => {
          e.ref.current = null
        }
      )
  }, [e, t])
}
function l1(e) {
  var t
  return typeof window > 'u' || window.navigator == null
    ? !1
    : ((t = window.navigator.userAgentData) === null || t === void 0
        ? void 0
        : t.brands.some((n) => e.test(n.brand))) ||
        e.test(window.navigator.userAgent)
}
function za(e) {
  var t
  return typeof window < 'u' && window.navigator != null
    ? e.test(
        ((t = window.navigator.userAgentData) === null || t === void 0
          ? void 0
          : t.platform) || window.navigator.platform
      )
    : !1
}
function op() {
  return za(/^Mac/i)
}
function s1() {
  return za(/^iPhone/i)
}
function a1() {
  return za(/^iPad/i) || (op() && navigator.maxTouchPoints > 1)
}
function ip() {
  return s1() || a1()
}
function u1() {
  return l1(/Android/i)
}
function Ss(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : u1() && e.pointerType
    ? e.type === 'click' && e.buttons === 1
    : e.detail === 0 && !e.pointerType
}
function c1(e) {
  return (
    (e.width === 0 && e.height === 0) ||
    (e.width === 1 &&
      e.height === 1 &&
      e.pressure === 0 &&
      e.detail === 0 &&
      e.pointerType === 'mouse')
  )
}
let Bn = 'default',
  xs = '',
  Wo = new WeakMap()
function dc(e) {
  ip()
    ? (Bn === 'default' &&
        ((xs = document.documentElement.style.webkitUserSelect),
        (document.documentElement.style.webkitUserSelect = 'none')),
      (Bn = 'disabled'))
    : (e instanceof HTMLElement || e instanceof SVGElement) &&
      (Wo.set(e, e.style.userSelect), (e.style.userSelect = 'none'))
}
function Eo(e) {
  if (ip()) {
    if (Bn !== 'disabled') return
    ;(Bn = 'restoring'),
      setTimeout(() => {
        np(() => {
          Bn === 'restoring' &&
            (document.documentElement.style.webkitUserSelect === 'none' &&
              (document.documentElement.style.webkitUserSelect = xs || ''),
            (xs = ''),
            (Bn = 'default'))
        })
      }, 300)
  } else if (
    (e instanceof HTMLElement || e instanceof SVGElement) &&
    e &&
    Wo.has(e)
  ) {
    let t = Wo.get(e)
    e.style.userSelect === 'none' && (e.style.userSelect = t),
      e.getAttribute('style') === '' && e.removeAttribute('style'),
      Wo.delete(e)
  }
}
const lp = _.createContext(null)
lp.displayName = 'PressResponderContext'
function d1(e) {
  let t = k.useContext(lp)
  if (t) {
    let { register: n, ...r } = t
    ;(e = er(r, e)), n()
  }
  return rp(t, e.ref), e
}
function f1(e) {
  let {
      onPress: t,
      onPressChange: n,
      onPressStart: r,
      onPressEnd: o,
      onPressUp: i,
      isDisabled: l,
      isPressed: s,
      preventFocusOnPress: a,
      shouldCancelOnPointerExit: c,
      allowTextSelectionOnPress: g,
      ref: h,
      ...p
    } = d1(e),
    m = k.useRef(null)
  m.current = {
    onPress: t,
    onPressChange: n,
    onPressStart: r,
    onPressEnd: o,
    onPressUp: i,
    isDisabled: l,
    shouldCancelOnPointerExit: c,
  }
  let [w, S] = k.useState(!1),
    L = k.useRef({
      isPressed: !1,
      ignoreEmulatedMouseEvents: !1,
      ignoreClickAfterPress: !1,
      didFirePressStart: !1,
      activePointerId: null,
      target: null,
      isOverTarget: !1,
      pointerType: null,
    }),
    { addGlobalListener: f, removeAllGlobalListeners: d } = i1(),
    y = k.useMemo(() => {
      let u = L.current,
        E = (v, I) => {
          let { onPressStart: $, onPressChange: x, isDisabled: ae } = m.current
          ae ||
            u.didFirePressStart ||
            ($ &&
              $({
                type: 'pressstart',
                pointerType: I,
                target: v.currentTarget,
                shiftKey: v.shiftKey,
                metaKey: v.metaKey,
                ctrlKey: v.ctrlKey,
                altKey: v.altKey,
              }),
            x && x(!0),
            (u.didFirePressStart = !0),
            S(!0))
        },
        b = (v, I, $ = !0) => {
          let {
            onPressEnd: x,
            onPressChange: ae,
            onPress: fe,
            isDisabled: Le,
          } = m.current
          u.didFirePressStart &&
            ((u.ignoreClickAfterPress = !0),
            (u.didFirePressStart = !1),
            x &&
              x({
                type: 'pressend',
                pointerType: I,
                target: v.currentTarget,
                shiftKey: v.shiftKey,
                metaKey: v.metaKey,
                ctrlKey: v.ctrlKey,
                altKey: v.altKey,
              }),
            ae && ae(!1),
            S(!1),
            fe &&
              $ &&
              !Le &&
              fe({
                type: 'press',
                pointerType: I,
                target: v.currentTarget,
                shiftKey: v.shiftKey,
                metaKey: v.metaKey,
                ctrlKey: v.ctrlKey,
                altKey: v.altKey,
              }))
        },
        P = (v, I) => {
          let { onPressUp: $, isDisabled: x } = m.current
          x ||
            ($ &&
              $({
                type: 'pressup',
                pointerType: I,
                target: v.currentTarget,
                shiftKey: v.shiftKey,
                metaKey: v.metaKey,
                ctrlKey: v.ctrlKey,
                altKey: v.altKey,
              }))
        },
        C = (v) => {
          u.isPressed &&
            (u.isOverTarget && b(lt(u.target, v), u.pointerType, !1),
            (u.isPressed = !1),
            (u.isOverTarget = !1),
            (u.activePointerId = null),
            (u.pointerType = null),
            d(),
            g || Eo(u.target))
        },
        R = {
          onKeyDown(v) {
            al(v.nativeEvent, v.currentTarget) &&
            v.currentTarget.contains(v.target)
              ? (pc(v.target, v.key) && v.preventDefault(),
                v.stopPropagation(),
                !u.isPressed &&
                  !v.repeat &&
                  ((u.target = v.currentTarget),
                  (u.isPressed = !0),
                  E(v, 'keyboard'),
                  f(document, 'keyup', O, !1)))
              : v.key === 'Enter' && bs(v.currentTarget) && v.stopPropagation()
          },
          onKeyUp(v) {
            al(v.nativeEvent, v.currentTarget) &&
              !v.repeat &&
              v.currentTarget.contains(v.target) &&
              P(lt(u.target, v), 'keyboard')
          },
          onClick(v) {
            ;(v && !v.currentTarget.contains(v.target)) ||
              (v &&
                v.button === 0 &&
                (v.stopPropagation(),
                l && v.preventDefault(),
                !u.ignoreClickAfterPress &&
                  !u.ignoreEmulatedMouseEvents &&
                  (u.pointerType === 'virtual' || Ss(v.nativeEvent)) &&
                  (!l && !a && Dn(v.currentTarget),
                  E(v, 'virtual'),
                  P(v, 'virtual'),
                  b(v, 'virtual')),
                (u.ignoreEmulatedMouseEvents = !1),
                (u.ignoreClickAfterPress = !1)))
          },
        },
        O = (v) => {
          if (u.isPressed && al(v, u.target)) {
            pc(v.target, v.key) && v.preventDefault(),
              v.stopPropagation(),
              (u.isPressed = !1)
            let I = v.target
            b(lt(u.target, v), 'keyboard', u.target.contains(I)),
              d(),
              u.target instanceof HTMLElement &&
                u.target.contains(I) &&
                (bs(u.target) || u.target.getAttribute('role') === 'link') &&
                u.target.click()
          }
        }
      if (typeof PointerEvent < 'u') {
        ;(R.onPointerDown = (x) => {
          if (!(x.button !== 0 || !x.currentTarget.contains(x.target))) {
            if (c1(x.nativeEvent)) {
              u.pointerType = 'virtual'
              return
            }
            ul(x.currentTarget) && x.preventDefault(),
              (u.pointerType = x.pointerType),
              x.stopPropagation(),
              u.isPressed ||
                ((u.isPressed = !0),
                (u.isOverTarget = !0),
                (u.activePointerId = x.pointerId),
                (u.target = x.currentTarget),
                !l && !a && Dn(x.currentTarget),
                g || dc(u.target),
                E(x, u.pointerType),
                f(document, 'pointermove', v, !1),
                f(document, 'pointerup', I, !1),
                f(document, 'pointercancel', $, !1))
          }
        }),
          (R.onMouseDown = (x) => {
            x.currentTarget.contains(x.target) &&
              x.button === 0 &&
              (ul(x.currentTarget) && x.preventDefault(), x.stopPropagation())
          }),
          (R.onPointerUp = (x) => {
            !x.currentTarget.contains(x.target) ||
              u.pointerType === 'virtual' ||
              (x.button === 0 &&
                $n(x, x.currentTarget) &&
                P(x, u.pointerType || x.pointerType))
          })
        let v = (x) => {
            x.pointerId === u.activePointerId &&
              ($n(x, u.target)
                ? u.isOverTarget ||
                  ((u.isOverTarget = !0), E(lt(u.target, x), u.pointerType))
                : u.isOverTarget &&
                  ((u.isOverTarget = !1),
                  b(lt(u.target, x), u.pointerType, !1),
                  m.current.shouldCancelOnPointerExit && C(x)))
          },
          I = (x) => {
            x.pointerId === u.activePointerId &&
              u.isPressed &&
              x.button === 0 &&
              ($n(x, u.target)
                ? b(lt(u.target, x), u.pointerType)
                : u.isOverTarget && b(lt(u.target, x), u.pointerType, !1),
              (u.isPressed = !1),
              (u.isOverTarget = !1),
              (u.activePointerId = null),
              (u.pointerType = null),
              d(),
              g || Eo(u.target))
          },
          $ = (x) => {
            C(x)
          }
        R.onDragStart = (x) => {
          x.currentTarget.contains(x.target) && C(x)
        }
      } else {
        ;(R.onMouseDown = ($) => {
          $.button !== 0 ||
            !$.currentTarget.contains($.target) ||
            (ul($.currentTarget) && $.preventDefault(),
            $.stopPropagation(),
            !u.ignoreEmulatedMouseEvents &&
              ((u.isPressed = !0),
              (u.isOverTarget = !0),
              (u.target = $.currentTarget),
              (u.pointerType = Ss($.nativeEvent) ? 'virtual' : 'mouse'),
              !l && !a && Dn($.currentTarget),
              E($, u.pointerType),
              f(document, 'mouseup', v, !1)))
        }),
          (R.onMouseEnter = ($) => {
            $.currentTarget.contains($.target) &&
              ($.stopPropagation(),
              u.isPressed &&
                !u.ignoreEmulatedMouseEvents &&
                ((u.isOverTarget = !0), E($, u.pointerType)))
          }),
          (R.onMouseLeave = ($) => {
            $.currentTarget.contains($.target) &&
              ($.stopPropagation(),
              u.isPressed &&
                !u.ignoreEmulatedMouseEvents &&
                ((u.isOverTarget = !1),
                b($, u.pointerType, !1),
                m.current.shouldCancelOnPointerExit && C($)))
          }),
          (R.onMouseUp = ($) => {
            $.currentTarget.contains($.target) &&
              !u.ignoreEmulatedMouseEvents &&
              $.button === 0 &&
              P($, u.pointerType)
          })
        let v = ($) => {
          if ($.button === 0) {
            if (((u.isPressed = !1), d(), u.ignoreEmulatedMouseEvents)) {
              u.ignoreEmulatedMouseEvents = !1
              return
            }
            $n($, u.target)
              ? b(lt(u.target, $), u.pointerType)
              : u.isOverTarget && b(lt(u.target, $), u.pointerType, !1),
              (u.isOverTarget = !1)
          }
        }
        ;(R.onTouchStart = ($) => {
          if (!$.currentTarget.contains($.target)) return
          $.stopPropagation()
          let x = p1($.nativeEvent)
          x &&
            ((u.activePointerId = x.identifier),
            (u.ignoreEmulatedMouseEvents = !0),
            (u.isOverTarget = !0),
            (u.isPressed = !0),
            (u.target = $.currentTarget),
            (u.pointerType = 'touch'),
            !l && !a && Dn($.currentTarget),
            g || dc(u.target),
            E($, u.pointerType),
            f(window, 'scroll', I, !0))
        }),
          (R.onTouchMove = ($) => {
            if (
              !$.currentTarget.contains($.target) ||
              ($.stopPropagation(), !u.isPressed)
            )
              return
            let x = fc($.nativeEvent, u.activePointerId)
            x && $n(x, $.currentTarget)
              ? u.isOverTarget || ((u.isOverTarget = !0), E($, u.pointerType))
              : u.isOverTarget &&
                ((u.isOverTarget = !1),
                b($, u.pointerType, !1),
                m.current.shouldCancelOnPointerExit && C($))
          }),
          (R.onTouchEnd = ($) => {
            if (
              !$.currentTarget.contains($.target) ||
              ($.stopPropagation(), !u.isPressed)
            )
              return
            let x = fc($.nativeEvent, u.activePointerId)
            x && $n(x, $.currentTarget)
              ? (P($, u.pointerType), b($, u.pointerType))
              : u.isOverTarget && b($, u.pointerType, !1),
              (u.isPressed = !1),
              (u.activePointerId = null),
              (u.isOverTarget = !1),
              (u.ignoreEmulatedMouseEvents = !0),
              g || Eo(u.target),
              d()
          }),
          (R.onTouchCancel = ($) => {
            $.currentTarget.contains($.target) &&
              ($.stopPropagation(), u.isPressed && C($))
          })
        let I = ($) => {
          u.isPressed &&
            $.target.contains(u.target) &&
            C({
              currentTarget: u.target,
              shiftKey: !1,
              ctrlKey: !1,
              metaKey: !1,
              altKey: !1,
            })
        }
        R.onDragStart = ($) => {
          $.currentTarget.contains($.target) && C($)
        }
      }
      return R
    }, [f, l, a, d, g])
  return (
    k.useEffect(
      () => () => {
        g || Eo(L.current.target)
      },
      [g]
    ),
    { isPressed: s || w, pressProps: er(p, y) }
  )
}
function bs(e) {
  return e.tagName === 'A' && e.hasAttribute('href')
}
function al(e, t) {
  const { key: n, code: r } = e,
    o = t,
    i = o.getAttribute('role')
  return (
    (n === 'Enter' || n === ' ' || n === 'Spacebar' || r === 'Space') &&
    !(
      (o instanceof HTMLInputElement && !sp(o, n)) ||
      o instanceof HTMLTextAreaElement ||
      o.isContentEditable
    ) &&
    (!bs(o) || (i === 'button' && n !== 'Enter')) &&
    !(i === 'link' && n !== 'Enter')
  )
}
function p1(e) {
  const { targetTouches: t } = e
  return t.length > 0 ? t[0] : null
}
function fc(e, t) {
  const n = e.changedTouches
  for (let r = 0; r < n.length; r++) {
    const o = n[r]
    if (o.identifier === t) return o
  }
  return null
}
function lt(e, t) {
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
  }
}
function g1(e) {
  let t = e.width / 2 || e.radiusX || 0,
    n = e.height / 2 || e.radiusY || 0
  return {
    top: e.clientY - n,
    right: e.clientX + t,
    bottom: e.clientY + n,
    left: e.clientX - t,
  }
}
function m1(e, t) {
  return !(
    e.left > t.right ||
    t.left > e.right ||
    e.top > t.bottom ||
    t.top > e.bottom
  )
}
function $n(e, t) {
  let n = t.getBoundingClientRect(),
    r = g1(e)
  return m1(n, r)
}
function ul(e) {
  return !(e instanceof HTMLElement) || !e.draggable
}
function pc(e, t) {
  return e instanceof HTMLInputElement
    ? !sp(e, t)
    : e instanceof HTMLButtonElement
    ? e.type !== 'submit'
    : !0
}
const h1 = new Set([
  'checkbox',
  'radio',
  'range',
  'color',
  'file',
  'image',
  'button',
  'submit',
  'reset',
])
function sp(e, t) {
  return e.type === 'checkbox' || e.type === 'radio'
    ? t === ' '
    : h1.has(e.type)
}
class y1 {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented
  }
  preventDefault() {
    ;(this.defaultPrevented = !0), this.nativeEvent.preventDefault()
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0)
  }
  isPropagationStopped() {
    return !1
  }
  persist() {}
  constructor(t, n) {
    ;(this.nativeEvent = n),
      (this.target = n.target),
      (this.currentTarget = n.currentTarget),
      (this.relatedTarget = n.relatedTarget),
      (this.bubbles = n.bubbles),
      (this.cancelable = n.cancelable),
      (this.defaultPrevented = n.defaultPrevented),
      (this.eventPhase = n.eventPhase),
      (this.isTrusted = n.isTrusted),
      (this.timeStamp = n.timeStamp),
      (this.type = t)
  }
}
function v1(e) {
  let t = k.useRef({ isFocused: !1, onBlur: e, observer: null })
  return (
    (t.current.onBlur = e),
    tp(() => {
      const n = t.current
      return () => {
        n.observer && (n.observer.disconnect(), (n.observer = null))
      }
    }, []),
    k.useCallback((n) => {
      if (
        n.target instanceof HTMLButtonElement ||
        n.target instanceof HTMLInputElement ||
        n.target instanceof HTMLTextAreaElement ||
        n.target instanceof HTMLSelectElement
      ) {
        t.current.isFocused = !0
        let r = n.target,
          o = (i) => {
            var l, s
            ;(t.current.isFocused = !1),
              r.disabled &&
                ((s = (l = t.current).onBlur) === null ||
                  s === void 0 ||
                  s.call(l, new y1('blur', i))),
              t.current.observer &&
                (t.current.observer.disconnect(), (t.current.observer = null))
          }
        r.addEventListener('focusout', o, { once: !0 }),
          (t.current.observer = new MutationObserver(() => {
            t.current.isFocused &&
              r.disabled &&
              (t.current.observer.disconnect(),
              r.dispatchEvent(new FocusEvent('blur')),
              r.dispatchEvent(new FocusEvent('focusout', { bubbles: !0 })))
          })),
          t.current.observer.observe(r, {
            attributes: !0,
            attributeFilter: ['disabled'],
          })
      }
    }, [])
  )
}
function $1(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e
  const i = k.useCallback(
      (a) => {
        if (a.target === a.currentTarget) return r && r(a), o && o(!1), !0
      },
      [r, o]
    ),
    l = v1(i),
    s = k.useCallback(
      (a) => {
        a.target === a.currentTarget && (n && n(a), o && o(!0), l(a))
      },
      [o, n, l]
    )
  return {
    focusProps: {
      onFocus: !t && (n || o || r) ? s : void 0,
      onBlur: !t && (r || o) ? i : null,
    },
  }
}
let ro = null,
  w1 = new Set(),
  gc = !1,
  sn = !1,
  ks = !1
function Fa(e, t) {
  for (let n of w1) n(e, t)
}
function S1(e) {
  return !(
    e.metaKey ||
    (!op() && e.altKey) ||
    e.ctrlKey ||
    e.key === 'Control' ||
    e.key === 'Shift' ||
    e.key === 'Meta'
  )
}
function mc(e) {
  ;(sn = !0), S1(e) && ((ro = 'keyboard'), Fa('keyboard', e))
}
function wn(e) {
  ;(ro = 'pointer'),
    (e.type === 'mousedown' || e.type === 'pointerdown') &&
      ((sn = !0), Fa('pointer', e))
}
function x1(e) {
  Ss(e) && ((sn = !0), (ro = 'virtual'))
}
function b1(e) {
  e.target === window ||
    e.target === document ||
    (!sn && !ks && ((ro = 'virtual'), Fa('virtual', e)), (sn = !1), (ks = !1))
}
function k1() {
  ;(sn = !1), (ks = !0)
}
function hc() {
  if (typeof window > 'u' || gc) return
  let e = HTMLElement.prototype.focus
  ;(HTMLElement.prototype.focus = function () {
    ;(sn = !0), e.apply(this, arguments)
  }),
    document.addEventListener('keydown', mc, !0),
    document.addEventListener('keyup', mc, !0),
    document.addEventListener('click', x1, !0),
    window.addEventListener('focus', b1, !0),
    window.addEventListener('blur', k1, !1),
    typeof PointerEvent < 'u'
      ? (document.addEventListener('pointerdown', wn, !0),
        document.addEventListener('pointermove', wn, !0),
        document.addEventListener('pointerup', wn, !0))
      : (document.addEventListener('mousedown', wn, !0),
        document.addEventListener('mousemove', wn, !0),
        document.addEventListener('mouseup', wn, !0)),
    (gc = !0)
}
typeof document < 'u' &&
  (document.readyState !== 'loading'
    ? hc()
    : document.addEventListener('DOMContentLoaded', hc))
function C1() {
  return ro
}
function yc(e) {
  if (!e) return
  let t = !0
  return (n) => {
    let r = {
      ...n,
      preventDefault() {
        n.preventDefault()
      },
      isDefaultPrevented() {
        return n.isDefaultPrevented()
      },
      stopPropagation() {
        console.error(
          'stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.'
        )
      },
      continuePropagation() {
        t = !1
      },
    }
    e(r), t && n.stopPropagation()
  }
}
function E1(e) {
  return {
    keyboardProps: e.isDisabled
      ? {}
      : { onKeyDown: yc(e.onKeyDown), onKeyUp: yc(e.onKeyUp) },
  }
}
function P1(e) {
  if (C1() === 'virtual') {
    let t = document.activeElement
    np(() => {
      document.activeElement === t && document.contains(e) && Dn(e)
    })
  } else Dn(e)
}
function T1(e, t) {
  return t.some((n) => n.contains(e))
}
class Ra {
  get size() {
    return this.fastMap.size
  }
  getTreeNode(t) {
    return this.fastMap.get(t)
  }
  addTreeNode(t, n, r) {
    let o = this.fastMap.get(n ?? null),
      i = new vc({ scopeRef: t })
    o.addChild(i),
      (i.parent = o),
      this.fastMap.set(t, i),
      r && (i.nodeToRestore = r)
  }
  removeTreeNode(t) {
    if (t === null) return
    let n = this.fastMap.get(t),
      r = n.parent
    for (let i of this.traverse())
      i !== n &&
        n.nodeToRestore &&
        i.nodeToRestore &&
        n.scopeRef.current &&
        T1(i.nodeToRestore, n.scopeRef.current) &&
        (i.nodeToRestore = n.nodeToRestore)
    let o = n.children
    r.removeChild(n),
      o.length > 0 && o.forEach((i) => r.addChild(i)),
      this.fastMap.delete(n.scopeRef)
  }
  *traverse(t = this.root) {
    if ((t.scopeRef != null && (yield t), t.children.length > 0))
      for (let n of t.children) yield* this.traverse(n)
  }
  clone() {
    let t = new Ra()
    for (let n of this.traverse())
      t.addTreeNode(n.scopeRef, n.parent.scopeRef, n.nodeToRestore)
    return t
  }
  constructor() {
    as(this, 'fastMap', new Map()),
      (this.root = new vc({ scopeRef: null })),
      this.fastMap.set(null, this.root)
  }
}
class vc {
  addChild(t) {
    this.children.push(t), (t.parent = this)
  }
  removeChild(t) {
    this.children.splice(this.children.indexOf(t), 1), (t.parent = void 0)
  }
  constructor(t) {
    as(this, 'children', []),
      as(this, 'contain', !1),
      (this.scopeRef = t.scopeRef)
  }
}
new Ra()
let L1 = _.createContext(null)
function z1(e) {
  let t = k.useContext(L1) || {}
  rp(t, e)
  let { ref: n, ...r } = t
  return r
}
function F1(e, t) {
  let { focusProps: n } = $1(e),
    { keyboardProps: r } = E1(e),
    o = er(n, r),
    i = z1(t),
    l = e.isDisabled ? {} : i,
    s = k.useRef(e.autoFocus)
  return (
    k.useEffect(() => {
      s.current && t.current && P1(t.current), (s.current = !1)
    }, [t]),
    {
      focusableProps: er(
        {
          ...o,
          tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0,
        },
        l
      ),
    }
  )
}
function R1(e, t) {
  let {
      elementType: n = 'button',
      isDisabled: r,
      onPress: o,
      onPressStart: i,
      onPressEnd: l,
      onPressChange: s,
      preventFocusOnPress: a,
      allowFocusWhenDisabled: c,
      onClick: g,
      href: h,
      target: p,
      rel: m,
      type: w = 'button',
    } = e,
    S
  n === 'button'
    ? (S = { type: w, disabled: r })
    : (S = {
        role: 'button',
        tabIndex: r ? void 0 : 0,
        href: n === 'a' && r ? void 0 : h,
        target: n === 'a' ? p : void 0,
        type: n === 'input' ? w : void 0,
        disabled: n === 'input' ? r : void 0,
        'aria-disabled': !r || n === 'input' ? void 0 : r,
        rel: n === 'a' ? m : void 0,
      })
  let { pressProps: L, isPressed: f } = f1({
      onPressStart: i,
      onPressEnd: l,
      onPressChange: s,
      onPress: o,
      isDisabled: r,
      preventFocusOnPress: a,
      ref: t,
    }),
    { focusableProps: d } = F1(e, t)
  c && (d.tabIndex = r ? -1 : d.tabIndex)
  let y = er(d, L, t1(e, { labelable: !0 }))
  return {
    isPressed: f,
    buttonProps: er(S, y, {
      'aria-haspopup': e['aria-haspopup'],
      'aria-expanded': e['aria-expanded'],
      'aria-controls': e['aria-controls'],
      'aria-pressed': e['aria-pressed'],
      onClick: (u) => {
        g && (g(u), console.warn('onClick is deprecated, please use onPress'))
      },
    }),
  }
}
function ap(e) {
  return k.forwardRef(e)
}
const M1 = (e, t) => {
    var n, r, o, i, l, s, a, c, g, h, p
    return t.isButtonGroup
      ? {
          ...e,
          auto: !0,
          shadow: !1,
          bordered: (n = t.bordered) != null ? n : e.bordered,
          borderWeight: (r = t.borderWeight) != null ? r : e.borderWeight,
          ghost: (o = t.ghost) != null ? o : e.ghost,
          ripple: (i = t.ripple) != null ? i : e.ripple,
          flat: (l = t.flat) != null ? l : e.flat,
          animated: (s = t.animated) != null ? s : e.animated,
          rounded: (a = t.rounded) != null ? a : e.rounded,
          light: (c = t.light) != null ? c : e.light,
          size: (g = t.size) != null ? g : e.size,
          color: (h = t.color) != null ? h : e.color,
          disabled: (p = t.disabled) != null ? p : e.disabled,
        }
      : e
  },
  N1 = (e) => {
    if (!e.disabled)
      return e.auto && e.color === 'gradient' && (e.bordered || e.ghost)
        ? { px: '$$buttonBorderWeight', py: '$$buttonBorderWeight' }
        : {}
    const t = {
      bg: '$accents1',
      color: '$accents7',
      transform: 'none',
      boxShadow: 'none',
      pe: 'none',
    }
    return e.bordered || e.flat || e.ghost || e.light
      ? e.color === 'gradient' && (e.bordered || e.ghost)
        ? {
            color: '$accents4',
            backgroundImage:
              'linear-gradient($background, $background), linear-gradient($accents2, $accents2)',
            transform: 'none',
            boxShadow: 'none',
            pe: 'none',
            pl: '$$buttonBorderWeight',
            pr: '$$buttonBorderWeight',
          }
        : e.bordered || e.ghost || e.light
        ? { ...t, bg: 'transparent', borderColor: '$accents4' }
        : e.flat
        ? { ...t, bg: '$accents1' }
        : void 0
      : t
  },
  O1 = { isButtonGroup: !1, disabled: !1 },
  up = _.createContext(O1),
  _1 = () => _.useContext(up),
  I1 = te('span', {
    dflex: 'center',
    position: 'absolute',
    left: '$$buttonPadding',
    right: 'auto',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'inherit',
    zIndex: '$1',
    '& svg': { background: 'transparent' },
    variants: {
      isAuto: { true: { position: 'relative', transform: 'none', top: '0%' } },
      isRight: { true: { right: '$$buttonPadding', left: 'auto' } },
      isSingle: { true: { position: 'static', transform: 'none' } },
      isGradientButtonBorder: { true: {} },
    },
    compoundVariants: [
      {
        isAuto: !0,
        isRight: !0,
        isSingle: !1,
        css: {
          order: 2,
          ml: 'calc($$buttonPadding / 2)',
          right: '0%',
          left: '0%',
        },
      },
      {
        isAuto: !0,
        isRight: !1,
        isSingle: !1,
        css: {
          order: 0,
          mr: 'calc($$buttonPadding / 2)',
          right: '0%',
          left: '0%',
        },
      },
      { isSingle: !0, isRight: !1, css: { ml: 0 } },
      { isSingle: !0, isRight: !0, css: { mr: 0 } },
      {
        isSingle: !0,
        isRight: !1,
        isGradientButtonBorder: !0,
        css: { mr: 'calc($$buttonPadding / 2)' },
      },
    ],
  }),
  cp = ({ children: e, className: t, css: n, ...r }) =>
    F(I1, {
      className: Ae(
        'nextui-button-icon',
        {
          'nextui-button-icon-right': r.isRight,
          'nextui-button-icon-single': r.isSingle,
        },
        t
      ),
      css: n,
      ...r,
      children: e,
    })
cp.toString = () => '.nextui-button-icon'
const D1 = _.memo(cp),
  $c = rt(D1, { className: '' }),
  B1 = te(
    'button',
    {
      $$buttonBorderRadius: '$radii$md',
      $$buttonPressedScale: 0.97,
      dflex: 'center',
      appearance: 'none',
      boxSizing: 'border-box',
      fontWeight: '$medium',
      us: 'none',
      lineHeight: '$sm',
      ta: 'center',
      whiteSpace: 'nowrap',
      transition: '$button',
      position: 'relative',
      overflow: 'hidden',
      border: 'none',
      cursor: 'pointer',
      pe: 'auto',
      p: 0,
      br: '$$buttonBorderRadius',
      '@motion': { transition: 'none' },
      '.nextui-button-text': {
        dflex: 'center',
        zIndex: '$2',
        'p, pre, div': { margin: 0 },
      },
      [`& ${Y}`]: {
        zIndex: '$1',
        '.nextui-drip-filler': { opacity: 0.25, fill: '$accents2' },
      },
      variants: {
        bordered: {
          true: { bg: 'transparent', borderStyle: 'solid', color: '$text' },
        },
        ghost: { true: {} },
        color: {
          default: { bg: '$primary', color: '$primarySolidContrast' },
          primary: { bg: '$primary', color: '$primarySolidContrast' },
          secondary: { bg: '$secondary', color: '$secondarySolidContrast' },
          success: { bg: '$success', color: '$successSolidContrast' },
          warning: { bg: '$warning', color: '$warningSolidContrast' },
          error: { bg: '$error', color: '$errorSolidContrast' },
          gradient: { bg: '$gradient', color: '$primarySolidContrast' },
        },
        size: {
          xs: {
            $$buttonPadding: '$space$3',
            $$buttonBorderRadius: '$radii$xs',
            $$buttonHeight: '$space$10',
            px: '$3',
            height: '$$buttonHeight',
            lh: '$space$10',
            width: 'auto',
            minWidth: '$20',
            fontSize: '$xs',
          },
          sm: {
            $$buttonPadding: '$space$5',
            $$buttonBorderRadius: '$radii$sm',
            $$buttonHeight: '$space$12',
            px: '$5',
            height: '$$buttonHeight',
            lh: '$space$14',
            width: 'auto',
            minWidth: '$36',
            fontSize: '$sm',
          },
          md: {
            $$buttonPadding: '$space$7',
            $$buttonBorderRadius: '$radii$md',
            $$buttonHeight: '$space$14',
            px: '$7',
            height: '$$buttonHeight',
            lh: '$space$14',
            width: 'auto',
            minWidth: '$48',
            fontSize: '$sm',
          },
          lg: {
            $$buttonPadding: '$space$9',
            $$buttonBorderRadius: '$radii$base',
            $$buttonHeight: '$space$16',
            px: '$9',
            height: '$$buttonHeight',
            lh: '$space$15',
            width: 'auto',
            minWidth: '$60',
            fontSize: '$md',
          },
          xl: {
            $$buttonPadding: '$space$10',
            $$buttonBorderRadius: '$radii$xl',
            $$buttonHeight: '$space$18',
            px: '$10',
            height: '$$buttonHeight',
            lh: '$space$17',
            width: 'auto',
            minWidth: '$72',
            fontSize: '$lg',
          },
        },
        borderWeight: {
          light: { bw: '$light', $$buttonBorderWeight: '$borderWeights$light' },
          normal: {
            bw: '$normal',
            $$buttonBorderWeight: '$borderWeights$normal',
          },
          bold: { bw: '$bold', $$buttonBorderWeight: '$borderWeights$bold' },
          extrabold: {
            bw: '$extrabold',
            $$buttonBorderWeight: '$borderWeights$extrabold',
          },
          black: { bw: '$black', $$buttonBorderWeight: '$borderWeights$black' },
        },
        flat: { true: { color: '$text' } },
        light: {
          true: {
            bg: 'transparent',
            [`& ${Y}`]: {
              '.nextui-drip-filler': { opacity: 0.8, fill: '$accents2' },
            },
          },
        },
        shadow: { true: { bs: '$sm' } },
        animated: { false: { transition: 'none' } },
        auto: { true: { width: 'auto', minWidth: 'min-content' } },
        rounded: { true: { $$buttonBorderRadius: '$radii$pill' } },
        isPressed: { true: {} },
        isHovered: { true: {} },
        isChildLess: {
          true: { p: 0, width: '$$buttonHeight', height: '$$buttonHeight' },
        },
        isFocusVisible: { true: {}, false: {} },
      },
      compoundVariants: [
        {
          isPressed: !0,
          animated: !0,
          css: { transform: 'scale($$buttonPressedScale)' },
        },
        {
          auto: !0,
          isChildLess: !1,
          size: 'xs',
          css: { px: '$5', minWidth: 'min-content' },
        },
        {
          auto: !0,
          isChildLess: !1,
          size: 'sm',
          css: { px: '$8', minWidth: 'min-content' },
        },
        {
          auto: !0,
          isChildLess: !1,
          size: 'md',
          css: { px: '$9', minWidth: 'min-content' },
        },
        {
          auto: !0,
          isChildLess: !1,
          size: 'lg',
          css: { px: '$10', minWidth: 'min-content' },
        },
        {
          auto: !0,
          isChildLess: !1,
          size: 'xl',
          css: { px: '$11', minWidth: 'min-content' },
        },
        {
          shadow: !0,
          isFocusVisible: !1,
          color: 'default',
          css: { normalShadow: '$primaryShadow' },
        },
        {
          shadow: !0,
          isFocusVisible: !1,
          color: 'primary',
          css: { normalShadow: '$primaryShadow' },
        },
        {
          shadow: !0,
          isFocusVisible: !1,
          color: 'secondary',
          css: { normalShadow: '$secondaryShadow' },
        },
        {
          shadow: !0,
          isFocusVisible: !1,
          color: 'warning',
          css: { normalShadow: '$warningShadow' },
        },
        {
          shadow: !0,
          isFocusVisible: !1,
          color: 'success',
          css: { normalShadow: '$successShadow' },
        },
        {
          shadow: !0,
          isFocusVisible: !1,
          color: 'error',
          css: { normalShadow: '$errorShadow' },
        },
        {
          shadow: !0,
          isFocusVisible: !1,
          color: 'gradient',
          css: { normalShadow: '$primaryShadow' },
        },
        {
          light: !0,
          color: 'default',
          css: {
            bg: 'transparent',
            color: '$text',
            [`& ${Y}`]: {
              '.nextui-drip-filler': {
                opacity: 0.8,
                fill: '$primaryLightActive',
              },
            },
          },
        },
        {
          light: !0,
          color: 'primary',
          css: {
            bg: 'transparent',
            color: '$primary',
            [`& ${Y}`]: {
              '.nextui-drip-filler': {
                opacity: 0.8,
                fill: '$primaryLightActive',
              },
            },
          },
        },
        {
          light: !0,
          color: 'secondary',
          css: {
            bg: 'transparent',
            color: '$secondary',
            [`& ${Y}`]: {
              '.nextui-drip-filler': {
                opacity: 0.8,
                fill: '$secondaryLightActive',
              },
            },
          },
        },
        {
          light: !0,
          color: 'warning',
          css: {
            bg: 'transparent',
            color: '$warning',
            [`& ${Y}`]: {
              '.nextui-drip-filler': {
                opacity: 0.8,
                fill: '$warningLightActive',
              },
            },
          },
        },
        {
          light: !0,
          color: 'success',
          css: {
            bg: 'transparent',
            color: '$success',
            [`& ${Y}`]: {
              '.nextui-drip-filler': {
                opacity: 0.8,
                fill: '$successLightActive',
              },
            },
          },
        },
        {
          light: !0,
          color: 'error',
          css: {
            bg: 'transparent',
            color: '$error',
            [`& ${Y}`]: {
              '.nextui-drip-filler': {
                opacity: 0.8,
                fill: '$errorLightActive',
              },
            },
          },
        },
        {
          bordered: !0,
          color: 'default',
          css: {
            bg: 'transparent',
            borderColor: '$primary',
            color: '$primary',
            [`& ${Y}`]: { '.nextui-drip-filler': { fill: '$primary' } },
          },
        },
        {
          bordered: !0,
          color: 'primary',
          css: {
            bg: 'transparent',
            borderColor: '$primary',
            color: '$primary',
            [`& ${Y}`]: { '.nextui-drip-filler': { fill: '$primary' } },
          },
        },
        {
          bordered: !0,
          color: 'secondary',
          css: {
            bg: 'transparent',
            borderColor: '$secondary',
            color: '$secondary',
            [`& ${Y}`]: { '.nextui-drip-filler': { fill: '$secondary' } },
          },
        },
        {
          bordered: !0,
          color: 'success',
          css: {
            bg: 'transparent',
            borderColor: '$success',
            color: '$success',
            [`& ${Y}`]: { '.nextui-drip-filler': { fill: '$success' } },
          },
        },
        {
          bordered: !0,
          color: 'warning',
          css: {
            bg: 'transparent',
            borderColor: '$warning',
            color: '$warning',
            [`& ${Y}`]: { '.nextui-drip-filler': { fill: '$warning' } },
          },
        },
        {
          bordered: !0,
          color: 'error',
          css: {
            bg: 'transparent',
            borderColor: '$error',
            color: '$error',
            [`& ${Y}`]: { '.nextui-drip-filler': { fill: '$error' } },
          },
        },
        {
          bordered: !0,
          color: 'gradient',
          css: {
            bg: 'transparent',
            color: '$text',
            padding: '$$buttonBorderWeight',
            bgClip: 'content-box, border-box',
            borderColor: '$primary',
            backgroundImage:
              'linear-gradient($background, $background), $gradient',
            border: 'none',
            [`& ${Y}`]: { '.nextui-drip-filler': { fill: '$secondary' } },
          },
        },
        {
          ghost: !0,
          isHovered: !0,
          color: 'default',
          css: { bg: '$primary', color: '$primarySolidContrast' },
        },
        {
          ghost: !0,
          isHovered: !0,
          color: 'primary',
          css: { bg: '$primary', color: '$primarySolidContrast' },
        },
        {
          ghost: !0,
          isHovered: !0,
          color: 'secondary',
          css: { bg: '$secondary', color: '$secondarySolidContrast' },
        },
        {
          ghost: !0,
          isHovered: !0,
          color: 'success',
          css: { bg: '$success', color: '$successSolidContrast' },
        },
        {
          ghost: !0,
          isHovered: !0,
          color: 'warning',
          css: { bg: '$warning', color: '$warningSolidContrast' },
        },
        {
          ghost: !0,
          isHovered: !0,
          color: 'error',
          css: { bg: '$error', color: '$errorSolidContrast' },
        },
        {
          ghost: !0,
          color: 'gradient',
          isHovered: !0,
          css: { bg: '$gradient', color: '$white' },
        },
        {
          flat: !0,
          color: 'default',
          css: {
            bg: '$primaryLight',
            color: '$primaryLightContrast',
            [`& ${Y}`]: {
              '.nextui-drip-filler': { opacity: 0.4, fill: '$primary' },
            },
          },
        },
        {
          flat: !0,
          color: 'primary',
          css: {
            bg: '$primaryLight',
            color: '$primaryLightContrast',
            [`& ${Y}`]: {
              '.nextui-drip-filler': { opacity: 0.4, fill: '$primary' },
            },
          },
        },
        {
          flat: !0,
          color: 'secondary',
          css: {
            bg: '$secondaryLight',
            color: '$secondaryLightContrast',
            [`& ${Y}`]: {
              '.nextui-drip-filler': { opacity: 0.4, fill: '$secondary' },
            },
          },
        },
        {
          flat: !0,
          color: 'success',
          css: {
            bg: '$successLight',
            color: '$successLightContrast',
            [`& ${Y}`]: {
              '.nextui-drip-filler': { opacity: 0.4, fill: '$success' },
            },
          },
        },
        {
          flat: !0,
          color: 'warning',
          css: {
            bg: '$warningLight',
            color: '$warningLightContrast',
            [`& ${Y}`]: {
              '.nextui-drip-filler': { opacity: 0.4, fill: '$warning' },
            },
          },
        },
        {
          flat: !0,
          color: 'error',
          css: {
            bg: '$errorLight',
            color: '$errorLightContrast',
            [`& ${Y}`]: {
              '.nextui-drip-filler': { opacity: 0.4, fill: '$error' },
            },
          },
        },
        {
          flat: !0,
          isHovered: !0,
          color: 'default',
          css: { bg: '$primaryLightHover' },
        },
        {
          flat: !0,
          isHovered: !0,
          color: 'primary',
          css: { bg: '$primaryLightHover' },
        },
        {
          flat: !0,
          isHovered: !0,
          color: 'secondary',
          css: { bg: '$secondaryLightHover' },
        },
        {
          flat: !0,
          isHovered: !0,
          color: 'success',
          css: { bg: '$successLightHover' },
        },
        {
          flat: !0,
          isHovered: !0,
          color: 'warning',
          css: { bg: '$warningLightHover' },
        },
        {
          flat: !0,
          isHovered: !0,
          color: 'error',
          css: { bg: '$errorLightHover' },
        },
        {
          flat: !0,
          isPressed: !0,
          color: 'default',
          css: { bg: '$primaryLightActive' },
        },
        {
          flat: !0,
          isPressed: !0,
          color: 'primary',
          css: { bg: '$primaryLightActive' },
        },
        {
          flat: !0,
          isPressed: !0,
          color: 'secondary',
          css: { bg: '$secondaryLightActive' },
        },
        {
          flat: !0,
          isPressed: !0,
          color: 'success',
          css: { bg: '$successLightActive' },
        },
        {
          flat: !0,
          isPressed: !0,
          color: 'warning',
          css: { bg: '$warningLightActive' },
        },
        {
          flat: !0,
          isPressed: !0,
          color: 'error',
          css: { bg: '$errorLightActive' },
        },
        {
          auto: !0,
          color: 'gradient',
          bordered: !0,
          css: {
            '.nextui-button-text': { px: '$$buttonPadding' },
            '.nextui-button-icon': { ml: '$$buttonPadding' },
            '.nextui-button-icon-right': { mr: '$$buttonPadding' },
            '.nextui-button-text-left': { pl: 0 },
            '.nextui-button-text-right': { pr: 0 },
          },
        },
        { rounded: !0, size: 'xs', css: { br: '$pill' } },
        { rounded: !0, size: 'sm', css: { br: '$pill' } },
        { rounded: !0, size: 'md', css: { br: '$pill' } },
        { rounded: !0, size: 'lg', css: { br: '$pill' } },
        { rounded: !0, size: 'xl', css: { br: '$pill' } },
      ],
      defaultVariants: {
        color: 'default',
        borderWeight: 'normal',
        animated: !0,
        size: 'md',
      },
    },
    qf
  ),
  Ut = B1,
  Cs = ap((e, t) => {
    const {
        as: n,
        css: r,
        iconLeftCss: o,
        iconRightCss: i,
        onClick: l,
        onPress: s,
        onPressStart: a,
        onPressEnd: c,
        onPressChange: g,
        onPressUp: h,
        ...p
      } = e,
      m = _1(),
      w = M1(p, m),
      S = N1(w),
      {
        flat: L,
        children: f,
        disabled: d,
        animated: y,
        light: u,
        ripple: E,
        bordered: b,
        auto: P,
        borderWeight: C,
        icon: R,
        iconRight: O,
        ghost: v,
        autoFocus: I,
        className: $,
        ...x
      } = w,
      ae = (Ht) => {
        y && E && fe.current && ot(Ht)
      },
      fe = dn(t),
      { buttonProps: Le, isPressed: z } = R1(
        {
          ...p,
          isDisabled: d,
          elementType: n,
          onPress: (Ht) => {
            Ht.pointerType === 'keyboard' || Ht.pointerType === 'virtual'
              ? ae(Ht)
              : typeof window < 'u' && window.event && ae(window.event),
              l &&
                (l(Ht),
                console.warn('onClick is deprecated, please use onPress')),
              s == null || s(Ht)
          },
          onPressStart: a,
          onPressEnd: c,
          onPressChange: g,
          onPressUp: h,
        },
        fe
      ),
      { hoverProps: D, isHovered: B } = Jf({ isDisabled: d }),
      {
        isFocused: Q,
        isFocusVisible: ne,
        focusProps: fn,
      } = ep({ autoFocus: I }),
      { onClick: ot, ...ir } = Df(!1, fe),
      je = R || O,
      pn = _.Children.count(f) === 0,
      gn = Boolean(O),
      Ma = k.useMemo(
        () => (z ? 'pressed' : B ? 'hovered' : d ? 'disabled' : 'ready'),
        [d, B, z]
      ),
      Na = k.useMemo(() => (gn ? i : o), [gn, i, o])
    return Te(Ut, {
      ref: fe,
      animated: y,
      as: n,
      auto: P,
      borderWeight: C,
      bordered: b || v,
      className: Ae('nextui-button', `nextui-button--${Ma}`, $),
      css: { ...r, ...S },
      'data-state': Ma,
      flat: L,
      ghost: v,
      isChildLess: pn,
      isFocusVisible: ne && !d,
      isHovered: B || (v && Q),
      isPressed: z,
      light: u,
      ...Fi(Le, fn, D, x),
      children: [
        _.Children.count(f) === 0
          ? F($c, {
              isSingle: !0,
              css: Na,
              isAuto: P,
              isGradientButtonBorder: e.color === 'gradient' && (b || v),
              isRight: gn,
              children: je,
            })
          : je
          ? Te(gi, {
              children: [
                F($c, {
                  css: Na,
                  isAuto: P,
                  isGradientButtonBorder: e.color === 'gradient' && (b || v),
                  isRight: gn,
                  isSingle: !1,
                  children: je,
                }),
                F('div', {
                  className: Ae('nextui-button-text', {
                    'nextui-button-text-right': gn,
                    'nextui-button-text-left': !gn,
                  }),
                  children: f,
                }),
              ],
            })
          : F('span', { className: 'nextui-button-text', children: f }),
        F(Wf, { className: 'nextui-button-drip', color: 'white', ...ir }),
      ],
    })
  })
zi && (Cs.displayName = 'NextUI.Button'), (Cs.toString = () => '.nextui-button')
const Yr = rt(Cs, {
    ghost: !1,
    bordered: !1,
    ripple: !0,
    animated: !0,
    disabled: !1,
    autoFocus: !1,
    auto: !1,
    className: '',
    type: 'button',
  }),
  W1 = te('div', {
    display: 'inline-flex',
    margin: '$3',
    backgroundColor: 'transparent',
    height: 'min-content',
    [`& ${Ut}`]: { '.nextui-button-text': { top: 0 } },
    variants: {
      vertical: {
        true: {
          fd: 'column',
          [`& ${Ut}`]: {
            '&:not(:first-child)': { btlr: 0, btrr: 0 },
            '&:not(:last-child)': { bblr: 0, bbrr: 0 },
          },
        },
        false: {
          fd: 'row',
          [`& ${Ut}`]: {
            '&:not(:first-child)': { btlr: 0, bblr: 0 },
            '&:not(:last-child)': { btrr: 0, bbrr: 0 },
          },
        },
      },
      size: {
        xs: { br: '$xs' },
        sm: { br: '$sm' },
        md: { br: '$md' },
        lg: { br: '$base' },
        xl: { br: '$xl' },
      },
      rounded: { true: { br: '$pill' } },
      bordered: { true: { bg: 'transparent' } },
      gradient: { true: { pl: 0 } },
    },
    defaultVariants: { vertical: !1 },
    compoundVariants: [
      {
        bordered: !0,
        vertical: !0,
        css: {
          [`& ${Ut}`]: {
            '&:not(:last-child)': { borderBottom: 'none', paddingBottom: '0' },
          },
        },
      },
      {
        bordered: !0,
        vertical: !1,
        css: { [`& ${Ut}`]: { '&:not(:first-child)': { borderLeft: 'none' } } },
      },
      {
        bordered: !0,
        vertical: !1,
        gradient: !0,
        css: {
          [`& ${Ut}`]: {
            '&:not(:last-child)&:not(:first-child)': { pl: 0 },
            '&:last-child': { pl: 0 },
          },
        },
      },
    ],
  }),
  H1 = W1,
  dp = (e) => {
    const {
        disabled: t,
        size: n,
        color: r,
        bordered: o,
        ghost: i,
        light: l,
        flat: s,
        shadow: a,
        auto: c,
        animated: g,
        rounded: h,
        ripple: p,
        borderWeight: m,
        children: w,
        ...S
      } = e,
      L = k.useMemo(
        () => ({
          disabled: t,
          size: n,
          color: r,
          bordered: o,
          light: l,
          ghost: i,
          flat: s,
          shadow: a,
          auto: c,
          borderWeight: m,
          animated: g,
          rounded: h,
          ripple: p,
          isButtonGroup: !0,
        }),
        [t, g, n, p, r, o, l, i, s, m]
      )
    return F(up.Provider, {
      value: L,
      children: F(H1, {
        bordered: o || i,
        gradient: e.color === 'gradient',
        size: n,
        ...S,
        children: w,
      }),
    })
  }
dp.toString = () => '.nextui-button-group'
const A1 = _.memo(dp),
  j1 = rt(A1, { borderWeight: 'normal', size: 'md', color: 'default' })
Yr.Group = j1
const U1 = Ze({
    '0%': { backgroundPosition: '200% 0' },
    to: { backgroundPosition: '-200% 0' },
  }),
  V1 = te('div', {
    opacity: 0,
    margin: '0 auto',
    position: 'relative',
    overflow: 'hidden',
    maxWidth: '100%',
    transition: 'transform 250ms ease 0ms, opacity 200ms ease-in 0ms',
    '@motion': { transition: 'none' },
    variants: { ready: { true: { opacity: 1 }, false: { opacity: 0 } } },
  }),
  K1 = te('img', { size: '100%', display: 'block' }),
  G1 = te('div', {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    size: '100%',
    borderRadius: 'inherit',
    backgroundImage:
      'linear-gradient(270deg, $colors$accents1, $colors$accents2, $colors$accents2, $colors$accents1)',
    backgroundSize: '400% 100%',
    animation: `${U1} 5s ease-in-out infinite`,
    transition: 'opacity 300ms ease-out',
  }),
  fp = _.memo(({ opacity: e, css: t, className: n, ...r }) =>
    F(G1, {
      className: Ae('nextui-image-skeleton', n),
      css: { opacity: e, ...t },
      ...r,
    })
  )
fp.toString = () => '.nextui-image-skeleton'
const Q1 = rt(fp, { opacity: 0.5, className: '' }),
  pp = _.forwardRef((e, t) => {
    const {
        src: n,
        width: r,
        height: o,
        showSkeleton: i = !0,
        className: l,
        maxDelay: s = 3e3,
        autoResize: a = !1,
        objectFit: c = 'scale-down',
        containerCss: g,
        css: h,
        ...p
      } = e,
      m = dn(t),
      [w, S] = k.useState(!0),
      [L, f] = k.useState(i),
      { w: d, h: y } = k.useMemo(
        () => ({
          w: r ? (typeof r == 'number' ? `${r}px` : r) : 'auto',
          h: o ? (typeof o == 'number' ? `${o}px` : o) : 'auto',
        }),
        [r, o]
      ),
      [u, E, b] = n0(y),
      [P, C] = o0(m),
      R = i && !!r && !!o
    k.useEffect(() => {
      m.current && m.current.complete && (S(!1), f(!1))
    }),
      k.useEffect(() => {
        const v = setTimeout(() => {
          R && f(!1), clearTimeout(v)
        }, s)
        return () => clearTimeout(v)
      }, [w]),
      k.useEffect(() => {
        if (!a) return
        const v = P.width === 0,
          I = b.current === 'auto'
        !v && r && o && (P.width < r ? !I && E('auto') : I && E(y))
      }, [P, r]),
      i0(() => {
        a && C()
      })
    const O = k.useMemo(() => (w ? 'loading' : 'ready'), [w])
    return Te(V1, {
      className: Ae('nextui-image-container', `nextui-image--${O}`, l),
      css: { width: d, height: u, ...g },
      'data-state': O,
      ready: !w || L,
      children: [
        L && F(Q1, { opacity: 1 }),
        F(K1, {
          ref: m,
          alt: e.alt || '',
          className: 'nextui-image',
          css: { objectFit: c, ...h },
          'data-state': O,
          height: o,
          src: n,
          width: r,
          onLoad: () => {
            S(!1)
          },
          ...p,
        }),
      ],
    })
  })
pp.toString = () => '.nextui-image'
const Y1 = _.memo(pp),
  wc = (e) => `calc(${15.25 * e}pt + 1px * ${e - 1})`,
  X1 = te('div', {
    width: '100%',
    maxWidth: '100%',
    position: 'relative',
    variants: {
      color: {
        default: { bg: '$border' },
        primary: { bg: '$primary' },
        secondary: { bg: '$secondary' },
        success: { bg: '$success' },
        warning: { bg: '$warning' },
        error: { bg: '$error' },
      },
    },
    defaultVariants: { color: 'default' },
  }),
  Z1 = te('span', {
    position: 'absolute',
    left: '50%',
    top: '50%',
    minHeight: '100%',
    display: 'inline-flex',
    jc: 'center',
    ai: 'center',
    transform: 'translate(-50%, -50%)',
    padding: '0 $lg',
    fontSize: '$base',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    backgroundColor: '$background',
    zIndex: '$1',
    variants: {
      color: {
        default: { color: '$text' },
        primary: { color: '$primary' },
        secondary: { color: '$secondary' },
        success: { color: '$success' },
        warning: { color: '$warning' },
        error: { color: '$error' },
      },
    },
  }),
  gp = ({
    height: e,
    x: t,
    y: n,
    align: r,
    children: o,
    textColor: i,
    css: l,
    ...s
  }) => {
    const a = k.useMemo(() => {
        if (r && r !== 'center')
          return r === 'left' || r === 'start'
            ? { transform: 'translateY(-50%)', left: '7%' }
            : { transform: 'translateY(-50%)', left: 'auto', right: '7%' }
      }, [r]),
      c = n ? wc(n / 2) : 0,
      g = t ? wc(t / 2) : 0
    return F(X1, {
      css: { margin: `${c} ${g}`, height: `calc(${e} * 1px)`, ...l },
      role: 'separator',
      ...s,
      children:
        o &&
        F(Z1, {
          className: 'nextui-divider-text',
          color: i,
          css: { ...a },
          children: o,
        }),
    })
  }
gp.toString = () => '.nextui-divider'
const J1 = _.memo(gp),
  q1 = rt(J1, { x: 0, y: 0, height: 1, align: 'center' }),
  ey = (e) => {
    const {
        ref: t,
        disableAnimation: n = !1,
        disableRipple: r = !1,
        variant: o = 'shadow',
        isHoverable: i = !1,
        borderWeight: l = 'light',
        isPressable: s = !1,
        onClick: a,
        onPress: c,
        autoFocus: g,
        allowTextSelectionOnPress: h = !0,
        ...p
      } = e,
      m = dn(t),
      { onClick: w, ...S } = Df(!1, m),
      L = (C) => {
        n || r || !m.current || w(C)
      },
      { isPressed: f, pressProps: d } = xh({
        isDisabled: !s,
        onPress: (C) => {
          ;(C.pointerType !== 'keyboard' && C.pointerType !== 'virtual') ||
            (L(C), a == null || a(C)),
            c == null || c(C)
        },
        allowTextSelectionOnPress: h,
        ...p,
      }),
      { hoverProps: y, isHovered: u } = Jf({ isDisabled: !i, ...p }),
      { isFocusVisible: E, focusProps: b } = ep({ autoFocus: g })
    d.onClick = (C) => {
      s && (L(C), a == null || a(C))
    }
    const P = k.useCallback(
      (C = {}) => ({ ...Fi(s ? { ...d, ...b } : {}, i ? y : {}, p, C) }),
      [s, i, d, b, y, p]
    )
    return {
      cardRef: m,
      variant: o,
      borderWeight: l,
      isPressable: s,
      isHovered: u,
      isPressed: f,
      disableAnimation: n,
      disableRipple: r,
      dripBindings: S,
      onDripClickHandler: w,
      isFocusVisible: E,
      getCardProps: P,
    }
  },
  ty = te('div', {
    d: 'flex',
    w: '100%',
    h: 'auto',
    flex: '1 1 auto',
    fd: 'column',
    jc: 'inherit',
    ai: 'inherit',
    ac: 'inherit',
    py: '$lg',
    px: '$sm',
    oy: 'auto',
    position: 'relative',
    ta: 'left',
  }),
  ny = te(
    'div',
    {
      $$cardColor: '$colors$backgroundContrast',
      $$cardTextColor: '$colors$text',
      m: 0,
      p: 0,
      br: '$lg',
      bg: '$$cardColor',
      color: '$$cardTextColor',
      position: 'relative',
      display: 'flex',
      overflow: 'hidden',
      fd: 'column',
      width: '100%',
      height: 'auto',
      boxSizing: 'border-box',
      '@motion': { transition: 'none' },
      '.nextui-image': { width: '100%' },
      [`& ${Y}`]: {
        zIndex: '$1',
        '.nextui-drip-filler': { opacity: 0.25, fill: '$accents6' },
      },
      variants: {
        variant: {
          flat: { bg: '$accents0' },
          shadow: {
            dropShadow: '$lg',
            '@safari': { boxShadow: '$lg', dropShadow: 'none' },
            '@-moz-document url-prefix()': {
              boxShadow: '$lg',
              dropShadow: 'none',
            },
          },
          bordered: { borderStyle: 'solid', borderColor: '$border' },
        },
        borderWeight: {
          light: { bw: '$light' },
          normal: { bw: '$normal' },
          bold: { bw: '$bold' },
          extrabold: { bw: '$extrabold' },
          black: { bw: '$black' },
        },
        disableAnimation: {
          true: { transition: 'none' },
          false: { transition: '$card' },
        },
        isPressable: {
          true: {
            cursor: 'pointer',
            us: 'none',
            WebkitTapHighlightColor: 'transparent',
          },
        },
        isPressed: { true: {} },
        isHovered: {
          true: {
            dropShadow: '$lg',
            '@safari': { boxShadow: '$lg', dropShadow: 'none' },
            '@-moz-document url-prefix()': {
              boxShadow: '$lg',
              dropShadow: 'none',
            },
          },
        },
      },
      compoundVariants: [
        {
          isPressed: !0,
          disableAnimation: !1,
          css: { transform: 'scale(0.97)' },
        },
        {
          isHovered: !0,
          disableAnimation: !1,
          css: { transform: 'translateY(-2px)' },
        },
        {
          isHovered: !0,
          variant: 'shadow',
          css: {
            dropShadow: '$xl',
            '@safari': { boxShadow: '$xl', dropShadow: 'none' },
            '@-moz-document url-prefix()': {
              boxShadow: '$xl',
              dropShadow: 'none',
            },
          },
        },
      ],
    },
    Kh,
    qf
  ),
  ry = te('div', {
    w: '100%',
    display: 'flex',
    flexShrink: 0,
    zIndex: '$1',
    jc: 'flex-start',
    ai: 'center',
    overflow: 'hidden',
    color: 'inherit',
    p: '$sm',
  }),
  oy = te('div', {
    w: '100%',
    h: 'auto',
    p: '$sm',
    d: 'flex',
    ai: 'center',
    overflow: 'hidden',
    color: 'inherit',
    bblr: '$lg',
    bbrr: '$lg',
    variants: {
      isBlurred: {
        true: { bf: 'saturate(180%) blur(10px)', bg: '$$cardColor' },
      },
    },
  }),
  Es = _.forwardRef(({ ...e }, t) => {
    const { as: n, css: r, children: o, ...i } = e,
      {
        cardRef: l,
        variant: s,
        isFocusVisible: a,
        isPressable: c,
        isPressed: g,
        disableAnimation: h,
        disableRipple: p,
        borderWeight: m,
        isHovered: w,
        getCardProps: S,
        dripBindings: L,
      } = ey({ ...i, ref: t })
    return Te(ny, {
      ref: l,
      as: n,
      borderWeight: m,
      css: r,
      disableAnimation: h,
      isFocusVisible: a,
      isHovered: w,
      isPressable: c,
      isPressed: g,
      role: c ? 'button' : 'section',
      tabIndex: c ? 0 : -1,
      variant: s,
      ...S(),
      children: [c && !h && !p && F(Wf, { ...L }), o],
    })
  })
zi && (Es.displayName = 'NextUI.Card'), (Es.toString = () => '.nextui-card')
const Vt = Es
;(Vt.Header = ry),
  (Vt.Body = ty),
  (Vt.Footer = oy),
  (Vt.Image = Y1),
  (Vt.Divider = q1)
const iy = te('div', {
    w: '100%',
    mr: 'auto',
    ml: 'auto',
    variants: {
      fluid: { true: { maxWidth: '100%' } },
      responsive: {
        true: {
          '@xs': { maxWidth: '$breakpoints$xs' },
          '@sm': { maxWidth: '$breakpoints$sm' },
          '@md': { maxWidth: '$breakpoints$md' },
          '@lg': { maxWidth: '$breakpoints$lg' },
          '@xl': { maxWidth: '$breakpoints$xl' },
        },
      },
    },
    defaultVariants: { fluid: !1, responsive: !0 },
  }),
  ly = iy,
  Ho = _.forwardRef((e, t) => {
    const {
        xs: n,
        sm: r,
        md: o,
        lg: i,
        xl: l,
        wrap: s,
        gap: a,
        as: c,
        display: g,
        justify: h,
        direction: p,
        alignItems: m,
        alignContent: w,
        children: S,
        responsive: L,
        fluid: f,
        css: d,
        ...y
      } = e,
      u = dn(t),
      E = k.useMemo(() => `calc(${a} * $space$sm)`, [a])
    return F(ly, {
      ref: u,
      as: c,
      css: {
        px: E,
        maxWidth: n
          ? '$breakpoints$xs'
          : r
          ? '$breakpoints$sm'
          : o
          ? '$breakpoints$md'
          : i
          ? '$breakpoints$lg'
          : l
          ? '$breakpoints$xl'
          : '',
        alignItems: m,
        alignContent: w,
        flexWrap: s,
        display: g,
        justifyContent: h,
        flexDirection: p,
        ...d,
      },
      fluid: f,
      responsive: L,
      ...y,
      children: S,
    })
  })
;(Ho.displayName = 'NextUI.Container'),
  (Ho.toString = () => '.nextui-container'),
  (Ho.defaultProps = {
    gap: 2,
    xs: !1,
    sm: !1,
    md: !1,
    lg: !1,
    xl: !1,
    responsive: !0,
    fluid: !1,
    wrap: 'wrap',
    as: 'div',
    display: 'block',
  })
const Xr = _.memo(Ho)
te('div', {})
const sy = te('div', {
    margin: 0,
    boxSizing: 'border-box',
    padding: '$$gridGapUnit',
  }),
  Sn = (e) => {
    const t = e === 0 ? 'none' : 'inherit'
    if (typeof e == 'number') {
      const n = 8.333333333333334 * e,
        r = n > 100 ? '100%' : n < 0 ? '0' : `${n}%`
      return { flexGrow: 0, display: t, maxWidth: r, flexBasis: r }
    }
    return { flexGrow: 1, display: t, maxWidth: '100%', flexBasis: '0' }
  },
  Ps = _.forwardRef(
    (
      {
        xs: e,
        sm: t,
        md: n,
        lg: r,
        xl: o,
        css: i,
        justify: l,
        direction: s,
        alignItems: a,
        alignContent: c,
        children: g,
        className: h,
        ...p
      },
      m
    ) => {
      const w = k.useMemo(() => {
        const S = { xs: e, sm: t, md: n, lg: r, xl: o }
        return Object.keys(S)
          .reduce(
            (L, f) => (S[f] !== void 0 && S[f] !== !1 ? `${L} ${f}` : L),
            ''
          )
          .trim()
      }, [e, t, n, r, o])
      return F(sy, {
        ref: m,
        className: Ae('nextui-grid-item', w, h),
        css: {
          alignItems: a,
          alignContent: c,
          justifyContent: l,
          flexDirection: s,
          '&.xs': { ...Sn(e) },
          '@xsMax': { '&.xs': { ...Sn(e) } },
          '@sm': { '&.sm': { ...Sn(t) } },
          '@md': { '&.md': { ...Sn(n) } },
          '@lg': { '&.lg': { ...Sn(r) } },
          '@xl': { '&.xl': { ...Sn(o) } },
          ...i,
        },
        ...p,
        children: g,
      })
    }
  )
;(Ps.displayName = 'NextUI.GridItem'), (Ps.toString = () => '.nextui-grid-item')
const mp = rt(Ps, { xs: !1, sm: !1, md: !1, lg: !1, xl: !1, className: '' }),
  Ts = _.forwardRef(({ children: e, css: t, ...n }, r) =>
    F(mp, { ref: r, css: t, ...n, children: e })
  )
;(Ts.displayName = 'NextUI.Grid'), (Ts.toString = () => '.nextui-grid')
const ft = Ts,
  Ls = _.forwardRef(
    ({ gap: e, wrap: t, css: n, children: r, className: o, ...i }, l) => {
      const s = k.useMemo(() => `calc(${e} * $space$3)`, [e])
      return F(mp, {
        ref: l,
        className: Ae('nextui-grid-container', o),
        css: {
          $$gridGapUnit: s,
          display: 'flex',
          flexWrap: t,
          boxSizing: 'border-box',
          margin: 'calc(-1 * $$gridGapUnit)',
          width: 'calc(100% + $$gridGapUnit * 2)',
          ...n,
        },
        ...i,
        children: r,
      })
    }
  )
;(Ls.displayName = 'NextUI.GridContainer'),
  (Ls.toString = () => '.nextui-grid-container')
const ay = rt(Ls, { gap: 0, wrap: 'wrap', className: '' })
ft.Container = ay
const uy = te('div', {
    display: 'flex',
    position: 'relative',
    boxSizing: 'border-box',
    variants: { fluid: { true: { width: '100%' } } },
    defaultVariants: { fluid: !0 },
  }),
  cy = uy,
  hp = ({ children: e, gap: t, justify: n, align: r, wrap: o, css: i, ...l }) =>
    F(cy, {
      css: {
        flexWrap: o,
        $$rowGap: `calc(${t} * $space$lg)`,
        marginLeft: `calc(${t} * $space$lg / 2)`,
        marginRight: `calc(${t} * $space$lg / 2)`,
        justifyContent: n,
        alignItems: r,
        ...i,
      },
      ...l,
      children: e,
    })
hp.toString = () => '.nextui-row'
const dy = _.memo(hp),
  fy = rt(dy, {
    gap: 0,
    wrap: 'nowrap',
    justify: 'flex-start',
    align: 'flex-start',
  }),
  py = te(
    'p',
    {
      variants: {
        weight: {
          hairline: { fontWeight: '$hairline' },
          thin: { fontWeight: '$thin' },
          light: { fontWeight: '$light' },
          normal: { fontWeight: '$normal' },
          medium: { fontWeight: '$medium' },
          semibold: { fontWeight: '$semibold' },
          bold: { fontWeight: '$bold' },
          extrabold: { fontWeight: '$extrabold' },
          black: { fontWeight: '$black' },
        },
      },
    },
    Yh
  ),
  yp = _.forwardRef((e, t) => {
    const {
        children: n,
        tag: r,
        color: o = 'default',
        transform: i,
        size: l,
        css: s,
        ...a
      } = e,
      c = dn(t),
      g = k.useMemo(
        () => (I0(o) ? (o === 'default' ? '$text' : `$${o}`) : o),
        [o]
      )
    return F(py, {
      ref: c,
      as: r,
      css: { color: g, fontSize: l, tt: i, ...s },
      ...a,
      children: n,
    })
  })
yp.toString = () => '.nextui-text-child'
const vp = _.memo(yp),
  $p = (e, t, n, r) => {
    if (!e.length) return t
    const o = e.slice(1, e.length)
    return F(vp, { size: n, tag: e[0], transform: r, children: $p(o, t, n) })
  },
  zs = _.forwardRef((e, t) => {
    const {
        h1: n = !1,
        h2: r = !1,
        h3: o = !1,
        h4: i = !1,
        h5: l = !1,
        h6: s = !1,
        b: a = !1,
        small: c = !1,
        i: g = !1,
        span: h = !1,
        del: p = !1,
        em: m = !1,
        blockquote: w = !1,
        transform: S = 'none',
        size: L,
        children: f,
        ...d
      } = e,
      y = dn(t),
      u = { h1: n, h2: r, h3: o, h4: i, h5: l, h6: s, blockquote: w },
      E = { span: h, small: c, b: a, em: m, i: g, del: p },
      b = Object.keys(u).filter((v) => u[v]),
      P = Object.keys(E).filter((v) => E[v]),
      C = k.useMemo(() => (b[0] ? b[0] : P[0] ? P[0] : 'p'), [b, P]),
      R = P.filter((v) => v !== C),
      O = k.useMemo(() => (R.length ? $p(R, f, L, S) : f), [R, f, L, S])
    return F(vp, { ref: y, size: L, tag: C, transform: S, ...d, children: O })
  })
zi && (zs.displayName = 'NextUI.Text'), (zs.toString = () => '.nextui-text')
const wp = _.memo(zs),
  cl = Ze({
    '0%': { opacity: 1 },
    '50%': { opacity: '0.4', transform: 'scale(0.5)' },
    '100%': { opacity: 1 },
  }),
  gy = Ze({
    '0%': { opacity: 0, transform: 'scale(0.2) translate(50%, -50%)' },
    '60%': { opacity: 0.75, transform: 'scale(1.2) translate(50%, -50%)' },
    '100%': { opacity: 1, transform: 'scale(1) translate(50%, -50%)' },
  }),
  my = Ze({
    '0%': { opacity: 1, transform: 'scale(1) translate(50%, -50%)' },
    '100%': { opacity: 0, transform: 'scale(0.2) translate(50%, -50%)' },
  }),
  hy = Ze({
    '0%': { opacity: 0, transform: 'scale(0.2) translate(-50%, -50%)' },
    '60%': { opacity: 0.75, transform: 'scale(1.2) translate(-50%, -50%)' },
    '100%': { opacity: 1, transform: 'scale(1) translate(-50%, -50%)' },
  }),
  yy = Ze({
    '0%': { opacity: 1, transform: 'scale(1) translate(-50%, -50%)' },
    '100%': { opacity: 0, transform: 'scale(0.2) translate(-50%, -50%)' },
  }),
  vy = Ze({
    '0%': { opacity: 0, transform: 'scale(0.2) translate(50%, 50%)' },
    '60%': { opacity: 0.75, transform: 'scale(1.2) translate(50%, 50%)' },
    '100%': { opacity: 1, transform: 'scale(1) translate(50%, 50%)' },
  }),
  $y = Ze({
    '0%': { opacity: 1, transform: 'scale(1) translate(50%, 50%)' },
    '100%': { opacity: 0, transform: 'scale(0.2) translate(50%, 50%)' },
  }),
  wy = Ze({
    '0%': { opacity: 0, transform: 'scale(0.2) translate(-50%, 50%)' },
    '60%': { opacity: 0.75, transform: 'scale(1.2) translate(-50%, 50%)' },
    '100%': { opacity: 1, transform: 'scale(1) translate(-50%, 50%)' },
  }),
  Sy = Ze({
    '0%': { opacity: 1, transform: 'scale(1) translate(-50%, 50%)' },
    '100%': { opacity: 0, transform: 'scale(0.2) translate(-50%, 50%)' },
  }),
  xy = te('span', {
    d: 'inline-flex',
    flexShrink: 0,
    verticalAlign: 'middle',
    position: 'relative',
    overflow: 'visible',
  }),
  by = te('span', {
    $$badgePlacementHOffset: '0%',
    $$badgePlacementVOffset: '0%',
    lineHeight: 1,
    display: 'flex',
    flexFlow: 'row wrap',
    placeContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
    bg: '$$badgeBackgroundColor',
    color: '$$badgeTextColor',
    fontWeight: '$bold',
    fontSize: '$$badgeFontSize',
    p: '$$badgeVPadding $$badgeHPadding',
    '@motion': {
      animation: 'none',
      transition: 'none',
      '&.nextui-badge--is-invisible': { animation: 'none', transition: 'none' },
    },
    variants: {
      size: {
        xs: {
          $$badgeVPadding: '$space$2',
          $$badgeHPadding: '$space$2',
          $$badgeFontSize: '0.65rem',
        },
        sm: {
          $$badgeVPadding: '$space$2',
          $$badgeHPadding: '$space$3',
          $$badgeFontSize: '0.73rem',
        },
        md: {
          $$badgeVPadding: '$space$3',
          $$badgeHPadding: '$space$4',
          $$badgeFontSize: '$fontSizes$xs',
        },
        lg: {
          $$badgeVPadding: '$space$4',
          $$badgeHPadding: '$space$5',
          $$badgeFontSize: '$fontSizes$base',
        },
        xl: {
          $$badgeVPadding: '$space$5',
          $$badgeHPadding: '$space$6',
          $$badgeFontSize: '$fontSizes$xl',
        },
      },
      shape: { circle: {}, rectangle: {} },
      asChild: {
        true: { zIndex: '$2', position: 'absolute', lineHeight: 1.5 },
      },
      isOneChar: { true: {} },
      color: {
        default: {
          $$badgeBackgroundColor: '$colors$neutral',
          $$badgeTextColor: '$colors$neutralSolidContrast',
          $$badgeShadowColor: '$colors$neutralShadow',
        },
        primary: {
          $$badgeBackgroundColor: '$colors$primary',
          $$badgeTextColor: '$colors$primarySolidContrast',
          $$badgeShadowColor: '$colors$primaryShadow',
        },
        secondary: {
          $$badgeBackgroundColor: '$colors$secondary',
          $$badgeTextColor: '$colors$secondarySolidContrast',
          $$badgeShadowColor: '$colors$secondaryShadow',
        },
        success: {
          $$badgeBackgroundColor: '$colors$success',
          $$badgeTextColor: '$colors$successSolidContrast',
          $$badgeShadowColor: '$colors$successShadow',
        },
        warning: {
          $$badgeBackgroundColor: '$colors$warning',
          $$badgeTextColor: '$colors$warningSolidContrast',
          $$badgeShadowColor: '$colors$warningShadow',
        },
        error: {
          $$badgeBackgroundColor: '$colors$error',
          $$badgeTextColor: '$colors$errorSolidContrast',
          $$badgeShadowColor: '$colors$errorShadow',
        },
      },
      enableShadow: { true: { boxShadow: '0 2px 10px 0 $$badgeShadowColor' } },
      isSquared: {
        true: { borderRadius: 'calc($$badgeFontSize * 0.45)' },
        false: { borderRadius: '$pill' },
      },
      placement: {
        'top-right': {
          animation: `${gy} 0.25s ease-out`,
          '&.nextui-badge--is-invisible': {
            opacity: 0,
            animation: `${my} 0.2s ease-in`,
          },
        },
        'top-left': {
          animation: `${hy} 0.25s ease-out`,
          '&.nextui-badge--is-invisible': {
            opacity: 0,
            animation: `${yy} 0.2s ease-in`,
          },
        },
        'bottom-right': {
          animation: `${vy} 0.25s ease-out`,
          '&.nextui-badge--is-invisible': {
            opacity: 0,
            animation: `${$y} 0.2s ease-in`,
          },
        },
        'bottom-left': {
          animation: `${wy} 0.25s ease-out`,
          '&.nextui-badge--is-invisible': {
            opacity: 0,
            animation: `${Sy} 0.2s ease-in`,
          },
        },
      },
      variant: {
        default: {},
        flat: {},
        dot: {
          p: 0,
          dflex: 'center',
          minSize: '$$badgeFontSize',
          boxSizing: 'border-box',
        },
        points: {
          p: 'calc($$badgeFontSize * 0.4)',
          boxSizing: 'border-box',
          $$badgePlacementHOffset: 'calc($$badgeFontSize * 0.8)',
        },
        bordered: {
          $$badgeBackgroundColor: '$colors$background',
          bg: '$background',
          bw: '$$badgeBorderWeight',
          borderStyle: 'solid',
          borderColor: '$$badgeTextColor',
        },
      },
      borderWeight: {
        light: { $$badgeBorderWeight: '$borderWeights$light' },
        normal: { $$badgeBorderWeight: '$borderWeights$normal' },
        bold: { $$badgeBorderWeight: '$borderWeights$bold' },
        extrabold: { $$badgeBorderWeight: '$borderWeights$extrabold' },
        black: { $$badgeBorderWeight: '$borderWeights$black' },
      },
      disableOutline: {
        true: { border: '2px solid transparent' },
        false: { border: '2px solid $colors$background' },
      },
      disableAnimation: {
        true: {
          animation: 'none',
          transition: 'none',
          '&.nextui-badge--is-invisible': {
            animation: 'none',
            transition: 'none',
          },
        },
      },
    },
    compoundVariants: [
      {
        variant: 'flat',
        color: 'default',
        css: {
          $$badgeBackgroundColor: '$colors$neutralLight',
          $$badgeTextColor: '$colors$neutralLightContrast',
        },
      },
      {
        variant: 'flat',
        color: 'primary',
        css: {
          $$badgeBackgroundColor: '$colors$primaryLight',
          $$badgeTextColor: '$colors$primaryLightContrast',
        },
      },
      {
        variant: 'flat',
        color: 'secondary',
        css: {
          $$badgeBackgroundColor: '$colors$secondaryLight',
          $$badgeTextColor: '$colors$secondaryLightContrast',
        },
      },
      {
        variant: 'flat',
        color: 'success',
        css: {
          $$badgeBackgroundColor: '$colors$successLight',
          $$badgeTextColor: '$colors$successLightContrast',
        },
      },
      {
        variant: 'flat',
        color: 'warning',
        css: {
          $$badgeBackgroundColor: '$colors$warningLight',
          $$badgeTextColor: '$colors$warningLightContrast',
        },
      },
      {
        variant: 'flat',
        color: 'error',
        css: {
          $$badgeBackgroundColor: '$colors$errorLight',
          $$badgeTextColor: '$colors$errorLightContrast',
        },
      },
      {
        variant: 'bordered',
        color: 'default',
        css: { $$badgeTextColor: '$colors$neutral' },
      },
      {
        variant: 'bordered',
        color: 'primary',
        css: { $$badgeTextColor: '$colors$primary' },
      },
      {
        variant: 'bordered',
        color: 'secondary',
        css: { $$badgeTextColor: '$colors$secondary' },
      },
      {
        variant: 'bordered',
        color: 'success',
        css: { $$badgeTextColor: '$colors$success' },
      },
      {
        variant: 'bordered',
        color: 'warning',
        css: { $$badgeTextColor: '$colors$warning' },
      },
      {
        variant: 'bordered',
        color: 'error',
        css: { $$badgeTextColor: '$colors$error' },
      },
      {
        asChild: !0,
        shape: 'rectangle',
        placement: 'top-right',
        css: {
          top: 'calc(5% + $$badgePlacementVOffset)',
          right: 'calc(5% + $$badgePlacementHOffset)',
          transform: 'scale(1) translate(50%, -50%)',
          transformOrigin: '100% 0%',
        },
      },
      {
        asChild: !0,
        shape: 'rectangle',
        placement: 'top-left',
        css: {
          top: 'calc(5% + $$badgePlacementVOffset)',
          left: 'calc(5% + $$badgePlacementHOffset)',
          transform: 'scale(1) translate(-50%, -50%)',
          transformOrigin: '0% 0%',
        },
      },
      {
        asChild: !0,
        shape: 'rectangle',
        placement: 'bottom-right',
        css: {
          bottom: 'calc(5% + $$badgePlacementVOffset)',
          right: 'calc(5% + $$badgePlacementHOffset)',
          transform: 'scale(1) translate(50%, 50%)',
          transformOrigin: '100% 100%',
        },
      },
      {
        asChild: !0,
        shape: 'rectangle',
        placement: 'bottom-left',
        css: {
          bottom: 'calc(5% + $$badgePlacementVOffset)',
          left: 'calc(5% + $$badgePlacementHOffset)',
          transform: 'scale(1) translate(-50%, 50%)',
          transformOrigin: '0% 100%',
        },
      },
      {
        asChild: !0,
        shape: 'circle',
        placement: 'top-right',
        css: {
          top: 'calc(15% + $$badgePlacementVOffset)',
          right: 'calc(15% + $$badgePlacementHOffset)',
          transform: 'scale(1) translate(50%, -50%)',
          transformOrigin: '100% 0%',
        },
      },
      {
        asChild: !0,
        shape: 'circle',
        placement: 'top-left',
        css: {
          top: 'calc(15% + $$badgePlacementVOffset)',
          left: 'calc(15% + $$badgePlacementHOffset)',
          transform: 'scale(1) translate(-50%, -50%)',
          transformOrigin: '0% 0%',
        },
      },
      {
        asChild: !0,
        shape: 'circle',
        placement: 'bottom-right',
        css: {
          bottom: 'calc(15% + $$badgePlacementVOffset)',
          right: 'calc(15% + $$badgePlacementHOffset)',
          transform: 'scale(1) translate(50%, 50%)',
          transformOrigin: '100% 100%',
        },
      },
      {
        asChild: !0,
        shape: 'circle',
        placement: 'bottom-left',
        css: {
          bottom: 'calc(15% + $$badgePlacementVOffset)',
          left: 'calc(15% + $$badgePlacementHOffset)',
          transform: 'scale(1) translate(-50%, 50%)',
          transformOrigin: '0% 100%',
        },
      },
      {
        variant: 'dot',
        shape: 'rectangle',
        css: {
          $$badgePlacementHOffset: 'calc($$badgeFontSize * 0.2)',
          $$badgePlacementVOffset: 'calc($$badgeFontSize * 0.1)',
        },
      },
      {
        isOneChar: !0,
        asChild: !0,
        css: { p: 0, size: 'calc($$badgeFontSize + $$badgeHPadding)' },
      },
      {
        isOneChar: !1,
        asChild: !0,
        css: { $$badgeVPadding: '0px', $$badgeHPadding: '$space$2' },
      },
      {
        isOneChar: !1,
        asChild: !0,
        size: 'md',
        css: { $$badgeHPadding: '$space$3' },
      },
      {
        isOneChar: !1,
        asChild: !0,
        size: 'lg',
        css: { $$badgeHPadding: '$space$4' },
      },
      {
        isOneChar: !1,
        asChild: !0,
        size: 'xl',
        css: { $$badgeHPadding: '$space$5' },
      },
      {
        disableOutline: !0,
        variant: 'bordered',
        css: { borderColor: '$$badgeTextColor' },
      },
    ],
    defaultVariants: {
      size: 'md',
      color: 'default',
      variant: 'default',
      borderWeight: 'normal',
      placement: 'top-right',
      shape: 'rectangle',
      enableShadow: !1,
      disableOutline: !1,
      isSquared: !1,
    },
  }),
  ky = te('div', {
    position: 'relative',
    dflex: 'center',
    '& .nextui-badge-point': {
      size: 'calc($$badgeFontSize * 0.3)',
      background: '$$badgeTextColor',
      margin: '0 2px',
      borderRadius: '$pill',
      '&:nth-child(1)': { animation: `${cl} 1.2s ease infinite` },
      '&:nth-child(2)': { animation: `${cl} 1.2s ease infinite 0.4s` },
      '&:nth-child(3)': { animation: `${cl} 1.2s ease infinite 0.8s` },
    },
  }),
  Fs = ap((e, t) => {
    const {
        css: n,
        children: r,
        content: o,
        isInvisible: i = !1,
        disableOutline: l,
        placement: s = 'top-right',
        variant: a = 'default',
        verticalOffset: c,
        horizontalOffset: g,
        disableAnimation: h = !1,
        className: p,
        ...m
      } = e,
      w = dn(t),
      S = o !== void 0 && !!r,
      L = k.useMemo(() => {
        var y
        return S && o && a !== 'points' && a !== 'dot'
          ? ((y = String(o)) == null ? void 0 : y.length) === 1
          : !(!r || typeof r != 'string') && r.length === 1
      }, [S, r, a, o]),
      f = k.useMemo(
        () =>
          a === 'dot'
            ? null
            : a === 'points'
            ? Te(ky, {
                className: 'nextui-badge-points',
                children: [
                  F('span', {
                    className: 'nextui-badge-point',
                    'data-testid': 'badge-point',
                  }),
                  F('span', {
                    className: 'nextui-badge-point',
                    'data-testid': 'badge-point',
                  }),
                  F('span', {
                    className: 'nextui-badge-point',
                    'data-testid': 'badge-point',
                  }),
                ],
              })
            : S
            ? o
            : r,
        [a, L, S, o, r]
      ),
      d = k.useMemo(() => {
        const y = typeof g == 'number',
          u = typeof c == 'number'
        return c && g
          ? {
              $$badgePlacementHOffset: y ? `${g}px` : g,
              $$badgePlacementVOffset: u ? `${c}px` : c,
              ...n,
            }
          : c
          ? { $$badgePlacementVOffset: u ? `${c}px` : c, ...n }
          : g
          ? { $$badgePlacementHOffset: y ? `${g}px` : g, ...n }
          : n
      }, [c, g, n])
    return Te(xy, {
      ref: w,
      className: Ae('nextui-badge-root', p),
      children: [
        S && r,
        F(by, {
          asChild: S,
          className: Ae('nextui-badge', { 'nextui-badge--is-invisible': i }),
          css: d,
          disableAnimation: h || !S,
          disableOutline: a === 'bordered' || l,
          isOneChar: L,
          placement: s,
          variant: a,
          ...m,
          children: f,
        }),
      ],
    })
  })
zi && (Fs.displayName = 'NextUI.Badge'), (Fs.toString = () => '.nextui-badge')
const Sp = Fs,
  Cy = ({ onAddDirection: e, numberDirections: t }) => {
    const [n, r] = k.useState(''),
      [o, i] = k.useState(!0),
      l = (a, c) => {
        r(a)
      },
      s = () => {
        i(!0), e(n), r('')
      }
    return F(gi, {
      children: Te(ft.Container, {
        gap: 1,
        justify: 'center',
        style: { py: '10vh' },
        children: [
          F(ft, {
            xs: 8,
            children: F(Rf, { onChange: l, value: n, onAddDirection: !0 }),
          }),
          F(ft, {
            children: F(Yr, {
              onClick: s,
              disabled: !(n.length >= 10 && t < 10 && o),
              children: 'Agregar',
            }),
          }),
        ],
      }),
    })
  }
var xp = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Sc = _.createContext && _.createContext(xp),
  Nt =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Nt =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            return e
          }),
        Nt.apply(this, arguments)
      )
    },
  Ey =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {}
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r])
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]])
      return n
    }
function bp(e) {
  return (
    e &&
    e.map(function (t, n) {
      return _.createElement(t.tag, Nt({ key: n }, t.attr), bp(t.child))
    })
  )
}
function kp(e) {
  return function (t) {
    return _.createElement(Py, Nt({ attr: Nt({}, e.attr) }, t), bp(e.child))
  }
}
function Py(e) {
  var t = function (n) {
    var r = e.attr,
      o = e.size,
      i = e.title,
      l = Ey(e, ['attr', 'size', 'title']),
      s = o || n.size || '1em',
      a
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + ' ' : '') + e.className),
      _.createElement(
        'svg',
        Nt(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          l,
          {
            className: a,
            style: Nt(Nt({ color: e.color || n.color }, n.style), e.style),
            height: s,
            width: s,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        i && _.createElement('title', null, i),
        e.children
      )
    )
  }
  return Sc !== void 0
    ? _.createElement(Sc.Consumer, null, function (n) {
        return t(n)
      })
    : t(xp)
}
function Ty(e) {
  return kp({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    child: [
      {
        tag: 'path',
        attr: { d: 'M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z' },
      },
      { tag: 'line', attr: { x1: '18', y1: '9', x2: '12', y2: '15' } },
      { tag: 'line', attr: { x1: '12', y1: '9', x2: '18', y2: '15' } },
    ],
  })(e)
}
function Ly(e) {
  return kp({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7',
        },
      },
      {
        tag: 'path',
        attr: { d: 'M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' },
      },
    ],
  })(e)
}
const zy = ({ index: e, value: t, onChange: n, onDelete: r }) => {
    const [o, i] = k.useState(!0),
      l = () => {
        i(!o)
      },
      s = () => {
        r(e)
      }
    return F('div', {
      children: F(ft.Container, {
        gap: 1,
        justify: 'center',
        children: Te(ft, {
          xs: 12,
          sm: 10,
          md: 8,
          children: [
            F(Sp, {
              color: 'error',
              style: { padding: 10, width: 40, marginRight: 10 },
              children: String.fromCharCode(e + 1 + 64),
            }),
            F(Rf, { value: t, index: e, onChange: n, isDisabled: o }),
            F(Yr, {
              auto: !0,
              flat: !0,
              color: 'primary',
              size: 'md',
              onClick: l,
              icon: F(Ly, {}),
              style: { marginLeft: 10, marginRight: 10 },
            }),
            F(Yr, {
              auto: !0,
              flat: !0,
              color: 'error',
              size: 'md',
              onClick: s,
              icon: F(Ty, {}),
            }),
          ],
        }),
      }),
    })
  },
  Fy = ({ directions: e, setDirections: t }) => {
    const n = (o, i) => {
        t(e.map((l, s) => (s === i ? o : l)))
      },
      r = (o) => {
        t(e.filter((i, l) => o != l))
      }
    return Te(Xr, {
      className: 'directionsContainer',
      fluid: !0,
      style: { marginTop: 30 },
      children: [
        e.length > 0 && F('h4', { children: 'Lista de direcciones' }),
        e.map((o, i) =>
          F(zy, { value: o, index: i, onChange: n, onDelete: r }, i)
        ),
      ],
    })
  },
  xc = (e) => {
    const t = e[0],
      n = e[e.length - 1],
      r = e.slice(1, e.length - 1).map((o) => ({ location: o, stopover: !0 }))
    return { firstStop: t, lastStop: n, middleStops: r }
  },
  Ry = ({ firstStop: e, lastStop: t, middleStops: n }, { routes: r }) => {
    const { waypoint_order: o } = r[0],
      i = o.map((l) => n[l].location)
    return [e, ...i, t]
  },
  My = async ({
    waypoints: e,
    directionsServices: t,
    directionsDisplay: n,
    htmlMap: r,
    setDirections: o,
    setStatus: i,
  }) => {
    const { firstStop: l, lastStop: s, middleStops: a } = xc(e),
      c = {
        origin: l,
        destination: s,
        travelMode: Kn.maps.TravelMode.DRIVING,
        waypoints: a,
        optimizeWaypoints: !0,
        unitSystem: Kn.maps.UnitSystem.IMPERIAL,
      },
      h = await (async () => {
        try {
          const p = await t.route(c)
          return i('OK'), p
        } catch (p) {
          i(p.code)
        }
      })()
    h &&
      (n.setDirections({ routes: [] }),
      n.setMap(r),
      n.setDirections(h),
      o(Ry(xc(e), h)))
  },
  Ny = ({ waypoints: e = [], setDirections: t }) => {
    const [n, r] = k.useState('OK'),
      [o, i] = k.useState(!0),
      [l, s] = k.useState(new Kn.maps.DirectionsService()),
      [a, c] = k.useState(new Kn.maps.DirectionsRenderer()),
      [g, h] = k.useState()
    k.useEffect(() => {
      const w = document.getElementById($r.MAP_ID)
      h(new Kn.maps.Map(w, $r.MAP))
    }, []),
      k.useEffect(() => {
        e.length < 2 ? i(!0) : i(!1)
      }, [e])
    const p = () => {
        a.setDirections({ routes: [] })
      },
      m = () => {
        e.length >= 2 &&
          (p(),
          My({
            directionsDisplay: a,
            directionsServices: l,
            waypoints: e,
            htmlMap: g,
            setDirections: t,
            setStatus: r,
          }))
      }
    return Te(gi, {
      children: [
        n != 'OK' &&
          F(Vt, {
            style: { marginBottom: 50, marginTop: 30 },
            children: F(Vt.Body, {
              children: F(wp, {
                children: $r.ERRORS.LIST.includes(n)
                  ? $r.ERRORS.MESSAGES[n]
                  : `Ocurrio un error: ${n}`,
              }),
            }),
          }),
        F(Xr, { id: 'map-container' }),
        F(Xr, {
          children: F(fy, {
            justify: 'center',
            style: { padding: 15 },
            children: F(Yr, {
              onClick: m,
              disabled: o,
              children: 'Calcular ruta',
            }),
          }),
        }),
      ],
    })
  },
  Oy = () =>
    F(gi, {
      children: F(Xr, {
        justify: 'center',
        css: { pt: '3rem' },
        gap: 3,
        children: Te(ft.Container, {
          gap: 0,
          justify: 'center',
          children: [
            F(ft, { children: F(wp, { h1: !0, children: 'Rocket' }) }),
            F(ft, {
              children: F(Sp, {
                size: 'lg',
                color: 'primary',
                placement: 'bottom-left',
                variant: 'flat',
                children: 'Calcula tu ruta',
              }),
            }),
          ],
        }),
      }),
    }),
  _y = () => {
    const [e, t] = k.useState([])
    return Te(Vh, {
      children: [
        F(Oy, {}),
        Te(Xr, {
          fluid: !0,
          children: [
            F(Cy, {
              onAddDirection: (r) => {
                t([...e, r])
              },
              numberDirections: e.length,
            }),
            F(Fy, { directions: e, setDirections: t }),
            F(Ny, { waypoints: e, setDirections: t }),
          ],
        }),
      ],
    })
  }
dl.createRoot(document.getElementById('root')).render(
  F(_.StrictMode, { children: F(_y, {}) })
)
