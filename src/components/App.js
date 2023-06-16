import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn, signOut, incrementByAmount } from '../actions/action';


const App = () => {
  const [amount, setAmount] = useState(2);
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(parseInt(amount)));
  };

  const handleLogin = () => {
    dispatch(signIn());
  };

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <div>
      {isLogged ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <button onClick={handleIncrement}>+</button>
          <span data-testid="counter">{counter}</span>
          <button onClick={handleDecrement}>-</button>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={handleIncrementByAmount}>Add amount</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default App;
