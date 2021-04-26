import React from "react";
import useSWR from "swr";
import { getCurrentWeather } from "../lib/api";

function Weather() {
  const { data, error } = useSWR("/weather", () => getCurrentWeather("seoul"));

  console.log(`data`, data);

  return <div></div>;
}

export default Weather;
