// 自定义 bind 方法
function customBind() {
    const args = arguments
    const self = this
    return function () {
        // console.log(this)
        // 当前的 _this 即为上层函数体内调用方法的方法体
        const [_this, ...reminder] = args

        _this.__proto__.fn = self
        _this.fn(...reminder, ...arguments)
        delete _this.__proto__.fn
    }
}

// 这里有个疑问：直接赋值 Function.prototype.bind = customBind 和 在 Function 的 prototype 上添加新的 customBind 方法，所执行的结果并不相同
Function.prototype.customBind = customBind
// Function.prototype.bind = customBind

let obj = {
    a: 1
}

function testFn() {
    console.log(this)
    console.log(arguments)
}

// const fn = testFn.customBind(obj, 1, 2, 3)
const fn = testFn.bind(obj, 1, 2, 3)
fn(4)

