import * as THREE from 'three';

const Lane = ({ length, width, position, image, rotation = [0, 0, 0] }) => {
  const texture = image ? new THREE.TextureLoader().load(image) : null;

  return (
    <mesh position={position} castShadow receiveShadow rotation={rotation}>
      <boxGeometry args={[length, 0.1, width]} />
      <meshStandardMaterial map={texture} color={!image ? "#e6e6e6" : undefined} />
    </mesh>
  );
};

export default Lane;
