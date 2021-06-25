// Array 自定义 concat方法
// concat 方法可以连接多个数组，并生成新的数组
function customConcat () {
  const args = arguments; const thisL = this.length
  const l = args.length
  const res = []
  for (let i = 0; i < thisL; i++) {
    res[res.length] = this[i]
  }
  for (let i = 0; i < l; i++) {
    const item = args[i]
    if (item instanceof Array) {
      const l = item.length
      for (let j = 0; j < l; j++) {
        res[res.length] = item[j]
      }
    } else {
      res[res.length] = item
    }
  }

  return res
}

Array.prototype.concat = customConcat
// 此处有一个缺陷，就是当当前数组是稀疏数组的时候，没有值的自定义会添加 undefined，而不是 原生的 empty item
const testArr = [1, 2, , 3]
const testArr2 = [4, 5, 6, [10, 11, 12], null, undefined]

console.log(testArr.concat(testArr2, 7, 8, 9))
