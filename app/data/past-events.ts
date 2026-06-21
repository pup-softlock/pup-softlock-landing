import type { PastEventYearGroup } from "~/types/past-events";

/**
 * Past events only include title, city and flag, and month of the event.
 *
 * When we move events from the upcoming events to the past events, we strip away all the extra details.
 *
 * @example
 * {
 *   title: "Brussels Pride",
 *   location: "Brussels 🇧🇪",
 *   dates: "May",
 * }
 */
export const PAST_EVENTS: PastEventYearGroup[] = [
  {
    year: "2026",
    items: [
      {
        title: "Woof & Wander",
        location: "Café Rose, Maastricht 🇳🇱",
        dates: "Jun",
      },
      {
        title: "Gear & Groove",
        location: "The Boots, Antwerp 🇧🇪",
        dates: "Jun",
      },
      {
        title: "Mr Puppy Boots",
        location: "The Boots, Antwerp 🇧🇪",
        dates: "May",
      },
      {
        title: "Puppies in the Dark",
        location: "The Boots, Antwerp 🇧🇪",
        dates: "May",
      },
      {
        title: "XGEAR: Pride Edition",
        location: "Herten 🇩🇪",
        dates: "May",
      },
      {
        title: "Brussels Pride",
        location: "Brussels 🇧🇪",
        dates: "May",
      },
      {
        title: "Tails & Leashes",
        location: "Antwerp 🇧🇪",
        dates: "May",
      },
      {
        title: "Bark & Play",
        location: "Nijmegen 🇳🇱",
        dates: "May",
      },
      {
        title: "Puppy Night @ Babylon Sauna",
        location: "Cologne 🇩🇪",
        dates: "Apr",
      },
      {
        title: "Cage & Key",
        location: "Brussels 🇧🇪",
        dates: "Apr",
      },
      {
        title: "Puppy Social + After Dark",
        location: "Antwerp 🇧🇪",
        dates: "Apr",
      },
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
