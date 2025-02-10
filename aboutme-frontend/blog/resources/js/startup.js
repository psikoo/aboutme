import { getURL } from "./get.js";

let entryNum = 1;
let baseURL = "https://blog.cait.moe/entries/";
let entries = document.getElementById("entries");

for(let i = 0; i < entryNum; i++) {
  entries.innerHTML += `<div id="${"entry"+i}" class="entry">${i}</div>`;
  console.log(getURL(baseURL+i+".html"));
}