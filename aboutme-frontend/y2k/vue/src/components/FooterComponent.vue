<script setup lang="ts">
import { ref } from "vue";
  const viewW = ref(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));
  const viewH = ref(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0));
  const isInstagram = ref(!!navigator.userAgent.match(/Instagram/i));
  const userAgent = ref(navigator.userAgent);
</script>

<template>
  <div class="main">
    <h1>This site is under construction x3</h1>
    <h1>vw: {{ viewW }}, vh: {{ viewH }} (1:{{ viewW/viewH }})</h1>
    <h1>Instagram: {{ isInstagram }}</h1>
    <h1>userAgent: {{ userAgent }}</h1>

    <a href="intent://y2k.cait.moe;scheme=https;end" target="_blank">Open Browser Android</a>
    <hr>
    <a href="x-safari-https://y2k.cait.moe" target="_blank">Open Browser iOS</a>
    <hr>
    <a 
      href='shortcuts://x-callback-url/run-shortcut?name="c427b6c7-bcf9-41cd-b8d0-b251fc837b7c"&x-error=${encodeURIComponent("https://y2k.cait.moe")}'
      target="_blank"> Open Browser iOS shortcuts fallback url
    </a>
  </div>
</template>

<style scoped>
  .main {
    width: 100%;
    background-color: red;
  }
</style>