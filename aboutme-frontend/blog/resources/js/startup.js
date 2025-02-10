import { getURL } from "./get.js";

let entryNum = 1;
let baseURL = "https://blog.cait.moe/entries/";
let entries = document.getElementById("entries");

for(let i = 0; i < entryNum; i++) {
  entries.innerHTML += `<div id="${"entry"+i}" class="entry">${await getURL(baseURL+i+".html")}</div>`;
  console.log(await getURL(baseURL+i+".html"));
}