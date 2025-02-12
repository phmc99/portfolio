"use client";

import { useTheme } from "next-themes";
import { useState } from "react";

const ThemeChangerButton = () => {
  const { theme, setTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="z-20 fixed right-0 bottom-4 w-12 h-10 bg-red-500"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? (
        <div className="flex flex-col">
          The current theme is: {theme}
          <button onClick={() => setTheme("light")}>Light Mode</button>
          <button onClick={() => setTheme("dark")}>Dark Mode</button>
        </div>
      ) : null}
    </div>
  );
};

export default ThemeChangerButton;
