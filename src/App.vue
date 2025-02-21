<script setup>
import Banner from './components/Banner.vue';
import Navbar from './components/Navbar.vue';
</script>
<template>
  <Banner />
  <Navbar />
  <main class="py-3 px-4">
    <RouterView />
  </main>
</template>