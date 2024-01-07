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
        console.log(`Outer Loop: ${index}`);
        for (let index = 0; index <=index; index++) {
            console.log(`inner loop value ${index}`);
            
        }
        
    }
} catch (error) {
    console.log(`hogya bhai khtam error cheek kar ${error}`);
}