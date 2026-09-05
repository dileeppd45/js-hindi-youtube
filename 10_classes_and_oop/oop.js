const user = {
    username: "hitesh",
    loginCount: 0,
    signedIn: true,
    getUserDetails: function(){
        // console.log('got user details from database')
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user['username'])
// console.log(user.getUserDetails())
// console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greetings = function(){
        console.log(`welcome ${this.username}`)
    }
    // return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("Chai aur coe", 11, false)
console.log(userOne.constructor)
console.log(userTwo)
console.log(userOne instanceof User)
console.log(user instanceof User)






