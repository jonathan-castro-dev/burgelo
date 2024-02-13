import { styled } from '@/../stitches.config'

export const Button = styled('button', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  border: 'none',
  fontSize: '1.5rem',
  fontWeight: '500',
  textTransform: 'uppercase',
  color: '$gray700',
  backgroundColor: '$white',
  cursor: 'pointer',
  transition: 'color 0.3s',
  '&:hover': {
    color: '$yellow',
  },
  '& svg': {
    fill: '$gray700',
    color: '$gray700',
    fontSize: '2.8rem',
  },
})
