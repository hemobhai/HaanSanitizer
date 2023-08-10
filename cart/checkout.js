var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    window.location.assign("https://www.w3schools.com")
  });
}

// function myFunction() {
//     document.getElementById("dropdown").style.backgroundColor = "lightblue";
//   }

var x=document.getElementById("dropdown");
x.addEventListener("click",function()
{
   // document.getElementById("dropdown").style.backgroundColor = "lightblue";
   window.location.assign("https://www.google.com")
});