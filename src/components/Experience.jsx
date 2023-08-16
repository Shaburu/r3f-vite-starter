import { OrbitControls , Sky, Environment} from "@react-three/drei";
import { Avatar } from "./Avatar";
import {useControls} from 'leva';

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
3. dawn
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
    </>
  );
};
