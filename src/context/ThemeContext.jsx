"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      const initialTheme = storedTheme || "light";
      setTheme(initialTheme);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(initialTheme);
    }
  }, []);

  useEffect(() => {
    if (theme && typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  if (!theme) return null;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeContextProvider");
  }
  return context;
}
