<script setup lang="ts">
import ProfileDisclosure from "~/components/ProfileDisclosure.vue";
import ProfileTag from "~/components/ProfileTag.vue";
import {
  PROFILE,
  PROFILE_INTERESTS,
  PROFILE_INTRO,
  PROFILE_MATERIALS,
  PROFILE_STORIES,
  SOCIAL_LINKS,
} from "~/data/profile";
import type { ProfileTag as ProfileTagContent } from "~/data/profile";

const interests: ProfileTagContent[] = [
  ...PROFILE_INTERESTS,
  ...PROFILE_MATERIALS.map((label) => ({
    id: label.toLowerCase(),
    label,
    prominent: true,
  })),
];
const interestStories = PROFILE_STORIES.filter(
  (story) => story.enabled && story.placement === "interests",
);

const profileImageUrl = new URL(PROFILE.image, PROFILE.url).href;

useSeoMeta({
  title: PROFILE.title,
  description: PROFILE.description,
  ogTitle: PROFILE.title,
  ogDescription: PROFILE.description,
  ogType: "profile",
  ogUrl: PROFILE.url,
  ogImage: profileImageUrl,
  ogImageAlt: "Pup Softlock in his black and pink puppy hood",
  twitterTitle: PROFILE.title,
  twitterDescription: PROFILE.description,
  twitterImage: profileImageUrl,
  twitterImageAlt: "Pup Softlock in his black and pink puppy hood",
});

useHead({
  titleTemplate: null,
  link: [
    { rel: "canonical", href: PROFILE.url },
    {
      rel: "describedby",
      type: "text/plain",
      href: new URL("llms.txt", PROFILE.url).href,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        url: PROFILE.url,
        mainEntity: {
          "@type": "Person",
          name: PROFILE.name,
          description: PROFILE.description,
          url: PROFILE.url,
          image: profileImageUrl,
          sameAs: SOCIAL_LINKS.map((link) => link.href),
        },
      }),
    },
  ],
});
</script>

<template>
  <main class="page-shell profile-page">
    <div class="mobile-frame profile-frame">
      <nav
        class="tabs is-toggle is-fullwidth is-medium mb-5"
        aria-label="Primary"
      >
        <ul>
          <li class="is-active">
            <NuxtLink to="/" aria-current="page">Profile</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/events">Events</NuxtLink>
          </li>
        </ul>
      </nav>

      <article class="card profile-card" aria-labelledby="profile-name">
        <div class="profile-hero">
          <img
            class="profile-hero-photo"
            src="/softlock-party-hero.webp"
            alt=""
            aria-hidden="true"
            width="1200"
            height="1600"
            loading="eager"
          >
          <figure class="avatar-wrap">
            <img
              :src="PROFILE.image"
              alt="Pup Softlock wearing a black and pink puppy hood, a collar with SOFTLOCK lettering, and pink harness straps"
              width="144"
              height="144"
              loading="eager"
              fetchpriority="high"
            >
          </figure>
        </div>
        <div class="card-content profile-content">
          <header class="profile-identity">
            <h1
              id="profile-name"
              class="title is-3 has-text-primary has-text-centered mb-0"
            >
              {{ PROFILE.name }}
            </h1>
            <div class="profile-meta">
              <p class="profile-meta-row profile-subtitle">
                <span class="profile-meta-icon" role="img" aria-label="Gay">🌈</span>
                <span class="profile-meta-text">{{ PROFILE.identity }}</span>
              </p>
              <p class="profile-meta-row profile-location small-note">
                <span class="profile-meta-icon" aria-hidden="true">📍</span>
                <span class="profile-meta-text">{{ PROFILE.location }}</span>
              </p>
              <p class="profile-meta-row profile-relationships small-note">
                <span class="profile-meta-icon needs-contrast" aria-hidden="true">🐾</span>
                <span class="profile-meta-text">{{ PROFILE.relationships }}</span>
              </p>
            </div>
          </header>

          <ul class="profile-intro">
            <li v-for="line in PROFILE_INTRO" :key="line.id">
              <ProfileTag :tag="line" appearance="text" />
            </li>
          </ul>

          <nav class="profile-socials" aria-label="Social profiles and events">
            <div class="buttons are-medium">
              <a
                v-for="link in SOCIAL_LINKS"
                :key="link.label"
                :href="link.href"
                class="button is-fullwidth is-rounded link-button"
                :class="link.tone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{{ link.label }}</span>
                <span class="is-size-7">{{ link.handle }}</span>
              </a>
            </div>
            <NuxtLink
              to="/events"
              class="button is-fullwidth is-white is-outlined is-medium is-rounded mt-3"
            >
              Meet Me at Events <span aria-hidden="true" class="ml-2">→</span>
            </NuxtLink>
          </nav>
          <p class="profile-copy profile-adventures-copy">
            {{ PROFILE.adventures }}
          </p>

          <p class="profile-copy profile-puppy-copy">{{ PROFILE.puppyhood }}</p>

          <section class="profile-section" aria-labelledby="interests-label">
            <h2 id="interests-label" class="profile-section-title mb-3">
              Things That Make My Tail Wag
            </h2>
            <ul class="profile-interest-tags">
              <li v-for="tag in interests" :key="tag.id">
                <ProfileTag :tag="tag" />
              </li>
            </ul>
            <ProfileDisclosure
              v-for="story in interestStories"
              :key="story.id"
              :story="story"
              class="profile-fiction"
            />
          </section>

          <section class="profile-section" aria-labelledby="chastity-label">
            <h2 id="chastity-label" class="profile-section-title">
              {{ PROFILE.chastity.label }}
            </h2>
            <p class="profile-chastity-copy">{{ PROFILE.chastity.content }}</p>
          </section>
        </div>
      </article>
    </div>
  </main>
</template>
