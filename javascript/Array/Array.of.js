/**
 * Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型
 * 语法： Array.of(element0[, element1[, ...[, elementN]]])
 * @returns {[]}
 */
function customOf () {
  const res = []
  const args = arguments
  const l = args.length
  for (let i = 0; i < l; i++) {
    res.push(args[i])
  }
  return res
}

Array.of = customOf

// console.log(Array.of(1, 2, 3))
console.log(Array.of())
// console.log(Array.of(undefined))
