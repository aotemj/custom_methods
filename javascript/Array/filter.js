// 自定义 filter 方法
function customFilter () {
  const [callback] = arguments; const l = this.length
  if (!(callback instanceof Function)) {
    throw TypeError(' The comparison function must be either a function')
  }

  const res = []
  for (let i = 0; i < l; i++) {
    if (callback(this[i], i, this)) {
      res[res.length] = this[i]
    }
  }
  return res
}

Array.prototype.filter = customFilter

const testArr = [1, 2, 3, 4, 'a,b,c']

const res = testArr.filter((item) => {
  return item > 3
})

console.log(res)
console.log(testArr)
