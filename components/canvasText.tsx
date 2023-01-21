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

export const CanvasText = (props: { text: string }) => {
  return (
    <Text
      font={
        'https://use.typekit.net/af/0e0201/00000000000000007737220f/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3'
      }
      position={[0, 0, 0]}
      fontSize={2}
      color={'#8948d8'}
    >
      {props.text}
    </Text>
  )
}
