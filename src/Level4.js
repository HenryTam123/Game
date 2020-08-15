import React, { useEffect, useState } from "react";
import Level5 from "./Level5";

const Level4 = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const button = document.getElementsByClassName("moving-button")[0];
      const posx = Math.floor(Math.random() * window.innerWidth);
      const posy = Math.floor(Math.random() * 600);

      button.style.top = posy + "px";
      button.style.left = posx + "px";
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    const thisLevel = document.getElementsByClassName("level-four-page")[0];
    const nextLevel = document.getElementsByClassName("level-five hide")[0];

    thisLevel.classList.add("hide");
    nextLevel.classList.remove("hide");
  };
  return (
    <div>
      <div className="level-four-page">
        <h2 className="game-h2">Level Four</h2>
        <h3 className="description">Catch the button</h3>
        <button className="moving-button" onClick={handleClick}>
          Level Five
        </button>
      </div>
      <section className="level-five hide">
        <Level5 />
      </section>
    </div>
  );
};

export default Level4;
