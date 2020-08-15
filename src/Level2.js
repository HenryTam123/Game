import React from "react";
import Level3 from "./Level3";

const Level2 = () => {
  const handleClick = () => {
    const thisLevel = document.getElementsByClassName("level-two-page")[0];
    const nextLevel = document.getElementsByClassName("level-three hide")[0];

    thisLevel.classList.add("hide");
    nextLevel.classList.remove("hide");
  };
  return (
    <div>
      <div className="level-two-page">
        <h2 className="game-h2">Level Two</h2>
        <h3 className="description">
          Find The{" "}
          <button class="go-level-three" onClick={handleClick}>
            Level Three
          </button>{" "}
          Button
        </h3>
        <h4 className="extra-description4">Invade Invade Invade</h4>
        <h4 className="extra-description5">Kaidor la</h4>
        <h4 className="extra-description6">-1 -1 -1 -1 -1 -1</h4>
        <h4 className="extra-description12">hin ming dai jack D</h4>
      </div>
      <section className="level-three hide">
        <Level3 />
      </section>
    </div>
  );
};

export default Level2;
