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

describe('sub of numbers', () => {
  test('it retrieves the correct number', () => {
    calcObject = calculate(calcObject, '6');
    calcObject = calculate(calcObject, '-');
    calcObject = calculate(calcObject, '5');
    calcObject = calculate(calcObject, '=');
    expect(calcObject.total).not.toBe('8');
  });

  test('it sub integer numbers', () => {
    calcObject = calculate(calcObject, '6');
    calcObject = calculate(calcObject, '-');
    calcObject = calculate(calcObject, '5');
    calcObject = calculate(calcObject, '=');
    expect(calcObject.total).toBe('1');
  });
});

describe('multiply of numbers', () => {
  test('it retrieves the correct number', () => {
    calcObject = calculate(calcObject, '6');
    calcObject = calculate(calcObject, 'x');
    calcObject = calculate(calcObject, '5');
    calcObject = calculate(calcObject, '=');
    expect(calcObject.total).not.toBe('8');
  });

  test('it multiply integer numbers', () => {
    calcObject = calculate(calcObject, '6');
    calcObject = calculate(calcObject, 'x');
    calcObject = calculate(calcObject, '5');
    calcObject = calculate(calcObject, '=');
    expect(calcObject.total).toBe('30');
  });
});

describe('divide of numbers', () => {
  test('it retrieves the correct number', () => {
    calcObject = calculate(calcObject, '30');
    calcObject = calculate(calcObject, '÷');
    calcObject = calculate(calcObject, '5');
    calcObject = calculate(calcObject, '=');
    expect(calcObject.total).not.toBe('8');
  });

  test('it divide integer numbers', () => {
    calcObject = calculate(calcObject, '30');
    calcObject = calculate(calcObject, '÷');
    calcObject = calculate(calcObject, '5');
    calcObject = calculate(calcObject, '=');
    expect(calcObject.total).toBe('6');
  });
});
