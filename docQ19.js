let a = [1, 2, 3, 4];
let a1 = [];
let n = 2

for (i in a) {
    let m = (i * n) + 1
    a1.push(m)
    n += 2
}
console.log(a1)