'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Sphere, Box } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface Navigation3DProps {
  isMenuOpen: boolean;
  onToggle: () => void;
}

function MenuButton3D({ isMenuOpen, onToggle }: Navigation3DProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.scale.setScalar(hovered ? 1.2 : 1);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <Sphere
        ref={meshRef}
        args={[0.8]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onToggle}
      >
        <meshStandardMaterial
          color={isMenuOpen ? "#ef4444" : "#3b82f6"}
          transparent
          opacity={0.8}
        />
      </Sphere>
      
      {/* Menu icon representation */}
      <Box
        args={[0.3, 0.05, 0.05]}
        position={[0, 0.2, 0.8]}
        rotation={[0, 0, isMenuOpen ? Math.PI / 4 : 0]}
      >
        <meshStandardMaterial color="white" />
      </Box>
      
      <Box
        args={[0.3, 0.05, 0.05]}
        position={[0, 0, 0.8]}
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial color="white" />
      </Box>
      
      <Box
        args={[0.3, 0.05, 0.05]}
        position={[0, -0.2, 0.8]}
        rotation={[0, 0, isMenuOpen ? -Math.PI / 4 : 0]}
      >
        <meshStandardMaterial color="white" />
      </Box>
    </group>
  );
}

export default function Navigation3D({ isMenuOpen, onToggle }: Navigation3DProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 right-4 z-50"
    >
      <div className="w-20 h-20">
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} />
          <MenuButton3D isMenuOpen={isMenuOpen} onToggle={onToggle} />
        </Canvas>
      </div>
    </motion.div>
  );
}
