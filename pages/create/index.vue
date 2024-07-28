<template>
    <div>
        <form @submit.prevent="handleSubmit" action="">
            <input type="text" placeholder="name" v-model="title">
            <input type="text" placeholder="description" v-model="description">
            <input type="number" placeholder="number" v-model="cowNum">
            <input type="date" placeholder="date" v-model="dateBorn">
            <button>submit</button>
        </form>
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
