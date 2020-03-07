<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
//将方法引入
import { getIndex } from '../api/index';
export default {
  data(){
    return{
      
    }
  },
  created() {
    //请求接口
    getIndex({ pageSiza: 100, num: 10 });
  },
  mounted(){
    //当接收到init时，会执行getInit方法
    window.EvnetBus.$on('systeminit',this.getInit)
  },
  beforeDestroy(){
    //进入beforeDestroy这个生命周期时，取消接收init
    window.EvnetBus.$off('systeminit')
  },
  methods:{
    getInit(res){
      console.log('res',res)
    }
  }
}
</script>
<style lang="less" scoped>
  .about{
    width: 320px;
    height: 20px;
    h1{
      color: red;
    }
  }
</style>