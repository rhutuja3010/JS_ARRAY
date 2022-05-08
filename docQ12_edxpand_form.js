// 12. You will be given a number and you need to return it as a string in Expanded Form. For example:
// 12 # Should return '10 + 2'
// 42 # Should return '40 + 2'
// 70304 # Should return '70000 + 300 + 4'


// let num=require("readline-sync")
// let n=num.question("enter the number :")
// let string=""
// let i=0
// while (i<n.length){
//     string+=n[i]
//     let j=1
//     while(j<=n.length-(i+1)){
//         string+="0"
//         j++
//     }if (i==n.length-1){
//         break
        
//     }else{
//         string+="+"
//     }i++
// }
// console.log(string)


let num=require("readline-sync")
let n=num.question("enter the number :")
let s=""
for (let i=0;i<n.length;i++){
    s+=n[i]
    for (let j=0;j<n.length-(i+1);j++){
        s+='0'}
        if(i==n.length-1){
            break
        }else{
            s+='+'
    }
}console.log(s)


// let i=0
// while (i<n.length){
//     s+=n[i]
//     let j=1;
//     while(j<=n.length-(i+1)){
//         s+="0"
//         j++
//     }if(i==n.length-1){
//         break
//     }else{
//         s+="+"
//     }i++
// }console.log(s)

