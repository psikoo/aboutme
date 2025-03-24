<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import BodyComponent from './components/BodyComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import { ref, type Ref } from "vue";
  const isInstagram = ref(!!navigator.userAgent.match(/Instagram/i));
  const isAndroid = ref(!!navigator.userAgent.match(/Android/i));
  const isIOS = ref(!!navigator.userAgent.match(/iPad|iPhone|iPod/i));
</script>

<template>
  <div v-if="isInstagram">
    <a v-if="isAndroid" href="intent://cv.cait.moe#Intent;scheme=https;end" target="_blank" class="openIn">Open your default browser</a>
    <a v-else-if="isIOS" href="x-safari-https://cv.cait.moe" target="_blank" class="openIn">Open in Safari</a>
    <h1 v-else>Please manually open the site in your native browser of choice :D</h1>
  </div>
  <div v-else>
    <div class="app">
      <HeaderComponent/>
      <BodyComponent/>
      <FooterComponent/>
    </div>
  </div>
</template>

<style scoped>
  .app {
    width: 60vw;
    margin: 30px auto;
    background-color: var(--bg-color);
    contain: content;
    box-shadow: 5px 5px 0px 0px var(--shadow-color);
  }
  @media print {
    .app {
      width: 100vw;
      margin: 0px;
      box-shadow: 0px 0px 0px 0px var(--shadow-color);
    }
  }

  .openIn {
    color: var(--border-color);
    padding: 10px;
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: var(--bg-color);
    border: 1px solid var(--border-color);
    border-radius: 10px;
  }
</style>