<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-sm md:max-w-md">
      <nuxt-link to="/dashboard" class="text-blue-500 hover:underline mb-4 block">Back to Dashboard</nuxt-link>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Име на кравата</label>
          <input
          required
            type="text"
            v-model="title"
            placeholder="Enter name"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Број</label>
          <input
            required
            type="number"
            v-model="cowNum"
            placeholder="Enter number"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Телење</label>
          <input
            required
            type="date"
            v-model="dateCalving"
            placeholder="Select date"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Водење</label>
          <input
          required
            type="text"
            v-model="description"
            placeholder="Enter description"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Стелна</label>
          <input
           required
            type="date"
            v-model="dateBorn"
            placeholder="Select date"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Забелешки</label>
          <textarea
            required
            v-model="notes"
            placeholder="notes"
            rows="4"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Внеси нов податок
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
import { useRouter } from 'vue-router';

const router = useRouter();

const { addDocument } = useCollection('cawList');

const title = ref('');
const description = ref('');
const cowNum = ref('');
const dateBorn = ref('');
const dateCalving = ref('');
const notes = ref('');



const handleSubmit = async () => {
  await addDocument({
    title: title.value,
    description: description.value,
    cowNum: cowNum.value,
    dateBorn: Timestamp.fromDate(new Date(dateBorn.value)),
    dateCalving: Timestamp.fromDate(new Date(dateCalving.value)),
    notes: notes.value
  }).then(() => {
    router.push('/dashboard');
  });
};
</script>

<style scoped>
/* Your styles here */
</style>
