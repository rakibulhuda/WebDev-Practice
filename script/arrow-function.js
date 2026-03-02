const pi = 3.1416
const getPiValue = () => pi
console.log(getPiValue())

// assigning default value
function getMultipleValues (a,b,c,d,e = 0){ return a+b+c+d+e }
console.log(getMultipleValues(1,2,3,4,5))
// assigning default value in arrow function
const getMultipleValue2 = (a=0,b=0,c=0,d=0,e=0) => a+b+c+d+e
console.log(getMultipleValue2(1,2,3))

const listOfArray = [35, 6, 7, 2427, 93, 78, 25 ]
console.log(...listOfArray)
const maxValue = Math.max(...listOfArray)
console.log(maxValue)
const param = [22, 45, 78]
function paramTest(a,b,c){
    return a+b+c
}
const result =  paramTest(...param)
console.log(`result: ${result}`)