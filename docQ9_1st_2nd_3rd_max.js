// Find the First Maximum, Second maximum, Third maximum number from the List.

let array=[5,2,88,90,6,1]
let max=0
let second_max=0
for (let i=0;i<array.length;i++){
    if (array[i]>max){
        max=array[i]
    }if (array[i]<max && array[i]>second_max){
           second_max=array[i]}

}
    // if (array[i]<max && array[i]>second_max){
    //     second_max=array[i]}

console.log("Max number :",max)
console.log("Second max :",second_max)


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