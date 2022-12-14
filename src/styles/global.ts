import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* inter-regular - latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('fonts/inter-v12-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  }
  /* inter-700 - latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('fonts/inter-v12-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyles
