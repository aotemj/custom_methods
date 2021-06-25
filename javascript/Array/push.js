// // 自定义 push 方法

function customPush () {
  const args = arguments; const argLength = args.length
  for (let i = 0; i < argLength; i++) {
    const len = this.length
    this[len] = arguments[i]
  }
  return this.length
}

Array.prototype.push = customPush

const arr = [1]
// let res = arr.push(5);
const res = arr.push(5, 1, 2)
console.log(res)
console.log(arr)
