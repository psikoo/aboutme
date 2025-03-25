import { get } from "./http.js";
import { formatUrls } from "./format.js";

console.log(await get());
formatUrls();

var refreshUI = window.setInterval(function(){
  formatUrls();
}, 500);