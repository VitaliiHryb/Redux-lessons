import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UsersList from './users/UsersList';
import './index.scss';

function App() {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
}

export default App;
