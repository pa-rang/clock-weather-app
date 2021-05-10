import axios from "axios";
import { ThemeType } from "../types";

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

export const getGithubProfile = async (nickname: string) => {
  const { data } = await axios.get(`https://api.github.com/users/${nickname}`);
  return data;
};

export const getTheme = (): ThemeType => {
  const currentTheme = window.localStorage.getItem("theme") as ThemeType | null;

  /** Set Default Theme to Dark */
  if (!currentTheme) {
    window.localStorage.setItem("theme", "dark");
    return "dark";
  }

  return currentTheme;
};
