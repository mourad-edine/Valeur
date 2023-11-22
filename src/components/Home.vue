<template>
    <div class="bg-orange-500 p-3">
        <p class="text-lg m-7 text-white font-bold">
            Le titre du resto
        </p>
    </div>
    <div class="flex justify-evenly">
        <ModelSup />
        <div>
            <p class="bg-orange-500 text-white p-2 rounded h-10 w-52 cursor-pointer mt-4" @click="naviguer">liste des
                commandes
            </p>
        </div>
    </div>
</template>

<script>
import ModelSup from './ModelSup.vue';
export default {
    name: "maison",

    components: {
        ModelSup
    },
    methods: {
        naviguer() {
            this.$router.push({ name: 'liste' });
        }
    }
}
</script>