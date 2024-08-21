import Lane from "./Lane"
const StairCase = ({position = {x : 0, y : 0, z : 0}}) => {
  return (
    <>
        <Lane length={0.5} width={1} position={[0 + position.z, 0 + position.y ,0 + position.x]} rotation={[-0.785, 0, 0]}/>
        <Lane length={0.5} width={1} position={[0.502 + position.z , 0 + position.y , 0 + position.x]} rotation={[-0.785,0,0]} />
        <Lane length={1} width={0.76} position={[0.25 + position.z , 0.338 + position.y , 0.703 + position.x]} rotation={[0,0,0]}/>
    </>
  )
}

export default StairCase