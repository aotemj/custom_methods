/**
 *Array.from
 * Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。

 下面是一个类似数组的对象，Array.from将它转为真正的数组。
 let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

 // ES5的写法
 var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

 // ES6的写法
 let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
 实际应用中，常见的类似数组的对象是 DOM 操作返回的 NodeList 集合，以及函数内部的arguments对象。Array.from都可以将它们转为真正的数组。

 // NodeList对象
 let ps = document.querySelectorAll('p');
 Array.from(ps).filter(p => {
  return p.textContent.length > 100;
});

 // arguments对象
 function foo() {
  var args = Array.from(arguments);
  // ...
}

 上面代码中，querySelectorAll方法返回的是一个类似数组的对象，可以将这个对象转为真正的数组，再使用filter方法。

 只要是部署了 Iterator 接口的数据结构，Array.from都能将其转为数组

 Array.from('hello')
 // ['h', 'e', 'l', 'l', 'o']

 let namesSet = new Set(['a', 'b'])
 Array.from(namesSet) // ['a', 'b']
 上面代码中，字符串和 Set 结构都具有 Iterator 接口，因此可以被Array.from转为真正的数组

 如果参数是一个真正的数组，Array.from会返回一个一模一样的新数组。

 Array.from([1, 2, 3]) // [1, 2, 3]

 另一个例子是返回各种数据的类型。

 function typesOf () {
  return Array.from(arguments, value => typeof value)
}
 typesOf(null, [], NaN)
 // ['object', 'object', 'number']
 */

const { isIterable, isArrayLike, isFunction } = require('../utils')
const arrLike1 = {
  3: 'a',
  1: 'b',
  2: 'c',
  a: 1,
  length: '3'
}

// console.log(isArrayLike(arrLike1))

function customFrom (...args) {
  const obj = args[0]
  const mapFn = args[1] || function (x) {
    return x
  }
  const _this = args[2]

  if (!isFunction(mapFn)) {
    throw TypeError(' The comparison function must be either a function')
  }

  const canTransform = isIterable(obj) || isArrayLike(obj)
  let res
  if (!canTransform) {
    return []
  } else {
    const entries = Object.entries(obj)
    const l = obj.length - 0
    res = new Array(l).fill(undefined)
    if (entries.length > 1) {
      if (obj instanceof Array) {
        for (let i = 0; i < l; i++) {
          res[i] = mapFn(obj[i])
        }
      } else {
        for (let i = 0; i < l; i++) {
          const [k, v] = entries[i]
          if (!isNaN(k - 0) && k - 0 < l) {
            res[k - 0] = mapFn(v)
          }
        }
      }
    }
  }
  return res
}

Array.from = customFrom

// const arr = Array.from(arrLike1) // [undefined,'b','c']
// const arr = Array.from({ length: 3 }) // [undefined,undefined,undefined]

/*
const arrLike2 = {
  a: 1,
  b: 2,
  length: 'a'
}
const arr = Array.from(arrLike2) // []
*/
// Array.from(arrayLike, x => x * x)
// 等同于
// Array.from(arrayLike).map(x => x * x)

// const arr = Array.from([1, 2, 3], (x) => x * x) // [1, 4, 9]
// const arr = Array.from('hello') // [ 'h', 'e', 'l', 'l', 'o' ]
// const arr = Array.from([1, 2, 3]) // [1,2,3]
// const arr = Array.from([1, , 2, , 3], (n) => n || 0)// [1, 0, 2, 0, 3]

/*
// function typesOf () {
//   return Array.from(arguments, value => typeof value)
// }
//
// const arr = typesOf(null, [], NaN)// ['object', 'object', 'number']
*/

/*
function countSymbols (string) {
  return Array.from(string).length
}

const arr = countSymbols('hello')
 */
console.log(arr)
