<template>
        <router-link to="/">首页</router-link>
<div>自动播放有道音频: {{ store.state.youdaoAudio==0?'关闭':(store.state.youdaoAudio==1?'美音':'英音') }} <button @click="changeYoudaoAudio">改变</button></div>
<div>词书: {{ book }}
         <button @click="changeBook">改变</button>
         </div>
         <button @click="restore">初始化数据</button>
</template>

<script setup>
import {  computed} from "vue";
import { useStore } from 'vuex';
const store = useStore()
const changeYoudaoAudio=()=>{
        let number=store.state.youdaoAudio
        number++
        if (number==3) {
                number=0
        }
        store.commit('updateYoudaoAudio',number)
}
const changeBook=()=>{
        let number=store.state.choosedBook
        number++
        if (number==5) {
                number=0
        }
        store.commit('updateChoosedBook',number)
}
const book =computed(()=>{
        let temp =store.state.choosedBook
        switch (temp) {
                case 0:
                        return '四级'
                        break;
                case 1:
                        return '六级'
                        break;
                case 2:
                        return '考研'
                        break;
                case 3:
                        return '托福'
                        break;
                case 4:
                        return 'SAT'
                        break;
        }
})
const restore=()=>{
        store.commit('restore')

}
</script>

<style scoped>

</style>