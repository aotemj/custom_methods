// Array sort 自定义方法
// 对数组的元素进行排序，并在原数组上修改

const { bubbleSort } = require('../sort/bubbleSort')

function customSort () {
  const [compareFn] = arguments
  if (!(compareFn instanceof Function)) {
    throw TypeError(' The comparison function must be either a function or undefined')
  }

  const tempRes = compareFn(1, 2)
  switch (tempRes) {
    // 升序
    case -1:
      bubbleSort(this, 'asc')
      break
    // 降序
    case 1:
      bubbleSort(this, 'desc')
      break
  }
}

Array.prototype.sort = customSort

const testArr = [1, 2, 3, 5, 3, 2]

testArr.sort((a, b) => {
  return b - a
})

// console.log(bubbleSort(testArr, 'asc'))

console.log(testArr)
