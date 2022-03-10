  function on() {
    document.getElementById("overlay").style.display = "block";
    //alert("dette er en alert, er du glad Thomas?")
  }

  function off() {
    document.getElementById("overlay").style.display = "none";
  }

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

// const backward = document.getElementById("left");
// const forward = document.getElementById("right");
// const breadcrumbOne = document.getElementsByClassName("breadcrumbing1");
// const breadcrumbTwo = document.getElementById("breadcrumbTwo");
// const breadcrumbThree = document.getElementById("breadcrumbThree");
