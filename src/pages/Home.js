import React from "react";
import { useEffect } from "react";
import { newGamesUrl, popularGamesURL, upcomingGamesUrl } from "../Api";
import { useDispatch, useSelector } from "react-redux";
import Game from "../components/Game";

const Home = () => {
  const dispatch = useDispatch();
  const popularGames = useSelector((state) => state.game.popular);
  const upcomingGames = useSelector((state) => state.game.upcoming);
  const newGames = useSelector((state) => state.game.newGames);
  //   const { popularGames, upcomingGames, newGames } = useSelector(
  //     (state) => state.game
  //   );

  useEffect(() => {
    dispatch(popularGamesURL());
    dispatch(upcomingGamesUrl());
    dispatch(newGamesUrl());
  }, [dispatch]);

  return (
    <div className="game-list-container">
      <h2>Upcoming Games</h2>
      <div className="games">
        {upcomingGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            image={game.background_image}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
