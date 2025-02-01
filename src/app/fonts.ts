import { Marcellus, Ubuntu, Prata } from "next/font/google";

export const marcellus = Marcellus({
  weight: ["400"],
  display: "auto",
  preload: true,
});

export const ubuntu = Ubuntu({
  display: "auto",
  weight: ["300", "400", "500", "700"],
  preload: true,
});

export const prata = Prata({ weight: ["400"], display: "auto", preload: true });
