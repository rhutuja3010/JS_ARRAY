// var myFavouriteGames = ["chess", "Ludo", "Badminton", "Volleyball"];
// console.log(myFavouriteGames);


// var myFavouriteFruits = ["Mango", "Orange", "Banana", "Grapes"];
// console.log(myFavouriteFruits[2]);


// var myFavouriteFruits = ["Mango", "Orange", "Banana"];

// (myFavouriteFruits.pop());
// console.log(myFavouriteFruits)


// let myFavouriteGames = ["Chess", "Ludo", "Badminton"];
// myFavouriteGames.unshift("Basketball");
// console.log(myFavouriteGames);



// let myFavouriteGames = ["chess", "Ludo", "Badminton"];
// console.log(myFavouriteGames[2]);


// let myFavouriteGames = ["chess", "Ludo", "Badminton", "Basketball", "Carom", "Cricket"];
// let removedItems = myFavouriteGames.splice(3,1);
// console.log(myFavouriteGames);



// var array = [ 1, 2, 3, 4, 5, 6 ];
// for (var index = 0; index < array.length; index++) {
// console.log(array[index]);
// }


// let fruits = ['Apple', 'Banana', 'Orange']
// let position = fruits.indexOf('Banana')
// console.log(position)



// var myFavouriteFruits = ["Mango", "Orange", "Banana"]
// a=myFavouriteFruits.pop();
// console.log(myFavouriteFruits)



// var myFavouriteGames = ["Chess", "Ludo", "Badminton"];
// myFavouriteGames.unshift( 'Basketball')
// console.log(myFavouriteGames)



// let myFavouriteGames = ["chess", "Ludo", "Badminton", "Basketball", "Carom", "Cricket"];
// let removedItems = myFavouriteGames.splice(3,2);
// console.log(myFavouriteGames);




// numbers=[50,40, 23, 70, 56, 12, 5, 10, 7];
// var count_element=0;
// for(var i=0;i<numbers.length;i++){
//     count_element+=1
// }
// console.log(count_element);





// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var max_num=0;
// for(var i=0; i<numbers.length;i++){   
//     if (numbers[i]>max_num){
//        max_num=numbers[i]
 
//    }
   
// }
// console.log(max_num)




// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// var max=0;
// var second_max=0;
// for (var i =0;i <numbers.length;i++){
//     if (second_max   > second_max+max)
//    }
//    max=numbers[i];
//  }
//  else{
//      if (second_max     > second_max=numbers[i];
//    }
//  }
// }
 
// console.log(second_max);



// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var reversedArray=[]
// for(var i=numbers.length-1; i>=0;i--){
//    reversedArray.push(numbers[i])
// }
// console.log(reversedArray);



// var Name=['m','a','l','a','y','a','l','a','m'];
// let new_array=[]
// for (let i=Name.length-1;i>=0;i--){
//     new_array.push(Name[i])
// }
// let count=0
// for (let j=0;j<=Name.length-1;j++){
//     if (new_array[j]===Name[j]){
//         count++
//     }
// }
// if (count===Name.length){
//     console.log("this is palindrom")
// }else{
//     console.log("this is not a palindrom")
// }


// var new_array=[];
// for (var i=Name.length-1; i>=0;i--){
//    new_array.push(Name[i]);
// }
// // console.log(new_array)
// var count=0;
// for (var j=0; j<=Name.length-1;j++){
//    if (new_array[j]===Name[j]){
//        count++;
//    }
// }
// if(count===Name.length){
//    console.log("This is palindrome");
// }else{
//    console.log("This is not a palindrome");
// }



// var list1 = [1,2,3,4,5,6]
// var list2 = [2,3,1,0,6,7]
// elements=[]
// for(var i of list1){
//    if (!list2.includes(i)){
//        elements.push(i)
//    }
// }
// console.log(elements);


// marks = [
//     [78, 76, 94, 86, 88],
//     [91, 71, 98, 65, 76],
//     [95, 45, 78, 52, 49]
//     ]

