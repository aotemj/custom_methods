// // 自定义 push 方法

function custom_push() {
    let args = arguments, argLength = args.length;
    for (let i = 0; i < argLength; i++) {
        const len = this.length;
        this[len] = arguments[i]
    }
    return this.length;
}

Array.prototype.push = custom_push


let arr = [1]
// let res = arr.push(5);
let res = arr.push(5, 1, 2);
console.log(res);
console.log(arr);