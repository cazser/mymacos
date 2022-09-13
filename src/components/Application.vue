<script>
import { createApp, defineComponent } from 'vue';
import { onMounted, ref } from 'vue'
import initApp from '../script/initApp';


export default
  
    {
      setup:(props, context)=>{
      
      onMounted(()=>{
        initApp();
      })
      const onCloseClick =()=>{
        console.log("close.button")
      }      
      
      return {
        onCloseClick
      }

      }
    }
  


</script>

<template>
  <div
  class="wrapper">
  <header>
    <button class="close primary-three-button" @click="onCloseClick"></button>
    <button class="min primary-three-button"></button>
    <button class="max primary-three-button"></button>
  </header>
  <main>
    <slot></slot>    
  </main>
  </div>
 
</template>

<style scoped>
 .wrapper{
  background-color: #fbfbfb;
  border-radius: 8px;
  min-height: 100px;
  padding: 0;
  margin: 0;
 }

 header{
  padding: 4px;
 }
 .close{
  background: red;
 
 }
.min{
  background: yellow;
}

.max{
  background: green;
}
 .primary-three-button{
   border-radius: 50%;
  min-height: 15px;
  min-width: 15px;
  border: 1px solid;
  margin:2px;
 }
</style>

