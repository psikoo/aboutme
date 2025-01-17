<script setup lang="ts">
import CrtEffect from './components/CrtEffect.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import BodyComponent from './components/BodyComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import { ref, type Ref } from "vue";
  const phone: Ref<boolean> = ref(!!navigator.userAgent.match(/iPad|iPhone|iPod|BlackBerry|Android|Windows Pone|webOS|Nintendo Switch|Nintendo WiiU|Nintendo 3DS/i));
  console.log(`Phone: ${phone.value}`)
</script>

<template>
  <CrtEffect/>
  <div :class="{ app: !phone, appPhone: phone }">
    <HeaderComponent/>
    <BodyComponent/>
    <FooterComponent/>
  </div>
</template>

<style scoped>
  .app {
    width: 50vw;
    margin: 0 auto;
    contain: content;
  }
  .appPhone {
    margin-left: 15px !important;
    margin-right: 15px !important;
  }
</style>