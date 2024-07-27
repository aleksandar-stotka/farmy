<template>
    <div>
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Search by title or cow number"
        class="mb-4 p-2 border rounded"
      />
    </div>
    <div v-if="farmDocs">
      <table class="min-w-full bg-white border">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">Title</th>
            <th class="py-2 px-4 border-b">Description</th>
            <th class="py-2 px-4 border-b">Cow Number</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="doc in filterFarmDocs" :key="doc.id" class="hover:bg-gray-100">
            <td class="py-2 px-4 border-b">{{ doc.title }}</td>
            <td class="py-2 px-4 border-b">{{ doc.description }}</td>
            <td class="py-2 px-4 border-b">{{ doc.cowNum }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { defineProps, ref, computed } from 'vue';
  
  const props = defineProps({
    farmDocs: {
      type: Array,
      required: true,
      default: () => [],
    },
  });
  
  const searchTerm = ref('');
  
  const filterFarmDocs = computed(() => {
    return props.farmDocs.filter((item) => {
      const lowerCaseSearchTerm = searchTerm.value.toLowerCase();
      return (
        item.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.cowNum.toString().includes(lowerCaseSearchTerm)
      );
    });
  });
  </script>
  
  <style scoped>
  /* Additional scoped styles if needed */
  </style>
  