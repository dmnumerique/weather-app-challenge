/* eslint-disable react/jsx-props-no-spreading */
import renderer from 'react-test-renderer'
import React from 'react'
import FeatureCard from './index'

const defaultProps = {
  location: {
    city: 'Melbourne'
  },
  date: '2021-03-17',
  icon: 'c01d',
  temp: 19,
  description: 'Windy',
  precip: 1,
  wind: 1.75,
  uv: 7.15
}

it('should render with default props', () => {
  const tree = renderer.create(<FeatureCard {...defaultProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})
