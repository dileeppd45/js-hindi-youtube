// let myName = "hitesh     "
// let myChannel = "chai       "

// console.log(myName.truelength)


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log('hitesh is present in all objects');
    
}
// heroPower.hitesh()

Array.prototype.heyHitesh = function(){
    console.log('Hitesh says hello');
    
}

myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvaiable: false
}

const  TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "chaiaurcode          "

String.prototype.truelength =function(){
    console.log(`${this},dfd`);
    console.log(`true length is ${this.trim().length}`)
}

anotherUsername.truelength()