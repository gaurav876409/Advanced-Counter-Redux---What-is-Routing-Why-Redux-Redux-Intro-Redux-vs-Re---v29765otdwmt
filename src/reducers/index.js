import { combineReducers } from 'redux';
const initialState = {
    counter: 0,
    isLogged: false,
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, counter: state.counter + 1 };
      case 'DECREMENT':
        return { ...state, counter: state.counter - 1 };
      case 'INCREMENTBYAMOUNT':
        return { ...state, counter: state.counter + action.payload };
      case 'SIGN_IN':
        return { ...state, isLogged: true };
      case 'SIGN_OUT':
        return { ...state, isLogged: false, counter: 0 };
      default:
        return state;
    }
  };
  const rootReducer = combineReducers({
    counter: counterReducer,
  });
  
  export default rootReducer;