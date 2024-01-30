<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card boerder rounded shadow">
                    <div class="card-body">
                        <h4>EDIT FILM</h4>
                        <hr>

                        <form @submit.prevent="update">
                            <div class="form-group">
                                <label for="Judul" class="fw-bold">Judul</label>
                                <input type="text" class="form-control" v-model="film.judul"
                                    placeholder="Masukkan Judul Film">
                                <!-- Validasi -->
                                <div v-if="validation.judul" class="mt-2 alert alert-danger">
                                    {{ validation.judul[0] }}
                                </div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="Content" class="fw-bold">Sipnosis</label>
                                <input type="text" class="form-control" v-model="film.sipnosis"
                                    placeholder="Masukkan Sipnosis Film">
                                <!-- Validasi -->
                                <div v-if="validation.sipnosis" class="mt-2 alert alert-danger">
                                    {{ validation.sipnosis[0] }}
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary mt-3">SIMPAN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {reactive, ref, onMounted } from 'vue'
    import { useRoute, useRouter } from 'vue-router';
    import axios from 'axios';


    export default {
        setup(){
            const film = reactive({
                judul:'',
                sipnosis:''
            })

            const  validation = ref([])

            const router = useRouter()

            const route = useRoute()

            onMounted(() => {
                
                axios.get(`http://localhosy:8000/api/film/${route.params.id}`)
                .then(response=>{

                    film.judul = response.data.data.judul
                    film.sipnosis = response.data.data.sipnosis

                }).catch(error =>{
                    // console.log(error.response.data)
                })
            })

            //
            function update() {
                let judul = film.judul
                let sipnosis = film.sipnosis

                axios.put(`http://localhost:8000/api/film/${route.params.id}`,{
                    judul:judul,
                    sipnosis:sipnosis
                })
                .then(()=>

                    router.push({
                        name:`film.index`
                    })
                ).catch(error=>{
                    
                    validation.value= error.response.data
                })
            }

            return{
                film,
                validation,
                router,
                update
            }

        }
    }
</script>