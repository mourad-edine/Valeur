<script>
import axios from 'axios';
export default {

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
        
    },

}

</script>
<template>
    <div class="bg-orange-500 p-3">
        <p class="text-lg m-7 text-white font-bold">
            listes des commandes
        </p>
    </div>
    <div>
        <p class="p-2 bg-orange-500 sm:ml-20 text-white rounded cursor-pointer mt-3 sm:w-20 mb-2" @click="naviguer">
            retour au liste
        </p>
    </div>
    <div class="sm:m-20 sm:bg-gray-100">
        <p class="bg-orange-500 p-3 rounded text-white mb-5">
            proceder au payement
        </p>
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
                        option 2
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
                        <a href="#" class="p-2 rounded bg-yellow-400 text-white m-2">retirer</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


