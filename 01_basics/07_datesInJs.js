let myDate = new Date()
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate)

// let myCreatedDate = new Date(2026, 0, 1);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate = new Date(2023, 0, 23, 51, 3)
// let myCreatedDate = new Date("1000-01-04")
let myCreatedDate = new Date("01-04-1000")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getDate());
// console.log(`${ newDate. getDay()} and the time`)

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "America/New_York"

}))