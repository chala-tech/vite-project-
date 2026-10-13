import dayjs from "dayjs";

export function formatTime(date) {
  return dayjs(date).format("h:mm A");
}

export function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}