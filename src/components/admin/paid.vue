<script>
import Layout from './layout/Layout.vue';
import axios from 'axios';
export default {
    name: 'Nopaid',
    components: {
        Layout
    },
    data() {
        return {
            users: []
        };
    },
    methods: {
        async fetchData() {
            await axios.get('http://127.0.0.1:8000/api/hote2')
                .then((response) => {
                    this.users = response.data.utilisateur;
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des données:', error);
                });
        },

        

        naviguer() {
            this.$router.push({ name: 'listes' });
        },
    },
    mounted() {
        this.fetchData();
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
                    <hr class="m-2">

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
                                    <th>
                                        état
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr v-for="user in users" :key="user.id">
                                    <td>
                                        {{ user.designation }}
                                    </td>
                                    <td>
                                        {{ user.nombre }}
                                    </td>
                                    <td>
                                        {{ user.prix_unitaire }}$
                                    </td>
                                    <td>
                                        {{ user.total }} $
                                    </td>
                                    <td>
                                        à {{ user.choix }}
                                    </td>
                                    <td>
                                        {{ user.created_at }}
                                    </td>
                                    <td>
                                        <a href="" class="p-1 bg-green-500 text-white rounded-lg mb-1 cursor-pointer">
                                            details
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#" class="p-1 rounded bg-gray-400 text-white m-2">
                                            payé
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


