export default {
  grid: {
    container: '74rem',
    gutter: '3.2rem',
  },
  border: {
    radius: '0.8rem',
  },
  font: {
    family:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    normal: 400,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
    },
  },
  colors: {
    purple: '#8284FA',
    purpleDark: '#5E60CE',
    blue: '#4EA8DE',
    blueDark: '#1E6F9F',
    gray700: '#0D0D0D',
    gray600: '#1A1A1A',
    gray500: '#262626',
    gray400: '#333333',
    gray300: '#808080',
    gray200: '#D9D9D9',
    gray100: '#F2F2F2',
    danger: '#E25858',
  },
  spacings: {
    xxxsmall: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.2rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.8rem',
    xxlarge: '6.4rem',
  },
  layers: {
    base: 10,
    overlay: 20,
    modal: 30,
    alwaysOnTop: 40,
  },
  transition: {
    default: '300ms ease-in-out',
    fast: '100ms ease-in-out',
  },
} as const
