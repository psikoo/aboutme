<script setup lang="ts">
import CrtEffect from './components/modifications/CrtEffect.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import BodyComponent from './components/BodyComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import { ref, type Ref } from "vue";
import DebugComponent from './components/modifications/DebugComponent.vue';
  const phone: Ref<boolean> = ref(!!navigator.userAgent.match(/iPad|iPhone|iPod|BlackBerry|Android|Windows Pone|webOS|Nintendo Switch|Nintendo WiiU|Nintendo 3DS/i));
  const isInstagram = ref(!!navigator.userAgent.match(/Instagram/i));
  const isAndroid = ref(!!navigator.userAgent.match(/Android/i));
  const isIOS = ref(!!navigator.userAgent.match(/iPad|iPhone|iPod/i));
</script>

<template>
  <CrtEffect/>
  <div v-if="isInstagram">
    <a v-if="isAndroid" href="intent://y2k.cait.moe#Intent;scheme=https;end" target="_blank" class="openIn">Open your default browser</a>
    <a v-else-if="isIOS" href="x-safari-https://y2k.cait.moe" target="_blank" class="openIn">Open in Safari</a>
    <h1 v-else>Please manually open the site in your native browser of choice :D</h1>
  </div>
  <div v-else :class="{ app: !phone, appPhone: phone }">
    <HeaderComponent/>
    <BodyComponent/>
    <FooterComponent/>
    <!-- <DebugComponent/> -->
  </div>
</template>

<style scoped>
  .app {
    width: 50vw;
    margin: 0 auto;
    contain: content;
  }
  .appPhone {
    width: 50vw;
    margin-left: 15px !important;
    margin-right: 15px !important;
    contain: content;
  }
  .openIn {
    color: var(--border-color);
    padding: 10px;
    position: fixed;
    top: 10px;
    left: 10px;
    background-color: var(--bg-color);
    border: 1px solid var(--border-color);
    border-radius: 10px;
  }
</style>