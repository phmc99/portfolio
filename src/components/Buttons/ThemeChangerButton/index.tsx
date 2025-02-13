"use client";

import { useTheme } from "next-themes";

const ThemeChangerButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col">
      The current theme is: {theme}
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
};

export default ThemeChangerButton;
