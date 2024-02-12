import { styled } from '../../../stitches.config'

export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& a': {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    textDecoration: 'none',
    fontSize: '1.2rem',
    color: '$gray700',

    transition: 'color 0.3s',
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
  '& div + div': {
    fontSize: '1.2rem',
  },
})
