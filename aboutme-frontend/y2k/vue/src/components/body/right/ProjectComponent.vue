<script setup lang="ts">
  import { onMounted, ref } from "vue";
  const projects: any = ref("Loading");
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
      projects.value = data;
    } catch(e) {
      console.log(e);
    }
  }
  getURL("https://cait.moe:3000/projects/");
</script>

<template>
  <div class="main">
    <div v-if="typeof projects == 'string'">Loading...</div>
    <div v-else>
      <h1 class="tittle underline">My Projects OwO</h1>
      <div class="notPhone projects">
        <div v-for="(project, index) in projects" class="project">
          <h1><a :href="projects[index].url" target="_blank" class="linkUrl">{{ projects[index].name }}</a></h1>
          <p class="description">{{ projects[index].description }}</p>
          <p class="foot">
            <img class="filetype" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            {{ projects[index].date }}
          </p>
        </div>
        <!-- <p class="phoneOnly"><a :href="projects[0].url" target="_blank" class="linkUrl">{{ projects[0].url.slice(8) }}</a></p> -->

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

  .foot {
    margin-top: 5px;
  }

  .filetype {
    vertical-align: middle;
    height: 1.6vh;
  }

  @media only screen and (max-width: 600px) {
    .tittle {
      font-size: 0.7rem;
      margin-bottom: 5px;
    }
    .linkUrl {
      font-size: 0.7rem;
    }
  }
</style>