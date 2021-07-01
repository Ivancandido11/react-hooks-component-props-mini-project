import React from "react"

function emojiList(minutes) {
  const time = minutes < 30 ? 5 : 10;
  const emoji = minutes < 30 ? "☕️" : "🍱";

  let emojis = "";
  for (let i = 0; i < minutes; i += time) {
    emojis += emoji;
  }
  return emojis;
}

const Article = ({
  title,
  date = "January 1, 1970",
  preview,
  minutes
 }) => (
  <article>
    <h3>{title}</h3>
    <small>{date} {emojiList(minutes)} {minutes} minutes read </small>
    <p>{preview}</p>
  </article>
)

export default Article