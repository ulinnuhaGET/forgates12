import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Box, Cone } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

// Floating geometric shapes component
function FloatingShapes() {
  const sphereRef = useRef<Mesh>(null);
  const boxRef = useRef<Mesh>(null);
  const coneRef = useRef<Mesh>(null);

  // Auto-rotate shapes
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    if (boxRef.current) {
      boxRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      boxRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
    if (coneRef.current) {
      coneRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <>
      {/* Large visible background shapes */}
      <Float
        speed={1.5}
        rotationIntensity={0.5}
        floatIntensity={1}
        floatingRange={[-0.5, 0.5]}
      >
        <Sphere ref={sphereRef} args={[2]} position={[-8, 4, -8]}>
          <meshBasicMaterial
            color="#3B82F6"
            transparent
            opacity={0.03}
            wireframe
          />
        </Sphere>
      </Float>

      <Float
        speed={1.2}
        rotationIntensity={0.3}
        floatIntensity={0.8}
        floatingRange={[-0.3, 0.3]}
      >
        <Box ref={boxRef} args={[3, 3, 3]} position={[6, -3, -10]}>
          <meshBasicMaterial
            color="#F59E0B"
            transparent
            opacity={0.025}
            wireframe
          />
        </Box>
      </Float>

      <Float
        speed={1.8}
        rotationIntensity={0.4}
        floatIntensity={1.2}
        floatingRange={[-0.6, 0.6]}
      >
        <Cone ref={coneRef} args={[1.5, 4]} position={[0, 0, -12]}>
          <meshBasicMaterial
            color="#10B981"
            transparent
            opacity={0.02}
            wireframe
          />
        </Cone>
      </Float>

      {/* Medium floating elements */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <Sphere args={[1]} position={[8, 6, -6]}>
          <meshBasicMaterial
            color="#8B5CF6"
            transparent
            opacity={0.04}
            wireframe
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
        <Box args={[1.5, 1.5, 1.5]} position={[-6, -5, -7]}>
          <meshBasicMaterial
            color="#EF4444"
            transparent
            opacity={0.035}
            wireframe
          />
        </Box>
      </Float>

      {/* Small accent shapes */}
      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <Cone args={[0.8, 2]} position={[4, 8, -5]}>
          <meshBasicMaterial
            color="#06B6D4"
            transparent
            opacity={0.045}
            wireframe
          />
        </Cone>
      </Float>
    </>
  );
}

// Simplified particle system
function ParticleField() {
  const particles = [];
  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 30;
    const y = (Math.random() - 0.5) * 20;
    const z = (Math.random() - 0.5) * 15;
    const size = Math.random() * 0.1 + 0.05;

    particles.push(
      <Float
        key={i}
        speed={Math.random() * 1 + 0.5}
        rotationIntensity={0}
        floatIntensity={Math.random() * 1 + 0.5}
      >
        <Sphere args={[size]} position={[x, y, z]}>
          <meshBasicMaterial color="#64748B" transparent opacity={0.08} />
        </Sphere>
      </Float>,
    );
  }

  return <>{particles}</>;
}

// Main Background3D component
interface Background3DProps {
  className?: string;
}

export default function Background3D({ className = "" }: Background3DProps) {
  return (
    <div className={`fixed inset-0 -z-10 pointer-events-none ${className}`}>
      <Canvas
        camera={{
          position: [0, 0, 15],
          fov: 60,
        }}
        style={{
          background: "transparent",
          width: "100%",
          height: "100%",
        }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Basic lighting */}
        <ambientLight intensity={1} />

        {/* Floating geometric shapes */}
        <FloatingShapes />

        {/* Particle field */}
        <ParticleField />
      </Canvas>
    </div>
  );
}
