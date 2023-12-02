<script>
import Swal from 'sweetalert2';
import axios from 'axios';
import Layout2 from './Layout/Layout2.vue';
export default {
    data() {
        return {
            users: [],
            im: null
        };
    },
    methods: {
        async fetchData() {
            let user = localStorage.getItem('client_id')
            this.im = JSON.parse(user).id
            await axios.get(`http://127.0.0.1:8000/api/perso/${this.im}`)
                .then((response) => {
                    this.users = response.data.utilisateur;
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des données:', error);
                });
        },

        async supprimer(id) {
            let url = `http://127.0.0.1:8000/api/deletecom/${id}`;
            await axios.delete(url)
                .then(reponse => {
                    console.log(reponse);
                });
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'reussi',
                showConfirmButton: false,
                timer: 1000
            });
            this.fetchData();
        },

        async modifier(id) {
            let url = `http://127.0.0.1:8000/api/modifier/${id}`;
            await axios.post(url)
                .then(reponse => {
                    console.log(reponse);
                });
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'choix enregistré',
                showConfirmButton: false,
                timer: 500
            });
            this.fetchData();
        },

        
    },
    mounted() {
        this.fetchData();

    },
    components: { Layout2 }
}

</script>
<template>
    <Layout2>
        <div class="sm:m-20" style="margin-top: 100px;">
            <div class="flex justify-around">
                <a class="btn btn-info text-white">
                    liste de vos commandes
                </a>
                <p></p>
            </div>

            <div class="flex justify-center m-5">
                <table class="table" style="width: 790px;">
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
                                <a @click="modifier(user.id)" v-if="user.choix == 'prendre'" class="p-1 bg-green-500 text-white rounded-lg mb-1 cursor-pointer">
                                    à livrer
                                </a>
                                <a @click="modifier(user.id)" v-else class="p-1 bg-green-500 text-white rounded-lg mb-1 cursor-pointer">
                                    à prendre
                                </a>
                            </td>
                            <td>
                                <a @click="supprimer(user.id)" href="#"
                                    class="p-1 rounded bg-yellow-400 text-white m-2">retirer</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Layout2>
</template>


