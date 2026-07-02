const name = "dileep"
const repoCount = 50

// console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`dileep-pd-com`)

// console.log(gameName[0])
// console.log(gameName.__proto__);


// console.log(gameName.length)
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("0"));

const newString = gameName.substring(-2, 4)
console.log(newString);

const anotherString = gameName.slice(-2, 13)
console.log(anotherString,"slice")

const newStringOne = "           dileep   "
console.log(newStringOne)
console.log(newStringOne.trim());
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'))
