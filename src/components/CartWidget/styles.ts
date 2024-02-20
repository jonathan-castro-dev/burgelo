import { styled } from '@/../stitches.config'

export const Cart = styled('a', {
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
})
