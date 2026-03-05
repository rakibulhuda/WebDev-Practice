const newArray = [1,2,3]
const copyArray = [...newArray,4] // ... is a spread operator
copyArray.push(99)
console.log(copyArray)
console.log(newArray)

const student = {
    name: "Jake",
    age: 15,
    class: "8th grade",
    marks: {
        physics: 91,
        math: 89,
        sports: "N/A",
        religion: false
    }
}
console.log(student)
// Object destructuring
/**
 * const {physics: phyMarks} = student.marks
 * console.log(`physics marks: ${phyMarks} , type: ${typeof phyMarks}`)
 * phyMarks = 100 // this cannot be done
 * console.log(phyMarks)
 */

let {physics: phyMarks} = student.marks
console.log(`reference: ${phyMarks} , original: ${student.marks.physics}`)
phyMarks = 100 // local variable
console.log(`reference: ${phyMarks} , original: ${student.marks.physics}`)

const teacher = {
    salary: 6500,
    shift: "9-5"
}
teacher.wife = true
console.log(teacher)
delete teacher.wife
Object.seal(teacher) // No add nor delete but can modify
teacher.institute = "ideal"
teacher.shift = "8-5"
console.log(teacher)
Object.freeze(teacher) // Neither add/delete nor modify
teacher.shift = "10-3"
console.log(teacher)
const salary = teacher["salary"] // bracket notation
console.log(teacher["salary"] + " or " + salary) // can be accessed throw both of ways

const dog = {
    age: 15,
    type: "black",
    // vaccine: {
    //     cold: true,
    //     hiv: false,
    //     // injury: false
    // }
}
// console.log(dog.vaccine.injury) // error if vaccine is not available
console.log(dog?.vaccine?.injury) // Optional Chaining

const arr = [1,2,3,5,6,7,8,9]
// for...in (index of array)
for(let indexOfArr in arr){
    console.log(`Index: ${indexOfArr}`)
}
console.log("\n")
// for...of (value of array)
for(let valueOfArr of arr){
    console.log(`Value: ${valueOfArr}`)
}
const laptop = {
    brand: "lenovo",
    model: 2023,
    processor: "amd",
    AI: false
}
console.log("\n")
// for...in (keys of obj)
for(let keys in laptop){
    console.log(`Keys : ${keys} , Value: ${laptop[keys]}`)
}