import { useMemo, useRef } from 'react'
import { Mesh, BufferGeometry, Material, TextureLoader, Vector3 } from 'three'

import { useFrame, useThree } from '@react-three/fiber'
import { DitherRect } from './ditheredRect'

export const MenuHighlights = (props: { selectedItem: number }) => {
  const mesh = new Mesh()
  const ref = useRef(mesh)

  var t = useThree()
  let position = new Vector3(0, 0, 0)
  const h = t.viewport.height * 0.5
  const w = t.viewport.width * 0.5
  switch (props.selectedItem) {
    case 0:
      position.x = -t.viewport.width / 4
      position.y = t.viewport.height / 4
      break

    default:
      break
  }

  return <DitherRect position={position} dim={[w, h]} color={'#8948d8'} />
}
