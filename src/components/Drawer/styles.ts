import { styled, keyframes } from '@/../stitches.config'

export const DrawerContainer = styled('div', {
  '@sm': {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  '@md': {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    clip: 'rect(0, 0, 0, 0)',
    margin: '-1px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    borderWidth: '0',
  },
})

const widthUp = keyframes({
  '0%': { width: '0' },
  '100%': { width: '18.75rem' },
})

export const DrawerContent = styled('div', {
  animation: `${widthUp} 0.5s`,
  width: '18.75rem',
  minHeight: '100vh',
  float: 'right',
  padding: '1rem',
  backgroundColor: '$white',
  '& header': {
    float: 'right',
    '& button': {
      border: 'none',
      color: '$gray700',
      backgroundColor: '$white',
      cursor: 'pointer',
      '&:hover': {
        color: '$yellow',
      },
    },
  },
  '& ul': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
    listStyle: 'none',
    marginTop: '4rem',
    '& a': {
      textDecoration: 'none',
      textTransform: 'uppercase',
      fontSize: '1.3rem',
      fontWeight: '500',
      color: '$gray700',

      transition: 'color 0.2s',
      '&:hover': {
        color: '$yellow',
      },
    },
  },
})
