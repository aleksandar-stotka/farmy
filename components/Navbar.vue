<template>
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Brand / Logo -->
          <div class="flex-shrink-0">
            <a href="/" class="text-xl font-semibold text-gray-800">Brand</a>
          </div>
  
          <!-- Links (Centered vertically) -->
          <div class="hidden md:flex items-center space-x-4">
            <a href="#" class="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" class="text-gray-700 hover:text-gray-900">About</a>
            <a href="#" class="text-gray-700 hover:text-gray-900">Services</a>
            <a href="#" class="text-gray-700 hover:text-gray-900">Contact</a>
          </div>
  
          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center">
            <button @click="toggleMenu" class="text-gray-800 hover:text-gray-900 focus:outline-none">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Mobile Menu with Transition -->
      <transition name="slide-fade">
        <div v-if="isMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" class="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2">Home</a>
            <a href="#" class="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2">About</a>
            <a href="#" class="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2">Services</a>
            <a href="#" class="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2">Contact</a>
          </div>
        </div>
      </transition>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isMenuOpen = ref(false);
  
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
  