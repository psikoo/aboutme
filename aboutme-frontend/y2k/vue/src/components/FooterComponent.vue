<script setup lang="ts">
  import { ref, type Ref } from "vue";
  const websites: any = ref([["coleheartsyou", "https://spacehey.com/coleheartsyou/"],
                            ["coraglue", "https://spacehey.com/coraglue/"],
                            ["robinwantsplant", "https://spacehey.com/robinwantsplant/"],
                            ["ol1vi4s-cyberspace", "https://ol1vi4s-cyberspace.neocities.org/"],
                            ["luvstar", "https://luvstarkei.com/"], 
                            ["nn.net", "https://networkneighbourhood.neocities.org/"],
                            ["kitty", "https://www.friendproject.net/kitty/"],
                            ["adrian", "https://adriansblinkiecollection.neocities.org/"], 
                            ["cooltext", "https://cooltext.com/"], 
                            ["raining-starss", "https://raining-starss.neocities.org/stampcollection/"], 
                            ["blinkies cafe", "https://blinkies.cafe/"], 
                            ["allyratworld", "https://allyratworld.com/stamps/"], 
                            ["graphic", "https://graphic.neocities.org/directory/"], 
                            ["earthboundtext", "https://www.earthboundtext.com/"], 
                            ["mooeena", "https://mooeena.neocities.org/honeycomb/"], 
                            ["confettiguts", "https://confettiguts.gay/graphics/"], 
                            ["wrender", "https://wrender.neocities.org/graphics/"], 
                            ["buttonwall", "https://buttonwall.neocities.org/"], 
                            ["sourgummywormz", "https://sourgummywormz.neocities.org/collection/"], 
                            ["y2kstamps", "https://y2k.neocities.org/stamps/"], 
                            ["sillyratstamps", "https://sillyratstampscollection.neocities.org/"], 
                            ["devicon", "https://devicon.dev/"]])
</script>

<template>
  <div class="main">
    <h1>Inspired by many great websites: </h1>
    <div class="links">
      <div v-for="(website, index) in websites" class="link">
        <a :href="website[1]" target="_blank">{{ website[0] }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .main {
    width: calc(100% - 27px);
    background-color: var(--bg-color);
    border: 6px double var(--border-color);
    margin-top: 5px;
    padding-top: 15px;
    padding-left: 15px;
  }

  .links {
    margin: 10px 0px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .link>a, .link:visited>a {
    padding: 2px 4px; 
    text-decoration: none;
    color: var(--text-color);
  }
  .link:hover>a {
    padding: 2px 4px;
    text-decoration: underline;
    background-color: var(--hover-color);
    border-radius: 5px;
  }
</style>