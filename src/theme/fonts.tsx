
import { Roboto_Mono, Inconsolata, Montserrat } from 'next/font/google'


export const montserrat = Montserrat({ subsets: ['latin'], weight: [
  '100', '200', '300', '400', '500', '600', '700', '800', '900'
], style: ['italic', 'normal'] })

export const inconsolata = Inconsolata({
  subsets: ['latin'], weight: ['200', '300', '400', '600', '700', '800', '900'],
})
export const robotoMono = Roboto_Mono({
  subsets: ['latin'], weight: ['300', '400', '600', '700']
})