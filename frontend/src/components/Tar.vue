<template>
        <router-link to="/setting">设置</router-link>
        <br>
        <span @click="backPage">上一页</span>
        <br>
        <span @click="forwardPage">下一页</span>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore()
const backPage=()=>{
        let temp=store.state.bookNow[store.state.choosedBook]
        temp-=50
        if (temp<0) {
                temp=0
        }
        store.commit('updataChoosedBookNow', temp)
}
const forwardPage=()=>{
        let temp=store.state.bookNow[store.state.choosedBook]
        temp+=50
        if (temp>=store.state.books[store.state.choosedBook].length) {
                temp=store.state.books[store.state.choosedBook].length-1
        }
        store.commit('updataChoosedBookNow', temp)
}

</script>

<style scoped></style>