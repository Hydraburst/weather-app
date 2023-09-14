import React from "react";
import cloud_icon from "../../assets/images/cloud.png";
import styles from "./WeatherSection.module.css";
import clear_icon from "../../assets/images/clear.png";
import drizzle_icon from "../../assets/images/drizzle.png";
import rain_icon from "../../assets/images/rain.png";
import snow_icon from "../../assets/images/snow.png";

const WeatherSection = (props) => {
  let weatherImg;
  if (props.weatherIcon === "01d" || props.weatherIcon === "01n") {
    weatherImg = cloud_icon;
  } else if (props.weatherIcon === "02d" || props.weatherIcon === "02n") {
    weatherImg = cloud_icon;
  } else if (props.weatherIcon === "03d" || props.weatherIcon === "03n") {
    weatherImg = drizzle_icon;
  } else if (props.weatherIcon === "04d" || props.weatherIcon === "04n") {
    weatherImg = drizzle_icon;
  } else if (props.weatherIcon === "09d" || props.weatherIcon === "09n") {
    weatherImg = rain_icon;
  } else if (props.weatherIcon === "10d" || props.weatherIcon === "10n") {
    weatherImg = rain_icon;
  } else if (props.weatherIcon === "13d" || props.weatherIcon === "13n") {
    weatherImg = snow_icon;
  } else {
    weatherImg = clear_icon;
  }
  return (
    <div className={styles["weather-wrap"]}>
      <img src={weatherImg} alt="" className={styles.img} />
    </div>
  );
};
export default WeatherSection;
