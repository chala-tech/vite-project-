import "./style.css";
import createSession from "./session.js";

const sessionForm = document.querySelector("#sessionForm");
const topicInput = document.querySelector("#topicInput");
const sessionList = document.querySelector("#sessionList");
const total = document.querySelector("#total");

let sessionCount = 0;

sessionForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const topic = topicInput.value.trim();

  if (topic === "") {
    return;
  }

  const session = createSession(topic);

  const listItem = document.createElement("li");
  listItem.textContent = `${session.topic} — ${session.time}`;

  sessionList.append(listItem);

  sessionCount++;

  total.textContent = `Total sessions: ${sessionCount}`;

  topicInput.value = "";
});
