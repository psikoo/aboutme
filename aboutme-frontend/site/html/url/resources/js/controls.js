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
  console.log(`> Sent ${method.value} - ${document.getElementById("api").value} { oldUrl = ${document.getElementById("old").value}, newUrl = ${document.getElementById("new").value}}`);
  if(method.value == "post") res.innerHTML = processRes(await post());
  else if(method.value == "patch") res.innerHTML = processRes(await patch());
  else if(method.value == "delete") res.innerHTML = processRes(await del());
  // Update UI
  urls.innerText = `${await get()}`;
});

function processRes(res) {
  res = JSON.parse(res);
  let string = `<div class="response `;
  if(res.Error) string += `error">Error: ${res.Error}</div>`;
  else if(res.error) string += `error">Error: ${res.message}</div>`;
  else string += `success">Created (${res.id}) - ${res.oldUrl} => ${res.newUrl}</div>`;
  return string;
}
