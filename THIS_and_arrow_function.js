const user = {
    username:"mohsin",
    price:999,

    welcomeMassage:function(){
        console.log(`${this.username} Welocome to website`); // this is current cont..
    }
}
// user.welcomeMassage // refrance
// user.welcomeMassage();

// user.username = "sam";
// user.welcomeMassage();



// console.log(this);


// function chai(){
//     let username = "mohsin";
//     console.log(this.username);
// }
// chai();




// const chai = function(){
//     let username = "mohsin";
//     console.log(this.username);
// }
// chai();


// const chai = () => {
//     let username = "mohsin";
//     console.log(this.username); // undefined
//     console.log(this); // {}
// }
// chai();


// basic arrwo functins
// () => {}


// const AddTwo = (num1,num2) => {
// return num1 + num2;
// }

// const AddTwo = (num1,num2) => num1 + num2 // implicit return

// const AddTwo = (num1,num2) => (num1 + num2) // () 
// console.log(AddTwo(3,5));

// const Object_Return = () => ({KeyName_UserName:"Value_Name mohsin"}) // ({Objects return}) 

// console.log(Object_Return());

// const myArray= [2,5,6,7,5];

// // myArray.forEach(function () {}) // 1.
// myArray.forEach(()=> {}) // 2.
