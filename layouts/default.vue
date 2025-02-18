<script setup lang="ts">

</script>

<template>
  <div class="parent">
    <header class="header">
      <NuxtLink to="/" class="header__title">Nuxt Minimal Blog</NuxtLink>
    </header>
    <!--      <div class="left-side section">Left Sidebar</div>-->
    <main>
      <slot/>
    </main>
    <!--      <div class="right-side section">Right Sidebar</div>-->
    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }}</p>
      <NuxtLink class="footer__title" to="/">Nuxt Minimal Blog</NuxtLink>
    </footer>
  </div>
</template>

<style scoped lang="scss">

.parent {
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;
  min-height: 100vh;
}

.header {
  padding: 2rem;
  grid-column: 1 / 4;

  &__title {
    font-size: 2rem;
    font-weight: bolder;
    color: var(--primary-color);
    font-family: var(--display-font), sans-serif;
    text-decoration: none;

    &__title:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 778px) {
    &__title {
      font-size: 1.4rem;
    }

    & {
      padding: 10px;
    }
  }
}

.left-side {
  grid-column: 1 / 2;
}

main {
  grid-column: 2 / 3;
  max-width: var(--max-display-width);
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right-side {
  grid-column: 3 / 4;
}

.footer {
  grid-column: 1 / 4;
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  &__title {
    font-size: 1.2rem;
    font-weight: bolder;
    color: var(--primary-color);
    font-family: var(--display-font), sans-serif;
    text-decoration: none;
    padding: 0.5rem 0;
  }
}

</style>