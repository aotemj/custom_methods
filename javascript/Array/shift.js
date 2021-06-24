const customShift = function () {
    const l = this.length;
    const [res] = this.splice(0, 1)
    return res;
}

Array.prototype.shift = customShift;

arr = [5, 1, 2, 3]
const res = arr.shift()
console.log(arr, res);