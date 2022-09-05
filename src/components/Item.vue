<script setup>
import { ref } from 'vue'

const props =defineProps({
 src: String,
 command: String
})

const count = ref(0)
</script>


<template>
  <div>
    <slot></slot>
  </div>
</template>


<style scoped>
 
</style>