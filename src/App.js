import { Grid } from "@mui/material";
import React from "react";
import MyAppBar from "./components/MyAppBar";
import WeatherForecast from "./components/WeatherForecast";
import CityInput from "./components/CityInput";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Grid container direction="column">
        <Grid item>
          <MyAppBar />
        </Grid>
        <Grid item>
          <CityInput />
        </Grid>
        <Grid item>
          <WeatherForecast />
        </Grid>
      </Grid>
    </Provider>
  );
};

export default App;
