<script setup>
import { ref } from 'vue'

const props =defineProps({
 src: String,
 command: String,
 apps:Array
})

const onClick = (e)=>{
  console.log("item click")
   console.log(e.target)
  //console.log(context);
  //console.log(props.apps);
  props.apps.push({parameters:11})
}
</script>


<template>
  <div @click="onClick">
    <slot></slot>
  </div>
</template>


<style scoped>
 
</style>