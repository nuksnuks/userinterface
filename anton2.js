const breadcrumbs = [breadcrumbOne, breadcrumbTwo, breadcrumbThree, breadcrumbFour];

var i = 0;
const images = [
  'billeder/guide2/Find_underviser1cropped.jpg',
  'billeder/guide2/Find_underviser2cropped.jpg',
  'billeder/guide2/Find_underviser3cropped.jpg',
  'billeder/guide2/Find_underviser4cropped.jpg'
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
  }
  else if(i == 1) {
    document.getElementById("textOne").style.display = "none";
    document.getElementById("textTwo").style.display = "block";
    document.getElementById("textThree").style.display = "none";
    document.getElementById("textFour").style.display = "none";
  }
  else if(i == 2) {
    document.getElementById("textOne").style.display = "none";
    document.getElementById("textTwo").style.display = "none";
    document.getElementById("textThree").style.display = "block";
    document.getElementById("textFour").style.display = "none";
  }
  else if(i == 3) {
    document.getElementById("textOne").style.display = "none";
    document.getElementById("textTwo").style.display = "none";
    document.getElementById("textThree").style.display = "none";
    document.getElementById("textFour").style.display = "block";
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

function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
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
