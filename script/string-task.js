let str = "autonomousAArjisous"
/*
0 = a, 1 = e, 2 = i, 3 = o, 4 = u
*/
let strCount = [0, 0, 0, 0, 0]

for (let i = 0; i < str.length; i++){
    if(str[i]==="a" || str[i]==="A"){
        strCount[0] = strCount[0] + 1;
    }else if(str[i]==="e" || str[i]==="E"){
        strCount[1] = strCount[1] + 1;
    }else if(str[i]==="i" || str[i]==="I"){
        strCount[2] = strCount[2] + 1;
    }else if(str[i]==="o" || str[i]==="O"){
        strCount[3] = strCount[3] + 1;
    }else if(str[i]==="u" || str[i]==="U"){
        strCount[4] = strCount[4] + 1;
    }
}
console.log(
    "a:", strCount[0],
    "\ne:", strCount[1],
    "\ni:", strCount[2],
    "\no:", strCount[3],
    "\nu:", strCount[4],
);
let words = [
    "apple", "banana", "pineapple", "banana",
    "banana", "melon", "guava", "apple",
];
let emptyArr = []
function noDuplicatewWord(listOfWords) {
    for(let word of listOfWords){
        if(!emptyArr.includes(word)){
            emptyArr.push(word)
        }
    }
    console.log(emptyArr)
}
noDuplicatewWord(words)
