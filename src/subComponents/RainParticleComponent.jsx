import { useCallback } from "react";
import Particles from "react-tsparticles";
import styled from "styled-components";
import { loadFull } from "tsparticles";
import { rainParticleConfig } from "../config/particlesConfig";

const Box = styled.div`
position: absolute;
top:0;
right: 0;
left: 0;
bottom: 0;
z-index: 0;

`

function RainParticleComponent() {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  });

  return (
    <Box>
      <Particles
        options={rainParticleConfig} 
        init={init}
      />
    </Box>
  );
}

export default RainParticleComponent;
