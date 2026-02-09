// ASSIGNMENT 2
// Problem - 1
function newPrice(currentPrice, discount) {
    // Your code here
    if(typeof currentPrice === "number" && typeof discount === "number" && discount < 100 && discount > 0)
    {
        let afterDiscount = (currentPrice*discount) / 100
        return (currentPrice - afterDiscount).toFixed(3);
    }else{
        return "Invalid";
    }
}
console.log(newPrice(2000, 17.17))
// Problem - 2
function validOtp(otp) {
    // Your code here
    if(typeof otp === "string"){
        let flag = true
        for(let word of otp){
            if(word === " "){
                flag = false
                break
            }
        }
        for(let i= 3; i<otp.length; i++){
            if(otp[i] < "0" || otp[i] > "9" ){
                flag = false
            }
        }
        if(otp.length === 8 && otp.startsWith("ph-") && flag){
            return true;
        }else{
            return false;
        }
    }else{
        return "Invalid"
    }
}
console.log(validOtp("ph-12310"))
// Problem - 3
function finalScore(omr) {
    //write your code here
    let flag = true
    if(typeof omr != "object" || Object.keys(omr).length === 0 || omr === null){
        flag = false
    }
    for(let input of Object.values(omr)){
        if(typeof input !== "number" || Number.isNaN(input) || !Number.isInteger(input) ){
            flag = false
        }
        if(input < 0 || input > 100){
            flag = false
        }
    }
    if(flag && omr.right+omr.wrong+omr.skip===100){
        return Math.round(omr.right-omr.wrong*0.5)
    }else{
        return "Invalid"
    }
}
console.log(finalScore({ right: "30", wrong: 30 }))
// Problem - 4
function gonoVote(array) {
    //write your code here
    let count = 0
    const validVote = Array.isArray(array) && array.length > 0 && array.every(item => ["ha", "na"].includes(item))
    if(validVote){
        for(let word of array){
            if(word === "ha"){
                count++
            }else if(word === "na"){
                count--;
            }
        }
        if(count > 0){
            return true
        }else if(count === 0){
            return "equal"
        }else{
            return false
        }
    }else{
        return "Invalid"
    }
}
console.log(gonoVote(["  na ", "ha", "ha", "na"]))

// Problem - 5
function  analyzeText(str) {
    // You have to write your code here
    let obj = {longwords: "", token: 0}
    let flag = true
    if(typeof str !== "string" || str.trim().length === 0){
        flag = false
    }
    if(flag){
        for(let word of str){
            if(word !== " "){
                obj.token++
            }
        }
        str = str.replace(/\s+/g, " ").trim().split(" ");
        for(let word of str){
            if(obj.longwords.length < word.length){
                obj.longwords = word
            }
        }
        return obj
    }else{
        return "Invalid"
    }
}
console.log(analyzeText("I am hadi  v     Inqilab            moncho00"));