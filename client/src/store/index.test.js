import { tickers, reducerForTesting, updateTickers } from './index';

describe('Reducer', () => {
  test('should return the initial state', () => {
    expect(reducerForTesting(tickers, {})).toEqual(tickers)
  })

  test('should update state', () => {
  const previousState = ['a', 'b', 'c']

  expect(reducerForTesting(
    previousState,
    updateTickers(['b', 'c', 'a'])))
      .toEqual(['b', 'c', 'a']
    )
  })
});
