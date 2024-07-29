
<template>
  <div v-if="error">Could not fetch the data</div>
     <FarmList :farmDocs="farmDocs" />
</template>

<script setup>
import { getCollection } from '#imports';

const {error, documents: farmDocs} = getCollection("cawList")
 definePageMeta({
  middleware:'redirect'

 })



  




</script>

<style lang="scss" scoped>

</style>