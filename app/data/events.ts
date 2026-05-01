import type { EventItem } from "~/types/events";

export const EVENTS: EventItem[] = [
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
    date: { start: { month: "May", day: 13 } },
    title: "Fetish Night",
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
    title: "Gear & Groove",
    location: "The Boots, Antwerp, Belgium 🇧🇪",
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
    title: "Pride Festival Cologne (CSD)",
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
      {
        dates: "Jul 25",
        title: "Milkshake Festival 💶",
        location: "Westerpark",
      },
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
  {
    date: { start: { month: "Sep", day: 26 } },
    title: "XperienceReady2Kink 💶 🏩",
    location: "IJland, Amsterdam, The Netherlands 🇳🇱",
  },
];
