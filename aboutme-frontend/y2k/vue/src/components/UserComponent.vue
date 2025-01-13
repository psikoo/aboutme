<script async  setup lang="ts">
  import { onMounted, ref } from "vue";
  const user = ref("Loading");
  async function getURL(url: string) {
      try {
      const headersList = {
        "Accept": "*/*",
        "Access-Control-Allow-Origin": "*"
      }
      const res = await fetch(url, { 
        method: "GET",
        headers: headersList 
      });
      const data = await res.json();
      user.value = data;
    } catch(e) {
      console.log(e);
    }
  }
  getURL("https://quenecesitas.net:3000/users/1");
</script>

<template>
  <div class="main">
    {{ user }}
  </div>
</template>

<style scoped>
  .main {
    width: 100%;
    background-color: red;
  }
</style>