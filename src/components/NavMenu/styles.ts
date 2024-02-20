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
