import { get } from "./http.js";

let urls = document.getElementById("urls");

urls.innerHTML += `${await get()}`; console.log(await get());