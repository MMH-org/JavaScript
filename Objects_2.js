// const tinderUser = new Object(); // singleton
const tinderUser={}; // non singleton

tinderUser.id = "123abc"
tinderUser.name="Devil"
tinderUser.isLoggedIn = false;


// console.log(tinderUser);

const regularUser = {
    emain: "some@gmail.com",
    fullname:{
        userFullName:{
            firstname:"mohsin",
            lastName:"Haider"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstname);


const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};

// const obj3 = {obj1, obj2};
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);




