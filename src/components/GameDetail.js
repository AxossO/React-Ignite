import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../utli";
import apple from "../img/apple.svg";
import xbox from "../img/xbox.svg";
import steam from "../img/steam.svg";
import nintendo from "../img/nintendo.svg";
import gamepad from "../img/gamepad.svg";
import psss5 from "../img/psss5.svg";
import ps4 from "../img/ps4.svg";
import fullstar from "../img/full-star.png";
import halfstar from "../img/half-star.png";
import emptystar from "../img/empty star.png";
import { popsGame } from "../animations";

const GameDetail = ({ pathId }) => {
  const navigate = useNavigate();
  const exitDetailHandler = (e) => {
    const currentElement = e.target;
    if (currentElement.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };
  const platformImageHandler = (e) => {
    switch (e) {
      case "PlayStation 4":
        return ps4;
      case "Xbox Series S/X":
        return xbox;
      case "PC":
        return steam;
      case "PlayStation 5":
        return psss5;
      case "Xbox One":
        return xbox;
      case "Nintendo":
        return nintendo;
      case "Apple":
        return apple;
      default:
        return gamepad;
    }
  };
  const getstarRating = () => {
    const star = [];
    const ratings = game.rating;
    let addHalfStar = false;
    for (let i = 1; i <= 5; i++) {
      if (i <= ratings) {
        star.push(<img alt="" key={i} src={fullstar}></img>);
      } else if (
        (!addHalfStar && i - ratings <= 0.8) ||
        (!addHalfStar && i - ratings >= 0.48)
      ) {
        star.push(<img alt="" key={i} src={halfstar}></img>);
        addHalfStar = true;
      } else {
        star.push(<img alt="" key={i} src={emptystar}></img>);
      }
    }
    return star;
  };
  const { screenshots, game, isLoading } = useSelector((state) => state.id);
  return (
    <>
      {!isLoading && (
        <motion.div
          variants={popsGame}
          
          onClick={exitDetailHandler}
          className={`card-shadow shadow`}
          layoutId={pathId}
        >
          <motion.div className="detail">
            <div className="stats">
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Ratings : {game.rating}</p>
                {getstarRating()}
              </div>
              <div className="info">
                <h3>PlatForms</h3>
                <div className="platforms">
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={platformImageHandler(data.platform.name)}
                      alt=""
                    ></img>
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
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default GameDetail;
