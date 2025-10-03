import React from "react";

type Props = {
  text: string; // e.g., "for Everyone"
};

function Audiences({ text }: Props) {
  return (
    <h1 className="font-medium text-lg text-transparent bg-gradient-to-b from-[#7300FF] from-40%  to-[#2F0069] to-100% bg-clip-text">
      {text}
    </h1>
  );
}

export default Audiences;
