import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import snowParticlesConfig from "./TestConfig";
function TestParticles() {

  const init = useCallback(async (engine) => {
    await loadFull(engine);
  });

  return (
    <div className="App">
      <Particles
        options={snowParticlesConfig} 
        init={init}
      />
    </div>
  );
}

export default TestParticles;
