// let a = 10;
// const b = 20;
// var c = 30;


// var c = 300;
let c = 300; // global Scope;

if (true) {
    let a = 10;
    const b = 20;
    // inner scope
    // var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "Mohsin";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    // two();
}

// one();




if (true) {
    const username = 'mohsin';
    if (username==='mohsin') {
        const website = 'youtube'
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



// ➡️©️✍🏻🏳️🟥

try {
    console.log(addone(5)); // can acsees
    function addone(num){
        return num+1;
    }
    addone(5);
    
    // addtwo(5); // get error
    const addtwo = function(num){
        return num +2;
    }
    addtwo(5);
} catch (error) {
    console.log("plese hello");
}


