a=[3,7,1,8,[4,6],9]
let l=[]
for (i of a){
    if (Array.isArray(i)){
        for (j of i){
            l.push(j)
        }
    }else{
        l.push(i)
    }
}console.log(l)
