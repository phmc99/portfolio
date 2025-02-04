import { Marcellus, Ubuntu, Prata } from "next/font/google";

export const marcellus = Marcellus({
  weight: ["400"],
  display: "auto",
  preload: true,
  subsets: ["latin"],
});

export const ubuntu = Ubuntu({
  display: "auto",
  weight: ["300", "400", "500", "700"],
  preload: true,
  subsets: ["latin"],
});

export const prata = Prata({
  weight: ["400"],
  display: "auto",
  subsets: ["latin"],
  preload: true,
});
