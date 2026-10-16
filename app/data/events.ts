import type { EventItem } from "~/types/events";

export const EVENTS: EventItem[] = [
  {
    date: { start: { month: "Nov", day: 7 } },
    title: "Bark & Play",
    location: "Marcus-Antonius, Nijmegen, Netherlands 🇳🇱",
  },
  {
    date: {
      start: { month: "Nov", day: 13 },
      end: { month: "Nov", day: 15 },
    },
    title: "XGEAR: Spooky Nights",
    location: "Motorworld Zeche Ewald, Herten, Germany 🇩🇪",
  },
];
