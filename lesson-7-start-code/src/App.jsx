import React from 'react';
import TodoList from './tasks/components/TodoList';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;

// Algo
// 1.

/*
<div id="root">
    <!-- TodoList -->
    <h1 class="title">Todo List</h1>
    <main class="todo-list">
        <!-- CreateTaskInput -->
        <div class="create-task">
            <input class="create-task__input" type="text" value="">
            <button class="btn create-task__btn">Create</button>
        </div>
        <!-- TasksList -->
        <ul class="list">
            <!-- Task -->
            <li class="list-item">
                <input type="checkbox" class="list-item__checkbox">
                Learn React
                <button class="list-item__delete-btn"></button>
            </li>
            <!-- Task -->
            <li class="list-item list-item_done">
                <input type="checkbox" class="list-item__checkbox">
                Lear HTML / CSS
                <button class="list-item__delete-btn"></button>
            </li>
            <!-- Task -->
            <li class="list-item list-item_done">
                <input type="checkbox" class="list-item__checkbox">
                Learn JavaScript
                <button class="list-item__delete-btn"></button>
            </li>
            <!-- Task -->
            <li class="list-item list-item_done">
                <input type="checkbox" class="list-item__checkbox">
                Learn Dev Tools
                <button class="list-item__delete-btn"></button>
            </li>
        </ul>
    </main>
</div>
*/
