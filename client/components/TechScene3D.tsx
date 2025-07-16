import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Text,
  Box,
  Sphere,
  useGLTF,
} from "@react-three/drei";
import { useRef, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-navy/5 to-brand-accent/5">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-brand-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-brand-navy font-medium">Loading 3D Scene...</p>
      </div>
    </div>
  );
}

// GLB Model Component
function GLBModel({
  url,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: {
  url: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}) {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <primitive
        ref={modelRef}
        object={scene}
        scale={scale}
        position={position}
        rotation={rotation}
      />
    </Float>
  );
}

// Dynamic Model Loader - tries to load GLB first, falls back to built-in model
function DynamicTechModel({ glbUrl }: { glbUrl?: string }) {
  if (glbUrl) {
    try {
      return <GLBModel url={glbUrl} scale={2} position={[0, 0, 0]} />;
    } catch (error) {
      console.warn(
        `Failed to load GLB model: ${glbUrl}. Using fallback model.`,
      );
    }
  }

  return <DeveloperWorkspace />;
}

// Developer Figure
function DeveloperFigure({
  position,
  laptopColor,
  screenContent,
}: {
  position: [number, number, number];
  laptopColor: string;
  screenContent: string;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.02;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Desk */}
      <Box args={[2.5, 0.1, 1.5]} position={[0, -0.8, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>

      {/* Laptop */}
      <group position={[0, -0.7, 0]} rotation={[0, 0, 0]}>
        {/* Laptop Base */}
        <Box args={[1.8, 0.08, 1.2]} position={[0, 0, 0]}>
          <meshStandardMaterial color={laptopColor} />
        </Box>

        {/* Laptop Screen */}
        <Box
          args={[1.7, 1.2, 0.08]}
          position={[0, 0.6, -0.6]}
          rotation={[-0.2, 0, 0]}
        >
          <meshStandardMaterial color="#1a1a1a" />
        </Box>

        {/* Screen Content */}
        <Box
          args={[1.5, 1.0, 0.02]}
          position={[0, 0.6, -0.55]}
          rotation={[-0.2, 0, 0]}
        >
          <meshStandardMaterial
            color={screenContent === "frontend" ? "#3b82f6" : "#10b981"}
            emissive={screenContent === "frontend" ? "#1e40af" : "#059669"}
            emissiveIntensity={0.3}
          />
        </Box>
      </group>

      {/* Developer (simplified figure) */}
      <group position={[0, -0.2, 0.8]}>
        {/* Head */}
        <Sphere args={[0.15]} position={[0, 0.7, 0]}>
          <meshStandardMaterial color="#fdbcbc" />
        </Sphere>

        {/* Body */}
        <Box args={[0.4, 0.6, 0.2]} position={[0, 0.2, 0]}>
          <meshStandardMaterial
            color={screenContent === "frontend" ? "#3b82f6" : "#10b981"}
          />
        </Box>

        {/* Arms */}
        <Box
          args={[0.1, 0.4, 0.1]}
          position={[-0.25, 0.1, -0.3]}
          rotation={[0.5, 0, 0]}
        >
          <meshStandardMaterial color="#fdbcbc" />
        </Box>
        <Box
          args={[0.1, 0.4, 0.1]}
          position={[0.25, 0.1, -0.3]}
          rotation={[0.5, 0, 0]}
        >
          <meshStandardMaterial color="#fdbcbc" />
        </Box>
      </group>

      {/* Coffee Cup */}
      <group position={[0.8, -0.65, 0.3]}>
        <Box args={[0.15, 0.2, 0.15]}>
          <meshStandardMaterial color="#8B4513" />
        </Box>
        {/* Coffee */}
        <Box args={[0.12, 0.02, 0.12]} position={[0, 0.08, 0]}>
          <meshStandardMaterial color="#2F1B14" />
        </Box>
      </group>

      {/* Additional items based on role */}
      {screenContent === "backend" ? (
        <>
          {/* Server indicator */}
          <Box args={[0.3, 0.5, 0.2]} position={[-1, -0.3, -0.5]}>
            <meshStandardMaterial
              color="#2c3e50"
              emissive="#34495e"
              emissiveIntensity={0.2}
            />
          </Box>
          {/* Database symbol */}
          <Sphere args={[0.1]} position={[-1, 0.2, -0.5]}>
            <meshStandardMaterial
              color="#f39c12"
              emissive="#e67e22"
              emissiveIntensity={0.3}
            />
          </Sphere>
        </>
      ) : (
        <>
          {/* Design elements */}
          <Box args={[0.2, 0.2, 0.02]} position={[1, 0, -0.5]}>
            <meshStandardMaterial color="#e74c3c" />
          </Box>
          <Box args={[0.15, 0.15, 0.02]} position={[1.2, 0.3, -0.5]}>
            <meshStandardMaterial color="#9b59b6" />
          </Box>
        </>
      )}
    </group>
  );
}

// Office Environment
function OfficeEnvironment() {
  return (
    <group>
      {/* Floor */}
      <Box args={[12, 0.1, 8]} position={[0, -1.5, 0]}>
        <meshStandardMaterial color="#f5f5f5" />
      </Box>

      {/* Back Wall */}
      <Box args={[12, 4, 0.1]} position={[0, 0.5, -3]}>
        <meshStandardMaterial color="#ecf0f1" />
      </Box>

      {/* Window */}
      <Box args={[3, 2, 0.05]} position={[-3, 1, -2.95]}>
        <meshStandardMaterial color="#87ceeb" transparent opacity={0.7} />
      </Box>

      {/* Whiteboard */}
      <Box args={[2.5, 1.5, 0.05]} position={[3, 1, -2.95]}>
        <meshStandardMaterial color="#ffffff" />
      </Box>

      {/* Whiteboard content */}
      <Box args={[0.1, 0.5, 0.01]} position={[2.5, 1.2, -2.9]}>
        <meshStandardMaterial color="#e74c3c" />
      </Box>
      <Box args={[0.5, 0.1, 0.01]} position={[2.8, 0.8, -2.9]}>
        <meshStandardMaterial color="#3498db" />
      </Box>
    </group>
  );
}

// Realistic Developer Workspace
function DeveloperWorkspace() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.1}>
      <group ref={groupRef}>
        <OfficeEnvironment />

        {/* Frontend Developer */}
        <DeveloperFigure
          position={[-1.8, 0, 0]}
          laptopColor="#3b82f6"
          screenContent="frontend"
        />

        {/* Backend Developer */}
        <DeveloperFigure
          position={[1.8, 0, 0]}
          laptopColor="#10b981"
          screenContent="backend"
        />

        {/* Shared elements */}
        {/* Meeting table in background */}
        <Box args={[1.5, 0.1, 1]} position={[0, -0.6, -1.5]}>
          <meshStandardMaterial color="#8B4513" />
        </Box>

        {/* Plant */}
        <group position={[0, -0.5, -1.5]}>
          <Box args={[0.2, 0.3, 0.2]} position={[0.6, 0, 0]}>
            <meshStandardMaterial color="#8B4513" />
          </Box>
          <Sphere args={[0.2]} position={[0.6, 0.2, 0]}>
            <meshStandardMaterial color="#228B22" />
          </Sphere>
        </group>
      </group>
    </Float>
  );
}

