<script setup lang="ts">
  import { onMounted, ref } from "vue";
  const user: any = ref("Loading");
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
    <h1 class="intro">{{ user.intro }}</h1>
  </div>
</template>

<style scoped>
  .main {
    padding: 15px;
    contain: content;
    background-color: var(--bg-color);
    border: 6px double var(--border-color);
  }

  .intro {
    font-size: smaller;
    text-align: center;
  }
</style>