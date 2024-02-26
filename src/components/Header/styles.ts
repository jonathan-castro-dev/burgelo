import { styled } from '../../../stitches.config'

export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& a': {
    '@sm': {
      display: 'none',
    },
    '@md': {
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
      display: 'none',
    },
    '@md': {
      display: 'block',
    },
  },
})

export const Div = styled('div', {
  '@sm': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  },
  '@md': {
    display: 'none',
  },
  '& a': {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    textDecoration: 'none',
    fontSize: '1.2rem',
    color: '$gray700',

    transition: 'color 0.3s',
    '&:hover': {
      color: '$yellow',
    },
  },
  '& div': {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
})
