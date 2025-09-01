'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, shape, color, speed = 1 }: {
  position: [number, number, number];
  shape: 'box' | 'sphere' | 'torus' | 'octahedron';
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  const renderShape = () => {
    switch (shape) {
      case 'box':
        return <Box args={[0.3, 0.3, 0.3]} />;
      case 'sphere':
        return <Sphere args={[0.2]} />;
      case 'torus':
        return <Torus args={[0.2, 0.1, 8, 100]} />;
      case 'octahedron':
        return <Octahedron args={[0.25]} />;
      default:
        return <Box args={[0.3, 0.3, 0.3]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {renderShape()}
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.7}
        wireframe
      />
    </mesh>
  );
}

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} />
        
        {/* Floating shapes */}
        <FloatingShape
          position={[3, 2, -2]}
          shape="box"
          color="#3b82f6"
          speed={0.5}
        />
        
        <FloatingShape
          position={[-3, 1, -1]}
          shape="sphere"
          color="#10b981"
          speed={0.8}
        />
        
        <FloatingShape
          position={[2, -2, -3]}
          shape="torus"
          color="#8b5cf6"
          speed={0.3}
        />
        
        <FloatingShape
          position={[-2, 3, -2]}
          shape="octahedron"
          color="#f59e0b"
          speed={0.6}
        />
        
        <FloatingShape
          position={[4, -1, -1]}
          shape="box"
          color="#ef4444"
          speed={0.4}
        />
        
        <FloatingShape
          position={[-4, -3, -2]}
          shape="sphere"
          color="#06b6d4"
          speed={0.7}
        />
      </Canvas>
    </div>
  );
}
