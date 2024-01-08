// for of


// ["" , "" , ""]
// [{} , {} , {}] //  array 
[]
const arrsObj = [
    {
        color: "red",
        value: "#f00"
    },
    {
        color: "green",
        value: "#0f0"
    },
    {
        color: "blue",
        value: "#00f"
    },
    {
        color: "cyan",
        value: "#0ff"
    },
    {
        color: "magenta",
        value: "#f0f"
    },
    {
        color: "yellow",
        value: "#ff0"
    },
    {
        color: "black",
        value: "#000"
    }
]

const array = [1,2,3,4,5,6,7,8,9,0]

try {
    
    for (const iterator of array) {
        // console.log(iterator);
    }
} catch (error) {
    // console.log(`🏳️ ha Bhai hogy error ${error}`); 
}


const greatings = "Hello world!"
for (const great of greatings) {
    // console.log(`Each char is ${great}`);
}



//  🏳️ Maps

const map = new Map();
map.set('IN', "India");
map.set('IN', "India");
map.set('USA', "United State of India");
map.set('Fs',"France");

// console.log(map);

for (const [key , value] of map) {
    // console.log(key ,' :- ' ,value);
}

// const Obj = {
//     game1:'nfs',
//     game2:'spider'
// }

// for (const [key , value] of Obj) {
//     console.log(key ,' :- ' ,value);// not iteratable
// }



