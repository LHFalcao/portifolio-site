document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      if (nav.className.indexOf("show") === -1) {
        nav.className = "nav show";
      } else {
        nav.className = "nav";
      }
    });
  }
});
