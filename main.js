//function forward() {

//var col=document.getElementById("breadcrumbing1");
//col.style.backgroundColor="#00454E";
//}

//function backward() {

   //var col=document.getElementById("breadcrumbing1");
   //col.style.backgroundColor="#00000000";
   //}

   var i = 0;
   var images = [];


   images[0] = 'billeder/facebook.png';
   images[1] = 'billeder/ttnl.jpg';
   images[2] = 'billeder/Twitter.png';

   function skift(){
     document.slide.src = images[i];

     if(i < images.length - 1){
       i++;
     } else {
       i = 0;
     }
   }

   window.onload = skift;

   function on() {
     document.getElementById("overlay").style.display = "block";
   }
   
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
