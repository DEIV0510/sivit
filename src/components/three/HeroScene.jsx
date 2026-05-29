import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Float,
  RoundedBox,
  Environment,
  Lightformer,
  Sparkles,
  Icosahedron,
  AdaptiveDpr,
} from '@react-three/drei'
import * as THREE from 'three'

/** Tarjeta-credencial flotante metálica, reactiva al mouse. */
function CredentialCard({ reduced }) {
  const group = useRef()
  const orbit = useRef()

  useFrame((state) => {
    if (reduced) return
    const { pointer, clock } = state
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        pointer.x * 0.5,
        0.045,
      )
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        -pointer.y * 0.32,
        0.045,
      )
    }
    if (orbit.current) {
      const t = clock.getElapsedTime()
      orbit.current.position.set(Math.sin(t * 0.6) * 4.5, Math.cos(t * 0.5) * 3.2, 3.4)
    }
  })

  return (
    <group ref={group}>
      <pointLight ref={orbit} position={[2.5, 2, 3.4]} color="#5688FF" intensity={55} distance={22} />

      <Float
        speed={reduced ? 0 : 1.25}
        rotationIntensity={reduced ? 0 : 0.45}
        floatIntensity={reduced ? 0 : 1.15}
      >
        <group rotation={[0.12, -0.38, 0.05]}>
          {/* Cuerpo de la tarjeta */}
          <RoundedBox args={[3.5, 2.2, 0.14]} radius={0.13} smoothness={6}>
            <meshStandardMaterial
              color="#0a1430"
              metalness={1}
              roughness={0.18}
              envMapIntensity={1.5}
            />
          </RoundedBox>

          {/* Chip / monograma */}
          <mesh position={[-1.18, 0.58, 0.08]}>
            <boxGeometry args={[0.58, 0.44, 0.03]} />
            <meshStandardMaterial
              color="#0B5CFF"
              emissive="#2E6BFF"
              emissiveIntensity={1.6}
              metalness={0.7}
              roughness={0.25}
            />
          </mesh>

          {/* "Foto" */}
          <mesh position={[-1.15, -0.32, 0.08]}>
            <boxGeometry args={[0.62, 0.78, 0.02]} />
            <meshStandardMaterial color="#16244a" metalness={0.5} roughness={0.4} />
          </mesh>

          {/* Líneas de texto */}
          {[
            [0.45, 0.55, 1.9],
            [0.2, 0.2, 1.35],
            [0.05, -0.15, 1.6],
            [-0.1, -0.5, 1.1],
          ].map(([x, y, w], i) => (
            <mesh key={i} position={[x + 0.35, y, 0.075]}>
              <boxGeometry args={[w, 0.1, 0.01]} />
              <meshStandardMaterial color="#243a72" emissive="#1b2c58" emissiveIntensity={0.5} />
            </mesh>
          ))}

          {/* Banda inferior brillante */}
          <mesh position={[0, -0.9, 0.076]}>
            <boxGeometry args={[3.5, 0.16, 0.005]} />
            <meshStandardMaterial color="#0B5CFF" emissive="#0B5CFF" emissiveIntensity={1.2} />
          </mesh>
        </group>
      </Float>
    </group>
  )
}

/** Geometría wireframe de fondo para profundidad tecnológica. */
function BackdropWire({ reduced }) {
  const ref = useRef()
  useFrame((_, delta) => {
    if (reduced || !ref.current) return
    ref.current.rotation.y += delta * 0.05
    ref.current.rotation.x += delta * 0.02
  })
  return (
    <Icosahedron ref={ref} args={[3.6, 1]} position={[0, 0, -2.2]}>
      <meshBasicMaterial color="#1b3a8f" wireframe transparent opacity={0.22} />
    </Icosahedron>
  )
}

export default function HeroScene({ reduced = false }) {
  return (
    <Canvas
      dpr={[1, 1.8]}
      frameloop={reduced ? 'demand' : 'always'}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 6.6], fov: 38 }}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[5, 5, 6]} intensity={1.1} color="#cfe0ff" />

        <CredentialCard reduced={reduced} />
        <BackdropWire reduced={reduced} />

        <Sparkles
          count={70}
          scale={[13, 7.5, 5]}
          size={2.4}
          speed={reduced ? 0 : 0.35}
          color="#9cc0ff"
          opacity={0.7}
        />

        <Environment resolution={256} frames={1}>
          <color attach="background" args={['#04060d']} />
          <Lightformer intensity={3} color="#2E6BFF" position={[0, 2, -4]} scale={[8, 8, 1]} />
          <Lightformer intensity={2} color="#84A9FF" position={[-4, -1, 2]} scale={[5, 5, 1]} />
          <Lightformer intensity={1.4} color="#ffffff" position={[4, 2, 3]} scale={[3, 6, 1]} />
        </Environment>

        <AdaptiveDpr pixelated />
      </Suspense>
    </Canvas>
  )
}
