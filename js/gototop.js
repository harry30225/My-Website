
back2top = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
      back2top.style.display = "block";
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

