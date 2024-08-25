import { MeshReflectorMaterial, PresentationControls, Stage } from "@react-three/drei";
import Xtreme from "./Xtreme";

interface ExperienceProps {
  color: string;
}

const Experience: React.FC<ExperienceProps> = ({ color }) => {
  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={1}
      polar={[-Math.PI / 2, Math.PI / 2]}
    >
      <Stage environment={"city"} intensity={0.6} castShadow={false}>
        <Xtreme color={color} />
      </Stage>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-2, -0.625, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010" // Static color for the surface
          metalness={0.5}
          mirror={0}
        />
      </mesh>
    </PresentationControls>
  );
};

export default Experience;