// Floating Code Elements
function CodeElement({
  position,
  color,
  text,
}: {
  position: [number, number, number];
  color: string;
  text: string;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group position={position}>
        <Box ref={ref} args={[0.8, 0.1, 0.4]}>
          <meshStandardMaterial color={color} transparent opacity={0.8} />
        </Box>
        <Text
          position={[0, 0, 0.21]}
          fontSize={0.12}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
      </group>
    </Float>
  );
}

// Ambient Tech Particles
function TechParticles() {
  return (
    <>
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 6;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const colors = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"];

        return (
          <Float
            key={i}
            speed={0.5 + i * 0.1}
            rotationIntensity={0.2}
            floatIntensity={0.4}
          >
            <Sphere args={[0.06]} position={[x, 2 + Math.sin(i) * 1.5, z]}>
              <meshStandardMaterial
                color={colors[i % colors.length]}
                emissive={colors[i % colors.length]}
                emissiveIntensity={0.1}
                transparent
                opacity={0.6}
              />
            </Sphere>
          </Float>
        );
      })}
    </>
  );
}

// Main 3D Scene
export default function TechScene3D({
  glbModelUrl,
}: { glbModelUrl?: string } = {}) {
  // To use your own GLB model, pass the URL like:
  // <TechScene3D glbModelUrl="/models/your-model.glb" />

  return (
    <div className="w-full h-[400px] md:h-[500px] relative">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [0, 3, 10], fov: 50 }}
          className="bg-transparent"
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
        >
          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={1.2} />
          <pointLight position={[-5, 3, 3]} intensity={0.8} color="#3b82f6" />
          <spotLight
            position={[0, 8, 2]}
            angle={0.4}
            penumbra={0.6}
            intensity={1}
            color="#ffffff"
          />
          {/* Office ceiling light */}
          <pointLight position={[0, 4, -1]} intensity={0.6} color="#f0f0f0" />

          {/* Main Tech Model - Automatically loads GLB if provided */}
          <DynamicTechModel glbUrl={glbModelUrl} />

          {/* Floating Code Elements around developers */}
          <CodeElement position={[-3, 1.5, 1]} color="#3b82f6" text="React" />
          <CodeElement position={[-1.5, 2, -0.5]} color="#06b6d4" text="CSS" />
          <CodeElement position={[3, 1.5, 1]} color="#10b981" text="API" />
          <CodeElement position={[1.5, 2, -0.5]} color="#f39c12" text="DB" />
          <CodeElement position={[0, 2.5, 1]} color="#8b5cf6" text="Git" />
          <CodeElement position={[-4, 0.5, -0.5]} color="#e74c3c" text="UI" />
          <CodeElement position={[4, 0.5, -0.5]} color="#2ecc71" text="Node" />

          {/* Tech Particles */}
          <TechParticles />

          {/* Interactive Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 2.2}
            minPolarAngle={Math.PI / 6}
          />
        </Canvas>
      </Suspense>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
    </div>
  );
}
