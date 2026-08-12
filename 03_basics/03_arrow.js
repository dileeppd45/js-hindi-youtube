const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`) 
        console.log(this)
    }
    
}
// console.log(this)
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username = "hitesh"
//     console.log(this.username)
// }

// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this)
// }

const chai = () => {
    let username = "hitesh"
    console.log(this.username)
    console.log(this)
}

// chai()

// const addTwo = (num1, num2)=>{
//     return num1 + num2;
// }

// const addTwo = (num1, num2)=>  num1 + num2;
const addTwo = (num1, num2)=>  {return {username: "hitesh"}};

console.log(addTwo(3, 4))

const myArray = [ 2, 3, 5, 6, 45]
console.log(myArray.forEach((i, index)=>(index)));