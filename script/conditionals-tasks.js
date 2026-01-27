/*
    Task - 1
*/
// let burger = prompt('Enter the tk of drinks: ')
// let drinks = 0
// if (burger > 500){
//     console.log('free coke!')
//     console.log("Burger: ", burger, "Drinks: ", drinks)
// }else{
//     drinks = 30
//     console.log("Burger: ", burger, "Drinks: ", drinks)
// }
/*
    Task - 2
*/
// let weight = prompt("Enter your weight: ")
// let height = prompt("Enter your height: ")
// let bmi = (weight / (height*height)).toFixed(2)
// if (bmi < 18.5){
//     console.log(bmi, "you are underweight")
// }else if(bmi >= 18.5 && bmi <=24.9){
//    console.log(bmi, "you are normal")
// }else if(bmi >= 25 && bmi <=29.9){
//     console.log(bmi, "you are overweight")
// }
// else{
//     console.log(bmi, "you are obese")
// }
/*
    Task - 3
*/
// let score = parseFloat(prompt('What is your score? : '))
// if(score >= 90 && score <= 100){
//     console.log("Grade: A")
// }else if(score >= 80 && score <= 89){
//     console.log("Grade: B")
// }else if(score >= 70 && score <= 79){
//     console.log("Grade: C")
// }else if(score >= 60 && score <= 69){
//     console.log("Grade: D")
// }else if(score >= 0 && score <= 59){
//     console.log("Grade: F")
// }
// else{
//     console.log("Enter valid score!")
// }

/*
    Task - 4
*/
// let yourScore = prompt('What is your score? :')
// let friendScore = prompt("Enter your friend's score")
// if (yourScore > 80){
//     if (friendScore > 80){
//         console.log("Go for lunch")
//     }else if(friendScore < 80 && friendScore >= 60){
//         console.log("good luck next time")
//     }else if(friendScore < 60 && friendScore >= 40){
//         console.log("keep message unseen")
//     }else if(friendScore < 40){
//         console.log("blocked!")
//     }
// }
// else{
//     console.log("go home and sleep and act sad")
// }

/*
    Task - 5
*/
// let num1 = 33, num2 = 4
// var result = 0
// result = num1 > num2 ? 2 * num1 : num1 + num2
// console.log(result)

/*
    task - 6
*/

// let age, ticket, status
// ticket = 800
// status = prompt("Are you student (y/n): ")
// age = parseInt(prompt("What is your age?"))
// if (age < 10){
//     ticket = 0
//     console.log("Your ticket price is: $"+ ticket + " \nwhich means free")
// }else if(status === 'y' && age > 10 && age < 60){
//     ticket = ticket * (50/100)
//     console.log("Since you are a student your ticket price is: $"+ ticket, age)
// }else if(status === 'n' && age >= 60){
//     ticket = ticket - ticket * (15/100)
//     console.log("Senior citizen's ticket price is: $"+ ticket , age)
// }else{
//     console.log("No discount sorry and ticket price is: ", ticket)
// }