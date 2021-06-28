/**
 * 冒泡排序
 * @param arr 待排序数组
 * @param direction asc: 升序 desc: 降序
 */
function bubbleSort (arr, direction = 'asc') {
  const l = arr.length
  const symbol = direction === 'asc' ? '>' : '<'
  let flag = false
  for (let i = 0; i < l - 1; i++) {
    flag = false
    for (let j = 0; j < l - i - 1; j++) {
      // eslint-disable-next-line no-eval
      if (eval(`${arr[j]} ${symbol} ${arr[j + 1]}`)) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        flag = true
      }
    }
    if (!flag) break
  }
}

module.exports.bubbleSort = bubbleSort
