import { useState, useEffect } from "react";

const DarkMode = () => {
  const localData = JSON.parse(localStorage.getItem("theme") || "[]");

  const [theme, setTheme] = useState(localData);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {

    theme === "light" ? setTheme("dark") : setTheme("light");

    theme === "light" ? document.querySelector("body").classList.add("dark-body") : document.querySelector("body").classList.remove("dark-body");
  };

  return [theme, toggleTheme];
};

export default DarkMode;
