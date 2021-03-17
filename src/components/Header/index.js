import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Wrapper,
  Heading,
  SearchWrapper,
  SearchCity,
  SearchCountry,
  SearchButton
} from './Header.styles'

const Header = ({ onSearch }) => {
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  return (
    <Wrapper>
      <Heading>Weather App</Heading>
      <SearchWrapper>
        <SearchCity
          type="text"
          name="city"
          aria-label="City name"
          placeholder="Enter city name"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <SearchCountry
          type="text"
          placeholder="Enter country code"
          name="country"
          aria-label="2 digit country code"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        />
        <SearchButton type="submit" onClick={() => onSearch({ city, country })}>
          Go
        </SearchButton>
      </SearchWrapper>
    </Wrapper>
  )
}

Header.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default Header
