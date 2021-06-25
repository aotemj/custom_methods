const customUnshift = function () {
  const args = arguments; const argLength = args.length
  for (let i = 0; i < argLength; i++) {
    const l = this.length
    this[l] = arguments[i]
  }
  return this.length
}

Array.prototype.unshift = customUnshift

const arr = [1, 2, 3]

const res = arr.unshift(1, 2, 3)
console.log(res)

console.log(arr)
