export const increment = () => {
    return {
      type: 'INCREMENT',
    };
  };
  
  export const decrement = () => {
    return {
      type: 'DECREMENT',
    };
  };
  
  export const signIn = () => {
    return {
      type: 'SIGN_IN',
    };
  };
  
  export const signOut = () => {
    return {
      type: 'SIGN_OUT',
    };
  };
  
  export const incrementByAmount = (amount) => {
    return {
      type: 'INCREMENTBYAMOUNT',
      payload: amount,
    };
  };
  