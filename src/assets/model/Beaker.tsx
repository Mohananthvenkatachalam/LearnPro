import * as React from 'react'

import { useGLTF } from '@react-three/drei'
import { ExpContext } from '@/pages/user/lab-smith/exp/chemistry/Experiment_02'

import beaker from '@/assets/3d/beaker.glb'

const params = {
  glassColor: 0x80aaff,
  glassOpacity: 0.5,
  fluidColor: 0x80aaff,
  cloudyFluidColor: 'white',
  newFluidColor: 'red',
  metalness: 0,
  roughness: 0,
}

export default function Beaker(props) {
  const { nodes, materials } = useGLTF(beaker)
  const { state } = React.useContext(ExpContext)
  const [bothTubesReturned, setBothTubesReturned] = React.useState(false)

  React.useEffect(() => {
    const isBothTubesClicked = state.testtube[0] && state.testtube[1]

    if (isBothTubesClicked && !bothTubesReturned) {
      setTimeout(() => {
        setBothTubesReturned(true)
      }, 1000) // Adjust the time based on your animation duration
    }

    materials['Material.003'].color.set(params.glassColor)
    materials['Material.003'].opacity = params.glassOpacity
    materials['Material.003'].transparent = true
    materials['Material.003'].metalness = params.metalness
    materials['Material.003'].roughness = params.roughness

    materials.Water.transparent = true
    materials.Water.opacity = 1

    if (isBothTubesClicked && bothTubesReturned) {
      materials.Water.color.set(params.newFluidColor)
    } else {
      materials.Water.color.set(params.fluidColor)
    }
  }, [state, bothTubesReturned])

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.003']}
        position={[0.07, 0.34, -0.853]}
        rotation={[0, -1.315, 0]}
        scale={[-0.146, -0.108, -0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials.Water}
        position={[0.07, 0.34, -0.853]}
        rotation={[0, -1.315, 0]}
        scale={[-0.144, -0.107, -0.144]}
      />
    </group>
  )
}

useGLTF.preload(beaker)
