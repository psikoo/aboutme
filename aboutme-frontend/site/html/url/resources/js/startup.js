import { get, getAll } from "./http.js";
import { formatUrls } from "./format.js";

let params = new URLSearchParams(document.location.search);

let redirectById = params.get("i");
if(redirectById != null) {
  let url = JSON.parse(await get(redirectById)).oldUrl;
  console.log(`Redirect by id - (${redirectById}) to ${url}`);
  window.location.href = url;
} 

let redirectByName = params.get("u");
if(redirectByName != null) {
  let urls = JSON.parse(await getAll());
  for(let i = 0; i < urls.length; i++) {
    if(urls[i].newUrl == "https://url.cait.moe/?u="+redirectByName) {
      window.location.href = urls[i].oldUrl;
    }
  }
}

console.log(await getAll());
formatUrls();

var refreshUI = window.setInterval(function(){
  formatUrls();
}, 500);