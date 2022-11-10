import { fetchWeatherData } from './weather.gateway';

export const GET_DATA = 'WEATHER/GET_DATA';

// В файле src/weather/weather.actions.js опишите компоненту, сделает запрос за списком городов и отрисует этот список на страницу
// Асинхронный action creator для запроса за списком городов getWeatherData должен находится в файле src/weather/weather.actions.js и экспортироваться под своим именем

export const setWeatherData = citiesData => {
  return {
    type: GET_DATA,
    payload: {
      citiesData,
    },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    fetchWeatherData().then(data => {
      dispatch(setWeatherData(data));
    });
  };
};
