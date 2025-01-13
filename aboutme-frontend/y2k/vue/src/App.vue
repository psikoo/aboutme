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
