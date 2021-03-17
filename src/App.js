import React, { useState, useEffect } from 'react'
import GlobalStyle from './theme/globalStyles.styles'
import getWeather from './utilities/getWeather'
import Header from './components/Header'
import FeatureCard from './components/FeatureCard'
import WeatherCard from './components/WeatherCard'
import { Container, CardWrapper, ChangeButton } from './App.styles'

function App() {
  const [location, setLocation] = useState({ city: 'melbourne', country: 'au' })
  const [weather, setWeather] = useState(null)
  const [unit, setUnit] = useState('metric')

  const handleSearch = (city, country) => {
    setLocation({ ...city, ...country })
  }

  const handleUnitChange = (newUnit) => {
    if (newUnit !== unit) {
      setUnit(newUnit)
    }
  }

  useEffect(() => {
    getWeather(location, unit).then((res) => setWeather(res.data))
  }, [location, unit])

  return (
    <>
      <GlobalStyle />
      <Header onSearch={(city, country) => handleSearch(city, country)} />
      <Container>
        {weather ? (
          weather.data && (
            <>
              <FeatureCard
                location={location}
                date={weather.data[0].valid_date}
                icon={weather.data[0].weather.icon}
                description={weather.data[0].weather.description}
                precip={weather.data[0].precip}
                temp={weather.data[0].temp}
                wind={weather.data[0].wind_spd}
                uv={weather.data[0].uv}
              />
              <CardWrapper>
                {weather.data.map((item) => (
                  <WeatherCard
                    key={`${item.valid_date}`}
                    date={item.valid_date}
                    icon={item.weather.icon}
                    description={item.weather.description}
                    temp={item.temp}
                    min={item.min_temp}
                    max={item.max_temp}
                  />
                ))}
              </CardWrapper>
              <ChangeButton
                onClick={() =>
                  handleUnitChange(unit === 'metric' ? 'imperial' : 'metric')
                }
              >
                Change unit to {unit === 'metric' ? 'imperial' : 'metric'}
              </ChangeButton>
            </>
          )
        ) : (
          <p>The location {location.city} does not exist</p>
        )}
      </Container>
    </>
  )
}

export default App
