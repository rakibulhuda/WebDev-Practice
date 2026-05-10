let varGlobal = "global variable"
function globalFunction() {
    console.log("global function")
    function innerFunction() {
        console.log("inner function")
        let varInner = "inner variable"
        function innerInnerFunction() {
            console.log("inner inner function")
            let varInner = "inner inner variable"
            console.log(varInner, varGlobal)
        }
        innerInnerFunction()
    }
    innerFunction()
}
globalFunction()

function squareIt(){
    let num = 0
    function square(){
        num++
        console.log(`Square: ${num*num}`)
    }
    return square
}
let sq = squareIt()
sq()
// sq = null
// sq = squareIt()
sq()
sq()
sq()
