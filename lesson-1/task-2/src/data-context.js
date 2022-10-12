import React from 'react';

export const data = {
  userData: {
    name: '',
    avatar_url: '',
  },
};

export const DataContext = React.createContext(data.userData);
