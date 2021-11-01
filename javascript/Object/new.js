/**
 * 手动实现new关键词
 */
function customNew () {
  const [constructor, ...params] = arguments
  const obj = Object.create(null)
  obj.__proto__ = constructor.prototype
  const result = constructor.apply(obj, params)
  return typeof result === 'object' ? result : obj
}

function Person (name, age) {
  this.name = name
  this.age = age
}

// const p = new Person('hello')
const p = customNew(Person, 'alex', 12)
console.log(p)
console.log(p.name)
console.log(p.age)
