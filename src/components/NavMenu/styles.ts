import { styled } from '@/../stitches.config'

export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '1rem',
  '& .sr-only': {
    width: '10rem',
  },
  '& ul': {
    display: 'flex',
    alignItems: 'center',
    gap: '1.6rem',
    listStyle: 'none',
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
  '& .secondary-menu': {
    display: 'flex',
    alignItems: 'center',
    gap: '4rem',
  },
  '& .cart': {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    textDecoration: 'none',
    color: '$gray700',
    '& .items-in-cart': {
      width: '1.3rem',
      height: '1.3rem',
      borderRadius: '100%',
      backgroundColor: '$yellow',
      color: '$gray700',
      fontSize: '0.9rem',
      textAlign: 'center',
    },
    '&:hover': {
      '& svg': {
        fill: '$yellow',
      },
      '& .items-in-cart': {
        color: '$yellow',
        backgroundColor: '$gray700',
      },
    },
  },
})

export const SocialLinks = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.8rem',
  '& svg:hover': {
    fill: '$yellow',
  },
})
