/**
 * 数据类型的检测：
 * 一般会结合 typeof 与 Object.prototype.toString.call() 来实现
 * typeof 用来检测基本数据类型 其他的交给 Object.prototype.toString.call
 */

module.exports = function toType (target) {
  if (target == null) {
    return `${target}`
  }
  if (typeof target !== 'object') {
    return typeof target
  } else {
    const regExp = /^\[object (\w+)\]$/
    return Object.prototype.toString.call(target).match(regExp)[1].toLowerCase()
  }
}
