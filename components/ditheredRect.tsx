import { useMemo, useRef } from 'react'
import { Mesh, BufferGeometry, Material, TextureLoader, Vector3 } from 'three'
import { normalVertexShader } from './vertexShader'
import { ditherShader } from './ditherShader'
import { useFrame, useThree } from '@react-three/fiber'

export const DitherRect = () => {
  const mesh = new Mesh()
  const ref = useRef(mesh)
  const testURL = `https://images.unsplash.com/photo-1603437873662-dc1f44901825?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWRzfGVufDB8fDB8fA%3D%3D&w=1000&q=80`
  const [texture1991] = useMemo(() => {
    const loader = new TextureLoader()
    return [loader.load(testURL)]
  }, [testURL])
  var t = useThree()

  useFrame(({ camera, mouse }) => {
    const x = (t.mouse.x * t.viewport.width) / 2 + t.viewport.width / 4
    const y = (t.mouse.y * t.viewport.height) / 2 - t.viewport.height / 2
    ref.current.position.set(x, y, 0)
  })

  const uniforms = useMemo(
    () => ({
      bayer: {
        type: 'f[16]',
        value: [
          -0.5, 0, -0.375, 0.125, 0.25, -0.25, 0.375, -0.125, -0.3125, 0.1875,
          -0.4375, 0.0625, 0.4375, -0.0625, 0.3125, -0.1875,
        ],
      },
      layer: {
        type: 't',
        value: texture1991,
      },
      resolution: {
        type: 'v2',
        value: [t.size.width, t.size.height],
      },
    }),
    []
  )
  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        fragmentShader={ditherShader}
        vertexShader={normalVertexShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}
