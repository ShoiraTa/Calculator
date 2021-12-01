import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quotes';

test('matches home snapshot', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
