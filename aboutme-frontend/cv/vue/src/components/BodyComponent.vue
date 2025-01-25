<script setup lang="ts">
import AboutmeComponent from './body/AboutmeComponent.vue';
import EducationComponent from './body/EducationComponent.vue';
import WorkComponent from './body/WorkComponent.vue';
import LanguagesComponent from './body/LanguagesComponent.vue';
import KnowledgeComponent from './body/KnowledgeComponent.vue';
import ProjectsComponent from './body/ProjectsComponent.vue';
</script>

<template>
  <div class="main">
    <AboutmeComponent/>
    <EducationComponent/>
    <WorkComponent/>
    <LanguagesComponent/>
    <KnowledgeComponent/>
    <ProjectsComponent/>
  </div>
</template>

<style scoped>
  .main {
    max-width: 100%;
    contain: content;
    margin: 15px;
  }
</style>