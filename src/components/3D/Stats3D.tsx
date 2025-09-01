'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Box, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface Stat3DProps {
  value: string;
  label: string;
  color: string;
  position: [number, number, number];
}

function StatVisualization({ value, label, color, position }: Stat3DProps) {
  const groupRef = useRef<THREE.Group>(null);
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    if (boxRef.current) {
      boxRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      boxRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Box ref={boxRef} args={[1, 1, 1]}>
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </Box>
      
      <Text
        position={[0, 0, 0.6]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter.woff"
      >
        {value}
      </Text>
      
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
      >
        {label}
      </Text>
      
      {/* Floating particles around the stat */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 1.5;
        return (
          <Sphere
            key={i}
            args={[0.05]}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle) * 0.3,
              Math.sin(angle) * radius
            ]}
          >
            <meshStandardMaterial color={color} />
          </Sphere>
        );
      })}
    </group>
  );
}

export default function Stats3D() {
  const stats = [
    { value: "5+", label: "Years Experience", color: "#3b82f6" },
    { value: "50+", label: "Projects Completed", color: "#10b981" },
    { value: "20+", label: "Happy Clients", color: "#8b5cf6" },
    { value: "10+", label: "Technologies", color: "#f59e0b" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-64 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden"
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {stats.map((stat, index) => {
          const angle = (index / stats.length) * Math.PI * 2;
          const radius = 2.5;
          const position: [number, number, number] = [
            Math.cos(angle) * radius,
            Math.sin(angle) * 0.5,
            Math.sin(angle) * radius
          ];
          
          return (
            <StatVisualization
              key={index}
              value={stat.value}
              label={stat.label}
              color={stat.color}
              position={position}
            />
          );
        })}
      </Canvas>
    </motion.div>
  );
}
