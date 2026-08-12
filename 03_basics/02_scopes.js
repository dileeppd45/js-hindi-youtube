// var c = 300
let a = 200
{
    if(true){
        let a = 10
        const b = 20 
        // console.log("inner:", a)
    }
}
array = [1, 2, 3, 4]
for (let i = 0; i< array.length; i++){
    const element = array[i];
    // console.log(element)
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "hitesh"
    function twwo(){
        const username = "youtube"
        console.log(username);
    }
    // console.log(website);
    twwo()
}
// one()
if(true){
    const username = "hitesh"
    if (username ==="hitesh"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
//  console.log(username)

// ++++++++++++++++++ intersecting ++++++++++++++++++++++
addOne(5)
function addOne(num){
    return num + 1;
}
addOne(5)
// addTwo(5);
const addTwo = function(num){
    return num + 2;
}
addTwo(5);