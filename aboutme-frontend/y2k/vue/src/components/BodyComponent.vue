<script setup lang="ts">
import AboutComponent from './body/AboutComponent.vue';
import LinksComponent from './body/LinksComponent.vue';
import UrlComponent from './body/UrlComponent.vue';
import UserComponent from './body/UserComponent.vue';
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

  @media only screen and (max-width: 600px) {
    .left {
      width: 45%;
    }
    .right {
      width: calc(55% - 5px);
    }
  }
</style>