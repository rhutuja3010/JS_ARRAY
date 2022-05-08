// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));


// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// inserts at index 1
// console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(3, 1, 'May');
// replaces 1 element at index 4
// console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]



// let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
// let removed = myFish.splice(2, 0, 'drum')
// console.log(myFish)

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed




// let a=[1,2,3,4,5]
// b=a.splice(0,3)
// console.log(b)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // console.log(fruits.pop());
// fruits.pop();
// console.log(fruits)



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.shift())
// fruits.shift();
// console.log(fruits)



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon","Pineapple");
// console.log(fruits)


// console.log(fruits.push("Lemon","Pineapple"));



// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin"];
// const children = arr1.concat(arr2,arr3);
// console.log(children)
// console.log(arr1.concat(arr2,arr3));




// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.constructor;
// console.log(text)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(1,1);
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi","watermelon","Anar","greaps"];
// fruits.copyWithin(3, 0, 2);
// console.log(fruits)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi");
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi", 2, 4);
// console.log(fruits)


// const ages = [3, 10, 18, 20];
// ages.find(checkAge);
// function checkAge(age) {
//   return age > 18;
// }
// console.log(checkAge())
// // function myFunction() {
// //   document.getElementById("demo").innerHTML = ages.find(checkAge);
// // }


// const ages = [3, 10, 18, 20];

// ages.findIndex(checkAge);

// function checkAge(age) {
//   return age > 18;
// }
// console.log( checkAge(ages))


// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction);
// console.log(fruits)


// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt)
// // console.log(newArr)
// console.log(numbers.map(Math.sqrt))



// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)
// console.log(newArr)
// function myFunction(num) {
//   return num * 10;
// }



// let a=[1,2,3,4]
// let b=a.map(multi);
// console.log(b)
// function multi(x){
//     return x*2
// }

// let a=[1,2,3,4]
// let b=a.map(sum);
// console.log(b)
// function sum(x){
//     return x+1
// }


// let obj=[{fname:"Rhutuja",lname:"Patil"},
//     {fname:"veda",laname:"Patil"},
//     {fname:"anu",laname:"gharat"}]

// let b=obj.map(find);
// console.log(b) 
// function find(i){
//     return i.fname
// }