import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#CC66FF",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.2,
            random: true,
          },
          size: {
            value: 5,
            random: true,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#CC66FF",
            opacity: 0.4,
            width: 1,
          },
          trail: {
            enable: true,
            length: 5, // Độ dài của dấu vết
            fillColor: "#CC66FF",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
