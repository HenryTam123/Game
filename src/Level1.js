import React from "react";
import Level2 from "./Level2";

const Level1 = () => {
  const handleClick = () => {
    const thisLevel = document.getElementsByClassName("level-one-page")[0];
    const nextLevel = document.getElementsByClassName("level-two hide")[0];

    thisLevel.classList.add("hide");
    nextLevel.classList.remove("hide");
  };
  return (
    <div>
      <div className="level-one-page">
        <h2 className="game-h2">Level One</h2>
        <h3 className="description">Find The Level Two Button</h3>
        <button className="go-level-two" onClick={handleClick}>
          Level Two
        </button>
        <h4 className="extra-description1">Wyllie ho die jack</h4>
        <h4 className="extra-description2">Ai have what do</h4>
        <h4 className="extra-description3">Edwin dont play rank la</h4>
        <h4 className="extra-description10">escape toxic ok?</h4>
      </div>
      <section className="level-two hide">
        <Level2 />
      </section>
    </div>
  );
};

export default Level1;
