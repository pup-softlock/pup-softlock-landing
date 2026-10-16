<script setup lang="ts">
import type { ProfileTag } from "~/data/profile";

const props = withDefaults(
  defineProps<{ tag: ProfileTag; appearance?: "tag" | "text" }>(),
  { appearance: "tag" },
);

const tagClasses = computed(() => [
  props.appearance === "text"
    ? "profile-intro-line"
    : "tags has-addons profile-tag mb-0",
  { "is-prominent": props.tag.prominent },
]);
</script>

<template>
  <span :class="tagClasses">
    <span
      v-if="tag.emoji"
      :class="appearance === 'tag' ? 'tag is-medium is-rounded' : 'intro-emoji'"
      aria-hidden="true"
      >{{ tag.emoji }}</span
    >
    <span :class="appearance === 'tag' ? 'tag is-medium is-dark is-rounded' : ''">
      {{ tag.label }}
    </span>
  </span>
</template>
