import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions';

const initialState = {
  usersList: [],
};

export default function reduser(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: [...state.usersList, action.payload.userData],
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(
          ({ id }) => id !== action.payload.userId,
        ),
      };
    default:
      return state;
  }
}
