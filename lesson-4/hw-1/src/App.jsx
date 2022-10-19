// В файле src/App.jsx, опишите компоненту, которая провайдит store и рендерит UsersList
// Состояние храните Redux
// Начальное состояние store должно иметь вид { users: { usersList: [/* массив пользователей */], currentPage: 0 } }

// Обратите внимание, что хоть мы и храним начальную страницу под индексом 0,
// для пользователя первая страница должна отображаться под номером 1. В коде начинаем с нуля для упрощения расчетов.

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

/*
<div>
  <!-- pagination -->
  <div class="pagination">
    <button class="btn">←</button>
    <span class="pagination__page">1</span>
    <button class="btn">→</button>
  </div>
  
  <ul class="users">
    <li class="user">
      <span class="user__name">Bob</span>
      <span class="user__age">21</span>
    </li>
    ...
    <li class="user">
      <span class="user__name">Sam</span>
      <span class="user__age">45</span>
    </li>
  </ul>
</div>
*/
