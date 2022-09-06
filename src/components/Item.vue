<script setup>
import { ref } from 'vue'
//import { RouterLink } from 'vue-router';
const props =defineProps({
 src: String,
 command: String,
 apps:Array,
 
})

const onClick = (e)=>{
  console.log("item click")
   console.log(e.target)
  //console.log(context);
  //console.log(props.apps);
  props.apps.push({parameters:11})
  console.log(props.apps)
}
</script>


<template>
  <div @click="onClick">
    <router-link to="/terminal">
    <slot></slot>
    </router-link>
  </div>
</template>


<style scoped>
 
</style>