<template>
  <Model :compter=compter />
  <div class="modal fade" id="supplement" data-bs-backdrop="static" data-bs-keyboard="false"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Ajouter supplement</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">x</button>
        </div>
        <div class="modal-body">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="pain">
            <label class="form-check-label " for="pain">
              pain
            </label>
          </div>


          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="salade">
            <label class="form-check-label" for="salade">
              salade
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="mayo">
            <label class="form-check-label" for="mayo">
              mayonnaise
            </label>
          </div>
          <hr>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="piment">
            <label class="form-check-label" for="piment">
              piment
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="ketchup" placeholder="1">
            <label class="form-check-label" for="ketchup">
              ketchup
            </label>
          </div>
        </div>
        <div class="modal-footer">

          <div class="flex">
            <input type="number" name="" id="" class="form-control h-12 w-20" placeholder="1">
            <button type="button" class="bg-orange-500 p-2" data-bs-dismiss="modal" @click="confirmer">Ajouter au
              panier</button>
            <button type="button" class="bg-red-500 p-2 ml-1" data-bs-dismiss="modal">annuler</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Model from './Model.vue'
import Swal from 'sweetalert2'
export default {
  name: 'ModelSup',

  data(){
    return{
      compter : 0
    }
  },
  methods: {
    confirmer() {
      this.compter++
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'commande ajputé au panier',
        showConfirmButton: false,
        timer: 1000
      })
    }
    
  },
  components : {
    Model
  }
}
</script>