import { styled } from '@/../stitches.config'

export const Button = styled('button', {
  '@sm': {
    position: 'static',
    width: 'auto',
    height: 'auto',
    margin: '0',
    overflow: 'visible',
    clip: 'auto',
    whiteSpace: 'normal',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$white',
    backgroundColor: '$yellow',
    padding: '0.5rem',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',

    transition: 'all 0.2s',
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
  '&:hover': {
    color: '$yellow',
    backgroundColor: 'Black',
  },
})
