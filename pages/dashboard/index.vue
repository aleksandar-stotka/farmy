<template>
   
   <span class="text-dark p-5" v-if="user">
        <span>Hello</span> {{ user.displayName }}!!
      </span>
      <p v-if="error">{{ error.value }}</p>
    <div v-if="farmDocs">
      <FarmList :farmDocs="farmDocs" />
    </div>
  </template>
  
  <script setup>
  import { getCollection } from '#imports';
  import { getUser } from '#imports';
  
  
  
  
  
  const { user } = getUser();
  const { error, documents: farmDocs } = getCollection("cawList");
  </script>
  
  <style scoped>
 
  </style>
  