import React, { useState } from 'react';
// import { Link, BrowserRouter, Route } from 'react-router-dom';
// import Products from './Products';
// import Home from './Home';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter">
      <button
        className="counter__button"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
      <span className="counter__value" onClick={() => setCounter(0)}>
        {counter}
      </span>
      <button
        className="counter__button"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
    </div>
  );
};

/*
class Counter extends React.Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  reset = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <div className="counter">
        <button className="counter__button" onClick={this.decrement}>
          -
        </button>
        <span className="counter__value">{this.state.counter}</span>
        <button className="counter__button" onClick={this.increment}>
          +
        </button>
        <button className="counter__button_reset" onClick={this.reset}>
          reset
        </button>
      </div>
    );
  }
}
*/

export default Counter;

// "TypeError: Cannot read property 'textContent' of null\n

/*
<Switch>
  <Route exact path="/">
    <Home />
  </Route>
  <Route path="/products">
    <Products />
  </Route>
</Switch>;
*/
