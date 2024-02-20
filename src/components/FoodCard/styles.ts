import { styled } from '@/../stitches.config'

export const Card = styled('div', {
  position: 'relative',
  border: '1px solid #d5dae3',
  paddingInline: '4rem',
  paddingTop: '4.8rem',
  paddingBottom: '12rem',
  '&:hover': {
    '& .food-content': {
      bottom: '50px',
    },
    '& .food-content span': {
      opacity: '1',
    },
    '& .food-content button': {
      opacity: '1',
    },
  },
  '& .food-content': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.7rem',
    position: 'absolute',
    bottom: '-20px',
    left: '40px',
    transition: 'all 0.5s',
    '& h3': {
      fontSize: '1rem',
      fontWeight: '500',
    },
    '& strong': {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '$yellow',
    },
    '& span': {
      fontSize: '0.8rem',
      color: '$gray300',
      opacity: '0',
    },
  },
})
