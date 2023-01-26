import Canvas from '@components/layout/canvas'
import Dom from '@components/layout/dom'
import { useState } from 'react'
import HeadingText from '@components/HeadingText'
import 'twin.macro'
// dom components go here
const DOM = (props: { clickSetter: (theme: boolean) => void }) => {
  return (
    <Dom>
      <div tw="h-full w-full flex flex-col items-center justify-around">
        <HeadingText>Physicals</HeadingText>
      </div>
    </Dom>
  )
}

// canvas components go here
const R3F = (props: { click: boolean }) => {
  return <Canvas>{/* <MenuHighlights selectedItem={0} /> */}</Canvas>
}

export default function Physicals(props: {}) {
  const [click, setClick] = useState(false)

  return (
    <>
      <DOM clickSetter={setClick} />
      <R3F {...props} click={click} />
    </>
  )
}
