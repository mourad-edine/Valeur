<script>
import Layout from './layout/Layout.vue';
import axios from 'axios';
export default {
    name: 'Liste',
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
            await axios.get('http://127.0.0.1:8000/api/hote')
                .then((response) => {
                    this.users = response.data.utilisateur;
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des données:', error);
                });
        },

        naviguer() {
            this.$router.push({ name: 'home' });
        },
    },
    mounted() {
        this.fetchData();
        setInterval(this.fetchData,5000)
    },

}

</script>
<template>
    <Layout>

        <div class="main_content">
            <div class="header">DASHBOARD > Accueil</div>
            <div class="info">
                <div>
                    <h1 class="text-2xl">
                        listes des commandes
                    </h1>
                    <hr class="m-2">
                    <div class="m-10">
                        <table class="table">
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
                                    date
                                </th>
                                <th>
                                    option 1
                                </th>
                                <th>
                                    options 2
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
                                    {{ user.created_at }} $
                                </td>
                                <td class="text-info">
                                    details
                                </td>
                                <td>
                                    <a href="#" class="p-2 rounded bg-yellow-400 text-white m-2">valider la commandes</a>
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


