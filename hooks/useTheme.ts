import { ThemeType } from "../lib/types";
import useSWR from "swr";
import { getTheme } from "../lib/api";
import { SWR_KEY } from "../lib/constants/swr-keys";

const useTheme = () => {
  const { data, mutate } = useSWR(SWR_KEY.THEME, getTheme);

  return {
    theme: data as ThemeType,
    setTheme: (theme: ThemeType) => {
      window.localStorage.setItem("theme", theme);
      return mutate();
    },
  };
};

export default useTheme;
