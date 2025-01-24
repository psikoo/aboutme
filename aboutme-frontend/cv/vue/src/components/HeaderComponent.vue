<script setup lang="ts">
</script>

<template>
  <div class="main">
    <nav>
      <img src="/img/pfp.webp" alt="pfp">
      <div class="center">
        <h1>Hugo Hernandez Muelas</h1>
        <h2>Multi-platform Application Developer</h2>
        <hr>
        <div class="bottom">
          <div class="pair">
            <div><strong>Email:</strong></div>
            <div class="data"><a href="mailto:hugohernandezmuelas03@gmail.com">hugo@cait.moe</a></div>
          </div>
          <div class="pair">
            <div><strong>Website:</strong></div>
            <div class="data"><a href="https://www.cait.moe/">www.cait.moe</a></div>
          </div>
          <div class="pair">
            <div><strong>Github:</strong></div>
            <div class="data"><a href="https://github.com/psikoo">psikoo</a></div>
          </div>
        </div>
        <div class="bottom">
          <div class="pair">
            <div><strong>Phone:</strong></div>
            <div class="data"><a href="tel:+34682131285">(+34)682 13 12 85</a></div>
          </div>
          <div class="pair">
            <div><strong>Residence:</strong></div>
            <div class="data">Madrid, Spain</div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
  .main {
    width: 100%;
    background-color: var(--fg-color);
  }

  nav {
    width: 100%;
    display: flex;
    align-items: center;
  }

  img {
    margin: 15px;
    height: 128px;
    border-radius: 50%;
    display:block;
  }

  hr {
    width: 110%;
    margin: 5px 0px;
    height: 1px;
    border: 0;
    border-top: 2px solid var(--text-color);
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .bottom {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .pair {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
</style>