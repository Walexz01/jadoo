import { Inter, Poppins,Volkhov,Open_Sans } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable:'---font-inter'

})
 
export const poppins = Poppins({
  subsets: ['latin'],
  weight:['100','400','500','600','800','900'],
  style:['italic','normal'],
  variable:'--font-poppins'
})
export const volkhov = Volkhov({
    subsets:['latin'],
    weight:['400','700'],
    style:['italic','normal'],
    variable:'--font-volkhov'
  })
  export const open_Sans = Open_Sans({
    subsets:['latin'],
    style:['italic','normal'],
    weight:['400','600','800',],
    variable:'--font-open_Sans'
  })