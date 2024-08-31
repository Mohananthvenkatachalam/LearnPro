import * as React from 'react'
import * as THREE from 'three'

import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Lab from '@/assets/model/Lab'

let fwdValue = 0
let bkdValue = 0
let rgtValue = 0
let lftValue = 0

function handleKeyDown(event: KeyboardEvent) {
  switch (event.keyCode) {
    case 38: // up
      fwdValue = 0.1
      break
    case 40: // down
      bkdValue = 0.1
      break
    case 39: // right
      rgtValue = 0.05
      break
    case 37: // left
      lftValue = 0.05
      break
    default:
      break
  }
}

window.addEventListener('keydown', handleKeyDown)
window.addEventListener('keyup', function (event) {
  switch (event.keyCode) {
    case 38: // up
      fwdValue = 0
      break
    case 40: // down
      bkdValue = 0
      break
    case 39: // right
      rgtValue = 0
      break
    case 37: // left
      lftValue = 0
      break
    default:
      break
  }
})

type LabMesh = THREE.Mesh<
  THREE.BufferGeometry<THREE.NormalBufferAttributes>,
  THREE.Material | THREE.Material[],
  THREE.Object3DEventMap
>

export default function View() {
  const controls = React.useRef<typeof OrbitControls>(null)
  const personRef = React.useRef<LabMesh>(null!)

  useFrame((state, delta) => {
    // var moveDistance = 10 * delta; // 200 pixels per second
    var rotateAngle = (Math.PI / 2) * delta // pi/2 radians (90 degrees) per second

    if (fwdValue > 0) personRef.current.translateZ(-fwdValue)
    if (bkdValue > 0) personRef.current.translateZ(bkdValue)

    if (lftValue > 0) personRef.current.rotateOnAxis(new THREE.Vector3(0, 1, 0), rotateAngle)
    if (rgtValue > 0) personRef.current.rotateOnAxis(new THREE.Vector3(0, 1, 0), -rotateAngle)

    // update the texture camera's position and look direction
    var relativeCameraOffset = new THREE.Vector3(0, 0, 1)
    relativeCameraOffset.applyMatrix4(personRef.current.matrixWorld)
    var cameraOffset = relativeCameraOffset

    state.camera.position.x = cameraOffset.x
    state.camera.position.y = cameraOffset.y
    state.camera.position.z = cameraOffset.z
    var relativeCameraLookOffset = new THREE.Vector3(0, 0, -1)
    var cameraLookOffset = relativeCameraLookOffset.applyMatrix4(personRef.current.matrixWorld)
    state.camera.lookAt(cameraLookOffset)
  })

  return (
    <>
      <OrbitControls
        // @ts-ignore
        ref={controls}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        autoRotate={false}
        autoRotateSpeed={0}
        rotateSpeed={0.4}
        enableDamping={false}
        dampingFactor={0.1}
        // enableZoom={false}
        // enablePan={false}
        // minAzimuthAngle={-Math.PI / 2}
        // maxAzimuthAngle={Math.PI / 4}
      />

      {/* <axesHelper args={[50]} /> */}
      <gridHelper args={[100, 50]} />

      <mesh //
        ref={personRef}
        position={[5, 1.3, 8]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial attach='material' transparent opacity={0} />
      </mesh>

      <Lab />
    </>
  )
}
