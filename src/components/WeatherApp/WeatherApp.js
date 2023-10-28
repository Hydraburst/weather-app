import React, { useState, useEffect } from "react";
import styles from "./WeatherApp.module.css";
import Card from "../UI/Card";
import TopBar from "./TopBar";
import WeatherSection from "./WeatherSection";
import WeatherData from "./WeatherData";

const WeatherApp = () => {
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [temprature, setTemperature] = useState("");
  const [location, setLocation] = useState("");
  const [weatherImg, setWeatherImg] = useState("");
  const [error, setError] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  let content;
  useEffect(() => {
    search("Kropyvnytskyi");
  }, []);

  const search = async (text) => {
    try {
      if (text === "") {
        return;
      }
      let url = `${BASE_URL}?q=${text}&units=Metric&appid=${API_KEY}}`;
      console.log(text);
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
    <div className={styles.cardContainer}>
      <Card className={styles.appContainer}>{content}</Card>
    </div>
  );
};

export default WeatherApp;
