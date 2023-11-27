<template>
    <!-- Modal -->
    <div class="bg-orange-500 p-3 flex justify-between">
        <p class="text-lg m-2 text-white font-bold">
            menue simple
        </p>
        <div class="flex text-white">
            <p class="border-double border-1 border-sky-500 m-2 rounded p-2 cursor-pointer" @click="login">login</p>
            <p class="border-double border-1 border-yellow-400 m-2 rounded p-2 cursor-pointer" @click="Register">register</p>
        </div>
    </div>
    <div class="sm:flex sm:justify-evenly justify-around ">
        <div class="">
            <div class="md:flex justify-between">
                <div>
                    <h1 class="mt-4  text-lg font-semibold opacity-60">listes de recettes</h1>
                </div>
            </div>
            <hr>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 mt-2">
                <div v-for="item in produits" class="cursor-pointer hover:bg-slate-200 p-2 rounded"
                    v-on:click="informationId(item.id)">
                    <div>
                        <img src="../../images/food.png" alt="" class="sm:w-32 sm:h-28 w-16 h-16">
                        <div class="m-2">
                            <span class="text-semibold m-2 text-gray-700">{{ item.nom }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Model',
    data() {
        return {
            produits: [],
        }
    },

    methods: {
        afficher(nom) {
            this.compte++
            console.log(nom)
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
    },
    props: ['command']
}
</script>