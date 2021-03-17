/*
summary

this function makes a simple axios call to get user location ffrom their IP address

@return returns a promise with user location data
*/

import axios from 'axios'
import { ipLookupApi } from '../consts/config'

const getLocation = async () => {
  const options = {
    methhod: 'GET',
    url: ipLookupApi
  }

  try {
    const response = await axios.request(options)
    return response
  } catch (error) {
    return undefined
  }
}

export default getLocation
