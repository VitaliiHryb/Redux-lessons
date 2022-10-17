// Стейт по умолчанию должен выглядеть: {  usersList: [] }
// опишите reducer, который будет:
// 1. добавлять пользователя в состояние
// 2. удалять пользователя из состояния

import { ADD_USER, DELETE_USER } from './users.actions';

const initialState = {
  usersList: [],
};

export default function reduser(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: [...state.usersList, action.payload],
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
}
