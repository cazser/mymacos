<script setup>
import { reactive, ref } from 'vue'

import Dock from './Dock.vue'
const apps = reactive([]);
</script>

<template>
<div class="desktop">
  <header class="desktop-header">
    <img src="../assets/apple.png">
    <ol>
      <li>文件</li>
      <li>窗口</li>
      <li>帮助</li>
    </ol>
  </header>
  <Dock :apps=apps></Dock>
<ol class="appcontainer">
 <li v-for="app in apps">
  {{app.text}}
</li>
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

  .desktop-header>ol{
    display: flex;
  }

  .desktop-header li{
    margin: 4px;
    color: white;
    font-size: 12px;
  }
</style>

