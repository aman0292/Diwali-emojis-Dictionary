import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🛕": "Hindu Temple",
  "🎆": "Fireworks",
  "🎇": "Sparkler",
  "🕯️": "Candle",
  "🥻": "Sari",
  "🕉️": "🕉Om",
  "🪔": "Diya Lamp"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function inputEmojiHandler(event) {
    var inputEmoji = event.target.value;
    var meaning = emojiDictionary[inputEmoji];
    if (meaning === undefined) {
      meaning = "we do not have this in our Database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Diwali Emojis!</h1>
      <input onChange={inputEmojiHandler} />
      <h2>{meaning}</h2>
      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.6rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
