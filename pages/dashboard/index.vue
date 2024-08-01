
<template>
  <div v-if="error">Could not fetch the data</div>
     <div v-if="farmDocs">
      <FarmList :farmDocs="farmDocs" />

     </div>
</template>

<script setup>
import { getCollection } from '#imports';

const {error, documents: farmDocs} = getCollection("cawList")




  




</script>

<style scoped>

</style>