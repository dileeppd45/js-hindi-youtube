function sayMyName(){
    console.log("d")
    console.log("i")
    console.log("l")
    console.log("e")
    console.log("e")
    console.log("p")
}
// sayMyName()
function addTwoNumbers(number1, number2){
    //  let result = number1 + number2
    //  return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)

console.log("results: ",result)

function loginUserMessage(username = "san"){
    if(!username){
        console.log("please enter a username")
        return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 300, 455, 533))

const user = {
    username: "hitesh",
    prices: 190
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
// handleObject({username:"sam", price:244})

const myNewArray = [200, 300, 400, 100,]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([3443, 3434, 43131, 323]))