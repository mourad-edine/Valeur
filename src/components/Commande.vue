<script>
import axios from 'axios';
export default {

    data() {
        return {
            dataLoaded: false,
            users: []
        };
    },
    methods: {
       async fetchData() {
           await axios.get('http://127.0.0.1:8000/api/hote')
                .then(response => {
                    this.users = response.data.utilisateur;
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des données:', error);
                });
        }
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
    <div class="m-20">
        <table class="table">
            <thead class="bg-gray-50">
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Created At
                    </th>
                    <th>
                        option 1
                    </th>
                    <th>
                        option 2
                    </th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
                <tr v-for="user in users" :key="user.id">
                    <td>
                        {{ user.id }}
                    </td>
                    <td>
                        {{ user.name }}
                    </td>
                    <td>
                        {{ user.email }}
                    </td>
                    <td>
                        {{ user.created_at }}
                    </td>
                    <td>
                        <a class="p-2 rounded bg-red-500 text-white m-2" href="#">supprimer</a>
                    </td>
                    <td>
                        <a href="#" class="p-2 rounded bg-yellow-400 text-white m-2">modifier</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>