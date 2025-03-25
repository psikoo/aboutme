let show = document.getElementById("show");
let api = document.getElementById("api");

show.addEventListener("click", showPassword());
let passwordCounter = 0;
function showPassword() {
  if(passwordCounter%2) {
    api.type="text";
    show.innerText = "Hide";
  } else {
    api.type="password";
    show.innerText = "Show";
  }
  passwordCounter++;
}