import operate from './operate';

describe('tests for ADD operation', () => {
  test('it expects 2 + 5 to be 7', () => {
    expect(operate(2, 5, '+')).toEqual('7');
  });
});
