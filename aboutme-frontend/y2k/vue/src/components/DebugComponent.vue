<script setup lang="ts">
import { ref } from "vue";
  const viewW = ref(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));
  const viewH = ref(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0));
  const isPhone = ref(!!navigator.userAgent.match(/iPad|iPhone|iPod|BlackBerry|Android|Windows Pone|webOS|Nintendo Switch|Nintendo WiiU|Nintendo 3DS/i));
  const isInstagram = ref(!!navigator.userAgent.match(/Instagram/i));
  const isAndroid = ref(!!navigator.userAgent.match(/Android/i));
  const isIOS = ref(!!navigator.userAgent.match(/iPad|iPhone|iPod/i));
  const userAgent = ref(navigator.userAgent);
</script>

<template>
  <div class="main">
    <h1>This site is under construction x3</h1>
    <hr>
    <h1>vw: {{ viewW }}, vh: {{ viewH }} (1:{{ viewW/viewH }})</h1>
    <h1>phone: {{ isPhone }}</h1>
    <h1>instagram: {{ isInstagram }}</h1>
    <h1>android: {{ isAndroid }}</h1>
    <h1>iOS: {{ isIOS }}</h1>
    <h1>userAgent: {{ userAgent }}</h1>

    <!--! THIS IS THE BEST TOOL https://inappdebugger.com/ -->
    <hr>
    <a href="intent://y2k.cait.moe#Intent;scheme=https;end" target="_blank">Open Browser Android</a>
    <hr>
    <a href="x-safari-https://y2k.cait.moe" target="_blank">Open Browser iOS</a>
  </div>
</template>

<style scoped>
  .main {
    width: 100%;
    background-color: red;
  }
  a {
    color: white;
  }
  hr {
    border-color: white;
  }
</style>