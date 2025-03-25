import { getURL } from "./get.js";

let baseURL = "https://cait.moe:3000/api/shorturl/urls";
let urls = document.getElementById("urls");

urls.innerHTML += `${await getURL(baseURL)}`;
console.log(await getURL(baseURL));

// for(let i = entryNum; i > -1; i--) {
//   urls.innerHTML += `<div id="${"entry"+i}" class="entry">${await getURL(baseURL+i+".html")}</div>`;
//   console.log(await getURL(baseURL+i+".html"));
// }