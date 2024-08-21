const Building = ({ position, size, image }) => {
	const texture = new THREE.TextureLoader().load(image);
	return (
		<mesh position={position}>
		<boxGeometry args={size} />
		<meshStandardMaterial map={texture} />
		</mesh>
  	);
};

export default Building;