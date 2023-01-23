import { useMemo, useRef } from 'react'
import {
  Mesh,
  BufferGeometry,
  Material,
  TextureLoader,
  Vector3,
  Color,
  Vector2,
} from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import tw from 'twin.macro'

export const CanvasText = (props: { text: string; size: number }) => {
  return (
    <Text
      font={'/d.woff'}
      position={[0, 0, 0]}
      fontSize={props.size}
      color={'#000000'}
    >
      {props.text}
    </Text>
  )
}
