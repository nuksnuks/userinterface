// Guide 4
const breadcrumbs = [breadcrumbOne, breadcrumbTwo, breadcrumbThree]

var i = 0;
const images = [
  'billeder/placeholders/placeholder1.png',
  'billeder/placeholders/placeholder2.png',
  'billeder/placeholders/placeholder3.png',
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

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// const backward = document.getElementById("left");
// const forward = document.getElementById("right");
// const breadcrumbOne = document.getElementsByClassName("breadcrumbing1");
// const breadcrumbTwo = document.getElementById("breadcrumbTwo");
// const breadcrumbThree = document.getElementById("breadcrumbThree");
