import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import ColorPicker from "./components/ColorPicker";
import './App.css';

function App() {
  const [modelColor, setModelColor] = useState("#101010"); // Color for the model
  const backgroundColor = "#101010"; // Static background color

  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <color attach="background" args={[backgroundColor]} />
        <fog attach="fog" args={[backgroundColor, 10, 20]} />
        <Experience color={modelColor} />
      </Canvas>
      <ColorPicker color={modelColor} onChange={setModelColor} />
    </div>
  );
}

export default App;
