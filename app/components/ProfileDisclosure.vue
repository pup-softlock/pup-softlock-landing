<script setup lang="ts">
import type { ProfileStory } from "~/data/profile";

defineProps<{ story: ProfileStory }>();
</script>

<template>
  <details :id="story.id" class="profile-disclosure">
    <summary>
      <span>{{ story.label }}</span>
      <svg
        class="disclosure-indicator"
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path d="m4 6 4 4 4-4" stroke="currentColor" stroke-width="1.5" />
      </svg>
    </summary>
    <div class="profile-disclosure-content content">
      <p v-for="paragraph in story.content" :key="paragraph">{{ paragraph }}</p>
    </div>
  </details>
</template>
