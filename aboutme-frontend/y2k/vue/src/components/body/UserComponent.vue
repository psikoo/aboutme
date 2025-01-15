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
  getURL("https://cait.moe:3000/users/1");
</script>

<template>
  <div class="main">
    <div v-if="typeof user == 'string'">Loading...</div>
    <div v-else class="vertical">
      <h1 class="underline">{{ user.name }}</h1>
      <img src="/img/SideImage.png" alt="Silly pic x3" class="sideImage">
      <div class="info">
        <p><img src="/img/emoji/Cake.png" alt="win10 cake emoji" class="emoji"> {{ user.birthday }} ({{ user.age }})</p>
        <p><img src="/img/emoji/Trans.png" alt="win10 trans emoji" class="emoji"> {{ user.gender }}</p>
        <p><img src="/img/emoji/Heart.png" alt="win10 heart emoji" class="emoji"> {{ user.pronouns }}</p>
        <p><img src="/img/emoji/Rainbow.png" alt="win10 rainbow emoji" class="emoji"> {{ user.orientation }}</p>
        <p><img src="/img/emoji/Alien.png" alt="win10 alien emoji" class="emoji"> Mood: {{ user.mood }}</p>
      </div>
      <h1 class="quote">"{{ user.quote }}"</h1>
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

  .vertical {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .vertical>h1{
    text-align: center;
  }

  .sideImage {
    height: 30vh;
    margin: 10px auto;
    margin-top: 15px;
    border: 2px solid var(--border-color);
  }

  .emoji {
    height: 1.3vh;
  }

  .quote {
    margin-top: 10px;
    font-size: 0.70em;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    .vertical>h1{
      font-size: 0.55em;
    }
    .sideImage {
      height: 25vh;
      margin: 10px auto;
    }
    .emoji {
      display: none;
    }
    .info {
      font-size: 0.70em;
    }
  }
</style>