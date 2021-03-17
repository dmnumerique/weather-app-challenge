import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Heading,
  Text,
  InfoContainer,
  CurrentWeather,
  Temp
} from './FeatureCard.styles'
import { iconsPath } from '../../consts/config'

const FeatureCard = ({
  location,
  date,
  icon,
  temp,
  description,
  precip,
  wind,
  uv
}) => {
  const { city } = location
  const formattedDate = new Date(date).toDateString()
  return (
    <Card>
      <Heading>{city}</Heading>
      <Text>{formattedDate}</Text>
      <Text>{description}</Text>
      <InfoContainer>
        <CurrentWeather>
          <img src={`${iconsPath}${icon}.png`} alt={description} />
          <Temp>{temp}&deg;</Temp>
        </CurrentWeather>
        <div>
          <Text>Precipitation: {precip}</Text>
          <Text>Wind: {wind}</Text>
          <Text>UV: {uv}</Text>
        </div>
      </InfoContainer>
    </Card>
  )
}

FeatureCard.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string
  }).isRequired,
  date: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  precip: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  uv: PropTypes.number.isRequired
}

export default FeatureCard
