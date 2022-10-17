// создайте store с описанным выше редьюсером.
// store должен экспортироваться из файла но умолчанию

import { createStore } from 'redux';
import reduser from './users.reducer';

const store = createStore(reduser);

export default store;
