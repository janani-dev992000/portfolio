'use client';

import { useRef, Suspense } from 'react';
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
      boxRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Main Box */}
      <Box ref={boxRef} args={[0.8, 0.8, 0.8]}>
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.8}
        />
      </Box>
      
      {/* Value Text */}
      <Text
        position={[0, 0, 0.5]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {value}
      </Text>
      
      {/* Label Text */}
      <Text
        position={[0, -0.6, 0]}
        fontSize={0.12}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
      >
        {label}
      </Text>
    </group>
  );
}

function Scene() {
  const stats = [
    { value: "3+", label: "Years Exp", color: "#3b82f6" },
    { value: "25+", label: "Projects", color: "#10b981" },
    { value: "15+", label: "Clients", color: "#8b5cf6" },
    { value: "12+", label: "Tech Stack", color: "#f59e0b" }
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <directionalLight position={[-2, -2, -2]} intensity={0.5} />
      
      {stats.map((stat, index) => {
        const angle = (index / stats.length) * Math.PI * 2;
        const radius = 1.8;
        const position: [number, number, number] = [
          Math.cos(angle) * radius,
          0,
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
    </>
  );
}

export default function Stats3D() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-64 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 rounded-lg overflow-hidden shadow-2xl"
    >
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true }}
      >
        <Scene />
      </Canvas>
    </motion.div>
  );
}
