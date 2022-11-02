export const GO_PREV_PAGE = 'GO_PREV';
export const GO_NEXT_PAGE = 'GO_NEXT';

export const goPrevPage = () => {
  return { type: GO_PREV_PAGE };
};

export const goNextPage = () => {
  return { type: GO_NEXT_PAGE };
};
