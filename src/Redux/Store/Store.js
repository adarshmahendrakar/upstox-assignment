// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Reducers/indexReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;