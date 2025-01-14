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
  // stamps
  const base: string = "/src/assets/resources/img/stamps/"; // Compiler fucks the relative rout
  const stamps: string[] = ['CatFeet.gif','Cats.gif','ComputerLove.jpg','Discord.gif','EyesLove.png','FrogLove.gif',
                            'Gender.png','IsopodLove.png','KuromiLove.png','LuckyStar.png','Miku.gif','MikuDance.gif','MonsterLove.jpg',
                            'NightcoreLove.png','NyanCat.gif','OldWeb.png','OwO.gif','Pantone.gif','ParkingLot.png','Pompompurin.gif',
                            'ShinyStuff.png','SleepPlushies.gif','Support.gif','UndertaleDog.gif','XD.png'];
</script>
<!-- need to add v-if to wait for api to load -->
<template>
  <div class="main">
    <div v-if="typeof user == 'string'">Loading...</div>
    <div v-else>
      <h1 class="intro">About Me!</h1> 
      <h1 class="intro">{{ user.intro }}</h1> 
      <img v-for="(stamp, index) in stamps" :src="base+stamp" alt="stampAlt" class="stamp" />
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

  .intro {
    font-size: smaller;
    text-align: center;
  }

  .stamp {
    height: 55px;
    width: 100px;
  }
</style>