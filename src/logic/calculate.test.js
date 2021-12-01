import calculate from './calculate';

let calcObject = { total: '0', next: null, operation: null };

beforeEach(() => {
  calcObject = { total: '0', next: null, operation: null };
});

describe('sum of numbers', () => {
  test('it retrieves the correct number', () => {
    calcObject = calculate(calcObject, '1');
    calcObject = calculate(calcObject, '+');
    calcObject = calculate(calcObject, '5');
    calcObject = calculate(calcObject, '=');
    expect(calcObject.total).not.toBe('8');
  });

  test('it adds integer numbers', () => {
    calcObject = calculate(calcObject, '1');
    calcObject = calculate(calcObject, '+');
    calcObject = calculate(calcObject, '5');
    calcObject = calculate(calcObject, '=');
    expect(calcObject.total).toBe('6');
  });
});
