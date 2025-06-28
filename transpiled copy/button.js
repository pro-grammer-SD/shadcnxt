"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// my-app/node_modules/react/cjs/react.production.js
var require_react_production = __commonJS({
  "my-app/node_modules/react/cjs/react.production.js"(exports2) {
    "use strict";
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
    var REACT_PORTAL_TYPE = Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
    var REACT_CONTEXT_TYPE = Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
    var REACT_MEMO_TYPE = Symbol.for("react.memo");
    var REACT_LAZY_TYPE = Symbol.for("react.lazy");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    var ReactNoopUpdateQueue = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    };
    var assign = Object.assign;
    var emptyObject = {};
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
      if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    function ComponentDummy() {
    }
    ComponentDummy.prototype = Component.prototype;
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent;
    assign(pureComponentPrototype, Component.prototype);
    pureComponentPrototype.isPureReactComponent = true;
    var isArrayImpl = Array.isArray;
    var ReactSharedInternals = { H: null, A: null, T: null, S: null, V: null };
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function ReactElement(type, key, self, source, owner, props) {
      self = props.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== self ? self : null,
        props
      };
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      return ReactElement(
        oldElement.type,
        newKey,
        void 0,
        void 0,
        void 0,
        oldElement.props
      );
    }
    function isValidElement2(object) {
      return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return "$" + key.replace(/[=:]/g, function(match) {
        return escaperLookup[match];
      });
    }
    var userProvidedKeyEscapeRegex = /\/+/g;
    function getElementKey(element, index) {
      return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
    }
    function noop$1() {
    }
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch ("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(
            function(fulfilledValue) {
              "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
            },
            function(error) {
              "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
            }
          )), thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if ("undefined" === type || "boolean" === type) children = null;
      var invokeCallback = false;
      if (null === children) invokeCallback = true;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = true;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
                break;
              case REACT_LAZY_TYPE:
                return invokeCallback = children._init, mapIntoArray(
                  invokeCallback(children._payload),
                  array,
                  escapedPrefix,
                  nameSoFar,
                  callback
                );
            }
        }
      if (invokeCallback)
        return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
          return c;
        })) : null != callback && (isValidElement2(callback) && (callback = cloneAndReplaceKey(
          callback,
          escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(
            userProvidedKeyEscapeRegex,
            "$&/"
          ) + "/") + invokeCallback
        )), array.push(callback)), 1;
      invokeCallback = 0;
      var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0; i < children.length; i++)
          nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
            nameSoFar,
            array,
            escapedPrefix,
            type,
            callback
          );
      else if (i = getIteratorFn(children), "function" === typeof i)
        for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
          nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
            nameSoFar,
            array,
            escapedPrefix,
            type,
            callback
          );
      else if ("object" === type) {
        if ("function" === typeof children.then)
          return mapIntoArray(
            resolveThenable(children),
            array,
            escapedPrefix,
            nameSoFar,
            callback
          );
        array = String(children);
        throw Error(
          "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
        );
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (null == children) return children;
      var result = [], count = 0;
      mapIntoArray(children, result, "", "", function(child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (-1 === payload._status) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(
          function(moduleObject) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 1, payload._result = moduleObject;
          },
          function(error) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 2, payload._result = error;
          }
        );
        -1 === payload._status && (payload._status = 0, payload._result = ctor);
      }
      if (1 === payload._status) return payload._result.default;
      throw payload._result;
    }
    var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
      if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event)) return;
      } else if ("object" === typeof process && "function" === typeof process.emit) {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    };
    function noop() {
    }
    exports2.Children = {
      map: mapChildren,
      forEach: function(children, forEachFunc, forEachContext) {
        mapChildren(
          children,
          function() {
            forEachFunc.apply(this, arguments);
          },
          forEachContext
        );
      },
      count: function(children) {
        var n = 0;
        mapChildren(children, function() {
          n++;
        });
        return n;
      },
      toArray: function(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      },
      only: function(children) {
        if (!isValidElement2(children))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return children;
      }
    };
    exports2.Component = Component;
    exports2.Fragment = REACT_FRAGMENT_TYPE;
    exports2.Profiler = REACT_PROFILER_TYPE;
    exports2.PureComponent = PureComponent;
    exports2.StrictMode = REACT_STRICT_MODE_TYPE;
    exports2.Suspense = REACT_SUSPENSE_TYPE;
    exports2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports2.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(size) {
        return ReactSharedInternals.H.useMemoCache(size);
      }
    };
    exports2.cache = function(fn) {
      return function() {
        return fn.apply(null, arguments);
      };
    };
    exports2.cloneElement = function(element, config, children) {
      if (null === element || void 0 === element)
        throw Error(
          "The argument must be a React element, but you passed " + element + "."
        );
      var props = assign({}, element.props), key = element.key, owner = void 0;
      if (null != config)
        for (propName in void 0 !== config.ref && (owner = void 0), void 0 !== config.key && (key = "" + config.key), config)
          !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
      var propName = arguments.length - 2;
      if (1 === propName) props.children = children;
      else if (1 < propName) {
        for (var childArray = Array(propName), i = 0; i < propName; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      return ReactElement(element.type, key, void 0, void 0, owner, props);
    };
    exports2.createContext = function(defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      return defaultValue;
    };
    exports2.createElement = function(type, config, children) {
      var propName, props = {}, key = null;
      if (null != config)
        for (propName in void 0 !== config.key && (key = "" + config.key), config)
          hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (1 === childrenLength) props.children = children;
      else if (1 < childrenLength) {
        for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in childrenLength = type.defaultProps, childrenLength)
          void 0 === props[propName] && (props[propName] = childrenLength[propName]);
      return ReactElement(type, key, void 0, void 0, null, props);
    };
    exports2.createRef = function() {
      return { current: null };
    };
    exports2.forwardRef = function(render) {
      return { $$typeof: REACT_FORWARD_REF_TYPE, render };
    };
    exports2.isValidElement = isValidElement2;
    exports2.lazy = function(ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports2.memo = function(type, compare) {
      return {
        $$typeof: REACT_MEMO_TYPE,
        type,
        compare: void 0 === compare ? null : compare
      };
    };
    exports2.startTransition = function(scope) {
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      try {
        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
        null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
        "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        ReactSharedInternals.T = prevTransition;
      }
    };
    exports2.unstable_useCacheRefresh = function() {
      return ReactSharedInternals.H.useCacheRefresh();
    };
    exports2.use = function(usable) {
      return ReactSharedInternals.H.use(usable);
    };
    exports2.useActionState = function(action, initialState, permalink) {
      return ReactSharedInternals.H.useActionState(action, initialState, permalink);
    };
    exports2.useCallback = function(callback, deps) {
      return ReactSharedInternals.H.useCallback(callback, deps);
    };
    exports2.useContext = function(Context) {
      return ReactSharedInternals.H.useContext(Context);
    };
    exports2.useDebugValue = function() {
    };
    exports2.useDeferredValue = function(value, initialValue) {
      return ReactSharedInternals.H.useDeferredValue(value, initialValue);
    };
    exports2.useEffect = function(create, createDeps, update) {
      var dispatcher = ReactSharedInternals.H;
      if ("function" === typeof update)
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return dispatcher.useEffect(create, createDeps);
    };
    exports2.useId = function() {
      return ReactSharedInternals.H.useId();
    };
    exports2.useImperativeHandle = function(ref, create, deps) {
      return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
    };
    exports2.useInsertionEffect = function(create, deps) {
      return ReactSharedInternals.H.useInsertionEffect(create, deps);
    };
    exports2.useLayoutEffect = function(create, deps) {
      return ReactSharedInternals.H.useLayoutEffect(create, deps);
    };
    exports2.useMemo = function(create, deps) {
      return ReactSharedInternals.H.useMemo(create, deps);
    };
    exports2.useOptimistic = function(passthrough, reducer) {
      return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
    };
    exports2.useReducer = function(reducer, initialArg, init) {
      return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
    };
    exports2.useRef = function(initialValue) {
      return ReactSharedInternals.H.useRef(initialValue);
    };
    exports2.useState = function(initialState) {
      return ReactSharedInternals.H.useState(initialState);
    };
    exports2.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
      return ReactSharedInternals.H.useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
      );
    };
    exports2.useTransition = function() {
      return ReactSharedInternals.H.useTransition();
    };
    exports2.version = "19.1.0";
  }
});

