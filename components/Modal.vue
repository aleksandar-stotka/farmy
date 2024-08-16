<template>
  <div class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
    <div class="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
      <button @click="emit('close')" class="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Име</label>
          <input type="text" v-model="form.title" placeholder="Enter name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Телење</label>
          <input type="date" v-model="form.dateCalving" placeholder="Select date" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Водење</label>
          <input type="text" v-model="form.description" placeholder="Enter description" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Забелешки</label>
          <textarea v-model="form.notes" placeholder="notes" rows="4" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Стелна</label>
          <input type="date" v-model="form.dateBorn" placeholder="Select date" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div>
          <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            ВНЕСИ 
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import useDocument from '~/composables/useDocument'; // Ensure correct path

const props = defineProps({
  farmDoc: {
    type: Object,
    required: true
  }
});
const emit = defineEmits(['close']);

const form = ref({
  title: '',
  description: '',
  cowNum: '',
  dateBorn: '',
  dateCalving:'',
  notes: ''
});

// Convert Firestore timestamp to YYYY-MM-DD format for date input
const formatDate = (timestamp) => {
  if (!timestamp || !timestamp.seconds) return '';
  const date = new Date(timestamp.seconds * 1000);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

watchEffect(() => {
  if (props.farmDoc) {
    form.value = {
      title: props.farmDoc.title,
      description: props.farmDoc.description,
      cowNum: props.farmDoc.cowNum,
      dateBorn: formatDate(props.farmDoc.dateBorn), // Format the date for the input field
      dateCalving: formatDate(props.farmDoc.dateCalving), // Format the date for the input field
      notes: props.farmDoc.notes
    };
  }
});

const handleSubmit = async () => {
  const { updateDocument } = useDocument('cawList', props.farmDoc.id);
  const updatedData = {
    ...form.value,
    dateBorn: new Date(form.value.dateBorn), // Convert to Date object
    dateCalving: new Date(form.value.dateCalving) // Convert to Date object
  };
  await updateDocument(updatedData);
  emit('close'); // Close the modal after update
};
</script>

<style scoped>
/* Additional scoped styles if needed */
</style>
