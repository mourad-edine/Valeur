<template>
    <div class="bg-orange-500 p-3 flex justify-between">
        <p class="text-lg m-7 text-white font-bold">
            Le titre du resto
        </p>
        <p @click="deconnect" class="border-orange-500 border-2 text-white p-2 rounded h-10 md:w-52 w-full cursor-pointer mt-4">
            se deconnecter
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
    data() {
        return {
            im: null
        }
    },

    mounted() {
        let user = localStorage.getItem('client_id')
        this.im = JSON.parse(user).id
        console.log(this.im)

        let use = localStorage.getItem('client_id')
        if (!use) {
            this.$router.push({ name: 'simple' })
        }
    },
    components: {
        Model
    },
    methods: {
        deconnect(){
            localStorage.clear()
            this.$router.push({name : 'simple'})
        },
    }
}
</script>