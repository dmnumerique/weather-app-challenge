/* eslint-disable react/jsx-props-no-spreading */
import renderer from 'react-test-renderer'
import React from 'react'
import WeatherCard from './index'

const defaultProps = {
  date: '2021-03-17',
  icon: 'c01d',
  description: 'Windy',
  min: 17,
  max: 22
}

it('should render with default props', () => {
  const tree = renderer.create(<WeatherCard {...defaultProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})
