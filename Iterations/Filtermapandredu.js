const coding = ["js","ruby","java","pythone","cpp"];

// const values = coding.forEach( (item) => {
//     console.log(item);
// } );

// console.log(values); 
// js
// ruby
// java
// pythone
// cpp
// undefined




const values = coding.forEach( (item) => {
    console.log(item);
    return item;
} );

console.log(values);


