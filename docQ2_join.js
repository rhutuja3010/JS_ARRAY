// Convert Character Matrix to single String;
// The original list is: [ ['g', 'f', 'g'], ['i', 's'], ['b', 'e', 's', 't'] ]
// The String after join: gfgisbest


let l=[ ['g', 'f', 'g'], ['i', 's'], ['b', 'e', 's', 't'] ]
string=""
for (let i=0; l.length>i;i++){
    for (let j=0;l[i].length>j;j++){
        jo=l[i][j]
        string+=jo
    }
}
console.log(string)


// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// // expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// // expected output: "FireAirWater"

// console.log(elements.join('-'));
// // expected output: "Fire-Air-Water"


