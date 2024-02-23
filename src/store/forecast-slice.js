import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {
    updateForecast(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { updateForecast } = forecastSlice.actions;
export default forecastSlice.reducer;
