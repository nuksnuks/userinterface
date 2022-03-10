// Guide 4
const breadcrumbs = [breadcrumbOne, breadcrumbTwo, breadcrumbThree, breadcrumbFour, breadcrumbFive]

var i = 0;
const images = [
  'billeder/guide1/guide1_step2.png',
  'billeder/guide1/guide1_step1.png',
  'billeder/guide1/guide1_step3.png',
  'billeder/guide1/guide1_step4.png',
  'billeder/guide1/guide1_step5.png'
];

guideText()
function forward(){

  if(i < images.length - 1){
    i++;
  }

  document.slide.src = images[i];
  breadcrumbs[i].style.backgroundColor = "#00454E";
  guideText()
}
window.onload = forward;

function backward(){
    i--;
  if(i < 0){
    i = 0
  }
  document.slide.src = images[i];
  breadcrumbs[i+1].style.backgroundColor = null;
  guideText()
}
window.onload = backward;

function guideText(){

  if(i == 0) {
    document.getElementById("textOne").style.display = "block";
    document.getElementById("textTwo").style.display = "none";
    document.getElementById("textThree").style.display = "none";
    document.getElementById("textFour").style.display = "none";
    document.getElementById("textFive").style.display = "none";
  }
  else if(i == 1) {
    document.getElementById("textOne").style.display = "none";
    document.getElementById("textTwo").style.display = "block";
    document.getElementById("textThree").style.display = "none";
    document.getElementById("textFour").style.display = "none";
    document.getElementById("textFive").style.display = "none";
  }
  else if(i == 2) {
    document.getElementById("textOne").style.display = "none";
    document.getElementById("textTwo").style.display = "none";
    document.getElementById("textThree").style.display = "block";
    document.getElementById("textFour").style.display = "none";
    document.getElementById("textFive").style.display = "none";
  }
  else if(i == 3) {
    document.getElementById("textOne").style.display = "none";
    document.getElementById("textTwo").style.display = "none";
    document.getElementById("textThree").style.display = "none";
    document.getElementById("textFour").style.display = "block";
    document.getElementById("textFive").style.display = "none";
  }
  else if(i == 4) {
    document.getElementById("textOne").style.display = "none";
    document.getElementById("textTwo").style.display = "none";
    document.getElementById("textThree").style.display = "none";
    document.getElementById("textFour").style.display = "none";
    document.getElementById("textFive").style.display = "block";
  }
}

function on() {
  document.getElementById("overlay").style.display = "block";
  //alert("dette er en alert, er du glad Thomas?")
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

breadcrumbOne.style.backgroundColor = "#00454E";

// const backward = document.getElementById("left");
// const forward = document.getElementById("right");
// const breadcrumbOne = document.getElementsByClassName("breadcrumbing1");
// const breadcrumbTwo = document.getElementById("breadcrumbTwo");
// const breadcrumbThree = document.getElementById("breadcrumbThree");
