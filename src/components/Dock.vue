<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
    <ol class="dock">
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ol>
</template>

<style scoped>

.dock{
  border: 10px solid;
  color: aqua;
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  left:50%;
  min-width: 800px;
  transform: translateX(-50%);
}
</style>

