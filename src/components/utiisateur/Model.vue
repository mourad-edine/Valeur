<template>
    <!-- Modal -->
<Layout2>
    <div class="" style="margin-top: 100px;margin-bottom: 360px;">
        <div class="flex justify-center m-5">
                <h1 class="text-xl text-gray-700 font-semibold">Menu</h1>
            </div>
            <hr class="m-2">
            <div class="sm:grid grid-cols-2">
                <div class="sm:flex sm:ml-20 shadow-md cursor-pointer" v-for="item in produits" @click="informationId(item.id)">
                    <div class="w-20 h-20">
                        <img src="../../images/app.png" alt="" class="w-16 sm:h-12 m-2">
                    </div>
                    <div class="ml-5 mt-2 mb-2">
                        <p class="text-red-700 font-bold">{{ item.nom }}</p>
                        <p class="font-semibold">18 Août 2019</p>

                    </div>
                </div>
            </div>
        </div>
</Layout2>
</template>

<script>
import axios from 'axios'
import Layout2 from './Layout/Layout2.vue'
export default {
    name: 'Model',
    data() {
        return {
            produits: [],
        };
    },
    methods: {
        afficher(nom) {
            this.compte++;
            console.log(nom);
        },
        naviguer() {
            this.$router.push({ name: 'liste' });
        },
        informationId(id) {
            this.$router.push({ name: 'categorie', params: { id } });
        },
        async Prod() {
            await axios.get('http://127.0.0.1:8000/api/choses')
                .then((response) => {
                this.produits = response.data.produit;
            })
                .catch(error => {
                console.error('Erreur lors de la récupération des données:', error);
            });
        }
    },
    mounted() {
        this.Prod();
    },
    props: ['command'],
    components: { Layout2 }
}
</script>