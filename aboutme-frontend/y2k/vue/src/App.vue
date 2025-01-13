<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import UserComponent from './components/UserComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import CrtEffect from './components/CrtEffect.vue';

</script>

<template>
  <CrtEffect/>
  <div class="app">
    <HeaderComponent/>
    <h1>- ⚠ Site under construction -</h1>
    <h3>Learning how to use vue 😭</h3>
    <UserComponent/>
    <FooterComponent/>
  </div>
</template>

<style scoped>
  .app {
    width: 50vw;
    margin: 2vh auto;
  }
</style>
