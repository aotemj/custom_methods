const toType = require('./toType')

/**
 * shallowCopy
 * @param originObject
 * @returns {{}|(function(): void)|*}
 */
function shallowCopy (originObject) {
  const newObj = {}
  const type = toType(originObject)
  const Constructor = originObject.constructor

  if (/^(regexp|date)$/.test(type)) {
    return new Constructor(originObject)
  }
  if (/^(symbol|bitint)$/.test(type)) {
    return Object(originObject)
  }
  if (/^error$/.test(type)) {
    return new Constructor(originObject.message)
  }
  if (/^function$/.test(type)) {
    return function () {
      originObject.call(this, ...arguments)
    }
  }

  if (/^(object|array)$/.test(type)) {
    const keys = [
      ...Object.getOwnPropertyNames(originObject),
      ...Object.getOwnPropertySymbols(originObject)
    ]

    for (const key of keys) {
      newObj[key] = originObject[key]
    }

    return newObj
  }

  return originObject
}

/**
 * deepClone
 * @param originObject
 * @param cache the cache of collection of the element who has been traversed
 * @returns {{}|(function(): void)|*|{}}
 */
function deepCopy (originObject, cache = {}) {
  const newObj = {}
  const type = toType(originObject)
  // 防止递归调用
  if (cache[originObject]) {
    return originObject
  }
  cache[originObject] = originObject

  if (/^(object|array)$/.test(type)) {
    const keys = [
      ...Object.keys(originObject),
      ...Object.getOwnPropertySymbols(originObject)
    ]
    for (const key of keys) {
      if (cache[key]) {
        newObj[key] = cache[key]
        return
      }
      newObj[key] = deepCopy(originObject[key], cache)
      cache[key] = newObj[key]
    }
  } else {
    return shallowCopy(originObject)
  }
  return newObj
}

const target = {
  a: 123,
  b: 'string',
  c: true,
  d: Symbol('key'),
  e: new Date(),
  f: /^\w\d$/,
  g: new Error('new error'),
  h: new Map([['hello', 1], [123, 2], [Symbol('hello'), 1]]),
  i: new Set([1, 2, 3]),
  j: {
    a: function () {
    }
  },
  k: function () {
    console.log('k')
  },
  // m: target,
  [Symbol.toStringTag]: 'object', // 坑点：普通的循环不能检测 当前的 Symbol 键
  m: BigInt(10),
  n: [1, 2, [1, 2, 3]]
}

target.n = target // 测试循环引用

const newTarget = deepCopy(target)
console.log(newTarget)
console.log('------------------------------')
console.log(newTarget.n === target.n)
console.log(target.a)
// console.log('------------------------------')
// console.log(newTarget.b === target.b)
// console.log(target.b)
// console.log('------------------------------')
//
// console.log(newTarget.c === target.c)
// console.log(target.c)
// console.log('------------------------------')
//
// console.log(newTarget.d === target.d)
// console.log(target.d)
// console.log('------------------------------')
//
// console.log(newTarget.e === target.e)
// console.log(target.e)
// console.log('------------------------------')
//
// console.log(newTarget.f === target.f)
// console.log(target.f)
// console.log('------------------------------')
//
// console.log(newTarget.g === target.g)
// console.log(target.g)
// console.log('------------------------------')
//
// console.log(newTarget.h === target.h)
// console.log(target.h)
// console.log('------------------------------')
//
// console.log(newTarget.i === target.i)
// console.log(target.i)
// console.log('------------------------------')
//
// console.log(newTarget.j === target.j)
// console.log(target.j)
// console.log('------------------------------')
//
// console.log(newTarget.k === target.k)
// console.log(target.k)
// console.log('------------------------------')

// const target1 = new Error('hello')
// const target2 = new Date()
// const target3 = function () {
//   console.log(arguments)
// }
//
// console.log(target3(1, 2, 3))
// console.log(shallowCopy(target3)(1, 2, 3))
