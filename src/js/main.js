// for toggle
let body = document.querySelector("body");
let toggle = document.querySelector(".toggle_2");
toggle.onclick = function () {
  body.classList.toggle("light");
};

// for loading
let loader = document.querySelector(".loader");
window.addEventListener("load", function () {
  loader.className += " hidden";
});