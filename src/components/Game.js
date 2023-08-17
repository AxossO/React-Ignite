import React from "react";

const Game = ({ image, name, released }) => {
  return (
    <div className="game">
      {/* {popularGames.map((game) => (
        <div key={game.id}>{game.name}</div>
      ))} */}
      <h3>{name}</h3>
      <p>{released}</p>
      <img className="game-image" src={image} alt={name} />
    </div>
  );
};

export default Game;
