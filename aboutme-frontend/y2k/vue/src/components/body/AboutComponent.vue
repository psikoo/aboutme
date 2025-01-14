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
  const base: string = "/img/stamps/"; // Compiler fucks the relative rout
  const stamps: any = ['CatFeet.gif','Cats.gif','ComputerLove.jpg','Discord.gif','EyesLove.png','FrogLove.gif',
                            'Gender.png','IsopodLove.png','KuromiLove.png','LuckyStar.png','Miku.gif','MikuDance.gif','MonsterLove.jpg',
                            'NightcoreLove.png','NyanCat.gif','OldWeb.png','OwO.gif','Pantone.gif','ParkingLot.png','Pompompurin.gif',
                            'ShinyStuff.png','SleepPlushies.gif','Support.gif','UndertaleDog.gif','XD.png'];
  function shuffle(array: any) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  }
  shuffle(stamps);
</script>
<!-- need to add v-if to wait for api to load -->
<template>
  <div class="main">
    <div v-if="typeof user == 'string'">Loading...</div>
    <div v-else>
      <h1 class="intro">About Me!</h1> 
      <h1 class="introText">{{ user.intro }}</h1> 
      <img v-for="(stamp, index)  in stamps" :src="base+stamp" class="stamp"/>
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
    margin-bottom: 5px;
    font-size: smaller;
    text-align: center;
  }

  .introText {
    margin-bottom: 15px;
    font-size: smaller;
    text-align: center;
  }

  .stamp {
    height: 55px;
    width: 100px;
  }
</style>