import React from "react";

type ThemeType = "dark" | "light";

const useToggleTheme = (): [ThemeType, () => void] => {
  const [theme, setTheme] = React.useState<ThemeType>("light");
  console.log(`theme`, theme);

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    }

    if (theme === "dark") {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
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
