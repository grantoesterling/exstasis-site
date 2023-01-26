import { useMemo, useRef, useState } from 'react'
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
import { DitherRect } from './ditheredRect'
import { useRouter } from 'next/router'

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
        wrap={'wrap'}
      >
        <Box centerAnchor width="auto" height="100%" flexGrow={1}>
          <Text
            font={subFont}
            fontSize={subSize}
            color={showHighlight === 1 ? '#ffffff' : color}
            outlineColor={'#000000'}
            outlineWidth={showHighlight === 1 ? outlineWidth : 0}
            onPointerEnter={() => setShowHighlight(1)}
            onPointerLeave={() => setShowHighlight(0)}
            onClick={() => router.push('/collection')}
          >
            Collection
          </Text>
          {showHighlight === 1 ? <DitherRect color="#a9184a" /> : null}
        </Box>
        <Box centerAnchor width="auto" height="100%" flexGrow={1}>
          <Text
            font={subFont}
            fontSize={subSize}
            color={showHighlight === 2 ? '#ffffff' : color}
            onPointerEnter={() => setShowHighlight(2)}
            onPointerLeave={() => setShowHighlight(0)}
            outlineColor={'#000000'}
            outlineWidth={showHighlight === 2 ? outlineWidth : 0}
            onClick={() => router.push('/process')}
          >
            Process
          </Text>
          {showHighlight === 2 ? <DitherRect color="#0474B9" /> : null}
        </Box>
      </Box>
      <Box
        width="100%"
        height="30%"
        centerAnchor
        alignItems="center"
        justifyContent="center"
      >
        <Text font={'/d.woff'} fontSize={mainSize} color={color}>
          Exstasis
        </Text>
      </Box>
      <Box
        flexDir="row"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="30%"
        wrap={'wrap'}
      >
        <Box centerAnchor width="auto" height="100%" flexGrow={1}>
          <Text
            font={subFont}
            fontSize={subSize}
            color={showHighlight === 3 ? '#ffffff' : color}
            onPointerEnter={() => setShowHighlight(3)}
            onPointerLeave={() => setShowHighlight(0)}
            outlineColor={'#000000'}
            outlineWidth={showHighlight === 3 ? outlineWidth : 0}
            onClick={() => router.push('/artist')}
          >
            Artist
          </Text>
          {showHighlight === 3 ? <DitherRect color="#048C64" /> : null}
        </Box>
        <Box centerAnchor width="auto" height="100%" flexGrow={1}>
          <Text
            font={subFont}
            fontSize={subSize}
            color={showHighlight === 4 ? '#ffffff' : color}
            onPointerEnter={() => setShowHighlight(4)}
            onPointerLeave={() => setShowHighlight(0)}
            outlineColor={'#000000'}
            outlineWidth={showHighlight === 4 ? outlineWidth : 0}
            onClick={() => router.push('/physicals')}
          >
            Physicals
          </Text>
          {showHighlight === 4 ? <DitherRect color="#EAB004" /> : null}
        </Box>
      </Box>
    </Flex>
  )
}
