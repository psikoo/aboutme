export async function getURL(url) {
  let headersList = {
      "Accept": "*/*"
  }
  let response = await fetch(url, { 
      method: "GET",
      headers: headersList
  });

  let data = await response.text();
  return data;
}