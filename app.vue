<script setup lang="ts">
useSeoMeta({
  title: 'Nuxt Minimal Blog',
  ogTitle: 'Nuxt Minimal Blog',
  description: 'This is a simple blog built with Nuxt.',
  ogDescription: 'This is a simple blog built with Nuxt.',
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer/>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style>
:root {
  --primary-color: #57BC60;
  --backgroud-default: #F7F7F8;
  --backgroud-paper: #fff;
  --content-font: 'Poppins', sans-serif;
  --display-font: 'Source Sans Pro', serif;
  --max-display-width: 56rem
}

/*
*,
*::before,
*::after {
  outline: 1px solid aqua;
}
*/


html, body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  min-width: 100vw;
  background: var(--backgroud-default);
  font-family: var(--content-font), sans-serif;
}
</style>
