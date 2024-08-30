import * as THREE from 'three'
import React from 'react'
import testtube from '../3d/testtube.glb'
import { useGLTF, Html } from '@react-three/drei'
import { ExpContext } from '@/pages/user/lab-smith/exp/chemistry/Experiment_02'
import { useSpring, a } from '@react-spring/three'
import { gsap } from 'gsap'

const params = {
  color: 0xffffff,
  specularColor: 0xffffff,
  transmission: 1,
  opacity: 1,
  metalness: 0,
  roughness: 0,
  ior: 1.52,
  thickness: 0.1,
  specularIntensity: 1,
  lightIntensity: 1,
  exposure: 1,
}

function TestTube({
  onClick,
  index,
  position,
  ...props
}: JSX.IntrinsicElements['group'] & { index: number }) {
  const { nodes, materials } = useGLTF(testtube)
  const { state, setState } = React.useContext(ExpContext)

  const meshRef = React.useRef(null!)
  const [lifted, setLifted] = React.useState(false)

  const { posAnim } = useSpring({
    posAnim: lifted ? [position[0] + 0.5, position[1] + 1.5, position[2]] : position,
  })

  React.useEffect(() => {
    if (lifted) {
      gsap.to(meshRef.current.rotation, {
        duration: 0.5,
        x: Math.PI * 0.1,
        z: Math.PI * 0.1,
        repeat: 5,
        yoyo: true,
        ease: 'power1.inOut',
        onComplete: () => {
          setLifted((e) => !e)
          gsap.to(meshRef.current.rotation, {
            duration: 1,
            x: 0,
            z: 0,
          })
        },
      })
    }
  }, [lifted])

  const handleClick = () => {
    // Move the test tube up and towards the right
    setState((prevState) => ({
      ...prevState,
      testtube: prevState.testtube.map((tube, i) => (i === index ? !tube : tube)),
    }))

    onClick()

    setTimeout(() => {
      setLifted((e) => !e)
    }, 5000)
  }

  return (
    <a.group {...props} ref={meshRef} dispose={null} scale={0.033} position={posAnim}>
      <mesh geometry={nodes.Cylinder002.geometry} material={materials.Glass} onClick={handleClick}>
        <meshPhysicalMaterial
          color={params.color}
          metalness={params.metalness}
          roughness={params.roughness}
          ior={params.ior}
          transmission={params.transmission}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
        />
      </mesh>
      <mesh geometry={nodes.Cylinder021.geometry} material={materials['Red Liquid']}>
        {/* Water material */}
        <meshPhysicalMaterial
          color={state.color[index]}
          metalness={params.metalness}
          roughness={params.roughness}
          side={THREE.DoubleSide}
          ior={params.ior}
          transmission={params.transmission}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
        />
      </mesh>
      {/* Center the div */}
      <Html position={[1, 1, 0]} distanceFactor={1} style={{ pointerEvents: 'none' }}>
        <div className='pointer-events-none rounded-md bg-white px-4 py-2 text-center text-lg font-bold shadow-md'>
          {index === 0 ? 'MgSO4' : 'NaOH'}
        </div>
      </Html>
    </a.group>
  )
}

export default TestTube
