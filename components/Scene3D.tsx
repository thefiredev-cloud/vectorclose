'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function FunnelRings() {
  const groupRef = useRef<THREE.Group>(null)

  const rings = useMemo(() => {
    return [
      { y: 1.8, radius: 1.8, color: '#ef4444' },
      { y: 1.0, radius: 1.4, color: '#f87171' },
      { y: 0.2, radius: 1.0, color: '#ef4444' },
      { y: -0.6, radius: 0.65, color: '#f87171' },
      { y: -1.3, radius: 0.35, color: '#ef4444' },
    ]
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group ref={groupRef}>
      {rings.map((ring, i) => (
        <mesh key={i} position={[0, ring.y, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[ring.radius, 0.04, 8, 48]} />
          <meshStandardMaterial
            color={ring.color}
            emissive={ring.color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
      {/* Connecting lines between rings */}
      {rings.slice(0, -1).map((ring, i) => {
        const next = rings[i + 1]
        const height = ring.y - next.y
        const midY = (ring.y + next.y) / 2
        return (
          <mesh key={`cone-${i}`} position={[0, midY, 0]}>
            <cylinderGeometry args={[next.radius, ring.radius, height, 24, 1, true]} />
            <meshStandardMaterial
              color="#ef4444"
              transparent
              opacity={0.08}
              side={THREE.BackSide}
              wireframe={false}
            />
          </mesh>
        )
      })}
    </group>
  )
}

function Particles() {
  const count = 60
  const particlesRef = useRef<THREE.Points>(null)

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const spd = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const t = Math.random() * Math.PI * 2
      const progress = Math.random()
      // Map progress to funnel radius
      const maxRadius = 1.8 - progress * 1.45
      const r = (Math.random() * maxRadius * 0.8)
      pos[i * 3] = Math.cos(t) * r
      pos[i * 3 + 1] = 1.8 - progress * 3.1
      pos[i * 3 + 2] = Math.sin(t) * r
      spd[i] = 0.3 + Math.random() * 0.5
    }
    return [pos, spd]
  }, [])

  const posRef = useRef(new Float32Array(positions))

  useFrame((_, delta) => {
    if (!particlesRef.current) return
    const pos = posRef.current
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] -= delta * speeds[i]
      if (pos[i * 3 + 1] < -1.5) {
        const t = Math.random() * Math.PI * 2
        const r = Math.random() * 1.4
        pos[i * 3] = Math.cos(t) * r
        pos[i * 3 + 1] = 1.8
        pos[i * 3 + 2] = Math.sin(t) * r
      }
    }
    const geom = particlesRef.current.geometry
    geom.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geom.attributes.position.needsUpdate = true
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#ef4444" size={0.06} transparent opacity={0.8} />
    </points>
  )
}

export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#ef4444" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#f87171" />
        <FunnelRings />
        <Particles />
        <OrbitControls
          autoRotate
          autoRotateSpeed={1}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  )
}
