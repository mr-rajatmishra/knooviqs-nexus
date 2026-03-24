import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import ParticleField from './ParticleField';
import FloatingGlobe from './FloatingGlobe';
import ConnectionLines from './ConnectionLines';

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="hsl(195, 100%, 60%)" />
          <pointLight position={[-8, -5, -5]} intensity={0.25} color="hsl(215, 80%, 55%)" />
          <pointLight position={[0, 8, 5]} intensity={0.15} color="hsl(180, 60%, 50%)" />
          <ParticleField />
          <ConnectionLines />
          <FloatingGlobe />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;
