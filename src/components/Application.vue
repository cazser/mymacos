<script setup>
import { onMounted, ref } from 'vue'
const props = defineProps({
  parameters: Object
})
onMounted(()=>{
  console.log(props.parameters);
})

</script>

<template>
  <div
  class="wrapper">

  </div>
 
</template>

<style scoped>
 .wrapper{
  border: 2px solid red;
  min-height: 100px;
 }
</style>

