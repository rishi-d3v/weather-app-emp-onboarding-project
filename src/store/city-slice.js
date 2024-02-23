import { createSlice } from "@reduxjs/toolkit";

const initialState = "delhi";

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    changeCity(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { changeCity } = citySlice.actions;
export default citySlice.reducer;
