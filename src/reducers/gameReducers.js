import { createSlice } from "@reduxjs/toolkit";
import {
  loadDetail,
  newGamesUrl,
  popularGamesURL,
  upcomingGamesUrl,
} from "../Api";

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

// const gameIdSlice = createSlice({
//   name: "id",
//   reducers: {},
//   initialState: {
//     game: { platforms: [] },
//     screenshots: { results: [] },
//     isLoading: true,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loadDetail.fulfilled, (state, action) => {
//         state.game = action.payload;
//       })
//       .addCase(gameScreenshotDetail.fulfilled, (state, action) => {
//         state.screenshots = action.payload;
//       });
//   },
// });

// export const gameIdReducer = gameIdSlice.reducer;

const gameIdSlice = createSlice({
  name: "id",
  initialState: {
    game: { platforms: [] },
    screenshots: { results: [] },
    isLoading: true,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadDetail.fulfilled, (state, action) => {
        state.game = action.payload.game;
        state.screenshots = action.payload.screenshots;
        state.isLoading = false;
      });
  },
});

export const gameIdReducer = gameIdSlice.reducer;

// const userInitialState = {
//   name: "",
//   isLogged: false,
// };

// const userSlice = createSlice({
//   name: "user",

//   initialState: userInitialState,
//   reducers: {
//     user: (state, action) => {
//       return { ...state };
//     },
//   },
// });

// export const { user } = userSlice.actions;
// export const userReducer = userSlice.reducer;
