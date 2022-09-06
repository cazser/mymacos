<script setup> 

import Terminal from '../Applications/Terminal.vue'
import Item from './Item.vue';
const props = defineProps({
apps:Array
})

const ondockClick = (e)=>{

}

 
</script>

<template>
    <ol class="dock" @click="ondockClick">
      <li>
        <Item :apps=apps link="finder">
          <img src="../assets/finder.png"/>
        </Item>
      </li>
      <li>
        <Item :apps=apps link="launchpad">
          <img src="../assets/launchpad.png">
        </Item>
      </li>
      <li>
        <Item :apps=apps link="mails">
          <img src="../assets/mails.png">
        </Item>
      </li>
       <li>
        <Item :apps=apps link="safari">
          <img src="../assets/safari.png">
        </Item>
       </li>
       <li>
        <Item :apps=apps link="settings">
          <img src="../assets/settings.png">
        </Item>
       </li>
       <li>
        <Item :apps=apps link="terminal">
          <img src="../assets/terminal.png">
        </Item>
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

