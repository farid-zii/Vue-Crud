//untk menginisialisasikan konfigurasi dari route
import { createRouter, createWebHashHistory} from 'vue-router'

//Mendefenisikan route
const routes = [
    {
        path:'/',
        name: 'film.index',
        component: () => import('@/views/film/index.vue')
    },
    {
        path:'/create',
        name:'film.create',
        component:() => import('@/views/film/create.vue')
    },
    {
        path:'/edit/:id',
        name:'film.edit',
        component:() => import('@/views/film/edit.vue')
    },
]
//Membuat router

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router