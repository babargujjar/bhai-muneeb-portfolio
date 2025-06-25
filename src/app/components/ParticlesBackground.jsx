"use client";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="w-full h-full"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: 25,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: "#feb436",
          },
          shape: {
            type: ["circle", "image"],
            image: [
              {
                src: "/assets/cart.svg",
                width: 20,
                height: 20,
              },
              {
                src: "/assets/box.svg",
                width: 20,
                height: 20,
              },
              {
                src: "/assets/tag.svg",
                width: 20,
                height: 20,
              },
            ],
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: 20,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            out_mode: "out",
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;
