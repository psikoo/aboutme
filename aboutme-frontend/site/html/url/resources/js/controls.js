import { get, post, patch, del } from "./http.js";

let show = document.getElementById("show");
let api = document.getElementById("api");
let passwordCounter = 0;
show.addEventListener("click", function () {
  if(passwordCounter%2 == 0) {
    api.type="text";
    show.innerText = "Hide";
  } else {
    api.type="password";
    show.innerText = "Show";
  }
  passwordCounter++;
});

let send = document.getElementById("send");
let method = document.getElementById("method");
let res = document.getElementById("res");
send.addEventListener("click", async function () {
  console.log(method.value);
  if(method.value == "post") res.innerHTML += `${await post()}`;
  else if(method.value == "patch") res.innerHTML += `${await patch()}`;
  else if(method.value == "delete") res.innerHTML += `${await del()}`;
  // Update UI
  urls.innerText = `${await get()}`;
});
