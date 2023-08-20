import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../utli";

const GameDetail = ({ pathId }) => {
  const navigate = useNavigate();
  const exitDetailHandler = (e) => {
    const currentElement = e.target;
    if (currentElement.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };
  const { screenshots, game, isLoading } = useSelector((state) => state.id);
  return (
    <>
      {!isLoading && (
        <motion.div
          onClick={exitDetailHandler}
          className={`card-shadow shadow`}
          layoutId={pathId}
        >
          <div className="detail">
            <div className="stats">
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Ratings : {game.rating}</p>
              </div>
              <div className="info">
                <h3>PlatForms</h3>
                <div className="platforms">
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </div>
              </div>
            </div>
            <div className="media">
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.name}
              />
            </div>
            <div className="description">
              <p>{game.description}</p>
            </div>
            <div className="gallery">
              {screenshots.map((data) => (
                <img src={data.image} alt="" key={data.id} />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default GameDetail;
