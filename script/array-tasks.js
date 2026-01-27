/* Task-1 */
let fruits = ["apple", "banana", "pineapple", "jackfruit", "pomegranate"];

fruits[1] = "x"
console.log(fruits)
/* Task-2 */
let tourist_destination = ["italy", "spain", "france"]
tourist_destination.push("japan", "thailand")
console.log(tourist_destination)
tourist_destination.pop() // removes the last index of an array
console.log(tourist_destination)
/* Task-3 */
let booklist = ["blood demon", "pirate", "caribou"]
let flag = booklist.includes('javascript')
console.log("Is booklist included: ", flag)
/* Task-4 */
let array1 = [1,2,3,4,5,6,7,8,9]
let array2 = 123456789
console.log("Is", array1, "really an array? Answer:", Array.isArray(array1))
console.log("Is", array2, "really an array? Answer: ", Array.isArray(array2))
/* Task-5 */
let shallowCopy = fruits.concat(tourist_destination)
console.log(shallowCopy)