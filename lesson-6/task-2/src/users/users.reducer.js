import { SHOW_SPINNER, USER_DATA_RECIEVED } from './users.actions';

// Для хранения данных используйте Redux Store. Начальное значение store - { users: { userData: null, isFetching: false } }

const initialData = {
  isFetching: false,
  userData: null,
};

const usersReducer = (state = initialData, action) => {
  switch (action.type) {
    case SHOW_SPINNER: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case USER_DATA_RECIEVED: {
      return {
        ...state,
        userData: action.payload.userData,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
