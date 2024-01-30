<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border rounded shadow">
                <div class="card-body">
                    <h4>TAMBAH FILM</h4>
                    <hr>

                    <form @submit.prevent="store">
                        <div class="form-group">
                            <label for="Judul" class="fw-bold">TITLE</label>
                            <input type="text" class="form-control" v-model="film.judul" placeholder="Masukkan Judul Film">
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
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
    setup() {
        const film = reactive({
            judul: '',
            sipnosis: ''
        });

        const validation = ref({});

        const router = useRouter();

        function store() {
            let judul = film.judul;
            let sipnosis = film.sipnosis;

            axios.post('http://localhost:8000/api/film', {
                judul: judul,
                sipnosis: sipnosis
            })
                .then(() => {
                    router.push({
                        name: 'film.index'
                    });
                })
                .catch(error => {
                    validation.value = error.response.data;
                });
        }

        return {
            film,
            validation,
            router,
            store
        };
    }
}
</script>

<style>
body {
    background: lightgray;
}
</style>
