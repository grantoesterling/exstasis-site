import Header from '../config'
import Dom from '@components/layout/dom'
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import GlobalStyles from '@components/global-styles'

const Canvas = dynamic(() => import('@components/layout/canvas'), {
  ssr: true,
})

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
