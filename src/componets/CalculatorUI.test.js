import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorUI from './CalculatorUI';

test('matches home snapshot', () => {
  const tree = renderer.create(<CalculatorUI />).toJSON();
  expect(tree).toMatchSnapshot();
});
