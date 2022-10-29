import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allPlayers: [],
    selectedPlayer:{},
}

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setAllPlayers: (state, action) => {
      state.allPlayers = action.payload
    },
    setSelectedPlayers: (state, action) => {
      state.selectedPlayer = action.payload
    },
    addPlayer: () => {},
  },
});

export const { setAllPlayers, setSelectedPlayers, addPlayer } = gameSlice.actions
export default gameSlice.reducer