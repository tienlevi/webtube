import { DIVISIONS } from "@/data/division";

export function formatSubscribe(subscribe: number) {
  if (subscribe >= 1000000) {
    return `${(subscribe / 1000000).toFixed(1)}M`;
  } else if (subscribe >= 1000) {
    return `${(subscribe / 1000).toFixed(1)}K`;
  } else {
    return subscribe;
  }
}

export function formatViews(views: number) {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`;
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`;
  } else {
    return views;
  }
}

export function formatDuration(duration: number) {
  const LEADING_ZERO_FORMATTER = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
  });
  const hours = Math.floor(duration / 60 / 60);
  const minutes = Math.floor((duration - hours * 60 * 60) / 60);
  const seconds = duration % 60;

  if (hours > 0) {
    return `${hours}:${LEADING_ZERO_FORMATTER.format(
      minutes
    )}:${LEADING_ZERO_FORMATTER.format(seconds)}`;
  }

  return `${minutes}:${LEADING_ZERO_FORMATTER.format(seconds)}`;
}

export function formatTimeAgo(date: Date) {
  const formatter = new Intl.RelativeTimeFormat(undefined, {
    numeric: "always",
  });
  let duration = (date.getTime() - new Date().getTime()) / 1000;

  for (let i = 0; i < DIVISIONS.length; i++) {
    const division = DIVISIONS[i];
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.name);
    }
    duration /= division.amount;
  }
}

export function formatDate(date: string) {
  const newDate = new Date(date);
  return newDate.toDateString();
}
