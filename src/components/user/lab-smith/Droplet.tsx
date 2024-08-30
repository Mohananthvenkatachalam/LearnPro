import * as React from 'react'
import * as THREE from 'three'

import { useGLTF } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'
import { ExpContext } from '@/pages/user/lab-smith/exp/chemistry/Experiment_01'

import droplet from '@/assets/3d/droplet.glb'

export default function Droplet(props: Partial<typeof a.mesh>) {
  // @ts-ignore
  const { nodes } = useGLTF(droplet)
  const {
    state: { droplet: drop },
    setState,
  } = React.useContext(ExpContext)

  const { position } = useSpring({
    position: drop ? [-0.11, -2, 0.38] : [-0.11, -0.6, 0.38],
    config: { mass: 1, tension: 170, friction: 26 },
  })

  React.useEffect(() => {
    if (drop) {
      setTimeout(() => {
        setState((prev) => ({ ...prev, droplet: false }))
      }, 500)
    }
  }, [drop])

  return (
    <a.group {...props} scale={0.1} position={position} dispose={null}>
      <mesh
        geometry={nodes.model_0004.geometry}
        position={[0.098, -2.596, -0.262]}
        rotation={[-3.076, -0.503, -Math.PI]}
        scale={0.182}
        onClick={() => setState((prev) => ({ ...prev, droplet: true }))}
      >
        <meshPhysicalMaterial
          transparent
          opacity={drop ? 1 : 0}
          color='blue'
          side={THREE.DoubleSide}
        />
      </mesh>
    </a.group>
  )
}
