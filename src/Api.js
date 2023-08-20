import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api_key = "?key=060c3a4692d040f68a15cc03ba509436";
const base_url = `https://api.rawg.io/api/`;
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
getCurrentDay();

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games${api_key}&dates=${currentDate},${nextYear}&orering=-added&page_size=10`;
const new_games = `games${api_key}&dates=${lastYear},${currentDate}&orering=-released&page_size=10`;

const CombineUrl = () => `${base_url}${popular_games}`;
const upcomingGamesCombiner = () => `${base_url}${upcoming_games}`;
const newGamesCombiner = () => `${base_url}${new_games}`;
export const gameDetailURL = (gameId) => `${base_url}games/${gameId}${api_key}`;
export const gameScreenshotURL = (gameId) =>
  `${base_url}games/${gameId}/screenshots${api_key}`;

export const popularGamesURL = createAsyncThunk(
  "games/popularGamesURL",
  async () => {
    const response = await axios.get(CombineUrl());
    return response.data.results;
  }
);
export const loadDetail = createAsyncThunk(
  "games/screenshots&id",
  async (id) => {
    const detailData = await axios.get(gameDetailURL(id));
    const screenshotData = await axios.get(gameScreenshotURL(id));
    return {
      game: detailData.data,
      screenshots: screenshotData.data.results,
    };
  }
);
export const upcomingGamesUrl = createAsyncThunk(
  "games/upcomingGamesUrl",
  async () => {
    const response = await axios.get(upcomingGamesCombiner());
    return response.data.results;
  }
);
export const newGamesUrl = createAsyncThunk("games/newGamesUrl", async () => {
  const response = await axios.get(newGamesCombiner());
  return response.data.results;
});
