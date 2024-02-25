import { styled } from '@/../stitches.config'

export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '1rem',
  '@sm': {
    justifyContent: 'space-between',
  },
  '@md': {
    justifyContent: 'flex-end',
  },
  '& ul': {
    '@sm': {
      display: 'none',
    },
    '@md': {
      display: 'flex',
      alignItems: 'center',
      gap: '1.6rem',
      marginRight: '20rem',
      listStyle: 'none',
    },
  },
  '& ul a': {
    textDecoration: 'none',
    color: '$gray700',
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    transition: 'color 0.3s',
  },
  '& ul a:hover': {
    color: '$yellow',
  },
  '& .social-menu': {
    marginRight: '4rem',
    '& a + a': {
      marginLeft: '0.8rem',
    },
    '& a svg:hover': {
      fill: '$yellow',
    },
  },
})
