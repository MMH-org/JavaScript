// Immediately Invoked Function Expressions IIFE


// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai();



// ()() // basic synt

(function chai() {
    console.log(`DB CONNECTED`);
})();

(()=>{
    console.log(`DB CONNECTED TWO`);
})()