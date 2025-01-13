<script async  setup lang="ts">
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
    <div v-if="typeof user == 'string'">Loading...</div>
    <div v-else>
      <h1 >{{ user.name }}</h1>
      <img src="../../assets/resources/img/SideImage.png" alt="Silly pic x3" class="left sideImage">
      <div class="right">
        <p><img src="../../assets/resources/img/emoji/Cake.png" alt="win10 cake emoji" class="emoji"> {{ user.birthday }} ({{ user.age }})</p>
        <p><img src="../../assets/resources/img/emoji/Trans.png" alt="win10 trans emoji" class="emoji"> {{ user.gender }}</p>
        <p><img src="../../assets/resources/img/emoji/Heart.png" alt="win10 heart emoji" class="emoji"> {{ user.pronouns }}</p>
        <p><img src="../../assets/resources/img/emoji/Rainbow.png" alt="win10 rainbow emoji" class="emoji"> Sexuality: {{ user.orientation }}</p>
        <p><img src="../../assets/resources/img/emoji/Alien.png" alt="win10 alien emoji" class="emoji"> Mood: {{ user.mood }}</p>
      </div>
      <p class="left">"{{ user.quote }}"</p>
    </div>
  </div>
</template>

<style scoped>
  .main {
    padding: 15px;
    contain: content;
    background-color: var(--bg-color);
    border: 6px double var(--border-color);
  }

  .left {
    float: left;
  }
  .right {
    padding-top: 10px;
  }

  .sideImage {
    height: 20vh;
    padding: 10px 10px 10px 0px;
  }

  .emoji {
    height: 1.3vh;
  }
</style>