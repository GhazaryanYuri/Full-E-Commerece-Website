<script setup>
import { ref } from 'vue';

const title = ref('Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!');
const link = ref('ShopNow');
const languages = ref(['English', 'Russian', 'Armenian']);
</script>
<template>
    <div
        class="w-full min-h-12 bg-black flex justify-center items-center relative max-lg:justify-between max-md:gap-3 max-lg:px-6">
        <h1 class="text-[#fafafa] font-normal max-lg:text-sm max-sm:text-[12px]">
            {{ title }}
            <a href="#" class="underline underline-offset-2 font-semibold">{{ link }}</a>
        </h1>
        <select name="languages" id="language"
            class="absolute right-12 top-1/4 bg-transparent text-[#fafafa] focus:outline-none focus:ring-0 flex justify-center items-center max-lg:relative max-lg:top-0 max-lg:right-0">
            <option :value="language" v-for="language in languages" :key="language" class="text-black">
                {{ language }}
            </option>
        </select>
    </div>
</template>