const customUnshift = function () {
    const args = arguments, argLength = args.length;
    for (let i = 0; i < argLength; i++) {
        const l = this.length;
        this[l] = arguments[i]
    }
    return this.length;
}


Array.prototype.unshift = customUnshift



const arr = [1, 2, 3]

let res = arr.unshift(1, 2, 3)
console.log(res);

console.log(arr);
