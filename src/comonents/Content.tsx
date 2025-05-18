import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";

function Content() {
  return (
    <div className="relative">
      {/* Navbar on top */}
      <div className="fixed invert top-0 left-0 w-full z-50">
        <NavBar />
      </div>

      {/* Hero behind Navbar */}
      <div className="relative z-10 ">
        <Hero />
      </div>
    </div>
  );
}

export default Content;
