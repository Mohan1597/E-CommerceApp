import { configureStore } from '@reduxjs/toolkit';
import productslice from './Slices/productSlice';
import { combineReducers } from '@reduxjs/toolkit';
import productslicereducer from './Slices/productSlice';

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