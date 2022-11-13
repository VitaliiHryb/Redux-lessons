import { createStore, combineReducers } from 'redux';
import counterReduser from './counter.reducer';
import usersReducer from './users.reducer';
import languageReducer from './language.reducer';

const appReducer = combineReducers({
  counter: counterReduser,
  users: usersReducer,
  languages: languageReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
