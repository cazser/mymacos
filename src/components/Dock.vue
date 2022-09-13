<script setup> 

import Link from './Link.vue'
const props = defineProps({
apps:Array
})

const ondockClick = (e)=>{

}

 
</script>

<template>
    <ol class="dock" @click="ondockClick">
      <li>
        <Link  id="1" :apps=apps link="finder">
          <img src="../assets/finder.png"/>
        </Link>
      </li>
      <li>
        <Link id="2" :apps=apps link="launchpad">
          <img src="../assets/launchpad.png">
        </Link>
      </li>
      <li>
        <Link id="3" :apps=apps link="mails">
          <img src="../assets/mails.png">
        </Link>
      </li>
       <li>
        <Link id="4" :apps=apps link="safari">
          <img src="../assets/safari.png">
        </Link>
       </li>
       <li>
        <Link id="5" :apps=apps link="settings">
          <img src="../assets/settings.png">
        </Link>
       </li>
       <li>
        <Link id="6" :apps=apps link="terminal">
          <img src="../assets/terminal.png">
        </Link>
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

