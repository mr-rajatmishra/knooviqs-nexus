import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGlobe = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
  });

  return (
    <group position={[2.5, 0, 0]}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="hsl(199, 100%, 50%)"
          attach="material"
          distort={0.15}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.35}
        />
      </Sphere>
      {/* Wireframe overlay */}
      <Sphere args={[1.55, 32, 32]}>
        <meshBasicMaterial color="hsl(199, 100%, 60%)" wireframe transparent opacity={0.12} />
      </Sphere>
      {/* Glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.02, 16, 100]} />
        <meshBasicMaterial color="hsl(199, 100%, 50%)" transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

export default FloatingGlobe;
