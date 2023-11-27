<script>
import axios from 'axios'
export default {
    name: 'categories',
    data() {
        return {
            nomprod :"",
            valide: {

            }
        }
    },
    methods: {
        async Obtenir(id) {
            let url = `http://127.0.0.1:8000/api/test/${id}`
            await axios.get(url)
                .then(reponse => {
                    //console.log(reponse.data.produit)
                    this.nomprod = reponse.data.nom
                    this.valide = reponse.data.supplements
                })
        },

        informationId(id) {
            this.$router.push({ name: 'info', params: { id } });
        },


    },

    mounted() {
        this.Obtenir(this.$route.params.id)
    },
}
</script>

<template>
    <div class="bg-orange-500 p-3">
        <p class="text-lg m-7 text-white font-bold">
            categorie de {{ nomprod }}
        </p>
    </div>
    <div class="">
        <div class="flex justify-center m-3">
            <h1 class="text-lg font-semibold">{{ nomprod }}</h1>
        </div>
        <hr class="m-2">

            <div class="grid sm:grid-cols-4 lg:grid-cols-4 mt-2 sm:ml-52 sm:mr-52">
                <div v-for="item in valide" class="cursor-pointer bg-slate-200 hover:bg-slate-200 p-2 rounded m-2"
                    @click="informationId(item.id)">
                        <div class="m-2">
                            <span class="text-semibold m-2 text-gray-700">{{ item.nom_categorie }}</span> || <span class="text-semibold m-2 text-gray-700"> {{ item.prix }}$</span>
                        </div>
                </div>
            </div>
        </div>
</template>