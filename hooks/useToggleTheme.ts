import React from "react";
import { ThemeType } from "../lib/types";
import useSWR from "swr";
import { getTheme } from "../lib/api";

const useToggleTheme = (): [ThemeType, () => void] => {
  const { data, mutate } = useSWR("theme", getTheme);

  const [theme, setTheme] = React.useState<ThemeType>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    }

    if (theme === "dark") {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }

    // mutate();
  };

  React.useEffect(() => {
    const currentTheme = window.localStorage.getItem(
      "theme"
    ) as ThemeType | null;

    if (!currentTheme) {
      setTheme("light");
    } else {
      setTheme(currentTheme);
    }
  }, []);

  return [theme, toggleTheme];
};

export default useToggleTheme;
