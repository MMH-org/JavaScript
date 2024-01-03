const marvel_heros = ["thor","Iroman","spiderman"];
const dc_heros = ["superman","flash","batman"];


// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_Heros = [...marvel_heros,...dc_heros];
// console.log(all_new_Heros);


// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);
// console.log(typeof(real_another_array));


console.log(Array.isArray("mohsin")); // false
console.log(Array.from("mohsin")); // [ 'm', 'o', 'h', 's', 'i', 'n' ] 




