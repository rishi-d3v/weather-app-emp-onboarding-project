import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeCity } from "../store/city-slice";
import { fetchWeatherForecast } from "../store/fetch-actions";

const CityInput = ({ selectedCity, onCityChange }) => {
  const units = useSelector((state) => state.units);
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const handleCityName = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(changeCity(city.toLowerCase()));
    fetchWeatherForecast(units, city.toLowerCase())(dispatch);
  };
  return (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <TextField
        label="Enter City Name"
        variant="outlined"
        size="small"
        value={selectedCity}
        onChange={(e) => handleCityName(e)}
        sx={{
          marginRight: 2,
          marginTop: "80px",
        }}
      />
      <Button
        variant="contained"
        disableRipple
        sx={{ marginTop: "80px", backgroundColor: "#ed6c02c9" }}
        onClick={handleSubmit}
      >
        Get Forecast
      </Button>
    </Box>
  );
};

export default CityInput;
