// создайте store с описанным выше редьюсером.
// Стейт по умолчанию должен выглядеть: {  usersList: [] }
// store должен экспортироваться из файла но умолчанию

import { createStore } from 'redux';
import reduser from './users.reducer';

const store = createStore(reduser);

export default store;
