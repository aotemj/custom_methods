/**
 * copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。
 */

function customCopyWithin () {
  const [target, start, end = start + 1] = arguments
  for (let i = start, j = target; i < end; i++, j++) {
    this[j] = this[i]
  }
  return this
}

Array.prototype.copyWithin = customCopyWithin

const array1 = ['a', 'b', 'c', 'd', 'e']

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4))
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3))
// expected output: Array ["d", "d", "e", "d", "e"]
