<script setup lang="ts">
  const url = "quenecesitas.net/";
  const subdomains = ["www", "cmd"];
</script>

<template>
  <div class="main">
    <nav>
      <div class="left">
        <a :href="'https://y2k.'+url"><img src="https://avatars.githubusercontent.com/psikoo" alt="profile picture image" class="pfp"></a>
      </div>
      <div class="right">
        <div class="top">
          <h1 class="navText">Welcome to my y2k themed about me site!</h1>
        </div>
        <div class="bottom">
          <h2 class="navText">Other sites:</h2>
          <div v-for="(subdomain, index)  in subdomains">
            <a :href="'https://'+subdomain+'.'+url"><h2 class="navText">{{ subdomain }}</h2></a>
            <h2 v-if="index < subdomains.length-1" class="navText">•</h2>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
  .main {
    width: 100%;
    background-color: var(--fg-color);
  }

  nav {
    display: flex;
    overflow: hidden;
    align-items: center;
  }

  nav>div {
    float: left;
  }

  .bottom{
    display: inline-flex;
  }

  .bottom>div>a {
    text-decoration: none;
  }

  .pfp {
    padding: 0px;
    margin: 15px;
    height: 64px;
    border-radius: 50%;
    display:block;
  }

  .navText {
    padding: 5px;
    display: inline-block;
    font-size: small;
    color: var(--text-color);
    text-align: center;
  }

  a>.navText:hover {
    background-color: var(--highlight-color);
    border-radius: 15%;
    text-decoration: underline;
  }
</style>