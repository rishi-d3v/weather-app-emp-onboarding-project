import { Typography, Grid, Card, CardContent } from "@mui/material";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

const WeatherForecast = () => {
  const units = useSelector((state) => state.units);
  const forecast = useSelector((state) => state.forecast);
  const report = JSON.parse(JSON.stringify(forecast));
  if (report) report.list.sort((a, b) => a.dt_txt - b.dt_txt);

  return (
    <Box sx={{ marginTop: "80px" }}>
      {report && (
        <Typography
          variant="h3"
          sx={{ display: "flex", justifyContent: "center", color: "#ed6c02e9" }}
        >
          Forecast for {report.city.name}:
        </Typography>
      )}
      {!report && (
        <Typography
          variant="h4"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          Search for any city
        </Typography>
      )}
      {report && (
        <Grid container spacing={2} sx={{ marginTop: "40px" }}>
          {report.list.map((forecastItem, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                variant="elevation"
                sx={{
                  backgroundColor: "#ffa50080",
                }}
              >
                <CardContent sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="body1">
                      {forecastItem.dt_txt}
                    </Typography>
                    <Typography variant="body2">
                      Temperature: {forecastItem.main.temp.toFixed()}
                      {units.temp}
                    </Typography>
                    <Typography variant="body3">
                      Humidity: {forecastItem.main.humidity}%
                    </Typography>
                    <Typography variant="body3">
                      Wind speed: {forecastItem.wind.speed}
                      {units.speed}
                    </Typography>
                    <Typography variant="body3">
                      {forecastItem.weather[0].description}
                    </Typography>
                  </Box>

                  <img
                    src={`https://openweathermap.org/img/wn/${forecastItem.weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                    style={{ width: "60%", height: "30%" }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default WeatherForecast;
