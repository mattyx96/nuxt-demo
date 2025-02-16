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
  --backgroud-default: #e6e6e6;
  --backgroud-paper: #fff;
  --content-font: 'Poppins', sans-serif;
  --display-font: 'Source Sans Pro', serif;
}

html, body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: var(--backgroud-default);
  font-family: var(--content-font), sans-serif;
}
</style>
