// iterating
let fruits = ["apple", "banana", "mango", "melon","guava"];
while(fruits.length > 0) {
    fruits.pop()
    console.log(fruits)
}
// ranging
let marks = ["85", "78", "91", "82", "68"]
for (let score of marks){
    console.log(score, marks.indexOf(score))
}

/*Task-1*/
for (let i = 1; i <= 200; i++) {
    if(i===100){
        break
    }else{
        console.log(i)
    }
}
/*Task-2*/
let sum = 0, count = 1

while(true){
    sum += count
    if(sum >= 100){
        break
    }else{
        console.log("sum: ", sum)
    }
    count++
}
/*Task-3*/
let num = 1
while(num<=100){
    if(Number.isInteger(Math.sqrt(num))&& num !== 1){
        break
    }else{
        console.log("Square: ", num)
    }
    num++
}
/*Task-4*/
num = 1
while(num<=40){
    if(num % 2 === 0){
        console.log("Even: ", num)
    }else{
        num++
        continue
    }
    num++
}
num = 1
while(num<=40){
   if(num % 2 !== 0){
       console.log("Odd: ", num)
   }else{
       num++
       continue
   }
   num++
}
/*Task-5*/
num = 55
while(num <= 85){
    if(num % 2 === 0 || num % 5 === 0){
        num++
        continue
    }
    console.log("Odd: ", num)
    num++
}
/*Task-6*/
for (let i = 1; i <=60; i++){
    console.log(i+"th day of programming")
}
/*Task-7*/
for (let i = 61; i <=100; i++){
    if(i%2!==0){
        console.log("Odd Number: ",i)
    }
}
/*Task-8*/
for (let i = 78; i <=98; i++){
    if(i%2===0){
        console.log("Even Number: ",i)
    }
}
/*Task-9*/
sum = 0
for (let i = 91; i <=129; i++){
    if(i%2!==0){
        sum+=i
    }
}
console.log("Odd total: ",sum)
/*Task-10*/
sum = 0
for (let i = 51; i <=85; i++){
    if(i%2===0){
        sum+=i
    }
}
console.log("Even total: ", sum)
/*Task-11*/
for (let i = 1; i <=10; i++){
    console.log("9 X "+i+" = ", 9*i)
}
/* Practice Code*/
// Reversing Array
let arr = [1, 2, 3, 4, 6, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19], revArr = []
for (let i = arr.length-1; i >= 0; i--){
    revArr.push(arr[i])
}
console.log(revArr)
for (let item of arr){
    revArr.unshift(item)
}
console.log(revArr)
for(let i = 0; i < arr.length/2; i++){
    let temp = arr[i]
    arr[i] = arr[arr.length-i-1]
    arr[arr.length-i-1] = temp
}
console.log(arr)
// Ascending Order Sorting
arr =  [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15]
let temp = []
for (let i = 0; i < arr.length; i++){
    temp = [i, arr[i]] // index value
    for (let j = i; j < arr.length; j++){
        if(arr[j] < temp[1]){
            temp[0] = j
            temp[1] = arr[j]
        }
    }
    arr[temp[0]] = arr[i]
    arr[i] = temp[1]
    console.log(arr)
}


