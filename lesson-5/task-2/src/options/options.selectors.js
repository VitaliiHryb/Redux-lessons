import { createSelector } from 'reselect';

export const optionsListSelector = state => {
  return state.options.optionsList;
};

export const selectedIdsSelector = state => {
  return state.options.selected;
};

export const selectedOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (allOptionsList, selectedIds) =>
    allOptionsList.filter(option => selectedIds.includes(option.id)),
);

// export const selectedOptionsSelectors = state => {
//   const allOptionsList = optionsListSelector(state);
//   const selectedIds = selectedIdsSelector(state);

//   return allOptionsList.filter(option => selectedIds.includes(option.id));
// };

export const availableOptionsSelectors = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (allOptionsList, selectedIds) =>
    allOptionsList.filter(option => !selectedIds.includes(option.id)),
);

// export const availableOptionsSelectors = state => {
//   const allOptionsList = optionsListSelector(state);
//   const selectedIds = selectedIdsSelector(state);

//   return allOptionsList.filter(option => !selectedIds.includes(option.id));
// };
