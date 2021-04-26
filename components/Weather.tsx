import React from "react";
import useSWR from "swr";
import { getCurrentWeather } from "../lib/api";

function Weather() {
  const { data, error } = useSWR("/weather", () => getCurrentWeather("seoul"));

  console.log(`data`, data);
  const ABS_ZERO = 273.15; // 이 API에서는 온도에 절대영도를 사용함
  const temperatures = (data.main.temp - ABS_ZERO).toFixed(2);

  return (
    <div>
      <div>{data.name}</div>
      <div>{temperatures}°C</div>
      <div>{data.weather[0].main}</div>
    </div>
  );
}

export default Weather;
