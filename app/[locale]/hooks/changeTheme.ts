"use client";
import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    const bodyClass = document.body.classList;
    bodyClass.remove("light", "dark");
    bodyClass.add(theme);
  }, [theme]);

  const changeTheme = () => {
    try {
      const newTheme = theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);
    } catch (error) {
      console.error("Error toggling theme:", error);
      // Fallback to light theme in case of error
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return { theme, changeTheme };
};

export default useTheme;
