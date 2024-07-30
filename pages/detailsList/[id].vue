<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <div v-if="error">{{ error }}</div>
        <div v-else-if="farmDoc">
          <h1 class="text-2xl font-bold">{{ farmDoc.title }}</h1>
          <p class="mt-4">{{ farmDoc.description }}</p>
          <span class="block mt-2 text-gray-600">Cow Number: {{ farmDoc.cowNum }}</span>
          <span class="block mt-2 text-gray-600">Date: {{ new Date(farmDoc.dateBorn.seconds * 1000).toDateString() }}</span>
          <button @click="handleDelete" class="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Delete</button>
        </div>
        <div v-else>Loading...</div>
      </div>
      <div class="fixed bottom-4 right-4">
        <button @click="showModal = true" class="bg-blue-500 text-white py-2 px-4 rounded">
          Open Modal
        </button>
      </div>
      <Modal v-if="showModal" @close="showModal = false" :farmDoc="farmDoc" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import useDocument from '~/composables/useDocument'; // Ensure correct path
  import Modal from "@/components/Modal.vue";  
  
  const route = useRoute();
  const router = useRouter();
  const { id } = route.params;
  const showModal = ref(false);
  
  const { document: farmDoc, error, deleteDocument } = useDocument('cawList', id);
  
  const handleDelete = async () => {
    await deleteDocument();
    router.replace('/dashboard');
  };
  </script>
  
  <style scoped>
  /* Additional scoped styles if needed */
  </style>
  