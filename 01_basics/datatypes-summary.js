// primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)
const bigNumber = 67777777777776666444444n
console.log(typeof bigNumber)
// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "krish"]
let myObj ={
    name: "dileep",
    age : 27,
}
const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof heros)
console.log(typeof anotherId)
