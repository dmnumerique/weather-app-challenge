import React from 'react'
import PropTypes from 'prop-types'
import { Card, Day, Icon, Temp } from './WeatherCard.styles'
import { iconsPath } from '../../consts/config'

const WeatherCard = ({ date, icon, description, min, max }) => {
  const getDayName = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const today = new Date().getDay()
    const d = new Date(date).getDay()
    return d === today ? 'Today' : days[d]
  }

  return (
    <Card>
      <Day>{getDayName()}</Day>
      <Icon src={`${iconsPath}${icon}.png`} alt={description} />
      <div>
        <p>
          <Temp isHigh>{Math.round(max)}&deg;</Temp>
          <Temp>{Math.round(min)}&deg;</Temp>
        </p>
      </div>
    </Card>
  )
}

WeatherCard.propTypes = {
  date: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
}

export default WeatherCard
