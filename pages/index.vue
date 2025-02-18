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
  <PostCard v-if="posts[0]" :href="`/posts/${posts[0].id}`" :postData="posts[0]" big/>
  <NuxtLayout name="blog-grid" class="posts-container">
    <PostCard v-for="(post, index) in posts.slice(1)" :key="post.id" :href="`/posts/${post.id}`" :postData="post"/>
  </NuxtLayout>
</template>

<style scoped>
.posts-container {
  margin-block: 8rem !important;
}
</style>