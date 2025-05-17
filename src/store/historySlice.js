import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visited: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addToHistory: (state, action) => {
      if (!state.visited.includes(action.payload)) {
        state.visited.push(action.payload);
        if (state.visited.length > 10) {
          state.visited.shift();
        }
      }
    },
  },
});

export const { addToHistory } = historySlice.actions;
export default historySlice.reducer;
