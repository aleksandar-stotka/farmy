<template>
  
    <div class="container flex justify-center items-center min-h-screen">
      <div class="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
        <nuxt-link to="/dashboard">
          <button class="px-8 py-4 bg-blue-500 text-white text-xl rounded hover:bg-blue-600">DASHBOARD</button>
        </nuxt-link>
        <nuxt-link to="/create">
          <button class="px-8 py-4 bg-green-500 text-white text-xl rounded hover:bg-green-600">CREATE</button>
        </nuxt-link>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  </style>
  