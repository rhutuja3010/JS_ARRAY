// let chars = ['A', 'B', 'A', 'C', 'B'];
// // let uniqueChars = [...new Set(chars)];
// console.log([...new Set(chars)])
// // console.log(uniqueChars); 


let a=[2,3,4,5,1,2,3]
let arr=[];
for (i of a){
    if (!arr.includes(i)){
        arr.push(i)
    }
}console.log(arr)
