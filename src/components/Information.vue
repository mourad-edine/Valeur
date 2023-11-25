<template>
  <div class="bg-orange-500 p-3 flex justify-between">
    <p class="text-lg m-7 text-white font-bold ml-13">
      customiser votre plat
    </p>
    <div class="flex mt-4 mr-2  justify-end">
      <img src="../images/panier.png" alt="" class="sm:w-10 sm:h-10 h-10 w-full">
      <h1 class=" text-rose-600 text-lg font-bold">{{ local }}</h1>
    </div>
  </div>
  <div>
    <div class="md:flex justify-evenly">

      <p class="text-lg font-light mt-3 ml-5 cursor-pointer ">
        Déscription du plats
      </p>
      <hr class="m-2">
      <div>
        <p class="bg-orange-500 text-white p-2 rounded h-10 md:w-52 w-full cursor-pointer mt-4" @click="naviguer">
          retour au listes
        </p>
      </div>
    </div>

    <div class="bg-gray-50 rounded p-3">
      <div class="flex sm:justify-evenly justify-start">
        <!------>
      </div>
      <div class="md:flex justify-center">
        <div class="md:flex bg-gray-100 rounded mr-4">
          <div class="m-2 mt-0">
            <p class="font-semibold text-lg opacity-80 m-1 mt">nom du plats : <span class="font-light">
              {{ informe.nom }}</span></p>
            <p class="font-semibold text-lg opacity-80 m-1">prix : <span class="font-light">
              {{ informe.prix }} $ </span></p>
            <p class="font-semibold text-lg opacity-80 m-1 w-60">description : <span class="font-thin text-md"> {{informe.description}}</span></p>
          </div>

          <!--------->
        </div>

        <div class="m-1 mr-3">
          <h1 class="text-lg">supplements</h1>
          <hr class="mt-2 mb-3">

          <div class="form-check" v-for="(val, index) in sauces" :key="index">
            <input class="form-check-input" type="checkbox" :value="val.prix" :id="index" v-model="comp">

            <label class="form-check-label" :for="index">
              {{ val.sauce_name }} - {{ val.prix }} $
            </label>
          </div>
          <div class="m-1 mr-3">
            <h1 class="text-lg">dessert</h1>
            <hr class="mt-2 mb-3">

            <div class="form-check" v-for="(dess, i) in desserts" :key="i">
              <input class="form-check-input" type="checkbox" :value="dess.prix" :id="'check-' + i" v-model="desserty">

              <label class="form-check-label" :for="'check-' + i">
                {{ dess.dessert_name }} - {{ dess.prix }}$
              </label>
            </div>
          </div>
          <hr class="mt-2 mb-2">
          <div>
            <!----<h1 class="font-bold">{{ somme + sum }} $</h1>--->
          </div>
        </div>

      </div>
      <div class="md:flex justify-center mt-4">
        <div class="flex pb-2 md:pb-18 mr-6 lg:pb-18 xl:pb-18">
          <input type="text" class="p-2 rounded form-control m-1 border-2 border-gray-950 w-12" placeholder="1" min="1"
            max="40" v-model="nombre">
          <img src="../images/plus.png" alt="" width="40" height="40" class="m-1 cursor-pointer" @click="augmenter">
          <img src="../images/moins.png" alt="" width="40" height="40" class="m-1 cursor-pointer" @click="abaisser">
        </div>

        <div class="">
          <label class="p-2 bg-orange-500 text-white rounded m-1 sm:m-3"> total : {{ ((parseFloat(informe.prix) + somme + sum) *
            nombre).toFixed(2) }}
            $</label>
          <button type="button" class="md:m-4 p-2 bg-orange-500 text-white rounded w-60 m-1 sm:m-3"
            @click="calculer">ajouter au
            panier
          </button>
        </div>
      </div>
    </div>

    <Tooter />
  </div>
</template>


<script>
import axios from 'axios'
import Tooter from './footer.vue';
import Swal from 'sweetalert2';
import dessert from '../dessert.json'
import sauce from '../sauce.json'
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'information',

  components: {
    Tooter
  },
  data() {
    return {
      nombre: 1,
      price: 0,
      command: 0,
      comp: [],
      somme: 0,
      sauces: sauce,
      desserts: dessert,
      desserty: [],
      sum: 0,
      local: 0,
      informe : {
        
      }
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
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'commande ajoouté',
        showConfirmButton: false,
        timer: 500
      })
      this.command++



    },

    async Obtenir(id){
      let url = `http://127.0.0.1:8000/api/produits/${id}`
        await axios.get(url)
        .then(reponse =>{
          console.log(reponse.data.produit)
          this.informe = reponse.data.produit
        })
    },

    naviguer() {
      this.$router.push({ name: 'home' });
    },

  },

  mounted() {
    this.$nextTick(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    this.Obtenir(this.$route.params.id)
  },
  watch: {
    comp: function () {
      var tab = []
      tab = this.comp.map((str) => parseInt(str))
      this.somme = tab.reduce((accumuler, valeuractu) => accumuler + valeuractu, 0)
    },
    desserty: function () {
      var tableau = []
      tableau = this.desserty.map((str) => parseInt(str))
      this.sum = tableau.reduce((accumuler, valeuractu) => accumuler + valeuractu, 0)
    }
  }
})
</script>