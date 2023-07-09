import React, { useEffect, useState } from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import "./ThemeSwitch.css";

export default function ThemeSwitcher() {
  const theme = window.localStorage.getItem("theme"); 
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark")
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme);
    setIsDarkMode(currentTheme === "dark");
  }, [currentTheme]);

  const toggleTheme = () => {
    const wasDarkMode = isDarkMode;
    switcher({ theme: wasDarkMode ? themes.light : themes.dark });
  };

  // Avoid theme change flicker
  // if (status === "loading") {
  //   return null;
  // }

  return (
    <button className="color-toggle" type="button" onClick={toggleTheme}>
      <span style={{ padding: 8 }}>{isDarkMode ? "☀️" : "🌜"}</span>
    </button>
  );
}
