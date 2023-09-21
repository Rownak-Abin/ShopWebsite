<script>
import { useRoute } from 'vue-router';
import { reactive, ref, onBeforeMount } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const route = useRoute();
        const id = route.params.id;
        const post = ref([]);

        onBeforeMount(() => {
            axios.get(`https://dummyjson.com/products/${id}`)
            .then(res => {
                post.value = res.data;
                console.log(post.value);
            });
        });

        return { post };
    }
}
</script>
<template >
    <img class="imgdet" :src="post.thumbnail"><br><br>
    <div class="uppercase tracking-wide text-lg text-indigo-500 font-semibold">{{ post.title }}</div>
     <p class="mt-2 text-gray-500">{{ post.description }}</p>
</template>

<style scoped>
    .imgdet{
        border-radius: 5px;
    }
</style>