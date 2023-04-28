import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function TestParticles() {
  const [count, setCount] = useState(50);

  const init = useCallback(async (engine) => {
    await loadFull(engine);
  });

  return (
    <div className="App">
      <Particles
        options={{
          particles: {
            color: {
              value: "#B2C6D1",
            },
            number: {
              value: count,
            },
            opacity: {
              value: { min: 0.1, max: 0.2 },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "#B2C6D1",
              },
              polygon: {
                nb_sides: 6,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            size: {
              value: { min: 1, max: 5 },
            },
            move: {
              direction: "bottom",
              enable: true,
              speed: { min: 5, max: 10 },
              straight: false,
            },
          },
        }} 
        init={init}
      />
    </div>
  );
}

export default TestParticles;
