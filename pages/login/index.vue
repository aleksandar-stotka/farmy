<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 class="text-2xl font-semibold mb-6 text-center">Sign Up</h1>
        <form @submit.prevent="handleSubmit" class="space-y-4">
           
  
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
              minlength="5"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
  
          <!-- Sign Up Button -->
          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import {useLogin} from '#imports';
  import { ref } from 'vue';
  import {getUser} from '#imports';
  import { useRouter } from '#imports';
  
  
  
  const route = useRouter()
  const { login,error } = useLogin();
  const {user} = getUser()
  
  
  if(user) {
    console.log('user is there')
  }
  
  const email = ref('');
  const password = ref('');
  
  const handleSubmit = () => {
    login(email.value, password.value)
    if(user) {
      route.push('/');
    }
    error.value = null
    
    
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>
  