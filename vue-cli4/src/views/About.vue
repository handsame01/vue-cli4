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
    EventBus.$on('systeminit',this.getInit)
  },
  beforeDestroy(){
    //进入beforeDestroy这个生命周期时，取消接收init
    window.EventBus.$off('systeminit')
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
    width: 100vw;
    height: 2rem;
    h1{
      color: red;
    }
  }
</style>