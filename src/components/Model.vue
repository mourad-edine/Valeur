<template>
    <button type="button" class="bg-yellow-500 text-white p-2 m-4 rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
        voir le menue
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">listes des recettes</h5>
                    
                    <div class="flex">
                        <img src="../images/panier.png" alt="" class="w-12 h-12">
                        <h1 class=" text-rose-600 text-lg font-bold">{{ compter }}</h1>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
                </div>
                <div class="modal-body">
                    <div class="grid grid-cols-2">
                        <div v-for="item in produits" data-bs-toggle="modal" data-bs-target="#supplement"
                            class="cursor-pointer hover:bg-slate-200 p-2 rounded" v-on:click="afficher(item.nom_produit)">
                            <div>
                                <img src="../images/tacos.jpg" alt="" class="w-16 h-16">
                                <div class="m-2">
                                    <span class="text-semibold m-2 text-gray-700">{{ item.nom_produit }}</span>
                                    <span class="text-gray-400">prix :{{ item.prix }} $</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="bg-rose-500 p-2" data-bs-dismiss="modal">annuler
                        commmande</button>
                    <button type="button" class="bg-green-500 p-2">enregistrer comande</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import pro from '../db.json'
export default {
    name: 'Model',
    data() {
        return {
            produits: pro
        }
    },

    methods : {
        afficher(nom){
            console.log(nom)
        }
    },
    props : ['compter']
}
</script>