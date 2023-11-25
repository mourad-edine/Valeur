<template>
    <!-- Modal -->
    <div class="">
        <div class="">
            <div class="md:flex justify-between">
                <div>
                    <h1 class="mt-4  text-lg font-semibold opacity-60">listes de recettes</h1>
                </div>
                <div>
                    <p class="bg-orange-500 text-white p-2 rounded h-10 md:w-52 w-full cursor-pointer mt-4" @click="naviguer">liste
                        des
                        commandes
                    </p>
                </div>
            </div>
            <hr>

            <div class="flex mt-3">
            </div>
        </div>
        <div class="">
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 mt-2">
                <div v-for="item in produits" class="cursor-pointer hover:bg-slate-200 p-2 rounded"
                    v-on:click="informationId(item.id)">
                    <div>
                        <img src="../images/food.png" alt="" class="w-16 h-16">
                        <div class="m-2">
                            <span class="text-semibold m-2 text-gray-700">{{ item.nom }}</span>
                            <span class="text-gray-400">prix :{{ item.prix }} $</span>
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
            this.$router.push({ name: 'info', params: { id } });
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
    props: ['command']
}
</script>