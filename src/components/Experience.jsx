import { OrbitControls , Sky, Environment} from "@react-three/drei";
import { Avatar } from "./Avatar";
import {useControls} from 'leva';
import { MeshStandardMaterial } from "three";

export const Experience = () => {

  const {animation} = useControls({
    animation: {
      value: 'idle',
      options: ['idle','talk','thank']
    },
  })

  return (
    <>
      <OrbitControls />
      <Sky/>
      {/* Lobby IS THE BEST - 
1. apartment
2. city
3. dawn - more pinkish
4. forest
5. lobby
6. night
7. park
8. studio
9. sunset
10. warehouse */}
      <Environment preset="apartment" />
      <group position-y={-1}>
        <Avatar animation={animation}/>
      </group>
      {animation === 'thank' &&(
        <mesh scale={0.1}  rotation-x={-Math.PI*0.5} position-z={-0.25} position-y={0.90}>
      <torusKnotGeometry/>
      <meshStandardMaterial color='transparent'/>
    </mesh>
      )}

      {/* GREEN SCREEN */}
      {/* <mesh scale={700} rotation-z={-Math.PI*0.5} position-z={-1}>
        <planeGeometry/>
        <meshStandardMaterial color='green'/>
      </mesh> */}

      <mesh scale={7} rotation-x={-Math.PI*0.5} position-y={-0.99}>
        <planeGeometry/>
        <meshStandardMaterial color='cyan'/>
      </mesh> 
    </>
  );
};
