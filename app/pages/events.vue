<script setup lang="ts">
useSeoMeta({
  title: "Events",
  description:
    "Where to find pup Softlock in the wild. Upcoming events, parties and socials.",
});

type EventDatePoint = {
  /** Short English month label like `"Apr"` or `"Sep"`. */
  month: string;
  /** Optional for future or still-TBA entries that only have a month so far. */
  day?: number;
};

type EventDate = {
  /** Always present; for single-day events this is the only date point needed. */
  start: EventDatePoint;
  /** Add for multi-day or cross-month events. */
  end?: EventDatePoint;
};

type EventDetail = {
  /** Label for a sub-plan, meetup, party, or notable moment inside a bigger trip. */
  title: string;
  /** Short venue/place label only, not a full city-country string. */
  location?: string;
  /** Human-readable date text like `"Jul 31, Aug 1"` or `"Sep 12"`. */
  dates?: string;
};

type EventItem = {
  /** Canonical event date used by both full and compact views. */
  date: EventDate;
  /** Main event title as shown in the list. */
  title: string;
  /**
   * Full location string.
   *
   * Pattern: prefer `Venue, City, Country 🇳🇱` or `City, Country 🇳🇱`
   * so compact view can safely derive `City + Flag` from it.
   */
  location: string;
  /** Optional grouped plans inside the main event/trip. */
  details?: EventDetail[];
};

const viewMode = ref<"full" | "compact">("full");
const expandedEventIndex = ref<number | null>(null);

