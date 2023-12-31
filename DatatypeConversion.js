// let score =33;

// // const {score} =  req.body
// console.log(typeof score); // number
// console.log(typeof(score));  // number


let score ="Devil"// null , "1334asd" , true/false, undefine

// const {score} =  req.body // raw formet 
// console.log(typeof score); // string
// console.log(typeof(score));// string

let valueInNumber= Number(score);
console.log(typeof(valueInNumber));// string
console.log(valueInNumber); // NaN

// "33" => 33
// "33abc" => NaN
// true => 1 
// false => 0
// null => 0
// undefine => NAN
