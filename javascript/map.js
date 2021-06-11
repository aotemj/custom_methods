// 自定义 map js map 函数
const customMap = function () {
    const args = arguments, l = this.length
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

Array.prototype.map = customMap;

const newArr = [1, 2, 3].map((item) => item * 2)
console.log(newArr);