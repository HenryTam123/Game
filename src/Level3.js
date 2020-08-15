import React from "react";
import Level4 from "./Level4";

const Level3 = () => {
  const handleClick = () => {
    const thisLevel = document.getElementsByClassName("level-three-page")[0];
    const nextLevel = document.getElementsByClassName("level-four hide")[0];
    const hiddenDescription = document.getElementsByClassName(
      "hidden-description"
    )[0];

    thisLevel.classList.add("hide");
    nextLevel.classList.remove("hide");
    hiddenDescription.classList.add("hide");
  };
  return (
    <div>
      <div className="level-three-page">
        <h2 className="game-h2">Level Three</h2>
        <h3 className="description">Sneaky~ Sneaky~</h3>
        <button className="go-level-four" onClick={handleClick}>
          Level Four
        </button>
        <h4 className="extra-description7">kaichun 好多女</h4>
        <h4 className="extra-description8">又屈</h4>
        <h4 className="extra-description9">anyone have sumsi ?</h4>
      </div>
      <h2 className="hidden-description">Oh Hello! You are smart =] </h2>
      <h2 className="hidden-description" style={{ top: "60%" }}>
        Level Four
      </h2>
      <section className="level-four hide">
        <Level4 />
      </section>
    </div>
  );
};

export default Level3;
