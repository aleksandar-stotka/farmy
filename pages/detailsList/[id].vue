<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <div v-if="error">{{ error }}</div>
        <div v-else-if="farmDoc">
          <h1 class="text-2xl font-bold">{{ farmDoc.title }}</h1>
          <p class="mt-4">{{ farmDoc.description }}</p>
          <span class="block mt-2 text-gray-600">Cow Number: {{ farmDoc.cowNum }}</span>
          <span class="block mt-2 text-gray-600">Date: {{ new Date(farmDoc.createdAt.seconds * 1000).toDateString() }}</span>
        </div>
        <div v-else>Loading...</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import getDocument from '~/composables/getDocument'; // Ensure correct path
  
  const route = useRoute();
  const { id } = route.params;
  
  const { document: farmDoc, error } = getDocument('cawList', id);
  </script>
  
  <style scoped>
  /* Additional scoped styles if needed */
  </style>
  