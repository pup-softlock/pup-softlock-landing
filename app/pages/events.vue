<script setup lang="ts">
useSeoMeta({
  title: "Events",
  description:
    "Where to find pup Softlock in the wild. Upcoming events, parties and socials.",
});

type EventDatePart = {
  month: string;
  day: number;
};

type EventDateRange =
  | string
  | {
      start: EventDatePart;
      end: EventDatePart;
    };

type EventNoteItem = {
  title: string;
  location?: string;
  dates?: string;
};

type EventItem = {
  dates: EventDateRange;
  title: string;
  location: string;
  note?: string | EventNoteItem[];
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
    location: "La Réserve, Brussels, Belgium 🇧🇪",
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
  // {
  //   dates: "Jun 27",
  //   title: "Pride Maastricht OR Caged @ Eagle Amsterdam",
  //   location: "🇳🇱",
  // },
  {
    dates: {
      start: { month: "Jul", day: 3 },
      end: { month: "Jul", day: 5 },
    },
    title: "Pride Festival Cologne (CSD) 🏩",
    location: "Cologne, Germany 🇩🇪",
    note: [
      { title: "CSD Street Festival" },
      { title: "Play With GuyZ 💶", dates: "Jul 3", location: "Schrotty" },
      { title: "Sexy Universe 💶", dates: "Jul 4", location: "MMC Studios" },
      { title: "Naughty 💶", dates: "Jul 5", location: "Nachtflug" },
    ],
  },
  {
    dates: {
      start: { month: "Jul", day: 10 },
      end: { month: "Jul", day: 12 },
    },
    title: "Pup Weekend",
    location: "Amsterdam, The Netherlands 🇳🇱",
  },
  {
    dates: "Jul 18",
    title: "MoG Gear Rave 💶 🏩",
    location: "Solothurn, Switzerland 🇨🇭",
  },
  {
    dates: {
      start: { month: "Jul", day: 25 },
      end: { month: "Aug", day: 8 },
    },
    title: "World Pride Amsterdam 🏩",
    location: "Amsterdam, The Netherlands 🇳🇱",
    note: [
      { dates: "Jul 25", title: "Pride March & Pride Park" },
      {
        dates: "Jul 31, Aug 1",
        title: "Pup Zone at Crash",
        location: "Beursplein",
      },
      {
        dates: "Aug 5–7",
        title: "WorldPride Village (not sure about that one yet)",
        location: "Museumplein",
      },
      { dates: "Aug 8", title: "World Puppy and Furry Walk" },
    ],
  },
  // {
  //   dates: "Aug 8",
  //   title: "Puppy Park",
  //   location: "Mannheim, Germany 🇩🇪",
  // },
  {
    dates: {
      start: { month: "Sep", day: 4 },
      end: { month: "Sep", day: 14 },
    },
    title: "Folsom Europe",
    location: "Berlin, Germany 🇩🇪",
    note: [
      {
        title: "Animalz Folsom 💶",
        dates: "Sep 12",
        location: "Metropol",
      },
      {
        title: "I need ideas what else to do during that whole stay in Berlin",
      },
    ],
  },
];

function dateMonth(dates: EventItem["dates"]) {
  if (typeof dates === "string") {
    return dates.split(" ")[0];
  }

  return dates.start.month;
}

function dateDays(dates: EventItem["dates"]) {
  if (typeof dates === "string") {
    return dates.split(" ")[1]?.replace(",", "") || "TBA";
  }

  if (
    dates.start.day === dates.end.day &&
    dates.start.month === dates.end.month
  ) {
    return `${dates.start.day}`;
  }

  return `${dates.start.day}–${dates.end.day}`;
}

function dateSpilloverMonth(dates: EventItem["dates"]) {
  if (typeof dates === "string" || dates.start.month === dates.end.month) {
    return null;
  }

  return dates.end.month;
}

function hasDateValue(dates: EventItem["dates"]) {
  if (typeof dates === "string") {
    return Boolean(dates.split(" ")[1]);
  }

  return true;
}

function dateKey(dates: EventItem["dates"]) {
  if (typeof dates === "string") {
    return dates;
  }

  return `${dates.start.month}-${dates.start.day}-${dates.end.month}-${dates.end.day}`;
}
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
          :key="`${dateKey(event.dates)}-${event.title}`"
          class="card event-card"
        >
          <div class="card-content p-5">
            <div class="event-layout">
              <div
                class="event-date-badge"
                :class="{ 'is-spillover': dateSpilloverMonth(event.dates) }"
                aria-label="Event date"
              >
                <span
                  class="event-date-month has-background-primary has-text-white"
                >
                  {{ dateMonth(event.dates) }}
                </span>
                <span
                  class="event-date-day has-background-light"
                  :class="{
                    'has-text-grey-light is-size-6': !hasDateValue(event.dates),
                    'has-text-dark': hasDateValue(event.dates),
                  }"
                >
                  {{ dateDays(event.dates) }}
                </span>
                <span
                  v-if="dateSpilloverMonth(event.dates)"
                  class="event-date-spillover"
                >
                  ✸{{ dateSpilloverMonth(event.dates) }}
                </span>
              </div>

              <div class="event-copy">
                <h2 class="title is-5 mb-1">{{ event.title }}</h2>
                <p class="has-text-info-80">{{ event.location }}</p>

                <div v-if="event.note" class="event-notes mt-2">
                  <dl v-if="Array.isArray(event.note)" class="event-note-list">
                    <div
                      v-for="item in event.note"
                      :key="`${item.dates ?? 'note'}-${item.title}`"
                      class="event-note-item"
                    >
                      <dt v-if="item.dates" class="event-note-date">
                        {{ item.dates }}
                      </dt>
                      <dd class="small-note mb-0">
                        {{ item.title
                        }}<template v-if="item.location"
                          >,
                          <span class="has-text-info-80">{{
                            item.location
                          }}</span>
                        </template>
                      </dd>
                    </div>
                  </dl>

                  <p v-else class="small-note mb-0">{{ event.note }}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- <div class="box is-shadowless info-strip mt-5">
        <p class="mb-0">DM on Instagram</p>
      </div> -->

      <div class="is-flex is-flex-direction-column mt-5">
        <NuxtLink
          to="/past-events"
          class="button is-fullwidth is-text mb-0 is-medium"
          >Past Events</NuxtLink
        >

        <NuxtLink to="/" class="button is-fullwidth is-text mt-3"
          >← Back to profile</NuxtLink
        >
      </div>
    </div>
  </main>
</template>
