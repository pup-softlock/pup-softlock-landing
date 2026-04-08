<script setup lang="ts">
useSeoMeta({
  title: "Past Events",
  description:
    "A small archive of places where pup Softlock has been spotted before.",
});

type PastEvent = {
  title: string;
  location: string;
  dates: string;
};

type PastEventYearGroup = {
  year: string;
  items: PastEvent[];
};

const pastEventGroups: PastEventYearGroup[] = [
  {
    year: "2026",
    items: [
      {
        title: "The Darknight",
        location: "Liège 🇧🇪",
        dates: "Apr",
      },
      {
        title: "Bark & Play",
        location: "Nijmegen 🇳🇱",
        dates: "Mar",
      },
      {
        title: "Beyond Darklands",
        location: "Antwerp 🇧🇪",
        dates: "Mar",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title: "Bark & Play",
        location: "Nijmegen 🇳🇱",
        dates: "Sep",
      },
      {
        title: "Folsom Europe",
        location: "Berlin 🇩🇪",
        dates: "Aug",
      },
      {
        title: "Woof & Wander",
        location: "Maastricht 🇳🇱",
        dates: "Aug",
      },
      {
        title: "Bark & Play",
        location: "Nijmegen 🇳🇱",
        dates: "Jul",
      },
    ],
  },
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
          <li>
            <NuxtLink to="/">Profile</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/events">Events</NuxtLink>
          </li>
        </ul>
      </nav>

      <section class="mb-5 px-1">
        <h1 class="title is-4 mb-2">Past Events</h1>
        <p class="small-note">Places where I found my people before.</p>
      </section>

      <div class="is-flex is-flex-direction-column">
        <section
          v-for="(group, groupIndex) in pastEventGroups"
          :key="group.year"
        >
          <div
            :class="{
              'mb-6': groupIndex !== pastEventGroups.length - 1,
            }"
          >
            <h2 class="title is-5 mb-4 has-text-primary">
              {{
                group.year === new Date().getFullYear().toString()
                  ? "This Year"
                  : group.year
              }}
            </h2>

            <div class="past-event-list">
              <article
                v-for="item in group.items"
                :key="`${group.year}-${item.title}-${item.dates}`"
                class="past-event-row"
              >
                <div class="past-event-copy">
                  <h3 class="has-text-weight-semibold mb-0">
                    {{ item.title }}
                  </h3>
                  <p class="small-note mb-0">{{ item.location }}</p>
                </div>

                <div class="past-event-date">{{ item.dates }}</div>
              </article>
            </div>
          </div>
        </section>
      </div>

      <NuxtLink to="/events" class="button is-text mt-4 is-fullwidth is-medium"
        >← Back to Upcoming Events</NuxtLink
      >
    </div>
  </main>
</template>
