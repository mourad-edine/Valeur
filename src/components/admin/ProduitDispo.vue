<template>
    <Layout>
        <div class="main_content" style="margin-top: 100px;">
                <div>
                    <div class="flex justify-around">
                        <h1 class="text-2xl">
                        </h1>
                        <!-----modal------->
                        <p class="p-2 bg-blue-500 rounded text-white cursor-pointer" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            ajouter categorie
                        </p>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">ajouter categorie</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <input type="text" placeholder="nom categorie" class="form-control"
                                            v-model="anarana" required>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="p-2 bg-orange-500 rounded text-white"
                                            data-bs-dismiss="modal">annuler</button>
                                        <button type="button" class="p-2 bg-blue-500 rounded text-white"
                                            data-bs-dismiss="modal" @click="ajouter">ajouter</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-----fin modal-->
                    </div>
                    <hr class="m-2">
                    <div class="m-10 flex justify-center">
                        <table class="table" style="width: 700px;">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">nom produits</th>
                                    <th scope="col">description</th>
                                    <th scope="col">date de creation</th>
                                    <th>
                                        option 1
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in produits">
                                    <th scope="row">{{ item.id }}</th>
                                    <td>{{ item.nom }}</td>
                                    <td>{{ item.created_at }}</td>
                                    <td>
                                        <p class="text-info cursor-pointer" @click="informationId(item.id)">sous-categories
                                        </p>
                                    </td>
                                    <td>
                                        <p @click="supprimer(item.id)" class="text-danger cursor-pointer">supprimer</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </Layout>
</template>

<script>
import Swal from 'sweetalert2';
import Layout from './layout/Layout.vue';
import axios from 'axios'

export default {
    name: 'dispo',

    components: {
        Layout,
    },
    data() {
        return {
            produits: [],
            anarana: ''
        }
    },

    methods: {
        naviguer() {
            this.$router.push({ name: 'liste' });
        },

        informationId(id) {
            this.$router.push({ name: 'sousproduit', params: { id } });
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

        async ajouter() {
            const form = new FormData()
            form.append('nom', this.anarana)
            if (this.anarana == '') {
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: 'vous devez tout completer',
                    showConfirmButton: false,
                    timer: 1500
                })

            } else {
                await axios.post('http://127.0.0.1:8000/api/ajoutprod', form)
                    .then(reponse => {
                        console.log(reponse)
                    })

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'ajout reussi',
                    showConfirmButton: false,
                    timer: 1000
                })

                this.Prod()
            }

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

        async supprimer(id) {
            let url = `http://127.0.0.1:8000/api/deleteprod/${id}`
           await axios.delete(url)
                .then(reponse => {
                    console.log(reponse)
                })

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'ajout reussi',
                showConfirmButton: false,
                timer: 1000
            })

            this.Prod()
        }

    },


    mounted() {
        this.Prod();
        
    },
}
</script>