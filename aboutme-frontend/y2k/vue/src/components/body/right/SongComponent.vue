<script setup lang="ts">
  import { onMounted, ref } from "vue";
  const songs: any = ref("Loading");
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
      songs.value = data;
    } catch(e) {
      console.log(e);
    }
  }
  getURL("https://cait.moe:3000/songs/");
</script>

<template>
  <div class="main">
    <div v-if="typeof songs == 'string'">Loading...</div>
    <div v-else>
      <h1 class="tittle underline">Music ^///^</h1>
      <div class="projects">
        <div v-for="(song, index) in songs" class="project">
          <h1><a :href="songs[index].url" target="_blank" class="linkUrl">{{ songs[index].name }}</a></h1>
          <p class="description">{{ songs[index].tag }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .main {
    padding: 15px;
    contain: content;
    background-color: var(--bg-color);
    border: 6px double var(--border-color);
    text-align: center;
  }

  .tittle {
    max-width: fit-content;
    margin: 0px auto;
    margin-bottom: 10px;
  }

  .projects {
    width: 560px;
    margin: auto;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: auto auto;
    align-items: start;
    contain: content;
  }

  .project  {
    border: 2px solid var(--border-color);
    width: 250px;
    height: 5.5vw;
    text-align: start;
    padding: 10px;
    margin: 0px 5px 5px 0px;
  }

  .linkUrl, .linkUrl:visited {
    text-decoration: none;
    color: var(--text-color);
    text-wrap: nowrap;
    font-size: 0.7rem;
  }
  .linkUrl:hover {
    text-decoration: underline;
    border-radius: 5px;
    font-size: 0.7rem;
  }

  .description {
    margin-top: 5px;
  }
</style>  