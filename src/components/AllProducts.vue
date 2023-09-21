<script>
import { reactive, ref, onBeforeMount } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const posts = ref([]);

    onBeforeMount(() => {
        axios.get('https://dummyjson.com/products')
        .then(res => {
            posts.value = res.data.products;
        });
    });

    return { posts };
  },
}

</script>
<template>

<article v-for="post in posts" :key="post.id">
   <div class="max-w-lg mx-auto bg-white rounded-xl overflow-hidden shadow-lg custom-card-width">
        <div class="md:flex">
            <div class="md:flex-shrink-0">
            <img class="h-48 w-72 object-cover md:w-48" :src="post.thumbnail" alt="Card image">
            </div>
            <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{{ post.title }}</div>
            <p class="mt-2 text-gray-500">{{ post.description }}</p><br>
            <router-link :to="{name:'details', params:{id:post.id}}"> <button>View Details</button></router-link>
            </div>
        </div>
    </div><br>
</article>

<main >
    <router-view :key="$route.fullpath"/>
</main>

</template>

<style scoped>
.custom-card-width {
  max-width: 800px;
}    
</style>