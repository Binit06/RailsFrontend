import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const UniversalCanvas = ({ children }) => {
  return (
    <Canvas shadows camera={{ position: [10, 10, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[10, 10, 5]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      {children}
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default UniversalCanvas;

