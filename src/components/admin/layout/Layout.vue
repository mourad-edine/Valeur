<template>
    <header class="fixed top-0 w-full bg-white text-gray-800 z-10">
        <nav class="mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <router-Link to="/dashboard" class="flex-shrink-0">
                        <img class="h-12 w-12" src="../../../images/panier.png" alt="Workflow logo">
                    </router-Link>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <router-Link to="/dashboard"
                                class="px-3 py-2 rounded-md text-sm font-medium text-gray-900 bg-gray-100 hover:text-gray-900 hover:bg-gray-200">Accueil</router-Link>

                            <router-Link to="/dispo"
                                class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                produits dispo</router-Link>

                            <router-Link to="/listes"
                                class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">commandes</router-Link>

                        </div>
                    </div>
                </div>
                <div class="-mr-2 flex md:hidden">
                    <!----dropdown-->
                    <div class="relative" data-te-dropdown-ref>
                        <a class="flex items-center whitespace-nowrap rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-gray shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            href="#" type="button" id="dropdownMenuButton2" data-te-dropdown-toggle-ref
                            aria-expanded="false" data-te-ripple-init data-te-ripple-color="light">
                            <img src="../../../images/menu.png" alt="" class="w-8 h-8">
                        </a>
                        <ul class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                            aria-labelledby="dropdownMenuButton2" data-te-dropdown-menu-ref>
                            <li>
                                <router-Link
                                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-dark  active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                    to="/dashboard" data-te-dropdown-item-ref>Accueil</router-Link>
                            </li>
                            <li>
                                <router-Link
                                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-dark  active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                    to="/dispo" data-te-dropdown-item-ref>produit dispo</router-Link>
                            </li>
                            <li>
                                <router-Link
                                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-dark   active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                    to="/listes" data-te-dropdown-item-ref>commandes</router-Link>
                            </li>
                            <li>
                                <p
                                    class="cursor-pointer block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-dark   active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                    to="/" data-te-dropdown-item-ref>se deconnecter</p>
                            </li>

                        </ul>
                    </div>
                    <!----fin dropdown-->
                </div>
            </div>
        </nav>
    </header>
 <slot/>

</template>
<script setup>
name : 'Layout'
import { onMounted } from "vue";
import {
    Dropdown,
    Ripple,
    initTE,
} from "tw-elements";

onMounted(() => {
    initTE({
        Dropdown,
        Ripple
    });
});
</script>

<script>

</script>


