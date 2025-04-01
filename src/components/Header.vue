<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto flex justify-between items-center p-4">
      <h1 class="text-xl font-bold">Brand</h1>
      <nav class="hidden md:flex space-x-6">
        <a href="#" class="hover:text-blue-500">Home</a>
        <a href="#" class="hover:text-blue-500">Features</a>
        <a href="#" class="hover:text-blue-500">Testimonials</a>
        <a href="#" class="hover:text-blue-500">Contact</a>
      </nav>
      <button @click="isOpen = !isOpen" class="md:hidden">
        ☰
      </button>
    </div>
    <div v-if="isOpen" class="md:hidden p-4 space-y-2 bg-gray-100">
      <a href="#" class="block">Home</a>
      <a href="#" class="block">Features</a>
      <a href="#" class="block">Testimonials</a>
      <a href="#" class="block">Contact</a>
    </div>
  </header>
</template>
