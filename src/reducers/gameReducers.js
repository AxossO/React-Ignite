  import { createSlice } from "@reduxjs/toolkit";
  import { newGamesUrl, popularGamesURL, upcomingGamesUrl } from "../Api";

  const initialState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: [],
  };

  const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(popularGamesURL.fulfilled, (state, action) => {
          state.popular = action.payload;
        })
        .addCase(newGamesUrl.fulfilled, (state, action) => {
          state.newGames = action.payload;
        })
        .addCase(upcomingGamesUrl.fulfilled, (state, action) => {
          state.upcoming = action.payload;
        });
    },
  });
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
