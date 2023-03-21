import type { AppProps } from 'next/app' 
import { QueryClient, QueryClientProvider, } from 'react-query'
import GlobalStyles from '@/theme/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/theme/theme'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: [
  '100', '200', '300', '400', '500', '600', '700', '800', '900'
], style: ['italic', 'normal'] })

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`html { font-family: ${montserrat.style.fontFamily} }`}</style>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}
