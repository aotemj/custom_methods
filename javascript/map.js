// 自定义 map js map 函数
const customMap = function () {
    const args = arguments, l = arr.length
    const arr = this
    if (!args.length || typeof args[0] !== 'function') {
        throw Error('map need a function as a param')
    }
    let mappedArr = []
    for (let i = 0; i < l; i++) {
        mappedArr.push(args[0](arr[i]))
    }
    return mappedArr
}

Array.prototype.customMap = customMap;

const newArr = [1, 2, 3].customMap((item) => item * 2)
console.log(newArr);