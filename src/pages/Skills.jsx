// src/components/Skills.jsx
import React from "react";
import Skillscard from "../components/Skillscard";

import bg from "../img/bg.png";
import design from "../img/design.png";
import uiux from "../img/uiux.png";
import frontend from "../img/frontend.png";
import backend from "../img/backend.png";
import ml from "../img/ml.png";
import fullstack from "../img/fullstack.png";

export default function Skills() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      
      {/* BACKGROUND FULL */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* OVERLAY (biar kontras & ga pecah) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div
        className="relative z-10 min-h-screen
          px-6 pt-32 pb-20
          flex flex-col items-center"
        style={{ fontFamily: "'Irish Grover', cursive" }}
      >
        <h1 className="text-5xl font-bold text-white mb-16 drop-shadow-lg -mt-25 text-stroke-white">
          Keahlian
        </h1>

        <div
          className="
            w-full max-w-6xl
            grid grid-cols-1
            md:grid-cols-2 lg:grid-cols-3
            gap-10
          "
        >
          <Skillscard title="Desain Grafis" image={design} to="/desaingrafis" />
          <Skillscard title="UI / UX" image={uiux} to="/uiux" />
          <Skillscard title="Frontend" image={frontend} to="/frontend" />
          <Skillscard title="Backend" image={backend} to="/backend" />
          <Skillscard title="Machine Learning" image={ml} to="/machinelearning" />
          <Skillscard title="Fullstack" image={fullstack} to="/fullstack" />
        </div>
      </div>
    </section>
  );
}
