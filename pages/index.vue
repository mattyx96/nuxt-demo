<script setup lang="ts" async>
import {gsap} from 'gsap'

const posts = await useGetPosts()

onMounted(() => {
  gsap.from('.postcard', {
    scrollTrigger: '.postcard',
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
  })
})
</script>

<template>
  <NuxtLayout name="blog-grid">
    <PostCard v-for="(post, index) in posts" :key="post.id" :href="`/posts/${post.id}`" :postData="post" :big="!index"/>
  </NuxtLayout>
</template>

<style scoped>

</style>