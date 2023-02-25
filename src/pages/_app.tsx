import '@/styles/globals.css'
import { GlobalStyles } from '@/theme/GlobalStyle'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
