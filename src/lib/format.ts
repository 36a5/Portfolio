const MONTH_YEAR: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };

export function monthYear(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', MONTH_YEAR).format(date);
}

export function fullDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

/** "Jan 2025 — Mar 2025", "Jan 2025 — present", or a single month for one-shot work. */
export function dateRange(start: Date, end?: Date, status?: string): string {
  const from = monthYear(start);
  if (status === 'in-progress') return `${from} — present`;
  if (!end) return from;
  const to = monthYear(end);
  return from === to ? from : `${from} — ${to}`;
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
