import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";

const mouse = { x: 0, y: 0 };
if (typeof window !== "undefined") {
  window.addEventListener("pointermove", (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });
}

const HeroKnot = () => {
  const mesh = useRef();
  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.15;
    mesh.current.rotation.y += delta * 0.2;
    mesh.current.rotation.x += (mouse.y * 0.4 - mesh.current.rotation.x * 0.02) * 0.02;
    mesh.current.rotation.y += (mouse.x * 0.6 - mesh.current.rotation.y * 0.02) * 0.02;
    mesh.current.position.x += (mouse.x * 0.5 - mesh.current.position.x) * 0.03;
    mesh.current.position.y += (mouse.y * 0.3 - mesh.current.position.y) * 0.03;
  });
  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={mesh} scale={1.15}>
        <torusKnotGeometry args={[1, 0.32, 220, 40]} />
        <meshPhysicalMaterial
          color="#6d28d9"
          metalness={0.6}
          roughness={0.12}
          clearcoat={1}
          clearcoatRoughness={0.1}
          emissive="#3b0a64"
          emissiveIntensity={0.35}
          envMapIntensity={1.2}
        />
      </mesh>
    </Float>
  );
};

const OrbitingIco = ({ position, scale, speed }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * speed;
    ref.current.rotation.z += delta * speed * 0.7;
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color="#9D4CDD"
          metalness={0.8}
          roughness={0.15}
          clearcoat={1}
          emissive="#9D4CDD"
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none" }}
      data-testid="hero-3d-canvas"
    >
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ pointerEvents: "none", touchAction: "pan-y" }}
        eventSource={typeof document !== "undefined" ? document.body : undefined}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.35} />
          <directionalLight position={[5, 5, 5]} intensity={2.2} color="#ffffff" />
          <directionalLight position={[-5, -3, 2]} intensity={0.8} color="#9D4CDD" />
          <pointLight position={[0, 3, 3]} intensity={12} color="#b26ce8" distance={12} />
          <pointLight position={[-4, -2, -2]} intensity={8} color="#4c1d95" distance={10} />
          <HeroKnot />
          <OrbitingIco position={[-3.2, 1.4, -1.5]} scale={0.28} speed={0.5} />
          <OrbitingIco position={[3.4, -1.2, -1]} scale={0.35} speed={0.35} />
          <OrbitingIco position={[2.6, 1.8, -2]} scale={0.2} speed={0.7} />
          <Sparkles count={90} scale={[12, 8, 6]} size={1.6} speed={0.3} color="#b26ce8" opacity={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
