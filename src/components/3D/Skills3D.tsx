'use client';

import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Sphere, Box, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Skill } from '@/types';

interface Skills3DProps {
  skills: Skill[];
}

function SkillOrb({ skill, position, index }: { skill: Skill; position: [number, number, number]; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  const colors = {
    frontend: '#3b82f6',
    backend: '#10b981',
    tools: '#8b5cf6',
    other: '#f59e0b'
  };

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.1;
      meshRef.current.scale.setScalar(hovered ? 1.5 : 1);
    }
  });

  return (
    <group position={position}>
      <Sphere
        ref={meshRef}
        args={[0.3]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={colors[skill.category]}
          transparent
          opacity={0.8}
        />
      </Sphere>
      
      {hovered && (
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {skill.name}
        </Text>
      )}
    </group>
  );
}

function SkillVisualization({ skills }: Skills3DProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  const skillPositions = useMemo(() => {
    return skills.map((skill, index) => {
      const angle = (index / skills.length) * Math.PI * 2;
      const radius = 3;
      return [
        Math.cos(angle) * radius,
        Math.sin(angle) * 0.5,
        Math.sin(angle) * radius
      ] as [number, number, number];
    });
  }, [skills]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => (
        <SkillOrb
          key={skill.id}
          skill={skill}
          position={skillPositions[index]}
          index={index}
        />
      ))}
      
      {/* Central hub */}
      <Box args={[0.5, 0.5, 0.5]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1f2937" />
      </Box>
      
      {/* Connecting lines */}
      {skillPositions.map((position, index) => (
        <Torus
          key={`torus-${index}`}
          args={[1.5, 0.02, 8, 100]}
          position={[0, 0, 0]}
          rotation={[Math.PI / 2, (index / skills.length) * Math.PI * 2, 0]}
        >
          <meshStandardMaterial color="#6b7280" transparent opacity={0.3} />
        </Torus>
      ))}
    </group>
  );
}

export default function Skills3D({ skills }: Skills3DProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden"
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <SkillVisualization skills={skills} />
      </Canvas>
      
      {/* Overlay text */}
      <div className="absolute top-4 left-4 text-white">
        <h3 className="text-lg font-semibold">Interactive Skills</h3>
        <p className="text-sm opacity-75">Hover over the orbs to explore</p>
      </div>
    </motion.div>
  );
}
