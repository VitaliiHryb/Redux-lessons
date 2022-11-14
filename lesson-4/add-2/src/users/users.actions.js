export const ADD_USER = 'USERS/ADD_USER';
export const DELETE_USER = 'USERS/DELETE_USER';

export const addUser = userId => {
  return {
    type: ADD_USER,
    payload: { userId },
  };
};

export const deleteUser = userId => {
  return {
    type: DELETE_USER,
    payload: { userId },
  };
};
