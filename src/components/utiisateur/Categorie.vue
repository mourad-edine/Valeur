<script>
import axios from 'axios'
import Layout2 from './Layout/Layout2.vue'
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
                    this.valide = reponse.data.supplements;
                });
        },
        informationId(id) {
            this.$router.push({ name: 'info', params: { id } });
        },
    },
    mounted() {
        this.Obtenir(this.$route.params.id);
    },
    components: { Layout2 }
}
</script>

<template>
    <Layout2>
        <div class="" style="margin-top: 200px;margin-bottom: 490px;">
        <div class="sm:grid grid-cols-2">
            <div class="sm:flex sm:ml-20 shadow-md cursor-pointer" v-for="item in valide" @click="informationId(item.id)">
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
    </Layout2>
</template>