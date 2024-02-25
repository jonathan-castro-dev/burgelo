import { styled } from '../../../stitches.config'

export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& a': {
    '@sm': {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      borderWidth: '0',
    },
    '@md': {
      position: 'static',
      width: 'auto',
      height: 'auto',
      padding: '0',
      margin: '0',
      overflow: 'visible',
      clip: 'auto',
      whiteSpace: 'normal',
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      textDecoration: 'none',
      fontSize: '1.2rem',
      color: '$gray700',

      transition: 'color 0.3s',
    },
  },
  '& a:hover': {
    color: '$yellow',
  },
  '& div': {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
  },
  '& h1': {
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  '& .location': {
    '@sm': {
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
    '@md': {
      position: 'static',
      width: 'auto',
      height: 'auto',
      padding: '0',
      margin: '0',
      overflow: 'visible',
      clip: 'auto',
      whiteSpace: 'normal',
    },
  },
})
