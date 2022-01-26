// List product excluding duplicates.
// List = [6,1,3,5,6,3,1]
// Output: 60

let List = [6,1,3,5,6,3,1]
let l=[]
let m=1
for (let i=0;List.length>i;i++){
    if (!l.includes(List[i])){
        l.push(List[i])
        m*=l[i]
    }
}
console.log(m)
console.log(l)