// Immediately invoked function expressions (IIFE)

(function chai(){
    console.log('db connected')
})();

((name)=> {
    console.log(`db connected two ${name}`)
})("dileep");



// javascript execution context

// global e c
         // this depends on browser and node have different context
// function e c

// eval e c .... no need to look


