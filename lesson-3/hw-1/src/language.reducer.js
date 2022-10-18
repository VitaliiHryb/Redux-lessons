// опишите reducer, который будет устанавливать текущий язык интерфейса

import { SET_LANGUAGE } from './language.actions';

export default function reducer(state = 'en', action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload.language;
    default:
      return state;
  }
}
