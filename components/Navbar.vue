<template>
  <nav class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Brand / Logo -->
        <div class="flex-shrink-0 text-center">
          <nuxt-link to="/" class="text-blue-900 hover:underline mr-4">
            <img class="w-16 md:w-24 lg:w-32 object-contain" src="/public/logo.png" alt="Logo">
          </nuxt-link>
        </div>

        <!-- Links (Centered vertically) -->
        <div class="hidden md:flex items-center space-x-4">

          <div v-if="user">
            <nuxt-link to="/create" class="text-blue-500 hover:text-blue-700 transition duration-300">Create New</nuxt-link>
          </div>
          
          <nuxt-link to="/signup" class="text-blue-500 hover:text-blue-700 transition duration-300">Signup</nuxt-link>
        </div>

        <!-- User Login/Logout Button -->
        <div v-if="!user">
          <nuxt-link to="/login" class="text-blue-500 hover:text-blue-700 transition duration-300">Login</nuxt-link>
        </div>
        <div v-else>
          <button @click="logout" class="px-3 py-1 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition duration-300">Logout</button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="text-gray-800 hover:text-gray-900 focus:outline-none">
            <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu with Transition -->
    <transition name="slide-fade">
      <div v-if="isMenuOpen" class="md:hidden">
        <div class="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <nuxt-link to="/create" class="text-blue-500 hover:text-blue-700 transition duration-300">Create New</nuxt-link>
          <nuxt-link to="/login" class="text-blue-500 hover:text-blue-700 transition duration-300">Login</nuxt-link>
          <nuxt-link to="/signup" class="text-blue-500 hover:text-blue-700 transition duration-300">Signup</nuxt-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { getUser } from '#imports';
import { useLogout } from '#imports';

const isMenuOpen = ref(false);
const { user } = getUser();
const { logout } = useLogout();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* Custom transition styles */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
