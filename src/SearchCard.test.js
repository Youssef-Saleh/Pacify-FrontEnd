import React from 'react';
import { shallow } from 'enzyme';
import Card from './Components/SearchCard';

it('renders without crashing', () => {
  expect(shallow(<Card/>)).toMatchSnapshot();
});