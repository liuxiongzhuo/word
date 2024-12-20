<template>
    <div class="container">
        <div class="up">
            <div class="main">
                <component :is="currentComponent"></component>
            </div>
            <div class="tar">
                <component :is="Tar"></component>
            </div>
        </div>
        <div class="down">
            <component :is="Detail"></component>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import List from './List.vue';
import Query from './Query.vue';
import Detail from './Detail.vue';
import Tar from './Tar.vue'
import { useStore } from 'vuex';
const store = useStore()
const currentComponent = ref(List)

</script>

<style scoped>
.container {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
}

.down{
    padding-right: 30px;

}
.up {
    flex:0 0 40%;
    overflow-y: hidden;
    display: flex;
    flex-direction: row;
}
.main{
    overflow-y: auto;
    flex:1 1 90%;
}
.tar{
    /* padding-right: 30px; */
    flex: 0 0 10%;
}
</style>