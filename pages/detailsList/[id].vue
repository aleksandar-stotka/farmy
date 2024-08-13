<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="absolute top-4 left-4">
    </div>
    <div class="bg-white p-10 rounded-lg shadow-md text-center w-full max-w-2xl">
      <div v-if="error">{{ error }}</div>
      <div v-else-if="farmDoc">
        <h1 class="text-3xl font- truncate overflow-hidden">{{ farmDoc.title }}</h1>
        
        <span class="block mt-4 text-gray-600 text-lg">Телење: {{ formatDate(farmDoc.datecCalving.seconds) }}</span>
        <p class="mt-6 text-lg">Водење: {{ farmDoc.description }}</p>
        <span class="block mt-4 text-gray-600 text-lg">Стелна: {{ formatDate(farmDoc.dateBorn.seconds) }}</span>
        <p>Забелешки: {{ farmDoc.notes }}</p>
        <button v-if="user" @click="handleDelete" class="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700">Избриши</button>
      </div>
      <div class="loading" v-else>Loading...</div>
      
      <div v-if="user" class="mt-6">
        <button @click="showModal = true" class="bg-blue-500 text-white py-2 px-4 rounded">
          ИЗМЕНИ
        </button>
      </div>
    </div>
    
    <Modal v-if="showModal" @close="showModal = false" :farmDoc="farmDoc" />
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useDocument from '~/composables/useDocument'; // Ensure correct path
import Modal from "@/components/Modal.vue";
import { getUser } from '#imports';

const route = useRoute();
const router = useRouter();
const { id } = route.params;
const showModal = ref(false);

const { document: farmDoc, error, deleteDocument } = useDocument('cawList', id);
const {user} = getUser()


const handleDelete = async () => {
  await deleteDocument();
  router.replace('/dashboard');
};

// Format date function
const formatDate = (seconds) => {
  const date = new Date(seconds * 1000);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};
</script>

<style scoped>
/* Additional scoped styles if needed */
</style>
