import { getCollection } from '#imports';
<template>
  <div v-if="error">Could not fetch the data</div>
    <div v-if="documents">
      <div v-for="doc in documents" :key="doc.id">
        <h1>{{ doc.title }}</h1>
      </div>
      
     </div>
</template>

<script setup>
import { getCollection } from '#imports';

const {error, documents} = getCollection("cawList")




  




</script>

<style lang="scss" scoped>

</style>