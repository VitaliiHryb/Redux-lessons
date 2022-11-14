import { combineReducers, createStore } from 'redux';
import counterReduser from './counter.reducer';
import usersReducer from './users/users.reducer';

const appReducer = combineReducers({
  counterReduser,
  usersReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
