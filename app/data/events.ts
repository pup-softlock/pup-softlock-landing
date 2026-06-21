import type { EventItem } from "~/types/events";

export const EVENTS: EventItem[] = [
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
  // Not sure if I wanna go to MoG so far away...
  // {
  //   date: { start: { month: "Jul", day: 18 } },
  //   title: "MoG Gear Rave 💶 🏩",
  //   location: "Solothurn, Switzerland 🇨🇭",
  // },
  {
    date: {
      start: { month: "Jul", day: 25 },
      end: { month: "Aug", day: 8 },
    },
    title: "World Pride Amsterdam",
    location: "Amsterdam, The Netherlands 🇳🇱",
    details: [
      {
        dates: "Jul 25",
        title: "National Walkies",
        location: "Dam Square",
      },
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
      // {
      //   dates: "Aug 8",
      //   title: "World Puppy and Furry Walk",
      //   location: "Martin Luther King Park",
      // },
    ],
  },
  {
    date: { start: { month: "Aug", day: 8 } },
    title: "Pride Antwerp",
    location: "Antwerp, Belgium 🇧🇪",
  },
  {
    date: {
      start: { month: "Aug", day: 14 },
      end: { month: "Aug", day: 16 },
    },
    title: "XGEAR: Summer Edition",
    location: "Herten, Germany 🇩🇪",
  },
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
