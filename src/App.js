import React, { useState } from "react";
import "./styles.css";

var database = {
  Business: [
    {
      url: "https://www.youtube.com/embed/TQMbvJNRpLE?controls=0",
      name: "How to Achieve Your Most Ambitious Goals | Stephen Duneier"
    },
    {
      url: "https://www.youtube.com/embed/_K4TjS9u1t4",
      name: "It Doesn't Take Money To Make Money | Brandon Leibel"
    }
  ],
  Motivation: [
    {
      url: "https://www.youtube.com/embed/xp0O2vi8DX4",
      name: "How to motivate yourself to change your behavior | Tali Sharot "
    },
    {
      url: "https://www.youtube.com/embed/iuIisjRIcVI",
      name: "Motivate yourself with visions, goals and willpower | Hugo Kehr"
    }
  ],
  Education: [
    {
      url: "https://www.youtube.com/embed/iG9CE55wbtY",
      name: "Do schools kill creativity? | Sir Ken Robinson"
    },
    {
      url: "https://www.youtube.com/embed/qH1HCYy1NTc",
      name:
        "Education in India: Are students failing or the system?! | Sonam Wangchuk"
    }
  ]
};

var genreWeKnow = Object.keys(database);

export default function App() {
  const [genre, setGenre] = useState("Business");

  function onClickHandler(item) {
    setGenre(item);
  }

  return (
    <div className="App">
      <h7 id="hero">TEDx Recommendations</h7>

      {genreWeKnow.map((item) => (
        <button id="genre" onClick={() => onClickHandler(item)}>
          {item}
        </button>
      ))}

      {database[genre].map((spec) => (
        <div id="card">
          <iframe width="90%" height="315" src={spec.url}></iframe>
          <span id="spec">{spec.name}</span>
        </div>
      ))}
      <footer>
        For more such videos, go to <a href="https://tedx.com">tedx</a>{" "}
      </footer>
    </div>
  );
}
