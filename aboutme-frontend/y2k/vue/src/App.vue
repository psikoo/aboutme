<script setup lang="ts">
import CrtEffect from './components/CrtEffect.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import BodyComponent from './components/BodyComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <CrtEffect/>
  <div class="app">
    <HeaderComponent/>
    <BodyComponent/>
    <FooterComponent/>
  </div>
</template>

<style scoped>
  .app {
    width: 50vw;
    margin: 2vh auto;
  }
  .app>div {
    margin-top: 5px;
  }
</style>
