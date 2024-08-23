<template>
  <Transition>
    <div 
      class="h-screen flex justify-center items-center bg-cover bg-center" 
      style="background-image: linear-gradient(to right, rgba(50, 149, 100, 0.8), rgba(90, 130, 180, 0.8)), url('/logo.png');" 
      v-if="displayNameFade || show"
    >
      <h2 class="text-white text-8xl" v-if="user">
        <span>Hello</span> {{ user.displayName }}!!
      </h2>
    </div>
  </Transition>
  
  
</template>

<script setup>
import { getCollection } from '#imports';
import { getUser } from '#imports';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter()

const displayNameFade = ref(true);
const show = ref(true);



onMounted(() => {
  setTimeout(() => {
    displayNameFade.value = false;
    show.value = false    }, 3000)

    router.push('/dashboard');

    
 
});

const { user } = getUser();
const { error, documents: farmDocs } = getCollection("cawList");
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

h2 {
  transition: opacity 0.5s ease;
}
</style>
