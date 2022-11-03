import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TransferList from './options/TransferList';
import './index.scss';

function App() {
  return (
    <Provider store={store}>
      <TransferList />
    </Provider>
  );
}

export default App;
