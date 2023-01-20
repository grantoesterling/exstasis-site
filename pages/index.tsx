import type { NextPage } from 'next'
import tw from 'twin.macro'
import Canvas from '@components/layout/canvas'
import Dom from '@components/layout/dom'
import { DitherRect } from '@components/ditheredRect'
import { useState } from 'react'
import HeadingText from '@components/HeadingText'
import SubheadingText from '@components/SubheadingText'

// dom components go here
const DOM = (props: { clickSetter: (theme: boolean) => void }) => {
  return (
    <Dom>
      <div tw="h-full w-full flex flex-col items-center justify-around">
        <div tw="flex justify-between w-3/4 gap-x-lg">
          <SubheadingText>Process</SubheadingText>
          <SubheadingText>Collection</SubheadingText>
        </div>
        <HeadingText
          onMouseEnter={() => props.clickSetter(true)}
          onMouseLeave={() => props.clickSetter(false)}
        >
          Exstasis
        </HeadingText>
        <div tw="flex justify-between w-3/4 gap-x-lg">
          <SubheadingText>Artist</SubheadingText>
          <SubheadingText>About</SubheadingText>
        </div>
      </div>
    </Dom>
  )
}

// canvas components go here
const R3F = (props: { click: boolean }) => {
  return <Canvas>{props.click ? <DitherRect /> : null}</Canvas>
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
