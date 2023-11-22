<template>
    <div class="bg-orange-500 p-3">
        <p class="text-lg m-7 text-white font-bold">
            Le titre du resto
        </p>
    </div>
    <div class="md:flex justify-evenly">
        <Model />     
    </div>
</template>

<script>
import Model from './Model.vue';
export default {
    name: "maison",

    components: {
        Model
    },
    methods: {
        
    }
}
</script>