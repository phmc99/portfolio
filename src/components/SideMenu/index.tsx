"use client";

import { ReactNode, useState } from "react";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";

interface ISideMenu {
  children: ReactNode;
}

export default function SideMenu({ children }: ISideMenu) {
  const [menuOpen, setMenuOpen] = useState(false);

  const arrowIconByMenuOpen = menuOpen ? (
    <RiArrowRightDoubleFill />
  ) : (
    <RiArrowLeftDoubleFill />
  );

  const contentByMenuOpen = menuOpen ? <div>{children}</div> : null;

  const buttonStyleByMenuOpen = menuOpen ? "border-r-2" : "";

  return (
    <div
      className={`${
        menuOpen ? "w-auto opacity-100" : "w-10 lg:w-12 opacity-35"
      } z-20 fixed right-0 bottom-4 py-2 max-h-28 bg-zinc-300 dark:bg-zinc-800 rounded-tl-lg rounded-bl-lg shadow-lg`}
    >
      <div className="flex gap-2 items-center text-zinc-800 dark:text-zinc-300">
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className={`${buttonStyleByMenuOpen} border-solid border-zinc-400/50 dark:border-zinc-700 text-4xl lg:8xl`}
        >
          {arrowIconByMenuOpen}
        </div>
        {contentByMenuOpen}
      </div>
    </div>
  );
}
