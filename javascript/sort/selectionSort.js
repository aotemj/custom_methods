// 选择排序
// 思路： 首先从原数组中选出最小值，放入目标数据的开头，然后在剩余原数组中继续选出最小值，然后继续放入目标数组。。依次循环
function selectionSort (arr) {
  const l = arr.length
  let min = arr[0]
  let index = 0
  const res = []

  while (res.length < l) {
    const nl = arr.length
    for (let i = 0; i < nl; i++) {
      if (arr[i] < min) {
        min = arr[i]
        index = i
      }
    }
    res.push(min)
    arr.splice(index, 1)
    // 重置
    min = arr[0]
    index = 0
  }
  return res
}

const testArr = [2, 3, 1, 4, 2, 1]

console.log(selectionSort(testArr))
