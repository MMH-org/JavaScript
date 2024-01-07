try {
    for (let index = 0; index < 10; index++) {
        const element = index;
        // console.log(element);
        if (element===5) {
            // console.log("5 number hai bhai eha pai");
        }
        
    }
    // console.log("hello  bhai eha khatam karo hogya ");
    


} catch (error) {
    console.log("catch");
} 

try {
    for (let index = 0; index <=10; index++) {
        // console.log(`Outer Loop: ${index}`);
        for (let index = 0; index <=2; index++) {
            // console.log(`inner loop value ${index}`);
            
        }
        
    }
} catch (error) {
    console.log(`hogya bhai khtam error cheek kar ${error}`);
}


// While loop/do while loop

try {
    let index=0;
    while (index <= 10) {
        console.log(`value is index ${index}`);
        inde ++;
    }
} catch (error) {
    console.log(`or bhai error kar liye fer ${error} type or error  is ${typeof(error)} and string is ${toString(error)}` );
}