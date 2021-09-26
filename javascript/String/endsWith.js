/**
 * endsWith()方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false
 */

function customEndsWith () {
  const [searchString, endPosition = this.length] = arguments
  const searchOirginString = this.substring(0, endPosition)
  return searchOirginString.indexOf(searchString) !== -1
}

String.prototype.endsWith = customEndsWith

const str1 = 'Cats are the best!'

console.log(str1.endsWith('best', 17))
// expected output: true

const str2 = 'Is this a question'

console.log(str2.endsWith('?'))
// expected output: false
