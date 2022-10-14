// actionCreators, которые будут:
// 1. добавлять пользователя в состояние (пример использования addUser({ id: 76, name: 'Sarah' }))
// 2. удалять пользователя из состояния (пример использования deleteUser(76), где 76 - id пользователя)

export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user,
  };
}

export function deleteUser(userId) {
  return {
    type: DELETE_USER,
    payload: userId,
  };
}
