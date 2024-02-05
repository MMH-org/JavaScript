const nameh =document.getElementById('has');

setInterval(function(){
    nameh.innerHTML=`<h3>Ha ji kaise hai app </h3>`
},3000)


// document.getElementById('owl').onclick = function(){alert("hey owl")}

document.getElementById('owl').addEventListener('click',function(){
    alert('owl clicked again');
    console.log("owl click");
},false)

// attachEvent();
// jQuery - 'on' evelnts  and react jsx
// target, toElement , srcElement , currentTarget