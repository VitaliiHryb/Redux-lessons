import React from 'react';
import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as weatherActions from './weather.actions';
import City from './City';

const Weather = ({ weather, getWeatherData }) => {
  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weather.map(data => (
          <City key={data.id} cityWeatherData={data} />
        ))}
      </ul>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    weather: state.weather.citiesData,
  };
};

// City.propTypes = {
//   cityData: PropTypes.object,
// };

// City.defaultValue = {
//   cityData: [],
// };

export default connect(mapStateToProps, weatherActions)(Weather);
