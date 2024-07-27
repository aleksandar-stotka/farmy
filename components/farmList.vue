<template>
    <div>
      <input type="text" v-model="searchTerm" placeholder="Search by title" />
    </div>
    <div v-if="farmDocs">
      <div v-for="doc in filterFarmDocs" :key="doc.id">
        <h1>{{ doc.title }}</h1>
        <p>{{ doc.description }}</p>
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
    return props.farmDocs.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  });
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  