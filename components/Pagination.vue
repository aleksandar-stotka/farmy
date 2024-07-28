<template>
    <div class="flex justify-center mt-4">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 mx-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
      >
        Previous
      </button>
      <span class="px-4 py-2">{{ currentPage }} / {{ totalPages }}</span>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 mx-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
      >
        Next
      </button>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    nextPage: {
      type: Function,
      required: true
    },
    prevPage: {
      type: Function,
      required: true
    }
  });
  </script>
  
  <style scoped>
  /* Add any specific styles for your pagination component here */
  </style>
  