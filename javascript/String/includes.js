/**
 * includes() 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false
 */

function customIncludes () {
  const [searchString, position = 0] = arguments

  return this.indexOf(searchString, position) !== -1
}

String.prototype.includes = customIncludes

const str = 'To be, or not to be, that is the question.'

console.log(str.includes('To be')) // true
console.log(str.includes('question')) // true
console.log(str.includes('nonexistent')) // false
console.log(str.includes('To be', 1)) // false
console.log(str.includes('TO BE')) // false
