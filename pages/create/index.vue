<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" v-model="title" placeholder="Enter name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Description</label>
            <input type="text" v-model="description" placeholder="Enter description" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Number</label>
            <input type="number" v-model="cowNum" placeholder="Enter number" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Date</label>
            <input type="date" v-model="dateBorn" placeholder="Select date" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>

<script setup>
import { ref } from 'vue';
import { useCollection } from '#imports';
import { Timestamp } from '@/firebase/config';

const router = useRouter()

const { addDocument } = useCollection('cawList');

const title = ref('');
const description = ref('');
const cowNum = ref('');
const dateBorn = ref('');

const handleSubmit = async () => {
    await addDocument({
        title: title.value,
        description: description.value,
        cowNum: cowNum.value,
        dateBorn: Timestamp.fromDate(new Date(dateBorn.value)),
    }).then(() =>{
        router.push('/dashboard')
    })
};
</script>

<style scoped>
/* Your styles here */
</style>
