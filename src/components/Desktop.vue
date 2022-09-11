<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import Terminal from '../Applications/Terminal.vue';
import Settings from '../Applications/Settings.vue';
import Test from './test/Test'
import Dock from './Dock.vue'
import Application from './Application.vue';
const apps = reactive([]);
let newDate = reactive(new Date());
let intervalId = setInterval(()=>{
  newDate = new Date();

}, 1000);
onMounted(()=>{
 setTimeout(() => {
  currentTab.value = "Settings";
 }, 5000); 
})
onUnmounted(()=>{
  window.clearInterval(intervalId)
})
const currentTab = ref('Terminal')

const tabs = {
  Terminal,
  Settings,
}

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
    <span class="time">
      {{newDate.getHours()>10? newDate.getHours(): 
      '0'+ newDate.getHours()}}:{{newDate.getMinutes()>10?
       newDate.getMinutes(): '0'+newDate.getMinutes()}}
    </span>
  </header>
  <Application >
    

  </Application>
  <Dock :apps=apps></Dock>
<ol class="appcontainer">
 <li v-for="app in apps">
  
  <Application :parameter="app">
      <component :is="tabs[app.link]" ></component>
  </Application>
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
    position: relative;
  }

  .time{
    position: absolute;
    right: 20px;
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

