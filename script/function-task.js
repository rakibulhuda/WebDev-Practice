function myResult(marks){
    let total = 0
    for(let key in marks){
        total += marks[key]
    }
    return [total, Object.keys(marks).length, marks.math];
}

let student = {
    name: "John",
    age: 25,
    subject: {
        marks:{
            physics: 82.5,
            chemistry: 78,
            math: 90,
            english: 72,
            religion: 98,
            history: 100
        }
    }
}

function isOdd(number){
    console.log(number);
    return number % 2 === 0 ? "true" : "false"
}

function maxNumber(listOfNumbers){
    let max = 0
    for(let number in listOfNumbers){
        if(max < listOfNumbers[number]){
            max = listOfNumbers[number];
        }
    }
    return max;
}
function countBinaryZero(binaryInput){
    let count = 0;
    for(let item of binaryInput){
        if(item === '0'){
            count++;
        }
    }
    return count;
}

// Main call
let x = isOdd(student.subject.marks.chemistry);
console.log(x)
console.log("Max mark: ", maxNumber(student.subject.marks));
let [totalNumber, length, mathMark] = myResult(student.subject.marks);
console.log(totalNumber, length, mathMark);
let binaryInput = "011100101100100001"
console.log("Number of Zero:", countBinaryZero(binaryInput));