const events: EventItem[] = [
  {
    date: { start: { month: "Apr", day: 18 } },
    title: "Puppy Social + After Dark @ The Boots 💶 🏩",
    location: "The Boots, Antwerp, Belgium 🇧🇪",
  },
  {
    date: { start: { month: "Apr", day: 25 } },
    title: "Cage & Key 🏩",
    location: "La Réserve, Brussels, Belgium 🇧🇪",
  },
  {
    date: { start: { month: "May", day: 2 } },
    title: "Bark & Play",
    location: "Danscafé Marcus-Antonius, Nijmegen, The Netherlands 🇳🇱",
  },
  {
    date: { start: { month: "May", day: 9 } },
    title: "Tails & Leashes 💶",
    location: "The Boots, Antwerp, Belgium 🇧🇪",
  },
  {
    date: { start: { month: "May", day: 23 } },
    title: "XGEAR: Pride Edition 💶 🏩",
    location: "Motorworld Zeche Ewald, Herten, Germany 🇩🇪",
  },
  {
    date: { start: { month: "May", day: 30 } },
    title: "Gear Factory 💶",
    location: "Grenswerk, Venlo, The Netherlands 🇳🇱",
  },
  // {
  //   date: { start: { month: "Jun", day: 27 } },
  //   title: "Pride Maastricht OR Caged @ Eagle Amsterdam",
  //   location: "🇳🇱",
  // },

  {
    date: { start: { month: "Jun", day: 6 } },
    title: "Gear'n'Dance",
    location: "Eloria, Bottrop, Germany 🇩🇪",
  },
  {
    date: { start: { month: "Jun", day: 20 } },
    title: "Woof & Wander",
    location: "Café Rose, Maastricht, The Netherlands 🇳🇱",
    details: [
      {
        title: "If I can grab a ticket 🥲",
      },
    ],
  },
  {
    date: {
      start: { month: "Jul", day: 3 },
      end: { month: "Jul", day: 5 },
    },
    title: "Pride Festival Cologne (CSD) 🏩",
    location: "Cologne, Germany 🇩🇪",
    details: [
      { title: "CSD Street Festival" },
      { title: "Play With GuyZ 💶", dates: "Jul 3", location: "Schrotty" },
      { title: "Sexy Universe 💶", dates: "Jul 4", location: "MMC Studios" },
      { title: "Naughty 💶", dates: "Jul 5", location: "Nachtflug" },
    ],
  },
  {
    date: {
      start: { month: "Jul", day: 10 },
      end: { month: "Jul", day: 12 },
    },
    title: "Pup Weekend",
    location: "Amsterdam, The Netherlands 🇳🇱",
  },
  {
    date: { start: { month: "Jul", day: 18 } },
    title: "MoG Gear Rave 💶 🏩",
    location: "Solothurn, Switzerland 🇨🇭",
  },
  {
    date: {
      start: { month: "Jul", day: 25 },
      end: { month: "Aug", day: 8 },
    },
    title: "World Pride Amsterdam 🏩",
    location: "Amsterdam, The Netherlands 🇳🇱",
    details: [
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
  //   date: { start: { month: "Aug", day: 8 } },
  //   title: "Puppy Park",
  //   location: "Mannheim, Germany 🇩🇪",
  // },
  {
    date: {
      start: { month: "Sep", day: 4 },
      end: { month: "Sep", day: 14 },
    },
    title: "Folsom Europe",
    location: "Berlin, Germany 🇩🇪",
    details: [
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

const eventCards = computed(() =>
  events.map((event) => {
    const detailsCount = event.details?.length ?? 0;

    return {
      ...event,
      key: `${dateKey(event.date)}-${event.title}`,
      monthLabel: dateMonth(event.date),
      dayLabel: dateDays(event.date),
      dateLabel: fullDateLabel(event.date),
      spilloverMonth: dateSpilloverMonth(event.date),
      hasDateValue: hasDateValue(event.date),
      compactLocation: compactLocation(event.location),
      compactSummary:
        detailsCount > 0
          ? `${detailsCount} ${detailsCount === 1 ? "plan" : "plans"} inside`
          : null,
    };
  }),
);

watch(viewMode, () => {
  expandedEventIndex.value = null;
});

function isEventExpanded(index: number) {
  return expandedEventIndex.value === index;
}

function toggleEventExpanded(index: number) {
  if (viewMode.value !== "compact") {
    return;
  }

  expandedEventIndex.value = expandedEventIndex.value === index ? null : index;
}

function dateMonth(date: EventItem["date"]) {
  return date.start.month;
}

function dateDays(date: EventItem["date"]) {
  if (!date.start.day) {
    return "TBA";
  }

  if (!date.end?.day) {
    return `${date.start.day}`;
  }

  if (date.start.day === date.end.day && date.start.month === date.end.month) {
    return `${date.start.day}`;
  }

  return `${date.start.day}–${date.end.day}`;
}

function fullDateLabel(date: EventItem["date"]) {
  if (!date.start.day) {
    return `${date.start.month} TBA`;
  }

  if (!date.end?.day) {
    return `${date.start.month} ${date.start.day}`;
  }

  if (date.start.month === date.end.month) {
    return `${date.start.month} ${date.start.day}–${date.end.day}`;
  }

  return `${date.start.month} ${date.start.day}–${date.end.month} ${date.end.day}`;
}

function dateSpilloverMonth(date: EventItem["date"]) {
  if (!date.end || date.start.month === date.end.month) {
    return null;
  }

  return date.end.month;
}

function hasDateValue(date: EventItem["date"]) {
  return Boolean(date.start.day);
}

function dateKey(date: EventItem["date"]) {
  return `${date.start.month}-${date.start.day ?? "tba"}-${date.end?.month ?? "same"}-${date.end?.day ?? "same"}`;
}

function compactLocation(location: string) {
  const parts = location.split(",").map((part) => part.trim());

  if (parts.length === 1) {
    return location;
  }

  const city = parts.at(-2) ?? parts[0];
  const countryWithFlag = parts.at(-1) ?? "";
  const flag = countryWithFlag.split(" ").at(-1) ?? "";

  return /[\u{1F1E6}-\u{1F1FF}]/u.test(flag) ? `${city} ${flag}` : city;
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
        <div class="event-heading-row mb-3">
          <div>
            <h1 class="title is-4 mb-2">Upcoming Events</h1>
            <p class="small-note mb-0">
              Petting encouraged. consequences unknown
              <span class="needs-contrast">🐾</span>
              <br />
              * 💶 — ticket secured
              <br />
              * 🏩 — looking for hotel mates
            </p>
          </div>

          <div class="is-align-items-center">
            <div class="has-text-grey-dark mb-1">View:</div>

            <div
              class="tabs is-toggle is-toggle-rounded view-toggle is-small is-fullwidth"
            >
              <ul>
                <li :class="{ 'is-active': viewMode === 'full' }">
                  <a href="#" @click.prevent="viewMode = 'full'">
                    <span>Full</span>
                  </a>
                </li>
                <li :class="{ 'is-active': viewMode === 'compact' }">
                  <a href="#" @click.prevent="viewMode = 'compact'">
                    <span>Compact</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div
        :class="
          viewMode === 'full'
            ? 'is-flex is-flex-direction-column'
            : 'event-list'
        "
      >
        <article
          v-for="(event, index) in eventCards"
          :key="event.key"
          :class="[
            viewMode === 'full' ? 'card event-card' : 'event-list-item',
            {
              'card event-card':
                viewMode === 'compact' && isEventExpanded(index),
            },
          ]"
        >
          <div
            v-if="viewMode === 'full' || isEventExpanded(index)"
            class="card-content p-5"
          >
            <div class="event-layout">
              <div
                class="event-date-badge"
                :class="{ 'is-spillover': event.spilloverMonth }"
                aria-label="Event date"
              >
                <span
                  class="event-date-month has-background-primary has-text-white"
                >
                  {{ event.monthLabel }}
                </span>
                <span
                  class="event-date-day has-background-light"
                  :class="{
                    'has-text-grey-light is-size-6': !event.hasDateValue,
                    'has-text-dark': event.hasDateValue,
                  }"
                >
                  {{ event.dayLabel }}
                </span>
                <span v-if="event.spilloverMonth" class="event-date-spillover">
                  ✸{{ event.spilloverMonth }}
                </span>
              </div>

              <div class="event-copy">
                <h2 class="title is-5 mb-1">{{ event.title }}</h2>
                <p class="has-text-info-80">{{ event.location }}</p>

                <div v-if="event.details?.length" class="event-notes mt-2">
                  <dl class="event-note-list">
                    <div
                      v-for="item in event.details"
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
                </div>
              </div>

              <button
                v-if="viewMode === 'compact'"
                type="button"
                class="delete event-card-close"
                aria-label="Collapse event details"
                @click="toggleEventExpanded(index)"
              ></button>
            </div>
          </div>

          <button
            v-else
            type="button"
            class="event-list-row event-list-button"
            :aria-expanded="isEventExpanded(index)"
            @click="toggleEventExpanded(index)"
          >
            <div class="event-list-copy">
              <h2 class="title is-6 mb-1">{{ event.title }}</h2>
              <p class="small-note mb-0">{{ event.compactLocation }}</p>
              <p
                v-if="event.compactSummary"
                class="small-note mb-0 event-compact-summary"
              >
                {{ event.compactSummary }}
              </p>
            </div>

            <div class="event-list-date event-compact-date">
              {{ event.dateLabel }}
            </div>
          </button>
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
          >← Back to Profile</NuxtLink
        >
      </div>
    </div>
  </main>
</template>
