let button = document.querySelector(".circle");
let audio = document.querySelector(".meow");
let button2 = document.querySelector(".whobtn");
let audio2 = document.querySelector(".who");
let button3 = document.querySelector(".mebtn");
let audio3 = document.querySelector(".me");
let button4 = document.querySelector(".beyoncebtn");
let audio4 = document.querySelector(".beyonce");

button.addEventListener("click", function(){
    audio.play();
});

button2.addEventListener("click", function(){
    audio2.play();
});

button3.addEventListener("click", function(){
    audio3.play();
});

button4.addEventListener("click", function(){
    audio4.play();
});