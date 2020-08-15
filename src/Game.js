import React, { useState, useEffect } from "react";
import Level1 from "./Level1.js";

const Game = () => {
  const [position, setPosition] = useState(["", ""]);

  const handleChange = (e) => {
    if (
      e.clientX + 95 < window.innerWidth &&
      e.clientY + 95 < window.innerHeight
    )
      setPosition([e.clientX, e.clientY]);
  };

  const handleClick = () => {
    const intro = document.getElementsByClassName("game-intro")[0];
    const levelOne = document.getElementsByClassName("level-one")[0];

    intro.classList.add("hide");
    levelOne.classList.remove("hide");
  };

  return (
    <div className="game-page" onMouseMove={handleChange}>
      <div className="game-background"></div>
      <section className="game-intro ">
        <h2 className="game-h2">Welcom to Tam's mini game</h2>
        <h4 className="game-h4"> Find the way towards level four</h4>
        <button className="game-button" onClick={handleClick}>
          Level One
        </button>
      </section>
      <section className="level-one hide">
        <Level1 />
      </section>

      <div
        className="game-circle"
        style={{ top: position[1] - 80 + "px", left: position[0] - 80 + "px" }}
      ></div>
    </div>
  );
};

export default Game;
