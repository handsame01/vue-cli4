import Axios from "axios"
//get请求示例
function getIndex () {
    //获取token，这里假定它为如下字符串
    const oauth = 'dshfjklsadhfkjlsdahfkjl';
    return Axios.get('api/edu/system/init',{params:{code:1},headers: {
        //请求头，传token，具体根据业务需要
                Authorization: oauth
            }}).then(res=>{
                //将事件分发出去
        EventBus.$emit('systeminit',res)
    })
}
//post请求示例
function postint(code){
    //获取token，这里假定它为如下字符串
    const oauth = 'dshfjklsadhfkjlsdahfkjl';
    return Axios.post('api/edu/system/init',{code:code},{headers: {
        //请求头，传token，具体根据业务需要
        Authorization: oauth
    }}).then(res=>{
        //将事件分发出去
        EventBus.$emit('post',res)
    })
}
//将方法暴露出去
export {
    getIndex,
    postint
}