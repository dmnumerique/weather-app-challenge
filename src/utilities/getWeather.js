/*
summary

this function makes a simple axios call to get weather data from the API based on location provided

@params location is an object with city name and country code, unit is set to metric by default
@return returns a promise with data for next 7 days weather
*/

import axios from 'axios'
import { weatherApiKey, weatherApiUrl } from '../consts/config'

const getWeather = async (location, unit = 'metric') => {
  const options = {
    method: 'GET',
    url: weatherApiUrl,
    params: {
      city: location.city,
      country: location.country,
      days: '7',
      units: unit,
      key: weatherApiKey
    }
  }

  try {
    const response = await axios.request(options)
    return response
  } catch (error) {
    return undefined
  }
}

export default getWeather
