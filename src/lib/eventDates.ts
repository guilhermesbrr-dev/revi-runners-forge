// Upcoming Revi Runners training dates (2026)
// All events at 07:15 BRT (UTC-3)
export const EVENT_DATES: Date[] = [
  new Date("2026-07-18T07:15:00-03:00"),
  new Date("2026-08-08T07:15:00-03:00"),
  new Date("2026-08-22T07:15:00-03:00"),
  new Date("2026-09-12T07:15:00-03:00"),
];

export const getNextEvent = (now: Date = new Date()): Date | null => {
  const upcoming = EVENT_DATES.filter((d) => d.getTime() > now.getTime());
  return upcoming.length ? upcoming[0] : null;
};
