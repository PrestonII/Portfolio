import { combineReducers } from 'redux';
import { useRouter } from 'next/router';

import counterReducer from '../features/counter/counter.slice';

function createRootReducer() {
  return combineReducers({
    counter: counterReducer,
  });
}

export const rootReducer = createRootReducer();