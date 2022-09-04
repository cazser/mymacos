<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
    <ol class="dock">
      <li>
        <img src="../assets/finder.png">
      </li>
      <li>
        <img src="../assets/launchpad.png">
      </li>
      <li>
        <img src="../assets/mails.png">
      </li>
       <li>
        <img src="../assets/safari.png">
       </li>
       <li>
        <img src="../assets/settings.png">
       </li>
    </ol>
</template>

<style scoped>

.dock{
  background-color: rgba(133,133, 133, 0.3);
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 40px;
  left:50%;
  max-width:calc(100vw - 200px);
  transform: translateX(-50%);
  border-radius: 10px;
  min-height: 40px;
  align-items: center;
}
li>img{
  max-height: 64px;
}
li{
  text-align: center;
  margin-left: 8px;
}

li:hover{
  transform:scale(1.5)
}

</style>

