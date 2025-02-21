<script setup>
import Banner from './components/Banner.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>
<template>
  <Banner />
  <Navbar />
  <main class="py-3 px-4">
    <RouterView />
  </main>
  <Footer></Footer>
</template>