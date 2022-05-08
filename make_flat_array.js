let a=[3,7,1,8,[4,6],9];
let l=[];
for (i of a){
    if (Array.isArray(i)){
        for (j of i){
            l.push(j)
        }
    }
    else{
        l.push(i)
    }
}
console.log(l)



// let a=[3,7,1,8,[4,6],9];
// let arr=[];
// for (i of a){
//     if(Array.isArray(i)){
//         for (j of i){
//             arr.push(j)
//         }
//     }else{
//         arr.push(i)
//     }
// }console.log(arr)


// let a=[3,7,1,8,4,6,9];
// var arr=[];
// for (i of a){
//     if (i%2!=0){
//         arr.push(i)
//         // a.push(arr)
//         // break
//     }
//     a.push(arr)
//         break
//     // console.log(a)
// }
// console.log(a)
// // console.log(arr)