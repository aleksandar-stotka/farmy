
<template>
  <div v-if="error">Could not fetch the data</div>
  <div v-if="!user">
    <button @click="logout">logout</button>

  </div>
  <div v-else>
    <button @click="logout">logout</button>
   
    

  </div>
  
      
    <h2 class=" text-blue-950	p-2" v-if="user"> <span>Heloo</span> {{ user.displayName }}!</h2>
     <div v-if="farmDocs">
      <FarmList :farmDocs="farmDocs" />

     </div>
</template>

<script setup>
import { getCollection } from '#imports';
import {getUser} from '#imports';
import {useLogout} from '#imports';

const {user} = getUser()
const {logout} = useLogout()


const {error, documents: farmDocs} = getCollection("cawList")






  




</script>

<style scoped>

</style>