import { ReactNode, useEffect, useRef } from 'react'
import { Preload, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import useStore from '@helpers/store'
import { DoubleSide, Vector2 } from 'three'
import {
  ChromaticAberration,
  EffectComposer,
  Noise,
} from '@react-three/postprocessing'

interface CanvasLayoutProps {
  children: ReactNode
}

const CanvasLayout = ({ children }: CanvasLayoutProps) => {
  const dom = useStore((state) => state.dom)

  let bgCol = '#ffffff' //themeInfo[theme].bgColor

  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        touchAction: 'none',
        // color from blender world theme
        backgroundColor: bgCol,
      }}
      // Uncomment when using
      // depth texture in shaders
      // camera={{
      //     position: [0, 0, 4],
      //     near: 0.1,
      //     far: 100,
      // }}
      /* @ts-ignore */
      onCreated={(state) => state.events.connect(dom.current)}
      // Note: connect to dom so, from what i know, you can still use orbitControls and other features in the future without next canvas within a main dom div
      // Delete above when ready for own project
    >
      <Preload all />
      {/* <Controls />/ */}
      {/* <mesh>
        <boxGeometry args={[50, 50, 50]} />
        <meshBasicMaterial attach="material" color={bgCol} side={DoubleSide} />
      </mesh> */}
      <ambientLight />
      {children}

      {/* <EffectComposer>
        <Noise opacity={0.9} />
        <ChromaticAberration
          offset={new Vector2(0.0011, 0.0011)} // color offset
        />
      </EffectComposer> */}
    </Canvas>
  )
}

export default CanvasLayout
