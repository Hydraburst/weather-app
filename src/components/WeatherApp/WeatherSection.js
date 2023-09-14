import React from "react";
import styles from "./WeatherSection.module.css";
import Lottie from "lottie-react";
import rain_animation from "../../assets/images/animation_lmj0y6fz.json";
import cloud_animation from "../../assets/images/animation_lmj18h99.json";
import hail_animation from "../../assets/images/animation_lmj1fdvv.json";
import clear_animation from "../../assets/images/animation_lmj1bcrp.json";
import snow_animation from "../../assets/images/animation_lmj1j3b9.json";

const WeatherSection = (props) => {
  let weatherImg;
  if (props.weatherIcon === "01d" || props.weatherIcon === "01n") {
    weatherImg = <Lottie animationData={cloud_animation} />;
  } else if (props.weatherIcon === "02d" || props.weatherIcon === "02n") {
    weatherImg = <Lottie animationData={cloud_animation} />;
  } else if (props.weatherIcon === "03d" || props.weatherIcon === "03n") {
    weatherImg = <Lottie animationData={rain_animation} />;
  } else if (props.weatherIcon === "04d" || props.weatherIcon === "04n") {
    weatherImg = <Lottie animationData={rain_animation} />;
  } else if (props.weatherIcon === "09d" || props.weatherIcon === "09n") {
    weatherImg = <Lottie animationData={hail_animation} />;
  } else if (props.weatherIcon === "10d" || props.weatherIcon === "10n") {
    weatherImg = <Lottie animationData={hail_animation} />;
  } else if (props.weatherIcon === "13d" || props.weatherIcon === "13n") {
    weatherImg = <Lottie animationData={snow_animation} />;
  } else {
    weatherImg = <Lottie animationData={clear_animation} />;
  }
  return <div className={styles["weather-wrap"]}>{weatherImg}</div>;
};
export default WeatherSection;
