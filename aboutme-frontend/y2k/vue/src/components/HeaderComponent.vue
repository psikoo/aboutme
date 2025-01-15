<script setup lang="ts">
  const url = "quenecesitas.net/";
  const subdomains = ["www", "cmd"];
</script>

<template>
  <div class="main">
    <nav>
      <a :href="'https://y2k.'+url"><img src="https://avatars.githubusercontent.com/psikoo" alt="profile picture image" class="smallImage"></a>
      <div class="center">
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
      <a href="https://github.com/psikoo"><img src="/img/GithubLogo.png" alt="github" class="smallImage notPhone"></a>
    </nav>
  </div>
</template>

<style scoped>
  .main {
    width: calc(100% - 12px);
    background-color: var(--bg-color);
    border: 6px double var(--border-color);
    margin-top: 15px;
  }

  nav {
    width: 100%;
    display: flex;
  }

  .center {
    flex: auto;
    display: flex;
    flex-direction: column;
  }

  .top{
    flex: 1;
    display: flex;
    align-items: end;
  }
  .bottom{
    flex: 1;
    display: inline-flex;
    align-items: start;
  }

  .bottom>div>a {
    text-decoration: none;
    text-decoration-color: rgb(255, 255, 255);
  }

  .smallImage {
    padding: 0px;
    margin: 15px;
    height: 5vh;
    border-radius: 50%;
    display:block;
  }

  .navText {
    padding: 2px;
    display: inline-block;
    font-size: small;
    color: var(--text-color);
    text-align: center;
  }

  a>.navText:hover {
    background-color: var(--hover-color);
    border-radius: 15%;
    text-decoration: underline;
  }

  .notPhone {
      display: block;
  }
  @media only screen and (max-width: 600px) {
    .main {
      margin-top: 2.5vw;
    }
    .top {
      margin-top: 10px;
    }
    .bottom>.navText {
      margin-left: 3px;
    }
    .navText {
      text-align: left;
    }
    .notPhone {
      display: none;
    }
  }
</style>