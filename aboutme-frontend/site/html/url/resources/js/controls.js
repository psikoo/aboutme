import { post } from "./http.js";
import { processRes, formatUrls } from "./format.js";

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

let resDiv = document.getElementById("res");
let postDiv = document.getElementById("post");
postDiv.addEventListener("click", async function () {
  console.log(`> Sent POST - {oldUrl = ${document.getElementById("old").value} > ${document.getElementById("new").value}}`);
  resDiv.innerHTML = processRes(await post(), "POST");
});