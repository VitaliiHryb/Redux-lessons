import { createStore } from 'redux';
import reduser from './users/users.reducer';

const store = createStore(reduser);

export default store;
