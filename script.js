function myFunction() {
  var x = document.getElementById('nav__menu');
  if (x.style.right === "100%") {
    x.style.right = "0";
  } else {
    x.style.right = "100%"
  }

}

mybutton = document.getElementById("btop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}