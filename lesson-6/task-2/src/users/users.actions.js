export const SHOW__SPINNER = 'SHOW__SPINNER';
export const USER_DATA_RECIEVED = 'USER_DATA_RECIEVED';
import { getUserData } from './users.gateway';

export function showSpinner() {
  return {
    type: SHOW__SPINNER,
  };
}

export const userDataRecieved = userData => {
  return {
    type: USER_DATA_RECIEVED,
    payload: {
      userData,
    },
  };
};

export const fetchUserData = userName => {
  return function (dispatch, getState) {
    dispatch(showSpinner());
    getUserData(userName).then(userData => {
      // console.log(userData);
      dispatch(userDataRecieved(userData));
    });
  };
};
