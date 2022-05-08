let a=[230,101,3099,50];
let arr=[];
for (i of a){
    let s=''
    let str=String(i)
    for (j of str){
        if (j!="0"){
            s+=j
        }
    }arr.push(s)
}console.log(arr)










// let l=[]
// for (i of a){
//     string=""
//     n=String(i)
//     for (j of n){
//         if (j!="0"){
//             string+=j
//         }

//     }
// l.push(Number(string))

// }
// console.log(l)


