<template>
    <h3>dictionaryapi</h3>
    <div>{{ message }}</div>
    <div>{{ dictionaryapi[0].word }}</div>
    <div v-for="meaning in dictionaryapi[0].meanings">
        <div>词性: {{ meaning.partOfSpeech }}</div>
        <div v-for="definition in meaning.definitions">
            <div>解释: {{ definition.definition }}</div>
            <div>例句: {{ definition.example }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';
const store = useStore()
const dictionaryapi = ref([{}])
let books=store.state.books
let book =computed(()=>{
    return books[store.state.choosedBook]
})
const now = computed(() => {
    return store.state.bookNow[store.state.choosedBook]
})
axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + book[book.now].word).then(response => {
        dictionaryapi.value=response.data
    }).catch((err) => {
        dictionaryapi.value=[{}]
        console.error('error: ' + err)
    })
</script>

<style scoped></style>