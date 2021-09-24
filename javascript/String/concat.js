/**
 * String.prototype.concat() 建议使用 + "" + "" 方式代替concat 方法
 concat() 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。
 */

function customConcat () {
  const l = arguments.length
  let res = this
  for (let i = 0; i < l; i++) {
    res += arguments[i]
  }
  return res
}

String.prototype.concat = customConcat

const hello = 'Hello, '
console.log(hello.concat('Kevin', '. Have a nice day.'))
// Hello, Kevin. Have a nice day.

const greetList = ['Hello', ' ', 'Venkat', '!']
''.concat(...greetList) // "Hello Venkat!"

console.log(''.concat({ a: 1 })) // [object Object]
console.log(''.concat([])) // ""
console.log(String([1, 23]))
console.log(''.concat(null)) // "null"
console.log(''.concat(true)) // "true"
console.log(''.concat(4, 5)) // "45"
