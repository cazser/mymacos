<script setup>
import { ref } from 'vue'
//import { RouterLink } from 'vue-router';
const props =defineProps({
 src: String,
 command: String,
 apps:Array,
 link:String
})

const onClick = (e)=>{
  //console.log("item click")
   //console.log(e.target)
  //console.log(context);
  console.log(props.link);

  props.apps.push({parameters:11, link: props.link})
  console.log(props.apps[props.apps.length-1])
}
</script>


<template>
  <div @click="onClick">
    <slot></slot>
  </div>
</template>


<style scoped>
 
</style>