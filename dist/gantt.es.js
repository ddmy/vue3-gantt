import { useCssVars, ref, onMounted, watchEffect, nextTick, openBlock, createElementBlock, createElementVNode, toDisplayString, Fragment, renderList, normalizeClass, normalizeStyle, unref, createCommentVNode } from "vue";
import html2canvas from "html2canvas";
import LAY_EXCEL from "lay-excel";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$2(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$2;
var eq$1 = eq_1;
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data = this.__data__, index = assocIndexOf$3(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data = this.__data__, index = assocIndexOf$2(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var ListCache$3 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$3();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$8 = freeGlobal || freeSelf || Function("return this")();
var _root = root$8;
var root$7 = _root;
var Symbol$4 = root$7.Symbol;
var _Symbol = Symbol$4;
var Symbol$3 = _Symbol;
var objectProto$c = Object.prototype;
var hasOwnProperty$9 = objectProto$c.hasOwnProperty;
var nativeObjectToString$1 = objectProto$c.toString;
var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$9.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$b = Object.prototype;
var nativeObjectToString = objectProto$b.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$2 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag$4(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$4;
function isObject$5(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$5;
var baseGetTag$3 = _baseGetTag, isObject$4 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$2(value) {
  if (!isObject$4(value)) {
    return false;
  }
  var tag = baseGetTag$3(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$2;
var root$6 = _root;
var coreJsData$1 = root$6["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$1 = isFunction_1, isMasked = _isMasked, isObject$3 = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$a = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$8).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative$1(value) {
  if (!isObject$3(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$7(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$7;
var getNative$6 = _getNative, root$5 = _root;
var Map$3 = getNative$6(root$5, "Map");
var _Map = Map$3;
var getNative$5 = _getNative;
var nativeCreate$4 = getNative$5(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$9 = Object.prototype;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$7.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$6.call(data, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
var Hash = _Hash, ListCache$2 = _ListCache, Map$2 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache$2)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$1(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache$1.prototype.clear = mapCacheClear;
MapCache$1.prototype["delete"] = mapCacheDelete;
MapCache$1.prototype.get = mapCacheGet;
MapCache$1.prototype.has = mapCacheHas;
MapCache$1.prototype.set = mapCacheSet;
var _MapCache = MapCache$1;
var ListCache$1 = _ListCache, Map$1 = _Map, MapCache = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$1(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack$1.prototype.clear = stackClear;
Stack$1.prototype["delete"] = stackDelete;
Stack$1.prototype.get = stackGet;
Stack$1.prototype.has = stackHas;
Stack$1.prototype.set = stackSet;
var _Stack = Stack$1;
function arrayEach$1(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var _arrayEach = arrayEach$1;
var getNative$4 = _getNative;
var defineProperty$1 = function() {
  try {
    var func = getNative$4(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$1;
var defineProperty = _defineProperty;
function baseAssignValue$2(object, key, value) {
  if (key == "__proto__" && defineProperty) {
    defineProperty(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$2;
var baseAssignValue$1 = _baseAssignValue, eq = eq_1;
var objectProto$7 = Object.prototype;
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
function assignValue$2(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$5.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$1(object, key, value);
  }
}
var _assignValue = assignValue$2;
var assignValue$1 = _assignValue, baseAssignValue = _baseAssignValue;
function copyObject$4(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue$1(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$4;
function baseTimes$1(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var _baseTimes = baseTimes$1;
function isObjectLike$5(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$5;
var baseGetTag$2 = _baseGetTag, isObjectLike$4 = isObjectLike_1;
var argsTag$2 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$4(value) && baseGetTag$2(value) == argsTag$2;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$3 = isObjectLike_1;
var objectProto$6 = Object.prototype;
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
var isArguments$1 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$3(value) && hasOwnProperty$4.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments_1 = isArguments$1;
var isArray$3 = Array.isArray;
var isArray_1 = isArray$3;
var isBufferExports = {};
var isBuffer$2 = {
  get exports() {
    return isBufferExports;
  },
  set exports(v) {
    isBufferExports = v;
  }
};
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$2, isBufferExports);
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$1(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$1;
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength$2(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength$2;
var baseGetTag$1 = _baseGetTag, isLength$1 = isLength_1, isObjectLike$2 = isObjectLike_1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", funcTag$1 = "[object Function]", mapTag$4 = "[object Map]", numberTag$2 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$4 = "[object Set]", stringTag$2 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$2(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$1(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$3(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$3;
var _nodeUtilExports = {};
var _nodeUtil = {
  get exports() {
    return _nodeUtilExports;
  },
  set exports(v) {
    _nodeUtilExports = v;
  }
};
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtilExports);
var baseIsTypedArray = _baseIsTypedArray, baseUnary$2 = _baseUnary, nodeUtil$2 = _nodeUtilExports;
var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;
var isTypedArray$1 = nodeIsTypedArray ? baseUnary$2(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$1;
var baseTimes = _baseTimes, isArguments = isArguments_1, isArray$2 = isArray_1, isBuffer$1 = isBufferExports, isIndex = _isIndex, isTypedArray = isTypedArray_1;
var objectProto$5 = Object.prototype;
var hasOwnProperty$3 = objectProto$5.hasOwnProperty;
function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray$2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$2;
var objectProto$4 = Object.prototype;
function isPrototype$3(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$4;
  return value === proto;
}
var _isPrototype = isPrototype$3;
function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$2;
var overArg$1 = _overArg;
var nativeKeys$1 = overArg$1(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype$2 = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function baseKeys$1(object) {
  if (!isPrototype$2(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$2.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var isFunction = isFunction_1, isLength = isLength_1;
function isArrayLike$2(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
var isArrayLike_1 = isArrayLike$2;
var arrayLikeKeys$1 = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike$1 = isArrayLike_1;
function keys$3(object) {
  return isArrayLike$1(object) ? arrayLikeKeys$1(object) : baseKeys(object);
}
var keys_1 = keys$3;
var copyObject$3 = _copyObject, keys$2 = keys_1;
function baseAssign$1(object, source) {
  return object && copyObject$3(source, keys$2(source), object);
}
var _baseAssign = baseAssign$1;
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$2 = isObject_1, isPrototype$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto$2 = Object.prototype;
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$2(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$1(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$1.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike = isArrayLike_1;
function keysIn$3(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$3;
var copyObject$2 = _copyObject, keysIn$2 = keysIn_1;
function baseAssignIn$1(object, source) {
  return object && copyObject$2(source, keysIn$2(source), object);
}
var _baseAssignIn = baseAssignIn$1;
var _cloneBufferExports = {};
var _cloneBuffer = {
  get exports() {
    return _cloneBufferExports;
  },
  set exports(v) {
    _cloneBufferExports = v;
  }
};
(function(module, exports) {
  var root2 = _root;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root2.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBufferExports);
function copyArray$1(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var _copyArray = copyArray$1;
function arrayFilter$1(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$2() {
  return [];
}
var stubArray_1 = stubArray$2;
var arrayFilter = _arrayFilter, stubArray$1 = stubArray_1;
var objectProto$1 = Object.prototype;
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var _getSymbols = getSymbols$3;
var copyObject$1 = _copyObject, getSymbols$2 = _getSymbols;
function copySymbols$1(source, object) {
  return copyObject$1(source, getSymbols$2(source), object);
}
var _copySymbols = copySymbols$1;
function arrayPush$2(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var _arrayPush = arrayPush$2;
var overArg = _overArg;
var getPrototype$2 = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$2;
var arrayPush$1 = _arrayPush, getPrototype$1 = _getPrototype, getSymbols$1 = _getSymbols, stubArray = stubArray_1;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush$1(result, getSymbols$1(object));
    object = getPrototype$1(object);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn$2;
var copyObject = _copyObject, getSymbolsIn$1 = _getSymbolsIn;
function copySymbolsIn$1(source, object) {
  return copyObject(source, getSymbolsIn$1(source), object);
}
var _copySymbolsIn = copySymbolsIn$1;
var arrayPush = _arrayPush, isArray$1 = isArray_1;
function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$2;
var baseGetAllKeys$1 = _baseGetAllKeys, getSymbols = _getSymbols, keys$1 = keys_1;
function getAllKeys$1(object) {
  return baseGetAllKeys$1(object, keys$1, getSymbols);
}
var _getAllKeys = getAllKeys$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbolsIn = _getSymbolsIn, keysIn$1 = keysIn_1;
function getAllKeysIn$1(object) {
  return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$1;
var getNative$3 = _getNative, root$4 = _root;
var DataView$1 = getNative$3(root$4, "DataView");
var _DataView = DataView$1;
var getNative$2 = _getNative, root$3 = _root;
var Promise$2 = getNative$2(root$3, "Promise");
var _Promise = Promise$2;
var getNative$1 = _getNative, root$2 = _root;
var Set$1 = getNative$1(root$2, "Set");
var _Set = Set$1;
var getNative = _getNative, root$1 = _root;
var WeakMap$1 = getNative(root$1, "WeakMap");
var _WeakMap = WeakMap$1;
var DataView = _DataView, Map = _Map, Promise$1 = _Promise, Set = _Set, WeakMap = _WeakMap, baseGetTag = _baseGetTag, toSource = _toSource;
var mapTag$3 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$3 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$2 = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
var getTag$3 = baseGetTag;
if (DataView && getTag$3(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map && getTag$3(new Map()) != mapTag$3 || Promise$1 && getTag$3(Promise$1.resolve()) != promiseTag || Set && getTag$3(new Set()) != setTag$3 || WeakMap && getTag$3(new WeakMap()) != weakMapTag$1) {
  getTag$3 = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$3;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$3;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var _getTag = getTag$3;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function initCloneArray$1(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var _initCloneArray = initCloneArray$1;
var root = _root;
var Uint8Array$1 = root.Uint8Array;
var _Uint8Array = Uint8Array$1;
var Uint8Array = _Uint8Array;
function cloneArrayBuffer$3(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$3;
var cloneArrayBuffer$2 = _cloneArrayBuffer;
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView$1;
var reFlags = /\w*$/;
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var _cloneRegExp = cloneRegExp$1;
var Symbol$1 = _Symbol;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol$1(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var _cloneSymbol = cloneSymbol$1;
var cloneArrayBuffer$1 = _cloneArrayBuffer;
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$1(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$1;
var cloneArrayBuffer = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray = _cloneTypedArray;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag$1(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);
    case dataViewTag$1:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);
    case regexpTag$1:
      return cloneRegExp(object);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object);
  }
}
var _initCloneByTag = initCloneByTag$1;
var isObject$1 = isObject_1;
var objectCreate = Object.create;
var baseCreate$1 = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$1;
var baseCreate = _baseCreate, getPrototype = _getPrototype, isPrototype = _isPrototype;
function initCloneObject$1(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
var _initCloneObject = initCloneObject$1;
var getTag$2 = _getTag, isObjectLike$1 = isObjectLike_1;
var mapTag$1 = "[object Map]";
function baseIsMap$1(value) {
  return isObjectLike$1(value) && getTag$2(value) == mapTag$1;
}
var _baseIsMap = baseIsMap$1;
var baseIsMap = _baseIsMap, baseUnary$1 = _baseUnary, nodeUtil$1 = _nodeUtilExports;
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;
var getTag$1 = _getTag, isObjectLike = isObjectLike_1;
var setTag$1 = "[object Set]";
function baseIsSet$1(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$1;
}
var _baseIsSet = baseIsSet$1;
var baseIsSet = _baseIsSet, baseUnary = _baseUnary, nodeUtil = _nodeUtilExports;
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;
var Stack = _Stack, arrayEach = _arrayEach, assignValue = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer = _cloneBufferExports, copyArray = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys = _getAllKeys, getAllKeysIn = _getAllKeysIn, getTag = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject = _initCloneObject, isArray = isArray_1, isBuffer = isBufferExports, isMap = isMap_1, isObject = isObject_1, isSet = isSet_1, keys = keys_1, keysIn = keysIn_1;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone$1(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var _baseClone = baseClone$1;
var baseClone = _baseClone;
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var cloneDeep_1 = cloneDeep;
const computedDaysRange = (daysArr, endDay = null) => {
  let result = daysArr;
  if (typeof endDay === "string") {
    result = fethDaysRange(daysArr, endDay);
  }
  return result.map((item) => fetchDayDetail(item));
};
const fetchDayDetail = (current) => {
  let currentDate = null;
  if (typeof current === "string") {
    currentDate = new Date(current);
  } else if (current instanceof Date) {
    currentDate = current;
  }
  const weekName = ["日", "一", "二", "三", "四", "五", "六"];
  return {
    year: String(currentDate.getFullYear()).padStart(4, "0"),
    month: String(currentDate.getMonth() + 1).padStart(2, "0"),
    day: String(currentDate.getDate()).padStart(2, "0"),
    week: weekName[currentDate.getDay()]
  };
};
const fethDays = (str) => {
  const month = str.replace(/\//g, "-");
  const monthArr = month.split("-").map((item) => Number(item));
  if (monthArr.length !== 2)
    throw new Error("获取月份日期参数错误:", str);
  const count = new Date(...monthArr, 0).getDate();
  return new Array(count).fill().map((item, index) => index + 1);
};
const fethDaysRange = (start, stop) => {
  const current = new Date(start.replace(/\//g, "-"));
  const end = new Date(stop);
  const result = [];
  while (end >= current) {
    const res = fetchDayDetail(current);
    result.push(`${res.year}-${res.month}-${res.day}`);
    current.setDate(current.getDate() + 1);
  }
  return result;
};
const splitDaysForMonth = (daysArr) => {
  const res = {};
  daysArr.forEach((item) => {
    const name = item.year + "-" + item.month;
    if (res[name]) {
      res[name].push(item);
    } else {
      res[name] = [item];
    }
  });
  return Object.values(res);
};
const todayInRange = (today, range) => {
  return fethDaysRange(...range).includes(today);
};
const fetchMonthRangeDay = (str) => {
  const dateList = String(str).replace("/", "-").split("-");
  return fethDays(str).map((item) => {
    return String(dateList[0]).padStart(4, "0") + "-" + String(dateList[1]).padStart(2, "0") + "-" + String(item).padStart(2, "0");
  });
};
const fetchToday = () => {
  const now = new Date();
  const currentYear = String(now.getFullYear()).padStart(4, "0");
  const currentMonth = String(now.getMonth() + 1).padStart(2, "0");
  const currentDay = String(now.getDate()).padStart(2, "0");
  return `${currentYear}-${currentMonth}-${currentDay}`;
};
const fetchThreeDays = (now = new Date()) => {
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const currentDate = `${currentYear}-${String(currentMonth).padStart(2, "0")}`;
  let prevDate = "";
  if (currentMonth === 1) {
    prevDate = `${String(currentYear - 1).padStart(4, "0")}-12`;
  } else {
    prevDate = `${String(currentYear).padStart(4, "0")}-${String(currentMonth - 1).padStart(2, "0")}`;
  }
  let nextDate = "";
  if (currentMonth === 12) {
    nextDate = `${String(currentYear + 1).padStart(4, "0")}-01`;
  } else {
    nextDate = `${String(currentYear).padStart(4, "0")}-${String(currentMonth + 1).padStart(2, "0")}`;
  }
  const prev = fetchMonthRangeDay(prevDate);
  const current = fetchMonthRangeDay(currentDate);
  const next = fetchMonthRangeDay(nextDate);
  let result = [...prev, ...current, ...next];
  result.prev = prev;
  result.current = current;
  result.next = next;
  return result;
};
const dateSplitForValue = (data) => {
  if (!data.length)
    return {};
  const start = data[0].days[0];
  const endTime = data.map((item) => new Date(item.days.at(-1)).getTime()).sort((a, b) => a - b).at(-1);
  const endDate = fetchDayDetail(new Date(endTime));
  const end = `${endDate.year}-${endDate.month}-${endDate.day}`;
  const res = {};
  fethDaysRange(start, end).forEach((key) => {
    const current = data.map((item, index) => {
      if (item.days.includes(key))
        return index;
      return false;
    }).filter((item) => item !== false);
    if (current.length) {
      res[key] = current;
    }
  });
  return res;
};
const workListSplitForRepeat = (arr, repeatMode) => {
  const resArr = arr.map((schedule) => {
    if (schedule.type !== "normal")
      return schedule;
    const obj = dateSplitForValue(schedule.schedule);
    const values = Object.values(obj);
    const keys2 = Object.keys(obj);
    if (!keys2.length)
      return schedule;
    const resMap = [];
    for (let i = 0; i < values.length; i++) {
      if (JSON.stringify(resMap.at(-1)) !== JSON.stringify(values[i])) {
        resMap.push(values[i]);
        resMap.at(-1).days = [keys2[i]];
      } else {
        if (resMap.at(-1)) {
          if (resMap.at(-1).days) {
            resMap.at(-1).days.push(keys2[i]);
          } else {
            resMap.at(-1).days = [keys2[i]];
          }
        }
      }
    }
    let result = new Array(resMap.length).fill({});
    result = result.map((item, index) => {
      let r = {};
      if (resMap[index].length === 1) {
        r = {
          ...schedule.schedule[resMap[index][0]],
          days: resMap[index].days,
          daysSource: schedule.schedule[resMap[index][0]].days
        };
        if (r.list) {
          let desc = "";
          let name = "";
          if (typeof repeatMode.desc === "function") {
            desc = repeatMode.desc(r.list);
          } else {
            desc = repeatMode.desc;
          }
          if (typeof repeatMode.name === "function") {
            name = repeatMode.name(r.list);
          } else {
            name = repeatMode.name;
          }
          r = {
            ...r,
            desc,
            name,
            backgroundColor: repeatMode.backgroundColor,
            textColor: repeatMode.textColor
          };
        }
      } else {
        const list = resMap[index].map((v) => schedule.schedule[v]);
        let desc = "";
        let name = "";
        if (typeof repeatMode.desc === "function") {
          desc = repeatMode.desc(list);
        } else {
          desc = repeatMode.desc;
        }
        if (typeof repeatMode.name === "function") {
          name = repeatMode.name(list);
        } else {
          name = repeatMode.name;
        }
        r = {
          desc,
          backgroundColor: repeatMode.backgroundColor,
          textColor: repeatMode.textColor,
          name,
          list,
          days: resMap[index].days
        };
      }
      return r;
    });
    schedule.schedule = result;
    return schedule;
  });
  return resArr;
};
const fetchNextMonthRange = (date = new Date()) => {
  return fetchThreeDays(date).next;
};
const fetchPrevMonthRange = (date = new Date()) => {
  return fetchThreeDays(date).prev;
};
const fetchTodayMonthRange = (date = new Date()) => {
  return fetchThreeDays(date).current;
};
var ConvertNum = function(str) {
  var n = 0;
  var s = str.match(/./g);
  var j = 0;
  for (var i = str.length - 1, j = 1; i >= 0; i--, j *= 26) {
    var c = s[i].toUpperCase();
    if (c < "A" || c > "Z") {
      return 0;
    }
    n += (c.charCodeAt(0) - 64) * j;
  }
  return n;
};
var Convert26 = function(num) {
  var str = "";
  while (num > 0) {
    var m = num % 26;
    if (m == 0) {
      m = 26;
    }
    str = String.fromCharCode(m + 64) + str;
    num = (num - m) / 26;
  }
  return str;
};
const hexValue = (val) => {
  if (val.length === 6)
    return val;
  if (val.length === 3) {
    const arr = val.split("");
    return `${arr[0]}${arr[0]}${arr[1]}${arr[1]}${arr[2]}${arr[2]}`;
  }
  throw new Error(`转换色值格式错误:${val}`);
};
function exportExcel(file, rangeDate, list, dateText = "", itemText = "") {
  const { fileName = "数据" } = file;
  console.log("导出excel", rangeDate, list);
  let data = [];
  const headArr = [{ name: `${dateText}-${itemText}` }, {}, {}];
  const headKeys = ["name"];
  let monthMerageConfig = [];
  const templateLine = { name: "" };
  rangeDate.forEach((item) => {
    item.forEach((day) => {
      headArr[0][`${day.year}-${day.month}-${day.day}`] = `${day.year}-${day.month}`;
      headArr[1][`${day.year}-${day.month}-${day.day}`] = day.day;
      headArr[2][`${day.year}-${day.month}-${day.day}`] = day.week;
      headKeys.push(`${day.year}-${day.month}-${day.day}`);
      templateLine[`${day.year}-${day.month}-${day.day}`] = "";
    });
    const prev = monthMerageConfig.at(-1) ? Convert26(ConvertNum(monthMerageConfig.at(-1).at(-1))) : "A";
    const end = Convert26(ConvertNum(prev) + item.length);
    monthMerageConfig.push([Convert26(ConvertNum(prev) + 1), end]);
  });
  monthMerageConfig = monthMerageConfig.map((item) => {
    item = item.map((index) => index + 1);
    return item;
  });
  data = data.concat(headArr);
  const totalDays = headKeys.length - 1;
  list.forEach((item) => {
    const tmp = JSON.parse(JSON.stringify(templateLine));
    tmp.name = item.name;
    tmp.type = item.type;
    tmp.renderWorks = item.renderWorks;
    data.push(tmp);
  });
  const dataMergeConfig = [];
  const setStyleList = [];
  data.forEach((item, index) => {
    const currentLine = index + 1;
    if (item.type === "alike") {
      dataMergeConfig.push([`B${currentLine}`, `${Convert26(totalDays + 1)}${currentLine}`]);
      setStyleList.push({
        type: 1,
        backgroundColor: "F6F6F6",
        range: `A${currentLine}:${Convert26(totalDays + 1)}${currentLine}`
      });
    } else if (item.renderWorks) {
      item.renderWorks.forEach((renderItem) => {
        if (renderItem.type === "works") {
          const startFindIndex = headKeys.findIndex((headItem) => headItem === renderItem.days[0]);
          const startIndex = Convert26((startFindIndex < 1 ? 1 : startFindIndex) + 1);
          const endFIndIndex = headKeys.findIndex((headItem) => headItem === renderItem.days.at(-1));
          const endIndex = Convert26((endFIndIndex < 1 ? headKeys.length - 1 : endFIndIndex) + 1);
          dataMergeConfig.push([`${startIndex}${currentLine}`, `${endIndex}${currentLine}`]);
          setStyleList.push({
            type: 1,
            backgroundColor: renderItem.backgroundColor.replace("#", ""),
            textColor: renderItem.textColor.replace("#", ""),
            range: `${startIndex}${currentLine}:${endIndex}${currentLine}`
          });
          renderItem.days.forEach((day) => {
            data[currentLine - 1][day] = renderItem.name;
          });
        }
      });
    }
  });
  const merageConfig = [["A1", "A3"], ...monthMerageConfig, ...dataMergeConfig];
  const resultData = LAY_EXCEL.filterExportData(data, headKeys);
  const mergeConf = LAY_EXCEL.makeMergeConfig(merageConfig);
  const colConf = LAY_EXCEL.makeColConfig({ A: 120, ZZZZ: 60 }, 60);
  const rowConf = LAY_EXCEL.makeRowConfig({ 1: 40, 99999: 40 }, 40);
  LAY_EXCEL.setExportCellStyle(resultData, null, {
    s: {
      alignment: { horizontal: "center", vertical: "center", wrapText: true },
      border: {
        top: { style: "thin", color: { rgb: "E2E4E8" } },
        left: { style: "thin", color: { rgb: "E2E4E8" } },
        right: { style: "thin", color: { rgb: "E2E4E8" } },
        bottom: { style: "thin", color: { rgb: "E2E4E8" } }
      }
    }
  });
  setStyleList.forEach((item) => {
    if (item.type === 1) {
      LAY_EXCEL.setExportCellStyle(resultData, item.range, {
        s: {
          fill: { bgColor: { indexed: 64 }, fgColor: { rgb: hexValue(item.backgroundColor || "FFFFFF") } },
          font: { color: { rgb: hexValue(item.textColor || "000000") } },
          border: {
            top: { style: "thin", color: { rgb: "E2E4E8" } },
            left: { style: "thin", color: { rgb: "E2E4E8" } },
            right: { style: "thin", color: { rgb: "E2E4E8" } },
            bottom: { style: "thin", color: { rgb: "E2E4E8" } }
          },
          alignment: { horizontal: "center", vertical: "center", wrapText: true }
        }
      });
    }
  });
  LAY_EXCEL.exportExcel({ sheet1: resultData }, `${fileName}.xlsx`, "xlsx", {
    extend: {
      "!cols": colConf,
      "!rows": rowConf,
      "!merges": mergeConf
    }
  });
}
const Gantt_vue_vue_type_style_index_0_scoped_8ca3b53f_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "guide" };
const _hoisted_2 = { class: "desc" };
const _hoisted_3 = { class: "date" };
const _hoisted_4 = { class: "item" };
const _hoisted_5 = { class: "item-name-list" };
const _hoisted_6 = { class: "date-list first-date-list" };
const _hoisted_7 = { class: "month" };
const _hoisted_8 = { class: "day-box" };
const _hoisted_9 = { class: "day" };
const _hoisted_10 = { class: "week" };
const _hoisted_11 = { class: "schedule-box" };
const _hoisted_12 = ["title", "onMousemove", "onMouseout", "onClick"];
const _hoisted_13 = {
  key: 0,
  class: "work-desc"
};
const _sfc_main = {
  __name: "Gantt",
  props: {
    data: {
      type: Array,
      required: true,
      default: []
    },
    dateRangeList: {
      type: Array,
      required: true,
      default: [],
      validator(value) {
        return value[0] && value.at(-1);
      }
    },
    dateText: {
      type: String,
      required: true
    },
    itemText: {
      type: String,
      required: true
    },
    activeDate: {
      type: String,
      default: () => fetchToday()
    },
    repeatMode: {
      // extract 将重叠部分抽取，单独生成独立的日程
      // cover 重叠部分按照征程日期排序覆盖
      type: Object,
      default: () => ({ mode: "cover", backgroundColor: "#FFFFCC", textColor: "#336666", name: "重叠日程", desc: "这是多个日程" })
    },
    // 每个日程格子的宽度
    itemWidth: {
      type: Number,
      default: 40,
      validator(value) {
        return value >= 40;
      }
    },
    itemHeight: {
      type: Number,
      default: 40,
      validator(value) {
        return value >= 40;
      }
    },
    scheduleTitle: {
      type: Function,
      default: null
    },
    borderColor: {
      type: String,
      default: "#eee"
    },
    alikeName: {
      type: Function,
      default: null
    }
  },
  emits: ["scheduleClick", "scrollXEnd", "scrollYEnd"],
  setup(__props, { expose, emit }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "39c94b00": props.borderColor,
      "6c211071": props.itemWidth + "px",
      "62895a5c": props.itemHeight + "px",
      "7593b3c6": ganttMaxWidth.value,
      "5ba861e2": ganttInnerHeight.value
    }));
    let rangeDate = ref([]);
    const ganttMaxWidth = ref("2000px");
    const ganttInnerHeight = ref("0px");
    const gantt = ref();
    let computeTimer = null;
    const computedGanttInnerHeight = () => {
      clearTimeout(computeTimer);
      computeTimer = setTimeout(() => {
        if (!gantt.value)
          return;
        ganttInnerHeight.value = 0;
        nextTick(() => {
          const parent = gantt.value.parentElement || document.body;
          const ganttHead = gantt.value.querySelector(`.desc`);
          const headRect = ganttHead.getBoundingClientRect();
          const parentRect = parent.getBoundingClientRect();
          const topHeight = headRect.top - parentRect.top;
          ganttInnerHeight.value = parentRect.height - headRect.height - topHeight + "px";
        });
      }, 200);
    };
    onMounted(() => {
      const itemBox = gantt.value.querySelector(".item-name-list");
      const innerBox = gantt.value.querySelector(".schedule-box");
      itemBox.addEventListener("scroll", contentScroll);
      innerBox.addEventListener("scroll", contentScroll);
      window.addEventListener("resize", computedGanttInnerHeight);
      computedGanttInnerHeight();
    });
    watchEffect(() => {
      rangeDate.value = splitDaysForMonth(computedDaysRange(props.dateRangeList[0], props.dateRangeList.at(-1)));
      console.log("rangeDate.value", rangeDate.value);
      ganttMaxWidth.value = props.itemWidth * rangeDate.value.flat(1).length + 122 + "px";
    });
    const checkValidator = () => {
      const keys2 = ["type", "name", "schedule"];
      const scheduleKeys = ["id", "name", "desc", "backgroundColor", "textColor", "days"];
      props.data.forEach((item) => {
        if (item.type === "normal") {
          const arr = Object.keys(item);
          const res = keys2.find((v) => !arr.includes(v));
          if (res) {
            throw new Error(`项目缺少${res}项`);
          }
          item.schedule.forEach((v) => {
            if (!v.list) {
              const arrs = Object.keys(v);
              const ress = scheduleKeys.find((val) => !arrs.includes(val));
              if (ress) {
                throw new Error(`日程缺少${ress}项`);
              }
            }
          });
        }
      });
    };
    const data = ref([]);
    const splitSchedule = (data2) => {
      return data2.map((item) => {
        if (item.type === "normal" && Array.isArray(item.schedule) && item.schedule.length) {
          item.schedule = item.schedule.filter((v) => {
            const check = rangeDate.value[0][0];
            const checkTime = `${check.year}-${check.month}-${check.day}`;
            return new Date(v.days.at(-1)).getTime() >= new Date(checkTime).getTime();
          });
        }
        return item;
      });
    };
    const sortFilterData = () => {
      checkValidator();
      data.value = cloneDeep_1(props.data).map((item) => {
        if (item.type === "normal" && Array.isArray(item.schedule)) {
          item.schedule = item.schedule.sort((a, b) => new Date(a.days[0]).getTime() - new Date(b.days[0]).getTime());
          item.schedule = item.schedule.map((schedule) => {
            if (schedule.days.length === 2) {
              schedule.days = fethDaysRange(...schedule.days);
            }
            return schedule;
          });
          return item;
        }
        return item;
      });
      data.value = splitSchedule(data.value);
    };
    const computedStyle = (parent, item) => {
      let res = {};
      if (parent.type === "alike") {
        res = {
          ...res,
          backgroundColor: parent.color
        };
      }
      if (item && item.type === "works") {
        res = {
          ...res,
          backgroundColor: item.backgroundColor,
          color: item.textColor,
          width: item.width + "px",
          marginLeft: -item.left + "px"
        };
      }
      return res;
    };
    const computeWordWidth = (schedule, days) => {
      const hasFirst = todayInRange(schedule[0], [days[0].date, days[days.length - 1].date]);
      const hasLast = todayInRange(schedule[schedule.length - 1], [days[0].date, days[days.length - 1].date]);
      if (hasFirst && hasLast)
        return schedule.length * props.itemWidth;
      if (!hasFirst && hasLast) {
        return fethDaysRange(days[0].date, schedule[schedule.length - 1]).length * props.itemWidth;
      } else if (hasFirst && !hasLast) {
        return fethDaysRange(schedule[0], days[days.length - 1].date).length * props.itemWidth;
      } else if (!hasFirst && !hasLast) {
        return fethDaysRange(days[0].date, days.at(-1).date).length * props.itemWidth;
      }
      throw new Error("computeWordwidth 宽度计算异常！");
    };
    const _checkTodayIsWork = (today, schedule) => {
      return schedule.days.includes(today);
    };
    const _checkTodayInResult = (today, result) => {
      return !!result.find((item) => item.date === today);
    };
    const _checkTodayInWorkList = (today, workList) => {
      return !!workList.find((item) => item.days.includes(today));
    };
    const _checkTodayInAllWorkList = (today, result) => {
      const res = result.filter((item) => item.type === "works");
      return !!_checkTodayInWorkList(today, res);
    };
    const _flatDateRange = (dateRange) => {
      return dateRange.flat(1).map((item) => {
        return {
          type: "normal",
          date: String(item.year).padStart(4, "0") + "-" + String(item.month).padStart(2, "0") + "-" + String(item.day).padStart(2, "0")
        };
      });
    };
    const _checkWorkRepeatRange = (workA, workB) => {
      return workA.days.filter((item) => workB.days.includes(item));
    };
    const _findTodayForWork = (today, res) => {
      return res.find((item) => item.type === "works" && item.days.includes(today));
    };
    const _updateScheduleItem = (scheduleItem, result) => {
      const inWorkInfo = _findTodayForWork(scheduleItem.days[0], result);
      if (inWorkInfo && scheduleItem.id !== inWorkInfo.id) {
        const repeatList = _checkWorkRepeatRange(inWorkInfo, scheduleItem);
        const start = scheduleItem.days.slice(repeatList.length)[0];
        const index = result.findIndex((item) => item.date === start);
        result[index] = {
          type: "works",
          date: scheduleItem.days[0],
          width: computeWordWidth(scheduleItem.days, result),
          left: repeatList.length * props.itemWidth,
          ...scheduleItem
        };
      } else {
        const index = result.findIndex((item) => item.date === scheduleItem.days[0]);
        result[index] = {
          type: "works",
          date: scheduleItem.days[0],
          width: computeWordWidth(scheduleItem.days, result),
          left: 0,
          ...scheduleItem
        };
      }
      result = result.filter((item) => {
        return !(item.type === "normal" && scheduleItem.days.includes(item.date));
      });
      return result;
    };
    const renderWorks = (game) => {
      const dateRange = _flatDateRange(rangeDate.value);
      if (!game.schedule || !game.schedule.length)
        return dateRange;
      let res = [];
      game.schedule.forEach((scheduleItem) => {
        dateRange.forEach((dayItem) => {
          const isWork = _checkTodayIsWork(dayItem.date, scheduleItem);
          const todayInResult = _checkTodayInResult(dayItem.date, res);
          const todayInAllWorkList = _checkTodayInAllWorkList(dayItem.date, res);
          if (isWork) {
            if (!todayInResult && !todayInAllWorkList) {
              res.push({
                type: "works",
                date: dayItem.date,
                width: computeWordWidth(scheduleItem.days, dateRange),
                left: 0,
                ...scheduleItem
              });
            } else if (!todayInResult && todayInAllWorkList) {
              const inWorkInfo = _findTodayForWork(dayItem.date, res);
              if (scheduleItem.id !== inWorkInfo.id) {
                _checkWorkRepeatRange(inWorkInfo, scheduleItem);
                res = _updateScheduleItem(scheduleItem, res);
              }
            } else if (todayInResult && !todayInAllWorkList) {
              console.warn("当前日期已经被添加 && 当前日程不在已添加的日程范围内 (新增日程)");
              res = _updateScheduleItem(scheduleItem, res);
            } else
              ;
          } else {
            if (!todayInResult && !todayInAllWorkList) {
              res.push(dayItem);
            }
          }
        });
      });
      return res;
    };
    const dateItemMove = (type, event) => {
      if (type !== "works")
        return;
      if (event.target.tagName === "SPAN") {
        event.target.parentElement.style.zIndex = 2;
        event.target.parentElement.style.boxShadow = "0 0 5px 0px rgba(0, 0, 0, 0.2)";
      } else {
        event.target.style.zIndex = 2;
        event.target.style.boxShadow = "0 0 5px 0px rgba(0, 0, 0, 0.2)";
      }
    };
    const dateItemMoveOut = (type, event) => {
      if (type !== "works")
        return;
      if (event.target.tagName === "SPAN") {
        event.target.parentElement.style.zIndex = 1;
        event.target.parentElement.style.boxShadow = "none";
      } else {
        event.target.style.zIndex = 1;
        event.target.style.boxShadow = "none";
      }
    };
    let timer = null;
    const innerRef = ref(null);
    const contentScroll = (event) => {
      const target = event ? event.target : innerRef.value;
      if (!target)
        return;
      const targetClassName = target.className;
      let flag = "item-name-list";
      if (targetClassName === "item-name-list") {
        flag = "schedule-box";
      }
      const flagBox = gantt.value.querySelector(`.${flag}`);
      if (flagBox) {
        flagBox.scrollTop = target.scrollTop;
      }
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        const height = Math.ceil(Math.max(target.clientHeight, target.scrollHeight));
        if (target.scrollTop + target.clientHeight >= height) {
          emit("scrollYEnd", event);
        }
      }, 200);
    };
    watchEffect(() => {
      sortFilterData();
      if (props.repeatMode.mode === "extract") {
        data.value = workListSplitForRepeat(data.value, props.repeatMode);
        data.value = splitSchedule(data.value);
      }
      nextTick(() => {
        contentScroll();
      });
    });
    const scheduleClick = (item) => {
      emit("scheduleClick", item);
    };
    const onScrollX = (event) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        const target = event.target;
        const width = Math.ceil(Math.max(target.clientWidth, target.scrollWidth));
        if (target.scrollLeft + target.clientWidth >= width) {
          emit("scrollXEnd", event);
        }
      }, 200);
    };
    const waterMark = (txt) => {
      let length = txt.length * 20;
      let canvas = document.createElement("canvas");
      canvas.width = canvas.height = length;
      let context = canvas.getContext("2d");
      context.font = '14px "PingFangSC", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif';
      context.fillStyle = "rgba(0,0,0,0.5)";
      context.rotate(-25 * Math.PI / 180);
      context.fillText(txt, length / 20, length / 2);
      const waterImg = canvas.toDataURL("image/png");
      canvas = context = null;
      return waterImg;
    };
    const exportImg = async (config = {}) => {
      if (typeof config === "boolean" || typeof config !== "object") {
        throw new Error("exportImg传参方式已更改，请通过Object方式设置导出配置");
      }
      let { download = true, waterType = "txt", waterValue = "" } = config;
      return new Promise((resolve) => {
        const guide = document.querySelector(".guide");
        ganttInnerHeight.value = "unset";
        gantt.value.style.maxWidth = "unset";
        innerRef.value.scrollLeft = innerRef.value.scrollWidth;
        gantt.value.style.width = innerRef.value.scrollWidth + guide.clientWidth + "px";
        nextTick(() => {
          waterValue = waterValue.trim();
          let mark = null;
          if (waterValue) {
            const waterImg = waterMark(waterValue);
            mark = document.createElement("div");
            mark.style.position = "absolute";
            mark.style.zIndex = "9999";
            mark.style.opacity = "0.1";
            mark.style.top = mark.style.left = "0";
            mark.style.width = mark.style.height = "100%";
            mark.style.backgroundImage = `url(${waterImg})`;
            gantt.value.appendChild(mark);
          }
          html2canvas(gantt.value, {
            removeContainer: true
          }).then(function(canvas) {
            const href = canvas.toDataURL();
            if (mark) {
              mark.parentNode.removeChild(mark);
            }
            gantt.value.style.maxWidth = ganttMaxWidth.value;
            computedGanttInnerHeight();
            gantt.value.style.width = "100%";
            if (download) {
              const a = document.createElement("a");
              a.href = href;
              a.setAttribute("download", "日程图");
              a.click();
            }
            resolve(href);
          });
        });
      });
    };
    const exportGanttExcel = (file) => {
      const excelData = cloneDeep_1(data.value).map((item) => {
        item.renderWorks = renderWorks(item);
        if (item.type === "alike" && props.alikeName) {
          item.name = props.alikeName(item);
        }
        if (item.type === "normal" && props.scheduleTitle) {
          item.renderWorks.forEach((renderItem) => {
            renderItem.name = props.scheduleTitle(renderItem);
          });
        }
        return item;
      });
      exportExcel(file, rangeDate.value, excelData, props.dateText, props.itemText);
    };
    expose({
      exportImg,
      exportGanttExcel
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "gantt",
        ref_key: "gantt",
        ref: gantt
      }, [
        createElementVNode("div", _hoisted_1, [
          createElementVNode("div", _hoisted_2, [
            createElementVNode("span", _hoisted_3, toDisplayString(props.dateText), 1),
            createElementVNode("span", _hoisted_4, toDisplayString(props.itemText), 1)
          ]),
          createElementVNode("div", _hoisted_5, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(data.value, (item, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: normalizeClass({
                  "guide-name": true,
                  "last-guide-name": index === data.value.length - 1
                }),
                style: normalizeStyle(item.type === "alike" && computedStyle(item))
              }, toDisplayString(typeof props.alikeName === "function" && item.type === "alike" ? props.alikeName(item) : item.name), 7);
            }), 128))
          ])
        ]),
        createElementVNode("div", {
          class: "inner",
          onScroll: _cache[0] || (_cache[0] = ($event) => onScrollX($event)),
          ref_key: "innerRef",
          ref: innerRef
        }, [
          createElementVNode("div", _hoisted_6, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(rangeDate), (monthItem) => {
              return openBlock(), createElementBlock("div", {
                key: monthItem.year + "-" + monthItem.month,
                class: "month-item"
              }, [
                createElementVNode("div", _hoisted_7, toDisplayString(monthItem[0].year + "-" + monthItem[0].month), 1),
                createElementVNode("div", _hoisted_8, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(monthItem, (dayItem, dayIndex) => {
                    return openBlock(), createElementBlock("div", {
                      key: dayItem.day + dayItem.week,
                      class: normalizeClass({
                        "day-item": true,
                        "first-day-item": dayIndex === 0,
                        "date-active": props.activeDate === dayItem.year + "-" + dayItem.month + "-" + dayItem.day
                      })
                    }, [
                      createElementVNode("div", _hoisted_9, toDisplayString(dayItem.day), 1),
                      createElementVNode("div", _hoisted_10, toDisplayString(dayItem.week), 1)
                    ], 2);
                  }), 128))
                ])
              ]);
            }), 128))
          ]),
          createElementVNode("div", _hoisted_11, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(data.value, (item, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: normalizeClass({
                  "date-box": true,
                  "alike": item.type === "alike"
                })
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(renderWorks(item), (dateItem, dateIndex) => {
                  return openBlock(), createElementBlock("div", {
                    key: dateIndex,
                    class: normalizeClass({
                      "date-item": true,
                      "date-item-work": dateItem.type === "works",
                      "date-active": dateItem.date === props.activeDate
                    }),
                    style: normalizeStyle(computedStyle(item, dateItem)),
                    title: dateItem.type === `works` ? dateItem.desc : ``,
                    onMousemove: (event) => dateItemMove(dateItem.type, event),
                    onMouseout: (event) => dateItemMoveOut(dateItem.type, event),
                    onClick: ($event) => scheduleClick(dateItem)
                  }, [
                    dateItem.type === "works" ? (openBlock(), createElementBlock("span", _hoisted_13, toDisplayString(props.scheduleTitle ? props.scheduleTitle(dateItem) : dateItem.name), 1)) : createCommentVNode("", true)
                  ], 46, _hoisted_12);
                }), 128))
              ], 2);
            }), 128))
          ])
        ], 544)
      ], 512);
    };
  }
};
const Gantt = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8ca3b53f"]]);
export {
  computedDaysRange,
  Gantt as default,
  fetchDayDetail,
  fetchMonthRangeDay,
  fetchNextMonthRange,
  fetchPrevMonthRange,
  fetchThreeDays,
  fetchToday,
  fetchTodayMonthRange,
  fethDays,
  fethDaysRange,
  splitDaysForMonth,
  todayInRange,
  workListSplitForRepeat
};
//# sourceMappingURL=gantt.es.js.map
