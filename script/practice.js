function descendingOrder(n){
    //Code
    let output = n.toString()
    output = output.split("")
    let returnValue = []
    for(let i = output.length-1; i >= 0; i--){
        returnValue.push(output[i])
    }
    returnValue = returnValue.join("");
    return parseInt(returnValue)
}
console.log(descendingOrder(1201))

