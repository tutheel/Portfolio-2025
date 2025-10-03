import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: [
    "latin",
    "latin-ext",
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
  ],
});

type Props = {
  text: string;
};

function SecondaryTitle({ text }: Props) {
  return (
    <h1 className={`font-medium text-sm ${inter.className} text-transparent bg-[#7300FF] bg-clip-text`}>
      {text}
    </h1>
  );
}

export default SecondaryTitle;
