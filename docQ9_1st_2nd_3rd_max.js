// Find the First Maximum, Second maximum, Third maximum number from the List.

// let array=[9,5,2,88,7,1]
// let max=0
// let second_max=0
// let third_max=0
// for (let i=0;i<=array.length;i++){
//     if (array[i]>max){
//         max=array[i]
//     }if ((array[i]>second_max) && (second_max !== max)){
//            second_max=array[i]
//         }
// }
// console.log("Max number :",max)
// console.log("Second max :",second_max)



let array=[9,5,2,88,7,8]
max=0;
second_max=0
third=0
for (i in array){
    if (array[i]>max){
        max=array[i]
        var store=i;
    }
array.splice(store,1)}
for (j in array){
    if (array[j]>second_max){
        second_max=array[j]
        var store1=j;
    }
    array.splice(store1,1)
}for (k in array){
    if (array[k]>third){
        third=array[k]
    }
}
console.log(second_max)
console.log(max)
console.log(third)


// let array=[5,2,88,90,6,1]
// let max=0
// let second_max=0
// for (let i=0;i<array.length;i++){
//     if (array[i]>max){
//         if ()
//     }





// # numbers=[5,4,67,2,9]
// # i=0
// # max=0
// # secondmax=0
// # while i<len(numbers):
// #     if max<numbers[i]:
// #         max=numbers[i]
// #     if numbers[i]<max and numbers[i]>secondmax:
// #         secondmax=numbers[i]
// #     i+=1
// # print(secondmax)