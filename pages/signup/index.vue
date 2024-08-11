<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 class="text-2xl font-semibold mb-6 text-center">Sign Up</h1>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          
          <!-- Display Name Field -->
          <div>
            <label for="displayName" class="block text-sm font-medium text-gray-700">Display Name</label>
            <input
              type="text"
              id="displayName"
              v-model="displayName"
              placeholder="Enter your display name"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
  
          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Enter your email"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
  
          <!-- Password Field -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
              minlength="6"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
  
          <!-- Sign Up Button -->
          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const displayName = ref('');
  const email = ref('');
  const password = ref('');
  
  const handleSubmit = () => {
    // Handle signup logic here
    console.log('Display Name:', displayName.value);
    console.log('Email:', email.value);
    console.log('Password:', password.value);
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>
  