<template>
    <button type="button" class="p-2 bg-blue-500 rounded text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
        ajouter supplements
      </button>
      
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">ajouter supplement</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input type="text" placeholder="nom supplement" class="form-control m-2">
              <input type="text" placeholder="prix" class="form-control m-2">
            </div>
            <div class="modal-footer">
              <button type="button" class="p-2 bg-orange-500 rounded text-white"  data-bs-dismiss="modal">annuler</button>
              <button type="button"  class="p-2 bg-blue-500 rounded text-white" >ajouter</button>
            </div>
          </div>
        </div>
      </div>
    </template>
    
    <script>
    export default{
        name : 'Modalsupplement'
    }
    </script>