import styled from 'styled-components'
import theme from '../../theme/theme.styles'

export const Card = styled.div`
  padding: 0 0 ${theme.spacing.s3} 0;
  margin: 0 0 ${theme.spacing.s3} 0;
  border-bottom: 1px solid ${theme.color.gray};

  @media ${theme.device.tablet} {
    padding: 0 0 ${theme.spacing.s1} 0;
    margin: 0 0 ${theme.spacing.s4} 0;
  }
`

export const Heading = styled.h2`
  font-size: ${theme.fonts.size.h3};
  margin: 0 0 ${theme.spacing.s1} 0;
  text-transform: uppercase;

  @media ${theme.device.tablet} {
    font-size: ${theme.fonts.size.h2};
  }
`

export const Text = styled.p`
  color: ${theme.color.gray};
`

export const InfoContainer = styled.div`
  @media ${theme.device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Temp = styled.p`
  font-size: ${theme.fonts.size.h4};
  font-weight: ${theme.fonts.weight.semi};

  @media ${theme.device.tablet} {
    font-size: ${theme.fonts.size.h3};
  }
`
export const CurrentWeather = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
