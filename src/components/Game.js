import React from "react";
import { useDispatch } from "react-redux";
import { loadDetail } from "../Api";
import { Link } from "react-router-dom";
import { smallImage } from "../utli";
import { motion } from "framer-motion";
import { popup } from "../animations";

const Game = ({ image, name, released, id }) => {
  const stringId = id.toString();
  const dispatch = useDispatch();
  const loadidHandler = () => {
    dispatch(loadDetail(id));
    document.body.style.overflow = "hidden";
  };
  return (
    <motion.div
      variants={popup}
      layoutId={stringId}
      onClick={loadidHandler}
      className="game"
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringId}`}
          className="game-image"
          src={smallImage(image, 1280)}
          alt={name}
        />
      </Link>
    </motion.div>
  );
};

export default Game;
