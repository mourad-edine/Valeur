<template>
    <Layout>
        <div class="main_content" style="margin-top: 100px;">
            <div class="info">
                <div class="flex justify-around">
                    <h1 class="text-lg font-semibold opacity-70">
                        page d'accueil
                    </h1>
                </div>
                <div class="">
                    <div class="sm:grid grid-cols-3 ml-20 mr-20">
                        <div>
                            <div class="p-5 mt-5 ml-2 mr-2 mb-3 rounded bg-yellow-500">
                                <a href="" class="text-white">categorie</a>
                            </div>
                        </div>

                        <div>
                            <div class="p-5 mt-5 ml-2 mr-2 mb-3 rounded bg-green-500">
                                <a href="" class="text-white">Produits</a>
                            </div>
                        </div>

                        <div>
                            <div class="p-5 mt-5 ml-2 mr-2 mb-3 rounded bg-red-500">
                                <a href="" class="text-white">Client</a>
                            </div>
                        </div>

                        <div>
                            <div class="p-5 mt-5 ml-2 mr-2 mb-3 rounded bg-gray-400">
                                <a href="" class="text-white">employé</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </Layout>
</template>
<script>
import Layout from './layout/Layout.vue';
export default {
    name: 'Dashboard',
    components: { Layout }
}
</script>