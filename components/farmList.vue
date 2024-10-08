<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-between items-center mb-4">
      
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Барај по број или име"
        class="p-2 border rounded w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-center"
      />
    </div>
    <div v-if="farmDocs">
      <div class="flex justify-center overflow-x-auto">
        <table class="min-w-full bg-white border text-center">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b">Име</th>
              <th class="py-2 px-4 border-b">Број</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="doc in paginatedDocs" :key="doc.id" class="hover:bg-gray-100">
              <NuxtLink
                :to="`/detailsList/${doc.id}`"
                class="contents"
              >
                <td class="py-2 px-4 border-b" data-label="Име ">{{ doc.title }}</td>
                <td class="py-2 px-4 border-b" data-label="Број ">{{ doc.cowNum }}</td>
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

const itemsPerPage = 10; // Number of items per page
const currentPage = ref(1);
const searchTerm = ref('');

// Computed property to filter the farmDocs based on the search term
const filterFarmDocs = computed(() => {
  const lowerCaseSearchTerm = searchTerm.value.toLowerCase();

  return props.farmDocs.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(lowerCaseSearchTerm);
    const cowNumMatch = item.cowNum.toString().includes(searchTerm.value); // Convert cowNum to string

    return titleMatch || cowNumMatch;
  });
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
