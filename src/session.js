import { formatTime, capitalize } from "./utils.js";

export default function createSession(topic) {
  return {
    topic: capitalize(topic),
    time: formatTime(new Date())
  };
}