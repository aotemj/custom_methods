const toType = require('./toType')
Function.prototype.beforeFunc = function (callback) {
  if (toType(callback) !== 'function') {
    throw new TypeError('callback must be a function')
  }
  const self = this
  return function () {
    callback.call(this, ...arguments)
    return self.call(this, ...arguments)
  }
}

Function.prototype.afterFunc = function (callback) {
  if (toType(callback) !== 'function') {
    throw new TypeError('callback must be a function')
  }
  const self = this
  return function () {
    self.call(this, ...arguments)
    return callback.call(this, ...arguments)
  }
}

function func () {
  console.log('func')
}

func.beforeFunc(() => {
  console.log('beforeFunc')
}).afterFunc(() => {
  console.log('afterFunc')
})()
// func()
