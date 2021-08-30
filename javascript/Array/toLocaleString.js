/**
 * 自定义 toLocaleString
 * toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。
 * @type {(number|string|Date)[]}
 */

function customToLocaleString () {
  const [locales, options] = arguments
  const l = this.length
  let res = ''
  for (let i = 0; i < l; i++) {
    res += this[i].toLocaleString(locales, options)
  }
  return res
}

Array.prototype.toLocaleString = customToLocaleString

const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')]
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' })

console.log(localeString)
