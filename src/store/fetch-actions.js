import { updateForecast } from "./forecast-slice";

export const fetchWeatherForecast = (units, city) => {
  return async (dispatch) => {
    async function fetchData() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&units=${units.UNIT_SYSTEM}&appid=f99bf682c49b7904bc354f9be7bafdf7`
      );
      if (!response.ok) {
        console.log("Fetching failed");
      }
      const data = await response.json();
      return data;
    }
    try {
      const weatherData = await fetchData();
      dispatch(updateForecast(weatherData));
    } catch (error) {
      console.log("Error occured");
    }
  };
};
