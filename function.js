// console.log("m");
// console.log("o");
// console.log("h");
// console.log("s");
// console.log("i");
// console.log("n");



function sayMyName() {
    console.log("m");
    console.log("o");
    console.log("h");
    console.log("s");
    console.log("i");
    console.log("n");
}

sayMyName // refrance of function
// sayMyName(); // excutions

// function addTwoNumbers(number1,number2){ // number1 and number2 are para
//     console.log( number1+number2);
// }

// function addTwoNumbers(number1,number2){ // number1 and number2 are para
//     let result = number1+number2;
//     console.log(result);
//     return result;
// }

// function addTwoNumbers(number1,number2){ // number1 and number2 are para
//     return number1+number2;
// }

// addTwoNumbers(3,7);// 3 and 7 is arguments







function loginUserMessage(username){
    // if (username === undefined) {
    //     console.log("Please Enter a username");
    //     return;
    // } // other type
    
    if (!username) {
        console.log("Please Enter a username");
        return;
    }
    return `${username} just Logged In`
}
// console.log(loginUserMessage("devil")) // devil
// console.log(loginUserMessage("")) // just Logged In 
console.log(loginUserMessage()) // undefined just Logged In








