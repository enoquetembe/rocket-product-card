import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.GRAY};

    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.VIOLET};
    font-family: 'Lato', sans-serif;
  }
  
  h1 {
    font-family: 'Crimson Pro', serif;
    font-size: 600;
  }
`
