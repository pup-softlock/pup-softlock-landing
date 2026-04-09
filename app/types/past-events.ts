export type PastEvent = {
  title: string;
  location: string;
  dates: string;
};

export type PastEventYearGroup = {
  year: string;
  items: PastEvent[];
};
