import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';
import './index.scss';

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;

/*
<!-- App -->
<!-- Provider -->
<!-- Counter -->
<div class="counter">
  <button class="counter__button">
    -
  </button>
  <span class="counter__value">
    17
  </span>
  <button class="counter__button">
    +
  </button>
</div>
*/
