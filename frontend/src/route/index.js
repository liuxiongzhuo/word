import { createRouter,createMemoryHistory } from "vue-router";
import Setting from '../components/Setting.vue'
import List from '../components/List.vue'
import Home from '../components/Home.vue'
import Detail from '../components/Detail.vue'
import Tar from '../components/Tar.vue'
const routes=[
    {
        path:'/',
        name:'Home',
        components:{
            detail:Detail,
            default:Home,
            list:List,
            tar:Tar
        }
    },
    {
        path:'/setting',
        name:'Setting',
        component:Setting
    }
]
const router = createRouter({
    history:createMemoryHistory(),
    routes
})
export default router