import * as React from 'react'

import { Environment, Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ChevronRight, X } from 'lucide-react'

import Loader from '@/components/user/lab-smith/Loader'
import backgroundImage from '@/assets/bg/sepulchral_chapel_rotunda_2k.hdr'

import Experiment_01 from './exp/chemistry/Experiment_01'
import Experiment_02 from './exp/chemistry/Experiment_02'
import Experiment_03 from './exp/chemistry/Experiment_03'
import Experiment_05 from './exp/chemistry/Experiment_05'

import View from './View'

const experiments = [
  {
    label: "Beyer's Test",
    element: <Experiment_01 />,
  },
  {
    label: "Fehling's Test",
    element: <Experiment_02 />,
  },
  {
    label: 'Bromine Water Test',
    element: <Experiment_03 />,
  },
  {
    label: "Tollen's Test",
    element: <Experiment_05 />,
  },
  {
    label: 'Iodine Test',
    element: <Experiment_05 />,
  },
  {
    label: 'Enthalphy of dissolution',
    element: <Html />,
  },
  {
    label: 'Acid/Base Test',
    element: <Experiment_01 />,
  },
] as {
  element: JSX.Element
  label: string
}[]

function LabSmith() {
  const [open, setOpen] = React.useState(false)
  const [index, setIndex] = React.useState(-1)

  return (
    <>
      <div
        className={`absolute bottom-0 left-0 top-0 z-10 m-4 w-1/2 max-w-md rounded bg-background px-6 py-8 shadow transition-all duration-700`}
        style={{ left: open ? 0 : -460 }}
      >
        <div className='prose prose-slate relative prose-ul:list-none prose-ul:p-0 prose-li:cursor-pointer prose-li:rounded prose-li:border prose-li:bg-slate-950 prose-li:p-4 prose-li:shadow'>
          <div className='flex justify-between'>
            <h1>🧪 Experiments</h1>
            <X onClick={() => setOpen(false)} className='cursor-pointer' />
          </div>

          <ChevronRight
            className={`absolute -right-12 top-1/2 cursor-pointer text-white transition-all hover:-right-14 ${
              open && 'scale-150'
            }`}
            onClick={() => setOpen(true)}
          />

          <ul className='grid grid-cols-2 gap-x-4 font-semibold text-white'>
            {experiments.map((e, i) => (
              <li
                className='flex items-center justify-center text-center'
                onClick={() => setIndex(i)}
                key={i}
              >
                {e.label === 'Text to video' ? (
                  <a
                    href='http://127.0.0.1:5000'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='cursor-pointer'
                    style={{ color: 'white' }}
                  >
                    {e.label}
                  </a>
                ) : (
                  e.label
                )}
              </li>
            ))}
          </ul>
          <div className='flex h-full items-end justify-center'>
            <button
              onClick={() => {
                setIndex(experiments.findIndex((e) => e.label === 'Text to video'))
                window.location.href = 'http://127.0.0.1:5000'
              }}
              className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
            >
              Text to Video
            </button>
          </div>
        </div>
      </div>

      <Canvas camera={{ position: [5, 1.3, 8], fov: 50 }} style={{ height: 'calc(100vh - 56px)' }}>
        <React.Suspense fallback={<Loader />}>
          <ambientLight intensity={2} />
          <directionalLight intensity={1} position={[0, 10, 0]} />
          <pointLight intensity={2} position={[1, 1, 1]} />

          {/* <Ground /> */}
          <View />
          {index !== -1 && experiments[index].element}
          <Environment background files={backgroundImage} />
        </React.Suspense>
      </Canvas>
    </>
  )
}

export default LabSmith
