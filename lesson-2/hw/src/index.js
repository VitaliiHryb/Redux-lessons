//  импортируйте store из файла src/store.js
// сделайте dispatch созданных actions в store.
// Подпишитесь на изменения store, чтобы видеть как он меняется

import store from './store';
import { addUser, deleteUser } from './users.actions';

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(addUser({ id: 77, name: 'Tom' }));
store.dispatch(deleteUser(77));

store.subscribe(() => {
  console.log(store.getState());
});
