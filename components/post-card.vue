<script setup lang="ts">
import type {Post} from "~/types/post";

withDefaults(defineProps<{ big?: boolean; postData?: Post; href?: string }>(), {
  big: false,
  postData: {
    id: "1",
    image: 'https://picsum.photos/800/400',
    title: 'Sample Postcard Title',
    description: 'This is a sample postcard description with some text about the post.',
    date: 'February 16, 2025',
    author: {
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    },
  },
  href: '#'
});

</script>

<template>
  <NuxtLink :to="href" class="link">
    <div class="postcard" :class="big ? 'postcard--big' : ''">
      <div class="postcard__header">
        <img :src="postData.image" alt="Postcard image" class="postcard__image"/>
      </div>
      <div class="postcard__content">
        <h2 class="postcard__title">{{ postData.title }}</h2>
        <div class="postcard__body">
          <p class="postcard__description">{{ postData.description }}</p>
          <div class="postcard__author-info">
            <img :src="postData.author.avatar" alt="Author avatar" width="40" height="40" class="postcard__avatar"/>
            <div class="postcard__author-details">
              <span class="postcard__author-name">{{ postData.author.name }}</span>
              <span class="postcard__post-date">{{ postData.createdAt }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
.link {
  text-decoration: none;
  color: inherit;
}

.postcard {
  border-radius: 8px;
  background-color: var(--backgroud-paper);
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: var(--content-font), sans-serif;

  &__header {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
  }

  &__body {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__content {
    padding: 15px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  &__title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 10px;
    font-family: var(--display-font), sans-serif;
  }

  &__description {
    font-size: 14px;
    color: #555;
    margin-bottom: 15px;
  }

  &__author-info {
    display: flex;
    align-items: center;
  }

  &__avatar {
    border-radius: 50%;
    margin-right: 10px;
  }

  &__author-details {
    display: flex;
    flex-direction: column;
  }

  &__author-name {
    font-size: 14px;
    font-weight: bold;
  }

  &__post-date {
    font-size: 12px;
    color: #888;
  }

  &:hover {
    transition: box-shadow 0.1s ease-in-out;
    box-shadow: 0 0 0 1px var(--primary-color);
    cursor: pointer;
  }

  &--big {
    max-height: 100%;
    width: 100%;
    max-width: 100%;
    grid-column: span 2;

    & .postcard__image {
      object-fit: cover;
    }

    & .postcard__header {
      height: 500px;
    }

    & .postcard__content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      padding: 1.7rem;
    }

    & .postcard__body {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    & .postcard__title {
      font-size: 3rem;
      margin-block-start: 0;
      margin-block-end: 0;
    }
  }
}
</style>