import renderer from 'react-test-renderer'
import React from 'react'
import Header from './index'

it('should render with default props', () => {
  const tree = renderer.create(<Header onSearch={() => {}} />).toJSON()
  expect(tree).toMatchSnapshot()
})
