import { combineReducers } from 'redux';

const initialState = {
  counter: 0,
  isLogged: false,
};

const counterReducer = (state = initialState.counter, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'INCREMENTBYAMOUNT':
      return state + action.payload;
    default:
      return state;
  }
};

const isLoggedReducer = (state = initialState.isLogged, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return true;
    case 'SIGN_OUT':
      return false;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
});

export default rootReducer;
