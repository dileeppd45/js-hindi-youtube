// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname:{
            firstname: "hitesh",
            lastname:"choudhary",
        }}

}
// console.log(regularUser.fullName.userfullname.firstname)
const obj1 ={ 1:"a", 2: "b"}
const obj2 = {3: "c", 4:"d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3)
console.log(obj1)

const users = [
        {
            id:1,
            email:"dileep@gmail.com"
        },
        {
            id:1,
            email:"dileep@gmail.com"
        },
        {
            id:1,
            email:"dileep@gmail.com"
        },
        
]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'))

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructior : "hitesh",
}

// console.log(course.courseInstructior)
const {courseInstructior : instructor} = course

console.log(instructor)

// {
//     "name":"hitesh",
//     "coursename" : " js in hindi",
//     "price" : "free"
// }
// https://api.github.com/users/hiteshchoudhary  api
// https://randomuser.me/

