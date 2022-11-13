import { INCREMENT, DECREMENT, RESET } from './counter.actions';

const initialState = 0;

export default function counterReduser(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
}
