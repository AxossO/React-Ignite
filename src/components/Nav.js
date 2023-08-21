import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { searchGameURL } from "../Api";
import { useDispatch } from "react-redux";
import { clearSearch } from "../reducers/gameReducers";
import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState();
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(searchGameURL(inputText));
    setInputText("");
  };
  const resetSearch = () => {
    dispatch(clearSearch());
  };
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="nav"
    >
      <div className="nav-img">
        <img onClick={resetSearch} src={logo} alt="" />
        <h1 onClick={resetSearch}>Ignite</h1>
      </div>
      <form className="search">
        <input value={inputText} onChange={inputTextHandler} type="text" />
        <button onClick={submitSearch}>Search</button>
      </form>
    </motion.div>
  );
};

export default Nav;
