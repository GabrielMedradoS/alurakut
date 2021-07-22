import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* RESET CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: #D9E6F6;
  }

  /* Caso alguma propriedade do next esteja desalinhada */
  #_next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  /* Propriedades para a imagem ficar responsiva automaticamente */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}