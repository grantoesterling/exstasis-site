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
import { Text, useAspect } from '@react-three/drei'
import tw from 'twin.macro'
import { Box, Flex } from '@react-three/flex'
import { CanvasText } from './canvasText'

export const HomePage = () => {
  const { size } = useThree()
  const [vpWidth, vpHeight] = useAspect(size.width, size.height)
  const mainSize = 2
  const subSize = 1.1
  return (
    <Flex
      flexDir="column"
      justify={'center'}
      alignItems="center"
      justifyContent="center"
      centerAnchor
      size={[vpWidth, vpHeight, 0]}
      position={[0, 0, 0]}
    >
      <Box
        flexDir="row"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="30%"
      >
        <Box centerAnchor width="auto" height="auto" flexGrow={1}>
          <CanvasText text="Collection" size={subSize} />
        </Box>
        <Box centerAnchor width="auto" height="auto" flexGrow={1}>
          <CanvasText text="Process" size={subSize} />
        </Box>
      </Box>
      <Box
        width="100%"
        height="30%"
        centerAnchor
        alignItems="center"
        justifyContent="center"
      >
        <CanvasText text="Exstasis" size={mainSize} />
      </Box>
      <Box
        flexDir="row"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="30%"
      >
        <Box centerAnchor width="auto" height="auto" flexGrow={1}>
          <CanvasText text="Artist" size={subSize} />
        </Box>
        <Box centerAnchor width="auto" height="auto" flexGrow={1}>
          <CanvasText text="Physicals" size={subSize} />
        </Box>
      </Box>
    </Flex>
  )
}
