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
// console.log(loginUserMessage()) // undefined just Logged In


// 🏳️

// function calculateCartPrice(...num1){ // restOprator ...num1
//     return num1
// }
// console.log(calculateCartPrice(2,6,7,800));

// 🏳️

// const user = {
//     username:"mohsin",
//     price:199
// }
// function handleObject(anyObject){
//     console.log(`UserName is ${anyObject.username} and Price is ${anyObject.price}`);
// }
// // handleObject(user);
// // handleObject({
// //     username:"devil",
// //     price:399
// // })
// handleObject(user)

const myNewArray=[20,30,40,50,60,70];

function ArrayData(getValue){
    return getValue[3];
}

console.log(ArrayData(myNewArray));


