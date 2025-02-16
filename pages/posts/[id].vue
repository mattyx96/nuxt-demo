<script setup lang="ts" async>
import type {Post} from "~/types/post";

const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)

const post: Post | null = await useGetPost(route.params.id + '')

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  }
})

</script>


<template>
  <div v-if="post" class="post">
    <div class="post__header">
      <NuxtLink to="/" class="post__back-arrow">←</NuxtLink>
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
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-bottom: 20px;
  }

  &__back-arrow {
    font-size: 1.5rem;
    text-decoration: none;
    color: #333;
  }

  &__back-arrow:hover {
    text-decoration: underline;
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

@media (max-width: 768px) {
  .post {
    padding: 10px;
  }

  .post__title {
    font-size: 1.5rem;
  }

  .post__content {
    padding: 10px;
  }
}
</style>