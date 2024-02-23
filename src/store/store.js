import { configureStore } from "@reduxjs/toolkit";
import unitsSlice from "./units-slice";
import forecastSlice from "./forecast-slice";
import citySlice from "./city-slice";

const store = configureStore({
  reducer: {
    units: unitsSlice,
    forecast: forecastSlice,
    city: citySlice,
  },
});

export default store;
