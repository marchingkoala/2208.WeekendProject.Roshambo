import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allPlayers: [],
    selectedPlayer:{},
}

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducer: {
    setAllPlayers: (state, action) => {
      state.allPlayers = action.payload
    },
    setSelectedPlayers: () => {},
    addPlayer: () => {},
  },
});

export const { setAllPlayers, setSelectedPlayers, addPlayer } = gameSlice.actions
export default gameSlice.reducer