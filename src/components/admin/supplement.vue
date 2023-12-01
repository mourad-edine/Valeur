<script>
import Swal from 'sweetalert2'
import Layout from './layout/Layout.vue'
import axios from 'axios'

export default {
    name: 'supplement',

    components: {
        Layout,

    },
    data() {
        return {
            anarana: '',
            price: '',
            nomprod: "",

            valide: {

            }
        }
    },
    methods: {
        async Obtenir(id) {
            this.prod_id = id
            let url = `http://127.0.0.1:8000/api/avoir/${id}`
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

        async ajouter() {
            const form = new FormData()
            form.append('nom', this.anarana)
            form.append('prix', this.price)
            form.append('categorie_id', this.$route.params.id)

            if (this.anarana == '' || this.price == '') {
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: 'vous devez tout completer',
                    showConfirmButton: false,
                    timer: 1500
                })

            } else {
                await axios.post('http://127.0.0.1:8000/api/addsup', form)
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

                this.Obtenir(this.$route.params.id)
            }

        },

        async supprimer(id) {
            let url = `http://127.0.0.1:8000/api/deletesup/${id}`
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

            this.$router.push({name : 'dispo'})
        }



    },

    mounted() {
        this.Obtenir(this.$route.params.id)
    },
}
</script>

<template>
    <Layout>
        <div class="main_content" style="margin-top: 100px;">
                <div>
                    <div class="flex justify-around">
                        <h1 class="text-xl">
                        </h1>
                        <!---modal-->
                        <p class="p-2 bg-blue-500 rounded text-white cursor-pointer" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            ajouter supplement
                        </p>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">ajouter sous-categorie</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <input type="text" placeholder="nom sous-categorie" class="form-control  m-2"
                                            v-model="anarana" required>
                                        <input type="text" placeholder="prix" class="form-control  m-2" v-model="price"
                                            required>
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

                    </div>
                    <div class="m-10 flex justify-center">
                        <table class="table" style="width: 700px;">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">nom supplement</th>
                                    <th scope="col">prix</th>
                                    <th scope="col">date de creation</th>
                                    <th>option</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in valide">
                                    <th scope="row">{{ item.id }}</th>
                                    <td>{{ item.nom_supplement }}</td>
                                    <td>{{ item.prix }} $</td>
                                    <td>{{ item.created_at }}</td>
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