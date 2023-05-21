// 8 Write a function that takes a string as input and returns the most frequent character 
// in the string. If there are multiple characters that appear with the same frequency, 
// return the one that appears first.

function getCharStr(str)

const map={};
str.split("").forEach(element => {
 map[element]=map[element]?map[element]+1:1;
});

let max = 1;
char = str[0];

for (let k in map ){
    if(map[k] > max) {
        max=map[k];
        char=k;

    }
    return char
}
const res=getCharStr("hello world")
console.log(res);



