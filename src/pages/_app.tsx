import type { AppProps } from 'next/app'
import GlobalStyles from '@/theme/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/theme/theme'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`html { font-family: ${montserrat.style.fontFamily} }`}</style>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
