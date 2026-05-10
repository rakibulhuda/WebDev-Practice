const numbers = [1, 2, 3, 4, 5, 6];

const double = num => num * 2

const doubledNumbers = numbers.map(double)

console.log(doubledNumbers)

const student = {
    name: 'John',
    age: 5,
    subjects: {
        marks: {
            physics: 92,
            chemistry: 89,
            religion: 99.5,
            sports: 88.5,
            english: 33
        },
        status: "current",
        pass: true
    }
}
let {
    name: sName,
    age: sAge,
    subjects: {
        marks: sMarks,
        status: sStatus,
        pass: sPass
    },
} = student

let {
    physics: sPhysicsMark, chemistry: sChemistryMarks, religion: sReligionMark,
    sports: sSportMark, english: sEnglishMark
} = sMarks

for(let marks in sMarks) {
    console.log(sMarks[marks], sPhysicsMark)
}