import { SHOW__SPINNER, USER_DATA_RECIEVED } from './users.actions';

const initialData = {
  isFetching: false,
  userData: null,
};

const usersReducer = (state = initialData, action) => {
  switch (action.type) {
    case SHOW__SPINNER: {
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
