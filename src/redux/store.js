import logger from 'redux-logger';
import {
  combineReducers,
  createStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import {counterSlice} from './slices';

console.log(counterSlice);
const rootReducer = combineReducers({
  counter: counterSlice,
});

const store = createStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware().concat(logger),
});

export default store;
