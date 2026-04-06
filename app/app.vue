<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "theme-dark",
  },
});

useSeoMeta({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} · Pup Softlock` : "Pup Softlock",
  ogType: "website",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator color="#8b5cf6" />
  <NuxtPage />
</template>
