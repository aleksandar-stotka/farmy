<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-between items-center mb-4">
      <nuxt-link to="/create" class="text-blue-500 hover:underline mr-4">Create New</nuxt-link>
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Search by title or cow number"
        class="p-2 border rounded w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-center"
      />
    </div>
    <div  v-if="farmDocs && farmDocs.length">
      <div class="flex justify-center overflow-x-auto">
        <table class="min-w-full bg-white border text-center">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b">Title</th>
              <th class="py-2 px-4 border-b">Cow Number</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="doc in paginatedDocs" :key="doc.id" class="hover:bg-gray-100">
              <NuxtLink
                :to="`/detailsList/${doc.id}`"
                class="contents"
              >
                <td class="py-2 px-4 border-b" data-label="Title">{{ doc.title }}</td>
                <td class="py-2 px-4 border-b" data-label="Cow Number">{{ doc.cowNum }}</td>
              </NuxtLink>
            </tr>
            
          </tbody>
        </table>
      </div>
      <Pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        :nextPage="nextPage"
        :prevPage="prevPage"
      />
    </div>
    <div class="loading" v-else>Loading...</div>

  </div>
</template>




<script setup>
import { defineProps, ref, computed } from 'vue';
import Pagination from '~/components/Pagination.vue';

const props = defineProps({
  farmDocs: {
    type: Array,
    required: true,
    default: () => [],
  },
});

// Utility function to format Firestore timestamp to YYYY-MM-DD


const itemsPerPage = 10; // Number of items per page
const currentPage = ref(1);
const searchTerm = ref('');

const filterFarmDocs = computed(() => {
  return props.farmDocs.filter((item) => {
    const lowerCaseSearchTerm = searchTerm.value.toLowerCase();
    return (
      item.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.cowNum.toString().includes(lowerCaseSearchTerm)
    );
  });
});

const totalPages = computed(() => {
  return Math.ceil(filterFarmDocs.value.length / itemsPerPage);
});

const paginatedDocs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filterFarmDocs.value.slice(start, end);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) { 
    currentPage.value -= 1;
  }
};
</script>

<style scoped>
@media (max-width: 640px) {
  .overflow-x-auto {
    display: flex;
    justify-content: center; /* Center the content horizontally */
    width: 100%;
  }

  table {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center the table content */
    white-space: nowrap;
    width: auto; /* Adjust the table width to content */
  }

  thead {
    display: none; /* Hide the table header */
  }

  tr {
    display: flex;
    flex-direction: row; /* Keep rows side by side */
    justify-content: center; /* Center items in the row */
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
    width: 100%; /* Ensure row width is 100% */
  }

  td {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Center content within each cell */
    font-size: 14px;
    border-bottom: none;
    padding: 10px 5px;
    width: auto; /* Adjust cell width to content */
  }

  td:before {
    content: attr(data-label);
    padding-bottom: 5px;
    font-weight: bold;
    text-align: center; /* Center align labels */
  }
}
</style>
