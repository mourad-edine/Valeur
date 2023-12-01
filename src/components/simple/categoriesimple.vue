<script>
import Swal from 'sweetalert2'
import axios from 'axios'
import Layout from './layout/Layout.vue'
export default {
    name: 'categories',
    data() {
        return {
            nomprod: "",
            valide: {}
        };
    },
    methods: {
        async Obtenir(id) {
            let url = `http://127.0.0.1:8000/api/test/${id}`;
            await axios.get(url)
                .then(reponse => {
                    //console.log(reponse.data.produit)
                    this.nomprod = reponse.data.nom;
                    console.log(reponse.data)
                    this.valide = reponse.data.supplements;
                });
        },
        affiche() {
            Swal.fire({
                position: 'top-end',
                icon: 'info',
                title: 'vous devez avoir un compte pour commander',
                showConfirmButton: false,
                timer: 1500
            });
        }
    },
    mounted() {
        this.Obtenir(this.$route.params.id);
    },
    components: { Layout }
}
</script>

<template>
    <Layout>
        <div class="" style="margin-top: 100px;margin-bottom: 500px;">
            <div class="flex justify-center m-5">
                <h1 class="text-xl text-gray-700 font-semibold">Categorie - {{ nomprod }}</h1>
            </div>
            <hr class="m-2">
            <div class="sm:grid grid-cols-2">
                <div class="sm:flex sm:ml-20 shadow-md cursor-pointer" v-for="item in valide" @click="affiche">
                    <div class="w-20 h-20">
                        <img src="../../images/app.png" alt="" class="w-16 sm:h-12 m-2">
                    </div>
                    <div class="ml-5 mt-2 mb-2">
                        <p class="text-red-700 font-bold">{{ item.nom_categorie }}</p>
                        <p class="font-semibold">{{ item.prix }} $</p>

                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>