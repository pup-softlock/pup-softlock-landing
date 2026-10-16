export type ProfileStory = {
  id: string;
  label: string;
  content: string[];
  placement: "identity" | "interests";
  enabled: boolean;
};

export type ProfileTag = {
  id: string;
  emoji?: string;
  label: string;
  prominent?: boolean;
};

export const PROFILE = {
  name: "Pup Softlock",
  url: "https://pup-softlock.nl/",
  image: "/pup_softlock_profile_picture.jpeg",
  title: "Pup Softlock | Gay Human Pup, Chastity & Puppy Play",
  description:
    "Meet Pup Softlock, a gay submissive human pup from Venlo, Netherlands. Permanent chastity, puppy adventures, bondage, tails, and speculative kink fiction.",
  identity: "Submissive human pup",
  location: "Venlo, Netherlands",
  relationships: "Married to my keyholder · Beta to Pup Erin",
  puppyhood:
    "Puppy play isn't just something I do at parties. It's part of my identity, my sexuality, and how I see myself. The hood makes it visible, but the puppy doesn't disappear when I take it off. 🐶",
  adventures:
    "I love puppy parties: meeting other pups, making friends, and occasionally finding myself tied up somewhere. It's really the people and the experiences that make them special.",
  chastity: {
    label: "Permanent, Keyholder-Controlled Chastity",
    content:
      "Being locked is my normal state. Even when the cage comes off, chastity doesn't. Masturbation is a rare treat. Orgasms even more so.",
  },
};

export const SOCIAL_LINKS = [
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
];

export const PROFILE_INTRO: ProfileTag[] = [
  { id: "obedience", emoji: "🔒", label: "Permanent titanium-assisted obedience" },
  {
    id: "pettable",
    emoji: "🐶",
    label: "Very pettable",
  },
  { id: "bondage-intro", emoji: "⛓️", label: "Tie me up" },
  { id: "adventures", emoji: "🎉", label: "Weekend puppy adventures" },
];

// The fiction interest is the disclosure beside these tags, not a duplicate tag.
export const PROFILE_INTERESTS: ProfileTag[] = [
  { id: "puppy-play", emoji: "🐶", label: "Puppy play", prominent: true },
  {
    id: "permanent-chastity",
    emoji: "🔒",
    label: "Permanent chastity",
    prominent: true,
  },
  {
    id: "tails",
    emoji: "🐾",
    label: "Plug tails",
    prominent: true,
  },
  { id: "bondage", emoji: "⛓️", label: "Bondage & BDSM" },
  { id: "e-stim", emoji: "⚡", label: "E-stim" },
  { id: "parties", emoji: "🎉", label: "Fetish parties" },
];

export const PROFILE_MATERIALS = ["Latex", "Silicone", "Neoprene"];

export const PROFILE_STORIES: ProfileStory[] = [
  {
    id: "speculative-fiction",
    label: "🤖 Speculative Kink Fiction",
    placement: "interests",
    enabled: false, // Temporarily hidden; keep the approved text for later.
    content: [
      "I have a peculiar fascination with sci-fi fantasies about permanent chastity, AI governance, body augmentation, and technology-assisted submission. I also enjoy building entire fictional worlds and governance systems around these ideas. Apparently, inventing a bureaucracy dedicated to keeping a puppy contained is a perfectly reasonable creative hobby. 😆",
    ],
  },
  {
    id: "decade-of-puppyhood",
    label: "🐾 More Than a Decade of Puppyhood",
    placement: "identity",
    enabled: false,
    content: [
      "I've been exploring puppy play and chastity for more than a decade. What started with my first cage, puppy hood, and tail gradually became something much bigger than collecting gear or trying different kinks. Apparently, I've been a puppy for quite a long time. 🐶",
    ],
  },
];
