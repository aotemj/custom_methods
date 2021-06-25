// 自定义 call函数
function customCall () {
  const self = this
  const args = arguments

  return (function () {
    const [_this, ...reminder] = args
    _this.__proto__.fn = self
    _this.fn(...reminder)
    delete _this.__proto__.fn
  })()
}

Function.prototype.call = customCall

const obj = {
  a: 1
}

function testFn () {
  console.log(this)
  console.log(arguments)
}

const res = testFn.call(obj, 1, 2, 4, 5)
console.log(res)
