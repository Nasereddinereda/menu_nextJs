import { ThemeProvider, theme, CSSReset } from '@chakra-ui/react';
import '../styles/app.css'
import '../styles/utils.css'



function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
