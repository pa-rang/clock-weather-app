import axios from "axios";

export const getCurrentWeather = async (cityName: string) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather`,
    {
      params: {
        q: cityName,
        appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
      },
    }
  );

  return data;
};
