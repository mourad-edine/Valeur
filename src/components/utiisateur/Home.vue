<template>
        <Model />
</template>

<script>
import Model from './Model.vue';
export default {
    name: "maison",
    data() {
        return {

        }
    },

    mounted() {
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