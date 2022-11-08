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

/*
<!-- App -->
<div class="page">
    <!-- UserInfo -->
    <div class="user">
        <img alt="User Avatar" src="https://avatars0.githubusercontent.com/u/10639145?v=4" class="user__avatar">
        <div class="user__info">
            <span class="user__name">Apple</span>
            <span class="user__location">Cupertino, CA</span>
        </div>
    </div>
    <!-- Spinner -->
    <span class="spinner"></span>
    <!-- SearchField -->
    <div class="name-form">
        <input type="text" class="name-form__input">
        <button class="name-form__btn btn">Show</button>
    </div>
</div>
*/
