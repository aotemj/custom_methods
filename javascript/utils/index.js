function isTargetType (fn, targetObject) {
  return fn instanceof targetObject
}

function isFunction (fn) {
  return isTargetType(fn, Function)
}

module.exports = {
  // isTargetType,
  isFunction
}
