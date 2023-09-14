import React, { useState, useEffect } from "react";
import styles from "./WeatherApp.module.css";
import Card from "../UI/Card";
import TopBar from "./TopBar";
import WeatherSection from "./WeatherSection";
import WeatherData from "./WeatherData";

const WeatherApp = () => {
  let api_key = "c2de0f7a16d97cd300b0c1d8dd9080bb";
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [temprature, setTemperature] = useState("");
  const [location, setLocation] = useState("");
  const [weatherImg, setWeatherImg] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    search("Kropyvnytskyi");
  }, []);

  const search = async (text) => {
    try {
      if (text === "") {
        return;
      }

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=Metric&appid=${api_key}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong! Try again.");
      }
      const data = await response.json();
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemperature(data.main.temp);
      setLocation(data.name);
      setWeatherImg(data.weather[0].icon);
    } catch (error) {
      setError(error.message);
    }
  };
  let content;
  if (
    humidity ||
    wind ||
    temprature ||
    location ||
    (weatherImg !== "" && undefined)
  ) {
    content = (
      <>
        <TopBar onSearch={search} />
        <WeatherSection weatherIcon={weatherImg} />
        <WeatherData
          humidity={humidity}
          wind={wind}
          temprature={temprature}
          location={location}
        />
      </>
    );
  }
  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <div className={styles["app-container"]}>
      <Card className={styles["card-container"]}>{content}</Card>
    </div>
  );
};

export default WeatherApp;
