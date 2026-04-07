<script setup lang="ts">
useSeoMeta({
  title: "Events",
  description:
    "Where to find pup Softlock in the wild. Upcoming events, parties and socials.",
});

type EventItem = {
  dates: string;
  title: string;
  location: string;
  note?: string;
};

const events: EventItem[] = [
  {
    dates: "Apr 18",
    title: "Puppy Social + After Dark @ The Boots 💶 🏩",
    location: "The Boots, Antwerp, Belgium 🇧🇪",
  },
  {
    dates: "Apr 25",
    title: "Cage & Key 🏩",
    location: "The Boots, Antwerp, Belgium 🇧🇪",
  },
  {
    dates: "May 2",
    title: "Bark & Play",
    location: "Danscafé Marcus-Antonius, Nijmegen, The Netherlands 🇳🇱",
  },
  {
    dates: "May 9",
    title: "Tails & Leashes 💶",
    location: "The Boots, Antwerp, Belgium 🇧🇪",
  },
  {
    dates: "May 23",
    title: "XGEAR: Pride Edition 💶 🏩",
    location: "Motorworld Zeche Ewald, Herten, Germany 🇩🇪",
  },
  {
    dates: "May 30",
    title: "Gear Factory 💶",
    location: "Grenswerk, Venlo, The Netherlands 🇳🇱",
  },
  {
    dates: "Jul 3–5",
    title: "Pride Festival Cologne (CSD) 🏩",
    location: "Cologne, Germany 🇩🇪",
    note: "Play With GuyZ 💶,<br>Sexy Universe 💶,<br>Naughty 💶",
  },
  {
    dates: "Jul 18",
    title: "MoG Gear Rave 💶 🏩",
    location: "Solothurn, Switzerland 🇨🇭",
  },
  {
    dates: "Jul",
    title: "World Pride Amsterdam — ❔",
    location: "Amsterdam, The Netherlands 🇳🇱",
    note: "Looking for ideas on what to do there",
  },
  {
    dates: "Aug 8",
    title: "Puppy Park",
    location: "Mannheim, Germany 🇩🇪",
  },
  {
    dates: "Sep 4–14",
    title: "Folsom Europe",
    location: "Berlin, Germany 🇩🇪",
    note: "Animalz Folsom 2026 💶",
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
          <li class="is-active">
            <NuxtLink to="/events">Events</NuxtLink>
          </li>
        </ul>
      </nav>

      <section class="mb-5 px-1">
        <h1 class="title is-4 mb-2">Upcoming Events</h1>
        <p class="small-note">
          Petting encouraged. consequences unknown
          <span class="needs-contrast">🐾</span>
          <br />
          * 💶 — ticket secured
          <br />
          * 🏩 — looking for hotel mates
        </p>
      </section>

      <div class="is-flex is-flex-direction-column">
        <article
          v-for="event in events"
          :key="`${event.dates}-${event.title}`"
          class="card event-card"
        >
          <div class="card-content p-5">
            <div class="event-layout">
              <div class="event-date-badge" aria-label="Event date">
                <span
                  class="event-date-month has-background-primary has-text-white"
                >
                  {{ event.dates.split(" ")[0] }}
                </span>
                <span
                  class="event-date-day has-background-light"
                  :class="{
                    'has-text-grey-light is-size-6': !event.dates.split(' ')[1],
                    'has-text-dark': event.dates.split(' ')[1],
                  }"
                >
                  {{ event.dates.split(" ")[1]?.replace(",", "") || "TBA" }}
                </span>
              </div>

              <div class="event-copy">
                <!-- <p class="event-date mb-2">{{ event.dates }}</p> -->
                <h2 class="title is-5 mb-1">{{ event.title }}</h2>
                <p class="has-text-info-80">{{ event.location }}</p>
                <p
                  v-if="event.note"
                  class="small-note mb-0 mt-2"
                  v-html="event.note"
                ></p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- <div class="box is-shadowless info-strip mt-5">
        <p class="mb-0">DM on Instagram</p>
      </div> -->

      <NuxtLink to="/" class="button is-text mt-3 pl-0"
        >← Back to profile</NuxtLink
      >
    </div>
  </main>
</template>
