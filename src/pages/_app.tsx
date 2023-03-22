import type { AppProps } from 'next/app' 
import { QueryClient, QueryClientProvider, } from 'react-query'
import GlobalStyles from '@/theme/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/theme/theme'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}
