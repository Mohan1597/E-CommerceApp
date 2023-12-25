import { configureStore } from '@reduxjs/toolkit';
import productslicereducer from './Slices/productslice';
import { combineReducers } from '@reduxjs/toolkit';

// combineReducers
const rootReducer = combineReducers({
  products: productslicereducer,
  // other slices...
});

const store = configureStore({
  reducer: rootReducer,
  // middleware: [thunk], // No need to explicitly add redux-thunk here
  // Other options can be added here
});

export default store;
