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

const onSubmit=(e)=>{
  //console.log('提交')
  //console.log( iframe.value);


  iframe.value.src=url.value;
}
const onInput = (e)=>{
  //console.log(e.key);
  if(e.key==='Enter'){
    onSubmit();
  }
}
</script>

<template>
  <div class="wrapper">
    <div>
      <input  @keyup="onInput" class="safariinput" @input="onInput" v-model="url"/>
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