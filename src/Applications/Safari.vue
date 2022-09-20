<script setup>
import { onMounted, ref } from 'vue';


defineProps({
  msg: String
})
const url = ref("")
const iframe = ref(null);
onMounted(()=>{
  console.log(iframe);
})

const onSubmit=()=>{
  //console.log('提交')
  //console.log( iframe.value);
  iframe.value.src=url.value;
}
</script>

<template>
  <div class="wrapper">
    <div>
      <input  class="safariinput" v-model="url"/>
      <button @click="onSubmit">提交</button>
    </div>
    <iframe ref="iframe" class="mainframe">

    </iframe>
    </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.wrapper{
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-height: 100vh;
}

.safariinput{
  width: calc( 100% - 50px);
}

.mainframe{
  flex-grow: 1;
}
</style>