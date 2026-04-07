<script setup lang="ts">
useSeoMeta({
  title: "",
  description: "Horny locked puppy. Venlo, NL",
});

type SocialLink = {
  label: string;
  href: string;
  handle: string;
  tone: string;
};

const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/pup_softlock",
    handle: "@pup_softlock",
    tone: "is-primary",
  },
  {
    label: "Bluesky 🔞",
    href: "https://bsky.app/profile/pup-softlock.bsky.social",
    handle: "@pup-softlock.bsky.social",
    tone: "is-primary is-light",
  },
  // {
  //   label: "Twitter / X",
  //   href: "https://x.com/examplecreator",
  //   handle: "@examplecreator",
  //   tone: "is-dark",
  // },
];

type Tag = {
  emoji: string;
  label: string;
  emojiTagClass?: string;
};

const tags: Tag[] = [
  { emoji: "🔒", label: "Locked" },
  { emoji: "⛓️", label: "Bondage Lover" },
  { emoji: "🏳️‍🌈", label: "Gay" },
  {
    emoji: "🖤",
    label: "Latex, Silicone, Neoprene",
    emojiTagClass: "needs-contrast",
  },
  { emoji: "🤗", label: "Ok to Touch" },
];
</script>

<template>
  <main class="page-shell">
    <div class="mobile-frame">
      <nav
        class="tabs is-toggle is-fullwidth is-medium mb-5"
        aria-label="Primary"
      >
        <ul>
          <li class="is-active">
            <NuxtLink to="/">Profile</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/events">Events</NuxtLink>
          </li>
        </ul>
      </nav>

      <section class="card profile-card">
        <div class="card-content p-5">
          <div class="has-text-centered mb-5">
            <figure class="avatar-wrap">
              <img
                src="/pup_softlock_profile_picture.jpeg"
                alt="Pup Softlock profile picture: a person in a black and pink neoprene puppy hood and a thick leather collar with white lettering 'SOFTLOCK'. Pink harness straps are visible over the shoulders"
                loading="eager"
              />
            </figure>

            <h1 class="title is-4 has-text-weight-bold has-text-primary mb-5">
              Pup Softlock
            </h1>
            <div
              class="tags mb-2 is-justify-content-center tags-negative-horizontal-margin"
            >
              <div
                v-for="tag in tags"
                :key="tag.label"
                class="tags has-addons mb-0"
              >
                <div :class="['tag is-rounded', tag.emojiTagClass]">
                  {{ tag.emoji }}
                </div>
                <div class="tag is-dark is-rounded">{{ tag.label }}</div>
              </div>
            </div>
            <div class="tag is-rounded mb-4">📍 Venlo, The Netherlands</div>

            <!-- <p class="small-note">
              Tiny bio goes here. Share what you make, what you love, and the
              sort of energy people can expect when they follow along.
            </p> -->
          </div>

          <!-- <div class="box is-shadowless info-strip mb-5">
            <p class="is-size-7 has-text-weight-semibold mb-2">CURRENTLY</p>
            <p class="mb-0">
             Something something
            </p>
          </div> -->

          <div class="buttons are-medium">
            <a
              v-for="link in socialLinks"
              :key="link.label"
              :href="link.href"
              class="button is-fullwidth is-rounded link-button"
              :class="link.tone"
              target="_blank"
              rel="noreferrer"
            >
              <span>{{ link.label }}</span>
              <span class="is-size-7">{{ link.handle }}</span>
            </a>
          </div>

          <NuxtLink
            to="/events"
            class="button is-fullwidth is-white is-outlined is-medium is-rounded mt-3"
          >
            Meet Me at Events →
          </NuxtLink>
        </div>
      </section>
    </div>
  </main>
</template>
