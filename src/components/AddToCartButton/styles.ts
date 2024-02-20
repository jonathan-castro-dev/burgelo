import { styled } from '@/../stitches.config'

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  border: 'none',
  borderRadius: '3rem',
  paddingInline: '1rem',
  paddingBlock: '0.8rem',
  fontSize: '0.8rem',
  fontWeight: '500',
  textTransform: 'uppercase',
  color: '$white',
  backgroundColor: '$yellow',
  cursor: 'pointer',
  opacity: '0',
  transition: 'all 0.4s',
  '&:hover': {
    color: '$yellow',
    backgroundColor: 'Black',
  },
})
