import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; // Import redux-thunk middleware
import productslicereducer from './Slices/productslice';

const store = configureStore({
  reducer: productslicereducer,
  middleware: [thunk], // Add thunk middleware
  // Other options can be added here
});

export default store;
