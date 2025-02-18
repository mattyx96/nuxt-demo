<script setup lang="ts" async>
import type {Post} from "~/types/post";
import {gsap} from "gsap";

const route = useRoute()
const post: Post | null = await useGetPost(route.params.id + '')

useSeoMeta({
  title: `${post?.title} - Nuxt Minimal Blog`,
  description: post?.description,
  ogTitle: `${post?.title}`,
  ogDescription: post?.description,
  ogImage: post?.image,
})

definePageMeta({
  validate: async (route) => {
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  }
})

onMounted(() => {
  gsap.from('.post', {
    scrollTrigger: '.post',
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
  })
})
</script>


<template>
  <NuxtLink to="/" class="back-arrow">← Back</NuxtLink>
  <div v-if="post" class="post">
    <div class="post__header">
      <h1 class="post__title">{{ post.title }}</h1>
    </div>
    <div class="post__content">
      <img
          class="post__image"
          :src="post.image"
          alt="Random image from picsum"
      />
      <p class="post__text">{{ post.content }} </p>
      <p class="post__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,
        vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Vivamus vestibulum, nisi quis ullamcorper venenatis, dui ipsum aliquam dui, eu varius lectus nunc
        quis ipsum. Sed et consequat est. Nullam id lacus eu tellus dictum aliquet. In hac habitasse platea
        dictumst.</p>
      <p class="post__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,
        vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Vivamus vestibulum, nisi quis ullamcorper venenatis, dui ipsum aliquam dui, eu varius lectus nunc
        quis ipsum. Sed et consequat est. Nullam id lacus eu tellus dictum aliquet. In hac habitasse platea
        dictumst.</p>
      <p class="post__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,
        vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Vivamus vestibulum, nisi quis ullamcorper venenatis, dui ipsum aliquam dui, eu varius lectus nunc
        quis ipsum. Sed et consequat est. Nullam id lacus eu tellus dictum aliquet. In hac habitasse platea
        dictumst.</p>
    </div>
  </div>
  <div v-else>
    <p>Post not found</p>
  </div>
</template>

<style scoped lang="scss">
.post {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-bottom: 20px;
  }

  &__title {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #333;
  }

  &__content {
    padding: 20px;
    background-color: var(--backgroud-paper);
    border-radius: 8px;
  }

  &__text {
    margin-top: 30px;
    font-size: 1rem;
    line-height: 1.5;
    color: #666;
  }

  &__image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    margin-bottom: 20px;
    border-radius: 10px;
  }
}

@media (max-width: 778px) {
  .post__title {
    font-size: 1.5rem;
  }

  .post__content {
    padding: 10px;
  }
}

.back-arrow {
  text-decoration: none;
  color: #333;

  &__back-arrow:hover {
    text-decoration: underline;
  }
}
</style>
