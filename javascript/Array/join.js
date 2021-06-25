// Array join 方法
// 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
function customJoin () {
  const l = this.length
  let separator = ''
  let res = ''
  if (arguments.length === 1) {
    separator = arguments[0]
  }

  for (let i = 0; i < l; i++) {
    const insertVal = this[i] !== null && this[i] !== undefined ? this[i] : ''
    if (i !== l - 1) {
      res += `${insertVal}${separator}`
    } else {
      res += insertVal
    }
  }
  return res
}

Array.prototype.join = customJoin

const testArr = [1, 2, 3, undefined, null, 0]
const res = testArr.join('---123--')

console.log(res)
