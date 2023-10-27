import React from "react";
import styles from "./WeatherSection.module.css";
import Lottie from "lottie-react";
import rain_animation from "../../assets/images/animation_lmj0y6fz.json";
import cloud_animation from "../../assets/images/animation_lmj18h99.json";
import hail_animation from "../../assets/images/animation_lmj1fdvv.json";
import clear_animation from "../../assets/images/animation_lmj1bcrp.json";
import snow_animation from "../../assets/images/animation_lmj1j3b9.json";

import PropTypes from "prop-types";

const WeatherSection = ({ weatherIcon }) => {
  let weatherImg;
  if (weatherIcon === "01d" || weatherIcon === "01n") {
    weatherImg = <Lottie animationData={cloud_animation} />;
  } else if (weatherIcon === "02d" || weatherIcon === "02n") {
    weatherImg = <Lottie animationData={cloud_animation} />;
  } else if (weatherIcon === "03d" || weatherIcon === "03n") {
    weatherImg = <Lottie animationData={rain_animation} />;
  } else if (weatherIcon === "04d" || weatherIcon === "04n") {
    weatherImg = <Lottie animationData={rain_animation} />;
  } else if (weatherIcon === "09d" || weatherIcon === "09n") {
    weatherImg = <Lottie animationData={hail_animation} />;
  } else if (weatherIcon === "10d" || weatherIcon === "10n") {
    weatherImg = <Lottie animationData={hail_animation} />;
  } else if (weatherIcon === "13d" || weatherIcon === "13n") {
    weatherImg = <Lottie animationData={snow_animation} />;
  } else {
    weatherImg = <Lottie animationData={clear_animation} />;
  }
  return <div className={styles.weatherWrap}>{weatherImg}</div>;
};

WeatherSection.propTypes = {
  weatherIcon: PropTypes.string,
};
export default WeatherSection;
