<template>
   
   <span class="text-dark p-5" v-if="user">
        <span>Hello</span> {{ user.displayName }}!!
      </span>
    <div v-if="farmDocs">
      <FarmList :farmDocs="farmDocs" />
    </div>
  </template>
  
  <script setup>
  import { getCollection } from '#imports';
  import { getUser } from '#imports';
  import { ref, onMounted } from 'vue';
  
  const displayNameFade = ref(true);
  const show = ref(true);
  
  
  
  const { user } = getUser();
  const { error, documents: farmDocs } = getCollection("cawList");
  </script>
  
  <style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
  
  h2 {
    transition: opacity 0.5s ease;
  }
  </style>
  