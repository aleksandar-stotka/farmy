<template>
    <div>
   <form @submit.prevent="handleSubmit" action="">
    <input type="text" placeholder="name" v-model="title">
    <input type="text" placeholder="description" v-model="description">
    <input type="number" placeholder="number" v-model="cowNum">
    <button>submit</button>
   </form>
    </div>
</template>

<script setup>
import { useCollection } from '#imports';
const {addDocument} = useCollection('cawList')

  const title = ref('')
  const description = ref('')
  const cowNum = ref('')

  


 const handleSubmit = async () => {
      await addDocument({
        title: title.value,
        description:description.value
      })
 }


</script>

<style lang="scss" scoped>

</style>