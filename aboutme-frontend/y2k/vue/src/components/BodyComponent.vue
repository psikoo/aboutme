<script setup lang="ts">
import AboutComponent from './body/right/AboutComponent.vue';
import LinksComponent from './body/left/LinksComponent.vue';
import UrlComponent from './body/left/UrlComponent.vue';
import UserComponent from './body/left/UserComponent.vue';
import ProjectComponent from './body/right/ProjectComponent.vue';
import SongComponent from './body/right/SongComponent.vue';
import MoreComponent from './body/right/MoreComponent.vue';
</script>

<template>
  <div class="main">
    <div class="left">
      <UserComponent/>
      <UrlComponent/>
      <LinksComponent/>
    </div>
    <div class="right">
      <AboutComponent/>
      <ProjectComponent/>
      <SongComponent/>
      <MoreComponent/>
    </div>
  </div>
</template>

<style scoped>
  .main {
    max-width: 100%;
    contain: content;
  }

  .left {
    float: left;
    width: 31%;
    margin-right: 5px;
  }
  .left>* {
    margin-top: 5px;
  }
  .right {
    float: right;
    width: calc(69% - 5px);
  }
  .right>* {
    margin-top: 5px;
  }
</style>