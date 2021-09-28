import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  tickers: [
    {
      ticker: '',
      exchange: '',
      price: null,
      change: null,
      change_percent: null,
      dividend: null,
      yield: null,
      last_trade_time: '',
    }
  ],
};

const tickersSlice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    updateTickers(state, action) {
      state.tickers = [...action.payload];
    }
  },
});

// const store = configureStore({
//   reducer: {
//     tickers: tickersSlice.reducer,
//   }
// });

const store = configureStore({
  reducer: tickersSlice.reducer,
});

export const tickersActions = tickersSlice.actions;

export default store;