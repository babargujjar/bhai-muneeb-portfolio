"use client";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from "../../../public/particles/particlesjs-config.json";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // loads slim version instead of full to avoid errors
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
      className="absolute top-0 left-0 w-full h-full z-[-1]"
    />
  );
};

export default ParticlesBackground;
