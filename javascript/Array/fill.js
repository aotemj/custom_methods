/* 方法使用给定值，填充一个数组。

fill方法使用给定值，填充一个数组。

['a', 'b', 'c'].fill(7)
// [7, 7, 7]

new Array(3).fill(7)
// [7, 7, 7]
上面代码表明，fill方法用于空数组的初始化非常方便。数组中已有的元素，会被全部抹去。

fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。

['a', 'b', 'c'].fill(7, 1, 2)
// ['a', 7, 'c']
上面代码表示，fill方法从
1
号位开始，向原数组填充
7，到
2
号位之前结束。

注意，如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。

let arr = new Array(3).fill({name: "Mike"});
arr[0].name = "Ben";
arr
// [{name: "Ben"}, {name: "Ben"}, {name: "Ben"}]

let arr = new Array(3).fill([]);
arr[0].push(5);
arr
// [[5], [5], [5]]

*/

function customFill () {
  const l = this.length
  const [value, start = 0, end = l] = arguments

  for (let i = start; i < end; i++) {
    this[i] = value
  }
}

Array.prototype.fill = customFill

const testArr = new Array(3)

testArr.fill(12)
console.log(testArr)

const testArr1 = new Array(3)

testArr1.fill(null, 0, 1)

console.log(testArr1)

const testArr3 = ['a', 'b', 'c']
testArr3.fill(7, 1, 2)
console.log(testArr3)

const testArr4 = new Array(3)
testArr4.fill(7)

console.log(testArr4)
