<template>
<Layout2>
  <div style="margin-top: 200px;">
    <div class="bg-gray-50 rounded p-3">
      <div class="flex sm:justify-evenly justify-start">
        <!------>
      </div>
      <div class="md:flex justify-center">
        <div class="md:flex bg-gray-100 rounded mr-4">
          <div class="m-2 mt-0">
            <p class="font-semibold text-lg opacity-80 m-1 mt">nom du plats : <span class="font-light">
                {{ choix }}</span></p>
            <p class="font-semibold text-lg opacity-80 m-1">prix : <span class="font-light">
                {{ price }} $ </span></p>
            <p class="text-lg m-1">supplements</p>
            <hr class="m-2">
            <div class="form-check" v-for="(test, ind) in informe" :key="ind">
              <input class="form-check-input" type="checkbox" :value="test.prix" :id="'test.nom_supplement' + ind"
                v-model="suppl">

              <label class="form-check-label" :for="'test.nom_supplement' + ind">
                {{ test.nom_supplement }} - {{ test.prix }} $
              </label>
            </div>
          </div>

          <!--------->
        </div>

        <div class="m-1 mr-3">
          <h1 class="text-lg">choix de la sauce</h1>
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
          <img src="../../images/plus.png" alt="" width="40" height="40" class="m-1 cursor-pointer" @click="augmenter">
          <img src="../../images/moins.png" alt="" width="40" height="40" class="m-1 cursor-pointer" @click="abaisser">
        </div>

        <div class="">
          <label class="p-2 bg-orange-500 text-white rounded m-1 sm:m-3"> total : {{ ((parseInt(price) + sommesupp + somme
            +
            sum) *
            nombre).toFixed(2) }}
            $</label>
          <button type="button" class="md:m-4 p-2 bg-orange-500 text-white rounded w-60 m-1 sm:m-3"
            @click="Panier">ajouter au
            panier
          </button>
        </div>
      </div>
    </div>

  </div>
</Layout2>
</template>


<script>
import axios from 'axios'
import Swal from 'sweetalert2';
import dessert from '../../dessert.json'
import sauce from '../../sauce.json'
import { defineComponent } from 'vue';
import Layout2 from './Layout/Layout2.vue';
export default defineComponent({
  name: 'information',

  components: {
    Layout2
},
  data() {
    return {
      im: null,
      sommesupp: 0,
      suppl: [],
      choix: '',
      nombre: 1,
      price: "",
      comp: [],
      somme: 0,
      sauces: sauce,
      desserts: dessert,
      desserty: [],
      sum: 0,
      informe: {

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

    async Obtenir(id) {
      let url = `http://127.0.0.1:8000/api/avoir/${id}`
      await axios.get(url)
        .then(reponse => {
          //console.log(reponse.data.produit)
          this.price = reponse.data.prix
          this.choix = reponse.data.nom_test
          this.informe = reponse.data.supplements
          console.log(reponse.data)
        })
    },

    async Panier() {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'commande ajoouté',
        showConfirmButton: false,
        timer: 500
      })
      const form = new FormData()
      form.append('designation', this.choix)
      form.append('nombre', this.nombre)
      form.append('prix_unitaire', this.price)
      form.append('total', ((parseFloat(this.price) + this.sommesupp + this.somme + this.sum) * this.nombre).toFixed(2))
      form.append('client_id', this.im)
      await axios.post('http://127.0.0.1:8000/api/enregistrement', form)
        .then(reponse => {
          console.log(reponse)
        })
      this.$router.push({ name: 'home' });

    },

    naviguer() {
      this.$router.push({ name: 'home' });
    },

  },

  mounted() {
    let user = localStorage.getItem('client_id')
    this.im = JSON.parse(user).id


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
    },
    suppl: function () {
      var tableau = []
      tableau = this.suppl.map((str) => parseInt(str))
      this.sommesupp = tableau.reduce((accumuler, valeuractu) => accumuler + valeuractu, 0)
    }
  }
})
</script>