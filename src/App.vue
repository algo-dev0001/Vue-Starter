<script setup lang="ts">
</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <nav class="bg-blue-500 p-4">
      <router-link to="/" class="text-white font-semibold px-4 py-2">Home</router-link>
      <router-link to="/create" class="text-white font-semibold px-4 py-2">Create</router-link>
    </nav>
    <div class="container mx-auto p-4">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
/* Custom styles if needed */
</style>
