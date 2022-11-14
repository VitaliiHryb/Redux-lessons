import React from 'react';
// import { useState } from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../counter.actions';

const Counter = ({ counter, increment, decrement, reset }) => {
  // const [counter, setCounter] = useState(0);
  return (
    <div className="counter">
      <button className="counter__button" onClick={decrement}>
        -
      </button>

      <span className="counter__value" onClick={reset}>
        {counter}
      </span>

      <button className="counter__button" onClick={increment}>
        +
      </button>
    </div>
  );
};

const mapState = state => {
  return {
    counter: state,
  };
};

const mapDispatch = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset,
};

const connector = connect(mapState, mapDispatch); //HOC

export default connector(Counter);
