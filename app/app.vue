<script setup lang="ts">
import "~/assets/scss/main.scss";

useHead({
  bodyAttrs: {
    class: "theme-dark",
  },
});

useSeoMeta({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} — Pup Softlock` : "Pup Softlock",
  ogType: "website",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator color="#8b5cf6" />
  <NuxtPage />
  <div style="display: none" aria-role="presentation">VERSION: 1.0.1</div>
</template>
