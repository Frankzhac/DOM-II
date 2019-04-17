// Your code goes here
const homeBod = document.querySelector(".main-navigation");
homeBod.addEventListener("keyup", event => {
  // console.log("Adventure Time!");
});

//dblclick

const inTro = document.querySelector(".intro");
inTro.addEventListener("dblclick", (event) => {
  event.target.style.color = "red";
  event.stopPropagation();
});

// const introImg = document.getElementById("middle-img");
//   middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
const letsGoImg = document.getElementById('.img-content');
letsGoImg.addEventListener("focusin", (evt) => {
  evt.target.style.background = '#eaf5ff';
  console.log("Blue Bussss!");
});

letsGoImg.addEventListener("blur", (event) => {
  event.target.style.background = '';
  console.log("I can't see!");
});

//load

const signUpBtn = document.querySelector(".btn");
signUpBtn.addEventListener("load", (evt) => {
  console.log("Sign up loading!");
  event.preventDefault();
});
