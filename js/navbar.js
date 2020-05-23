window.onscroll = function()
{stickit()};
  var navbar = document.getElementById("nav");
  var sticky = navbar.offsetTop;
  function stickit()
  {
      if(window.pageYOffset >= sticky)
      {
             navbar.classList.add("stickyyy");
      }
      else
      {
             navbar.classList.remove("stickyyy");
      }
  }