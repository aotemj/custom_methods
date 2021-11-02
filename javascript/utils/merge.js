const toType = require('./toType')

function isObjectType (target) {
  return toType(target) === 'object'
}

/**
 * custom merge
 */
function customMerge (originOptions, targetOptions) {
  const keys = [
    ...Object.keys(targetOptions),
    ...Object.getOwnPropertySymbols(targetOptions)
  ]
  // const newObj = {}
  for (const key of keys) {
    const originValue = originOptions[key]
    const targetValue = targetOptions[key]
    const isOriginObject = isObjectType(originValue)
    const isTargetObject = isObjectType(targetValue)

    if (isOriginObject && !isTargetObject) {
      throw new Error(`${key} in params must be object type`)
    }

    if (isOriginObject && isTargetObject) {
      originOptions[key] = customMerge(originValue, targetValue)
    }
    originOptions[key] = targetValue
  }
  return originOptions
}

const originOptions = {
  a: 1,
  b: 'string',
  c: true,
  d: {
    a: function () {
      console.log(arguments)
    },
    b: 'hello'
  },
  e: Symbol('key')
}
const targetOptions = {
  a: 3,
  b: false,
  c: 'hello',
  d: {
    a: function () {
      console.log(arguments)
    },
    test: '1'
  },
  e: Symbol('key')
}

// const newObj = Object.assign({}, originOptions, targetOptions)
const newObj = customMerge(originOptions, targetOptions)
console.log(newObj)
