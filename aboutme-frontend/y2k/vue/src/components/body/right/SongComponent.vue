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
      <h1 class="tittleTop underline">Music ^///^</h1>
      <div class="songs">
        <div v-for="(song, index) in songs" id="vinyl-gallery" class="song">
          <div class="vinyl">
            <!-- <a :href="songs[index].url" target="_blank"><img :src="songs[index].cover" alt="Song Cover" class="cover vinyl"></a> -->
            <img :src="songs[index].cover" alt="Song Cover" class="cover vinyl">
          </div>
          <div class="title">{{ songs[index].name }} - {{ songs[index].tag }} </div>
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

  .tittleTop {
    max-width: fit-content;
    margin: 0px auto;
    margin-bottom: 10px;
  }

  .songs {
    width: 560px;
    margin: auto;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: auto auto;
    align-items: start;
    contain: content;
  }

  .song  {
    border: 2px solid var(--border-color);
    width: 10vw;
    height: 10vw;
    text-align: start;
    padding: 10px;
    margin: 0px 5px 5px 0px;
  }

  .cover {
    height: 10vw;
  }

  /* Vinyl Showcase - www.kazimariusz.com */
  #vinyl-gallery * {
    all: unset;
  }
  
  #vinyl-gallery {
    all: initial;
    width: 100%;
    height: 230px;
    margin: 30px 0;
    display: flex;
    flex-direction: row;
    position: relative;
    margin-left: -6px;
  }
  
  #vinyl-gallery .vinyl {
    perspective: 500px !important;
    width: 18px;
    transition: width 0.5s;
  }
  
  #vinyl-gallery .vinyl:hover {
    width: 148px;
  }
  
  #vinyl-gallery img {
    transition: transform 0.5s, width 0.5s, height 0.5s, margin-top 0.5s;
    width: 180px;
    height: 180px;
    transform: rotateX(0deg) rotateY(25deg);
    transform-style: preserve-3d;
    border-radius: 4px;
    border: 2px solid rgba(0, 0, 0, 0.1);
  }
  
  #vinyl-gallery .vinyl:hover img {
    transform: rotateX(0deg) rotateY(10deg);
    width: 188px;
    height: 188px;
    margin-top: -2px;
  }
  
  #vinyl-gallery .title {
    display: block;
    visibility: hidden;
    position: absolute;
    bottom: 0px;
    text-align: center;
    width: 100%;
    padding-left: 6px;
  }
  
  #vinyl-gallery .vinyl:nth-child(n):hover + .title {
    visibility: visible;
  }
</style>  