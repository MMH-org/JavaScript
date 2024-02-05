const nameh =document.getElementById('has');

setInterval(function(){
    nameh.innerHTML=`<h3>Ha ji kaise hai app </h3>`
},3000)


// document.getElementById('owl').onclick = function(){alert("hey owl")}

// document.getElementById('owl').addEventListener('click',function(){
//     alert('owl clicked again');
//     console.log("owl click");
// },false)



// attachEvent();
// jQuery - 'on' evelnts  and react jsx
// target, toElement , srcElement , currentTarget






// document.getElementById('images').addEventListener('click',function(){
//     console.log("inner html images");
// },false) // false means bubbling and true means captureing

// document.getElementById('owl').addEventListener('click',function(e){
//     console.log("owl cliked");
//     e.stopPropagation();
// },false) // false means bubbling and true means captureing

// document.getElementById('google').addEventListener('click',function(e){
//     console.log("google clicked");
//     e.preventDefault();

// },false)




document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.parentNode)
},false)