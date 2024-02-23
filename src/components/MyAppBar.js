import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  TextField,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUnits } from "../store/units-slice";
import { fetchWeatherForecast } from "../store/fetch-actions";

function MyAppBar() {
  const dispatch = useDispatch();
  const units = useSelector((state) => state.units);
  const city = useSelector((state) => state.city);
  const handleUnits = (e) => {
    let unitsObject = {};
    if (e.target.value === "Celsius") {
      unitsObject = {
        UNIT_SYSTEM: "metric",
        tempUnit: "Celsius",
        temp: "°C",
        speed: "m/s",
      };
    } else if (e.target.value === "Fahrenheit") {
      unitsObject = {
        UNIT_SYSTEM: "imperial",
        tempUnit: "Fahrenheit",
        temp: "°F",
        speed: "mph",
      };
    } else {
      unitsObject = {
        UNIT_SYSTEM: "standard",
        tempUnit: "Kelvin",
        temp: "K",
        speed: "m/s",
      };
    }
    dispatch(changeUnits(unitsObject));
    fetchWeatherForecast(unitsObject, city)(dispatch);
  };
  return (
    <AppBar variant="elevation" sx={{ backgroundColor: "orange" }}>
      <Toolbar variant="regular">
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, fontFamily: "cursive" }}
        >
          Weather Mate
        </Typography>
        <TextField
          label="Select Unit"
          select
          fullWidth
          size="small"
          color="primary"
          sx={{ maxWidth: "160px" }}
          onChange={handleUnits}
          value={units.tempUnit}
        >
          <MenuItem value="Celsius">Celsius</MenuItem>
          <MenuItem value="Fahrenheit">Fahrenheit</MenuItem>
          <MenuItem value="Kelvin">Kelvin</MenuItem>
        </TextField>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
