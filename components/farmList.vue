<template>
    <div>
      <input type="text" v-model="searchTerm" placeholder="Search by title or cow number" />
    </div>
    <div v-if="farmDocs">
      <div v-for="doc in filterFarmDocs" :key="doc.id">
        <h1>{{ doc.title }}</h1>
        <p>{{ doc.description }}</p>
        <span>{{ doc.cowNum }}</span>
      </div>
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
  /* Your styles here */
  </style>
  