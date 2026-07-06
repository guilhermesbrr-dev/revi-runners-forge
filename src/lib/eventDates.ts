// Upcoming Revi Runners training dates (2026) — 07:15 local time
export const EVENT_DATES: Date[] = [
  new Date("2026-07-18T07:15:00"),
  new Date("2026-08-08T07:15:00"),
  new Date("2026-08-22T07:15:00"),
  new Date("2026-09-12T07:15:00"),
];

export const getNextEvent = (now: Date = new Date()): Date | null => {
  return EVENT_DATES.find((d) => d.getTime() > now.getTime()) ?? null;
};
