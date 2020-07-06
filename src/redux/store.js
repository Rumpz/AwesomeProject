import logger from 'redux-logger';

import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import {CounterReducer} from 'slices';

const DEV_ENV = process.env.NODE_ENV !== 'production';

const rootReducer = combineReducers({
  counter: CounterReducer,
});

const middleware = [...getDefaultMiddleware(), DEV_ENV && logger];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: DEV_ENV,
});

export default store;
