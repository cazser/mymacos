<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Dock from './components/Dock.vue'
import { ref } from 'vue';
const timer = ref(0);
const isLoading = ref(true);
const intervalId = setInterval(()=>{
  timer.value = timer.value +1;
}, 1000);
setTimeout(()=>{
  isLoading.value = !isLoading.value;
  window.clearInterval(intervalId);
}, 20000)
</script>

<template>
<div v-if="isLoading" class="loading">
  <img src="./assets/apple.png">
  <div class="progress">
    <div class="progress-inner" 
    :style="{  width: timer*15 + 'px' }">
    </div>
  </div>
</div>
<div v-if="!isLoading" class="desktop">
  
  <Dock></Dock>
</div> 
</template>

<style scoped>

.loading{
  min-height: 100vh;
  background: white;
  position: relative;
}

.loading>img{
  position: absolute;
  top: 45%;
  left:50%;
  transform: translate(-50%, -50%);
}

.loading>.progress{
   position: absolute;
  top: 60%;
  left:50%;
  min-width: 300px;
  height: 5px;
  border-radius: 3px;
  transform: translate(-50%, -50%);
}

.progress-inner{

  height: 5px;
  border-radius: 3px;
  width:100px;
  background: black;
  display: block;
}
  .desktop{
    min-height: 100vh;
    position: relative;
    background-image: url('./assets/wellpapers/3-1.jpg');
  }

</style>
