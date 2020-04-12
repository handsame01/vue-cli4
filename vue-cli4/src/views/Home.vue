<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div @click="adda(10)">{{this.$store.state.a}}</div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created(){
    this.add()
  },
  methods:{
    add(){
      console.log('12123')
    },
    ...mapMutations(['adda'])
  }
}
</script>
