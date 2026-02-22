import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: {
            value: 60,
            density: { enable: true, area: 800 },
          },
          color: { value: "#14b8a6" },
          opacity: { value: 0.25 },
          size: { value: 2 },
          move: {
            enable: true,
            speed: 0.6,
          },
          links: {
            enable: true,
            color: "#14b8a6",
            opacity: 0.15,
            distance: 120,
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
