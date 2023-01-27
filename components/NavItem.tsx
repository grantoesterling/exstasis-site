import { useMemo, useRef, useState } from 'react'

import { Euler, useFrame, useThree } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import tw from 'twin.macro'
import router from 'next/router'
import { DitherRect } from './ditheredRect'
import { Vector3 } from 'three'

const subFont = '/Roslindale.ttf'

export const NavItem = (props: {
  position: Vector3
  rotation?: Euler
  link: string
  text: string
  size: number
  color: string
}) => {
  const [showHighlight, setShowHighlight] = useState<boolean>(false)
  const outlineWidth = 0.001

  return (
    <>
      <Text
        font={subFont}
        fontSize={props.size}
        color={showHighlight ? '#ffffff' : '#000000'}
        outlineColor={'#000000'}
        outlineWidth={showHighlight ? outlineWidth : 0}
        onPointerEnter={() => setShowHighlight(true)}
        onPointerLeave={() => setShowHighlight(false)}
        onClick={() => router.push(props.link)}
        position={props.position}
        rotation={props.rotation}
      >
        {props.text}
      </Text>
      {showHighlight ? (
        <DitherRect color={props.color} position={props.position} />
      ) : null}
    </>
  )
}
