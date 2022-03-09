// Guide 4
const breadcrumbs = [breadcrumbOne, breadcrumbTwo, breadcrumbThree, breadcrumbFour]

var i = 0;
const images = [
  'billeder/Find_underviser1cropped.jpg',
  'billeder/Find_underviser2cropped.jpg',
  'billeder/Find_underviser3cropped.jpg',
  'billeder/Find_underviser4cropped.jpg'
];

  function forward(){

    if(i < images.length - 1){
      i++;
    }

    document.slide.src = images[i];
    breadcrumbs[i].style.backgroundColor = "#00454E";
  }
  window.onload = forward;

  function backward(){
      i--;
    if(i < 0){
      i = 0
    }
    document.slide.src = images[i];
    breadcrumbs[i+1].style.backgroundColor = null;
  }
  window.onload = backward;

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
