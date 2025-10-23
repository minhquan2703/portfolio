'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Scene3D = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const sphere2Ref = useRef<THREE.Mesh>(null);

  const particles = useMemo(() => {
    const count = 150;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const cuteColors = [
      new THREE.Color('#FFB3D9'), // pink
      new THREE.Color('#E0BBE4'), // lavender
      new THREE.Color('#B4E7CE'), // mint
      new THREE.Color('#FFDAB9'), // peach
      new THREE.Color('#B4D7FF'), // sky
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;

      const color = cuteColors[Math.floor(Math.random() * cuteColors.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, colors };
  }, []);

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.15;
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }

    if (sphere2Ref.current) {
      sphere2Ref.current.rotation.y -= delta * 0.1;
      sphere2Ref.current.rotation.z += delta * 0.05;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.03;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <>
      {/* Soft pastel lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.6} color="#FFE8F3" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#E0BBE4" />
      <pointLight position={[5, 5, 5]} intensity={0.3} color="#B4E7CE" />

      {/* Main cute sphere with pastel pink */}
      <Sphere
        ref={sphereRef}
        position={[0, 0, 0]}
        args={[1.8, 64, 64]}
      >
        <MeshDistortMaterial
          color="#FF9ECD"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.1}
          metalness={0.6}
          transparent
          opacity={0.9}
        />
      </Sphere>

      {/* Secondary cute sphere with mint color */}
      <Sphere
        ref={sphere2Ref}
        position={[0, 0, 0]}
        args={[1.2, 32, 32]}
      >
        <MeshDistortMaterial
          color="#A8E6CF"
          attach="material"
          distort={0.2}
          speed={2}
          roughness={0.2}
          metalness={0.5}
          transparent
          opacity={0.4}
        />
      </Sphere>

      {/* Cute colorful particle system */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.positions.length / 3}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particles.colors.length / 3}
            array={particles.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          vertexColors
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>
    </>
  );
};

export default Scene3D;