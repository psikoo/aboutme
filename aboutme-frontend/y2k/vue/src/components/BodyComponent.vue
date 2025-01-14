<script setup lang="ts">
import AboutComponent from './body/AboutComponent.vue';
import UserComponent from './body/UserComponent.vue';
</script>

<template>
  <div class="main">
    <UserComponent class="user left"/>
    <AboutComponent class="about"/>
  </div>
</template>

<style scoped>
  .main {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .main>* {
    margin-bottom: 5px;
  }
  .main:nth-child(2n) {
    flex-basis: 49%; /* Magic number but it works, flex is sometimes a mystery to me */
  }
  
  .user {
    max-width: fit-content;
  }
  .about {
    flex-grow: 1;
  }

  .left {
    margin-right: 5px;
  }

  .other {
    width: 300px;
  }
</style>