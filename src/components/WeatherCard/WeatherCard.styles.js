import styled from 'styled-components'
import theme from '../../theme/theme.styles'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${theme.spacing.s2} 0 0;

  @media ${theme.device.tablet} {
    padding: 0 ${theme.spacing.s2} 0 0;
  }
`

export const Day = styled.p`
  font-weight: bold;
  font-size: ${theme.fonts.size.p};
  margin: 0 0 ${theme.spacing.s1} 0;

  @media ${theme.device.tablet} {
    font-size: ${theme.fonts.size.h5};
  }
`

export const Icon = styled.img`
  width: 60%;
  margin: 0 0 ${theme.spacing.s1} 0;

  @media ${theme.device.tablet} {
    width: 75%;
  }
`

export const Temp = styled.span`
  color: ${(props) => (props.isHigh ? theme.color.black : theme.color.gray)};
  font-weight: ${(props) =>
    props.isHigh ? theme.fonts.weight.semi : theme.fonts.weight.regular};
  margin-right: ${(props) => (props.isHigh ? theme.spacing.s1 : 0)};
  font-size: ${theme.fonts.size.sm};

  @media ${theme.device.tablet} {
    font-size: ${theme.fonts.size.p};
  }
`
