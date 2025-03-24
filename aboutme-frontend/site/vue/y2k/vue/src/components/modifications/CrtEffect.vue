<script setup lang="ts">
</script>

<template>
  <div class="crt"></div>
</template>

<style scoped>
  .crt {
    height: 100%;
    width: 100vw;
    position: fixed;
    top: 0px; 
    left: 0px;
    z-index: 1000;
    pointer-events: none;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3), rgba(255,255,255,0), rgba(255,255,255,0));
    background-size: cover;
    background-size: 100% 4px;
  }

  @media screen{
    .crt {
      animation: scanLines infinite 1s cubic-bezier(0.6,1.1,0.7,1), flicker 0.3s infinite;
    }
  } 
  @keyframes scanLines {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0 -4px;
    }
  }
  @keyframes flicker {
    0%   { opacity: 0.73851; }
    5%   { opacity: 0.96412; }
    10%  { opacity: 0.77664; }
    15%  { opacity: 0.94377; }
    20%  { opacity: 0.86454; }
    25%  { opacity: 0.76425; }
    30%  { opacity: 0.72386; }
    35%  { opacity: 0.87893; }
    40%  { opacity: 0.98765; }
    45%  { opacity: 0.70243; }
    50%  { opacity: 0.92581; }
    55%  { opacity: 0.67027; }
    60%  { opacity: 0.96857; }
    65%  { opacity: 0.67344; }
    70%  { opacity: 0.75230; }
    75%  { opacity: 0.61674; }
    80%  { opacity: 0.92741; }
    85%  { opacity: 0.65816; }
    90%  { opacity: 0.88371; }
    95%  { opacity: 0.91123; }
    100% { opacity: 0.93510; }
  }
</style>