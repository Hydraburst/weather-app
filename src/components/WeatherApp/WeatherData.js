import humidity_icon from "../../assets/images/humidity.png";
import styles from "./WeatherData.module.css";
import wind_icon from "../../assets/images/wind.png"
import Lottie from "lottie-react";
import wind_animation from "../../assets/images/LN3hL8f9sx.json"

const WeatherData = (props) => {
  return (
    <>
      <div className={styles["weather-temp"]}>
        {Math.round(props.temprature)}℃
      </div>
      <div className={styles["weather-location"]}>{props.location}</div>
      <div className={styles["weather-data"]}>
        <div className={styles["element"]}>
          <div className={styles["element-item"]}>
            <img src={humidity_icon} alt="" className={styles["ex-img"]} />
            <div className={styles["info-wrap"]}>
              {Math.round(props.humidity)} %
            </div>
          </div>
          <span>Humidity</span>
        </div>
        <div className={styles["element"]}>
          <div className={styles["element-item"]}>
            <img src={wind_icon} alt="" className={styles["ex-img"]} />
            {/* <Lottie animationData={wind_animation} className={styles["ex-img"]}/> */}
            <div className={styles["info-wrap"]}>
              {Math.round(props.wind)} km/h
            </div>
          </div>
          <span>Wind Speed</span>
        </div>
      </div>
    </>
  );
};
export default WeatherData;
