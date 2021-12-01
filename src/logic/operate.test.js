import operate from './operate';

describe('tests for All operations', () => {
  test('it expects 2 + 5 to be 7', () => {
    expect(operate(2, 5, '+')).toEqual('7');
  });
  test('it expects 6 - 2 to be 4', () => {
    expect(operate(6, 2, '-')).toEqual('4');
  });
  test('it expects 6 x 2 to be 12', () => {
    expect(operate(6, 2, 'x')).toEqual('12');
  });
  test('it expects 6 ÷ 2 to be 3', () => {
    expect(operate(6, 2, '÷')).toEqual('3');
  });
});
