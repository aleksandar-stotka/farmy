import { useRoute } from 'vue-router';
<template>
    <div>
    this is id<p>{{id}}</p>
    </div>
</template>

<script setup>
   const {id} = useRoute().params


</script>

<style  scoped>

</style>