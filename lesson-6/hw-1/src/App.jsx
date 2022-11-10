import React from 'react';
import Weather from './weather/Weather';
import { Provider } from 'react-redux';
import store from './store';

// За списком городов обращайтесь по URL https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities
// const cities = [
//   { name: 'Lake Hilmaside', temperature: '78 F' },
//   { name: 'Lake Minnieberg', temperature: '8 F' },
//   { name: 'East Gerhardshire', temperature: '23 F' },
//   { name: 'Port Durward', temperature: '13 F' },
//   { name: 'New Ashashai', temperature: '40 F' },
//   { name: 'Dayton Town', temperature: '7 F' },
//   { name: 'Feesthaven', temperature: '64 F' },
//   { name: 'South Arvilla', temperature: '88 F' },
//   { name: 'East Dehardshine', temperature: '23 F' },
// ];

const App = () => {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
};

export default App;

// Algo
// 1. //

// За списком городов обращайтесь по URL https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities

// В файле src/App.jsx опишите компоненту, которая отрисует компоненту Weather и запровайдит redux store в приложение
