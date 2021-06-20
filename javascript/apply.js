// 自定义 apply 函数

function customApply() {
    let self = this, args = arguments
    return (function () {
        const [_this, remainder] = args

        return self.bind(_this, ...remainder)()
    })()
}

Function.prototype.apply = customApply

function applyFunction() {
    console.log("apply test");
}

const obj = {
    a: 1
}
console.log(applyFunction.apply(obj, [1, 2, 3]));