<template>
    <div v-if="farmDocs">
      <div v-for="doc in farmDocs" :key="doc.id">
        <h1>{{ doc.title }}</h1>
        <p>{{ doc.description }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  

  
  export default defineComponent({
    name: 'YourComponent',
    props: ['farmDocs']
  });
  </script>
  
  <style  scoped>
  /* Your styles here */
  </style>
  