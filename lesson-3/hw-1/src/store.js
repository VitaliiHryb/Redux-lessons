// создайте store с описанными выше редьюсерами
// + Стейт по умолчанию должен выглядеть: { language: 'en', user: null, cart: { products: [] }}
import { createStore, combineReducers } from 'redux';
import user from './user.reducer';
import cart from './cart.reducer';
import language from './language.reducer';

const appReduser = combineReducers({ user, cart, language });

const store = createStore(appReduser);

export default store;
