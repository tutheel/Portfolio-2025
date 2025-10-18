"use client";
import React from "react";

type Props = {
  text: string;
  active?: boolean;
  onClick?: () => void;
};

export default function Audiences({ text, active = false, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[
        "px-4 py-2 rounded-4xl text-sm font-medium transition border",
        active
          ? "bg-white text-[#7300FF] border-[#7300FF]"
          : "bg-transparent text-white hover:text-[#9A48FF] border-white/20 hover:border-[#9A48FF]"
      ].join(" ")}
    >
      {text}
    </button>
  );
}
