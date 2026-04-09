export type EventDatePoint = {
  /** Short English month label like `"Apr"` or `"Sep"`. */
  month: string;
  /** Optional for future or still-TBA entries that only have a month so far. */
  day?: number;
};

export type EventDate = {
  /** Always present; for single-day events this is the only date point needed. */
  start: EventDatePoint;
  /** Add for multi-day or cross-month events. */
  end?: EventDatePoint;
};

export type EventDetail = {
  /** Label for a sub-plan, meetup, party, or notable moment inside a bigger trip. */
  title: string;
  /** Short venue/place label only, not a full city-country string. */
  location?: string;
  /** Human-readable date text like `"Jul 31, Aug 1"` or `"Sep 12"`. */
  dates?: string;
};

export type EventItem = {
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
