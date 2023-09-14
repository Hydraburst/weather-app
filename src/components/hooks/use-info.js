import { useState } from "react";

const useData = (data) => {
  const [weatherInfo, setWeatherInfo] = useState("");

  const setData = () => {
    setWeatherInfo(data);
  };
  return (weatherInfo, setData)
};

export default useData;
