// // Your code goes here
const homeNav = document.querySelector(".main-navigation");
homeNav.addEventListener("mouseover", event => {
  // console.log("Adventure Time!");
});

//resize window

// window.addEventListener("resize", myIntro);
// let x = 0;
// function myIntro() {
//   let txt = x += 1;
//   document.getElementById("test").innerHTML = txt;
// }
const ctn = document.querySelector(".container home");
ctn.addEventListener("resize", event => {
  console.log("Window resized!");
});

//dblclick

const inTro = document.querySelector(".intro");
inTro.addEventListener("dblclick", (event) => {
  event.target.style.color = "red";
  event.stopPropagation();
});


//error

const introImgError = document.querySelector(".intro");
imgError.addEventListener('click', () => {
    badImg.setAttribute('src', 'i-dont-exist');
});

//focusin and focusout/blur

const letsGoImg = document.querySelector('.img-content');
letsGoImg.addEventListener("focusin", (event) => {
  event.target.style.background = '#eaf5ff';
  console.log("Blue Bussss!");
});

letsGoImg.addEventListener("blur", event => {
  event.target.style.background = '';
  console.log("I can't see!");
});

//load

const signUpBtn = document.querySelector(".btn");
signUpBtn.addEventListener("load", event => {
  console.log("Sign up loading!");
  event.preventDefault();
});

//scroll

const nav = document.querySelectorAll(".nav");
nav.addEventListener("scroll", event => {
  console.log("you scrolled in nav!");
});

//mouse down

const bye = document.querySelector(".text-content");
bye.addEventListener("mousedown", (event) => {
  event.target.style.display = "none";
  event.stopPropagation();
});

// unload

const selection = document.querySelector(".footer");
selection.addEventListener("select", event => {
  console.log("You selected");
});

/* I would like you to over my code and check
if it's correct. My compiler stopped tracking
my changes last night and I only realized it
this morning. */
