<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Dock from './components/Dock.vue'
import { ref } from 'vue';

const isLoading = ref(true);
setTimeout(()=>{
  isLoading.value = !isLoading.value
}, 5000)
</script>

<template>
<div v-if="isLoading" class="loading">

</div>
<div v-if="!isLoading" class="desktop">
  
  <Dock></Dock>
</div> 
</template>

<style scoped>

.loading{
  min-height: 100vh;
  background: white;
}
  .desktop{
    min-height: 100vh;
    position: relative;
    background-image: url('./assets/wellpapers/3-1.jpg');
  }

</style>
