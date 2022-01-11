import { theme, globalStyles } from 'styles/global'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles()
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
