/*
summary

This file defines different global variables for our css
*/

const theme = {
  device: {
    mobile: `(min-width: 320px)`,
    tablet: `(min-width: 768px)`,
    laptop: `(min-width: 1024px)`
  },
  color: {
    black: '#000000',
    white: '#FFFFFF',
    gray: '#727272',
    success: '#228B22',
    error: '#C40000'
  },
  fonts: {
    size: {
      h1: '48px',
      h2: '40px',
      h3: '32px',
      h4: '24px',
      h5: '18px',
      p: '16px',
      sm: '14px',
      xs: '10px'
    },
    weight: {
      regular: '400',
      semi: '600',
      bold: '800'
    }
  },
  spacing: {
    s1: '8px',
    s2: '16px',
    s3: '24px',
    s4: '32px',
    s5: '40px',
    s6: '48px'
  }
}

export default theme
