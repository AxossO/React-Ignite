import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    fetchGames: (state, action) => {
      return { ...state };
    },
  },
});
export const { fetchGames } = gameSlice.actions;
export const gameReducers = gameSlice.reducer;

const userInitialState = {
  name: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",

  initialState: userInitialState,
  reducers: {
    user: (state, action) => {
      return { ...state };
    },
  },
});

export const { user } = userSlice.actions;
export const userReducer = userSlice.reducer;
