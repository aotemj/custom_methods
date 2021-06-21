// 自定义 apply 函数

function customApply() {
    let self = this, args = arguments
    return (function () {
        const [_this, remainder] = args;

        _this.__proto__.fn = self;
        _this.fn(...remainder);
        delete _this.__proto__.fn;
    })()
}

Function.prototype.apply = customApply

function applyFunction() {
    console.log("apply test");
    console.log(arguments)
}

const obj = {
    a: 1
}
console.log(applyFunction.apply(obj, [1, 2, 3]));