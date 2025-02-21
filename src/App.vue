<script setup>
import Banner from './components/Banner.vue';
import Navbar from './components/Navbar.vue';
</script>
<template>
  <Banner />
  <Navbar />
  <main>
    <RouterView />
  </main>
</template>