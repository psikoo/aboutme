<script setup lang="ts">
import EngAboutmeComponent from './body/eng/EngAboutmeComponent.vue';
import EngEducationComponent from './body/eng/EngEducationComponent.vue';
import EngWorkComponent from './body/eng/EngWorkComponent.vue';
import EngLanguagesComponent from './body/eng/EngLanguagesComponent.vue';
import EngKnowledgeComponent from './body/eng/EngKnowledgeComponent.vue';
import EngProjectsComponent from './body/eng/EngProjectsComponent.vue';
import EspAboutmeComponent from './body/esp/EspAboutmeComponent.vue';
import EspEducationComponent from './body/esp/EspEducationComponent.vue';
import EspWorkComponent from './body/esp/EspWorkComponent.vue';
import EspLanguagesComponent from './body/esp/EspLanguagesComponent.vue';
import EspKnowledgeComponent from './body/esp/EspKnowledgeComponent.vue';
import EspProjectsComponent from './body/esp/EspProjectsComponent.vue';
import EspAbilitiesComponent from './body/esp/EspAbilitiesComponent.vue';

  import { ref } from "vue";
  const lang = ref("esp")
</script>

<template>
  <div class="main">
    <div v-if="lang == 'eng'">
      <EngAboutmeComponent/>
      <EngEducationComponent/>
      <EngWorkComponent/>
      <EngLanguagesComponent/>
      <EngKnowledgeComponent/>
      <EngProjectsComponent/>
    </div>
    <div v-else-if="lang == 'esp'">
      <EspAboutmeComponent/>
      <EspEducationComponent/>
      <EspWorkComponent/>
      <EspAbilitiesComponent/>
      <EspLanguagesComponent/>
      <EspKnowledgeComponent/>
      <EspProjectsComponent/>
    </div>
  </div>
</template>

<style scoped>
  .main {
    max-width: 100%;
    contain: content;
    margin: 15px;
  }
</style>