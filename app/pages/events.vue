<script setup lang="ts">
import { EVENTS } from "~/data/events";
import type { EventItem } from "~/types/events";

useSeoMeta({
  title: "Events",
  description:
    "Where to find pup Softlock in the wild. Upcoming events, parties and socials.",
});

const viewMode = ref<"full" | "compact">("full");
const expandedEventIndex = ref<number | null>(null);

const eventCards = computed(() =>
  EVENTS.map((event) => {
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
