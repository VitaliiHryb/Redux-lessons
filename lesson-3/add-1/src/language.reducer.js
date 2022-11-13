import { lANGUAGE } from './counter.actions';

export default languageReducer = (state = 'jp', action) => {
  switch (action.type) {
    case lANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case dafault:
      return state;
  }
};
