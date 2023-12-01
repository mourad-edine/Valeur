<template>
    <!-- Modal -->
    <Layout>
        <div class="" style="margin-top: 200px;margin-bottom: 360px;">
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
    </Layout>
</template>

<script>
import axios from 'axios'
import Layout from './layout/Layout.vue'
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
            this.$router.push({ name: 'categoriesimple', params: { id } });
        },
        async Prod() {
            await axios.get('http://127.0.0.1:8000/api/choses')
                .then((response) => {
                    this.produits = response.data.produit;
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des données:', error);
                });
        },
        login() {
            this.$router.push({ name: 'login' });
        },
        Register() {
            this.$router.push({ name: 'register' });
        },
    },
    mounted() {
        this.Prod();

        let user = localStorage.getItem('client_id');
        if (user) {
            this.$router.push({ name: 'home' });

    }
    },
    props: ['command'],
    components: { Layout }
}
</script>