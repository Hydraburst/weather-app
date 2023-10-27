import humidity_icon from "../../assets/images/humidity.png";
import styles from "./WeatherData.module.css";
import wind_icon from "../../assets/images/wind.png";
import PropTypes from "prop-types"

const WeatherData = ({ humidity, wind, temprature, location }) => {
  return (
    <>
      <div className={styles.weatherTemp}>{Math.round(temprature)}℃</div>
      <div className={styles.weatherLocation}>{location}</div>
      <div className={styles.weatherData}>
        <div className={styles.element}>
          <div className={styles.elementItem}>
            <img src={humidity_icon} alt="" className={styles.exImg} />
            <div className={styles.infoWrap}>{Math.round(humidity)} %</div>
          </div>
          <span>Humidity</span>
        </div>
        <div className={styles.element}>
          <div className={styles.elementItem}>
            <img src={wind_icon} alt="" className={styles.exImg} />
            <div className={styles.infoWrap}>{Math.round(wind)} km/h</div>
          </div>
          <span>Wind Speed</span>
        </div>
      </div>
    </>
  );
};
WeatherData.propTypes = {
  humidity: PropTypes.number,
  wind: PropTypes.number,
  temprature: PropTypes.number,
  location: PropTypes.string,
};

export default WeatherData;
