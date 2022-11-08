import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserInfo from './users/UserInfo';
import SearchField from './users/SearchField';
import './index.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="page">
        <UserInfo />
        <SearchField />
      </div>
    </Provider>
  );
}

export default App;

// Algo
// 1. собрать данные из импута
// 2. сделать запрос и показать спиннер
// 3. получить данные и записать в стейт
// 4. спрятать спиннер
