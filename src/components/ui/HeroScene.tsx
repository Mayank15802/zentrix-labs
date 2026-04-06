'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const { clock } = state;
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.3;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={1.5}>
        <MeshDistortMaterial
          color="#0080ff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

export default function HeroScene() {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(!!gl);
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  if (!mounted) return null;

  if (!hasWebGL) {
    return (
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900/10 to-accent/5 backdrop-blur-sm"></div>
    );
  }

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#0080ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ff80" />
        <AnimatedSphere />
        <ContactShadows
          position={[0, -2.5, 0]}
          opacity={0.4}
          scale={10}
          blur={2.5}
          far={4.5}
        />
      </Canvas>
    </div>
  );
}
