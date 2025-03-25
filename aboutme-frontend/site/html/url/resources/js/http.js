let baseURL = "https://cait.moe:3000/api/shorturl/urls";

export async function get() {
  let headersList = {
      "Accept": "*/*"
  }
  let response = await fetch(baseURL, { 
      method: "GET",
      headers: headersList
  });

  let data = await response.text();
  return data;
}

export async function post() {
  let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json",
      "apikey": ""+document.getElementById("api").value
  }
  let body = {
      "oldUrl": ""+document.getElementById("old").value,
      "newUrl": ""+document.getElementById("new").value
  }
  let response = await fetch(baseURL, { 
      method: "POST",
      headers: headersList,
      body: JSON.stringify(body)
  });

  let data = await response.text();
  return data;
}

export async function patch() {
  let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json",
      "apikey": ""+document.getElementById("api").value
  }
  let body = {
      "oldUrl": ""+document.getElementById("old").value,
      "newUrl": ""+document.getElementById("new").value
  }
  let response = await fetch(baseURL+"/"+document.getElementById("id").value, { 
      method: "PATCH",
      headers: headersList,
      body: JSON.stringify(body)
  });

  let data = await response.text();
  return data;
}

export async function del() {
  let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json",
      "apikey": ""+document.getElementById("api").value
  }
  let response = await fetch(baseURL+"/"+document.getElementById("id").value, { 
      method: "DELETE",
      headers: headersList,
  });

  let data = await response.text();
  return data;
}