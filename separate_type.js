let a=[1,3,"4","7",8]
let arr1=[]
let arr2=[]
for (i of a){
  if (typeof i==='number'){
    arr1.push(i)
  }if(typeof i==='string'){
    arr2.push(i)
  }
}console.log(arr1)
console.log(arr2)

// let l=[]
// let l1=[];
// for (i of a){


//   if (typeof i==='number'){
//     l.push(i)
//   }
//   if (typeof i==='string'){
//     l1.push(i)
//   }
// }console.log(l1)