import React, { useState } from "react";
import "./styles.css";

const SelfImprovement = ["On Purpose with Jay Shetty", "The Ranveer Show"];

const Technology = ["ThinkingwithTanay", "The a16z Podcast"];

const Business = [
  " Masters of Scale with Reid Hoffman",
  "We Study Billionaire's"
];

const podcastRatingDictionary = {
  "On Purpose with Jay Shetty": "4.9",
  "The Ranveer Show": "4.5",
  ThinkingwithTanay: "4",
  "The a16z Podcast": "4.5",
  " Masters of Scale with Reid Hoffman": "4.5",
  "We Study Billionaire's": "4.7"
};

export default function App() {
  const [list, setList] = useState([]);

  function clickHandler(event) {
    var userInput = event;

    // console.log(bookRatingDictionary["book1"]);

    switch (userInput) {
      case 1:
        setList(SelfImprovement);
        return;
      case 2:
        setList(Technology);
        return;
      case 3:
        setList(Business);
        return;

      default:
        return;
    }
  }
  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="mic">
          🎙️
        </span>{" "}
        goodpodcasts{" "}
      </h1>
      <p> Checkout my favorite podcasts. Select a genre to get started </p>

      <div>
        <button onClick={() => clickHandler(1)}>SelfImprovement</button>
        <button onClick={() => clickHandler(2)}>Technology</button>
        <button onClick={() => clickHandler(3)}>Business</button>
      </div>
      <hr />
      {list.map((item) => {
        return (
          <li key={item.toString()}>
            <div>
              <p className="podacast inline">{item}</p>
              <div className="rating">
                <small className="rating">
                  {podcastRatingDictionary[item]}
                  {"/5"}
                </small>
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
}
