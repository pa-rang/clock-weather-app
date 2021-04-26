import axios from "axios";
import React from "react";
import useSWR from "swr";

function Weather() {
  const fetcher = async () => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=busan&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
    );
    return data;
  };

  const { data, error } = useSWR("/weather", fetcher);

  console.log(`data`, data);

  return <div></div>;
}

export default Weather;
