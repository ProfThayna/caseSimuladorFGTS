import React from "react";
import { useThemeProvider } from "../utils/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
  const { currentTheme, changeCurrentTheme } = useThemeProvider();

  return (
    <div>
      <input
        type="checkbox"
        name="light-switch"
        id="light-switch"
        className="light-switch sr-only"
        checked={currentTheme === "dark"}
        onChange={() => changeCurrentTheme(currentTheme === "dark" ? "light" : "dark")}
      />
      <div className="relative inline-flex group">
      <label
        className="flex items-center justify-center cursor-pointer w-10 h-10 hover:bg-gray-100 lg:hover:bg-gray-200 dark:hover:bg-gray-700/50 dark:lg:hover:bg-gray-800 rounded-full"
        htmlFor="light-switch"
      >
        {currentTheme === "dark" ? (
          <SunIcon className="w-6 h-6" aria-hidden="true" />
        ) : (
          <MoonIcon className="w-6 h-6" aria-hidden="true" />
        )}
        <span className="absolute hidden group-hover:flex top-full mt-1 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg whitespace-nowrap">
          Tema claro/escuro
        </span>
      </label>

      </div>
      
    </div>
  );
}
