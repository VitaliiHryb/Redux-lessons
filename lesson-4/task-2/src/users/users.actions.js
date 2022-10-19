export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export function addUser(userData) {
  return {
    type: ADD_USER,
    payload: { userData },
  };
}

export function deleteUser(userId) {
  return {
    type: DELETE_USER,
    payload: { userId },
  };
}

export function updateUser(userId, userData) {
  return {
    type: UPDATE_USER,
    payload: { userId, userData },
  };
}
