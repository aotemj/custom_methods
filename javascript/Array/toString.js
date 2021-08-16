/**
 * 自定义 Array.prototype.toString
 * @returns {string}
 */
function customToString () {
  const l = this.length
  let str = ''
  if (l === 0) return str
  for (let i = 0; i < l - 1; i++) {
    str += `${this[i]},`
  }
  str += `${this[l - 1]}`
  return str
}

Array.prototype.toString = customToString
const testArr = [1, 2, 3]
// const testArr = []

console.log(testArr.toString())
