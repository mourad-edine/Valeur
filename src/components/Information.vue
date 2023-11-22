<template>
  <div class="bg-orange-500 p-3">
    <p class="text-lg m-7 text-white font-bold">
      customiser votre plat
    </p>
  </div>
  <div>
    <div class="md:flex justify-evenly">

      <p class="text-lg font-light m-3">
        Details du plats
      </p>
    </div>

    <div class="bg-gray-50 rounded p-3">

      <div class="md:flex justify-evenly">
        <div class="md:flex bg-gray-100 rounded ml-4">
          <img src="../images/food.png" alt="" width="180" height="200" class="rounded overflow-hidden">
          <div>
            <p class="text-semibold text-lg opacity-80 m-5">nom du plats : <span class="font-semibold">{{
              selectionner.nom_produit
            }}</span></p>
            <p class="text-semibold text-lg opacity-80 m-5">prix : <span class="font-semibold">{{ selectionner.prix
            }}</span></p>
          </div>
        </div>

        <div class="m-1 mr-3">
          <h1 class="text-lg">supplements</h1>
          <hr class="mt-2 mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="pain">
            <label class="form-check-label" for="pain">
              pain
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="paella">
            <label class="form-check-label" for="paella">
              paella
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="ketchup">
            <label class="form-check-label" for="ketchup">
              ketchup
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="moutarde">
            <label class="form-check-label" for="moutarde">
              moutarde
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="mayonaise">
            <label class="form-check-label" for="mayonaise">
              mayonaise
            </label>
          </div>
        </div>

      </div>
      <div class="flex justify-evenly mt-4">
        <div class="flex pb-16 pt-3 mr-6">
          <input type="number" class="p-2 rounded form-control m-1 border-2 border-gray-950" placeholder="1" min="1"
            max="40" v-model="nombre">
          <img src="../images/plus.png" alt="" width="40" height="40" class="m-1 cursor-pointer" @click="augmenter">
          <img src="../images/moins.png" alt="" width="40" height="40" class="m-1 cursor-pointer" @click="abaisser">
        </div>
        <div class="">
          <label class="p-2 bg-orange-500 text-white rounded">{{ selectionner.prix }} $</label>
          <button type="button" class="m-4 p-2 bg-orange-500 text-white rounded w-60 " @click="calculer">ajouter au
            panier
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import pro from '../db.json'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const selectionner = computed(() => {
  return pro.find((item) => item.id === Number(route.params.id))
})



</script>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'information',

  data() {
    return {
      nombre: 1,
      price: 0
    }
  },
  methods: {
    augmenter() {
      if (this.nombre == 40) {
        this.nombre = 40
      } else {
        this.nombre++
      }
    },
    abaisser() {
      if (this.nombre == 1) {
        this.nombre = 1
      } else {
        this.nombre--
      }
    },

    calculer() {
      this.price = this.nombre * selectionner.prix
    }
  }
})
</script>