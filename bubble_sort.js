// let a=[8,2,5,1,3,6,0,9,4,7]
// for (let i=0;a.length>i;i++){
//     for (let j=0;a.length>j-1;j++){
//         if (a[j]<a[j+1]){
//             b=a[j]
//             a[j]=a[j+1]
//             a[j+1]=b
//         }
//     }
// }
// console.log(a)



// let a=[8,2,5,1,3,6,0,9,4,7]
// for (let i=0;i<a.length;i++){
//     for (let j=0;j<a.length-1;j++){
//         if (a[j]>a[j+1]){
//             b=a[j]
//             a[j]=a[j+1]
//             a[j+1]=b
//         }
//     }
// }
// console.log(a)
a=[8,2,5,1,3,6,0,9,4,7]
for(let i=0;i<a.length;i++){
    for(let j=0;j<a.length;j++){
        if(a[j]>a[j+1]){
            b=a[j]
            a[j]=a[j+1]
            a[j+1]=b
        }
    }
}console.log(a)




// for (let i=0;i<a.length;i++){
//     for (let j=0;j<a.length-1;j++){
//         if (a[j]>a[j+1]){
//             b=a[j]
//             a[j]=a[j+1]
//             a[j+1]=b

//         }
//     }
// }
// console.log(a)



// var sum = 0, i;
//     if (typeof x === 'number'){
//     }else if (x instanceof Array){
//     }for (i = 0; i < x.length; ++i){
//             sum += arraySum(x[i]);}
// console.log(arraySum)