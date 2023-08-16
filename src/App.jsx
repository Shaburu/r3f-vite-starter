import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, Scroll } from "@react-three/drei";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 40 }}>
      <color attach="background" args={["#ececec"]} />
      <ScrollControls>
      <Experience />
      <Scroll html>
      <h1>CLEOPATRA</h1>
      <input placeholder="TYPE YOUR QUESTION"></input>
      <button>SUBMIT</button>
      </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
