<script setup lang="ts">

</script>

<template>
  <div class="blog-grid">
    <slot />
  </div>
</template>

<style scoped>
.blog-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-gap: 1rem;
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>