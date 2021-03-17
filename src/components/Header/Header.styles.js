import styled from 'styled-components'
import theme from '../../theme/theme.styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.color.black};
  withh: 100%;
  padding: ${theme.spacing.s1} ${theme.spacing.s2};
  margin: 0 0 ${theme.spacing.s3} 0;

  @media ${theme.device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Heading = styled.h1`
  color: ${theme.color.white};
  font-weight: ${theme.fonts.weight.semi};
  font-size: ${theme.fonts.size.h4};
  margin: 0 0 ${theme.spacing.s2} 0;

  @media ${theme.device.tablet} {
    font-size: ${theme.fonts.size.h3};
    margin: 0;
  }
`

export const SearchWrapper = styled.div`
  display: flex;
`

export const SearchCity = styled.input`
  width: 50%;
  padding: ${theme.spacing.s1};

  @media ${theme.device.tablet} {
    min-width: 300px;
    width: auto;
  }
`

export const SearchCountry = styled.input`
  width: 50%;
  padding: ${theme.spacing.s1};

  @media ${theme.device.tablet} {
    min-width: 30px;
    width: auto;
  }
`

export const SearchButton = styled.button`
  padding: ${theme.spacing.s1} ${theme.spacing.s2};
`