// my-app/node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "my-app/node_modules/react/cjs/react.development.js"(exports2, module2) {
    "use strict";
    "production" !== process.env.NODE_ENV && function() {
      function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              info[0],
              info[1]
            );
          }
        });
      }
      function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable)
          return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
      }
      function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          callerName,
          publicInstance
        ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
      }
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function ComponentDummy() {
      }
      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(
          oldElement.type,
          newKey,
          void 0,
          void 0,
          oldElement._owner,
          oldElement.props,
          oldElement._debugStack,
          oldElement._debugTask
        );
        oldElement._store && (newKey._store.validated = oldElement._store.validated);
        return newKey;
      }
      function isValidElement2(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function escape(key) {
        var escaperLookup = { "=": "=0", ":": "=2" };
        return "$" + key.replace(/[=:]/g, function(match) {
          return escaperLookup[match];
        });
      }
      function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
      }
      function noop$1() {
      }
      function resolveThenable(thenable) {
        switch (thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenable.reason;
          default:
            switch ("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(
              function(fulfilledValue) {
                "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
              },
              function(error) {
                "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            )), thenable.status) {
              case "fulfilled":
                return thenable.value;
              case "rejected":
                throw thenable.reason;
            }
        }
        throw thenable;
      }
      function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = false;
        if (null === children) invokeCallback = true;
        else
          switch (type) {
            case "bigint":
            case "string":
            case "number":
              invokeCallback = true;
              break;
            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
                  break;
                case REACT_LAZY_TYPE:
                  return invokeCallback = children._init, mapIntoArray(
                    invokeCallback(children._payload),
                    array,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  );
              }
          }
        if (invokeCallback) {
          invokeCallback = children;
          callback = callback(invokeCallback);
          var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
          isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
            return c;
          })) : null != callback && (isValidElement2(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
            callback,
            escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
              userProvidedKeyEscapeRegex,
              "$&/"
            ) + "/") + childKey
          ), "" !== nameSoFar && null != invokeCallback && isValidElement2(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
          return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children))
          for (var i = 0; i < children.length; i++)
            nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if (i = getIteratorFn(children), "function" === typeof i)
          for (i === children.entries && (didWarnAboutMaps || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), didWarnAboutMaps = true), children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
            nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if ("object" === type) {
          if ("function" === typeof children.then)
            return mapIntoArray(
              resolveThenable(children),
              array,
              escapedPrefix,
              nameSoFar,
              callback
            );
          array = String(children);
          throw Error(
            "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return invokeCallback;
      }
      function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
          return func.call(context, child, count++);
        });
        return result;
      }
      function lazyInitializer(payload) {
        if (-1 === payload._status) {
          var ctor = payload._result;
          ctor = ctor();
          ctor.then(
            function(moduleObject) {
              if (0 === payload._status || -1 === payload._status)
                payload._status = 1, payload._result = moduleObject;
            },
            function(error) {
              if (0 === payload._status || -1 === payload._status)
                payload._status = 2, payload._result = error;
            }
          );
          -1 === payload._status && (payload._status = 0, payload._result = ctor);
        }
        if (1 === payload._status)
          return ctor = payload._result, void 0 === ctor && console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
            ctor
          ), "default" in ctor || console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
            ctor
          ), ctor.default;
        throw payload._result;
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      function noop() {
      }
      function enqueueTask(task) {
        if (null === enqueueTaskImpl)
          try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module2 && module2[requireString]).call(
              module2,
              "timers"
            ).setImmediate;
          } catch (_err) {
            enqueueTaskImpl = function(callback) {
              false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var channel = new MessageChannel();
              channel.port1.onmessage = callback;
              channel.port2.postMessage(void 0);
            };
          }
        return enqueueTaskImpl(task);
      }
      function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
      }
      function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        );
        actScopeDepth = prevActScopeDepth;
      }
      function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue)
          if (0 !== queue.length)
            try {
              flushActQueue(queue);
              enqueueTask(function() {
                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
              });
              return;
            } catch (error) {
              ReactSharedInternals.thrownErrors.push(error);
            }
          else ReactSharedInternals.actQueue = null;
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
      }
      function flushActQueue(queue) {
        if (!isFlushing) {
          isFlushing = true;
          var i = 0;
          try {
            for (; i < queue.length; i++) {
              var callback = queue[i];
              do {
                ReactSharedInternals.didUsePromise = false;
                var continuation = callback(false);
                if (null !== continuation) {
                  if (ReactSharedInternals.didUsePromise) {
                    queue[i] = callback;
                    queue.splice(0, i);
                    return;
                  }
                  callback = continuation;
                } else break;
              } while (1);
            }
            queue.length = 0;
          } catch (error) {
            queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
          } finally {
            isFlushing = false;
          }
        }
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      Symbol.for("react.provider");
      var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
          return false;
        },
        enqueueForceUpdate: function(publicInstance) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
          warnNoop(publicInstance, "setState");
        }
      }, assign = Object.assign, emptyObject = {};
      Object.freeze(emptyObject);
      Component.prototype.isReactComponent = {};
      Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      };
      Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, fnName;
      for (fnName in deprecatedAPIs)
        deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      ComponentDummy.prototype = Component.prototype;
      deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
      deprecatedAPIs.constructor = PureComponent;
      assign(deprecatedAPIs, Component.prototype);
      deprecatedAPIs.isPureReactComponent = true;
      var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false,
        didUsePromise: false,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      deprecatedAPIs = {
        "react-stack-bottom-frame": function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = deprecatedAPIs["react-stack-bottom-frame"].bind(deprecatedAPIs, UnknownOwner)();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
          var event = new window.ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
            error
          });
          if (!window.dispatchEvent(event)) return;
        } else if ("object" === typeof process && "function" === typeof process.emit) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
          return queueMicrotask(callback);
        });
      } : enqueueTask;
      deprecatedAPIs = Object.freeze({
        __proto__: null,
        c: function(size) {
          return resolveDispatcher().useMemoCache(size);
        }
      });
      exports2.Children = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
          mapChildren(
            children,
            function() {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        },
        count: function(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        },
        toArray: function(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        },
        only: function(children) {
          if (!isValidElement2(children))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return children;
        }
      };
      exports2.Component = Component;
      exports2.Fragment = REACT_FRAGMENT_TYPE;
      exports2.Profiler = REACT_PROFILER_TYPE;
      exports2.PureComponent = PureComponent;
      exports2.StrictMode = REACT_STRICT_MODE_TYPE;
      exports2.Suspense = REACT_SUSPENSE_TYPE;
      exports2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
      exports2.__COMPILER_RUNTIME = deprecatedAPIs;
      exports2.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
        try {
          var result = callback();
        } catch (error) {
          ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
          var thenable = result;
          queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          });
          return {
            then: function(resolve, reject) {
              didAwaitActCall = true;
              thenable.then(
                function(returnValue) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  if (0 === prevActScopeDepth) {
                    try {
                      flushActQueue(queue), enqueueTask(function() {
                        return recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve,
                          reject
                        );
                      });
                    } catch (error$0) {
                      ReactSharedInternals.thrownErrors.push(error$0);
                    }
                    if (0 < ReactSharedInternals.thrownErrors.length) {
                      var _thrownError = aggregateErrors(
                        ReactSharedInternals.thrownErrors
                      );
                      ReactSharedInternals.thrownErrors.length = 0;
                      reject(_thrownError);
                    }
                  } else resolve(returnValue);
                },
                function(error) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(
                    ReactSharedInternals.thrownErrors
                  ), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                }
              );
            }
          };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
              return recursivelyFlushAsyncActWork(
                returnValue$jscomp$0,
                resolve,
                reject
              );
            })) : resolve(returnValue$jscomp$0);
          }
        };
      };
      exports2.cache = function(fn) {
        return function() {
          return fn.apply(null, arguments);
        };
      };
      exports2.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
      };
      exports2.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element)
          throw Error(
            "The argument must be a React element, but you passed " + element + "."
          );
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
          var JSCompiler_inline_result;
          a: {
            if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
              config,
              "ref"
            ).get) && JSCompiler_inline_result.isReactWarning) {
              JSCompiler_inline_result = false;
              break a;
            }
            JSCompiler_inline_result = void 0 !== config.ref;
          }
          JSCompiler_inline_result && (owner = getOwner());
          hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
          for (propName in config)
            !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
          JSCompiler_inline_result = Array(propName);
          for (var i = 0; i < propName; i++)
            JSCompiler_inline_result[i] = arguments[i + 2];
          props.children = JSCompiler_inline_result;
        }
        props = ReactElement(
          element.type,
          key,
          void 0,
          void 0,
          owner,
          props,
          element._debugStack,
          element._debugTask
        );
        for (key = 2; key < arguments.length; key++)
          owner = arguments[key], isValidElement2(owner) && owner._store && (owner._store.validated = 1);
        return props;
      };
      exports2.createContext = function(defaultValue) {
        defaultValue = {
          $$typeof: REACT_CONTEXT_TYPE,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
          $$typeof: REACT_CONSUMER_TYPE,
          _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
      };
      exports2.createElement = function(type, config, children) {
        for (var i = 2; i < arguments.length; i++) {
          var node = arguments[i];
          isValidElement2(node) && node._store && (node._store.validated = 1);
        }
        i = {};
        node = null;
        if (null != config)
          for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), hasValidKey(config) && (checkKeyStringCoercion(config.key), node = "" + config.key), config)
            hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children;
        else if (1 < childrenLength) {
          for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
            childArray[_i] = arguments[_i + 2];
          Object.freeze && Object.freeze(childArray);
          i.children = childArray;
        }
        if (type && type.defaultProps)
          for (propName in childrenLength = type.defaultProps, childrenLength)
            void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        node && defineKeyPropWarningGetter(
          i,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return ReactElement(
          type,
          node,
          void 0,
          void 0,
          getOwner(),
          i,
          propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports2.createRef = function() {
        var refObject = { current: null };
        Object.seal(refObject);
        return refObject;
      };
      exports2.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : "function" !== typeof render ? console.error(
          "forwardRef requires a render function but was given %s.",
          null === render ? "null" : typeof render
        ) : 0 !== render.length && 2 !== render.length && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        );
        null != render && null != render.defaultProps && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
        Object.defineProperty(elementType, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
          }
        });
        return elementType;
      };
      exports2.isValidElement = isValidElement2;
      exports2.lazy = function(ctor) {
        return {
          $$typeof: REACT_LAZY_TYPE,
          _payload: { _status: -1, _result: ctor },
          _init: lazyInitializer
        };
      };
      exports2.memo = function(type, compare) {
        null == type && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          null === type ? "null" : typeof type
        );
        compare = {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
          }
        });
        return compare;
      };
      exports2.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        ReactSharedInternals.T = currentTransition;
        currentTransition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
        } catch (error) {
          reportGlobalError(error);
        } finally {
          null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), ReactSharedInternals.T = prevTransition;
        }
      };
      exports2.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
      };
      exports2.use = function(usable) {
        return resolveDispatcher().use(usable);
      };
      exports2.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(
          action,
          initialState,
          permalink
        );
      };
      exports2.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
      };
      exports2.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        );
        return dispatcher.useContext(Context);
      };
      exports2.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
      };
      exports2.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
      };
      exports2.useEffect = function(create, createDeps, update) {
        null == create && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var dispatcher = resolveDispatcher();
        if ("function" === typeof update)
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return dispatcher.useEffect(create, createDeps);
      };
      exports2.useId = function() {
        return resolveDispatcher().useId();
      };
      exports2.useImperativeHandle = function(ref, create, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create, deps);
      };
      exports2.useInsertionEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useInsertionEffect(create, deps);
      };
      exports2.useLayoutEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useLayoutEffect(create, deps);
      };
      exports2.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
      };
      exports2.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
      };
      exports2.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
      };
      exports2.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
      };
      exports2.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
      };
      exports2.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(
          subscribe,
          getSnapshot,
          getServerSnapshot
        );
      };
      exports2.useTransition = function() {
        return resolveDispatcher().useTransition();
      };
      exports2.version = "19.1.0";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }
});

// my-app/node_modules/react/index.js
var require_react = __commonJS({
  "my-app/node_modules/react/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_production();
    } else {
      module2.exports = require_react_development();
    }
  }
});

// my-app/node_modules/react/cjs/react-jsx-runtime.production.js
var require_react_jsx_runtime_production = __commonJS({
  "my-app/node_modules/react/cjs/react-jsx-runtime.production.js"(exports2) {
    "use strict";
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
    var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    function jsxProd(type, config, maybeKey) {
      var key = null;
      void 0 !== maybeKey && (key = "" + maybeKey);
      void 0 !== config.key && (key = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          "key" !== propName && (maybeKey[propName] = config[propName]);
      } else maybeKey = config;
      config = maybeKey.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== config ? config : null,
        props: maybeKey
      };
    }
    exports2.Fragment = REACT_FRAGMENT_TYPE;
    exports2.jsx = jsxProd;
    exports2.jsxs = jsxProd;
  }
});

// my-app/node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "my-app/node_modules/react/cjs/react-jsx-runtime.development.js"(exports2) {
    "use strict";
    "production" !== process.env.NODE_ENV && function() {
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children)
          if (isStaticChildren)
            if (isArrayImpl(children)) {
              for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)
                validateChildKeys(children[isStaticChildren]);
              Object.freeze && Object.freeze(children);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
          children = getComponentNameFromType(type);
          var keys = Object.keys(config).filter(function(k) {
            return "key" !== k;
          });
          isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
          didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(
            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
            isStaticChildren,
            children,
            keys,
            children
          ), didWarnAboutKeySpread[children + isStaticChildren] = true);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
          maybeKey = {};
          for (var propName in config)
            "key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(
          maybeKey,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        return ReactElement(
          type,
          children,
          self,
          source,
          getOwner(),
          maybeKey,
          debugStack,
          debugTask
        );
      }
      function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
      }
      var React4 = require_react(), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      Symbol.for("react.provider");
      var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React4.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      React4 = {
        "react-stack-bottom-frame": function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = React4["react-stack-bottom-frame"].bind(
        React4,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutKeySpread = {};
      exports2.Fragment = REACT_FRAGMENT_TYPE;
      exports2.jsx = function(type, config, maybeKey, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          false,
          source,
          self,
          trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports2.jsxs = function(type, config, maybeKey, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          true,
          source,
          self,
          trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
    }();
  }
});

// my-app/node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "my-app/node_modules/react/jsx-runtime.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_jsx_runtime_production();
    } else {
      module2.exports = require_react_jsx_runtime_development();
    }
  }
});

// my-app/node_modules/clsx/dist/clsx.js
var require_clsx = __commonJS({
  "my-app/node_modules/clsx/dist/clsx.js"(exports2, module2) {
    function r2(e2) {
      var o, t, f = "";
      if ("string" == typeof e2 || "number" == typeof e2) f += e2;
      else if ("object" == typeof e2) if (Array.isArray(e2)) {
        var n = e2.length;
        for (o = 0; o < n; o++) e2[o] && (t = r2(e2[o])) && (f && (f += " "), f += t);
      } else for (t in e2) e2[t] && (f && (f += " "), f += t);
      return f;
    }
    function e() {
      for (var e2, o, t = 0, f = "", n = arguments.length; t < n; t++) (e2 = arguments[t]) && (o = r2(e2)) && (f && (f += " "), f += o);
      return f;
    }
    module2.exports = e, module2.exports.clsx = e;
  }
});

