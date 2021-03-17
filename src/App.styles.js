import styled from 'styled-components'
import theme from './theme/theme.styles'

export const Container = styled('div')`
  width: 100%;
  padding: 0 ${theme.spacing.s2};

  @media ${theme.device.tablet} {
    max-width: 736px;
    margin: 0 auto;
  }

  @media ${theme.device.laptop} {
    max-width: 1200px;
  }
`

export const CardWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow: scroll;
  padding: 0 0 ${theme.spacing.s2} 0;
  margin: 0 0 ${theme.spacing.s4} 0;

  @media ${theme.device.tablet} {
    justify-content: space-between;
  }
`

export const ChangeButton = styled('button')`
  display: block;
  width: 100%;
  padding: ${theme.spacing.s1} ${theme.spacing.s2};
  background: ${theme.color.black};
  font-size: ${theme.fonts.size.small};
  font-weight: ${theme.fonts.weight.semi};
  text-transform: uppercase;
  color: ${theme.color.white};

  @media ${theme.device.tablet} {
    width: auto;
    margin: 0 auto;
  }

  &:hover {
    opacity: 0.8;
  }
`
