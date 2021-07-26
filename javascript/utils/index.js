function isTargetType (fn, targetObject) {
  return fn instanceof targetObject
}

/**
 * 检测当前 fn 是否为函数类型
 * @param fn
 * @returns {boolean}
 */
function isFunction (fn) {
  return isTargetType(fn, Function)
}

/**
 * 检测当前 obj 是否有部署 iterator 接口
 * @param obj
 * @returns {boolean}
 */
function isIterable (obj) {
  if (obj == null) {
    return false
  }
  return typeof obj[Symbol.iterator] === 'function'
}

/**
 * 检测当前obj 是否为 类数组
 * @param obj
 * @returns {boolean}
 */
function isArrayLike (obj) {
  if (
    obj &&
    typeof obj === 'object' &&
    isFinite(obj.length) &&
    (
      obj.length === Math.floor(obj.length) ||
      !isNaN(obj.length - 0)
    ) &&
    obj.length - 0 < Math.pow(2, 32)
  ) {
    return true
  }
  return false
}

module.exports = {
  // isTargetType,
  isFunction,
  isIterable,
  isArrayLike
}
