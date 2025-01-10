<script setup lang="ts">
import { ref,reactive,computed } from "vue";
  const nombre = "Hugo";
  //ref
  const sec1 = ref("basic");
  const sec2 = ref("advanced");
  //update
  sec2.value = "premium";
  //reactive()
  type Item = {
  id: number,
  nombre: string,
  precio: number,
  bool: boolean
};

  const rep1: Item = reactive({
    id:1,
    nombre:"aa",
    precio:150,
    bool:true
  });
  const rep2: Item = reactive({
    id:2,
    nombre:"ac",
    precio:10,
    bool:false
  });
  //update
  rep1.nombre = "bb"
  //propirdad computada
  const evalDiscount = function(item: Item) {
    return (item.precio < 150) ? "cheap" : "not cheap";
  }

  //v-model
  const titulo = ref("a");
</script>

<template>
  <h1>- ⚠ Site under construction -</h1>
  <h3>Learning how to use vue 😭</h3>
  <!-- <ul>
    <li>{{ sec1 }}</li>
    <li>{{ sec2 }}</li>
  </ul>
  <hr>
  <section>
    <p :class="{red: rep1.bool}">{{ rep1.nombre }} - {{ rep1.id }} ({{ evalDiscount(rep1) }})</p>
    <p :class="{red: rep2.bool}">{{ rep2.nombre }} - {{ rep2.id }} ({{ evalDiscount(rep2) }})</p>
  </section>
  <section>
    <h3>{{ titulo }}</h3>
    <input type="text" placeholder="placeholder" v-model="titulo">
  </section> -->
</template>

<style scoped>
  h1,h3,p,li {
    font-family: monospace;
  }
  section {
    display: flex;
  }
  .red {
    color: red;
  }
</style>
