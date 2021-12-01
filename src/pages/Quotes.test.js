import TestRenderer from 'react-test-renderer';
import Quotes from './Quotes';

test('matches home snapshot', () => {
  const tree = TestRenderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
