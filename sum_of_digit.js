let a=[23,45,30,10]
let arr=[];
for (let i=0;i<a.length;i++){
    let sum=0;
    let s=String(a[i])
    for (let j=0;j<s.length;j++){
        int=Number(s[j])
        sum+=int
    }arr.push(sum)
}console.log(arr)