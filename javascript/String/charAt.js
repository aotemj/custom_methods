/**
 * charAt() 方法从一个字符串中返回指定的字符
 * str.charAt(index)
 * index: 一个介于0 和字符串长度减1之间的整数。 (0~length-1) 如果没有提供索引，charAt() 将使用0。
 * 字符串中的字符从左向右索引，第一个字符的索引值为 0，最后一个字符（假设该字符位于字符串 stringName 中）的索引值为 stringName.length - 1。 如果指定的 index 值超出了该范围，则返回一个空字符串
 */

function customCharAt () {
  const [index] = arguments
  return this[index] || ''
}

String.prototype.charAt = customCharAt
const anyString = 'Brave new world'

console.log("The character at index 0   is '" + anyString.charAt(0) + "'")
console.log("The character at index 1   is '" + anyString.charAt(1) + "'")
console.log("The character at index 2   is '" + anyString.charAt(2) + "'")
console.log("The character at index 3   is '" + anyString.charAt(3) + "'")
console.log("The character at index 4   is '" + anyString.charAt(4) + "'")
console.log("The character at index 999 is '" + anyString.charAt(999) + "'")

// The character at index 0 is 'B'
// The character at index 1 is 'r'
// The character at index 2 is 'a'
// The character at index 3 is 'v'
// The character at index 4 is 'e'
// The character at index 999 is ''
