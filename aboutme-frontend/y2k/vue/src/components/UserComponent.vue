<script setup lang="ts">
  async function getURL(url) {
    let headersList = {
        "Accept": "*/*",
    }
    let response = await fetch(url, { 
        method: "GET",
        // mode: "no-cors",
        headers: headersList 
    });

    let data = await response;
    console.log(data)
    return data;
  }
</script>

<template>
  <div class="main">
    <p>{{ getURL("https://quenecesitas.net:3000/users/1") }}</p>
  </div>
</template>

<style scoped>
  .main {
    width: 100%;
    background-color: red;
  }
</style>