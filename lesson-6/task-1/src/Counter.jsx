import React from 'react';
import { connect } from 'react-redux';
// import { decrement, increment, reset } from './counter.actions';
import * as counterActions from './counter.actions';
// import store from './store';
// import { Provider } from 'react';

const Counter = ({ counter, decrement, increment, reset }) => {
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

const mapState = (state, props) => {
  return {
    counter: state,
  };
};

const mapDispatch = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset,
};

export default connect(mapState, mapDispatch)(Counter);