// let sum=0;
// for (let i of marks){
//     for (let j of i){
//         sum+=j
//     }
// }console.log(sum)



// var n = [10, 11, 12, 13, 14, 17, 18, 19]
// let numbers=30
// l=[]
// for (let i of n){
//     for (let j of n){
//         if (i+j===numbers)
//         l.push([i,j])
//     }
// }console.log(l)


// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
// even=0
// odd=0
// for (let i of elements){
//     if(i%2==0){
//         even+=1
//     }else{
//         odd+=1
//     }
// }
// console.log(even)
// console.log(odd)


// elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// even=0
// odd=0
// for (let i of elements){
//     if (i%2==0){
//         even+=i
//     }else{
//         odd+=i
//     }
// }console.log("even_num_sum :",even)
// console.log("odd_num_sum :",odd)



// elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// even=0
// odd=0
// for (let i of elements){
//     if (i%2==0){
//         even+=i
//     }else{
//         odd+=i
//     }
// }
// console.log((even+odd)/2)




// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// count_even=0
// sum_of_evennum=0
// count_odd=0
// sum_of_oddnum=0
// for (let i of elements){
//     if (i%2==0){
//         count_even+=1
//         sum_of_evennum+=i
//     }else{
//         count_odd+=1
//         sum_of_oddnum+=i
//     }
// }
// console.log("even_count :",count_even)
// console.log("odd_count :",count_odd)
// console.log("sum_of_evennum :",sum_of_evennum)
// console.log("sum_of_oddnum :",sum_of_oddnum)
// console.log("average :",(sum_of_evennum+sum_of_oddnum)/2)



// var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
// let crorepati=0
// let lakhapati=0
// let dilvale=0
// for (let i of kitna_paisa_hai){
//     if (i>=10000000){
//         crorepati+=1
//     }else if(i>=100000){
//         lakhapati+=1
//     }else{
//         dilvale+=1
//     }
// }
// console.log(crorepati)
// console.log(lakhapati)
// console.log(dilvale)


// char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
// uniques=[]
// for (let i of char_list){
//     if (!uniques.includes(i)){
//         uniques.push(i)
//     }
// }
// console.log(uniques)
// for (let j of uniques){
//     count=0
//     for (let k of char_list){
//         if(j===k){
//             count++
//         }
//     }console.log(j,count," times")
// }
// for(var i of char_list){
//    if(!uniques.includes(i)){
//        uniques.push(i)
//    }
// }
// console.log(uniques);
 
// for(var j of uniques){
//    count=0
//    for(var k of char_list){
//        if (j === k){
//            count+=1
//        }
//    }
//    console.log(j,count," times");
// }







var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
uniques=[]
duplicates=[]
count=0
for(var i of number_list){
  if(!uniques.includes(i)){
      uniques.push(i)
      count+=1
  }

}
console.log( uniques)
console.log(count)
 
// for(var j of uniques){
//   count=0
//   for(var k of number_list){
//       if (j === k){
//           count+=1
//       }
//   }
//  if(count >1){
//    duplicates.push(j);
//  };
// }
// console.log(duplicates);






// var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
// var subStr = "over";
 
// var c = mainStr.split(" ");
// output="";
// for(var i of c){
//     if (i!=subStr)
//    output=output+i+" "
// }
// console.log(output);


// let fruits=["banana","orange","apple","mango","kiwi"]
// fruits.splice(1,2,"lemon")
// console.log(fruits)


// let a="rhutuja"
// a="rhutujapatil"
// console.log(a)


// let i=1
// l=[]
// while (i<=10){
//     l.push(i)
//     i++
// }
// console.log(l)



// let n=require("readline-sync")
// let num1=n.questionInt("enter the first no  :")
// let num2=n.questionInt("enter the last no   :")
// let i=num1
// let l=[]
// while(i<=num2){
//     if (i%2==0){
//         l.push(i)
//     }
//     i++
// }
// console.log(l)
