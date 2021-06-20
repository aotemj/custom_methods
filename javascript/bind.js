// 自定义 bind 函数
function customBind() {
    const arg = arguments
    const self = this
    return function () {
        const [_this, ...remainder] = arg
        return self.apply(_this, [...remainder])
    }
}

Function.prototype.bind = customBind

function bindFunction() {
    console.log(this, arguments)
}

const obj = {
    a: 1
}

console.log(bindFunction.bind(obj, 23)());
// console.log(bindFunction());
// console.log(bindFunction.bind(null, 23)());




