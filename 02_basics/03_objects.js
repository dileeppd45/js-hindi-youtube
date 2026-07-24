//singleton ...........using constructors
// Object.create

//object literals

const  mySym = Symbol("key1")

const jsUser = {
    name: "Hitesh",
    "full name":"Hitesh chaudary",
    [mySym]: "myKey1",
    age:18,
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["full name"])
// console.log(jsUser["email"])
// console.log(jsUser[mySym])
jsUser.email = "hitesh@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "ddfd"
console.log(jsUser.email)
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS user")
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user,  ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())



