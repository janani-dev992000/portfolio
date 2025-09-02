'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Box, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Project } from '@/types';

interface ProjectCard3DProps {
  project: Project;
  index: number;
}

function ProjectMesh({ project, index }: ProjectCard3DProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { viewport } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.x = hovered ? Math.sin(state.clock.elapsedTime * 2) * 0.1 : 0;
      meshRef.current.scale.setScalar(hovered ? 1.1 : 1);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <Box
        ref={meshRef}
        args={[2, 1.5, 0.2]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={hovered ? "#3b82f6" : "#6366f1"}
          transparent
          opacity={0.8}
        />
      </Box>
      
      {/* Floating elements around the card */}
      <Sphere
        position={[1.5, 0.8, 0.5]}
        args={[0.1]}
        scale={hovered ? 1.5 : 1}
      >
        <meshStandardMaterial color="#f59e0b" />
      </Sphere>
      
      <Sphere
        position={[-1.5, -0.8, 0.5]}
        args={[0.08]}
        scale={hovered ? 1.3 : 1}
      >
        <meshStandardMaterial color="#10b981" />
      </Sphere>
      
      <Sphere
        position={[0, 1.2, 0.3]}
        args={[0.06]}
        scale={hovered ? 1.2 : 1}
      >
        <meshStandardMaterial color="#ef4444" />
      </Sphere>
    </group>
  );
}

export default function ProjectCard3D({ project, index }: ProjectCard3DProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="relative w-full h-64 bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} />
          <ProjectMesh project={project} index={index} />
        </Canvas>
      </div>
      
      {/* Overlay content */}
      <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center " style={{backgroundColor:'#d8b4fe'}}>
        {/* <div className="text-center text-white p-4">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm opacity-90">{project.description}</p>
        </div> */}
        
      </div>
    </motion.div>
  );
}
