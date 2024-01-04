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
const obj4 = {5:"a", 6:"b"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({},obj1,obj2,obj4);

const obj3={...obj1,...obj2,...obj4};

// console.log(obj3);


// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(" "); // space 
// console.log(Object.values(tinderUser));

// console.log(" "); // space 
// console.log(Object.entries(tinderUser));

// console.log(" "); // space 
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename:"js in hindi",
    price:"990",
    courseInstructor:"mohsin"
}

// course.courseInstructor


// object destructuring in javascript
// const {courseInstructor:instructor} =coursez
// console.log(courseInstructor);
// console.log(instructor);




