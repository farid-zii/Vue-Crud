<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>DATA POST</h4>
                        <hr>
                        <router-link :to="{name: 'film.create'}" class="btn btn-md btn-success">TAMBAH DATA</router-link>

                        <table class="table table-striped table-bordered mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">TITLE</th>
                                    <th scope="col">CONTENT</th>
                                    <th scope="col">OPTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(film, index) in films" :key="index">
                                    <td>{{ film.judul }}</td>
                                    <td>{{ film.sipnosis }}</td>
                                    <td class="text-center">
                                        <!-- tombol edit mengarah ke name dengan film.edot sesuai dengan 
                                            name route yang ada di dalamnya
                                        -->
                                        <router-link :to="{name: 'film.edit', params:{id:film.id}}" class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                                        <button @click.prevent="hapus(film.id)" class="btn btn-sm btn-danger ml-1">DELETE</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref  } from "vue";

export default{
    setup(){

        let films = ref([])

        onMounted(()=> {

            axios.get('http://localhost:8000/api/film')
            .then(response => {

                films.value = response.data.data

            }).catch(error => {
                console.log(error.response.data)
            })
        })

        function hapus(id) {
            
            axios.delete(`http://localhost:8000/api/film/${id}`)
            .then(()=>{

                films.value.splice(films.value.indexOf(id),1)

            }).catch(error =>{
                console.log(error.response.data)
            })
        }

        return{
            films,
            hapus
        }
    }
}
</script>
<style>
body {
    background: lightgray;
}
</style>

