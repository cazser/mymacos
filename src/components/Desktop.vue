<script setup>
import { ref } from 'vue'

import Dock from './Dock.vue'
</script>

<template>
<div class="desktop">
  <header class="desktop-header">
    <img src="../assets/apple.png">
    <ol>
      <li>文件</li>
    </ol>
  </header>
  <Dock></Dock>
<ol class="appcontainer">
</ol>
</div> 
</template>

<style scoped>

   .desktop{
    min-height: 100vh;
    position: relative;
    background-image: url('../assets/wellpapers/3-1.jpg');
  }

  .desktop-header{
    border: 1px solid ;
    min-height: 5px;
    display: flex;
    background: rgba(255, 255, 255, 0.5);
    align-items: center;
  }

  .desktop-header>img{
    max-height: 16px;
  }
</style>

