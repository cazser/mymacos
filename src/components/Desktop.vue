<script setup>
import { ref } from 'vue'

import Dock from './Dock.vue'
</script>

<template>
<div class="desktop">
<Dock></Dock>
</div> 
</template>

<style scoped>

   .desktop{
    min-height: 100vh;
    position: relative;
    background-image: url('../assets/wellpapers/3-1.jpg');
  }
</style>

