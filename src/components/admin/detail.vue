<script>
import Swal from 'sweetalert2';
import Layout from './layout/Layout.vue';
import axios from 'axios';
export default {
    name: 'Detail',
    components: {
        Layout
    },
    data() {
        return {
            users: {},
            util: {},
            id_user: null
        };
    },
    methods: {
        async fetchData(id) {
            await axios.get(`http://127.0.0.1:8000/api/commandeinfo/${id}`)
                .then((response) => {
                    this.users = response.data.info;
                    console.log(response.data)

                    if (response) {
                        axios.get(`http://127.0.0.1:8000/api/finduser/${response.data.client_id}`)
                            .then((response) => {
                                this.util = response.data.info_user;

                            })
                            .catch(error => {
                                console.error('Erreur lors de la récupération des données:', error);
                            });
                    }


                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des données:', error);
                });
        },

        async finduser() {

        },



        async payer(id) {
            let url = `http://127.0.0.1:8000/api/payement/${id}`;
            await axios.post(url)
                .then(reponse => {
                    console.log(reponse);
                });
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'payement effectué',
                showConfirmButton: false,
                timer: 500
            });
            this.$router.push({ name: 'listes' })
        },

    },
    mounted() {
        this.fetchData(this.$route.params.id);
    },

}

</script>
<template>
    <Layout>

        <div class="main_content" style="margin-top: 100px;">
            <div class="info">
                <div>
                    <h1 class="text-xl m-5">
                        <div class="flex justify-around ">
                            <router-link to="/paid" class="btn btn-info text-white">commande validé</router-link>
                            <router-link to="/listes" class="btn btn-warning text-white">
                                commande non validé
                            </router-link>
                        </div>
                    </h1>
                    <div class="flex justify-around m-2">
                        <h1 class="text-lg font-semibold opacity-70">information client</h1>
                    </div>
                    <div class="m-10 flex justify-center">
                        <table class="table" style="width: 900px;">
                            <thead class="bg-dark text-white">
                                <tr>
                                    <th>
                                        id
                                    </th>
                                    <th>
                                        nom
                                    </th>
                                    <th>
                                        adresse
                                    </th>

                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr>
                                    <td>
                                        {{ util.id }}
                                    </td>
                                    <td>
                                        {{ util.nom }}
                                    </td>
                                    <td>
                                        {{ util.adresse }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr class="m-2">
                    <div class="flex justify-around m-2">
                        <h1 class="text-lg font-semibold opacity-70">detail de la commande</h1>
                    </div>
                    <div class="m-10 flex justify-center">
                        <table class="table" style="width: 900px;">
                            <thead class="bg-dark text-white">
                                <tr>
                                    <th>
                                        designation
                                    </th>
                                    <th>
                                        quantité
                                    </th>
                                    <th>
                                        prix
                                    </th>
                                    <th>
                                        Total
                                    </th>
                                    <th>
                                        choix
                                    </th>
                                    <th>
                                        date
                                    </th>
                                    <th>
                                        options 1
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr v-if="users.designation != null">
                                    <td>
                                        {{ users.designation }}
                                    </td>
                                    <td>
                                        {{ users.nombre }}
                                    </td>
                                    <td>
                                        {{ users.prix_unitaire }}$
                                    </td>
                                    <td>
                                        {{ users.total }} $
                                    </td>
                                    <td>
                                        à {{ users.choix }}
                                    </td>
                                    <td>
                                        {{ users.created_at }}
                                    </td>

                                    <td>
                                        <a @click="payer(this.$route.params.id)"
                                            class="p-1 rounded bg-yellow-400 text-white m-2 cursor-pointer">
                                            valider
                                        </a>

                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>