// my-app/node_modules/tailwind-merge/dist/bundle-cjs.js
var require_bundle_cjs = __commonJS({
  "my-app/node_modules/tailwind-merge/dist/bundle-cjs.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, Symbol.toStringTag, {
      value: "Module"
    });
    var CLASS_PART_SEPARATOR = "-";
    var createClassGroupUtils = (config) => {
      const classMap = createClassMap(config);
      const {
        conflictingClassGroups,
        conflictingClassGroupModifiers
      } = config;
      const getClassGroupId = (className) => {
        const classParts = className.split(CLASS_PART_SEPARATOR);
        if (classParts[0] === "" && classParts.length !== 1) {
          classParts.shift();
        }
        return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
      };
      const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
        const conflicts = conflictingClassGroups[classGroupId] || [];
        if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
          return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
        }
        return conflicts;
      };
      return {
        getClassGroupId,
        getConflictingClassGroupIds
      };
    };
    var getGroupRecursive = (classParts, classPartObject) => {
      if (classParts.length === 0) {
        return classPartObject.classGroupId;
      }
      const currentClassPart = classParts[0];
      const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
      const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
      if (classGroupFromNextClassPart) {
        return classGroupFromNextClassPart;
      }
      if (classPartObject.validators.length === 0) {
        return void 0;
      }
      const classRest = classParts.join(CLASS_PART_SEPARATOR);
      return classPartObject.validators.find(({
        validator
      }) => validator(classRest))?.classGroupId;
    };
    var arbitraryPropertyRegex = /^\[(.+)\]$/;
    var getGroupIdForArbitraryProperty = (className) => {
      if (arbitraryPropertyRegex.test(className)) {
        const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
        const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(":"));
        if (property) {
          return "arbitrary.." + property;
        }
      }
    };
    var createClassMap = (config) => {
      const {
        theme,
        classGroups
      } = config;
      const classMap = {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      };
      for (const classGroupId in classGroups) {
        processClassesRecursively(classGroups[classGroupId], classMap, classGroupId, theme);
      }
      return classMap;
    };
    var processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
      classGroup.forEach((classDefinition) => {
        if (typeof classDefinition === "string") {
          const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
          classPartObjectToEdit.classGroupId = classGroupId;
          return;
        }
        if (typeof classDefinition === "function") {
          if (isThemeGetter(classDefinition)) {
            processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
            return;
          }
          classPartObject.validators.push({
            validator: classDefinition,
            classGroupId
          });
          return;
        }
        Object.entries(classDefinition).forEach(([key, classGroup2]) => {
          processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
        });
      });
    };
    var getPart = (classPartObject, path) => {
      let currentClassPartObject = classPartObject;
      path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
        if (!currentClassPartObject.nextPart.has(pathPart)) {
          currentClassPartObject.nextPart.set(pathPart, {
            nextPart: /* @__PURE__ */ new Map(),
            validators: []
          });
        }
        currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
      });
      return currentClassPartObject;
    };
    var isThemeGetter = (func) => func.isThemeGetter;
    var createLruCache = (maxCacheSize) => {
      if (maxCacheSize < 1) {
        return {
          get: () => void 0,
          set: () => {
          }
        };
      }
      let cacheSize = 0;
      let cache = /* @__PURE__ */ new Map();
      let previousCache = /* @__PURE__ */ new Map();
      const update = (key, value) => {
        cache.set(key, value);
        cacheSize++;
        if (cacheSize > maxCacheSize) {
          cacheSize = 0;
          previousCache = cache;
          cache = /* @__PURE__ */ new Map();
        }
      };
      return {
        get(key) {
          let value = cache.get(key);
          if (value !== void 0) {
            return value;
          }
          if ((value = previousCache.get(key)) !== void 0) {
            update(key, value);
            return value;
          }
        },
        set(key, value) {
          if (cache.has(key)) {
            cache.set(key, value);
          } else {
            update(key, value);
          }
        }
      };
    };
    var IMPORTANT_MODIFIER = "!";
    var MODIFIER_SEPARATOR = ":";
    var MODIFIER_SEPARATOR_LENGTH = MODIFIER_SEPARATOR.length;
    var createParseClassName = (config) => {
      const {
        prefix,
        experimentalParseClassName
      } = config;
      let parseClassName = (className) => {
        const modifiers = [];
        let bracketDepth = 0;
        let parenDepth = 0;
        let modifierStart = 0;
        let postfixModifierPosition;
        for (let index = 0; index < className.length; index++) {
          let currentCharacter = className[index];
          if (bracketDepth === 0 && parenDepth === 0) {
            if (currentCharacter === MODIFIER_SEPARATOR) {
              modifiers.push(className.slice(modifierStart, index));
              modifierStart = index + MODIFIER_SEPARATOR_LENGTH;
              continue;
            }
            if (currentCharacter === "/") {
              postfixModifierPosition = index;
              continue;
            }
          }
          if (currentCharacter === "[") {
            bracketDepth++;
          } else if (currentCharacter === "]") {
            bracketDepth--;
          } else if (currentCharacter === "(") {
            parenDepth++;
          } else if (currentCharacter === ")") {
            parenDepth--;
          }
        }
        const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
        const baseClassName = stripImportantModifier(baseClassNameWithImportantModifier);
        const hasImportantModifier = baseClassName !== baseClassNameWithImportantModifier;
        const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
        return {
          modifiers,
          hasImportantModifier,
          baseClassName,
          maybePostfixModifierPosition
        };
      };
      if (prefix) {
        const fullPrefix = prefix + MODIFIER_SEPARATOR;
        const parseClassNameOriginal = parseClassName;
        parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.substring(fullPrefix.length)) : {
          isExternal: true,
          modifiers: [],
          hasImportantModifier: false,
          baseClassName: className,
          maybePostfixModifierPosition: void 0
        };
      }
      if (experimentalParseClassName) {
        const parseClassNameOriginal = parseClassName;
        parseClassName = (className) => experimentalParseClassName({
          className,
          parseClassName: parseClassNameOriginal
        });
      }
      return parseClassName;
    };
    var stripImportantModifier = (baseClassName) => {
      if (baseClassName.endsWith(IMPORTANT_MODIFIER)) {
        return baseClassName.substring(0, baseClassName.length - 1);
      }
      if (baseClassName.startsWith(IMPORTANT_MODIFIER)) {
        return baseClassName.substring(1);
      }
      return baseClassName;
    };
    var createSortModifiers = (config) => {
      const orderSensitiveModifiers = Object.fromEntries(config.orderSensitiveModifiers.map((modifier) => [modifier, true]));
      const sortModifiers = (modifiers) => {
        if (modifiers.length <= 1) {
          return modifiers;
        }
        const sortedModifiers = [];
        let unsortedModifiers = [];
        modifiers.forEach((modifier) => {
          const isPositionSensitive = modifier[0] === "[" || orderSensitiveModifiers[modifier];
          if (isPositionSensitive) {
            sortedModifiers.push(...unsortedModifiers.sort(), modifier);
            unsortedModifiers = [];
          } else {
            unsortedModifiers.push(modifier);
          }
        });
        sortedModifiers.push(...unsortedModifiers.sort());
        return sortedModifiers;
      };
      return sortModifiers;
    };
    var createConfigUtils = (config) => ({
      cache: createLruCache(config.cacheSize),
      parseClassName: createParseClassName(config),
      sortModifiers: createSortModifiers(config),
      ...createClassGroupUtils(config)
    });
    var SPLIT_CLASSES_REGEX = /\s+/;
    var mergeClassList = (classList, configUtils) => {
      const {
        parseClassName,
        getClassGroupId,
        getConflictingClassGroupIds,
        sortModifiers
      } = configUtils;
      const classGroupsInConflict = [];
      const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
      let result = "";
      for (let index = classNames.length - 1; index >= 0; index -= 1) {
        const originalClassName = classNames[index];
        const {
          isExternal,
          modifiers,
          hasImportantModifier,
          baseClassName,
          maybePostfixModifierPosition
        } = parseClassName(originalClassName);
        if (isExternal) {
          result = originalClassName + (result.length > 0 ? " " + result : result);
          continue;
        }
        let hasPostfixModifier = !!maybePostfixModifierPosition;
        let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
        if (!classGroupId) {
          if (!hasPostfixModifier) {
            result = originalClassName + (result.length > 0 ? " " + result : result);
            continue;
          }
          classGroupId = getClassGroupId(baseClassName);
          if (!classGroupId) {
            result = originalClassName + (result.length > 0 ? " " + result : result);
            continue;
          }
          hasPostfixModifier = false;
        }
        const variantModifier = sortModifiers(modifiers).join(":");
        const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
        const classId = modifierId + classGroupId;
        if (classGroupsInConflict.includes(classId)) {
          continue;
        }
        classGroupsInConflict.push(classId);
        const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
        for (let i = 0; i < conflictGroups.length; ++i) {
          const group = conflictGroups[i];
          classGroupsInConflict.push(modifierId + group);
        }
        result = originalClassName + (result.length > 0 ? " " + result : result);
      }
      return result;
    };
    function twJoin() {
      let index = 0;
      let argument;
      let resolvedValue;
      let string = "";
      while (index < arguments.length) {
        if (argument = arguments[index++]) {
          if (resolvedValue = toValue(argument)) {
            string && (string += " ");
            string += resolvedValue;
          }
        }
      }
      return string;
    }
    var toValue = (mix) => {
      if (typeof mix === "string") {
        return mix;
      }
      let resolvedValue;
      let string = "";
      for (let k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (resolvedValue = toValue(mix[k])) {
            string && (string += " ");
            string += resolvedValue;
          }
        }
      }
      return string;
    };
    function createTailwindMerge(createConfigFirst, ...createConfigRest) {
      let configUtils;
      let cacheGet;
      let cacheSet;
      let functionToCall = initTailwindMerge;
      function initTailwindMerge(classList) {
        const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
        configUtils = createConfigUtils(config);
        cacheGet = configUtils.cache.get;
        cacheSet = configUtils.cache.set;
        functionToCall = tailwindMerge;
        return tailwindMerge(classList);
      }
      function tailwindMerge(classList) {
        const cachedResult = cacheGet(classList);
        if (cachedResult) {
          return cachedResult;
        }
        const result = mergeClassList(classList, configUtils);
        cacheSet(classList, result);
        return result;
      }
      return function callTailwindMerge() {
        return functionToCall(twJoin.apply(null, arguments));
      };
    }
    var fromTheme = (key) => {
      const themeGetter = (theme) => theme[key] || [];
      themeGetter.isThemeGetter = true;
      return themeGetter;
    };
    var arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
    var arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
    var fractionRegex = /^\d+\/\d+$/;
    var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
    var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
    var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
    var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
    var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
    var isFraction = (value) => fractionRegex.test(value);
    var isNumber = (value) => !!value && !Number.isNaN(Number(value));
    var isInteger = (value) => !!value && Number.isInteger(Number(value));
    var isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
    var isTshirtSize = (value) => tshirtUnitRegex.test(value);
    var isAny = () => true;
    var isLengthOnly = (value) => (
      // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
      // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
      // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
      lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
    );
    var isNever = () => false;
    var isShadow = (value) => shadowRegex.test(value);
    var isImage = (value) => imageRegex.test(value);
    var isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
    var isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
    var isArbitraryValue = (value) => arbitraryValueRegex.test(value);
    var isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
    var isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber);
    var isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
    var isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
    var isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow);
    var isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
    var isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
    var isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
    var isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
    var isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
    var isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
    var isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
    var getIsArbitraryValue = (value, testLabel, testValue) => {
      const result = arbitraryValueRegex.exec(value);
      if (result) {
        if (result[1]) {
          return testLabel(result[1]);
        }
        return testValue(result[2]);
      }
      return false;
    };
    var getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
      const result = arbitraryVariableRegex.exec(value);
      if (result) {
        if (result[1]) {
          return testLabel(result[1]);
        }
        return shouldMatchNoLabel;
      }
      return false;
    };
    var isLabelPosition = (label) => label === "position" || label === "percentage";
    var isLabelImage = (label) => label === "image" || label === "url";
    var isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size";
    var isLabelLength = (label) => label === "length";
    var isLabelNumber = (label) => label === "number";
    var isLabelFamilyName = (label) => label === "family-name";
    var isLabelShadow = (label) => label === "shadow";
    var validators = /* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      isAny,
      isAnyNonArbitrary,
      isArbitraryImage,
      isArbitraryLength,
      isArbitraryNumber,
      isArbitraryPosition,
      isArbitraryShadow,
      isArbitrarySize,
      isArbitraryValue,
      isArbitraryVariable,
      isArbitraryVariableFamilyName,
      isArbitraryVariableImage,
      isArbitraryVariableLength,
      isArbitraryVariablePosition,
      isArbitraryVariableShadow,
      isArbitraryVariableSize,
      isFraction,
      isInteger,
      isNumber,
      isPercent,
      isTshirtSize
    }, Symbol.toStringTag, {
      value: "Module"
    });
    var getDefaultConfig = () => {
      const themeColor = fromTheme("color");
      const themeFont = fromTheme("font");
      const themeText = fromTheme("text");
      const themeFontWeight = fromTheme("font-weight");
      const themeTracking = fromTheme("tracking");
      const themeLeading = fromTheme("leading");
      const themeBreakpoint = fromTheme("breakpoint");
      const themeContainer = fromTheme("container");
      const themeSpacing = fromTheme("spacing");
      const themeRadius = fromTheme("radius");
      const themeShadow = fromTheme("shadow");
      const themeInsetShadow = fromTheme("inset-shadow");
      const themeTextShadow = fromTheme("text-shadow");
      const themeDropShadow = fromTheme("drop-shadow");
      const themeBlur = fromTheme("blur");
      const themePerspective = fromTheme("perspective");
      const themeAspect = fromTheme("aspect");
      const themeEase = fromTheme("ease");
      const themeAnimate = fromTheme("animate");
      const scaleBreak = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
      const scalePosition = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
        "left-top",
        "top-right",
        // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
        "right-top",
        "bottom-right",
        // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
        "right-bottom",
        "bottom-left",
        // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
        "left-bottom"
      ];
      const scalePositionWithArbitrary = () => [...scalePosition(), isArbitraryVariable, isArbitraryValue];
      const scaleOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
      const scaleOverscroll = () => ["auto", "contain", "none"];
      const scaleUnambiguousSpacing = () => [isArbitraryVariable, isArbitraryValue, themeSpacing];
      const scaleInset = () => [isFraction, "full", "auto", ...scaleUnambiguousSpacing()];
      const scaleGridTemplateColsRows = () => [isInteger, "none", "subgrid", isArbitraryVariable, isArbitraryValue];
      const scaleGridColRowStartAndEnd = () => ["auto", {
        span: ["full", isInteger, isArbitraryVariable, isArbitraryValue]
      }, isInteger, isArbitraryVariable, isArbitraryValue];
      const scaleGridColRowStartOrEnd = () => [isInteger, "auto", isArbitraryVariable, isArbitraryValue];
      const scaleGridAutoColsRows = () => ["auto", "min", "max", "fr", isArbitraryVariable, isArbitraryValue];
      const scaleAlignPrimaryAxis = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"];
      const scaleAlignSecondaryAxis = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"];
      const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
      const scaleSizing = () => [isFraction, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()];
      const scaleColor = () => [themeColor, isArbitraryVariable, isArbitraryValue];
      const scaleBgPosition = () => [...scalePosition(), isArbitraryVariablePosition, isArbitraryPosition, {
        position: [isArbitraryVariable, isArbitraryValue]
      }];
      const scaleBgRepeat = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
      }];
      const scaleBgSize = () => ["auto", "cover", "contain", isArbitraryVariableSize, isArbitrarySize, {
        size: [isArbitraryVariable, isArbitraryValue]
      }];
      const scaleGradientStopPosition = () => [isPercent, isArbitraryVariableLength, isArbitraryLength];
      const scaleRadius = () => [
        // Deprecated since Tailwind CSS v4.0.0
        "",
        "none",
        "full",
        themeRadius,
        isArbitraryVariable,
        isArbitraryValue
      ];
      const scaleBorderWidth = () => ["", isNumber, isArbitraryVariableLength, isArbitraryLength];
      const scaleLineStyle = () => ["solid", "dashed", "dotted", "double"];
      const scaleBlendMode = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
      const scaleMaskImagePosition = () => [isNumber, isPercent, isArbitraryVariablePosition, isArbitraryPosition];
      const scaleBlur = () => [
        // Deprecated since Tailwind CSS v4.0.0
        "",
        "none",
        themeBlur,
        isArbitraryVariable,
        isArbitraryValue
      ];
      const scaleRotate = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
      const scaleScale = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
      const scaleSkew = () => [isNumber, isArbitraryVariable, isArbitraryValue];
      const scaleTranslate = () => [isFraction, "full", ...scaleUnambiguousSpacing()];
      return {
        cacheSize: 500,
        theme: {
          animate: ["spin", "ping", "pulse", "bounce"],
          aspect: ["video"],
          blur: [isTshirtSize],
          breakpoint: [isTshirtSize],
          color: [isAny],
          container: [isTshirtSize],
          "drop-shadow": [isTshirtSize],
          ease: ["in", "out", "in-out"],
          font: [isAnyNonArbitrary],
          "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
          "inset-shadow": [isTshirtSize],
          leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
          perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
          radius: [isTshirtSize],
          shadow: [isTshirtSize],
          spacing: ["px", isNumber],
          text: [isTshirtSize],
          "text-shadow": [isTshirtSize],
          tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
          // --------------
          // --- Layout ---
          // --------------
          /**
           * Aspect Ratio
           * @see https://tailwindcss.com/docs/aspect-ratio
           */
          aspect: [{
            aspect: ["auto", "square", isFraction, isArbitraryValue, isArbitraryVariable, themeAspect]
          }],
          /**
           * Container
           * @see https://tailwindcss.com/docs/container
           * @deprecated since Tailwind CSS v4.0.0
           */
          container: ["container"],
          /**
           * Columns
           * @see https://tailwindcss.com/docs/columns
           */
          columns: [{
            columns: [isNumber, isArbitraryValue, isArbitraryVariable, themeContainer]
          }],
          /**
           * Break After
           * @see https://tailwindcss.com/docs/break-after
           */
          "break-after": [{
            "break-after": scaleBreak()
          }],
          /**
           * Break Before
           * @see https://tailwindcss.com/docs/break-before
           */
          "break-before": [{
            "break-before": scaleBreak()
          }],
          /**
           * Break Inside
           * @see https://tailwindcss.com/docs/break-inside
           */
          "break-inside": [{
            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
          }],
          /**
           * Box Decoration Break
           * @see https://tailwindcss.com/docs/box-decoration-break
           */
          "box-decoration": [{
            "box-decoration": ["slice", "clone"]
          }],
          /**
           * Box Sizing
           * @see https://tailwindcss.com/docs/box-sizing
           */
          box: [{
            box: ["border", "content"]
          }],
          /**
           * Display
           * @see https://tailwindcss.com/docs/display
           */
          display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
          /**
           * Screen Reader Only
           * @see https://tailwindcss.com/docs/display#screen-reader-only
           */
          sr: ["sr-only", "not-sr-only"],
          /**
           * Floats
           * @see https://tailwindcss.com/docs/float
           */
          float: [{
            float: ["right", "left", "none", "start", "end"]
          }],
          /**
           * Clear
           * @see https://tailwindcss.com/docs/clear
           */
          clear: [{
            clear: ["left", "right", "both", "none", "start", "end"]
          }],
          /**
           * Isolation
           * @see https://tailwindcss.com/docs/isolation
           */
          isolation: ["isolate", "isolation-auto"],
          /**
           * Object Fit
           * @see https://tailwindcss.com/docs/object-fit
           */
          "object-fit": [{
            object: ["contain", "cover", "fill", "none", "scale-down"]
          }],
          /**
           * Object Position
           * @see https://tailwindcss.com/docs/object-position
           */
          "object-position": [{
            object: scalePositionWithArbitrary()
          }],
          /**
           * Overflow
           * @see https://tailwindcss.com/docs/overflow
           */
          overflow: [{
            overflow: scaleOverflow()
          }],
          /**
           * Overflow X
           * @see https://tailwindcss.com/docs/overflow
           */
          "overflow-x": [{
            "overflow-x": scaleOverflow()
          }],
          /**
           * Overflow Y
           * @see https://tailwindcss.com/docs/overflow
           */
          "overflow-y": [{
            "overflow-y": scaleOverflow()
          }],
          /**
           * Overscroll Behavior
           * @see https://tailwindcss.com/docs/overscroll-behavior
           */
          overscroll: [{
            overscroll: scaleOverscroll()
          }],
          /**
           * Overscroll Behavior X
           * @see https://tailwindcss.com/docs/overscroll-behavior
           */
          "overscroll-x": [{
            "overscroll-x": scaleOverscroll()
          }],
          /**
           * Overscroll Behavior Y
           * @see https://tailwindcss.com/docs/overscroll-behavior
           */
          "overscroll-y": [{
            "overscroll-y": scaleOverscroll()
          }],
          /**
           * Position
           * @see https://tailwindcss.com/docs/position
           */
          position: ["static", "fixed", "absolute", "relative", "sticky"],
          /**
           * Top / Right / Bottom / Left
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          inset: [{
            inset: scaleInset()
          }],
          /**
           * Right / Left
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          "inset-x": [{
            "inset-x": scaleInset()
          }],
          /**
           * Top / Bottom
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          "inset-y": [{
            "inset-y": scaleInset()
          }],
          /**
           * Start
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          start: [{
            start: scaleInset()
          }],
          /**
           * End
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          end: [{
            end: scaleInset()
          }],
          /**
           * Top
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          top: [{
            top: scaleInset()
          }],
          /**
           * Right
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          right: [{
            right: scaleInset()
          }],
          /**
           * Bottom
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          bottom: [{
            bottom: scaleInset()
          }],
          /**
           * Left
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          left: [{
            left: scaleInset()
          }],
          /**
           * Visibility
           * @see https://tailwindcss.com/docs/visibility
           */
          visibility: ["visible", "invisible", "collapse"],
          /**
           * Z-Index
           * @see https://tailwindcss.com/docs/z-index
           */
          z: [{
            z: [isInteger, "auto", isArbitraryVariable, isArbitraryValue]
          }],
          // ------------------------
          // --- Flexbox and Grid ---
          // ------------------------
          /**
           * Flex Basis
           * @see https://tailwindcss.com/docs/flex-basis
           */
          basis: [{
            basis: [isFraction, "full", "auto", themeContainer, ...scaleUnambiguousSpacing()]
          }],
          /**
           * Flex Direction
           * @see https://tailwindcss.com/docs/flex-direction
           */
          "flex-direction": [{
            flex: ["row", "row-reverse", "col", "col-reverse"]
          }],
          /**
           * Flex Wrap
           * @see https://tailwindcss.com/docs/flex-wrap
           */
          "flex-wrap": [{
            flex: ["nowrap", "wrap", "wrap-reverse"]
          }],
          /**
           * Flex
           * @see https://tailwindcss.com/docs/flex
           */
          flex: [{
            flex: [isNumber, isFraction, "auto", "initial", "none", isArbitraryValue]
          }],
          /**
           * Flex Grow
           * @see https://tailwindcss.com/docs/flex-grow
           */
          grow: [{
            grow: ["", isNumber, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Flex Shrink
           * @see https://tailwindcss.com/docs/flex-shrink
           */
          shrink: [{
            shrink: ["", isNumber, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Order
           * @see https://tailwindcss.com/docs/order
           */
          order: [{
            order: [isInteger, "first", "last", "none", isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Grid Template Columns
           * @see https://tailwindcss.com/docs/grid-template-columns
           */
          "grid-cols": [{
            "grid-cols": scaleGridTemplateColsRows()
          }],
          /**
           * Grid Column Start / End
           * @see https://tailwindcss.com/docs/grid-column
           */
          "col-start-end": [{
            col: scaleGridColRowStartAndEnd()
          }],
          /**
           * Grid Column Start
           * @see https://tailwindcss.com/docs/grid-column
           */
          "col-start": [{
            "col-start": scaleGridColRowStartOrEnd()
          }],
          /**
           * Grid Column End
           * @see https://tailwindcss.com/docs/grid-column
           */
          "col-end": [{
            "col-end": scaleGridColRowStartOrEnd()
          }],
          /**
           * Grid Template Rows
           * @see https://tailwindcss.com/docs/grid-template-rows
           */
          "grid-rows": [{
            "grid-rows": scaleGridTemplateColsRows()
          }],
          /**
           * Grid Row Start / End
           * @see https://tailwindcss.com/docs/grid-row
           */
          "row-start-end": [{
            row: scaleGridColRowStartAndEnd()
          }],
          /**
           * Grid Row Start
           * @see https://tailwindcss.com/docs/grid-row
           */
          "row-start": [{
            "row-start": scaleGridColRowStartOrEnd()
          }],
          /**
           * Grid Row End
           * @see https://tailwindcss.com/docs/grid-row
           */
          "row-end": [{
            "row-end": scaleGridColRowStartOrEnd()
          }],
          /**
           * Grid Auto Flow
           * @see https://tailwindcss.com/docs/grid-auto-flow
           */
          "grid-flow": [{
            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
          }],
          /**
           * Grid Auto Columns
           * @see https://tailwindcss.com/docs/grid-auto-columns
           */
          "auto-cols": [{
            "auto-cols": scaleGridAutoColsRows()
          }],
          /**
           * Grid Auto Rows
           * @see https://tailwindcss.com/docs/grid-auto-rows
           */
          "auto-rows": [{
            "auto-rows": scaleGridAutoColsRows()
          }],
          /**
           * Gap
           * @see https://tailwindcss.com/docs/gap
           */
          gap: [{
            gap: scaleUnambiguousSpacing()
          }],
          /**
           * Gap X
           * @see https://tailwindcss.com/docs/gap
           */
          "gap-x": [{
            "gap-x": scaleUnambiguousSpacing()
          }],
          /**
           * Gap Y
           * @see https://tailwindcss.com/docs/gap
           */
          "gap-y": [{
            "gap-y": scaleUnambiguousSpacing()
          }],
          /**
           * Justify Content
           * @see https://tailwindcss.com/docs/justify-content
           */
          "justify-content": [{
            justify: [...scaleAlignPrimaryAxis(), "normal"]
          }],
          /**
           * Justify Items
           * @see https://tailwindcss.com/docs/justify-items
           */
          "justify-items": [{
            "justify-items": [...scaleAlignSecondaryAxis(), "normal"]
          }],
          /**
           * Justify Self
           * @see https://tailwindcss.com/docs/justify-self
           */
          "justify-self": [{
            "justify-self": ["auto", ...scaleAlignSecondaryAxis()]
          }],
          /**
           * Align Content
           * @see https://tailwindcss.com/docs/align-content
           */
          "align-content": [{
            content: ["normal", ...scaleAlignPrimaryAxis()]
          }],
          /**
           * Align Items
           * @see https://tailwindcss.com/docs/align-items
           */
          "align-items": [{
            items: [...scaleAlignSecondaryAxis(), {
              baseline: ["", "last"]
            }]
          }],
          /**
           * Align Self
           * @see https://tailwindcss.com/docs/align-self
           */
          "align-self": [{
            self: ["auto", ...scaleAlignSecondaryAxis(), {
              baseline: ["", "last"]
            }]
          }],
          /**
           * Place Content
           * @see https://tailwindcss.com/docs/place-content
           */
          "place-content": [{
            "place-content": scaleAlignPrimaryAxis()
          }],
          /**
           * Place Items
           * @see https://tailwindcss.com/docs/place-items
           */
          "place-items": [{
            "place-items": [...scaleAlignSecondaryAxis(), "baseline"]
          }],
          /**
           * Place Self
           * @see https://tailwindcss.com/docs/place-self
           */
          "place-self": [{
            "place-self": ["auto", ...scaleAlignSecondaryAxis()]
          }],
          // Spacing
          /**
           * Padding
           * @see https://tailwindcss.com/docs/padding
           */
          p: [{
            p: scaleUnambiguousSpacing()
          }],
          /**
           * Padding X
           * @see https://tailwindcss.com/docs/padding
           */
          px: [{
            px: scaleUnambiguousSpacing()
          }],
          /**
           * Padding Y
           * @see https://tailwindcss.com/docs/padding
           */
          py: [{
            py: scaleUnambiguousSpacing()
          }],
          /**
           * Padding Start
           * @see https://tailwindcss.com/docs/padding
           */
          ps: [{
            ps: scaleUnambiguousSpacing()
          }],
          /**
           * Padding End
           * @see https://tailwindcss.com/docs/padding
           */
          pe: [{
            pe: scaleUnambiguousSpacing()
          }],
          /**
           * Padding Top
           * @see https://tailwindcss.com/docs/padding
           */
          pt: [{
            pt: scaleUnambiguousSpacing()
          }],
          /**
           * Padding Right
           * @see https://tailwindcss.com/docs/padding
           */
          pr: [{
            pr: scaleUnambiguousSpacing()
          }],
          /**
           * Padding Bottom
           * @see https://tailwindcss.com/docs/padding
           */
          pb: [{
            pb: scaleUnambiguousSpacing()
          }],
          /**
           * Padding Left
           * @see https://tailwindcss.com/docs/padding
           */
          pl: [{
            pl: scaleUnambiguousSpacing()
          }],
          /**
           * Margin
           * @see https://tailwindcss.com/docs/margin
           */
          m: [{
            m: scaleMargin()
          }],
          /**
           * Margin X
           * @see https://tailwindcss.com/docs/margin
           */
          mx: [{
            mx: scaleMargin()
          }],
          /**
           * Margin Y
           * @see https://tailwindcss.com/docs/margin
           */
          my: [{
            my: scaleMargin()
          }],
          /**
           * Margin Start
           * @see https://tailwindcss.com/docs/margin
           */
          ms: [{
            ms: scaleMargin()
          }],
          /**
           * Margin End
           * @see https://tailwindcss.com/docs/margin
           */
          me: [{
            me: scaleMargin()
          }],
          /**
           * Margin Top
           * @see https://tailwindcss.com/docs/margin
           */
          mt: [{
            mt: scaleMargin()
          }],
          /**
           * Margin Right
           * @see https://tailwindcss.com/docs/margin
           */
          mr: [{
            mr: scaleMargin()
          }],
          /**
           * Margin Bottom
           * @see https://tailwindcss.com/docs/margin
           */
          mb: [{
            mb: scaleMargin()
          }],
          /**
           * Margin Left
           * @see https://tailwindcss.com/docs/margin
           */
          ml: [{
            ml: scaleMargin()
          }],
          /**
           * Space Between X
           * @see https://tailwindcss.com/docs/margin#adding-space-between-children
           */
          "space-x": [{
            "space-x": scaleUnambiguousSpacing()
          }],
          /**
           * Space Between X Reverse
           * @see https://tailwindcss.com/docs/margin#adding-space-between-children
           */
          "space-x-reverse": ["space-x-reverse"],
          /**
           * Space Between Y
           * @see https://tailwindcss.com/docs/margin#adding-space-between-children
           */
          "space-y": [{
            "space-y": scaleUnambiguousSpacing()
          }],
          /**
           * Space Between Y Reverse
           * @see https://tailwindcss.com/docs/margin#adding-space-between-children
           */
          "space-y-reverse": ["space-y-reverse"],
          // --------------
          // --- Sizing ---
          // --------------
          /**
           * Size
           * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
           */
          size: [{
            size: scaleSizing()
          }],
          /**
           * Width
           * @see https://tailwindcss.com/docs/width
           */
          w: [{
            w: [themeContainer, "screen", ...scaleSizing()]
          }],
          /**
           * Min-Width
           * @see https://tailwindcss.com/docs/min-width
           */
          "min-w": [{
            "min-w": [
              themeContainer,
              "screen",
              /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
              "none",
              ...scaleSizing()
            ]
          }],
          /**
           * Max-Width
           * @see https://tailwindcss.com/docs/max-width
           */
          "max-w": [{
            "max-w": [
              themeContainer,
              "screen",
              "none",
              /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
              "prose",
              /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
              {
                screen: [themeBreakpoint]
              },
              ...scaleSizing()
            ]
          }],
          /**
           * Height
           * @see https://tailwindcss.com/docs/height
           */
          h: [{
            h: ["screen", "lh", ...scaleSizing()]
          }],
          /**
           * Min-Height
           * @see https://tailwindcss.com/docs/min-height
           */
          "min-h": [{
            "min-h": ["screen", "lh", "none", ...scaleSizing()]
          }],
          /**
           * Max-Height
           * @see https://tailwindcss.com/docs/max-height
           */
          "max-h": [{
            "max-h": ["screen", "lh", ...scaleSizing()]
          }],
          // ------------------
          // --- Typography ---
          // ------------------
          /**
           * Font Size
           * @see https://tailwindcss.com/docs/font-size
           */
          "font-size": [{
            text: ["base", themeText, isArbitraryVariableLength, isArbitraryLength]
          }],
          /**
           * Font Smoothing
           * @see https://tailwindcss.com/docs/font-smoothing
           */
          "font-smoothing": ["antialiased", "subpixel-antialiased"],
          /**
           * Font Style
           * @see https://tailwindcss.com/docs/font-style
           */
          "font-style": ["italic", "not-italic"],
          /**
           * Font Weight
           * @see https://tailwindcss.com/docs/font-weight
           */
          "font-weight": [{
            font: [themeFontWeight, isArbitraryVariable, isArbitraryNumber]
          }],
          /**
           * Font Stretch
           * @see https://tailwindcss.com/docs/font-stretch
           */
          "font-stretch": [{
            "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", isPercent, isArbitraryValue]
          }],
          /**
           * Font Family
           * @see https://tailwindcss.com/docs/font-family
           */
          "font-family": [{
            font: [isArbitraryVariableFamilyName, isArbitraryValue, themeFont]
          }],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-normal": ["normal-nums"],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-ordinal": ["ordinal"],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-slashed-zero": ["slashed-zero"],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-figure": ["lining-nums", "oldstyle-nums"],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-spacing": ["proportional-nums", "tabular-nums"],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
          /**
           * Letter Spacing
           * @see https://tailwindcss.com/docs/letter-spacing
           */
          tracking: [{
            tracking: [themeTracking, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Line Clamp
           * @see https://tailwindcss.com/docs/line-clamp
           */
          "line-clamp": [{
            "line-clamp": [isNumber, "none", isArbitraryVariable, isArbitraryNumber]
          }],
          /**
           * Line Height
           * @see https://tailwindcss.com/docs/line-height
           */
          leading: [{
            leading: [
              /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
              themeLeading,
              ...scaleUnambiguousSpacing()
            ]
          }],
          /**
           * List Style Image
           * @see https://tailwindcss.com/docs/list-style-image
           */
          "list-image": [{
            "list-image": ["none", isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * List Style Position
           * @see https://tailwindcss.com/docs/list-style-position
           */
          "list-style-position": [{
            list: ["inside", "outside"]
          }],
          /**
           * List Style Type
           * @see https://tailwindcss.com/docs/list-style-type
           */
          "list-style-type": [{
            list: ["disc", "decimal", "none", isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Text Alignment
           * @see https://tailwindcss.com/docs/text-align
           */
          "text-alignment": [{
            text: ["left", "center", "right", "justify", "start", "end"]
          }],
          /**
           * Placeholder Color
           * @deprecated since Tailwind CSS v3.0.0
           * @see https://v3.tailwindcss.com/docs/placeholder-color
           */
          "placeholder-color": [{
            placeholder: scaleColor()
          }],
          /**
           * Text Color
           * @see https://tailwindcss.com/docs/text-color
           */
          "text-color": [{
            text: scaleColor()
          }],
          /**
           * Text Decoration
           * @see https://tailwindcss.com/docs/text-decoration
           */
          "text-decoration": ["underline", "overline", "line-through", "no-underline"],
          /**
           * Text Decoration Style
           * @see https://tailwindcss.com/docs/text-decoration-style
           */
          "text-decoration-style": [{
            decoration: [...scaleLineStyle(), "wavy"]
          }],
          /**
           * Text Decoration Thickness
           * @see https://tailwindcss.com/docs/text-decoration-thickness
           */
          "text-decoration-thickness": [{
            decoration: [isNumber, "from-font", "auto", isArbitraryVariable, isArbitraryLength]
          }],
          /**
           * Text Decoration Color
           * @see https://tailwindcss.com/docs/text-decoration-color
           */
          "text-decoration-color": [{
            decoration: scaleColor()
          }],
          /**
           * Text Underline Offset
           * @see https://tailwindcss.com/docs/text-underline-offset
           */
          "underline-offset": [{
            "underline-offset": [isNumber, "auto", isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Text Transform
           * @see https://tailwindcss.com/docs/text-transform
           */
          "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
          /**
           * Text Overflow
           * @see https://tailwindcss.com/docs/text-overflow
           */
          "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
          /**
           * Text Wrap
           * @see https://tailwindcss.com/docs/text-wrap
           */
          "text-wrap": [{
            text: ["wrap", "nowrap", "balance", "pretty"]
          }],
          /**
           * Text Indent
           * @see https://tailwindcss.com/docs/text-indent
           */
          indent: [{
            indent: scaleUnambiguousSpacing()
          }],
          /**
           * Vertical Alignment
           * @see https://tailwindcss.com/docs/vertical-align
           */
          "vertical-align": [{
            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Whitespace
           * @see https://tailwindcss.com/docs/whitespace
           */
          whitespace: [{
            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
          }],
          /**
           * Word Break
           * @see https://tailwindcss.com/docs/word-break
           */
          break: [{
            break: ["normal", "words", "all", "keep"]
          }],
          /**
           * Overflow Wrap
           * @see https://tailwindcss.com/docs/overflow-wrap
           */
          wrap: [{
            wrap: ["break-word", "anywhere", "normal"]
          }],
          /**
           * Hyphens
           * @see https://tailwindcss.com/docs/hyphens
           */
          hyphens: [{
            hyphens: ["none", "manual", "auto"]
          }],
          /**
           * Content
           * @see https://tailwindcss.com/docs/content
           */
          content: [{
            content: ["none", isArbitraryVariable, isArbitraryValue]
          }],
          // -------------------
          // --- Backgrounds ---
          // -------------------
          /**
           * Background Attachment
           * @see https://tailwindcss.com/docs/background-attachment
           */
          "bg-attachment": [{
            bg: ["fixed", "local", "scroll"]
          }],
          /**
           * Background Clip
           * @see https://tailwindcss.com/docs/background-clip
           */
          "bg-clip": [{
            "bg-clip": ["border", "padding", "content", "text"]
          }],
          /**
           * Background Origin
           * @see https://tailwindcss.com/docs/background-origin
           */
          "bg-origin": [{
            "bg-origin": ["border", "padding", "content"]
          }],
          /**
           * Background Position
           * @see https://tailwindcss.com/docs/background-position
           */
          "bg-position": [{
            bg: scaleBgPosition()
          }],
          /**
           * Background Repeat
           * @see https://tailwindcss.com/docs/background-repeat
           */
          "bg-repeat": [{
            bg: scaleBgRepeat()
          }],
          /**
           * Background Size
           * @see https://tailwindcss.com/docs/background-size
           */
          "bg-size": [{
            bg: scaleBgSize()
          }],
          /**
           * Background Image
           * @see https://tailwindcss.com/docs/background-image
           */
          "bg-image": [{
            bg: ["none", {
              linear: [{
                to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
              }, isInteger, isArbitraryVariable, isArbitraryValue],
              radial: ["", isArbitraryVariable, isArbitraryValue],
              conic: [isInteger, isArbitraryVariable, isArbitraryValue]
            }, isArbitraryVariableImage, isArbitraryImage]
          }],
          /**
           * Background Color
           * @see https://tailwindcss.com/docs/background-color
           */
          "bg-color": [{
            bg: scaleColor()
          }],
          /**
           * Gradient Color Stops From Position
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-from-pos": [{
            from: scaleGradientStopPosition()
          }],
          /**
           * Gradient Color Stops Via Position
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-via-pos": [{
            via: scaleGradientStopPosition()
          }],
          /**
           * Gradient Color Stops To Position
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-to-pos": [{
            to: scaleGradientStopPosition()
          }],
          /**
           * Gradient Color Stops From
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-from": [{
            from: scaleColor()
          }],
          /**
           * Gradient Color Stops Via
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-via": [{
            via: scaleColor()
          }],
          /**
           * Gradient Color Stops To
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-to": [{
            to: scaleColor()
          }],
          // ---------------
          // --- Borders ---
          // ---------------
          /**
           * Border Radius
           * @see https://tailwindcss.com/docs/border-radius
           */
          rounded: [{
            rounded: scaleRadius()
          }],
          /**
           * Border Radius Start
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-s": [{
            "rounded-s": scaleRadius()
          }],
          /**
           * Border Radius End
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-e": [{
            "rounded-e": scaleRadius()
          }],
          /**
           * Border Radius Top
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-t": [{
            "rounded-t": scaleRadius()
          }],
          /**
           * Border Radius Right
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-r": [{
            "rounded-r": scaleRadius()
          }],
          /**
           * Border Radius Bottom
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-b": [{
            "rounded-b": scaleRadius()
          }],
          /**
           * Border Radius Left
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-l": [{
            "rounded-l": scaleRadius()
          }],
          /**
           * Border Radius Start Start
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-ss": [{
            "rounded-ss": scaleRadius()
          }],
          /**
           * Border Radius Start End
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-se": [{
            "rounded-se": scaleRadius()
          }],
          /**
           * Border Radius End End
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-ee": [{
            "rounded-ee": scaleRadius()
          }],
          /**
           * Border Radius End Start
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-es": [{
            "rounded-es": scaleRadius()
          }],
          /**
           * Border Radius Top Left
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-tl": [{
            "rounded-tl": scaleRadius()
          }],
          /**
           * Border Radius Top Right
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-tr": [{
            "rounded-tr": scaleRadius()
          }],
          /**
           * Border Radius Bottom Right
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-br": [{
            "rounded-br": scaleRadius()
          }],
          /**
           * Border Radius Bottom Left
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-bl": [{
            "rounded-bl": scaleRadius()
          }],
          /**
           * Border Width
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w": [{
            border: scaleBorderWidth()
          }],
          /**
           * Border Width X
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-x": [{
            "border-x": scaleBorderWidth()
          }],
          /**
           * Border Width Y
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-y": [{
            "border-y": scaleBorderWidth()
          }],
          /**
           * Border Width Start
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-s": [{
            "border-s": scaleBorderWidth()
          }],
          /**
           * Border Width End
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-e": [{
            "border-e": scaleBorderWidth()
          }],
          /**
           * Border Width Top
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-t": [{
            "border-t": scaleBorderWidth()
          }],
          /**
           * Border Width Right
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-r": [{
            "border-r": scaleBorderWidth()
          }],
          /**
           * Border Width Bottom
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-b": [{
            "border-b": scaleBorderWidth()
          }],
          /**
           * Border Width Left
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-l": [{
            "border-l": scaleBorderWidth()
          }],
          /**
           * Divide Width X
           * @see https://tailwindcss.com/docs/border-width#between-children
           */
          "divide-x": [{
            "divide-x": scaleBorderWidth()
          }],
          /**
           * Divide Width X Reverse
           * @see https://tailwindcss.com/docs/border-width#between-children
           */
          "divide-x-reverse": ["divide-x-reverse"],
          /**
           * Divide Width Y
           * @see https://tailwindcss.com/docs/border-width#between-children
           */
          "divide-y": [{
            "divide-y": scaleBorderWidth()
          }],
          /**
           * Divide Width Y Reverse
           * @see https://tailwindcss.com/docs/border-width#between-children
           */
          "divide-y-reverse": ["divide-y-reverse"],
          /**
           * Border Style
           * @see https://tailwindcss.com/docs/border-style
           */
          "border-style": [{
            border: [...scaleLineStyle(), "hidden", "none"]
          }],
          /**
           * Divide Style
           * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
           */
          "divide-style": [{
            divide: [...scaleLineStyle(), "hidden", "none"]
          }],
          /**
           * Border Color
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color": [{
            border: scaleColor()
          }],
          /**
           * Border Color X
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-x": [{
            "border-x": scaleColor()
          }],
          /**
           * Border Color Y
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-y": [{
            "border-y": scaleColor()
          }],
          /**
           * Border Color S
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-s": [{
            "border-s": scaleColor()
          }],
          /**
           * Border Color E
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-e": [{
            "border-e": scaleColor()
          }],
          /**
           * Border Color Top
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-t": [{
            "border-t": scaleColor()
          }],
          /**
           * Border Color Right
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-r": [{
            "border-r": scaleColor()
          }],
          /**
           * Border Color Bottom
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-b": [{
            "border-b": scaleColor()
          }],
          /**
           * Border Color Left
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-l": [{
            "border-l": scaleColor()
          }],
          /**
           * Divide Color
           * @see https://tailwindcss.com/docs/divide-color
           */
          "divide-color": [{
            divide: scaleColor()
          }],
          /**
           * Outline Style
           * @see https://tailwindcss.com/docs/outline-style
           */
          "outline-style": [{
            outline: [...scaleLineStyle(), "none", "hidden"]
          }],
          /**
           * Outline Offset
           * @see https://tailwindcss.com/docs/outline-offset
           */
          "outline-offset": [{
            "outline-offset": [isNumber, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Outline Width
           * @see https://tailwindcss.com/docs/outline-width
           */
          "outline-w": [{
            outline: ["", isNumber, isArbitraryVariableLength, isArbitraryLength]
          }],
          /**
           * Outline Color
           * @see https://tailwindcss.com/docs/outline-color
           */
          "outline-color": [{
            outline: scaleColor()
          }],
          // ---------------
          // --- Effects ---
          // ---------------
          /**
           * Box Shadow
           * @see https://tailwindcss.com/docs/box-shadow
           */
          shadow: [{
            shadow: [
              // Deprecated since Tailwind CSS v4.0.0
              "",
              "none",
              themeShadow,
              isArbitraryVariableShadow,
              isArbitraryShadow
            ]
          }],
          /**
           * Box Shadow Color
           * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
           */
          "shadow-color": [{
            shadow: scaleColor()
          }],
          /**
           * Inset Box Shadow
           * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
           */
          "inset-shadow": [{
            "inset-shadow": ["none", themeInsetShadow, isArbitraryVariableShadow, isArbitraryShadow]
          }],
          /**
           * Inset Box Shadow Color
           * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
           */
          "inset-shadow-color": [{
            "inset-shadow": scaleColor()
          }],
          /**
           * Ring Width
           * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
           */
          "ring-w": [{
            ring: scaleBorderWidth()
          }],
          /**
           * Ring Width Inset
           * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
           * @deprecated since Tailwind CSS v4.0.0
           * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
           */
          "ring-w-inset": ["ring-inset"],
          /**
           * Ring Color
           * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
           */
          "ring-color": [{
            ring: scaleColor()
          }],
          /**
           * Ring Offset Width
           * @see https://v3.tailwindcss.com/docs/ring-offset-width
           * @deprecated since Tailwind CSS v4.0.0
           * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
           */
          "ring-offset-w": [{
            "ring-offset": [isNumber, isArbitraryLength]
          }],
          /**
           * Ring Offset Color
           * @see https://v3.tailwindcss.com/docs/ring-offset-color
           * @deprecated since Tailwind CSS v4.0.0
           * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
           */
          "ring-offset-color": [{
            "ring-offset": scaleColor()
          }],
          /**
           * Inset Ring Width
           * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
           */
          "inset-ring-w": [{
            "inset-ring": scaleBorderWidth()
          }],
          /**
           * Inset Ring Color
           * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
           */
          "inset-ring-color": [{
            "inset-ring": scaleColor()
          }],
          /**
           * Text Shadow
           * @see https://tailwindcss.com/docs/text-shadow
           */
          "text-shadow": [{
            "text-shadow": ["none", themeTextShadow, isArbitraryVariableShadow, isArbitraryShadow]
          }],
          /**
           * Text Shadow Color
           * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
           */
          "text-shadow-color": [{
            "text-shadow": scaleColor()
          }],
          /**
           * Opacity
           * @see https://tailwindcss.com/docs/opacity
           */
          opacity: [{
            opacity: [isNumber, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Mix Blend Mode
           * @see https://tailwindcss.com/docs/mix-blend-mode
           */
          "mix-blend": [{
            "mix-blend": [...scaleBlendMode(), "plus-darker", "plus-lighter"]
          }],
          /**
           * Background Blend Mode
           * @see https://tailwindcss.com/docs/background-blend-mode
           */
          "bg-blend": [{
            "bg-blend": scaleBlendMode()
          }],
          /**
           * Mask Clip
           * @see https://tailwindcss.com/docs/mask-clip
           */
          "mask-clip": [{
            "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
          }, "mask-no-clip"],
          /**
           * Mask Composite
           * @see https://tailwindcss.com/docs/mask-composite
           */
          "mask-composite": [{
            mask: ["add", "subtract", "intersect", "exclude"]
          }],
          /**
           * Mask Image
           * @see https://tailwindcss.com/docs/mask-image
           */
          "mask-image-linear-pos": [{
            "mask-linear": [isNumber]
          }],
          "mask-image-linear-from-pos": [{
            "mask-linear-from": scaleMaskImagePosition()
          }],
          "mask-image-linear-to-pos": [{
            "mask-linear-to": scaleMaskImagePosition()
          }],
          "mask-image-linear-from-color": [{
            "mask-linear-from": scaleColor()
          }],
          "mask-image-linear-to-color": [{
            "mask-linear-to": scaleColor()
          }],
          "mask-image-t-from-pos": [{
            "mask-t-from": scaleMaskImagePosition()
          }],
          "mask-image-t-to-pos": [{
            "mask-t-to": scaleMaskImagePosition()
          }],
          "mask-image-t-from-color": [{
            "mask-t-from": scaleColor()
          }],
          "mask-image-t-to-color": [{
            "mask-t-to": scaleColor()
          }],
          "mask-image-r-from-pos": [{
            "mask-r-from": scaleMaskImagePosition()
          }],
          "mask-image-r-to-pos": [{
            "mask-r-to": scaleMaskImagePosition()
          }],
          "mask-image-r-from-color": [{
            "mask-r-from": scaleColor()
          }],
          "mask-image-r-to-color": [{
            "mask-r-to": scaleColor()
          }],
          "mask-image-b-from-pos": [{
            "mask-b-from": scaleMaskImagePosition()
          }],
          "mask-image-b-to-pos": [{
            "mask-b-to": scaleMaskImagePosition()
          }],
          "mask-image-b-from-color": [{
            "mask-b-from": scaleColor()
          }],
          "mask-image-b-to-color": [{
            "mask-b-to": scaleColor()
          }],
          "mask-image-l-from-pos": [{
            "mask-l-from": scaleMaskImagePosition()
          }],
          "mask-image-l-to-pos": [{
            "mask-l-to": scaleMaskImagePosition()
          }],
          "mask-image-l-from-color": [{
            "mask-l-from": scaleColor()
          }],
          "mask-image-l-to-color": [{
            "mask-l-to": scaleColor()
          }],
          "mask-image-x-from-pos": [{
            "mask-x-from": scaleMaskImagePosition()
          }],
          "mask-image-x-to-pos": [{
            "mask-x-to": scaleMaskImagePosition()
          }],
          "mask-image-x-from-color": [{
            "mask-x-from": scaleColor()
          }],
          "mask-image-x-to-color": [{
            "mask-x-to": scaleColor()
          }],
          "mask-image-y-from-pos": [{
            "mask-y-from": scaleMaskImagePosition()
          }],
          "mask-image-y-to-pos": [{
            "mask-y-to": scaleMaskImagePosition()
          }],
          "mask-image-y-from-color": [{
            "mask-y-from": scaleColor()
          }],
          "mask-image-y-to-color": [{
            "mask-y-to": scaleColor()
          }],
          "mask-image-radial": [{
            "mask-radial": [isArbitraryVariable, isArbitraryValue]
          }],
          "mask-image-radial-from-pos": [{
            "mask-radial-from": scaleMaskImagePosition()
          }],
          "mask-image-radial-to-pos": [{
            "mask-radial-to": scaleMaskImagePosition()
          }],
          "mask-image-radial-from-color": [{
            "mask-radial-from": scaleColor()
          }],
          "mask-image-radial-to-color": [{
            "mask-radial-to": scaleColor()
          }],
          "mask-image-radial-shape": [{
            "mask-radial": ["circle", "ellipse"]
          }],
          "mask-image-radial-size": [{
            "mask-radial": [{
              closest: ["side", "corner"],
              farthest: ["side", "corner"]
            }]
          }],
          "mask-image-radial-pos": [{
            "mask-radial-at": scalePosition()
          }],
          "mask-image-conic-pos": [{
            "mask-conic": [isNumber]
          }],
          "mask-image-conic-from-pos": [{
            "mask-conic-from": scaleMaskImagePosition()
          }],
          "mask-image-conic-to-pos": [{
            "mask-conic-to": scaleMaskImagePosition()
          }],
          "mask-image-conic-from-color": [{
            "mask-conic-from": scaleColor()
          }],
          "mask-image-conic-to-color": [{
            "mask-conic-to": scaleColor()
          }],
          /**
           * Mask Mode
           * @see https://tailwindcss.com/docs/mask-mode
           */
          "mask-mode": [{
            mask: ["alpha", "luminance", "match"]
          }],
          /**
           * Mask Origin
           * @see https://tailwindcss.com/docs/mask-origin
           */
          "mask-origin": [{
            "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
          }],
          /**
           * Mask Position
           * @see https://tailwindcss.com/docs/mask-position
           */
          "mask-position": [{
            mask: scaleBgPosition()
          }],
          /**
           * Mask Repeat
           * @see https://tailwindcss.com/docs/mask-repeat
           */
          "mask-repeat": [{
            mask: scaleBgRepeat()
          }],
          /**
           * Mask Size
           * @see https://tailwindcss.com/docs/mask-size
           */
          "mask-size": [{
            mask: scaleBgSize()
          }],
          /**
           * Mask Type
           * @see https://tailwindcss.com/docs/mask-type
           */
          "mask-type": [{
            "mask-type": ["alpha", "luminance"]
          }],
          /**
           * Mask Image
           * @see https://tailwindcss.com/docs/mask-image
           */
          "mask-image": [{
            mask: ["none", isArbitraryVariable, isArbitraryValue]
          }],
          // ---------------
          // --- Filters ---
          // ---------------
          /**
           * Filter
           * @see https://tailwindcss.com/docs/filter
           */
          filter: [{
            filter: [
              // Deprecated since Tailwind CSS v3.0.0
              "",
              "none",
              isArbitraryVariable,
              isArbitraryValue
            ]
          }],
          /**
           * Blur
           * @see https://tailwindcss.com/docs/blur
           */
          blur: [{
            blur: scaleBlur()
          }],
          /**
           * Brightness
           * @see https://tailwindcss.com/docs/brightness
           */
          brightness: [{
            brightness: [isNumber, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Contrast
           * @see https://tailwindcss.com/docs/contrast
           */
          contrast: [{
            contrast: [isNumber, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Drop Shadow
           * @see https://tailwindcss.com/docs/drop-shadow
           */
          "drop-shadow": [{
            "drop-shadow": [
              // Deprecated since Tailwind CSS v4.0.0
              "",
              "none",
              themeDropShadow,
              isArbitraryVariableShadow,
              isArbitraryShadow
            ]
          }],
          /**
           * Drop Shadow Color
           * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
           */
          "drop-shadow-color": [{
            "drop-shadow": scaleColor()
          }],
          /**
           * Grayscale
           * @see https://tailwindcss.com/docs/grayscale
           */
          grayscale: [{
            grayscale: ["", isNumber, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Hue Rotate
           * @see https://tailwindcss.com/docs/hue-rotate
           */
          "hue-rotate": [{
            "hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Invert
           * @see https://tailwindcss.com/docs/invert
           */
          invert: [{
            invert: ["", isNumber, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Saturate
           * @see https://tailwindcss.com/docs/saturate
           */
          saturate: [{
            saturate: [isNumber, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Sepia
           * @see https://tailwindcss.com/docs/sepia
           */
          sepia: [{
            sepia: ["", isNumber, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Backdrop Filter
           * @see https://tailwindcss.com/docs/backdrop-filter
           */
          "backdrop-filter": [{
            "backdrop-filter": [
              // Deprecated since Tailwind CSS v3.0.0
              "",
              "none",
              isArbitraryVariable,
              isArbitraryValue
            ]
          }],
          /**
           * Backdrop Blur
           * @see https://tailwindcss.com/docs/backdrop-blur
           */
          "backdrop-blur": [{
            "backdrop-blur": scaleBlur()
          }],
          /**
           * Backdrop Brightness
           * @see https://tailwindcss.com/docs/backdrop-brightness
           */
          "backdrop-brightness": [{
            "backdrop-brightness": [isNumber, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Backdrop Contrast
           * @see https://tailwindcss.com/docs/backdrop-contrast
           */
          "backdrop-contrast": [{
            "backdrop-contrast": [isNumber, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Backdrop Grayscale
           * @see https://tailwindcss.com/docs/backdrop-grayscale
           */
          "backdrop-grayscale": [{
            "backdrop-grayscale": ["", isNumber, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Backdrop Hue Rotate
           * @see https://tailwindcss.com/docs/backdrop-hue-rotate
           */
          "backdrop-hue-rotate": [{
            "backdrop-hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Backdrop Invert
           * @see https://tailwindcss.com/docs/backdrop-invert
           */
          "backdrop-invert": [{
            "backdrop-invert": ["", isNumber, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Backdrop Opacity
           * @see https://tailwindcss.com/docs/backdrop-opacity
           */
          "backdrop-opacity": [{
            "backdrop-opacity": [isNumber, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Backdrop Saturate
           * @see https://tailwindcss.com/docs/backdrop-saturate
           */
          "backdrop-saturate": [{
            "backdrop-saturate": [isNumber, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Backdrop Sepia
           * @see https://tailwindcss.com/docs/backdrop-sepia
           */
          "backdrop-sepia": [{
            "backdrop-sepia": ["", isNumber, isArbitraryVariable, isArbitraryValue]
          }],
          // --------------
          // --- Tables ---
          // --------------
          /**
           * Border Collapse
           * @see https://tailwindcss.com/docs/border-collapse
           */
          "border-collapse": [{
            border: ["collapse", "separate"]
          }],
          /**
           * Border Spacing
           * @see https://tailwindcss.com/docs/border-spacing
           */
          "border-spacing": [{
            "border-spacing": scaleUnambiguousSpacing()
          }],
          /**
           * Border Spacing X
           * @see https://tailwindcss.com/docs/border-spacing
           */
          "border-spacing-x": [{
            "border-spacing-x": scaleUnambiguousSpacing()
          }],
          /**
           * Border Spacing Y
           * @see https://tailwindcss.com/docs/border-spacing
           */
          "border-spacing-y": [{
            "border-spacing-y": scaleUnambiguousSpacing()
          }],
          /**
           * Table Layout
           * @see https://tailwindcss.com/docs/table-layout
           */
          "table-layout": [{
            table: ["auto", "fixed"]
          }],
          /**
           * Caption Side
           * @see https://tailwindcss.com/docs/caption-side
           */
          caption: [{
            caption: ["top", "bottom"]
          }],
          // ---------------------------------
          // --- Transitions and Animation ---
          // ---------------------------------
          /**
           * Transition Property
           * @see https://tailwindcss.com/docs/transition-property
           */
          transition: [{
            transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Transition Behavior
           * @see https://tailwindcss.com/docs/transition-behavior
           */
          "transition-behavior": [{
            transition: ["normal", "discrete"]
          }],
          /**
           * Transition Duration
           * @see https://tailwindcss.com/docs/transition-duration
           */
          duration: [{
            duration: [isNumber, "initial", isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Transition Timing Function
           * @see https://tailwindcss.com/docs/transition-timing-function
           */
          ease: [{
            ease: ["linear", "initial", themeEase, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Transition Delay
           * @see https://tailwindcss.com/docs/transition-delay
           */
          delay: [{
            delay: [isNumber, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Animation
           * @see https://tailwindcss.com/docs/animation
           */
          animate: [{
            animate: ["none", themeAnimate, isArbitraryVariable, isArbitraryValue]
          }],
          // ------------------
          // --- Transforms ---
          // ------------------
          /**
           * Backface Visibility
           * @see https://tailwindcss.com/docs/backface-visibility
           */
          backface: [{
            backface: ["hidden", "visible"]
          }],
          /**
           * Perspective
           * @see https://tailwindcss.com/docs/perspective
           */
          perspective: [{
            perspective: [themePerspective, isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Perspective Origin
           * @see https://tailwindcss.com/docs/perspective-origin
           */
          "perspective-origin": [{
            "perspective-origin": scalePositionWithArbitrary()
          }],
          /**
           * Rotate
           * @see https://tailwindcss.com/docs/rotate
           */
          rotate: [{
            rotate: scaleRotate()
          }],
          /**
           * Rotate X
           * @see https://tailwindcss.com/docs/rotate
           */
          "rotate-x": [{
            "rotate-x": scaleRotate()
          }],
          /**
           * Rotate Y
           * @see https://tailwindcss.com/docs/rotate
           */
          "rotate-y": [{
            "rotate-y": scaleRotate()
          }],
          /**
           * Rotate Z
           * @see https://tailwindcss.com/docs/rotate
           */
          "rotate-z": [{
            "rotate-z": scaleRotate()
          }],
          /**
           * Scale
           * @see https://tailwindcss.com/docs/scale
           */
          scale: [{
            scale: scaleScale()
          }],
          /**
           * Scale X
           * @see https://tailwindcss.com/docs/scale
           */
          "scale-x": [{
            "scale-x": scaleScale()
          }],
          /**
           * Scale Y
           * @see https://tailwindcss.com/docs/scale
           */
          "scale-y": [{
            "scale-y": scaleScale()
          }],
          /**
           * Scale Z
           * @see https://tailwindcss.com/docs/scale
           */
          "scale-z": [{
            "scale-z": scaleScale()
          }],
          /**
           * Scale 3D
           * @see https://tailwindcss.com/docs/scale
           */
          "scale-3d": ["scale-3d"],
          /**
           * Skew
           * @see https://tailwindcss.com/docs/skew
           */
          skew: [{
            skew: scaleSkew()
          }],
          /**
           * Skew X
           * @see https://tailwindcss.com/docs/skew
           */
          "skew-x": [{
            "skew-x": scaleSkew()
          }],
          /**
           * Skew Y
           * @see https://tailwindcss.com/docs/skew
           */
          "skew-y": [{
            "skew-y": scaleSkew()
          }],
          /**
           * Transform
           * @see https://tailwindcss.com/docs/transform
           */
          transform: [{
            transform: [isArbitraryVariable, isArbitraryValue, "", "none", "gpu", "cpu"]
          }],
          /**
           * Transform Origin
           * @see https://tailwindcss.com/docs/transform-origin
           */
          "transform-origin": [{
            origin: scalePositionWithArbitrary()
          }],
          /**
           * Transform Style
           * @see https://tailwindcss.com/docs/transform-style
           */
          "transform-style": [{
            transform: ["3d", "flat"]
          }],
          /**
           * Translate
           * @see https://tailwindcss.com/docs/translate
           */
          translate: [{
            translate: scaleTranslate()
          }],
          /**
           * Translate X
           * @see https://tailwindcss.com/docs/translate
           */
          "translate-x": [{
            "translate-x": scaleTranslate()
          }],
          /**
           * Translate Y
           * @see https://tailwindcss.com/docs/translate
           */
          "translate-y": [{
            "translate-y": scaleTranslate()
          }],
          /**
           * Translate Z
           * @see https://tailwindcss.com/docs/translate
           */
          "translate-z": [{
            "translate-z": scaleTranslate()
          }],
          /**
           * Translate None
           * @see https://tailwindcss.com/docs/translate
           */
          "translate-none": ["translate-none"],
          // ---------------------
          // --- Interactivity ---
          // ---------------------
          /**
           * Accent Color
           * @see https://tailwindcss.com/docs/accent-color
           */
          accent: [{
            accent: scaleColor()
          }],
          /**
           * Appearance
           * @see https://tailwindcss.com/docs/appearance
           */
          appearance: [{
            appearance: ["none", "auto"]
          }],
          /**
           * Caret Color
           * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
           */
          "caret-color": [{
            caret: scaleColor()
          }],
          /**
           * Color Scheme
           * @see https://tailwindcss.com/docs/color-scheme
           */
          "color-scheme": [{
            scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
          }],
          /**
           * Cursor
           * @see https://tailwindcss.com/docs/cursor
           */
          cursor: [{
            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryVariable, isArbitraryValue]
          }],
          /**
           * Field Sizing
           * @see https://tailwindcss.com/docs/field-sizing
           */
          "field-sizing": [{
            "field-sizing": ["fixed", "content"]
          }],
          /**
           * Pointer Events
           * @see https://tailwindcss.com/docs/pointer-events
           */
          "pointer-events": [{
            "pointer-events": ["auto", "none"]
          }],
          /**
           * Resize
           * @see https://tailwindcss.com/docs/resize
           */
          resize: [{
            resize: ["none", "", "y", "x"]
          }],
          /**
           * Scroll Behavior
           * @see https://tailwindcss.com/docs/scroll-behavior
           */
          "scroll-behavior": [{
            scroll: ["auto", "smooth"]
          }],
          /**
           * Scroll Margin
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-m": [{
            "scroll-m": scaleUnambiguousSpacing()
          }],
          /**
           * Scroll Margin X
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-mx": [{
            "scroll-mx": scaleUnambiguousSpacing()
          }],
          /**
           * Scroll Margin Y
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-my": [{
            "scroll-my": scaleUnambiguousSpacing()
          }],
          /**
           * Scroll Margin Start
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-ms": [{
            "scroll-ms": scaleUnambiguousSpacing()
          }],
          /**
           * Scroll Margin End
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-me": [{
            "scroll-me": scaleUnambiguousSpacing()
          }],
          /**
           * Scroll Margin Top
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-mt": [{
            "scroll-mt": scaleUnambiguousSpacing()
          }],
          /**
           * Scroll Margin Right
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-mr": [{
            "scroll-mr": scaleUnambiguousSpacing()
          }],
          /**
           * Scroll Margin Bottom
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-mb": [{
            "scroll-mb": scaleUnambiguousSpacing()
          }],
          /**
           * Scroll Margin Left
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-ml": [{
            "scroll-ml": scaleUnambiguousSpacing()
          }],
          /**
           * Scroll Padding
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-p": [{
            "scroll-p": scaleUnambiguousSpacing()
          }],
          /**
           * Scroll Padding X
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-px": [{
            "scroll-px": scaleUnambiguousSpacing()
          }],
          /**
           * Scroll Padding Y
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-py": [{
            "scroll-py": scaleUnambiguousSpacing()
          }],
          /**
           * Scroll Padding Start
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-ps": [{
            "scroll-ps": scaleUnambiguousSpacing()
          }],
          /**
           * Scroll Padding End
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-pe": [{
            "scroll-pe": scaleUnambiguousSpacing()
          }],
          /**
           * Scroll Padding Top
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-pt": [{
            "scroll-pt": scaleUnambiguousSpacing()
          }],
          /**
           * Scroll Padding Right
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-pr": [{
            "scroll-pr": scaleUnambiguousSpacing()
          }],
          /**
           * Scroll Padding Bottom
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-pb": [{
            "scroll-pb": scaleUnambiguousSpacing()
          }],
          /**
           * Scroll Padding Left
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-pl": [{
            "scroll-pl": scaleUnambiguousSpacing()
          }],
          /**
           * Scroll Snap Align
           * @see https://tailwindcss.com/docs/scroll-snap-align
           */
          "snap-align": [{
            snap: ["start", "end", "center", "align-none"]
          }],
          /**
           * Scroll Snap Stop
           * @see https://tailwindcss.com/docs/scroll-snap-stop
           */
          "snap-stop": [{
            snap: ["normal", "always"]
          }],
          /**
           * Scroll Snap Type
           * @see https://tailwindcss.com/docs/scroll-snap-type
           */
          "snap-type": [{
            snap: ["none", "x", "y", "both"]
          }],
          /**
           * Scroll Snap Type Strictness
           * @see https://tailwindcss.com/docs/scroll-snap-type
           */
          "snap-strictness": [{
            snap: ["mandatory", "proximity"]
          }],
          /**
           * Touch Action
           * @see https://tailwindcss.com/docs/touch-action
           */
          touch: [{
            touch: ["auto", "none", "manipulation"]
          }],
          /**
           * Touch Action X
           * @see https://tailwindcss.com/docs/touch-action
           */
          "touch-x": [{
            "touch-pan": ["x", "left", "right"]
          }],
          /**
           * Touch Action Y
           * @see https://tailwindcss.com/docs/touch-action
           */
          "touch-y": [{
            "touch-pan": ["y", "up", "down"]
          }],
          /**
           * Touch Action Pinch Zoom
           * @see https://tailwindcss.com/docs/touch-action
           */
          "touch-pz": ["touch-pinch-zoom"],
          /**
           * User Select
           * @see https://tailwindcss.com/docs/user-select
           */
          select: [{
            select: ["none", "text", "all", "auto"]
          }],
          /**
           * Will Change
           * @see https://tailwindcss.com/docs/will-change
           */
          "will-change": [{
            "will-change": ["auto", "scroll", "contents", "transform", isArbitraryVariable, isArbitraryValue]
          }],
          // -----------
          // --- SVG ---
          // -----------
          /**
           * Fill
           * @see https://tailwindcss.com/docs/fill
           */
          fill: [{
            fill: ["none", ...scaleColor()]
          }],
          /**
           * Stroke Width
           * @see https://tailwindcss.com/docs/stroke-width
           */
          "stroke-w": [{
            stroke: [isNumber, isArbitraryVariableLength, isArbitraryLength, isArbitraryNumber]
          }],
          /**
           * Stroke
           * @see https://tailwindcss.com/docs/stroke
           */
          stroke: [{
            stroke: ["none", ...scaleColor()]
          }],
          // ---------------------
          // --- Accessibility ---
          // ---------------------
          /**
           * Forced Color Adjust
           * @see https://tailwindcss.com/docs/forced-color-adjust
           */
          "forced-color-adjust": [{
            "forced-color-adjust": ["auto", "none"]
          }]
        },
        conflictingClassGroups: {
          overflow: ["overflow-x", "overflow-y"],
          overscroll: ["overscroll-x", "overscroll-y"],
          inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
          "inset-x": ["right", "left"],
          "inset-y": ["top", "bottom"],
          flex: ["basis", "grow", "shrink"],
          gap: ["gap-x", "gap-y"],
          p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
          px: ["pr", "pl"],
          py: ["pt", "pb"],
          m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
          mx: ["mr", "ml"],
          my: ["mt", "mb"],
          size: ["w", "h"],
          "font-size": ["leading"],
          "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
          "fvn-ordinal": ["fvn-normal"],
          "fvn-slashed-zero": ["fvn-normal"],
          "fvn-figure": ["fvn-normal"],
          "fvn-spacing": ["fvn-normal"],
          "fvn-fraction": ["fvn-normal"],
          "line-clamp": ["display", "overflow"],
          rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
          "rounded-s": ["rounded-ss", "rounded-es"],
          "rounded-e": ["rounded-se", "rounded-ee"],
          "rounded-t": ["rounded-tl", "rounded-tr"],
          "rounded-r": ["rounded-tr", "rounded-br"],
          "rounded-b": ["rounded-br", "rounded-bl"],
          "rounded-l": ["rounded-tl", "rounded-bl"],
          "border-spacing": ["border-spacing-x", "border-spacing-y"],
          "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
          "border-w-x": ["border-w-r", "border-w-l"],
          "border-w-y": ["border-w-t", "border-w-b"],
          "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
          "border-color-x": ["border-color-r", "border-color-l"],
          "border-color-y": ["border-color-t", "border-color-b"],
          translate: ["translate-x", "translate-y", "translate-none"],
          "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
          "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
          "scroll-mx": ["scroll-mr", "scroll-ml"],
          "scroll-my": ["scroll-mt", "scroll-mb"],
          "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
          "scroll-px": ["scroll-pr", "scroll-pl"],
          "scroll-py": ["scroll-pt", "scroll-pb"],
          touch: ["touch-x", "touch-y", "touch-pz"],
          "touch-x": ["touch"],
          "touch-y": ["touch"],
          "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
          "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
      };
    };
    var mergeConfigs = (baseConfig, {
      cacheSize,
      prefix,
      experimentalParseClassName,
      extend = {},
      override = {}
    }) => {
      overrideProperty(baseConfig, "cacheSize", cacheSize);
      overrideProperty(baseConfig, "prefix", prefix);
      overrideProperty(baseConfig, "experimentalParseClassName", experimentalParseClassName);
      overrideConfigProperties(baseConfig.theme, override.theme);
      overrideConfigProperties(baseConfig.classGroups, override.classGroups);
      overrideConfigProperties(baseConfig.conflictingClassGroups, override.conflictingClassGroups);
      overrideConfigProperties(baseConfig.conflictingClassGroupModifiers, override.conflictingClassGroupModifiers);
      overrideProperty(baseConfig, "orderSensitiveModifiers", override.orderSensitiveModifiers);
      mergeConfigProperties(baseConfig.theme, extend.theme);
      mergeConfigProperties(baseConfig.classGroups, extend.classGroups);
      mergeConfigProperties(baseConfig.conflictingClassGroups, extend.conflictingClassGroups);
      mergeConfigProperties(baseConfig.conflictingClassGroupModifiers, extend.conflictingClassGroupModifiers);
      mergeArrayProperties(baseConfig, extend, "orderSensitiveModifiers");
      return baseConfig;
    };
    var overrideProperty = (baseObject, overrideKey, overrideValue) => {
      if (overrideValue !== void 0) {
        baseObject[overrideKey] = overrideValue;
      }
    };
    var overrideConfigProperties = (baseObject, overrideObject) => {
      if (overrideObject) {
        for (const key in overrideObject) {
          overrideProperty(baseObject, key, overrideObject[key]);
        }
      }
    };
    var mergeConfigProperties = (baseObject, mergeObject) => {
      if (mergeObject) {
        for (const key in mergeObject) {
          mergeArrayProperties(baseObject, mergeObject, key);
        }
      }
    };
    var mergeArrayProperties = (baseObject, mergeObject, key) => {
      const mergeValue = mergeObject[key];
      if (mergeValue !== void 0) {
        baseObject[key] = baseObject[key] ? baseObject[key].concat(mergeValue) : mergeValue;
      }
    };
    var extendTailwindMerge = (configExtension, ...createConfig) => typeof configExtension === "function" ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
    var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
    exports2.createTailwindMerge = createTailwindMerge;
    exports2.extendTailwindMerge = extendTailwindMerge;
    exports2.fromTheme = fromTheme;
    exports2.getDefaultConfig = getDefaultConfig;
    exports2.mergeConfigs = mergeConfigs;
    exports2.twJoin = twJoin;
    exports2.twMerge = twMerge;
    exports2.validators = validators;
  }
});

// my-app/lib/utils.ts
var require_utils = __commonJS({
  "my-app/lib/utils.ts"(exports2, module2) {
    "use strict";
    var clsx2 = require_clsx();
    var { twMerge } = require_bundle_cjs();
    function cn2(...inputs) {
      return twMerge(clsx2(...inputs));
    }
    module2.exports = { cn: cn2 };
  }
});

// my-app/components/ui/button.tsx
var button_exports = {};
__export(button_exports, {
  Button: () => Button,
  buttonVariants: () => buttonVariants
});
module.exports = __toCommonJS(button_exports);
var React3 = __toESM(require_react());

// my-app/node_modules/@radix-ui/react-slot/dist/index.mjs
var React2 = __toESM(require_react(), 1);

// my-app/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React = __toESM(require_react(), 1);
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}

// my-app/node_modules/@radix-ui/react-slot/dist/index.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
  const Slot2 = React2.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React2.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React2.Children.count(newElement) > 1) return React2.Children.only(null);
          return React2.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React2.isValidElement(newElement) ? React2.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
  const SlotClone = React2.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React2.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== React2.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React2.cloneElement(children, props2);
    }
    return React2.Children.count(children) > 1 ? React2.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function isSlottable(child) {
  return React2.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// my-app/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// my-app/node_modules/class-variance-authority/dist/index.mjs
var falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  const { variants, defaultVariants } = config;
  const getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props === null || props === void 0 ? void 0 : props[variant];
    const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  });
  const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    if (value === void 0) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
  const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes({
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key]) : {
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};

// my-app/components/ui/button.tsx
var import_utils = __toESM(require_utils());
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ React3.createElement(
    Comp,
    {
      "data-slot": "button",
      className: (0, import_utils.cn)(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  buttonVariants
});
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
