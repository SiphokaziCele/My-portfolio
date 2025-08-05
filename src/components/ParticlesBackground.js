import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles-engine";

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: { value: "#0f172a" },
          },
          particles: {
            number: {
              value: 60,
            },
            color: {
              value: "#00ffff",
            },
            links: {
              enable: true,
              color: "#00ffff",
              distance: 150,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.2,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
