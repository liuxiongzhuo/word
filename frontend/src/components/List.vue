<template>
    <template v-for="(item, index) in showList">
        <div :style="{flexDirection: item.state ? 'row-reverse' : 'row'}" style="display: flex;">
            <span @click="changeState(index)">改变</span>&ensp;
            <span class="word" @click="changeWordState(index)">{{ item.word }}</span>
        </div>
    </template>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const now = computed(() => {
    return store.state.bookNow[store.state.choosedBook]
})
const page = computed(() => {
    return Math.floor(now.value / 50)
})
const showList = computed(() => {
    return store.state.books[store.state.choosedBook].slice(page.value * 50, (page.value + 1) * 50)
})
const changeWordState = function (index) {

    let temp = page.value * 50 + index
    store.commit('updataChoosedBookNow', temp)
    store.commit('updateQueryState')
    store.commit('updateQueryWord',showList.value[index].word)

}
const changeState=(index)=>{
    let temp = page.value * 50 + index
    store.commit('updateBook',temp)
}
</script>

<style scoped>
.word {
    margin: 3px 0;
}
</style>