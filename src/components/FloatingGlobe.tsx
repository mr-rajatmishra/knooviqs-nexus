import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGlobe = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[3, 0.3, -1]}>
      {/* Core sphere */}
      <Sphere args={[1.4, 64, 64]}>
        <MeshDistortMaterial
          color="hsl(195, 100%, 45%)"
          distort={0.12}
          speed={1.2}
          roughness={0.15}
          metalness={0.9}
          transparent
          opacity={0.3}
        />
      </Sphere>
      {/* Inner glow */}
      <Sphere args={[1.2, 32, 32]}>
        <meshBasicMaterial color="hsl(195, 100%, 50%)" transparent opacity={0.05} />
      </Sphere>
      {/* Wireframe */}
      <Sphere args={[1.5, 24, 24]}>
        <meshBasicMaterial color="hsl(195, 100%, 55%)" wireframe transparent opacity={0.08} />
      </Sphere>
      {/* Rings */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0.2, 0]}>
        <torusGeometry args={[2.1, 0.015, 16, 100]} />
        <meshBasicMaterial color="hsl(195, 100%, 50%)" transparent opacity={0.25} />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI / 2.5, -0.3, 0.5]}>
        <torusGeometry args={[2.4, 0.01, 16, 80]} />
        <meshBasicMaterial color="hsl(195, 100%, 60%)" transparent opacity={0.12} />
      </mesh>
      {/* Orbiting dots */}
      {[0, 1.2, 2.4, 3.6, 4.8].map((offset, i) => (
        <mesh key={i} position={[
          Math.cos(offset) * 2.1,
          Math.sin(offset) * 2.1 * Math.cos(Math.PI / 3),
          Math.sin(offset) * 2.1 * Math.sin(Math.PI / 3)
        ]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshBasicMaterial color="hsl(195, 100%, 70%)" />
        </mesh>
      ))}
    </group>
  );
};

export default FloatingGlobe;
