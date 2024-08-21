import React, { useState } from 'react';
import Lane from './Lane';
import UniversalCanvas from './UniversalCanvas';
import StairCase from './StairCase'
import Path from "../assets/path.png"

const Scene = () => {
  const [stairScale, setStairScale] = useState(1);
  const [stairElevation, setStairElevation] = useState(0);

  return (
    <>
      <UniversalCanvas>
        <Lane length={10} width={20} position={[0, 0, -3]} image={Path}/>
        {/* <Lane length={0.6} width={15} position={[-3.5,0.2,-3]}/> */}
        {/* <Lane length={0.5} width={1} position={[0,0,0]} rotation={[-0.785, 0, 0]}/>
        <Lane length={0.5} width={1} position={[0.502,0,0]} rotation={[-0.785,0,0]} />
        <Lane length={1} width={0.76} position={[0.25,0.338,0.703]} rotation={[0,0,0]}/> */}
        <StairCase />
        {/* <Lane length={0.3} width={0.2} position={[-4.1,0.9,-3.9]} /> */}
        {/* <Staircase scale={stairScale} elevation={stairElevation} position={[0, 0.25, -7.5]} /> */}
      </UniversalCanvas>
      <div style={{ position: 'absolute', top: 20, left: 20 }}>
        <button onClick={() => setStairScale(stairScale * 1.2)}>Increase Stair Size</button>
        <button onClick={() => setStairScale(stairScale / 1.2)}>Decrease Stair Size</button>
        <button onClick={() => setStairElevation(stairElevation + 1)}>Increase Elevation</button>
        <button onClick={() => setStairElevation(stairElevation - 1)}>Decrease Elevation</button>
      </div>
    </>
  );
};

export default Scene;

