import { useMemo, useRef, useState } from 'react'
import {
  Mesh,
  BufferGeometry,
  Material,
  TextureLoader,
  Vector3,
  Color,
  Vector2,
  Euler,
} from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { Text, useAspect } from '@react-three/drei'
import tw from 'twin.macro'
import { Box, Flex } from '@react-three/flex'
import { CanvasText } from './canvasText'
import { DitherRect } from './ditheredRect'
import { useRouter } from 'next/router'
import { NavItem } from './NavItem'

export const HomePage = () => {
  const { size } = useThree()
  const router = useRouter()
  var t = useThree()
  const [vpWidth, vpHeight] = useAspect(size.width, size.height)
  const s = Math.min(1, t.viewport.width / 10)

  const mainSize = 2 * s
  const subSize = 0.8 * s
  const subFont = '/Roslindale.ttf'
  const color = '#000000'
  const [showHighlight, setShowHighlight] = useState<number>(0)
  const outlineWidth = 0.001

  return (
    <>
      <Text font={'/d.woff'} fontSize={mainSize} color={color}>
        Exstasis
      </Text>
      <NavItem
        position={new Vector3(0, t.viewport.height * 0.42, 0)}
        link={'/collection'}
        text={'Collection'}
        color="#cc4d6d"
        size={subSize}
      />
      <NavItem
        position={new Vector3(0, -t.viewport.height * 0.42, 0)}
        link={'/artist'}
        text={'Artist'}
        color="#048C64"
        size={subSize}
      />
      <NavItem
        position={new Vector3(-t.viewport.width * 0.45, 0, 0)}
        rotation={new Euler(0, 0, Math.PI / 2)}
        link={'/process'}
        text={'Process'}
        color="#4A94D0"
        size={subSize}
      />
      <NavItem
        position={new Vector3(t.viewport.width * 0.45, 0, 0)}
        rotation={new Euler(0, 0, -Math.PI / 2)}
        link={'/physicals'}
        text={'Physicals'}
        color="#EAB004"
        size={subSize}
      />
    </>
  )
}
