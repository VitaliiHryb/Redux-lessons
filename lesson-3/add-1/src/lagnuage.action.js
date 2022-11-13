export const LAGNGUAGE = 'LAGNGUAGE';

export const setLanguage = language => {
  return {
    type: LAGNGUAGE,
    payload: language,
  };
};
