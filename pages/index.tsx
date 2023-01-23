import type { NextPage } from 'next'
import tw from 'twin.macro'
import Canvas from '@components/layout/canvas'
import Dom from '@components/layout/dom'
import { DitherRect } from '@components/ditheredRect'
import { useState } from 'react'
import HeadingText from '@components/HeadingText'
import SubheadingText from '@components/SubheadingText'
import { MenuHighlights } from '@components/menuHighlights'
import { CanvasText } from '@components/canvasText'
import { Box, Flex } from '@react-three/flex'
import { useThree } from '@react-three/fiber'
import { HomePage } from '@components/HomePage'

// dom components go here
const DOM = (props: { clickSetter: (theme: boolean) => void }) => {
  return (
    <Dom>
      {/* <div tw="h-full w-full flex flex-col items-center justify-around">
        <div tw="flex justify-between w-3/4 gap-x-lg">
          <SubheadingText>Process</SubheadingText>
          <SubheadingText>Collection</SubheadingText>
        </div>
        <HeadingText>Exstasis</HeadingText>
        <div tw="flex justify-between w-3/4 gap-x-lg">
          <SubheadingText>Artist</SubheadingText>
          <SubheadingText>About</SubheadingText>
        </div>
      </div> */}
    </Dom>
  )
}

// canvas components go here
const R3F = (props: { click: boolean }) => {
  return (
    <Canvas>
      <HomePage />

      {/* <MenuHighlights selectedItem={0} /> */}
    </Canvas>
  )
}

export default function Home(props: {}) {
  const [click, setClick] = useState(false)

  return (
    <>
      <DOM clickSetter={setClick} />
      <R3F {...props} click={click} />
    </>
  )
}
