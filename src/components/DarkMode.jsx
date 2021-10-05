import { useState, useEffect } from "react";

const DarkMode = () => {
  const localData = JSON.parse(localStorage.getItem("theme") || "[]");

  const [theme, setTheme] = useState(localData);

  theme === 'dark' ? document.body.style = 'background: #181a1b' : document.body.style = 'background: #fff'; 

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");

  };

  return [theme, toggleTheme];
};

export default DarkMode;
