$(document).ready(function() {
  $("#icon").click(function() {
    $("ul").toggleClass("show");
  });
});

const home = document.createElement("button");

home.addEventListener(
  "click",
  function onclick(e) {
    console.log("Welcome to home Page");
  },
  false
);
