import { ADD_USER, DELETE_USER } from './users.actions';

const initialState = [];

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };

    case DELETE_USER:
      return {
        ...state,
        userList: [...state.userList].filter(({ id }) => id !== action.payload),
      };

    default:
      return state;
  }
}
