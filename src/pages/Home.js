import React from "react";
import { useEffect } from "react";
import { newGamesUrl, popularGamesURL, upcomingGamesUrl } from "../Api";
import { useDispatch, useSelector } from "react-redux";
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../components/Nav";
import { fadeIn } from "../animations";
const Home = () => {
  const dispatch = useDispatch();
  const popularGames = useSelector((state) => state.game.popular);
  const upcomingGames = useSelector((state) => state.game.upcoming);
  const newGames = useSelector((state) => state.game.newGames);
  const searched = useSelector((state) => state.game.searched);

  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  // const gameId = useSelector((state) => state.id.game);

  //   const { popularGames, upcomingGames, newGames } = useSelector(
  //     (state) => state.game
  //   );

  useEffect(() => {
    dispatch(popularGamesURL());
    dispatch(upcomingGamesUrl());
    dispatch(newGamesUrl());
  }, [dispatch]);

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="game-list-container"
    >
      <AnimatePresence>
        {pathId && <GameDetail pathId={pathId} />}
      </AnimatePresence>
      <Nav />
      {searched.length ? (
        <div className=" searched">
          <h2>Searched Games</h2>
          <div className="games">
            {searched.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                image={game.background_image}
                key={game.id}
                id={game.id}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      <h2>Upcoming Games</h2>
      <div className="games">
        {upcomingGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            image={game.background_image}
            key={game.id}
            id={game.id}
          />
        ))}
      </div>
      <h2>Popular Games</h2>
      <div className="games">
        {popularGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            image={game.background_image}
            key={game.id}
            id={game.id}
          />
        ))}
      </div>
      <h2>New Games</h2>
      <div className="games">
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            image={game.background_image}
            key={game.id}
            id={game.id}
          />
        ))}
      </div>
    </motion.div>
  );
};
export default Home;
