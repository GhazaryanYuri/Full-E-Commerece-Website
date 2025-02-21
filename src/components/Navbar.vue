<script setup>
import { ref, reactive } from 'vue';
import hearth from '@/components/icons/hearth.svg';
import cart from '@/components/icons/cart.svg';
import user from '@/components/icons/user.svg';

const title = ref('Exclusive');
const links = reactive([
    {
        linkName: 'Home',
        link: '/Full-E-Commerece-Website/home'
    },
    {
        linkName: 'Contact',
        link: '/Full-E-Commerece-Website/contact'
    },
    {
        linkName: 'About',
        link: '/Full-E-Commerece-Website/about'
    },
    {
        linkName: 'Sign Up',
        link: '/Full-E-Commerece-Website/sign-up'
    }
])
const icons = ref([hearth, cart, user])
</script>
<template>
    <div
        class="w-full min-h-7 flex justify-around items-center border-b-2 border-b-[#B3B3B3] py-4 max-md:flex-col gap-3">
        <h1 class="text-2xl font-bold text-black max-lg:hidden">{{ title }}</h1>
        <ul class="flex justify-center items-center gap-12 max-md:gap-0 max-md:w-full max-md:justify-around">
            <li v-for="(link, index) in links" :key="index">
                <RouterLink :to="link.link" class="text-base font-normal hover:opacity-75">{{ link.linkName }}
                </RouterLink>
            </li>
        </ul>
        <div class="flex justify-center items-center gap-6 max-md:w-full max-md:justify-around">
            <div class="w-auto h-auto relative">
                <input type="text" placeholder="Search here"
                    class="py-2.5 px-5 text-xs w-[243px] bg-[#F5F5F5] text-black rounded-[4px] shadow-lg pr-10 cursor-pointer focus:outline-none focus:ring-0 max-sm:w-[140px]">
                <button class="w-6 h-6 cursor-pointer absolute right-3 top-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </div>
            <ul class="flex gap-4">
                <li v-for="(icon, index) in icons" :key="index">
                    <img :src="icon" :alt="index" class="w-8 h-8 cursor-pointer">
                </li>
            </ul>
        </div>
    </div>
</template>