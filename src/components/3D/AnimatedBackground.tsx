'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import PerformanceOptimizer from './PerformanceOptimizer';

// Simple Points component without drei dependency
function SimplePoints({ positions }: { positions: Float32Array }) {
  const ref = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.075;
    }
  });

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#8b5cf6"
        size={0.05}
        sizeAttenuation={true}
        transparent
      />
    </points>
  );
}

function AnimatedParticles() {
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000);
    
    for (let i = 0; i < 2000; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }
    
    return positions;
  }, []);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <SimplePoints positions={particlesPosition} />
    </group>
  );
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, -2]}>
      <octahedronGeometry args={[0.5, 0]} />
      <meshStandardMaterial color="#a855f7" wireframe />
    </mesh>
  );
}

function FloatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 2;
      meshRef.current.position.z = Math.cos(state.clock.elapsedTime * 0.5) * 2;
    }
  });

  return (
    <mesh ref={meshRef} position={[-2, 0, -1]}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial color="#c084fc" wireframe />
    </mesh>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <PerformanceOptimizer>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: 'transparent' }}
          performance={{ min: 0.5 }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedParticles />
          <FloatingGeometry />
          <FloatingCube />
        </Canvas>
      </PerformanceOptimizer>
    </div>
  );
}
