<script setup lang="ts">
import type { Photo } from '@/resources/types';

import Separator from './Separator.vue';
import { useWindowSize } from '@vueuse/core';

defineProps<{
  cameraUrl: string;
  photos: Photo[];
}>()
const { width, height } = useWindowSize()
</script>

<template>
  <div :class="{historical: true, smallHistorical: (width<=1000)}">
    <img 
      @click="$emit('setImage', 0)"
      :src="cameraUrl" :alt="cameraUrl"
      draggable="false"
    />
    <Separator :class="{hidden: (width<=1000)}"/>
    <img 
      @click="$emit('setImage', index+1)"
      v-for="(photo, index) in photos" :src="photo.url" :alt="photo.url" 
      class="otherImg"
      draggable="false"
    />
  </div>
</template>

<style scoped>
.historical {
  display: flex;
  gap: 0.5rem;
  overflow-x: scroll;
  scrollbar-width: thin;
}
.historical>img {
  height: 10rem;
  border-radius: 25px;
  user-select: none;
}

.smallHistorical {
  overflow-x: hidden !important;
  flex-direction: column !important;
}
.smallHistorical>img {
  height: unset !important;
  width: 80% !important;
  margin: auto !important;
}
</style>