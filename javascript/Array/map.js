// 自定义 map js map 函数
const customMap = function () {
  const [callback] = arguments
  const l = this.length
  if (!(callback instanceof Function)) {
    throw Error('map need a function as a param')
  }
  const mappedArr = []
  for (let i = 0; i < l; i++) {
    mappedArr[mappedArr.length] = callback(this[i], i, this)
  }
  return mappedArr
}

Array.prototype.map = customMap

const newArr = [1, 2, 3].map((item) => item * 2)
console.log(newArr)
