import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'
import initialBook0 from '../assets/json/list/0.json'
import initialBook1 from '../assets/json/list/1.json'
import initialBook2 from '../assets/json/list/2.json'
import initialBook3 from '../assets/json/list/3.json'
import initialBook4 from '../assets/json/list/4.json'
const initialState={
        choosedBook: 0,
        books: [
            initialBook0,
            initialBook1,
            initialBook2,
            initialBook3,
            initialBook4
        ],
        bookNow: [
            0,
            0,
            0,
            0,
            0
        ],
        queryState:0,
        queryWord:'',
        youdaoAudio:1
    }
export default createStore({
    state: initialState,
    mutations: {
        updateChoosedBook(state, index) {
            state.choosedBook = index
        },
        updateBook(storeState, index) {
            storeState.books[storeState.choosedBook][index].state = storeState.books[storeState.choosedBook][index].state ^ 1
            
        },
        updataChoosedBookNow(state, now) {
            state.bookNow[state.choosedBook] = now
        },
        updateQueryState(state){
            state.queryState=state.queryState^1
        },
        updateQueryWord(state,word){
            state.queryWord=word
        },
        updateYoudaoAudio(state,index){
            state.youdaoAudio=index
        },
        restore(state){
            Object.assign(state,initialState)
        }
    },
    plugins: [
        createPersistedState({
            key: 'book',
            paths: ['choosedBook', 'books', 'bookNow','youdaoAudio','queryState','queryWord'],
            storage: window.localStorage
        })
    ]
})