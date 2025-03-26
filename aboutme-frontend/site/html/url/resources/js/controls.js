import { post } from "./http.js";
import { formatUrls } from "./format.js";

let show = document.getElementById("show");
let api = document.getElementById("api");
let passwordCounter = 0;
show.addEventListener("click", function () {
  if(passwordCounter%2 == 0) {
    api.type="text";
    show.innerHTML = "<img src='./resources/svg/hide.svg' alt='hide'>";
  } else {
    api.type="password";
    show.innerHTML = "<img src='./resources/svg/show.svg' alt='show'>";
  }
  passwordCounter++;
});

let send = document.getElementById("post");
send.addEventListener("click", async function () {
  console.log(`> Sent POST - ${document.getElementById("api").value} { oldUrl = ${document.getElementById("old").value}, newUrl = ${document.getElementById("new").value}}`);
  processRes(post());
  formatUrls(); // Update UI
});

