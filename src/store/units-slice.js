import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  UNIT_SYSTEM: "metric",
  tempUnit: "Celsius",
  temp: "°C",
  speed: "m/s",
};
const unitsSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    changeUnits(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { changeUnits } = unitsSlice.actions;
export default unitsSlice.reducer;
