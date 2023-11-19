<template>
    <div>
        <div class="bg-orange-500 p-3">
            <p class="text-lg m-7 text-white font-bold">
                reglement payement
            </p>
        </div>
        <hr>
        <div class="flex justify-evenly mt-5">
            <div>
                <h1 class="mt-3 mb-3 m-3 text-lg">liste de vos commandes</h1>
                <table class="table longueur font-semibold">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">nom du recette</th>
                            <th scope="col">prix</th>
                            <th scope="col">quantité</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>tiramisu</td>
                            <td>200$</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="mt-5" @click="naviguer">
                <p class="bg-orange-500 p-2 rounded cursor-pointer mr-3">retour</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Command',
    methods : {
        naviguer() {
            this.$router.push({ name: 'home' });
        }
    }
}
</script>

<style>
.longueur {
    width: 500px;
}
</style>