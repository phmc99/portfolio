"use client";

import { useTheme } from "next-themes";
import { LuMoonStar } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";

const ThemeChangerButton = () => {
  const { theme, setTheme } = useTheme();

  const iconByTheme = theme === "light" ? <LuMoonStar /> : <MdOutlineWbSunny />;

  function handleChangeTheme() {
    if (theme === "dark") {
      return setTheme("light");
    }
    return setTheme("dark");
  }

  return (
    <div className="w-16 flex justify-center ">
      <button onClick={handleChangeTheme} className="text-2xl lg:4xl">
        {iconByTheme}
      </button>
    </div>
  );
};

export default ThemeChangerButton;
