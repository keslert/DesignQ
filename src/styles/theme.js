import chroma from 'chroma-js';

const theme = {
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  colors: {
    blue: '#2A81F4',
    red: '#f44336',
    black: '#202134',
    darkgray: '#5F6368',
    gray: '#9296A0',
    lightgray: '#EAECEf',
    nearwhite: '#F1F3F6',
    white: '#fff',
  },
  gradients: {
    mello_yellow: 'linear-gradient(145deg, #f8ff00 0%, #3ad59f 100%)',
    linen: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
    purple: 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',

  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ],
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 1px 2px 0 rgba(0,0,0,.1)',
    large: '0 2px 4px 0 rgba(0,0,0,.125)'
  }
}

Object.entries(theme.colors).forEach(([color, value]) => {
  theme.colors[`${color}_darken`] = chroma(value).darken(.1).hex();
})

theme.buttons = {
  primary: {
    color: theme.colors.white,
    background: theme.colors.blue,
    '&:hover': {
      background: theme.colors.blue_darken,
    }
  },
  subtle: {
    color: theme.colors.darkgray,
    background: theme.colors.nearwhite,
    '&:hover': {
      background: theme.colors.nearwhite_darken,
    }
  }
}


export default theme;