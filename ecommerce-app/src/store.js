import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; // Import redux-thunk middleware
import reducer from './reducer';

const store = configureStore({
  reducer: reducer,
  middleware: [thunk], // Add thunk middleware
  // Other options can be added here
});

export default store;
