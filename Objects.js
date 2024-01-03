// singleton
// Object.create



// objects literals


const mySym = Symbol("key1");

const JsUser = {
    name:"mohsin",
    "full name":"Md Mohsin Haider", // other type to acces <stander>
    [mySym]:"mykey1", // symbole dec in object
    age:18,
    location:"hell",
    email:"devil@google.com",
    isLoggedIn:false,
    lastLoggedIn:["monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser.full name); // not acces
// console.log(JsUser["full name"]);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);



JsUser.email = "devil@chatgpt.com";
// Object.freeze(JsUser)// lock the value of JsUser from change 
JsUser.email = "devil@Microsoft.com";

// console.log(JsUser);

JsUser.greating= function(){
    console.log("Hello Js Users");
}

JsUser.greatingTwo= function(){
    console.log(`Hello Js Users , ${this.name}`);
}

console.log(JsUser.greating());
console.log(JsUser.greatingTwo());