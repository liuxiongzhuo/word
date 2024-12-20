<template>
    <hr>
    <h3>{{ queryWord }}&emsp;<input type="text" v-model="queryInput" @keyup.enter="query"><button
            @click="query">查询</button></h3>
    <hr>
    <h3>有道音频</h3>
    <button @click="playYoudao0">美音</button>
    <button @click="playYoudao1">英音</button>
    <audio ref="audioElement0" :src="youdaoSrc0"></audio>
    <audio ref="audioElement1" :src="youdaoSrc1"></audio>
    <template v-if="jieshiapi">
    <hr>
    <h3>解释</h3>
        <p>{{ jieshiapi }}</p>
    </template>

    <hr>
    <h3>dictionaryapi</h3>
    <!-- {{ dictionaryapi[queryWord] }} -->
    <template v-if="dictionaryapi">
        <div v-for="key in Object.keys(dictionaryapi)">
            词性: {{ key }}
            <div v-for="item in dictionaryapi[key]">
                意思: {{ item.definition }}
                <br>
                <template v-if="item.example">

                    例子: {{ item.example }}
                </template>
            </div>
        </div>
    </template>
    <hr>
    <h3>双语例句</h3>
    <div v-for="item in doubleLanapi">

        <div>{{ item.en }}</div>
        <div>{{ item.zh }}</div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';
const store = useStore()
const queryState = computed(() => {
    return store.state.queryState
})
const queryWord = computed(() => {

    return store.state.queryWord
})
const queryInput = ref('')
const jieshiapi = ref()
const dictionaryapi = ref()
let doubleLanapi = ref([])
const doubleLanQuery=()=>{
    axios.get('https://0031400.xyz/api/word/example?word='+queryWord.value).then(res=>{
        doubleLanapi.value=res.data.data
    })
}
const jieshiapiQuery=()=>{
    axios.get('https://0031400.xyz/api/word/baicizhan?word='+queryWord.value).then(res=>{
        jieshiapi.value=res.data.data
    })
}
const dictionaryapiQuery=()=>{
    axios.get('https://0031400.xyz/api/word/dictionaryapi?word='+queryWord.value).then(res=>{
        dictionaryapi.value=res.data.data
        console.log(res.data.data);
        
    })
}
watch([queryState], () => {
    doubleLanQuery()
    jieshiapiQuery()
    dictionaryapiQuery()
})
const youdaoSrc0 = computed(() => {
    return 'https://dict.youdao.com/dictvoice?type=0&audio=' + queryWord.value
})
const youdaoSrc1 = computed(() => {
    return 'https://dict.youdao.com/dictvoice?type=1&audio=' + queryWord.value
})
const audioElement0 = ref(null)
const audioElement1 = ref(null)
const playYoudao0 = () => {
    audioElement0.value.play()
}
const playYoudao1 = () => {
    audioElement1.value.play()
}
const query = () => {
    store.commit('updateQueryState')
    store.commit('updateQueryWord', queryInput.value)
    queryInput.value = ''
}
</script>

<style scoped></style>