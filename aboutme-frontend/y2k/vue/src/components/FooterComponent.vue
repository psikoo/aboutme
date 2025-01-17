<script setup lang="ts">
import { ref } from "vue";
  const viewW = ref(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));
  const viewH = ref(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0));
</script>

<template>
  <div class="main">
    <h1>This site is under construction x3</h1>
    <h1>vw: {{ viewW }} | vh: {{ viewH }}</h1>
  </div>
</template>

<style scoped>
  .main {
    width: 100%;
    background-color: red;
  }
</style>