import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import ParticleField from './ParticleField';
import FloatingGlobe from './FloatingGlobe';

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.6} color="hsl(199, 100%, 60%)" />
          <pointLight position={[-10, -10, -5]} intensity={0.3} color="hsl(220, 80%, 60%)" />
          <ParticleField />
          <FloatingGlobe />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;
